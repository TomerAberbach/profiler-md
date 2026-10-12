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

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `stream(Spliterator, boolean)` (`java.util.stream.StreamSupport`)

| Change |          Delta |             % |              Size |   Samples | Caller                       | Location               |
| -----: | -------------: | ------------: | ----------------: | --------: | ---------------------------- | ---------------------- |
| +11.9% |    +30.499 MiB | 97.9% → 97.8% | 256 MiB → 286 MiB | 512 → 573 | `stream(Object[], int, int)` | `java.util.Arrays`     |
| +18.2% | +1,023.998 KiB |   2.1% → 2.2% | 5.5 MiB → 6.5 MiB |   11 → 13 | `stream()`                   | `java.util.Collection` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change |          Delta |             % |              Size |   Samples | Caller                                | Location                      |
| ------: | -------------: | ------------: | ----------------: | --------: | ------------------------------------- | ----------------------------- |
|  +10.6% |    +37.999 MiB | 46.2% → 49.3% | 358 MiB → 396 MiB | 717 → 793 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |
|  -13.9% |     -8.499 MiB |   7.9% → 6.5% | 61 MiB → 52.5 MiB | 122 → 105 | `methodType(Class, Class)`            | `java.lang.invoke.MethodType` |
|   -0.3% | -1,023.998 KiB | 45.9% → 44.2% | 356 MiB → 355 MiB | 713 → 711 | `insertParameterTypes(int, Class[])`  | `java.lang.invoke.MethodType` |
| removed |   -511.999 KiB |   0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `changeParameterType(int, Class)`     | `java.lang.invoke.MethodType` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

| Change |       Delta |      % |              Size |       Samples | Caller               | Location              |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------------- | --------------------- |
|  +3.2% | +17.999 MiB | 100.0% | 570 MiB → 588 MiB | 1,141 → 1,177 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |               Size |   Samples | Caller                                                    | Location                         |
| -----: | ----------: | -----: | -----------------: | --------: | --------------------------------------------------------- | -------------------------------- |
| +14.8% | +13.999 MiB | 100.0% | 94.5 MiB → 108 MiB | 189 → 217 | `guardWithTest(MethodHandle, MethodHandle, MethodHandle)` | `java.lang.invoke.MethodHandles` |

##### `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

| Change |      Delta |             % |              Size |   Samples | Caller                                              | Location                                      |
| -----: | ---------: | ------------: | ----------------: | --------: | --------------------------------------------------- | --------------------------------------------- |
| +20.0% | +6.999 MiB | 14.2% → 16.2% |   35 MiB → 42 MiB |   70 → 84 | `transform(ATNState, PredictionContext, boolean)`   | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |
|  +2.5% | +4.999 MiB | 81.5% → 79.2% | 200 MiB → 205 MiB | 401 → 411 | `transform(ATNState, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |
| +14.3% | +1.499 MiB |   4.3% → 4.6% | 10.5 MiB → 12 MiB |   21 → 24 | `transform(ATNState, LexerActionExecutor, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change |       Delta |             % |              Size | Samples | Caller                                                                                           | Location                                        |
| -----: | ----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| +57.5% | +11.499 MiB | 41.2% → 51.2% | 20 MiB → 31.5 MiB | 40 → 63 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`   | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  +5.3% |  +1.499 MiB | 58.8% → 48.8% | 28.5 MiB → 30 MiB | 57 → 60 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `parameterArray()` (`java.lang.invoke.MethodType`)

| Change |          Delta |             % |                Size | Samples | Caller                      | Location                                                  |
| -----: | -------------: | ------------: | ------------------: | ------: | --------------------------- | --------------------------------------------------------- |
| +20.0% |     +6.499 MiB | 22.4% → 24.8% |   32.5 MiB → 39 MiB | 65 → 78 | `correctCoerce()`           | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| +12.3% |     +3.499 MiB | 19.7% → 20.3% |   28.5 MiB → 32 MiB | 57 → 64 | `correctWrapping()`         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  +5.8% |     +1.999 MiB | 23.8% → 23.2% | 34.5 MiB → 36.5 MiB | 69 → 73 | `correctParameterLength()`  | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  +2.2% | +1,023.998 KiB | 31.0% → 29.2% |     45 MiB → 46 MiB | 90 → 92 | `setGuards(Object)`         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| -11.1% |   -511.999 KiB |   3.1% → 2.5% |     4.5 MiB → 4 MiB |   9 → 8 | `removeWrapper(MethodType)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change |      Delta |      % |                Size |   Samples | Caller                                                                    | Location                            |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------------------------------------------------- | ----------------------------------- |
| +19.4% | +9.999 MiB | 100.0% | 51.5 MiB → 61.5 MiB | 103 → 123 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` (`java.math.MutableBigInteger`)

| Change |      Delta |      % |                Size |   Samples | Caller                                              | Location                      |
| -----: | ---------: | -----: | ------------------: | --------: | --------------------------------------------------- | ----------------------------- |
| +17.7% | +9.999 MiB | 100.0% | 56.5 MiB → 66.5 MiB | 113 → 133 | `divideKnuth(MutableBigInteger, MutableBigInteger)` | `java.math.MutableBigInteger` |

##### `lambda$setGuards$1(int)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change |      Delta |      % |              Size |  Samples | Caller       | Location                                                                             |
| -----: | ---------: | -----: | ----------------: | -------: | ------------ | ------------------------------------------------------------------------------------ |
| +22.9% | +9.499 MiB | 100.0% | 41.5 MiB → 51 MiB | 83 → 102 | `apply(int)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector$$Lambda.0x0000007001092d80` |

##### `divideOneWord(int, MutableBigInteger)` (`java.math.MutableBigInteger`)

| Change |       Delta |             % |              Size |   Samples | Caller                                                       | Location                      |
| -----: | ----------: | ------------: | ----------------: | --------: | ------------------------------------------------------------ | ----------------------------- |
| +21.0% | +12.499 MiB | 90.2% → 95.4% | 59.5 MiB → 72 MiB | 119 → 144 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` | `java.math.MutableBigInteger` |
| -46.2% |  -2.999 MiB |   9.8% → 4.6% | 6.5 MiB → 3.5 MiB |    13 → 7 | `divide(long, MutableBigInteger)`                            | `java.math.MutableBigInteger` |

##### `of(byte, int, int, int)` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

| Change |      Delta |      % |                Size | Samples | Caller                                 | Location                            |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------------- | ----------------------------------- |
| +25.4% | +8.999 MiB | 100.0% | 35.5 MiB → 44.5 MiB | 71 → 89 | `spreadArgumentsForm(int, Class, int)` | `java.lang.invoke.LambdaFormEditor` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |          Delta |             % |              Size | Samples | Caller        | Location                  |
| -----: | -------------: | ------------: | ----------------: | ------: | ------------- | ------------------------- |
| +68.2% |     +7.499 MiB | 59.5% → 68.5% | 11 MiB → 18.5 MiB | 22 → 37 | `<init>()`    | `java.lang.StringBuilder` |
| +13.3% | +1,023.998 KiB | 40.5% → 31.5% | 7.5 MiB → 8.5 MiB | 15 → 17 | `<init>(int)` | `java.lang.StringBuilder` |

##### `join(PredictionContext, PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache`)

|  Change |      Delta |             % |                Size | Samples | Caller                                                               | Location                                               |
| ------: | ---------: | ------------: | ------------------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------ |
|  +41.4% | +5.999 MiB | 90.6% → 85.4% | 14.5 MiB → 20.5 MiB | 29 → 41 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`  |
| +133.3% | +1.999 MiB |  9.4% → 14.6% |   1.5 MiB → 3.5 MiB |   3 → 7 | `isConflicted(ATNConfigSet, PredictionContextCache)`                 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

| Change |      Delta |      % |                Size | Samples | Caller                                                                          | Location                                        |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| +24.6% | +6.999 MiB | 100.0% | 28.5 MiB → 35.5 MiB | 57 → 71 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `make(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`)

| Change |      Delta |      % |              Size |   Samples | Caller                        | Location                             |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------- | ------------------------------------ |
|  +2.5% | +6.999 MiB | 100.0% | 277 MiB → 284 MiB | 554 → 568 | `makeReinvoker(MethodHandle)` | `java.lang.invoke.BoundMethodHandle` |

##### `basicTypesOrd(Class[])` (`java.lang.invoke.LambdaForm$BasicType`)

| Change |      Delta |      % |            Size | Samples | Caller                                  | Location                            |
| -----: | ---------: | -----: | --------------: | ------: | --------------------------------------- | ----------------------------------- |
| +25.9% | +6.999 MiB | 100.0% | 27 MiB → 34 MiB | 54 → 68 | `collectArgumentsForm(int, MethodType)` | `java.lang.invoke.LambdaFormEditor` |

##### `entrySet()` (`java.util.HashMap`)

| Change |      Delta |      % |                Size | Samples | Caller                                                                    | Location                            |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| +27.5% | +6.999 MiB | 100.0% | 25.5 MiB → 32.5 MiB | 51 → 65 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |        Delta |             % |            Size | Samples | Caller                | Location                 |
| -----: | -----------: | ------------: | --------------: | ------: | --------------------- | ------------------------ |
| +46.2% |   +5.999 MiB | 83.9% → 86.4% | 13 MiB → 19 MiB | 26 → 38 | `substring(int, int)` | `java.lang.String`       |
| +20.0% | +511.999 KiB | 16.1% → 13.6% | 2.5 MiB → 3 MiB |   5 → 6 | `trim(byte[])`        | `java.lang.StringLatin1` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLLLL`)

| Change |      Delta |      % |              Size | Samples | Caller                                                                                         | Location                                     |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| +16.3% | +6.499 MiB | 100.0% | 40 MiB → 46.5 MiB | 80 → 93 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `make(MethodType, LambdaForm, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LL`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                 | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------ | -------------------------------------------- |
| -13.5% | -51.999 MiB | 100.0% | 385 MiB → 333 MiB | 771 → 667 | `invokeStatic(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `divideAndRemainderKnuth(BigInteger)` (`java.math.BigInteger`)

| Change |       Delta |      % |              Size |   Samples | Caller                           | Location               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------- | ---------------------- |
| -14.7% | -37.999 MiB | 100.0% | 258 MiB → 220 MiB | 517 → 441 | `divideAndRemainder(BigInteger)` | `java.math.BigInteger` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |        Delta |             % |              Size |   Samples | Caller                             | Location                                             |
| ------: | -----------: | ------------: | ----------------: | --------: | ---------------------------------- | ---------------------------------------------------- |
|  -12.6% |  -28.499 MiB | 90.3% → 88.2% | 227 MiB → 198 MiB | 454 → 397 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  +80.0% |   +3.999 MiB |   2.0% → 4.0% |     5 MiB → 9 MiB |   10 → 18 | `newInvokeSpecial(Object, int)`    | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  -66.7% |   -1.999 MiB |   1.2% → 0.4% |     3 MiB → 1 MiB |     6 → 2 | `newInvokeSpecial(Object)`         | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -511.999 KiB |   0.2% → 0.0% |     512 KiB → 0 B |     1 → 0 | `newInvokeSpecial(Object)`         | `java.lang.invoke.LambdaForm$DMH.0x0000007001541000` |
| removed | -511.999 KiB |   0.2% → 0.0% |     512 KiB → 0 B |     1 → 0 | `newInvokeSpecial(Object)`         | `java.lang.invoke.LambdaForm$DMH.0x00000003016be800` |

##### `valueOf(long)` (`java.lang.Long`)

| Change |       Delta |             % |              Size |   Samples | Caller                                   | Location                                         |
| -----: | ----------: | ------------: | ----------------: | --------: | ---------------------------------------- | ------------------------------------------------ |
| -13.2% | -21.499 MiB | 94.5% → 95.3% | 162 MiB → 141 MiB | 325 → 282 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |
| -26.3% |  -2.499 MiB |   5.5% → 4.7% |   9.5 MiB → 7 MiB |   19 → 14 | `boxLong(long)`                          | `sun.invoke.util.ValueConversions`               |

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

| Change |       Delta |      % |              Size |   Samples | Caller                    | Location                  |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------- | ------------------------- |
|  -6.9% | -23.999 MiB | 100.0% | 348 MiB → 324 MiB | 697 → 649 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `makeBlockInliningWrapper(MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

| Change |       Delta |      % |              Size |   Samples | Caller                  | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------- |
|  -5.3% | -23.499 MiB | 100.0% | 442 MiB → 419 MiB | 885 → 838 | `profile(MethodHandle)` | `java.lang.invoke.MethodHandleImpl` |

##### `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                                                       | Location                                        |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| -17.5% | -23.499 MiB | 100.0% | 134 MiB → 110 MiB | 268 → 221 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `make(MethodType, LambdaForm, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLL`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                                 | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
|  -7.8% | -21.999 MiB | 100.0% | 283 MiB → 261 MiB | 566 → 522 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>(Object, Object)` (`groovy.lang.Tuple2`)

| Change |       Delta |      % |           Size | Samples | Caller                  | Location            |
| -----: | ----------: | -----: | -------------: | ------: | ----------------------- | ------------------- |
| -75.0% | -20.999 MiB | 100.0% | 28 MiB → 7 MiB | 56 → 14 | `tuple(Object, Object)` | `groovy.lang.Tuple` |

##### `<init>(Pattern, CharSequence)` (`java.util.regex.Matcher`)

| Change |       Delta |      % |            Size |   Samples | Caller                  | Location                  |
| -----: | ----------: | -----: | --------------: | --------: | ----------------------- | ------------------------- |
| -20.8% | -19.999 MiB | 100.0% | 96 MiB → 76 MiB | 192 → 152 | `matcher(CharSequence)` | `java.util.regex.Pattern` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |               Size | Samples | Caller                                                               | Location                                              |
| -----: | -----------: | ------------: | -----------------: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| -41.0% |  -12.499 MiB | 44.5% → 35.6% |  30.5 MiB → 18 MiB | 61 → 36 | `toArray()`                                                          | `java.util.ArrayList`                                 |
| -38.1% |   -3.999 MiB | 15.3% → 12.9% | 10.5 MiB → 6.5 MiB | 21 → 13 | `asCollectorType(Class, int, int)`                                   | `java.lang.invoke.MethodType`                         |
| -10.6% |   -2.499 MiB | 34.3% → 41.6% |  23.5 MiB → 21 MiB | 47 → 42 | `grow(int)`                                                          | `java.util.ArrayList`                                 |
| +25.0% | +511.999 KiB |   2.9% → 5.0% |    2 MiB → 2.5 MiB |   4 → 5 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
| +25.0% | +511.999 KiB |   2.9% → 5.0% |    2 MiB → 2.5 MiB |   4 → 5 | `clone()`                                                            | `java.util.ArrayList`                                 |

##### `getCachedContext(PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.ATN`)

| Change |       Delta |      % |                Size |  Samples | Caller                          | Location                                         |
| -----: | ----------: | -----: | ------------------: | -------: | ------------------------------- | ------------------------------------------------ |
| -28.8% | -17.999 MiB | 100.0% | 62.5 MiB → 44.5 MiB | 125 → 89 | `optimizeConfigs(ATNSimulator)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `copyOfRange(Object[], int, int)` (`java.util.Arrays`)

| Change |       Delta |             % |              Size |   Samples | Caller                                                           | Location                         |
| -----: | ----------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------- | -------------------------------- |
| -19.3% | -26.499 MiB | 49.7% → 42.9% | 137 MiB → 111 MiB | 275 → 222 | `dropParameterTypes(int, int)`                                   | `java.lang.invoke.MethodType`    |
|  +6.5% |  +8.999 MiB | 50.3% → 57.1% | 139 MiB → 148 MiB | 278 → 296 | `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` | `java.lang.invoke.MethodHandles` |

##### `tuple(Object, Object)` (`groovy.lang.Tuple`)

| Change |        Delta |             % |            Size | Samples | Caller                                                                         | Location                    |
| -----: | -----------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------ | --------------------------- |
| -94.4% |  -16.999 MiB | 67.9% → 11.1% |  18 MiB → 1 MiB |  36 → 2 | `createMetaMethodAndMetaProperty(Class, Class, String, boolean, boolean)`      | `groovy.lang.MetaClassImpl` |
| -33.3% | -511.999 KiB |  5.7% → 11.1% | 1.5 MiB → 1 MiB |   3 → 2 | `invokeMethod(MetaMethod, Object, Closure, String, Class[], Object[], Object)` | `groovy.lang.MetaClassImpl` |

##### `resize()` (`java.util.HashMap`)

|  Change |        Delta |             % |              Size |   Samples | Caller                                          | Location            |
| ------: | -----------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  -11.1% |  -16.499 MiB | 99.0% → 99.3% | 149 MiB → 132 MiB | 298 → 265 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| removed | -511.999 KiB |   0.3% → 0.0% |     512 KiB → 0 B |     1 → 0 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |              Size |  Samples | Caller                        | Location                          |
| -----: | ----------: | ------------: | ----------------: | -------: | ----------------------------- | --------------------------------- |
| -39.6% | -10.499 MiB | 34.7% → 26.7% | 26.5 MiB → 16 MiB |  51 → 30 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
| -12.0% |  -5.999 MiB | 65.3% → 73.3% |   50 MiB → 44 MiB | 100 → 88 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `put(Object, Object)` (`groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                                                  | Location                                              |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| -19.4% | -13.499 MiB | 100.0% | 69.5 MiB → 56 MiB | 139 → 112 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `methodType(Class, Class)` (`java.lang.invoke.MethodType`)

| Change |       Delta |      % |              Size | Samples | Caller              | Location                                                  |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------- | --------------------------------------------------------- |
| -30.1% | -12.499 MiB | 100.0% | 41.5 MiB → 29 MiB | 83 → 58 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `lambda$makeRef$0(MatchOps$MatchKind, Predicate)` (`java.util.stream.MatchOps`)

| Change |       Delta |      % |            Size |   Samples | Caller  | Location                                               |
| -----: | ----------: | -----: | --------------: | --------: | ------- | ------------------------------------------------------ |
| -13.8% | -11.999 MiB | 100.0% | 87 MiB → 75 MiB | 174 → 150 | `get()` | `java.util.stream.MatchOps$$Lambda.0x0000007001052e80` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Caller                                          | Location            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  -4.7% | -10.999 MiB | 100.0% | 236 MiB → 225 MiB | 472 → 450 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|      Change |       Delta |             % |                Size |         Samples | Function                                         | Location                                            |
| ----------: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | --------------------------------------------------- |
|   +80663.6% | +11.815 GiB |  0.1% → 99.6% |   15 MiB → 11.8 GiB |     30 → 24,227 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400` |
|  +265834.3% | +11.682 GiB | <0.1% → 98.4% |  4.5 MiB → 11.7 GiB |      9 → 23,932 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| +2307608.6% | +11.267 GiB | <0.1% → 94.9% |  512 KiB → 11.3 GiB |      1 → 23,075 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001182800` |
|    +1199.1% | +10.141 GiB |  7.0% → 92.5% |    866 MiB → 11 GiB |  1,730 → 22,500 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001298c00` |
| +1024100.0% |     +10 GiB | <0.1% → 84.2% |      1 MiB → 10 GiB |      2 → 20,484 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070015ae000` |
|  +146214.3% |  +9.995 GiB |  0.1% → 84.2% |      7 MiB → 10 GiB |     14 → 20,484 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070015adc00` |
|   +15425.8% |  +9.942 GiB |  0.5% → 84.3% |     66 MiB → 10 GiB |    132 → 20,494 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070015ab000` |
| +1887900.0% |  +9.218 GiB | <0.1% → 77.6% |  512 KiB → 9.22 GiB |      1 → 18,880 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001647400` |
|  +314566.7% |  +9.215 GiB | <0.1% → 77.6% |    3 MiB → 9.22 GiB |      6 → 18,880 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001646c00` |
|  +188700.0% |  +9.213 GiB | <0.1% → 77.6% |    5 MiB → 9.22 GiB |     10 → 18,880 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001647800` |
|     +434.3% |  +9.207 GiB | 17.5% → 95.4% | 2.12 GiB → 11.3 GiB |  4,342 → 23,197 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010d4c00` |
| +1747608.6% |  +8.533 GiB | <0.1% → 71.9% |  512 KiB → 8.53 GiB |      1 → 17,475 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700128a400` |
|   +30393.1% |  +8.459 GiB |  0.2% → 71.5% | 28.5 MiB → 8.49 GiB |     57 → 17,379 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001379c00` |
|  +783800.0% |  +7.654 GiB | <0.1% → 64.5% |    1 MiB → 7.66 GiB |      2 → 15,678 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017ce800` |
|     +214.6% |  +5.783 GiB | 22.2% → 71.4% | 2.69 GiB → 8.48 GiB |  5,516 → 17,360 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001288800` |
|     +179.9% |  +3.696 GiB | 17.0% → 48.4% | 2.06 GiB → 5.75 GiB |  4,209 → 11,777 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700137a000` |
|     +157.7% |  +3.215 GiB | 16.8% → 44.3% | 2.04 GiB → 5.25 GiB |  4,176 → 10,759 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001370400` |
|     +260.3% |  +2.689 GiB |  8.5% → 31.4% | 1.03 GiB → 3.72 GiB |   2,116 → 7,622 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012a1000` |
|    +3704.3% |  +2.586 GiB |  0.6% → 22.4% | 71.5 MiB → 2.66 GiB |     143 → 5,438 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012a0c00` |
|      +24.5% |  +2.135 GiB | 72.0% → 91.5% | 8.73 GiB → 10.9 GiB | 17,878 → 22,251 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001292400` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |             % |                Size |        Samples | Function                                         | Location                                            |
| ------: | ----------: | ------------: | ------------------: | -------------: | ------------------------------------------------ | --------------------------------------------------- |
|  -99.9% | -11.945 GiB |  98.6% → 0.1% |    12 GiB → 6.5 MiB |    24,476 → 13 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001115800` |
| -100.0% | -11.554 GiB | 95.3% → <0.1% |    11.6 GiB → 1 MiB |     23,664 → 2 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070011ebc00` |
|  -95.1% | -11.497 GiB |  99.7% → 5.0% |  12.1 GiB → 603 MiB | 24,750 → 1,206 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
|  -99.8% | -11.108 GiB |  91.8% → 0.2% |   11.1 GiB → 24 MiB |    22,797 → 48 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070011eb000` |
|  -92.6% | -10.762 GiB |  95.9% → 7.2% |  11.6 GiB → 878 MiB | 23,795 → 1,753 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700129d000` |
| -100.0% |  -10.28 GiB | 84.8% → <0.1% |    10.3 GiB → 5 MiB |    21,064 → 10 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700143d000` |
|  -99.9% | -10.267 GiB |  84.8% → 0.1% |   10.3 GiB → 13 MiB |    21,054 → 26 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700168d000` |
|  -99.8% | -10.261 GiB |  84.8% → 0.2% |   10.3 GiB → 20 MiB |    21,055 → 40 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001453800` |
|  -82.3% |  -9.534 GiB | 95.6% → 17.3% | 11.6 GiB → 2.05 GiB | 23,728 → 4,204 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010d9c00` |
| -100.0% |  -9.517 GiB | 78.5% → <0.1% |  9.52 GiB → 512 KiB |     19,492 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001441800` |
| -100.0% |  -9.516 GiB | 78.5% → <0.1% |  9.52 GiB → 1.5 MiB |     19,492 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001466400` |
|  -99.9% |  -9.505 GiB |  78.5% → 0.1% |   9.52 GiB → 12 MiB |    19,492 → 24 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700166e000` |
| -100.0% |  -8.682 GiB | 71.6% → <0.1% |  8.68 GiB → 1.5 MiB |     17,782 → 3 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001392000` |
|  -99.6% |  -8.626 GiB |  71.4% → 0.3% | 8.66 GiB → 31.5 MiB |    17,728 → 63 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001292800` |
|  -99.8% |  -7.861 GiB |  65.0% → 0.1% | 7.88 GiB → 17.5 MiB |    16,136 → 35 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017e7800` |
|  -74.7% |  -4.459 GiB | 49.2% → 12.7% | 5.97 GiB → 1.51 GiB | 12,223 → 3,093 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012b4c00` |
|  -70.1% |  -3.844 GiB | 45.3% → 13.8% | 5.49 GiB → 1.64 GiB | 11,235 → 3,364 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012a1800` |
| -100.0% |  -3.781 GiB | 31.2% → <0.1% |  3.78 GiB → 1.5 MiB |      7,746 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001282400` |
|  -98.3% |  -2.099 GiB |  17.6% → 0.3% | 2.13 GiB → 36.5 MiB |     4,370 → 73 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d5000` |
|  -99.3% |  -1.661 GiB |  13.8% → 0.1% |   1.67 GiB → 12 MiB |     3,427 → 24 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001182400` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6400`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                  | Location                                             |
| ------: | -----------: | ------------: | -------------: | ---------: | --------------------------------------- | ---------------------------------------------------- |
|     new |   +11.83 GiB | 0.0% → 100.0% | 0 B → 11.8 GiB | 0 → 24,227 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -9.999 MiB |  66.7% → 0.0% |   10 MiB → 0 B |     20 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -4.999 MiB |  33.3% → 0.0% |    5 MiB → 0 B |     10 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301095800` |
|     new | +511.999 KiB |  0.0% → <0.1% |  0 B → 512 KiB |      0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700102b000`)

|  Change |          Delta |             % |           Size |    Samples | Callee                             | Location                                             |
| ------: | -------------: | ------------: | -------------: | ---------: | ---------------------------------- | ---------------------------------------------------- |
|     new |    +11.686 GiB | 0.0% → 100.0% | 0 B → 11.7 GiB | 0 → 23,932 | `invokeVirtual(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +11.499 MiB |   0.0% → 0.1% | 0 B → 11.5 MiB |     0 → 23 | `invokeSpecial(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |     -4.499 MiB | 100.0% → 0.0% |  4.5 MiB → 0 B |      9 → 0 | `invokeVirtual(Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x0000000301105000` |
|     new | +1,023.998 KiB |  0.0% → <0.1% |    0 B → 1 MiB |      0 → 2 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001182800`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +11.267 GiB | 0.0% → 100.0% | 0 B → 11.3 GiB | 0 → 23,074 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`  |
|     new |   +7.999 MiB |   0.0% → 0.1% |    0 B → 8 MiB |     0 → 16 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |
| removed | -511.999 KiB | 100.0% → 0.0% |  512 KiB → 0 B |      1 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001298c00`)

|  Change |        Delta |             % |          Size |    Samples | Callee                                                  | Location                                             |
| ------: | -----------: | ------------: | ------------: | ---------: | ------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +10.987 GiB | 0.0% → 100.0% |  0 B → 11 GiB | 0 → 22,500 | `invoke(Object, Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`  |
| removed | -866.041 MiB | 100.0% → 0.0% | 866 MiB → 0 B |  1,730 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003011c9400` |
|     new | +511.999 KiB |  0.0% → <0.1% | 0 B → 512 KiB |      0 → 1 | `collector(Object, Object, Object, Object)`             | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00`  |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070015ae000`)

|  Change |          Delta |             % |         Size |    Samples | Callee                                                  | Location                                             |
| ------: | -------------: | ------------: | -----------: | ---------: | ------------------------------------------------------- | ---------------------------------------------------- |
|     new |    +10.001 GiB | 0.0% → 100.0% | 0 B → 10 GiB | 0 → 20,484 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700118a000` |
| removed | -1,023.998 KiB | 100.0% → 0.0% |  1 MiB → 0 B |      2 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070015adc00`)

|  Change |       Delta |             % |         Size |    Samples | Callee                                             | Location                                         |
| ------: | ----------: | ------------: | -----------: | ---------: | -------------------------------------------------- | ------------------------------------------------ |
|     new | +10.001 GiB | 0.0% → 100.0% | 0 B → 10 GiB | 0 → 20,484 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |  -6.999 MiB | 100.0% → 0.0% |  7 MiB → 0 B |     14 → 0 | `delegate(Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070015ab000`)

|  Change |       Delta |             % |         Size |    Samples | Callee                                  | Location                                     |
| ------: | ----------: | ------------: | -----------: | ---------: | --------------------------------------- | -------------------------------------------- |
|     new | +10.006 GiB | 0.0% → 100.0% | 0 B → 10 GiB | 0 → 20,494 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed | -65.999 MiB | 100.0% → 0.0% | 66 MiB → 0 B |    132 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001647400`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                     | Location                                         |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------ | ------------------------------------------------ |
|     new |   +9.218 GiB | 0.0% → 100.0% | 0 B → 9.22 GiB | 0 → 18,880 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed | -511.999 KiB | 100.0% → 0.0% |  512 KiB → 0 B |      1 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001646c00`)

|     Change |      Delta |      % |             Size |    Samples | Callee                             | Location                                         |
| ---------: | ---------: | -----: | ---------------: | ---------: | ---------------------------------- | ------------------------------------------------ |
| +314566.7% | +9.215 GiB | 100.0% | 3 MiB → 9.22 GiB | 6 → 18,880 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001647800`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                          | Location                                             |
| ------: | ---------: | ------------: | -------------: | ---------: | ----------------------------------------------- | ---------------------------------------------------- |
|     new | +9.218 GiB | 0.0% → 100.0% | 0 B → 9.22 GiB | 0 → 18,880 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -4.999 MiB | 100.0% → 0.0% |    5 MiB → 0 B |     10 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301094400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d4c00`)

|    Change |        Delta |              % |                Size |        Samples | Callee                             | Location                                            |
| --------: | -----------: | -------------: | ------------------: | -------------: | ---------------------------------- | --------------------------------------------------- |
|   +436.0% |   +9.214 GiB | 99.7% → 100.0% | 2.11 GiB → 11.3 GiB | 4,328 → 23,197 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
| +10266.7% | +461.999 MiB |    0.2% → 4.0% |   4.5 MiB → 466 MiB |        9 → 933 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   removed |   -7.999 MiB |    0.4% → 0.0% |         8 MiB → 0 B |         16 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000003010ab000` |
|       new |   +7.499 MiB |    0.0% → 0.1% |       0 B → 7.5 MiB |         0 → 15 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700128a400`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                     | Location                                            |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------ | --------------------------------------------------- |
|     new |   +8.532 GiB | 0.0% → 100.0% | 0 B → 8.53 GiB | 0 → 17,472 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |
|     new |   +3.999 MiB |  0.0% → <0.1% |    0 B → 4 MiB |      0 → 8 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +2.999 MiB |  0.0% → <0.1% |    0 B → 3 MiB |      0 → 6 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001189400` |
| removed | -511.999 KiB | 100.0% → 0.0% |  512 KiB → 0 B |      1 → 0 | `delegate(Object, Object, long)`           | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001379c00`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +8.482 GiB | 0.0% → 100.0% | 0 B → 8.48 GiB | 0 → 17,371 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed | -20.999 MiB |  73.7% → 0.0% |   21 MiB → 0 B |     42 → 0 | `invokeStatic(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |  -7.499 MiB |  26.3% → 0.0% |  7.5 MiB → 0 B |     15 → 0 | `newInvokeSpecial(Object, Object, Object)`                                                  | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |  +3.999 MiB |  0.0% → <0.1% |    0 B → 4 MiB |      0 → 8 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070017ce800`)

|  Change |          Delta |             % |           Size |    Samples | Callee                                     | Location                                         |
| ------: | -------------: | ------------: | -------------: | ---------: | ------------------------------------------ | ------------------------------------------------ |
|     new |     +7.655 GiB | 0.0% → 100.0% | 0 B → 7.66 GiB | 0 → 15,678 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed | -1,023.998 KiB | 100.0% → 0.0% |    1 MiB → 0 B |      2 → 0 | `invokeVirtual(Object, Object)`            | `java.lang.invoke.DirectMethodHandle$Holder`     |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001288800`)

| Change |        Delta |             % |               Size |       Samples | Callee                                            | Location                                             |
| -----: | -----------: | ------------: | -----------------: | ------------: | ------------------------------------------------- | ---------------------------------------------------- |
|    new |   +7.992 GiB |  0.0% → 94.3% |     0 B → 7.99 GiB |    0 → 16,366 | `invokeVirtual(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x00000070011e1000` |
| -78.0% |     -2.1 GiB | 100.0% → 7.0% | 2.69 GiB → 608 MiB | 5,516 → 1,216 | `invokeSpecial(Object, Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|    new | +496.999 MiB |   0.0% → 5.7% |      0 B → 497 MiB |       0 → 994 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001288400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700137a000`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | ---------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +5.747 GiB |  0.0% → 99.9% | 0 B → 5.75 GiB | 0 → 11,769 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed | -2.055 GiB | 100.0% → 0.0% | 2.06 GiB → 0 B |  4,209 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +3.999 MiB |   0.0% → 0.1% |    0 B → 4 MiB |      0 → 8 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001370400`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | ---------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new | +5.254 GiB | 0.0% → 100.0% | 0 B → 5.25 GiB | 0 → 10,759 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -2.034 GiB |  99.8% → 0.0% | 2.03 GiB → 0 B |  4,166 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
| removed | -4.999 MiB |   0.2% → 0.0% |    5 MiB → 0 B |     10 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000003010a1000`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012a1000`)

|  Change |          Delta |            % |           Size |   Samples | Callee                                     | Location                                            |
| ------: | -------------: | -----------: | -------------: | --------: | ------------------------------------------ | --------------------------------------------------- |
|     new |     +2.418 GiB | 0.0% → 65.0% | 0 B → 2.42 GiB | 0 → 4,954 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |     +1.316 GiB | 0.0% → 35.4% | 0 B → 1.32 GiB | 0 → 2,694 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |
| removed |     -1.027 GiB | 99.5% → 0.0% | 1.03 GiB → 0 B | 2,105 → 0 | `reinvoke(Object, Object, Object, long)`   | `java.lang.invoke.LambdaForm$MH.0x000000030134ec00` |
| removed |     -6.999 MiB |  0.7% → 0.0% |    7 MiB → 0 B |    14 → 0 | `invoke(Object, Object, Object, long)`     | `java.lang.invoke.LambdaForm$MH.0x000000030134f400` |
|     new | +1,023.998 KiB | 0.0% → <0.1% |    0 B → 1 MiB |     0 → 2 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001189400` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012a0c00`)

|     Change |       Delta |             % |               Size |   Samples | Callee                                          | Location                                             |
| ---------: | ----------: | ------------: | -----------------: | --------: | ----------------------------------------------- | ---------------------------------------------------- |
| +543908.6% |  +2.655 GiB | 0.7% → 100.0% | 512 KiB → 2.66 GiB | 1 → 5,438 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|    removed | -70.999 MiB |  99.3% → 0.0% |       71 MiB → 0 B |   142 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000030122c000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001292400`)

|  Change |      Delta |            % |                Size |         Samples | Callee                                     | Location                                            |
| ------: | ---------: | -----------: | ------------------: | --------------: | ------------------------------------------ | --------------------------------------------------- |
|  +24.5% | +2.138 GiB |       100.0% | 8.73 GiB → 10.9 GiB | 17,871 → 22,251 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |
|  +48.7% | +9.499 MiB |  0.2% → 0.3% |   19.5 MiB → 29 MiB |         39 → 58 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -5.999 MiB |  0.1% → 0.0% |         6 MiB → 0 B |          12 → 0 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000003011c8800` |
|     new | +1.499 MiB | 0.0% → <0.1% |       0 B → 1.5 MiB |           0 → 3 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001189400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001115800`)

|  Change |        Delta |             % |          Size |    Samples | Callee                             | Location                                             |
| ------: | -----------: | ------------: | ------------: | ---------: | ---------------------------------- | ---------------------------------------------------- |
| removed |  -11.951 GiB | 100.0% → 0.0% |  12 GiB → 0 B | 24,475 → 0 | `invokeVirtual(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |  -13.999 MiB |   0.1% → 0.0% |  14 MiB → 0 B |     28 → 0 | `invokeSpecial(Object, Object)`    | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |     0 → 13 | `invokeVirtual(Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x0000007001105000` |
| removed | -511.999 KiB |  <0.1% → 0.0% | 512 KiB → 0 B |      1 → 0 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070011ebc00`)

|  Change |          Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | -------------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |    -11.555 GiB | 100.0% → 0.0% | 11.6 GiB → 0 B | 23,663 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003010d3c00`  |
| removed |     -6.999 MiB |   0.1% → 0.0% |    7 MiB → 0 B |     14 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000003010a1000`  |
|     new | +1,023.998 KiB | 0.0% → 100.0% |    0 B → 1 MiB |      0 → 2 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7400`)

|    Change |        Delta |             % |                Size |     Samples | Callee                                    | Location                                             |
| --------: | -----------: | ------------: | ------------------: | ----------: | ----------------------------------------- | ---------------------------------------------------- |
|    -99.8% |  -12.063 GiB | 100.0% → 3.9% | 12.1 GiB → 23.5 MiB | 24,750 → 47 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| +56200.0% | +561.998 MiB | <0.1% → 93.4% |     1 MiB → 563 MiB |   2 → 1,126 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |
|       new | +132.499 MiB |  0.0% → 22.0% |       0 B → 132 MiB |     0 → 265 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001125000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070011eb000`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.132 GiB | 100.0% → 0.0% | 11.1 GiB → 0 B | 22,797 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x00000003011c5c00`  |
|     new | +23.999 MiB | 0.0% → 100.0% |   0 B → 24 MiB |     0 → 48 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |  -4.499 MiB |  <0.1% → 0.0% |  4.5 MiB → 0 B |      9 → 0 | `delegate(Object, Object, Object, Object)`                                                  | `java.lang.invoke.DelegatingMethodHandle$Holder`     |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700129d000`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -11.619 GiB | 100.0% → 0.0% | 11.6 GiB → 0 B | 23,795 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
|     new | +877.041 MiB |  0.0% → 99.9% |  0 B → 877 MiB |  0 → 1,752 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000700118a000` |
| removed |   -1.999 MiB |  <0.1% → 0.0% |    2 MiB → 0 B |      4 → 0 | `collector(Object, Object, Object, Object, Object)`                                         | `java.lang.invoke.LambdaForm$MH.0x00000003012b2c00`  |
|     new | +511.999 KiB |   0.0% → 0.1% |  0 B → 512 KiB |      0 → 1 | `invokeVirtual(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x00000070013a9400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700143d000`)

|  Change |      Delta |      % |             Size |     Samples | Callee                                  | Location                                     |
| ------: | ---------: | -----: | ---------------: | ----------: | --------------------------------------- | -------------------------------------------- |
| -100.0% | -10.28 GiB | 100.0% | 10.3 GiB → 5 MiB | 21,064 → 10 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700168d000`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -10.28 GiB | 100.0% → 0.0% | 10.3 GiB → 0 B | 21,054 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x00000003011c9400` |
|     new | +12.999 MiB | 0.0% → 100.0% |   0 B → 13 MiB |     0 → 26 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001453800`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                                  | Location                                            |
| ------: | ----------: | ------------: | -------------: | ---------: | ------------------------------------------------------- | --------------------------------------------------- |
| removed |  -10.28 GiB | 100.0% → 0.0% | 10.3 GiB → 0 B | 21,055 → 0 | `delegate(Object, Object, Object, Object, Object)`      | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new | +19.999 MiB | 0.0% → 100.0% |   0 B → 20 MiB |     0 → 40 | `delegate(Object, Object, Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070013fa800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d9c00`)

|  Change |        Delta |              % |                Size |        Samples | Callee                             | Location                                            |
| ------: | -----------: | -------------: | ------------------: | -------------: | ---------------------------------- | --------------------------------------------------- |
|  -82.4% |   -9.542 GiB | 100.0% → 99.6% | 11.6 GiB → 2.04 GiB | 23,728 → 4,188 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  -99.3% | -479.499 MiB |    4.1% → 0.2% |   483 MiB → 3.5 MiB |        966 → 7 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |  -13.999 MiB |    0.1% → 0.0% |        14 MiB → 0 B |         28 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000003010ab000` |
|     new |   +5.999 MiB |    0.0% → 0.3% |         0 B → 6 MiB |         0 → 12 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001441800`)

|  Change |        Delta |             % |           Size |    Samples | Callee                                     | Location                                            |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------ | --------------------------------------------------- |
| removed |   -9.517 GiB | 100.0% → 0.0% | 9.52 GiB → 0 B | 19,492 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new | +511.999 KiB | 0.0% → 100.0% |  0 B → 512 KiB |      0 → 1 | `invoke(Object, Object, int)`              | `java.lang.invoke.LambdaForm$MH.0x00000070010d1c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001466400`)

|  Change |      Delta |             % |           Size |    Samples | Callee                             | Location                                         |
| ------: | ---------: | ------------: | -------------: | ---------: | ---------------------------------- | ------------------------------------------------ |
| removed | -9.517 GiB | 100.0% → 0.0% | 9.52 GiB → 0 B | 19,492 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new | +1.499 MiB | 0.0% → 100.0% |  0 B → 1.5 MiB |      0 → 3 | `delegate(Object, Object, int)`    | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700166e000`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -9.517 GiB | 100.0% → 0.0% | 9.52 GiB → 0 B | 19,492 → 0 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +11.999 MiB | 0.0% → 100.0% |   0 B → 12 MiB |     0 → 24 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001392000`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | ---------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -8.68 GiB | 100.0% → 0.0% | 8.68 GiB → 0 B | 17,775 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
| removed | -3.499 MiB |  <0.1% → 0.0% |  3.5 MiB → 0 B |      7 → 0 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x00000003010d4000`  |
|     new | +1.499 MiB | 0.0% → 100.0% |  0 B → 1.5 MiB |      0 → 3 | `invokeSpecial(Object, Object, Object, int)`                                                | `java.lang.invoke.LambdaForm$DMH.0x0000007001109800` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001292800`)

|  Change |        Delta |            % |           Size |    Samples | Callee                                            | Location                                             |
| ------: | -----------: | -----------: | -------------: | ---------: | ------------------------------------------------- | ---------------------------------------------------- |
| removed |   -8.165 GiB | 94.3% → 0.0% | 8.17 GiB → 0 B | 16,720 → 0 | `invokeVirtual(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000030122c000` |
| removed | -617.998 MiB |  7.0% → 0.0% |  618 MiB → 0 B |  1,236 → 0 | `invokeSpecial(Object, Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed | -503.999 MiB |  5.7% → 0.0% |  504 MiB → 0 B |  1,008 → 0 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000003012a3400` |
|     new |  +22.499 MiB | 0.0% → 71.4% | 0 B → 22.5 MiB |     0 → 45 | `invokeStatic(Object, Object, Object)`            | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +8.999 MiB | 0.0% → 28.6% |    0 B → 9 MiB |     0 → 18 | `newInvokeSpecial(Object, Object, Object)`        | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070017e7800`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                                     | Location                                         |
| ------: | ----------: | ------------: | -------------: | ---------: | ---------------------------------------------------------- | ------------------------------------------------ |
| removed |  -7.878 GiB | 100.0% → 0.0% | 7.88 GiB → 0 B | 16,136 → 0 | `delegate(Object, Object, Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new | +17.499 MiB | 0.0% → 100.0% | 0 B → 17.5 MiB |     0 → 35 | `delegate(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012b4c00`)

|  Change |       Delta |             % |           Size |    Samples | Callee                                                                                      | Location                                             |
| ------: | ----------: | ------------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -5.967 GiB | 100.0% → 0.0% | 5.97 GiB → 0 B | 12,220 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
|     new |  +1.499 GiB |  0.0% → 99.3% |  0 B → 1.5 GiB |  0 → 3,070 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x0000007001109400` |
|     new | +11.499 MiB |   0.0% → 0.7% | 0 B → 11.5 MiB |     0 → 23 | `invokeSpecial(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x000000700138a400` |
| removed |  -1.499 MiB |  <0.1% → 0.0% |  1.5 MiB → 0 B |      3 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000003010a1000`  |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012a1800`)

|  Change |      Delta |             % |           Size |    Samples | Callee                                    | Location                                             |
| ------: | ---------: | ------------: | -------------: | ---------: | ----------------------------------------- | ---------------------------------------------------- |
| removed | -5.486 GiB | 100.0% → 0.0% | 5.49 GiB → 0 B | 11,235 → 0 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +1.641 GiB |  0.0% → 99.9% | 0 B → 1.64 GiB |  0 → 3,361 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001097c00` |
|     new | +1.499 MiB |   0.0% → 0.1% |  0 B → 1.5 MiB |      0 → 3 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001282400`)

|  Change |        Delta |             % |           Size |   Samples | Callee                                     | Location                                            |
| ------: | -----------: | ------------: | -------------: | --------: | ------------------------------------------ | --------------------------------------------------- |
| removed |   -2.653 GiB |  70.1% → 0.0% | 2.65 GiB → 0 B | 5,434 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -1.368 GiB |  36.2% → 0.0% | 1.37 GiB → 0 B | 2,800 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003011c5c00` |
|     new |   +1.499 MiB | 0.0% → 100.0% |  0 B → 1.5 MiB |     0 → 3 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed | -511.999 KiB |  <0.1% → 0.0% |  512 KiB → 0 B |     1 → 0 | `invoke(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000003011c8800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d5000`)

|  Change |       Delta |            % |           Size |   Samples | Callee                                  | Location                                             |
| ------: | ----------: | -----------: | -------------: | --------: | --------------------------------------- | ---------------------------------------------------- |
| removed |  -2.131 GiB | 99.9% → 0.0% | 2.13 GiB → 0 B | 4,364 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +33.999 MiB | 0.0% → 93.2% |   0 B → 34 MiB |    0 → 68 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |  -4.499 MiB |  0.2% → 0.0% |  4.5 MiB → 0 B |     9 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301095800` |
|     new |  +3.999 MiB | 0.0% → 11.0% |    0 B → 4 MiB |     0 → 8 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001182400`)

|  Change |      Delta |             % |           Size |   Samples | Callee                                  | Location                                             |
| ------: | ---------: | ------------: | -------------: | --------: | --------------------------------------- | ---------------------------------------------------- |
| removed | -1.673 GiB | 100.0% → 0.0% | 1.67 GiB → 0 B | 3,427 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301097c00` |
|     new | +9.999 MiB |  0.0% → 83.3% |   0 B → 10 MiB |    0 → 20 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new | +1.999 MiB |  0.0% → 16.7% |    0 B → 2 MiB |     0 → 4 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |
