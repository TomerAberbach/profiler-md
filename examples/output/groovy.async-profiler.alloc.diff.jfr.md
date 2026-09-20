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

| Change |       Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +11.71 GiB | 0.0% → 99.9% | 0 B → 11.7 GiB | 0 → 23,982 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e001088800` |
|    new | +11.708 GiB | 0.0% → 99.9% | 0 B → 11.7 GiB | 0 → 23,978 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e0010a1800`  |
|    new | +11.707 GiB | 0.0% → 99.9% | 0 B → 11.7 GiB | 0 → 23,976 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e0010aa000`  |
|    new | +11.707 GiB | 0.0% → 99.9% | 0 B → 11.7 GiB | 0 → 23,976 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000e0010aa800`  |
|    new | +11.707 GiB | 0.0% → 99.9% | 0 B → 11.7 GiB | 0 → 23,976 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000e0010aac00`  |
|    new |   +11.7 GiB | 0.0% → 99.8% | 0 B → 11.7 GiB | 0 → 23,961 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000e001094400` |
|    new | +11.687 GiB | 0.0% → 99.7% | 0 B → 11.7 GiB | 0 → 23,935 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e0010c6400`  |
|    new | +11.687 GiB | 0.0% → 99.7% | 0 B → 11.7 GiB | 0 → 23,935 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e0010c7000`  |
|    new | +11.686 GiB | 0.0% → 99.7% | 0 B → 11.7 GiB | 0 → 23,932 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e00108e000`  |
|    new |  +11.56 GiB | 0.0% → 98.6% | 0 B → 11.6 GiB | 0 → 23,674 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e001098400`  |
|    new |  +11.56 GiB | 0.0% → 98.6% | 0 B → 11.6 GiB | 0 → 23,674 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000e001099c00`  |
|    new |  +11.56 GiB | 0.0% → 98.6% | 0 B → 11.6 GiB | 0 → 23,674 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e00109a000`  |
|    new | +11.557 GiB | 0.0% → 98.6% | 0 B → 11.6 GiB | 0 → 23,669 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e00109bc00`  |
|    new | +11.556 GiB | 0.0% → 98.6% | 0 B → 11.6 GiB | 0 → 23,666 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e00102b000`  |
|    new | +11.452 GiB | 0.0% → 97.7% | 0 B → 11.5 GiB | 0 → 23,452 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000e0010a9800`  |
|    new | +11.305 GiB | 0.0% → 96.4% | 0 B → 11.3 GiB | 0 → 23,152 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000e0010d4000`  |
|    new | +11.305 GiB | 0.0% → 96.4% | 0 B → 11.3 GiB | 0 → 23,152 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000e001188c00`  |
|    new | +11.287 GiB | 0.0% → 96.3% | 0 B → 11.3 GiB | 0 → 23,115 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000e001095000` |
|    new | +11.273 GiB | 0.0% → 96.2% | 0 B → 11.3 GiB | 0 → 23,088 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000e0010d5c00`  |
|    new | +11.255 GiB | 0.0% → 96.0% | 0 B → 11.3 GiB | 0 → 23,051 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000e001188800`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.963 GiB | 99.9% → 0.0% |   12 GiB → 0 B | 24,499 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |
| removed | -11.962 GiB | 99.9% → 0.0% |   12 GiB → 0 B | 24,497 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010a1800`  |
| removed | -11.961 GiB | 99.9% → 0.0% |   12 GiB → 0 B | 24,496 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004010aa000`  |
| removed | -11.961 GiB | 99.9% → 0.0% |   12 GiB → 0 B | 24,496 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000004010aa800`  |
| removed | -11.961 GiB | 99.9% → 0.0% |   12 GiB → 0 B | 24,496 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000004010aac00`  |
| removed | -11.949 GiB | 99.8% → 0.0% | 11.9 GiB → 0 B | 24,471 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000401094400` |
| removed | -11.937 GiB | 99.7% → 0.0% | 11.9 GiB → 0 B | 24,446 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010c6400`  |
| removed | -11.937 GiB | 99.7% → 0.0% | 11.9 GiB → 0 B | 24,446 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004010c7000`  |
| removed | -11.933 GiB | 99.6% → 0.0% | 11.9 GiB → 0 B | 24,438 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040108e000`  |
| removed | -11.792 GiB | 98.5% → 0.0% | 11.8 GiB → 0 B | 24,150 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000401098400`  |
| removed | -11.792 GiB | 98.5% → 0.0% | 11.8 GiB → 0 B | 24,150 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000401099c00`  |
| removed | -11.792 GiB | 98.5% → 0.0% | 11.8 GiB → 0 B | 24,150 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000040109a000`  |
| removed | -11.791 GiB | 98.4% → 0.0% | 11.8 GiB → 0 B | 24,146 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040109bc00`  |
| removed | -11.788 GiB | 98.4% → 0.0% | 11.8 GiB → 0 B | 24,140 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040102b000`  |
| removed |  -11.66 GiB | 97.3% → 0.0% | 11.7 GiB → 0 B | 23,878 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010a9800`  |
| removed | -11.517 GiB | 96.2% → 0.0% | 11.5 GiB → 0 B | 23,586 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010d4000`  |
| removed | -11.517 GiB | 96.2% → 0.0% | 11.5 GiB → 0 B | 23,586 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000401188c00`  |
| removed | -11.491 GiB | 95.9% → 0.0% | 11.5 GiB → 0 B | 23,532 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004010d5c00`  |
| removed | -11.485 GiB | 95.9% → 0.0% | 11.5 GiB → 0 B | 23,521 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000401095000` |
| removed | -11.466 GiB | 95.7% → 0.0% | 11.5 GiB → 0 B | 23,482 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000401188800`  |
