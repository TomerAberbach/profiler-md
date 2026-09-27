# Allocated heap profile diff

Allocated 12 GiB → 11.7 GiB (-262.15 MiB, -2.1%) over 24,528 samples → 24,004 samples (512 KiB per sample).

| Category         | Change |       Delta |             % |                Size |         Samples |
| ---------------- | -----: | ----------: | ------------: | ------------------: | --------------: |
| Standard library |  -2.0% | -249.15 MiB | 99.1% → 99.2% | 11.9 GiB → 11.6 GiB | 24,305 → 23,807 |
| Ours             | -11.7% | -12.999 MiB |   0.9% → 0.8% |  111 MiB → 98.5 MiB |       223 → 197 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |            % |                Size |       Samples | Function                                       | Location                                                   |
| ------: | ----------: | -----------: | ------------------: | ------------: | ---------------------------------------------- | ---------------------------------------------------------- |
|   +4.1% | +21.999 MiB |  4.4% → 4.7% |   540 MiB → 562 MiB | 1,080 → 1,124 | `fillInStackTrace(int)`                        | `java.lang.Throwable`                                      |
|  +23.7% | +20.499 MiB |  0.7% → 0.9% |  86.5 MiB → 107 MiB |     173 → 214 | `<init>(Pattern, CharSequence)`                | `java.util.regex.Matcher`                                  |
|   +5.4% | +17.999 MiB |  2.7% → 2.9% |   333 MiB → 351 MiB |     666 → 702 | `make(MethodType, LambdaForm, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LL`            |
|   +8.4% | +15.999 MiB |  1.6% → 1.7% |   191 MiB → 207 MiB |     382 → 414 | `compile()`                                    | `java.util.regex.Pattern`                                  |
|   +6.8% | +14.499 MiB |  1.7% → 1.9% |   213 MiB → 227 MiB |     426 → 455 | `optimize(Pattern$Node)`                       | `java.util.regex.Pattern$BnM`                              |
|  +16.6% | +13.999 MiB |  0.7% → 0.8% | 84.5 MiB → 98.5 MiB |     169 → 197 | `map(Function)`                                | `java.util.stream.ReferencePipeline`                       |
|  +28.4% | +13.499 MiB |  0.4% → 0.5% |   47.5 MiB → 61 MiB |      95 → 122 | `matcher(CharSequence)`                        | `java.util.regex.Pattern`                                  |
|  +22.5% | +12.499 MiB |  0.5% → 0.6% |   55.5 MiB → 68 MiB |     111 → 136 | `make(byte, Class, MemberName, Class)`         | `java.lang.invoke.DirectMethodHandle`                      |
|   +5.6% | +11.999 MiB |  1.8% → 1.9% |   215 MiB → 227 MiB |     431 → 455 | `allocateInstance(Object)`                     | `java.lang.invoke.DirectMethodHandle`                      |
|   +4.9% | +11.999 MiB |  2.0% → 2.1% |   243 MiB → 255 MiB |     487 → 511 | `of(byte, int, int)`                           | `java.lang.invoke.LambdaFormEditor$TransformKey`           |
|   +1.6% | +11.499 MiB |  6.0% → 6.2% |   735 MiB → 746 MiB | 1,470 → 1,493 | `makeImpl(Class, Class[], boolean)`            | `java.lang.invoke.MethodType`                              |
|   +4.1% | +10.999 MiB |  2.2% → 2.3% |   270 MiB → 281 MiB |     541 → 563 | `lambdaFormEditor(LambdaForm)`                 | `java.lang.invoke.LambdaFormEditor`                        |
|   +8.8% | +10.999 MiB |  1.0% → 1.1% |   124 MiB → 135 MiB |     249 → 271 | `of(byte, int)`                                | `java.lang.invoke.LambdaFormEditor$TransformKey`           |
|   +4.0% | +10.499 MiB |  2.2% → 2.3% |   265 MiB → 276 MiB |     531 → 552 | `stream(Spliterator, boolean)`                 | `java.util.stream.StreamSupport`                           |
|   +3.5% |  +9.499 MiB |  2.2% → 2.4% |   274 MiB → 284 MiB |     549 → 568 | `copyOfRange(Object[], int, int)`              | `java.util.Arrays`                                         |
|  +13.5% |  +8.999 MiB |  0.5% → 0.6% | 66.5 MiB → 75.5 MiB |     133 → 151 | `copyOfRangeByte(byte[], int, int)`            | `java.util.Arrays`                                         |
|  +41.5% |  +8.499 MiB |         0.2% |   20.5 MiB → 29 MiB |       41 → 58 | `intStream(Spliterator$OfInt, boolean)`        | `java.util.stream.StreamSupport`                           |
|  +36.2% |  +8.499 MiB |  0.2% → 0.3% |   23.5 MiB → 32 MiB |       47 → 64 | `<init>()`                                     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
|  +35.6% |  +7.999 MiB |  0.2% → 0.3% | 22.5 MiB → 30.5 MiB |       45 → 61 | `enlarge(int)`                                 | `jdk.internal.org.objectweb.asm.ByteVector`                |
| +160.0% |  +7.999 MiB | <0.1% → 0.1% |      5 MiB → 13 MiB |       10 → 26 | `equals(ArrayPredictionContext, Set)`          | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |            % |                Size |       Samples | Function                                                                                      | Location                                         |
| -----: | -----------: | -----------: | ------------------: | ------------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| -64.9% | -178.999 MiB |  2.3% → 0.8% |    276 MiB → 97 MiB |     552 → 194 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`   |
| -11.5% |  -44.499 MiB |  3.2% → 2.9% |   387 MiB → 342 MiB |     774 → 685 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                        |
| -69.1% |  -27.999 MiB |  0.3% → 0.1% | 40.5 MiB → 12.5 MiB |       81 → 25 | `copy()`                                                                                      | `java.lang.reflect.Method`                       |
| -10.9% |  -27.499 MiB |  2.1% → 1.9% |   252 MiB → 225 MiB |     505 → 450 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.HashMap`                              |
|  -3.5% |  -22.999 MiB |  5.4% → 5.3% |   662 MiB → 639 MiB | 1,325 → 1,279 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`  |
|  -9.3% |  -18.999 MiB |  1.7% → 1.5% |   204 MiB → 185 MiB |     409 → 371 | `spliterator(Object[], int, int, int)`                                                        | `java.util.Spliterators`                         |
|  -6.9% |  -18.499 MiB |  2.2% → 2.1% |   270 MiB → 251 MiB |     540 → 503 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)`       | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`    |
| -18.9% |  -17.499 MiB |  0.8% → 0.6% |   92.5 MiB → 75 MiB |     185 → 150 | `copyWith(MethodType, LambdaForm)`                                                            | `java.lang.invoke.BoundMethodHandle$Species_L`   |
|  -5.7% |  -14.499 MiB |  2.1% → 2.0% |   253 MiB → 239 MiB |     507 → 478 | `divideAndRemainderKnuth(BigInteger)`                                                         | `java.math.BigInteger`                           |
| -15.8% |  -13.999 MiB |  0.7% → 0.6% | 88.5 MiB → 74.5 MiB |     177 → 149 | `listIterator(int)`                                                                           | `java.util.LinkedList`                           |
| -18.0% |  -13.543 MiB |  0.6% → 0.5% |   75 MiB → 61.5 MiB |     148 → 122 | `copyOf(byte[], int)`                                                                         | `java.util.Arrays`                               |
| -11.7% |  -13.499 MiB |  0.9% → 0.8% |   115 MiB → 102 MiB |     231 → 204 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                 | `java.lang.invoke.MethodHandleImpl`              |
|  -3.0% |  -12.999 MiB |         3.5% |   432 MiB → 419 MiB |     865 → 839 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`              |
|  -8.2% |  -11.499 MiB |         1.1% |   139 MiB → 128 MiB |     279 → 256 | `make(MethodType, LambdaForm, Object, Object, Object)`                                        | `java.lang.invoke.BoundMethodHandle$Species_LLL` |
| -73.1% |   -9.499 MiB | 0.1% → <0.1% |    13 MiB → 3.5 MiB |        26 → 7 | `multiply(long)`                                                                              | `java.math.BigInteger`                           |
|  -8.0% |   -9.499 MiB |  1.0% → 0.9% |   119 MiB → 109 MiB |     238 → 219 | `toBigInteger(int)`                                                                           | `java.math.MutableBigInteger`                    |
| -48.7% |   -9.499 MiB |  0.2% → 0.1% |   19.5 MiB → 10 MiB |       39 → 20 | `getPlainNodeReference(boolean)`                                                              | `org.codehaus.groovy.ast.ClassNode`              |
| -28.4% |   -9.499 MiB |  0.3% → 0.2% |   33.5 MiB → 24 MiB |       67 → 48 | `entrySet()`                                                                                  | `java.util.HashMap`                              |
| -12.7% |   -8.999 MiB |  0.6% → 0.5% |     71 MiB → 62 MiB |     142 → 124 | `convertToTypeArray(Object[])`                                                                | `org.codehaus.groovy.runtime.MetaClassHelper`    |
|  -5.0% |   -8.499 MiB |  1.4% → 1.3% |   168 MiB → 160 MiB |     337 → 320 | `valueOf(long)`                                                                               | `java.lang.Long`                                 |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|      Change |       Delta |             % |                Size |         Samples | Function                                         | Location                                            |
| ----------: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | --------------------------------------------------- |
|  +181976.9% | +11.551 GiB |  0.1% → 98.6% |  6.5 MiB → 11.6 GiB |     13 → 23,669 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e00109bc00` |
|    +5717.5% | +11.027 GiB |  1.6% → 95.7% |  197 MiB → 11.2 GiB |    395 → 22,978 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e0010d4c00` |
|    +1174.1% | +10.056 GiB |  7.2% → 93.1% |  877 MiB → 10.9 GiB |  1,752 → 22,348 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e001288c00` |
|    +1158.6% |  +9.928 GiB |  7.2% → 92.0% |  878 MiB → 10.8 GiB |  1,753 → 22,088 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e001282400` |
|   +96761.9% |  +9.921 GiB |  0.1% → 84.7% | 10.5 MiB → 9.93 GiB |     21 → 20,341 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e0015a2800` |
|   +17002.5% |  +9.879 GiB |  0.5% → 84.8% | 59.5 MiB → 9.94 GiB |    119 → 20,352 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e00159fc00` |
|     +560.9% |  +9.807 GiB | 14.6% → 98.6% | 1.75 GiB → 11.6 GiB |  3,581 → 23,666 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e00102b000` |
|  +234550.0% |  +9.162 GiB | <0.1% → 78.2% |    4 MiB → 9.17 GiB |      8 → 18,772 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e001679c00` |
|  +208477.8% |  +9.161 GiB | <0.1% → 78.2% |  4.5 MiB → 9.17 GiB |      9 → 18,772 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e00167a400` |
|  +133985.7% |  +9.159 GiB |  0.1% → 78.2% |    7 MiB → 9.17 GiB |     14 → 18,772 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e00167a800` |
| +1730199.8% |  +8.448 GiB | <0.1% → 72.1% |  512 KiB → 8.45 GiB |      1 → 17,302 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e00126a400` |
|  +784650.0% |  +7.662 GiB | <0.1% → 65.4% |    1 MiB → 7.66 GiB |      2 → 15,695 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e0017ffc00` |
|     +111.6% |  +6.164 GiB | 46.1% → 99.7% | 5.52 GiB → 11.7 GiB | 11,309 → 23,935 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e0010c6400` |
|     +212.5% |  +5.708 GiB | 22.4% → 71.6% |  2.69 GiB → 8.4 GiB |  5,501 → 17,194 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e001268800` |
|    +1782.9% |  +4.988 GiB |  2.3% → 44.9% |  286 MiB → 5.27 GiB |    573 → 10,788 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e001360800` |
|     +853.4% |  +4.854 GiB |  4.7% → 46.3% |  582 MiB → 5.42 GiB |  1,165 → 11,106 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e0010d4800` |
|   +77585.7% |  +2.651 GiB | <0.1% → 22.7% |  3.5 MiB → 2.66 GiB |       7 → 5,437 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e001290000` |
|   +75450.0% |  +1.473 GiB | <0.1% → 12.6% |    2 MiB → 1.48 GiB |       4 → 3,022 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e001800800` |
|  +226000.0% |  +1.103 GiB |  <0.1% → 9.4% |   512 KiB → 1.1 GiB |       1 → 2,261 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e001805000` |
|   +14106.7% |  +1.033 GiB |   0.1% → 8.9% |  7.5 MiB → 1.04 GiB |      15 → 2,131 | `invoke(Object, Object, Object, long)`           | `java.lang.invoke.LambdaForm$MH.0x000000e001322800` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |             % |                Size |        Samples | Function                                         | Location                                            |
| ------: | ----------: | ------------: | ------------------: | -------------: | ------------------------------------------------ | --------------------------------------------------- |
| -100.0% | -11.787 GiB | 98.4% → <0.1% |  11.8 GiB → 3.5 MiB |     24,146 → 7 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e001115800` |
| -100.0% | -10.971 GiB | 91.6% → <0.1% |    11 GiB → 512 KiB |     22,468 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e001262400` |
|  -92.4% | -10.263 GiB |  92.8% → 7.2% |  11.1 GiB → 868 MiB | 22,754 → 1,735 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e00128d000` |
| -100.0% | -10.106 GiB | 84.4% → <0.1% |    10.1 GiB → 3 MiB |     20,704 → 6 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e001528800` |
|  -99.9% | -10.106 GiB |  84.4% → 0.1% |  10.1 GiB → 6.5 MiB |    20,711 → 13 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e00149ec00` |
|  -85.6% | -10.094 GiB | 98.4% → 14.4% | 11.8 GiB → 1.69 GiB | 24,140 → 3,469 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e001105400` |
|  -82.3% |  -9.823 GiB | 99.7% → 18.0% | 11.9 GiB → 2.11 GiB | 24,446 → 4,329 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e0010c7800` |
|  -81.8% |  -9.342 GiB | 95.4% → 17.8% | 11.4 GiB → 2.08 GiB | 23,402 → 4,270 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e0010d9c00` |
| -100.0% |   -9.31 GiB | 77.7% → <0.1% |  9.31 GiB → 512 KiB |     19,068 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e001630800` |
| -100.0% |  -9.309 GiB | 77.7% → <0.1% |    9.31 GiB → 1 MiB |     19,068 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e00166ec00` |
|  -98.6% |  -9.183 GiB |  77.7% → 1.1% |  9.31 GiB → 130 MiB |   19,068 → 260 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e001671c00` |
|  -99.9% |  -8.611 GiB | 71.9% → <0.1% |    8.62 GiB → 5 MiB |    17,645 → 10 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e0011eb400` |
| -100.0% |  -7.755 GiB | 64.8% → <0.1% |  7.76 GiB → 512 KiB |     15,885 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e00149e400` |
|  -69.5% |  -5.954 GiB | 71.5% → 22.3% | 8.57 GiB → 2.62 GiB | 17,549 → 5,355 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e001290c00` |
| -100.0% |   -5.87 GiB | 49.0% → <0.1% |  5.87 GiB → 1.5 MiB |     12,024 → 3 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e001398800` |
|  -77.2% |  -2.876 GiB |  31.1% → 7.2% |  3.72 GiB → 868 MiB |  7,625 → 1,735 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e00128b800` |
|  -97.8% |  -2.116 GiB |  18.1% → 0.4% |   2.16 GiB → 49 MiB |     4,430 → 98 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e0010d5000` |
|  -99.9% |  -2.104 GiB | 17.6% → <0.1% |  2.11 GiB → 1.5 MiB |      4,313 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e001104800` |
| -100.0% |  -1.485 GiB | 12.4% → <0.1% |  1.49 GiB → 512 KiB |      3,043 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e00149a400` |
|  -99.6% |  -1.136 GiB |  9.5% → <0.1% |    1.14 GiB → 5 MiB |     2,338 → 10 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000e001812800` |
