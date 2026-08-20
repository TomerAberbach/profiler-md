# Allocated heap profile diff

Allocated 11.7 GiB → 12 GiB (+312.715 MiB, +2.6%) over 23,956 samples → 24,584 samples (512 KiB per sample).

| Category         | Change |        Delta |     % |                Size |         Samples |
| ---------------- | -----: | -----------: | ----: | ------------------: | --------------: |
| Standard library |  +2.6% | +303.215 MiB | 99.1% | 11.6 GiB → 11.9 GiB | 23,752 → 24,361 |
| Ours             |  +9.3% |   +9.499 MiB |  0.9% |   102 MiB → 111 MiB |       204 → 223 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |           % |                Size |       Samples | Function                                                                                | Location                                              |
| ------: | -----------: | ----------: | ------------------: | ------------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| +185.9% | +178.499 MiB | 0.8% → 2.2% |    96 MiB → 274 MiB |     192 → 549 | `make(MethodType, LambdaForm, Object)`                                                  | `java.lang.invoke.BoundMethodHandle$Species_L`        |
|  +19.6% |  +43.499 MiB | 1.8% → 2.2% |   221 MiB → 265 MiB |     443 → 530 | `copyOfRange(Object[], int, int)`                                                       | `java.util.Arrays`                                    |
|   +9.1% |  +37.999 MiB | 3.5% → 3.7% |   418 MiB → 456 MiB |     836 → 912 | `makeBlockInliningWrapper(MethodHandle)`                                                | `java.lang.invoke.MethodHandleImpl`                   |
|  +24.2% |  +28.499 MiB | 1.0% → 1.2% |   118 MiB → 146 MiB |     236 → 293 | `resize()`                                                                              | `java.util.HashMap`                                   |
|   +3.6% |  +26.999 MiB |        6.3% |   753 MiB → 780 MiB | 1,507 → 1,561 | `makeImpl(Class, Class[], boolean)`                                                     | `java.lang.invoke.MethodType`                         |
|  +26.9% |  +22.999 MiB | 0.7% → 0.9% |  85.5 MiB → 108 MiB |     171 → 217 | `map(Function)`                                                                         | `java.util.stream.ReferencePipeline`                  |
|  +23.6% |  +14.499 MiB | 0.5% → 0.6% |   61.5 MiB → 76 MiB |     123 → 152 | `listIterator(int)`                                                                     | `java.util.LinkedList`                                |
|   +6.4% |  +13.999 MiB | 1.8% → 1.9% |   219 MiB → 233 MiB |     439 → 467 | `allocateInstance(Object)`                                                              | `java.lang.invoke.DirectMethodHandle`                 |
|  +46.7% |  +13.999 MiB | 0.3% → 0.4% |     30 MiB → 44 MiB |       60 → 88 | `<init>(MethodHandle, MethodHandle, boolean)`                                           | `org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper` |
|   +4.2% |  +13.499 MiB |        2.7% |   320 MiB → 333 MiB |     640 → 667 | `newArray(Class, int)`                                                                  | `java.lang.reflect.Array`                             |
|  +22.6% |  +12.999 MiB | 0.5% → 0.6% | 57.5 MiB → 70.5 MiB |     115 → 141 | `copyOf(Object[], int)`                                                                 | `java.util.Arrays`                                    |
|  +38.2% |  +12.999 MiB | 0.3% → 0.4% |     34 MiB → 47 MiB |       68 → 94 | `copy()`                                                                                | `java.lang.reflect.Method`                            |
|   +8.4% |  +12.499 MiB | 1.2% → 1.3% |   148 MiB → 161 MiB |     297 → 322 | `parameterArray()`                                                                      | `java.lang.invoke.MethodType`                         |
|  +57.1% |  +11.999 MiB | 0.2% → 0.3% |     21 MiB → 33 MiB |       42 → 66 | `<init>()`                                                                              | `java.util.ArrayDeque`                                |
|  +25.3% |  +10.499 MiB | 0.3% → 0.4% |   41.5 MiB → 52 MiB |      83 → 104 | `getCachedContext(PredictionContext)`                                                   | `groovyjarjarantlr4.v4.runtime.atn.ATN`               |
|   +3.4% |   +9.499 MiB | 2.3% → 2.4% |   281 MiB → 290 MiB |     562 → 581 | `lambdaFormEditor(LambdaForm)`                                                          | `java.lang.invoke.LambdaFormEditor`                   |
|   +3.8% |   +9.499 MiB |        2.1% |   251 MiB → 260 MiB |     502 → 521 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`         |
|   +4.0% |   +9.499 MiB |        2.0% |   238 MiB → 247 MiB |     476 → 495 | `divideAndRemainderKnuth(BigInteger)`                                                   | `java.math.BigInteger`                                |
|  +17.6% |   +9.499 MiB |        0.5% |   54 MiB → 63.5 MiB |     108 → 127 | `newSlice(int[], int, boolean)`                                                         | `java.util.regex.Pattern`                             |
|   +8.0% |   +8.999 MiB | 0.9% → 1.0% |   112 MiB → 121 MiB |     225 → 243 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                           | `java.lang.invoke.MethodHandleImpl`                   |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |           % |                Size |   Samples | Function                                                                                | Location                                                  |
| -----: | ----------: | ----------: | ------------------: | --------: | --------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| -10.5% | -29.999 MiB | 2.4% → 2.1% |   286 MiB → 256 MiB | 573 → 513 | `stream(Spliterator, boolean)`                                                          | `java.util.stream.StreamSupport`                          |
| -14.6% | -25.999 MiB | 1.5% → 1.2% |   178 MiB → 152 MiB | 356 → 304 | `valueOf(long)`                                                                         | `java.lang.Long`                                          |
|  -6.3% | -22.999 MiB | 3.1% → 2.8% |   365 MiB → 342 MiB | 731 → 685 | `make(MethodType, LambdaForm, Object, Object)`                                          | `java.lang.invoke.BoundMethodHandle$Species_LL`           |
| -23.9% | -18.499 MiB | 0.6% → 0.5% |   77.5 MiB → 59 MiB | 155 → 118 | `copyOfRangeByte(byte[], int, int)`                                                     | `java.util.Arrays`                                        |
| -19.6% | -15.999 MiB | 0.7% → 0.5% | 81.5 MiB → 65.5 MiB | 163 → 131 | `lambda$makeRef$0(MatchOps$MatchKind, Predicate)`                                       | `java.util.stream.MatchOps`                               |
| -59.6% | -15.499 MiB | 0.2% → 0.1% |   26 MiB → 10.5 MiB |   52 → 21 | `tuple(Object, Object)`                                                                 | `groovy.lang.Tuple`                                       |
|  -5.9% | -13.999 MiB | 2.0% → 1.8% |   239 MiB → 225 MiB | 478 → 450 | `optimize(Pattern$Node)`                                                                | `java.util.regex.Pattern$BnM`                             |
|  -5.5% | -13.499 MiB | 2.1% → 1.9% |   247 MiB → 234 MiB | 495 → 468 | `newNode(int, Object, Object, HashMap$Node)`                                            | `java.util.HashMap`                                       |
| -64.9% | -11.999 MiB | 0.2% → 0.1% |  18.5 MiB → 6.5 MiB |   37 → 13 | `<init>(Object, Object)`                                                                | `groovy.lang.Tuple2`                                      |
| -37.5% | -10.499 MiB | 0.2% → 0.1% |   28 MiB → 17.5 MiB |   56 → 35 | `<init>(int)`                                                                           | `java.lang.AbstractStringBuilder`                         |
| -24.7% | -10.499 MiB | 0.4% → 0.3% |   42.5 MiB → 32 MiB |   85 → 64 | `<init>(int)`                                                                           | `java.util.ArrayList`                                     |
| -34.4% | -10.499 MiB | 0.3% → 0.2% |   30.5 MiB → 20 MiB |   61 → 40 | `<init>(Method, boolean)`                                                               | `java.lang.invoke.MemberName`                             |
| -13.9% |  -9.999 MiB | 0.6% → 0.5% |     72 MiB → 62 MiB | 144 → 124 | `iterator()`                                                                            | `java.util.ArrayList`                                     |
| -27.1% |  -9.499 MiB | 0.3% → 0.2% |   35 MiB → 25.5 MiB |   70 → 51 | `getAndPut(String, MemoizeCache$ValueProvider)`                                         | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`       |
| -14.2% |  -9.499 MiB | 0.6% → 0.5% |   67 MiB → 57.5 MiB | 132 → 114 | `copyOf(byte[], int)`                                                                   | `java.util.Arrays`                                        |
|  -2.4% |  -8.999 MiB | 3.2% → 3.0% |   380 MiB → 371 MiB | 760 → 742 | `newInstance(Class, int)`                                                               | `java.lang.reflect.Array`                                 |
| -20.7% |  -8.499 MiB |        0.3% |   41 MiB → 32.5 MiB |   82 → 65 | `grow(int)`                                                                             | `java.util.ArrayList`                                     |
|  -7.0% |  -8.499 MiB | 1.0% → 0.9% |   122 MiB → 113 MiB | 244 → 227 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` | `org.codehaus.groovy.vmplugin.v8.Selector`                |
| -17.0% |  -7.999 MiB | 0.4% → 0.3% |     47 MiB → 39 MiB |   94 → 78 | `lambda$setGuards$1(int)`                                                               | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  -3.2% |  -7.499 MiB | 2.0% → 1.9% |   236 MiB → 228 MiB | 472 → 457 | `insertParameterTypes(int, Class[])`                                                    | `java.lang.invoke.MethodType`                             |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |       Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +11.99 GiB | 0.0% → 99.9% |   0 B → 12 GiB | 0 → 24,556 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
|    new | +11.988 GiB | 0.0% → 99.9% |   0 B → 12 GiB | 0 → 24,551 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010abc00`  |
|    new | +11.988 GiB | 0.0% → 99.9% |   0 B → 12 GiB | 0 → 24,551 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400`  |
|    new | +11.988 GiB | 0.0% → 99.9% |   0 B → 12 GiB | 0 → 24,551 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac800`  |
|    new | +11.988 GiB | 0.0% → 99.9% |   0 B → 12 GiB | 0 → 24,551 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010a9400`  |
|    new | +11.977 GiB | 0.0% → 99.8% |   0 B → 12 GiB | 0 → 24,528 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000f001092800` |
|    new | +11.974 GiB | 0.0% → 99.7% |   0 B → 12 GiB | 0 → 24,522 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f001092000`  |
|    new | +11.972 GiB | 0.0% → 99.7% |   0 B → 12 GiB | 0 → 24,518 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010c6400`  |
|    new | +11.972 GiB | 0.0% → 99.7% |   0 B → 12 GiB | 0 → 24,518 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010c7000`  |
|    new | +11.855 GiB | 0.0% → 98.8% | 0 B → 11.9 GiB | 0 → 24,279 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f001096800`  |
|    new | +11.855 GiB | 0.0% → 98.8% | 0 B → 11.9 GiB | 0 → 24,279 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000f001098000`  |
|    new | +11.855 GiB | 0.0% → 98.8% | 0 B → 11.9 GiB | 0 → 24,279 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f001098400`  |
|    new | +11.851 GiB | 0.0% → 98.7% | 0 B → 11.9 GiB | 0 → 24,271 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f00109a000`  |
|    new | +11.849 GiB | 0.0% → 98.7% | 0 B → 11.8 GiB | 0 → 24,267 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f00102b000`  |
|    new | +11.729 GiB | 0.0% → 97.7% | 0 B → 11.7 GiB | 0 → 24,021 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab400`  |
|    new | +11.595 GiB | 0.0% → 96.6% | 0 B → 11.6 GiB | 0 → 23,747 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010d4000`  |
|    new | +11.595 GiB | 0.0% → 96.6% | 0 B → 11.6 GiB | 0 → 23,747 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f001188c00`  |
|    new | +11.569 GiB | 0.0% → 96.4% | 0 B → 11.6 GiB | 0 → 23,694 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000f001093400` |
|    new | +11.563 GiB | 0.0% → 96.3% | 0 B → 11.6 GiB | 0 → 23,682 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010d5c00`  |
|    new | +11.539 GiB | 0.0% → 96.1% | 0 B → 11.5 GiB | 0 → 23,631 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000f001188800`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.686 GiB | 99.9% → 0.0% | 11.7 GiB → 0 B | 23,932 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed | -11.684 GiB | 99.9% → 0.0% | 11.7 GiB → 0 B | 23,928 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010a9400`  |
| removed | -11.682 GiB | 99.9% → 0.0% | 11.7 GiB → 0 B | 23,922 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00`  |
| removed | -11.682 GiB | 99.9% → 0.0% | 11.7 GiB → 0 B | 23,922 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000070010ac400`  |
| removed | -11.682 GiB | 99.9% → 0.0% | 11.7 GiB → 0 B | 23,922 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000070010ac800`  |
| removed | -11.672 GiB | 99.8% → 0.0% | 11.7 GiB → 0 B | 23,903 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001092800` |
| removed | -11.657 GiB | 99.6% → 0.0% | 11.7 GiB → 0 B | 23,872 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
| removed | -11.657 GiB | 99.6% → 0.0% | 11.7 GiB → 0 B | 23,872 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`  |
| removed | -11.654 GiB | 99.6% → 0.0% | 11.7 GiB → 0 B | 23,867 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001092000`  |
| removed | -11.525 GiB | 98.5% → 0.0% | 11.5 GiB → 0 B | 23,602 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001096800`  |
| removed | -11.525 GiB | 98.5% → 0.0% | 11.5 GiB → 0 B | 23,602 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001098000`  |
| removed | -11.525 GiB | 98.5% → 0.0% | 11.5 GiB → 0 B | 23,602 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
| removed | -11.523 GiB | 98.5% → 0.0% | 11.5 GiB → 0 B | 23,598 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| removed | -11.522 GiB | 98.5% → 0.0% | 11.5 GiB → 0 B | 23,597 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700102b000`  |
| removed |  -11.41 GiB | 97.5% → 0.0% | 11.4 GiB → 0 B | 23,365 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010ab400`  |
| removed |  -11.27 GiB | 96.3% → 0.0% | 11.3 GiB → 0 B | 23,079 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010d4000`  |
| removed |  -11.27 GiB | 96.3% → 0.0% | 11.3 GiB → 0 B | 23,079 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001188c00`  |
| removed | -11.243 GiB | 96.1% → 0.0% | 11.2 GiB → 0 B | 23,024 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001093400` |
| removed | -11.236 GiB | 96.0% → 0.0% | 11.2 GiB → 0 B | 23,010 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d5c00`  |
| removed | -11.213 GiB | 95.8% → 0.0% | 11.2 GiB → 0 B | 22,963 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001188800`  |
