# Sampling profile

Collected 300 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| stdlib   | 97.0% |     291 |
| ours     |  3.0% |       9 |

Hidden functions account for 96.7% of samples taken, so the hottest are also shown.

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                      | Location                                                   |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 8.7% |      26 | `newArray(Class, int)`                                                                                        | `java.lang.reflect.Array`                                  |
| 4.0% |      12 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
| 4.0% |      12 | `putVal(int, Object, Object, boolean, boolean)`                                                               | `java.util.HashMap`                                        |
| 2.7% |       8 | `matches(Method, String, Class[])`                                                                            | `java.lang.PublicMethods$Key`                              |
| 2.3% |       7 | `addArgumentForm(int, LambdaForm$BasicType)`                                                                  | `java.lang.invoke.LambdaFormEditor`                        |
| 2.3% |       7 | `getReturnState(int)`                                                                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
| 2.0% |       6 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`       |
| 2.0% |       6 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                        |
| 2.0% |       6 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                                  |
| 1.7% |       5 | `get(Object)`                                                                                                 | `java.util.concurrent.ConcurrentHashMap`                   |
| 1.7% |       5 | `hashCodeRange(int, int)`                                                                                     | `java.util.ArrayList`                                      |
| 1.7% |       5 | `prepare()`                                                                                                   | `java.lang.invoke.LambdaForm`                              |
| 1.7% |       5 | `<init>(Method, boolean)`                                                                                     | `java.lang.invoke.MemberName`                              |
| 1.3% |       4 | `resize()`                                                                                                    | `java.util.HashMap`                                        |
| 1.3% |       4 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                                          | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`      |
| 1.3% |       4 | `execute(Lexer, CharStream, int)`                                                                             | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`    |
| 1.0% |       3 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`                 | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
| 1.0% |       3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                                 | `java.util.zip.Inflater`                                   |
| 1.0% |       3 | `equals(Object, Object)`                                                                                      | `java.util.Objects`                                        |
| 1.0% |       3 | `valueConversion(Class, Class, boolean, boolean)`                                                             | `java.lang.invoke.MethodHandleImpl`                        |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 33.3% |       4 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1748` |
| 25.0% |       3 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1809` |
| 16.7% |       2 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1759` |
| 16.7% |       2 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1789` |
|  8.3% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1703` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 41.7% |       5 | `java.util.HashMap:644` |
| 25.0% |       3 | `java.util.HashMap:646` |
|  8.3% |       1 | `java.util.HashMap:669` |
|  8.3% |       1 | `java.util.HashMap:648` |
|  8.3% |       1 | `java.util.HashMap:635` |

##### `matches(Method, String, Class[])` (`java.lang.PublicMethods$Key`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       8 | `java.lang.PublicMethods$Key:108` |

##### `addArgumentForm(int, LambdaForm$BasicType)` (`java.lang.invoke.LambdaFormEditor`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       7 | `java.lang.invoke.LambdaFormEditor:611` |

##### `getReturnState(int)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       7 | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext:50` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 83.3% |       5 | `java.util.HashMap:582` |
| 16.7% |       1 | `java.util.HashMap:585` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       6 | `java.lang.reflect.Array:78` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|     % | Samples | Location                                     |
| ----: | ------: | -------------------------------------------- |
| 80.0% |       4 | `java.util.concurrent.ConcurrentHashMap:946` |
| 20.0% |       1 | `java.util.concurrent.ConcurrentHashMap:940` |

##### `hashCodeRange(int, int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       5 | `java.util.ArrayList:677` |

##### `prepare()` (`java.lang.invoke.LambdaForm`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       5 | `java.lang.invoke.LambdaForm:807` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       5 | `java.lang.invoke.MemberName:535` |

##### `resize()` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 75.0% |       3 | `java.util.HashMap:741` |
| 25.0% |       1 | `java.util.HashMap:720` |

##### `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       4 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator:345` |

##### `execute(Lexer, CharStream, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       4 | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor:167` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       3 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:298` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       3 | `java.util.Objects:64` |

##### `valueConversion(Class, Class, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       3 | `java.lang.invoke.MethodHandleImpl:404` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                    | Location                  |
| -----: | ------: | ------------------------- | ------------------------- |
| 100.0% |      26 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Caller                                                                                                        | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 91.7% |      11 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |      12 | `put(Object, Object)` | `java.util.HashMap` |

##### `matches(Method, String, Class[])` (`java.lang.PublicMethods$Key`)

|      % | Samples | Caller                                       | Location                             |
| -----: | ------: | -------------------------------------------- | ------------------------------------ |
| 100.0% |       8 | `filter(Method[], String, Class[], boolean)` | `java.lang.PublicMethods$MethodList` |

##### `addArgumentForm(int, LambdaForm$BasicType)` (`java.lang.invoke.LambdaFormEditor`)

|      % | Samples | Caller                                             | Location                         |
| -----: | ------: | -------------------------------------------------- | -------------------------------- |
| 100.0% |       7 | `dropArgumentsTrusted(MethodHandle, int, Class[])` | `java.lang.invoke.MethodHandles` |

##### `getReturnState(int)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

|      % | Samples | Caller                                                               | Location                                              |
| -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       7 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 33.3% |       2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e801115400` |
| 16.7% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e8010bc000` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Caller        | Location            |
| ----: | ------: | ------------- | ------------------- |
| 66.7% |       4 | `get(Object)` | `java.util.HashMap` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |       6 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000e80109a000` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|     % | Samples | Caller                    | Location                             |
| ----: | ------: | ------------------------- | ------------------------------------ |
| 60.0% |       3 | `getNoCheckStale(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `hashCodeRange(int, int)` (`java.util.ArrayList`)

|      % | Samples | Caller       | Location              |
| -----: | ------: | ------------ | --------------------- |
| 100.0% |       5 | `hashCode()` | `java.util.ArrayList` |

##### `prepare()` (`java.lang.invoke.LambdaForm`)

|      % | Samples | Caller                           | Location                        |
| -----: | ------: | -------------------------------- | ------------------------------- |
| 100.0% |       5 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.MethodHandle` |

##### `<init>(Method, boolean)` (`java.lang.invoke.MemberName`)

|      % | Samples | Caller           | Location                      |
| -----: | ------: | ---------------- | ----------------------------- |
| 100.0% |       5 | `<init>(Method)` | `java.lang.invoke.MemberName` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

|      % | Samples | Caller                                          | Location                                              |
| -----: | ------: | ----------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       4 | `computeTargetState(CharStream, DFAState, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `execute(Lexer, CharStream, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`)

|      % | Samples | Caller                                                        | Location                                              |
| -----: | ------: | ------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       4 | `accept(CharStream, LexerActionExecutor, int, int, int, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |       3 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `equals(Object, Object)` (`java.util.Objects`)

|     % | Samples | Caller                       | Location              |
| ----: | ------: | ---------------------------- | --------------------- |
| 66.7% |       2 | `equalsArrayList(ArrayList)` | `java.util.ArrayList` |

##### `valueConversion(Class, Class, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|      % | Samples | Caller                                                              | Location                            |
| -----: | ------: | ------------------------------------------------------------------- | ----------------------------------- |
| 100.0% |       3 | `computeValueConversions(MethodType, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                                      | Location                                                                   |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 88.0% |     264 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`                 | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
| 87.7% |     263 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`                       |
| 72.7% |     218 | `linkToCallSite(Object, Object, Object)`                                                                      | `java.lang.invoke.Invokers$Holder`                                         |
| 36.7% |     110 | `linkToCallSite(Object, Object)`                                                                              | `java.lang.invoke.Invokers$Holder`                                         |
| 28.3% |      85 | `doCall(Object)`                                                                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 25.0% |      75 | `measureRuleProcessingTime(Rule, Closure)`                                                                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 23.3% |      70 | `applyTo(SourceCode)`                                                                                         | `org.codenarc.rule.AbstractRule`                                           |
| 22.3% |      67 | `linkToCallSite(Object, Object, Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                                         |
| 22.0% |      66 | `init()`                                                                                                      | `org.codenarc.source.AbstractSourceCode`                                   |
| 21.3% |      64 | `applyTo(SourceCode, List)`                                                                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 18.0% |      54 | `visitClass(ClassNode)`                                                                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 17.7% |      53 | `collectViolations(SourceCode, RuleSet)`                                                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 17.0% |      51 | `processFile(String, DirectoryResults, RuleSet)`                                                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 14.0% |      42 | `getAst()`                                                                                                    | `org.codenarc.source.AbstractSourceCode`                                   |
| 13.7% |      41 | `init()`                                                                                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 13.3% |      40 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                     |
| 13.3% |      40 | `visitClass(ClassNode)`                                                                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.0% |      39 | `isRuleSuppressed(Rule)`                                                                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 13.0% |      39 | `visitMethod(MethodNode)`                                                                                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 11.0% |      33 | `visitMethod(MethodNode)`                                                                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 99.6% |     263 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`)

|      % | Samples | Callee                                                                                        | Location                                        |
| -----: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |     263 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     218 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e801115400` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 46.4% |      51 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e8010bc000` |
| 37.3% |      41 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000e801104000` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 75.3% |      64 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 24.7% |      21 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 73.3% |      55 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 20.0% |      15 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  4.0% |       3 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000e801390400` |
|  2.7% |       2 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000e801394000` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                                |
| ----: | ------: | --------------------------- | ------------------------------------------------------- |
| 85.7% |      60 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  4.3% |       3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`          |
|  2.9% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`        |
|  1.4% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.MisorderedStaticImportsRule` |
|  1.4% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.UnusedImportRule`            |

##### `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 98.5% |      66 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e801142000` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 95.5% |      63 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  3.0% |       2 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.5% |       1 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                      | Location                                                          |
| ----: | ------: | --------------------------- | ----------------------------------------------------------------- |
| 76.6% |      49 | `visitClass(ClassNode)`     | `org.codenarc.rule.AbstractAstVisitor`                            |
|  9.4% |       6 | `getAstVisitor()`           | `org.codenarc.rule.AbstractAstVisitorRule`                        |
|  9.4% |       6 | `visitClass(ClassNode)`     | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`           |
|  3.1% |       2 | `visitClass(ClassNode)`     | `org.codenarc.rule.AbstractMethodVisitor`                         |
|  1.6% |       1 | `setSourceCode(SourceCode)` | `org.codenarc.rule.convention.ImplicitClosureParameterAstVisitor` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                        |
| ----: | ------: | ------------------------------- | --------------------------------------------------------------- |
| 74.1% |      40 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
|  5.6% |       3 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor` |
|  3.7% |       2 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`        |
|  3.7% |       2 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor` |
|  3.7% |       2 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`         |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                                                   |
| ----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------- |
| 75.5% |      40 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |
| 11.3% |       6 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
|  9.4% |       5 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
|  1.9% |       1 | `<init>(Object)`                                 | `groovy.lang.Reference`                                                    |
|  1.9% |       1 | `<init>(Object, Object)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure4` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |      51 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      42 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee                                    | Location                                    |
| ----: | ------: | ----------------------------------------- | ------------------------------------------- |
| 95.1% |      39 | `getAst()`                                | `org.codenarc.source.AbstractSourceCode`    |
|  2.4% |       1 | `getSuppressedRuleNames(AnnotatedNode)`   | `org.codenarc.analyzer.SuppressionAnalyzer` |
|  2.4% |       1 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Callee                                                                                                        | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 97.5% |      39 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                              | Location                                                              |
| ----: | ------: | ----------------------------------- | --------------------------------------------------------------------- |
| 97.5% |      39 | `visitContents(GroovyClassVisitor)` | `org.codehaus.groovy.ast.ClassNode`                                   |
|  2.5% |       1 | `visitAnnotations(AnnotatedNode)`   | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |      39 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                      | Location                                                            |
| ----: | ------: | --------------------------- | ------------------------------------------------------------------- |
| 82.1% |      32 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.1% |       2 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`      |
|  5.1% |       2 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`    |
|  2.6% |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  2.6% |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                        |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------------- |
| 78.8% |      26 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
|  6.1% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`        |
|  6.1% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                    |
|  3.0% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor` |
|  3.0% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`    |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.3% |      10 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.0% |       9 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.3% |       7 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.3% |       7 | `matches(Method, String, Class[])` (`java.lang.PublicMethods$Key`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.0% |       6 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.7% |       5 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.7% |       5 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.0% |       3 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.0% |       3 | `hashCodeRange(int, int)` (`java.util.ArrayList`) ← `get(Object)` (`java.util.concurrent.ConcurrentHashMap`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.0% |       3 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |       3 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801390400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.0% |       3 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.7% |       2 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.7% |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.7% |       2 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `loadRuleElements(Node)` (`org.codenarc.ruleset.XmlReaderRuleSet`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.7% |       2 | `get(Object)` (`java.util.concurrent.ConcurrentHashMap`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.7% |       2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`) ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` ← `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` |
| 0.7% |       2 | `get(Object)` (`java.util.concurrent.ConcurrentHashMap`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.7% |       2 | `addArgumentForm(int, LambdaForm$BasicType)` (`java.lang.invoke.LambdaFormEditor`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.7% |       2 | `equals(Object, Object)` (`java.util.Objects`) ← `get(Object)` (`java.util.concurrent.ConcurrentHashMap`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

# Allocated heap profile

Allocated 12 GiB over 6,288 samples (1.96 MiB per sample).

| Category |     % |     Size | Samples |
| -------- | ----: | -------: | ------: |
| stdlib   | 99.4% |   12 GiB |   6,195 |
| ours     |  0.6% | 76.5 MiB |      39 |
| native   | <0.1% | 35.8 KiB |      54 |

Hidden functions account for 97.5% of bytes allocated, so the hottest are also shown.

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|    % |     Size | Samples | Function                                                                                      | Location                                          |
| ---: | -------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| 6.6% |  811 MiB |     411 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                     |
| 5.0% |  612 MiB |     310 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`   |
| 4.9% |  600 MiB |     304 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                             |
| 4.4% |  542 MiB |     202 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`               |
| 2.7% |  328 MiB |     170 | `make(MethodType, LambdaForm, Object, Object)`                                                | `java.lang.invoke.BoundMethodHandle$Species_LL`   |
| 2.6% |  326 MiB |     160 | `newArray(Class, int)`                                                                        | `java.lang.reflect.Array`                         |
| 2.6% |  318 MiB |     145 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                                | `java.lang.invoke.BoundMethodHandle$Species_LLLL` |
| 2.5% |  304 MiB |     130 | `stream(Spliterator, boolean)`                                                                | `java.util.stream.StreamSupport`                  |
| 2.4% |  297 MiB |     154 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                         |
| 2.4% |  290 MiB |     148 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`    |
| 2.3% |  284 MiB |     141 | `lambdaFormEditor(LambdaForm)`                                                                | `java.lang.invoke.LambdaFormEditor`               |
| 2.3% |  278 MiB |     140 | `of(byte, int, int)`                                                                          | `java.lang.invoke.LambdaFormEditor$TransformKey`  |
| 2.2% |  276 MiB |     137 | `copyOfRange(Object[], int, int)`                                                             | `java.util.Arrays`                                |
| 2.2% |  273 MiB |     136 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`       | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`     |
| 1.9% |  233 MiB |     112 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.HashMap`                               |
| 1.8% |  227 MiB |     113 | `optimize(Pattern$Node)`                                                                      | `java.util.regex.Pattern$BnM`                     |
| 0.8% |  104 MiB |      67 | `iterator()`                                                                                  | `java.util.ArrayList`                             |
| 0.6% |   77 MiB |      39 | `matcher(CharSequence)`                                                                       | `java.util.regex.Pattern`                         |
| 0.1% | 14.9 MiB |       8 | `<init>()`                                                                                    | `java.util.HashSet`                               |
| 0.1% | 12.3 MiB |       7 | `toString()`                                                                                  | `java.lang.StringBuilder`                         |

#### Lines

Lines ranked by contribution to each function's self size.

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|      % |    Size | Samples | Location                          |
| -----: | ------: | ------: | --------------------------------- |
| 100.0% | 811 MiB |     411 | `java.lang.invoke.MethodType:400` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % |    Size | Samples | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 612 MiB |     310 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:293` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

|      % |    Size | Samples | Location                                |
| -----: | ------: | ------: | --------------------------------------- |
| 100.0% | 542 MiB |     202 | `java.lang.invoke.MethodHandleImpl:667` |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

|      % |    Size | Samples | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 304 MiB |     130 | `java.util.stream.StreamSupport:69` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % |    Size | Samples | Location                     |
| -----: | ------: | ------: | ---------------------------- |
| 100.0% | 297 MiB |     154 | `java.lang.reflect.Array:78` |

##### `make(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`)

|      % |    Size | Samples | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 290 MiB |     148 | `java.lang.invoke.BoundMethodHandle$Species_L:225` |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

|      % |    Size | Samples | Location                               |
| -----: | ------: | ------: | -------------------------------------- |
| 100.0% | 284 MiB |     141 | `java.lang.invoke.LambdaFormEditor:61` |

##### `of(byte, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

|      % |    Size | Samples | Location                                             |
| -----: | ------: | ------: | ---------------------------------------------------- |
| 100.0% | 278 MiB |     140 | `java.lang.invoke.LambdaFormEditor$TransformKey:183` |

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 276 MiB |     137 | `java.util.Arrays:3768` |

##### `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|     % |    Size | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 94.1% | 257 MiB |     128 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:232` |
|  5.9% |  16 MiB |       8 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:225` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % |    Size | Samples | Location                 |
| -----: | ------: | ------: | ------------------------ |
| 100.0% | 233 MiB |     112 | `java.util.HashMap:1909` |

##### `optimize(Pattern$Node)` (`java.util.regex.Pattern$BnM`)

|     % |    Size | Samples | Location                           |
| ----: | ------: | ------: | ---------------------------------- |
| 87.7% | 199 MiB |      99 | `java.util.regex.Pattern$BnM:5658` |
|  7.0% |  16 MiB |       8 | `java.util.regex.Pattern$BnM:5659` |
|  5.3% |  12 MiB |       6 | `java.util.regex.Pattern$BnM:5692` |

##### `iterator()` (`java.util.ArrayList`)

|      % |    Size | Samples | Location                   |
| -----: | ------: | ------: | -------------------------- |
| 100.0% | 104 MiB |      67 | `java.util.ArrayList:1029` |

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

|      % |   Size | Samples | Location                       |
| -----: | -----: | ------: | ------------------------------ |
| 100.0% | 77 MiB |      39 | `java.util.regex.Pattern:1180` |

##### `<init>()` (`java.util.HashSet`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 14.9 MiB |       8 | `java.util.HashSet:107` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |     Size | Samples | Location                      |
| -----: | -------: | ------: | ----------------------------- |
| 100.0% | 12.3 MiB |       7 | `java.lang.StringBuilder:475` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|     % |    Size | Samples | Caller                                | Location                      |
| ----: | ------: | ------: | ------------------------------------- | ----------------------------- |
| 49.8% | 404 MiB |     206 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |
| 45.3% | 368 MiB |     185 | `insertParameterTypes(int, Class[])`  | `java.lang.invoke.MethodType` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % |    Size | Samples | Caller                                                                                      | Location                                             |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 612 MiB |     310 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e8010b2800` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

|      % |    Size | Samples | Caller               | Location              |
| -----: | ------: | ------: | -------------------- | --------------------- |
| 100.0% | 600 MiB |     304 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

|      % |    Size | Samples | Caller                  | Location                            |
| -----: | ------: | ------: | ----------------------- | ----------------------------------- |
| 100.0% | 542 MiB |     202 | `profile(MethodHandle)` | `java.lang.invoke.MethodHandleImpl` |

##### `make(MethodType, LambdaForm, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LL`)

|      % |    Size | Samples | Caller                                                 | Location                                     |
| -----: | ------: | ------: | ------------------------------------------------------ | -------------------------------------------- |
| 100.0% | 328 MiB |     170 | `invokeStatic(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

|      % |    Size | Samples | Caller                    | Location                  |
| -----: | ------: | ------: | ------------------------- | ------------------------- |
| 100.0% | 326 MiB |     160 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLL`)

|      % |    Size | Samples | Caller                                                                 | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 318 MiB |     145 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

|     % |    Size | Samples | Caller                       | Location           |
| ----: | ------: | ------: | ---------------------------- | ------------------ |
| 97.9% | 298 MiB |     126 | `stream(Object[], int, int)` | `java.util.Arrays` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|     % |    Size | Samples | Caller                              | Location                                             |
| ----: | ------: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 99.3% | 295 MiB |     153 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000e80109a000` |

##### `make(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`)

|      % |    Size | Samples | Caller                        | Location                             |
| -----: | ------: | ------: | ----------------------------- | ------------------------------------ |
| 100.0% | 290 MiB |     148 | `makeReinvoker(MethodHandle)` | `java.lang.invoke.BoundMethodHandle` |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

|      % |    Size | Samples | Caller     | Location                      |
| -----: | ------: | ------: | ---------- | ----------------------------- |
| 100.0% | 284 MiB |     141 | `editor()` | `java.lang.invoke.LambdaForm` |

##### `of(byte, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

|     % |    Size | Samples | Caller                                       | Location                            |
| ----: | ------: | ------: | -------------------------------------------- | ----------------------------------- |
| 60.4% | 168 MiB |      85 | `addArgumentForm(int, LambdaForm$BasicType)` | `java.lang.invoke.LambdaFormEditor` |

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                                                           | Location                         |
| ----: | ------: | ------: | ---------------------------------------------------------------- | -------------------------------- |
| 62.8% | 173 MiB |      87 | `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` | `java.lang.invoke.MethodHandles` |

##### `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|     % |    Size | Samples | Caller                         | Location                                      |
| ----: | ------: | ------: | ------------------------------ | --------------------------------------------- |
| 75.3% | 206 MiB |     103 | `transform(ATNState, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % |    Size | Samples | Caller                                          | Location            |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 233 MiB |     112 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `optimize(Pattern$Node)` (`java.util.regex.Pattern$BnM`)

|      % |    Size | Samples | Caller      | Location                  |
| -----: | ------: | ------: | ----------- | ------------------------- |
| 100.0% | 227 MiB |     113 | `compile()` | `java.util.regex.Pattern` |

##### `iterator()` (`java.util.ArrayList`)

|     % |   Size | Samples | Caller                         | Location                                    |
| ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| 44.4% | 46 MiB |      13 | `visitListOfExpressions(List)` | `org.codehaus.groovy.ast.GroovyCodeVisitor` |
|  3.9% |  4 MiB |       2 | `addAll(Collection)`           | `java.util.AbstractCollection`              |
|  1.9% |  2 MiB |       1 | `visitClass(ClassNode)`        | `org.codenarc.rule.AbstractFieldVisitor`    |

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

|     % |     Size | Samples | Caller                                                  | Location                                    |
| ----: | -------: | ------: | ------------------------------------------------------- | ------------------------------------------- |
| 44.0% | 33.9 MiB |      17 | `matches(String, CharSequence)`                         | `java.util.regex.Pattern`                   |
| 37.8% | 29.1 MiB |      15 | `findRegex(Object, Object)`                             | `org.codehaus.groovy.runtime.InvokerHelper` |
|  2.6% |    2 MiB |       1 | `findClassDeclarationLineNumber(ClassNode, SourceCode)` | `org.codenarc.util.AstUtil`                 |

##### `<init>()` (`java.util.HashSet`)

|     % |     Size | Samples | Caller           | Location                                                   |
| ----: | -------: | ------: | ---------------- | ---------------------------------------------------------- |
| 59.9% | 8.94 MiB |       5 | `equals(Object)` | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
| 26.8% |    4 MiB |       2 | `<init>()`       | `org.codenarc.rule.AbstractAstVisitor`                     |

##### `toString()` (`java.lang.StringBuilder`)

|     % |  Size | Samples | Caller                       | Location                                          |
| ----: | ----: | ------: | ---------------------------- | ------------------------------------------------- |
| 32.6% | 4 MiB |       2 | `isRuleSuppressed(Rule)`     | `org.codenarc.analyzer.SuppressionAnalyzer`       |
| 32.5% | 4 MiB |       2 | `plus(String, CharSequence)` | `org.codehaus.groovy.runtime.StringGroovyMethods` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                                                                      | Location                                                                   |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 94.7% | 11.4 GiB |   5,862 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
| 65.0% | 7.83 GiB |   4,012 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                                         |
| 43.5% | 5.23 GiB |   2,671 | `linkToCallSite(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                                         |
| 37.3% | 4.49 GiB |   2,301 | `measureRuleProcessingTime(Rule, Closure)`                                                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 33.9% | 4.08 GiB |   2,068 | `collectViolations(SourceCode, RuleSet)`                                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 29.3% | 3.53 GiB |   1,846 | `doCall(Object)`                                                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 28.0% | 3.37 GiB |   1,715 | `processFile(String, DirectoryResults, RuleSet)`                                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 27.0% | 3.25 GiB |   1,584 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                                         |
| 22.3% | 2.69 GiB |   1,417 | `applyTo(SourceCode)`                                                                         | `org.codenarc.rule.AbstractRule`                                           |
| 21.3% | 2.57 GiB |   1,347 | `applyTo(SourceCode, List)`                                                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 19.1% | 2.29 GiB |   1,190 | `visitClass(ClassNode)`                                                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 17.0% | 2.05 GiB |   1,058 | `visitClass(ClassNode)`                                                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 16.5% | 1.98 GiB |   1,025 | `visitMethod(MethodNode)`                                                                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 14.4% | 1.74 GiB |     889 | `visitBlockStatement(BlockStatement)`                                                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 14.0% | 1.69 GiB |     868 | `visitMethod(MethodNode)`                                                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.7% | 1.65 GiB |     846 | `visitConstructorOrMethod(MethodNode, boolean)`                                               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.8% | 1.54 GiB |     784 | `visitExpressionStatement(ExpressionStatement)`                                               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 10.9% | 1.31 GiB |     678 | `linkToCallSite(Object, Object, Object, Object, Object)`                                      | `java.lang.invoke.Invokers$Holder`                                         |
|  9.9% |  1.2 GiB |     601 | `linkToCallSite(Object, Object, long, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x000000e801394000`                        |
|  8.3% | 1020 MiB |     522 | `init()`                                                                                      | `org.codenarc.source.AbstractSourceCode`                                   |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % |     Size | Samples | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 99.3% | 11.3 GiB |   5,812 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |     Size | Samples | Callee                           | Location                                            |
| ----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 99.0% | 7.75 GiB |   3,972 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e801115400` |

##### `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |     Size | Samples | Callee                                   | Location                                            |
| ----: | -------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 96.8% | 5.06 GiB |   2,584 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e801142000` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 50.5% | 2.27 GiB |   1,171 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 26.7% |  1.2 GiB |     601 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000e801394000` |
| 13.1% |  602 MiB |     302 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000e801390400` |
|  9.6% |  441 MiB |     225 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| <0.1% |    2 MiB |       1 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 83.0% | 3.39 GiB |   1,724 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 10.9% |  454 MiB |     215 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  5.9% |  247 MiB |     125 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % |     Size | Samples | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 74.4% | 2.62 GiB |   1,379 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 25.5% |  922 MiB |     465 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % |     Size | Samples | Callee                                           | Location                           |
| -----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 3.37 GiB |   1,714 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  <0.1% |  746 KiB |       1 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |     Size | Samples | Callee                   | Location                                            |
| ----: | -------: | ------: | ------------------------ | --------------------------------------------------- |
| 57.8% | 1.88 GiB |     874 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e8010bc000` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                                  |
| ----: | -------: | ------: | --------------------------- | --------------------------------------------------------- |
| 84.6% | 2.27 GiB |   1,198 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                |
|  4.6% |  126 MiB |      63 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`  |
|  4.1% |  112 MiB |      61 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`          |
|  1.8% | 49.4 MiB |      24 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`            |
|  0.8% | 23.2 MiB |      13 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BlankLineBeforePackageRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------- |
| 83.9% | 2.15 GiB |   1,114 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  9.9% |  261 MiB |     131 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  2.8% | 74.9 MiB |      39 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  2.3% | 59.3 MiB |      47 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  0.2% |    6 MiB |       3 | `addAll(Collection)`    | `java.util.ArrayList`                                   |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                          | Location                                                            |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 87.8% | 2.01 GiB |   1,039 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.1% |  119 MiB |      62 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  0.9% | 20.3 MiB |      11 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`            |
|  0.9% | 20.1 MiB |      11 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  0.7% | 16.7 MiB |      10 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |    Size | Samples | Callee                              | Location                                                |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------- |
| 97.8% |   2 GiB |   1,035 | `visitContents(GroovyClassVisitor)` | `org.codehaus.groovy.ast.ClassNode`                     |
|  0.5% |  10 MiB |       5 | `visitImports(ModuleNode)`          | `org.codenarc.rule.ClassReferenceAstVisitor`            |
|  0.2% |   4 MiB |       2 | `visitAnnotations(AnnotatedNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
|  0.1% | 1.4 MiB |       1 | `visitImports(ModuleNode)`          | `org.codenarc.rule.convention.NoJavaUtilDateAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                      | Location                                                            |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------------------------- |
| 83.9% | 1.66 GiB |     858 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.8% |  117 MiB |      59 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.7% |   34 MiB |      17 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                |
|  1.1% | 21.3 MiB |      12 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`     |
|  1.0% |   20 MiB |      10 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`     |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                | Location                                                        |
| ----: | -------: | ------: | ------------------------------------- | --------------------------------------------------------------- |
| 96.2% | 1.67 GiB |     856 | `visitBlockStatement(BlockStatement)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                    |
|  4.9% | 86.4 MiB |      43 | `visitStatement(Statement)`           | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`  |
|  0.1% |    2 MiB |       1 | `visitStatement(Statement)`           | `org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                          | Location                                                                    |
| ----: | -------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 87.7% | 1.48 GiB |     761 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  2.8% | 48.3 MiB |      23 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
|  1.7% |   29 MiB |      15 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |
|  1.7% | 28.8 MiB |      15 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                                |
|  1.4% |   24 MiB |      12 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`           |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                               | Location                                                              |
| ----: | -------: | ------: | ------------------------------------ | --------------------------------------------------------------------- |
| 97.1% |  1.6 GiB |     821 | `visitClassCodeContainer(Statement)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
|  2.1% |   36 MiB |      18 | `visitAnnotations(AnnotatedNode)`    | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
|  0.8% | 12.8 MiB |       7 | `visitAnnotations(AnnotatedNode)`    | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                          | Location                                                       |
| ----: | -------: | ------: | ----------------------------------------------- | -------------------------------------------------------------- |
| 94.1% | 1.45 GiB |     737 | `visitExpressionStatement(ExpressionStatement)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                   |
|  6.9% |  108 MiB |      54 | `visitStatement(Statement)`                     | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 97.0% | 1.27 GiB |     658 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e8012b8400` |

##### `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801394000`)

|      % |    Size | Samples | Callee                                 | Location                                            |
| -----: | ------: | ------: | -------------------------------------- | --------------------------------------------------- |
| 100.0% | 1.2 GiB |     601 | `invoke(Object, Object, Object, long)` | `java.lang.invoke.LambdaForm$MH.0x000000e801393c00` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                                           | Location                           |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 96.2% |  981 MiB |     503 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  1.9% | 18.9 MiB |      10 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.8% | 17.9 MiB |       8 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  0.2% |    2 MiB |       1 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---: | -------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.6% |  569 MiB |     273 | `fillInStackTrace(int)` (`java.lang.Throwable`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                              |
| 4.5% |  552 MiB |     267 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801390400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                    |
| 2.7% |  334 MiB |     169 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                          |
| 2.5% |  312 MiB |     160 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.4% |  290 MiB |     146 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.9% |  240 MiB |     111 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                 |
| 1.9% |  230 MiB |     116 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                              |
| 1.7% |  212 MiB |     111 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                         |
| 1.6% |  196 MiB |      98 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.5% |  190 MiB |      97 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.3% |  160 MiB |       9 | `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e80144e000`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`) |
| 1.2% |  149 MiB |      75 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                       |
| 1.0% |  118 MiB |      57 | `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.8% | 96.1 MiB |      47 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                              |
| 0.8% |   94 MiB |      47 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e80144e000`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)                                                                                  |
| 0.7% | 82.3 MiB |      42 | `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.7% | 80.2 MiB |      41 | `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                    |
| 0.6% | 72.1 MiB |      37 | `make(MethodType, LambdaForm, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LL`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% | 67.3 MiB |      34 | `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% |   65 MiB |      33 | `make(MethodType, LambdaForm, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLL`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                        |

# Retained heap profile

Retained 55.7 KiB over 109 samples (523 B per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| stdlib   | 100.0% | 55.7 KiB |     109 |

Hidden functions account for 100.0% of bytes retained, so the hottest are also shown.

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % |     Size | Samples | Function   | Location            |
| ----: | -------: | ------: | ---------- | ------------------- |
| 58.5% | 32.6 KiB |       3 | `resize()` | `java.util.HashMap` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `resize()` (`java.util.HashMap`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 32.6 KiB |       3 | `java.util.HashMap:710` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `resize()` (`java.util.HashMap`)

|      % |     Size | Samples | Caller                                          | Location            |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 32.6 KiB |       3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Samples | Function                                                                    | Location                                                                   |
| ----: | -------: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 92.3% | 51.4 KiB |      78 | `linkToCallSite(Object, Object, Object)`                                    | `java.lang.invoke.Invokers$Holder`                                         |
| 58.5% | 32.6 KiB |       3 | `resize()`                                                                  | `java.util.HashMap`                                                        |
| 58.0% | 32.3 KiB |       4 | `main(String[])`                                                            | `org.codenarc.CodeNarc`                                                    |
| 33.5% | 18.7 KiB |      31 | `linkToCallSite(Object, Object)`                                            | `java.lang.invoke.Invokers$Holder`                                         |
| 14.9% | 8.32 KiB |       1 | `getFormattedTimestamp()`                                                   | `org.codenarc.report.AbstractReportWriter`                                 |
| 14.9% | 8.32 KiB |       1 | `writeTitle(Writer)`                                                        | `org.codenarc.report.TextReportWriter`                                     |
| 14.9% | 8.32 KiB |       1 | `writeReport(Writer, AnalysisContext, Results)`                             | `org.codenarc.report.TextReportWriter`                                     |
| 14.1% | 7.88 KiB |      25 | `init()`                                                                    | `org.codenarc.source.AbstractSourceCode`                                   |
| 12.9% | 7.21 KiB |      13 | `getAst()`                                                                  | `org.codenarc.source.AbstractSourceCode`                                   |
| 12.9% | 7.21 KiB |      13 | `init()`                                                                    | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 12.9% | 7.18 KiB |      12 | `isRuleSuppressed(Rule)`                                                    | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  4.5% | 2.51 KiB |      38 | `getMetaClass()`                                                            | `org.codehaus.groovy.reflection.ClassInfo`                                 |
|  4.4% | 2.47 KiB |       6 | `linkToCallSite(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                                         |
|  3.9% | 2.16 KiB |       1 | `getLines()`                                                                | `org.codenarc.source.AbstractSourceCode`                                   |
|  3.9% | 2.16 KiB |       1 | `line(int)`                                                                 | `org.codenarc.source.AbstractSourceCode`                                   |
|  3.9% | 2.16 KiB |       1 | `sourceLineTrimmed(ASTNode)`                                                | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  3.9% | 2.16 KiB |       1 | `addViolation(ASTNode, String)`                                             | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  3.9% | 2.16 KiB |       1 | `addViolationIfBothAreConstantsOrLiterals(ASTNode, Expression, Expression)` | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`               |
|  2.6% | 1.44 KiB |      22 | `applyTo(SourceCode)`                                                       | `org.codenarc.rule.AbstractRule`                                           |
|  2.5% | 1.39 KiB |      21 | `doCall(Object)`                                                            | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |     Size | Samples | Callee                           | Location                                            |
| ----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 99.8% | 51.3 KiB |      77 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e801115400` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 32.3 KiB |       4 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |     Size | Samples | Callee                   | Location                                            |
| ----: | -------: | ------: | ------------------------ | --------------------------------------------------- |
| 61.5% | 11.5 KiB |      18 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e8010bc000` |

##### `getFormattedTimestamp()` (`org.codenarc.report.AbstractReportWriter`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 8.32 KiB |       1 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `writeTitle(Writer)` (`org.codenarc.report.TextReportWriter`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 8.32 KiB |       1 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `writeReport(Writer, AnalysisContext, Results)` (`org.codenarc.report.TextReportWriter`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 8.32 KiB |       1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 98.8% | 7.78 KiB |      24 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  1.2% |     96 B |       1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 7.21 KiB |      13 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Callee     | Location                                 |
| -----: | -------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 7.21 KiB |      13 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Callee   | Location                                    |
| -----: | -------: | ------: | -------- | ------------------------------------------- |
| 100.0% | 7.18 KiB |      12 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`)

|      % |     Size | Samples | Callee                    | Location                                   |
| -----: | -------: | ------: | ------------------------- | ------------------------------------------ |
| 100.0% | 2.51 KiB |      38 | `getMetaClassUnderLock()` | `org.codehaus.groovy.reflection.ClassInfo` |

##### `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Samples | Callee                                   | Location                                            |
| -----: | -------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% | 2.47 KiB |       6 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e801142000` |

##### `getLines()` (`org.codenarc.source.AbstractSourceCode`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 2.16 KiB |       1 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `line(int)` (`org.codenarc.source.AbstractSourceCode`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 2.16 KiB |       1 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % |     Size | Samples | Callee      | Location                                 |
| -----: | -------: | ------: | ----------- | ---------------------------------------- |
| 100.0% | 2.16 KiB |       1 | `line(int)` | `org.codenarc.source.AbstractSourceCode` |

##### `addViolation(ASTNode, String)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % |     Size | Samples | Callee                       | Location                               |
| -----: | -------: | ------: | ---------------------------- | -------------------------------------- |
| 100.0% | 2.16 KiB |       1 | `sourceLineTrimmed(ASTNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `addViolationIfBothAreConstantsOrLiterals(ASTNode, Expression, Expression)` (`org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`)

|      % |     Size | Samples | Callee                                           | Location                           |
| -----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.16 KiB |       1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                          |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------- |
| 96.2% | 1.38 KiB |      21 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`        |
|  3.8% |     56 B |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.convention.NoTabCharacterRule` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 1.39 KiB |      21 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 57.5% |   32 KiB |       1 | `resize()` (`java.util.HashMap`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 14.9% | 8.32 KiB |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getFormattedTimestamp()` (`org.codenarc.report.AbstractReportWriter`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeTitle(Writer)` (`org.codenarc.report.TextReportWriter`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeReport(Writer, AnalysisContext, Results)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                     |
| 12.6% | 7.03 KiB |       9 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.9% | 2.16 KiB |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getLines()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `line(int)` (`org.codenarc.source.AbstractSourceCode`) ← `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `addViolation(ASTNode, String)` ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfBothAreConstantsOrLiterals(ASTNode, Expression, Expression)` (`org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`)                                                                                                                                                                                                                                       |
|  1.8% |   1000 B |      16 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.0% |    584 B |       8 | `<init>(Object, Object)` (`groovy.lang.Closure`) ← `<clinit>()` ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.9% |    536 B |       9 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.9% |    528 B |       1 | `resize()` (`java.util.HashMap`) ← `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`) ← `<init>()` ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                       |
|  0.5% |    312 B |       1 | `<init>(Object[], String[])` (`org.codehaus.groovy.runtime.GStringImpl`) ← `<clinit>()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `initializeRuleRegistry()` (`org.codenarc.ruleregistry.RuleRegistryInitializer`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `initializeRuleRegistry()` (`org.codenarc.CodeNarcRunner`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                        |
|  0.5% |    288 B |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.3% |    144 B |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.2% |    128 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `<init>(Object, Object)` (`groovy.lang.Closure`) ← `<init>(Object, Object, Reference)` (`org.codenarc.CodeNarcRunner$_applyPluginsProcessViolationsForFile_closure5`) ← `applyPluginsProcessViolationsForFile(FileResults)` (`org.codenarc.CodeNarcRunner`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `applyPluginsProcessViolationsForAllFiles(Results)` (`org.codenarc.CodeNarcRunner`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.CodeNarcRunner$_applyPluginsProcessViolationsForAllFiles_closure4`)                                                                                                                                                               |
|  0.2% |     96 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                                       |
|  0.2% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `loadRules()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.2% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.groovyism.ExplicitHashMapInstantiationRule$1`) ← `<init>(String)` (`org.codenarc.rule.groovyism.ExplicitTypeInstantiationAstVisitor`) ← `<init>(ExplicitHashMapInstantiationRule, Object)` (`org.codenarc.rule.groovyism.ExplicitHashMapInstantiationRule$1`) ← `getAstVisitor()` (`org.codenarc.rule.groovyism.ExplicitHashMapInstantiationRule`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                  |
|  0.2% |     88 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`) ← `doCall()`                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.1% |     80 B |       1 | `resize()` (`java.util.HashMap`) ← `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |     72 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.formatting.IndentationAstVisitor$_recordMethodColumnAndSourceLineForClosureBlocks_closure6`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |     64 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>()` (`org.codenarc.rule.formatting.SpaceAfterCommaRule`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.1% |     64 B |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `visitImports(ModuleNode)` (`org.codenarc.rule.convention.NoJavaUtilDateAstVisitor`) ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) |
