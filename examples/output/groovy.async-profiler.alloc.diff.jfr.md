# Allocated heap profile diff

Allocated 12.1 GiB → 11.9 GiB (-255.607 MiB, -2.1%) over 24,822 samples → 24,310 samples (512 KiB per sample).

| Category         | Change |        Delta |     % |              Size |         Samples |
| ---------------- | -----: | -----------: | ----: | ----------------: | --------------: |
| Standard library |  -2.1% | -257.107 MiB | 99.2% | 12 GiB → 11.8 GiB | 24,635 → 24,120 |
| Ours             |  +1.6% |   +1.499 MiB |  0.8% | 93.5 MiB → 95 MiB |       187 → 190 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |           % |                Size |       Samples | Function                                                                                     | Location                                                   |
| -----: | ----------: | ----------: | ------------------: | ------------: | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| +12.0% | +31.499 MiB | 2.1% → 2.4% |   261 MiB → 293 MiB |     523 → 586 | `stream(Spliterator, boolean)`                                                               | `java.util.stream.StreamSupport`                           |
|  +3.6% | +27.999 MiB | 6.3% → 6.6% |   776 MiB → 804 MiB | 1,553 → 1,609 | `makeImpl(Class, Class[], boolean)`                                                          | `java.lang.invoke.MethodType`                              |
|  +3.2% | +17.999 MiB | 4.6% → 4.8% |   570 MiB → 588 MiB | 1,141 → 1,177 | `fillInStackTrace(int)`                                                                      | `java.lang.Throwable`                                      |
| +14.8% | +13.999 MiB | 0.8% → 0.9% |  94.5 MiB → 108 MiB |     189 → 217 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                | `java.lang.invoke.MethodHandleImpl`                        |
|  +5.5% | +13.499 MiB | 2.0% → 2.1% |   246 MiB → 259 MiB |     492 → 519 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`              |
| +26.8% | +12.999 MiB | 0.4% → 0.5% | 48.5 MiB → 61.5 MiB |      97 → 123 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|  +8.6% | +12.499 MiB | 1.2% → 1.3% |   145 MiB → 157 MiB |     290 → 315 | `parameterArray()`                                                                           | `java.lang.invoke.MethodType`                              |
| +19.4% |  +9.999 MiB | 0.4% → 0.5% | 51.5 MiB → 61.5 MiB |     103 → 123 | `computeValueConversions(MethodType, MethodType, boolean, boolean)`                          | `java.lang.invoke.MethodHandleImpl`                        |
| +17.7% |  +9.999 MiB |        0.5% | 56.5 MiB → 66.5 MiB |     113 → 133 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                 | `java.math.MutableBigInteger`                              |
| +22.9% |  +9.499 MiB | 0.3% → 0.4% |   41.5 MiB → 51 MiB |      83 → 102 | `lambda$setGuards$1(int)`                                                                    | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`  |
| +14.4% |  +9.499 MiB | 0.5% → 0.6% |   66 MiB → 75.5 MiB |     132 → 151 | `divideOneWord(int, MutableBigInteger)`                                                      | `java.math.MutableBigInteger`                              |
| +25.4% |  +8.999 MiB | 0.3% → 0.4% | 35.5 MiB → 44.5 MiB |       71 → 89 | `of(byte, int, int, int)`                                                                    | `java.lang.invoke.LambdaFormEditor$TransformKey`           |
| +45.9% |  +8.499 MiB | 0.1% → 0.2% |   18.5 MiB → 27 MiB |       37 → 54 | `<init>(int)`                                                                                | `java.lang.AbstractStringBuilder`                          |
| +50.0% |  +7.999 MiB | 0.1% → 0.2% |     16 MiB → 24 MiB |       32 → 48 | `join(PredictionContext, PredictionContext)`                                                 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
| +24.6% |  +6.999 MiB | 0.2% → 0.3% | 28.5 MiB → 35.5 MiB |       57 → 71 | `getAndPut(String, MemoizeCache$ValueProvider)`                                              | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`        |
|  +2.5% |  +6.999 MiB | 2.2% → 2.3% |   277 MiB → 284 MiB |     554 → 568 | `make(MethodType, LambdaForm, Object)`                                                       | `java.lang.invoke.BoundMethodHandle$Species_L`             |
| +25.9% |  +6.999 MiB | 0.2% → 0.3% |     27 MiB → 34 MiB |       54 → 68 | `basicTypesOrd(Class[])`                                                                     | `java.lang.invoke.LambdaForm$BasicType`                    |
| +27.5% |  +6.999 MiB | 0.2% → 0.3% | 25.5 MiB → 32.5 MiB |       51 → 65 | `entrySet()`                                                                                 | `java.util.HashMap`                                        |
| +41.9% |  +6.499 MiB | 0.1% → 0.2% |   15.5 MiB → 22 MiB |       31 → 44 | `newString(byte[], int, int)`                                                                | `java.lang.StringLatin1`                                   |
| +16.3% |  +6.499 MiB | 0.3% → 0.4% |   40 MiB → 46.5 MiB |       80 → 93 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object, Object)`       | `java.lang.invoke.BoundMethodHandle$Species_LLLLLLL`       |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |           % |                Size |   Samples | Function                                                                                | Location                                             |
| -----: | ----------: | ----------: | ------------------: | --------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -13.5% | -51.999 MiB | 3.1% → 2.7% |   385 MiB → 333 MiB | 771 → 667 | `make(MethodType, LambdaForm, Object, Object)`                                          | `java.lang.invoke.BoundMethodHandle$Species_LL`      |
| -14.7% | -37.999 MiB | 2.1% → 1.8% |   258 MiB → 220 MiB | 517 → 441 | `divideAndRemainderKnuth(BigInteger)`                                                   | `java.math.BigInteger`                               |
| -10.5% | -26.499 MiB | 2.0% → 1.9% |   251 MiB → 225 MiB | 503 → 450 | `allocateInstance(Object)`                                                              | `java.lang.invoke.DirectMethodHandle`                |
| -14.0% | -23.999 MiB | 1.4% → 1.2% |   172 MiB → 148 MiB | 344 → 296 | `valueOf(long)`                                                                         | `java.lang.Long`                                     |
|  -6.9% | -23.999 MiB | 2.8% → 2.7% |   348 MiB → 324 MiB | 697 → 649 | `newArray(Class, int)`                                                                  | `java.lang.reflect.Array`                            |
|  -5.3% | -23.499 MiB | 3.6% → 3.4% |   442 MiB → 419 MiB | 885 → 838 | `makeBlockInliningWrapper(MethodHandle)`                                                | `java.lang.invoke.MethodHandleImpl`                  |
| -17.5% | -23.499 MiB | 1.1% → 0.9% |   134 MiB → 110 MiB | 268 → 221 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` | `org.codehaus.groovy.vmplugin.v8.Selector`           |
|  -7.8% | -21.999 MiB | 2.3% → 2.1% |   283 MiB → 261 MiB | 566 → 522 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                          | `java.lang.invoke.BoundMethodHandle$Species_LLLL`    |
| -75.0% | -20.999 MiB | 0.2% → 0.1% |      28 MiB → 7 MiB |   56 → 14 | `<init>(Object, Object)`                                                                | `groovy.lang.Tuple2`                                 |
| -20.8% | -19.999 MiB | 0.8% → 0.6% |     96 MiB → 76 MiB | 192 → 152 | `<init>(Pattern, CharSequence)`                                                         | `java.util.regex.Matcher`                            |
| -26.3% | -17.999 MiB | 0.6% → 0.4% | 68.5 MiB → 50.5 MiB | 137 → 101 | `copyOf(Object[], int)`                                                                 | `java.util.Arrays`                                   |
| -28.8% | -17.999 MiB | 0.5% → 0.4% | 62.5 MiB → 44.5 MiB |  125 → 89 | `getCachedContext(PredictionContext)`                                                   | `groovyjarjarantlr4.v4.runtime.atn.ATN`              |
|  -6.3% | -17.499 MiB | 2.2% → 2.1% |   276 MiB → 259 MiB | 553 → 518 | `copyOfRange(Object[], int, int)`                                                       | `java.util.Arrays`                                   |
| -66.0% | -17.499 MiB | 0.2% → 0.1% |    26.5 MiB → 9 MiB |   53 → 18 | `tuple(Object, Object)`                                                                 | `groovy.lang.Tuple`                                  |
| -11.3% | -16.999 MiB | 1.2% → 1.1% |   150 MiB → 133 MiB | 301 → 267 | `resize()`                                                                              | `java.util.HashMap`                                  |
| -21.6% | -16.499 MiB | 0.6% → 0.5% |   76.5 MiB → 60 MiB | 151 → 118 | `copyOf(byte[], int)`                                                                   | `java.util.Arrays`                                   |
| -19.4% | -13.499 MiB | 0.6% → 0.5% |   69.5 MiB → 56 MiB | 139 → 112 | `put(Object, Object)`                                                                   | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap` |
| -30.1% | -12.499 MiB | 0.3% → 0.2% |   41.5 MiB → 29 MiB |   83 → 58 | `methodType(Class, Class)`                                                              | `java.lang.invoke.MethodType`                        |
| -13.8% | -11.999 MiB | 0.7% → 0.6% |     87 MiB → 75 MiB | 174 → 150 | `lambda$makeRef$0(MatchOps$MatchKind, Predicate)`                                       | `java.util.stream.MatchOps`                          |
|  -4.7% | -10.999 MiB |        1.9% |   236 MiB → 225 MiB | 472 → 450 | `newNode(int, Object, Object, HashMap$Node)`                                            | `java.util.HashMap`                                  |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

| Change |       Delta |      % |              Size |   Samples | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------- |
| +12.0% | +31.499 MiB | 100.0% | 261 MiB → 293 MiB | 523 → 586 | `java.util.stream.StreamSupport:69` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size |       Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | ------------: | --------------------------------- |
|  +3.6% | +27.999 MiB | 100.0% | 776 MiB → 804 MiB | 1,553 → 1,609 | `java.lang.invoke.MethodType:400` |

##### `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |               Size |   Samples | Location                                |
| -----: | ----------: | -----: | -----------------: | --------: | --------------------------------------- |
| +14.8% | +13.999 MiB | 100.0% | 94.5 MiB → 108 MiB | 189 → 217 | `java.lang.invoke.MethodHandleImpl:631` |

##### `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

| Change |       Delta |             % |              Size |   Samples | Location                                          |
| -----: | ----------: | ------------: | ----------------: | --------: | ------------------------------------------------- |
|  +8.8% | +19.499 MiB | 90.0% → 92.9% | 221 MiB → 241 MiB | 443 → 482 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:232` |
| -17.9% |  -3.499 MiB |   7.9% → 6.2% | 19.5 MiB → 16 MiB |   39 → 32 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:225` |
| -50.0% |  -2.499 MiB |   2.0% → 1.0% |   5 MiB → 2.5 MiB |    10 → 5 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:229` |

##### `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |       Delta |      % |                Size |  Samples | Location                                            |
| -----: | ----------: | -----: | ------------------: | -------: | --------------------------------------------------- |
| +26.8% | +12.999 MiB | 100.0% | 48.5 MiB → 61.5 MiB | 97 → 123 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:362` |

##### `parameterArray()` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size |   Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------- |
|  +8.6% | +12.499 MiB | 100.0% | 145 MiB → 157 MiB | 290 → 315 | `java.lang.invoke.MethodType:885` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change |      Delta |      % |                Size |   Samples | Location                                |
| -----: | ---------: | -----: | ------------------: | --------: | --------------------------------------- |
| +19.4% | +9.999 MiB | 100.0% | 51.5 MiB → 61.5 MiB | 103 → 123 | `java.lang.invoke.MethodHandleImpl:373` |

##### `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` (`java.math.MutableBigInteger`)

|  Change |          Delta |             % |                Size |   Samples | Location                           |
| ------: | -------------: | ------------: | ------------------: | --------: | ---------------------------------- |
|  +16.2% |     +8.999 MiB | 98.2% → 97.0% | 55.5 MiB → 64.5 MiB | 111 → 129 | `java.math.MutableBigInteger:1211` |
| +100.0% | +1,023.998 KiB |   1.8% → 3.0% |       1 MiB → 2 MiB |     2 → 4 | `java.math.MutableBigInteger:1212` |

##### `lambda$setGuards$1(int)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change |      Delta |      % |              Size |  Samples | Location                                                      |
| -----: | ---------: | -----: | ----------------: | -------: | ------------------------------------------------------------- |
| +22.9% | +9.499 MiB | 100.0% | 41.5 MiB → 51 MiB | 83 → 102 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:960` |

##### `divideOneWord(int, MutableBigInteger)` (`java.math.MutableBigInteger`)

| Change |      Delta |      % |              Size |   Samples | Location                           |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------- |
| +14.4% | +9.499 MiB | 100.0% | 66 MiB → 75.5 MiB | 132 → 151 | `java.math.MutableBigInteger:1105` |

##### `of(byte, int, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |      Delta |      % |                Size | Samples | Location                                             |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------------------------- |
| +25.4% | +8.999 MiB | 100.0% | 35.5 MiB → 44.5 MiB | 71 → 89 | `java.lang.invoke.LambdaFormEditor$TransformKey:189` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |      Delta |      % |              Size | Samples | Location                              |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------- |
| +45.9% | +8.499 MiB | 100.0% | 18.5 MiB → 27 MiB | 37 → 54 | `java.lang.AbstractStringBuilder:101` |

##### `join(PredictionContext, PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache`)

| Change |      Delta |      % |            Size | Samples | Location                                                      |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------------------------------- |
| +50.0% | +7.999 MiB | 100.0% | 16 MiB → 24 MiB | 32 → 48 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache:73` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

| Change |      Delta |      % |                Size | Samples | Location                                               |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------ |
| +24.6% | +6.999 MiB | 100.0% | 28.5 MiB → 35.5 MiB | 57 → 71 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:71` |

##### `make(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`)

| Change |      Delta |      % |              Size |   Samples | Location                                           |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------------------------- |
|  +2.5% | +6.999 MiB | 100.0% | 277 MiB → 284 MiB | 554 → 568 | `java.lang.invoke.BoundMethodHandle$Species_L:225` |

##### `basicTypesOrd(Class[])` (`java.lang.invoke.LambdaForm$BasicType`)

| Change |      Delta |      % |            Size | Samples | Location                                    |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------------- |
| +25.9% | +6.999 MiB | 100.0% | 27 MiB → 34 MiB | 54 → 68 | `java.lang.invoke.LambdaForm$BasicType:211` |

##### `entrySet()` (`java.util.HashMap`)

| Change |      Delta |      % |                Size | Samples | Location                 |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------ |
| +27.5% | +6.999 MiB | 100.0% | 25.5 MiB → 32.5 MiB | 51 → 65 | `java.util.HashMap:1099` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |      Delta |      % |              Size | Samples | Location                     |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- |
| +41.9% | +6.499 MiB | 100.0% | 15.5 MiB → 22 MiB | 31 → 44 | `java.lang.StringLatin1:750` |

##### `divideAndRemainderKnuth(BigInteger)` (`java.math.BigInteger`)

| Change |       Delta |             % |                Size |   Samples | Location                    |
| -----: | ----------: | ------------: | ------------------: | --------: | --------------------------- |
| -34.9% | -26.499 MiB | 29.4% → 22.4% |   76 MiB → 49.5 MiB |  152 → 99 | `java.math.BigInteger:2475` |
| -25.8% | -15.499 MiB | 23.2% → 20.2% |   60 MiB → 44.5 MiB |  120 → 89 | `java.math.BigInteger:2476` |
|  +3.3% |  +1.999 MiB | 23.8% → 28.8% | 61.5 MiB → 63.5 MiB | 123 → 127 | `java.math.BigInteger:2473` |
|  +3.3% |  +1.999 MiB | 23.6% → 28.6% |     61 MiB → 63 MiB | 122 → 126 | `java.math.BigInteger:2474` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |       Delta |      % |              Size |   Samples | Location                                  |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------------- |
| -10.5% | -26.499 MiB | 100.0% | 251 MiB → 225 MiB | 503 → 450 | `java.lang.invoke.DirectMethodHandle:501` |

##### `valueOf(long)` (`java.lang.Long`)

| Change |       Delta |      % |              Size |   Samples | Location              |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------- |
| -14.0% | -23.999 MiB | 100.0% | 172 MiB → 148 MiB | 344 → 296 | `java.lang.Long:1207` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |              Size |   Samples | Location                                |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------- |
|  -5.3% | -23.499 MiB | 100.0% | 442 MiB → 419 MiB | 885 → 838 | `java.lang.invoke.MethodHandleImpl:667` |

##### `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector`)

| Change |        Delta |             % |              Size |   Samples | Location                                       |
| -----: | -----------: | ------------: | ----------------: | --------: | ---------------------------------------------- |
| -24.4% |  -20.499 MiB | 62.7% → 57.5% | 84 MiB → 63.5 MiB | 168 → 127 | `org.codehaus.groovy.vmplugin.v8.Selector:135` |
| -11.1% |   -2.499 MiB | 16.8% → 18.1% | 22.5 MiB → 20 MiB |   45 → 40 | `org.codehaus.groovy.vmplugin.v8.Selector:137` |
|  -1.8% | -511.999 KiB | 20.5% → 24.4% | 27.5 MiB → 27 MiB |   55 → 54 | `org.codehaus.groovy.vmplugin.v8.Selector:141` |

##### `<init>(Object, Object)` (`groovy.lang.Tuple2`)

| Change |       Delta |      % |           Size | Samples | Location                |
| -----: | ----------: | -----: | -------------: | ------: | ----------------------- |
| -75.0% | -20.999 MiB | 100.0% | 28 MiB → 7 MiB | 56 → 14 | `groovy.lang.Tuple2:30` |

##### `<init>(Pattern, CharSequence)` (`java.util.regex.Matcher`)

| Change |       Delta |             % |               Size |   Samples | Location                      |
| -----: | ----------: | ------------: | -----------------: | --------: | ----------------------------- |
| -27.5% | -20.499 MiB | 77.6% → 71.1% |  74.5 MiB → 54 MiB | 149 → 108 | `java.util.regex.Matcher:251` |
| +23.5% |  +1.999 MiB |  8.9% → 13.8% | 8.5 MiB → 10.5 MiB |   17 → 21 | `java.util.regex.Matcher:253` |
| -11.5% |  -1.499 MiB | 13.5% → 15.1% |  13 MiB → 11.5 MiB |   26 → 23 | `java.util.regex.Matcher:252` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size |   Samples | Location                |
| -----: | ----------: | -----: | ------------------: | --------: | ----------------------- |
| -26.3% | -17.999 MiB | 100.0% | 68.5 MiB → 50.5 MiB | 137 → 101 | `java.util.Arrays:3482` |

##### `getCachedContext(PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.ATN`)

| Change |       Delta |      % |                Size |  Samples | Location                                    |
| -----: | ----------: | -----: | ------------------: | -------: | ------------------------------------------- |
| -28.8% | -17.999 MiB | 100.0% | 62.5 MiB → 44.5 MiB | 125 → 89 | `groovyjarjarantlr4.v4.runtime.atn.ATN:120` |

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

| Change |       Delta |      % |              Size |   Samples | Location                |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- |
|  -6.3% | -17.499 MiB | 100.0% | 276 MiB → 259 MiB | 553 → 518 | `java.util.Arrays:3768` |

##### `tuple(Object, Object)` (`groovy.lang.Tuple`)

| Change |       Delta |      % |             Size | Samples | Location                |
| -----: | ----------: | -----: | ---------------: | ------: | ----------------------- |
| -66.0% | -17.499 MiB | 100.0% | 26.5 MiB → 9 MiB | 53 → 18 | `groovy.lang.Tuple:142` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- |
| -11.3% | -16.999 MiB | 100.0% | 150 MiB → 133 MiB | 301 → 267 | `java.util.HashMap:710` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |              Size |   Samples | Location                |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- |
| -21.6% | -16.499 MiB | 100.0% | 76.5 MiB → 60 MiB | 151 → 118 | `java.util.Arrays:3541` |

##### `put(Object, Object)` (`groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`)

| Change |      Delta |             % |                Size | Samples | Location                                                 |
| -----: | ---------: | ------------: | ------------------: | ------: | -------------------------------------------------------- |
| -27.1% | -9.499 MiB | 50.4% → 45.5% |   35 MiB → 25.5 MiB | 70 → 51 | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap:117` |
| -11.6% | -3.999 MiB | 49.6% → 54.5% | 34.5 MiB → 30.5 MiB | 69 → 61 | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap:106` |

##### `methodType(Class, Class)` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size | Samples | Location                          |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------- |
| -30.1% | -12.499 MiB | 100.0% | 41.5 MiB → 29 MiB | 83 → 58 | `java.lang.invoke.MethodType:340` |

##### `lambda$makeRef$0(MatchOps$MatchKind, Predicate)` (`java.util.stream.MatchOps`)

| Change |       Delta |      % |            Size |   Samples | Location                       |
| -----: | ----------: | -----: | --------------: | --------: | ------------------------------ |
| -13.8% | -11.999 MiB | 100.0% | 87 MiB → 75 MiB | 174 → 150 | `java.util.stream.MatchOps:97` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                 |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------ |
|  -4.7% | -10.999 MiB | 100.0% | 236 MiB → 225 MiB | 472 → 450 | `java.util.HashMap:1909` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|      Change |       Delta |             % |                Size |         Samples | Function                                         | Location                                                                                                |
| ----------: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|   +80663.6% | +11.815 GiB |  0.1% → 99.6% |   15 MiB → 11.8 GiB |     30 → 24,227 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003010da000 → java.lang.invoke.LambdaForm$MH.0x00000070010c6400` |
|  +265834.3% | +11.682 GiB | <0.1% → 98.4% |  4.5 MiB → 11.7 GiB |      9 → 23,932 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301112400 → java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| +2307608.6% | +11.267 GiB | <0.1% → 94.9% |  512 KiB → 11.3 GiB |      1 → 23,075 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030122d000 → java.lang.invoke.LambdaForm$MH.0x0000007001182800` |
|    +1199.1% | +10.141 GiB |  7.0% → 92.5% |    866 MiB → 11 GiB |  1,730 → 22,500 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003012bbc00 → java.lang.invoke.LambdaForm$MH.0x0000007001298c00` |
| +1024100.0% |     +10 GiB | <0.1% → 84.2% |      1 MiB → 10 GiB |      2 → 20,484 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010a8000 → java.lang.invoke.LambdaForm$MH.0x00000070015ae000` |
|  +146214.3% |  +9.995 GiB |  0.1% → 84.2% |      7 MiB → 10 GiB |     14 → 20,484 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301467400 → java.lang.invoke.LambdaForm$MH.0x00000070015adc00` |
|   +15425.8% |  +9.942 GiB |  0.5% → 84.3% |     66 MiB → 10 GiB |    132 → 20,494 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301541800 → java.lang.invoke.LambdaForm$MH.0x00000070015ab000` |
| +1887900.0% |  +9.218 GiB | <0.1% → 77.6% |  512 KiB → 9.22 GiB |      1 → 18,880 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301669800 → java.lang.invoke.LambdaForm$MH.0x0000007001647400` |
|  +314566.7% |  +9.215 GiB | <0.1% → 77.6% |    3 MiB → 9.22 GiB |      6 → 18,880 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030164d400 → java.lang.invoke.LambdaForm$MH.0x0000007001646c00` |
|  +188700.0% |  +9.213 GiB | <0.1% → 77.6% |    5 MiB → 9.22 GiB |     10 → 18,880 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301561000 → java.lang.invoke.LambdaForm$MH.0x0000007001647800` |
|     +434.3% |  +9.207 GiB | 17.5% → 95.4% | 2.12 GiB → 11.3 GiB |  4,342 → 23,197 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003010da400 → java.lang.invoke.LambdaForm$MH.0x00000070010d4c00` |
| +1747608.6% |  +8.533 GiB | <0.1% → 71.9% |  512 KiB → 8.53 GiB |      1 → 17,475 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030134c000 → java.lang.invoke.LambdaForm$MH.0x000000700128a400` |
|   +30393.1% |  +8.459 GiB |  0.2% → 71.5% | 28.5 MiB → 8.49 GiB |     57 → 17,379 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003012b1400 → java.lang.invoke.LambdaForm$MH.0x0000007001379c00` |
|  +783800.0% |  +7.654 GiB | <0.1% → 64.5% |    1 MiB → 7.66 GiB |      2 → 15,678 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301489000 → java.lang.invoke.LambdaForm$MH.0x00000070017ce800` |
|     +214.6% |  +5.783 GiB | 22.2% → 71.4% | 2.69 GiB → 8.48 GiB |  5,516 → 17,360 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003012bd800 → java.lang.invoke.LambdaForm$MH.0x0000007001288800` |
|     +179.9% |  +3.696 GiB | 17.0% → 48.4% | 2.06 GiB → 5.75 GiB |  4,209 → 11,777 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301344400 → java.lang.invoke.LambdaForm$MH.0x000000700137a000` |
|     +157.7% |  +3.215 GiB | 16.8% → 44.3% | 2.04 GiB → 5.25 GiB |  4,176 → 10,759 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301344c00 → java.lang.invoke.LambdaForm$MH.0x0000007001370400` |
|     +260.3% |  +2.689 GiB |  8.5% → 31.4% | 1.03 GiB → 3.72 GiB |   2,116 → 7,622 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301350400 → java.lang.invoke.LambdaForm$MH.0x00000070012a1000` |
|    +3704.3% |  +2.586 GiB |  0.6% → 22.4% | 71.5 MiB → 2.66 GiB |     143 → 5,438 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003011ca400 → java.lang.invoke.LambdaForm$MH.0x00000070012a0c00` |
|      +24.5% |  +2.135 GiB | 72.0% → 91.5% | 8.73 GiB → 10.9 GiB | 17,878 → 22,251 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003012a9400 → java.lang.invoke.LambdaForm$MH.0x0000007001292400` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |             % |                Size |        Samples | Function                                         | Location                                                                                                |
| ------: | ----------: | ------------: | ------------------: | -------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|  -99.9% | -11.945 GiB |  98.6% → 0.1% |    12 GiB → 6.5 MiB |    24,476 → 13 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000030102b000 → java.lang.invoke.LambdaForm$MH.0x0000007001115800` |
| -100.0% | -11.554 GiB | 95.3% → <0.1% |    11.6 GiB → 1 MiB |     23,664 → 2 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003011c4c00 → java.lang.invoke.LambdaForm$MH.0x00000070011ebc00` |
|  -95.1% | -11.497 GiB |  99.7% → 5.0% |  12.1 GiB → 603 MiB | 24,750 → 1,206 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003010c6800 → java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
|  -99.8% | -11.108 GiB |  91.8% → 0.2% |   11.1 GiB → 24 MiB |    22,797 → 48 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003012b1000 → java.lang.invoke.LambdaForm$MH.0x00000070011eb000` |
|  -92.6% | -10.762 GiB |  95.9% → 7.2% |  11.6 GiB → 878 MiB | 23,795 → 1,753 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003012b3400 → java.lang.invoke.LambdaForm$MH.0x000000700129d000` |
| -100.0% |  -10.28 GiB | 84.8% → <0.1% |    10.3 GiB → 5 MiB |    21,064 → 10 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003015c5000 → java.lang.invoke.LambdaForm$MH.0x000000700143d000` |
|  -99.9% | -10.267 GiB |  84.8% → 0.1% |   10.3 GiB → 13 MiB |    21,054 → 26 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003015c8000 → java.lang.invoke.LambdaForm$MH.0x000000700168d000` |
|  -99.8% | -10.261 GiB |  84.8% → 0.2% |   10.3 GiB → 20 MiB |    21,055 → 40 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003015c7c00 → java.lang.invoke.LambdaForm$MH.0x0000007001453800` |
|  -82.3% |  -9.534 GiB | 95.6% → 17.3% | 11.6 GiB → 2.05 GiB | 23,728 → 4,204 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003010d5000 → java.lang.invoke.LambdaForm$MH.0x00000070010d9c00` |
| -100.0% |  -9.517 GiB | 78.5% → <0.1% |  9.52 GiB → 512 KiB |     19,492 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301662800 → java.lang.invoke.LambdaForm$MH.0x0000007001441800` |
| -100.0% |  -9.516 GiB | 78.5% → <0.1% |  9.52 GiB → 1.5 MiB |     19,492 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000301662000 → java.lang.invoke.LambdaForm$MH.0x0000007001466400` |
|  -99.9% |  -9.505 GiB |  78.5% → 0.1% |   9.52 GiB → 12 MiB |    19,492 → 24 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301662c00 → java.lang.invoke.LambdaForm$MH.0x000000700166e000` |
| -100.0% |  -8.682 GiB | 71.6% → <0.1% |  8.68 GiB → 1.5 MiB |     17,782 → 3 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301399000 → java.lang.invoke.LambdaForm$MH.0x0000007001392000` |
|  -99.6% |  -8.626 GiB |  71.4% → 0.3% | 8.66 GiB → 31.5 MiB |    17,728 → 63 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003012a3800 → java.lang.invoke.LambdaForm$MH.0x0000007001292800` |
|  -99.8% |  -7.861 GiB |  65.0% → 0.1% | 7.88 GiB → 17.5 MiB |    16,136 → 35 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003017e9c00 → java.lang.invoke.LambdaForm$MH.0x00000070017e7800` |
|  -74.7% |  -4.459 GiB | 49.2% → 12.7% | 5.97 GiB → 1.51 GiB | 12,223 → 3,093 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301399400 → java.lang.invoke.LambdaForm$MH.0x00000070012b4c00` |
|  -70.1% |  -3.844 GiB | 45.3% → 13.8% | 5.49 GiB → 1.64 GiB | 11,235 → 3,364 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301390000 → java.lang.invoke.LambdaForm$MH.0x00000070012a1800` |
| -100.0% |  -3.781 GiB | 31.2% → <0.1% |  3.78 GiB → 1.5 MiB |      7,746 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000003012bcc00 → java.lang.invoke.LambdaForm$MH.0x0000007001282400` |
|  -98.3% |  -2.099 GiB |  17.6% → 0.3% | 2.13 GiB → 36.5 MiB |     4,370 → 73 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003010c7c00 → java.lang.invoke.LambdaForm$MH.0x00000070010d5000` |
|  -99.3% |  -1.661 GiB |  13.8% → 0.1% |   1.67 GiB → 12 MiB |     3,427 → 24 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000003012c0000 → java.lang.invoke.LambdaForm$MH.0x0000007001182400` |
