# Allocated heap profile diff

Allocated 11.8 GiB → 12 GiB (+211.74 MiB, +1.8%) over 24,156 samples → 24,579 samples (512 KiB per sample).

| Category         | Change |       Delta |             % |                Size |         Samples |
| ---------------- | -----: | ----------: | ------------: | ------------------: | --------------: |
| Standard library |  +2.0% | +236.74 MiB | 99.0% → 99.3% | 11.7 GiB → 11.9 GiB | 23,922 → 24,395 |
| Ours             | -21.4% | -24.999 MiB |   1.0% → 0.7% |    117 MiB → 92 MiB |       234 → 184 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |           % |              Size |       Samples | Function                                                                                      | Location                                            |
| ------: | ----------: | ----------: | ----------------: | ------------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|  +18.5% | +47.499 MiB | 2.1% → 2.5% | 256 MiB → 304 MiB |     513 → 608 | `copyOfRange(Object[], int, int)`                                                             | `java.util.Arrays`                                  |
|   +4.8% | +36.999 MiB | 6.4% → 6.6% | 769 MiB → 806 MiB | 1,538 → 1,612 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                       |
|   +5.0% | +32.499 MiB | 5.4% → 5.5% | 648 MiB → 680 MiB | 1,296 → 1,361 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`     |
|  +16.2% | +31.999 MiB | 1.6% → 1.9% | 198 MiB → 230 MiB |     396 → 460 | `allocateInstance(Object)`                                                                    | `java.lang.invoke.DirectMethodHandle`               |
|   +8.8% | +30.499 MiB | 2.9% → 3.1% | 347 MiB → 377 MiB |     694 → 755 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                           |
|   +7.8% | +25.999 MiB | 2.8% → 2.9% | 334 MiB → 360 MiB |     668 → 720 | `make(MethodType, LambdaForm, Object, Object)`                                                | `java.lang.invoke.BoundMethodHandle$Species_LL`     |
|  +14.9% | +21.999 MiB | 1.2% → 1.4% | 147 MiB → 169 MiB |     295 → 339 | `parameterArray()`                                                                            | `java.lang.invoke.MethodType`                       |
|   +4.8% | +20.999 MiB | 3.6% → 3.7% | 438 MiB → 459 MiB |     876 → 918 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`                 |
|   +7.5% | +17.499 MiB | 1.9% → 2.0% | 233 MiB → 251 MiB |     467 → 502 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                       |
|  +27.6% | +14.499 MiB | 0.4% → 0.5% | 52.5 MiB → 67 MiB |     105 → 134 | `matcher(CharSequence)`                                                                       | `java.util.regex.Pattern`                           |
|  +11.0% | +13.499 MiB | 1.0% → 1.1% | 123 MiB → 136 MiB |     246 → 273 | `resize()`                                                                                    | `java.util.HashMap`                                 |
|  +12.3% | +13.499 MiB | 0.9% → 1.0% | 109 MiB → 123 MiB |     219 → 246 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                 | `java.lang.invoke.MethodHandleImpl`                 |
|  +10.0% | +11.999 MiB | 1.0% → 1.1% | 120 MiB → 132 MiB |     240 → 264 | `make(MethodType, LambdaForm, Object, Object, Object)`                                        | `java.lang.invoke.BoundMethodHandle$Species_LLL`    |
| +150.0% | +11.999 MiB | 0.1% → 0.2% |    8 MiB → 20 MiB |       16 → 40 | `getNormalMethodWithCaching(Object[], MetaMethodIndex$Entry)`                                 | `groovy.lang.MetaClassImpl`                         |
|   +5.4% | +11.999 MiB | 1.8% → 1.9% | 221 MiB → 233 MiB |     443 → 467 | `optimize(Pattern$Node)`                                                                      | `java.util.regex.Pattern$BnM`                       |
|  +27.4% | +11.499 MiB | 0.3% → 0.4% | 42 MiB → 53.5 MiB |      84 → 107 | `unreflect(Method)`                                                                           | `java.lang.invoke.MethodHandles$Lookup`             |
|   +3.7% |  +9.999 MiB | 2.2% → 2.3% | 269 MiB → 279 MiB |     539 → 559 | `divideAndRemainderKnuth(BigInteger)`                                                         | `java.math.BigInteger`                              |
|  +12.7% |  +9.999 MiB |        0.7% |   79 MiB → 89 MiB |     158 → 178 | `listIterator(int)`                                                                           | `java.util.LinkedList`                              |
|  +28.6% |  +9.999 MiB | 0.3% → 0.4% |   35 MiB → 45 MiB |       70 → 90 | `put(String, MethodHandleWrapper)`                                                            | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite` |
|   +9.9% |  +8.499 MiB | 0.7% → 0.8% | 86 MiB → 94.5 MiB |     172 → 189 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`      |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |            % |                Size |   Samples | Function                                                                                | Location                                              |
| -----: | ----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|  -7.4% | -21.999 MiB |  2.5% → 2.2% |   297 MiB → 275 MiB | 595 → 551 | `lambdaFormEditor(LambdaForm)`                                                          | `java.lang.invoke.LambdaFormEditor`                   |
|  -9.0% | -21.499 MiB |  2.0% → 1.8% |   240 MiB → 218 MiB | 480 → 437 | `of(byte, int, int)`                                                                    | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
| -62.7% | -20.999 MiB |  0.3% → 0.1% | 33.5 MiB → 12.5 MiB |   67 → 25 | `copy()`                                                                                | `java.lang.reflect.Method`                            |
| -24.6% | -16.999 MiB |  0.6% → 0.4% |     69 MiB → 52 MiB | 138 → 104 | `copyOf(Object[], int)`                                                                 | `java.util.Arrays`                                    |
|  -9.8% | -14.999 MiB |  1.3% → 1.1% |   153 MiB → 138 MiB | 307 → 277 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                    | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
| -12.4% | -10.999 MiB |  0.7% → 0.6% | 88.5 MiB → 77.5 MiB | 177 → 155 | `lambda$makeRef$0(MatchOps$MatchKind, Predicate)`                                       | `java.util.stream.MatchOps`                           |
| -18.3% | -10.999 MiB |  0.5% → 0.4% |     60 MiB → 49 MiB |  120 → 98 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object, Object)`  | `java.lang.invoke.BoundMethodHandle$Species_LLLLLLL`  |
| -15.2% | -10.499 MiB |  0.6% → 0.5% |   69 MiB → 58.5 MiB | 138 → 117 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                            | `java.math.MutableBigInteger`                         |
| -12.3% |  -9.499 MiB |  0.6% → 0.5% |   77 MiB → 67.5 MiB | 154 → 135 | `iterator()`                                                                            | `java.util.ArrayList`                                 |
|  -6.4% |  -9.499 MiB |  1.2% → 1.1% |   148 MiB → 138 MiB | 296 → 277 | `<init>()`                                                                              | `java.math.MutableBigInteger`                         |
|  -3.7% |  -9.499 MiB |  2.1% → 2.0% |   256 MiB → 247 MiB | 513 → 494 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`         |
| -23.8% |  -9.499 MiB |  0.3% → 0.2% |   40 MiB → 30.5 MiB |   80 → 61 | `<init>(MethodHandle, MethodHandle, boolean)`                                           | `org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper` |
| -24.3% |  -8.999 MiB |  0.3% → 0.2% |     37 MiB → 28 MiB |   74 → 56 | `linkLast(Object)`                                                                      | `java.util.LinkedList`                                |
| -11.8% |  -8.543 MiB |  0.6% → 0.5% |   72.5 MiB → 64 MiB | 143 → 127 | `copyOf(byte[], int)`                                                                   | `java.util.Arrays`                                    |
| -57.1% |  -7.999 MiB | 0.1% → <0.1% |      14 MiB → 6 MiB |   28 → 12 | `addEntry(Object, Object, TreeMap$Entry, boolean)`                                      | `java.util.TreeMap`                                   |
| -20.6% |  -6.999 MiB |  0.3% → 0.2% |     34 MiB → 27 MiB |   68 → 54 | `<init>(Reader, int)`                                                                   | `java.io.BufferedReader`                              |
| -38.7% |  -5.999 MiB |         0.1% |  15.5 MiB → 9.5 MiB |   31 → 19 | `clone()`                                                                               | `java.lang.Object`                                    |
| -12.5% |  -5.999 MiB |  0.4% → 0.3% |     48 MiB → 42 MiB |   96 → 84 | `getParameterTypes()`                                                                   | `java.lang.reflect.Method`                            |
| -26.7% |  -5.999 MiB |  0.2% → 0.1% | 22.5 MiB → 16.5 MiB |   45 → 33 | `removeRealReceiver(Object[])`                                                          | `org.codehaus.groovy.vmplugin.v8.Selector`            |
|  -3.7% |  -5.499 MiB |         1.2% |   147 MiB → 141 MiB | 294 → 283 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                  | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`    |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |       Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +11.988 GiB | 0.0% → 99.9% |   0 B → 12 GiB | 0 → 24,550 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|    new | +11.986 GiB | 0.0% → 99.9% |   0 B → 12 GiB | 0 → 24,547 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
|    new | +11.985 GiB | 0.0% → 99.9% |   0 B → 12 GiB | 0 → 24,545 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
|    new | +11.985 GiB | 0.0% → 99.9% |   0 B → 12 GiB | 0 → 24,545 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
|    new | +11.985 GiB | 0.0% → 99.9% |   0 B → 12 GiB | 0 → 24,545 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
|    new | +11.973 GiB | 0.0% → 99.7% |   0 B → 12 GiB | 0 → 24,519 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
|    new | +11.959 GiB | 0.0% → 99.6% |   0 B → 12 GiB | 0 → 24,492 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
|    new | +11.959 GiB | 0.0% → 99.6% |   0 B → 12 GiB | 0 → 24,492 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`  |
|    new | +11.955 GiB | 0.0% → 99.6% |   0 B → 12 GiB | 0 → 24,484 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
|    new | +11.813 GiB | 0.0% → 98.4% | 0 B → 11.8 GiB | 0 → 24,193 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
|    new | +11.813 GiB | 0.0% → 98.4% | 0 B → 11.8 GiB | 0 → 24,193 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00`  |
|    new | +11.813 GiB | 0.0% → 98.4% | 0 B → 11.8 GiB | 0 → 24,193 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
|    new | +11.812 GiB | 0.0% → 98.4% | 0 B → 11.8 GiB | 0 → 24,192 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`  |
|    new |  +11.81 GiB | 0.0% → 98.4% | 0 B → 11.8 GiB | 0 → 24,187 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700102b000`  |
|    new | +11.702 GiB | 0.0% → 97.5% | 0 B → 11.7 GiB | 0 → 23,964 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
|    new | +11.543 GiB | 0.0% → 96.2% | 0 B → 11.5 GiB | 0 → 23,640 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001188c00`  |
|    new | +11.542 GiB | 0.0% → 96.2% | 0 B → 11.5 GiB | 0 → 23,639 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010d4000`  |
|    new | +11.533 GiB | 0.0% → 96.1% | 0 B → 11.5 GiB | 0 → 23,620 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001095000` |
|    new | +11.522 GiB | 0.0% → 96.0% | 0 B → 11.5 GiB | 0 → 23,597 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d5c00`  |
|    new | +11.499 GiB | 0.0% → 95.8% | 0 B → 11.5 GiB | 0 → 23,549 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001188800`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.781 GiB | 99.9% → 0.0% | 11.8 GiB → 0 B | 24,126 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
| removed | -11.778 GiB | 99.9% → 0.0% | 11.8 GiB → 0 B | 24,121 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800`  |
| removed | -11.775 GiB | 99.8% → 0.0% | 11.8 GiB → 0 B | 24,115 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000`  |
| removed | -11.775 GiB | 99.8% → 0.0% | 11.8 GiB → 0 B | 24,115 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800`  |
| removed | -11.775 GiB | 99.8% → 0.0% | 11.8 GiB → 0 B | 24,115 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00`  |
| removed | -11.763 GiB | 99.7% → 0.0% | 11.8 GiB → 0 B | 24,090 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |
| removed | -11.749 GiB | 99.6% → 0.0% | 11.7 GiB → 0 B | 24,061 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010c6400`  |
| removed | -11.749 GiB | 99.6% → 0.0% | 11.7 GiB → 0 B | 24,061 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010c7000`  |
| removed | -11.748 GiB | 99.6% → 0.0% | 11.7 GiB → 0 B | 24,058 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080108e000`  |
| removed | -11.618 GiB | 98.5% → 0.0% | 11.6 GiB → 0 B | 23,792 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801098400`  |
| removed | -11.618 GiB | 98.5% → 0.0% | 11.6 GiB → 0 B | 23,792 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00`  |
| removed | -11.618 GiB | 98.5% → 0.0% | 11.6 GiB → 0 B | 23,792 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000080109a000`  |
| removed | -11.609 GiB | 98.4% → 0.0% | 11.6 GiB → 0 B | 23,774 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080102b000`  |
| removed | -11.608 GiB | 98.4% → 0.0% | 11.6 GiB → 0 B | 23,773 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080109bc00`  |
| removed | -11.495 GiB | 97.5% → 0.0% | 11.5 GiB → 0 B | 23,541 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010a9800`  |
| removed |  -11.34 GiB | 96.1% → 0.0% | 11.3 GiB → 0 B | 23,223 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000801188c00`  |
| removed | -11.339 GiB | 96.1% → 0.0% | 11.3 GiB → 0 B | 23,221 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010d4000`  |
| removed | -11.333 GiB | 96.1% → 0.0% | 11.3 GiB → 0 B | 23,208 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000801095000` |
| removed | -11.309 GiB | 95.9% → 0.0% | 11.3 GiB → 0 B | 23,159 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010d5c00`  |
| removed | -11.283 GiB | 95.7% → 0.0% | 11.3 GiB → 0 B | 23,106 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010d3800`  |

# Retained heap profile diff

Retained 108 KiB → 990 KiB (+881.625 KiB, +815.6%) over 709 objects → 288 objects (156 B → 3.44 KiB per object).

| Category         |  Change |        Delta |              % |              Size |   Objects |
| ---------------- | ------: | -----------: | -------------: | ----------------: | --------: |
| Standard library | +820.8% | +882.203 KiB | 99.4% → 100.0% | 107 KiB → 990 KiB | 689 → 287 |
| Ours             |  -94.9% |       -592 B |   0.6% → <0.1% |      624 B → 32 B |    20 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |            % |                Size | Objects | Function                                                                                             | Location                                            |
| ------: | -----------: | -----------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|     new | +913.765 KiB | 0.0% → 92.3% |       0 B → 914 KiB |   0 → 1 | `initCEN(int, ZipCoder)`                                                                             | `java.util.zip.ZipFile$Source`                      |
|     new |  +20.031 KiB |  0.0% → 2.0% |        0 B → 20 KiB |   0 → 2 | `<init>(int, int, MemorySegment)`                                                                    | `java.nio.HeapByteBuffer`                           |
| +648.8% |  +10.492 KiB |  1.5% → 1.2% | 1.62 KiB → 12.1 KiB |   4 → 3 | `copyOf(Object[], int)`                                                                              | `java.util.Arrays`                                  |
|     new |   +8.015 KiB |  0.0% → 0.8% |      0 B → 8.02 KiB |   0 → 1 | `initTable()`                                                                                        | `java.util.concurrent.ConcurrentHashMap`            |
| +371.0% |   +6.898 KiB |  1.7% → 0.9% | 1.86 KiB → 8.76 KiB | 16 → 18 | `copyOfRangeByte(byte[], int, int)`                                                                  | `java.util.Arrays`                                  |
|  +80.6% |   +5.718 KiB |  6.6% → 1.3% | 7.09 KiB → 12.8 KiB |   1 → 6 | `copyOfRange(byte[], int, int)`                                                                      | `java.util.Arrays`                                  |
| +100.0% |       +760 B |  0.7% → 0.1% |    760 B → 1.48 KiB |  5 → 10 | `getPlainNodeReference(boolean)`                                                                     | `org.codehaus.groovy.ast.ClassNode`                 |
|     new |       +352 B | 0.0% → <0.1% |         0 B → 352 B |   0 → 1 | `load(DataInputStream)`                                                                              | `sun.util.calendar.ZoneInfoFile`                    |
| +614.3% |       +344 B | 0.1% → <0.1% |        56 B → 400 B |   1 → 2 | `getTargetMethodInfo()`                                                                              | `java.beans.Introspector`                           |
|  +30.0% |       +336 B |  1.0% → 0.1% | 1.09 KiB → 1.42 KiB | 20 → 26 | `grow(int)`                                                                                          | `java.util.ArrayList`                               |
| +271.4% |       +304 B | 0.1% → <0.1% |       112 B → 416 B |   2 → 4 | `getDeclaredMethods0(boolean)`                                                                       | `java.lang.Class`                                   |
|     new |       +272 B | 0.0% → <0.1% |         0 B → 272 B |   0 → 1 | `<init>()`                                                                                           | `java.util.regex.Pattern$BitClass`                  |
|     new |       +264 B | 0.0% → <0.1% |         0 B → 264 B |   0 → 3 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                             |
|     new |       +216 B | 0.0% → <0.1% |         0 B → 216 B |   0 → 4 | `<init>(MethodType)`                                                                                 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite` |
|  +92.3% |       +192 B | 0.2% → <0.1% |       208 B → 400 B |       3 | `resize()`                                                                                           | `java.util.HashMap`                                 |
|  +77.8% |       +168 B | 0.2% → <0.1% |       216 B → 384 B |       1 | `toArray()`                                                                                          | `java.lang.PublicMethods`                           |
|     new |       +152 B | 0.0% → <0.1% |         0 B → 152 B |   0 → 1 | `getScriptClassDummy()`                                                                              | `org.codehaus.groovy.ast.ModuleNode`                |
|  +60.0% |       +144 B | 0.2% → <0.1% |       240 B → 384 B |   5 → 8 | `create(Tuple2, int, String, int, int, int, int, int)`                                               | `groovyjarjarantlr4.v4.runtime.CommonTokenFactory`  |
|     new |       +144 B | 0.0% → <0.1% |         0 B → 144 B |   0 → 2 | `visitIdentifierPrmrAlt(GroovyParser$IdentifierPrmrAltContext)`                                      | `org.apache.groovy.parser.antlr4.AstBuilder`        |
|     new |       +120 B | 0.0% → <0.1% |         0 B → 120 B |   0 → 1 | `<init>(MethodType)`                                                                                 | `java.lang.invoke.MethodTypeForm`                   |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change |       Delta |            % |             Size | Objects | Function                                                                                      | Location                                                |
| ------: | ----------: | -----------: | ---------------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| removed | -64.015 KiB | 59.2% → 0.0% |     64 KiB → 0 B |   1 → 0 | `<init>(int)`                                                                                 | `java.util.concurrent.atomic.AtomicIntegerArray`        |
| removed |  -3.085 KiB |  2.9% → 0.0% |   3.09 KiB → 0 B |   7 → 0 | `write(String, int, int)`                                                                     | `sun.nio.cs.StreamEncoder`                              |
| removed |  -1.953 KiB |  1.8% → 0.0% |   1.95 KiB → 0 B |  50 → 0 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                           |
| removed |  -1.937 KiB |  1.8% → 0.0% |   1.94 KiB → 0 B |   6 → 0 | `copyOf(byte[], int)`                                                                         | `java.util.Arrays`                                      |
|  -88.9% |    -1.5 KiB | 1.6% → <0.1% | 1.69 KiB → 192 B |  36 → 4 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`                     |
|  -72.2% |  -1.117 KiB | 1.4% → <0.1% | 1.55 KiB → 440 B |  18 → 5 | `copy()`                                                                                      | `java.lang.reflect.Method`                              |
| removed |  -1.093 KiB |  1.0% → 0.0% |   1.09 KiB → 0 B |  20 → 0 | `stream(Spliterator, boolean)`                                                                | `java.util.stream.StreamSupport`                        |
| removed |  -1.015 KiB |  0.9% → 0.0% |   1.02 KiB → 0 B |   1 → 0 | `resize(int)`                                                                                 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|  -91.3% |    -1,008 B | 1.0% → <0.1% |  1.08 KiB → 96 B |  23 → 2 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                                | `java.lang.invoke.BoundMethodHandle$Species_LLLL`       |
| removed |      -672 B |  0.6% → 0.0% |      672 B → 0 B |  12 → 0 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`         |
| removed |      -648 B |  0.6% → 0.0% |      648 B → 0 B |   9 → 0 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])`       | `org.codehaus.groovy.vmplugin.v8.Selector`              |
| removed |      -424 B |  0.4% → 0.0% |      424 B → 0 B |  14 → 0 | `writeViolation(Writer, Violation, String)`                                                   | `org.codenarc.report.TextReportWriter`                  |
| removed |      -416 B |  0.4% → 0.0% |      416 B → 0 B |  19 → 0 | `copyOfRange(Object[], int, int)`                                                             | `java.util.Arrays`                                      |
|  -45.5% |      -400 B | 0.8% → <0.1% |    880 B → 480 B | 22 → 12 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.LinkedHashMap`                               |
|  -62.5% |      -400 B | 0.6% → <0.1% |    640 B → 240 B |  16 → 6 | `make(MethodType, LambdaForm, Object, Object)`                                                | `java.lang.invoke.BoundMethodHandle$Species_LL`         |
| removed |      -360 B |  0.3% → 0.0% |      360 B → 0 B |  15 → 0 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                           |
| removed |      -336 B |  0.3% → 0.0% |      336 B → 0 B |   1 → 0 | `load(DataInputStream)`                                                                       | `java.time.zone.TzdbZoneRulesProvider`                  |
|  -27.3% |      -336 B |  1.1% → 0.1% |  1.2 KiB → 896 B | 22 → 16 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                             | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| removed |      -304 B |  0.3% → 0.0% |      304 B → 0 B |  19 → 0 | `lambdaFormEditor(LambdaForm)`                                                                | `java.lang.invoke.LambdaFormEditor`                     |
| removed |      -288 B |  0.3% → 0.0% |      288 B → 0 B |  12 → 0 | `parameterArray()`                                                                            | `java.lang.invoke.MethodType`                           |

##### Standard library

|  Change |       Delta |            % |             Size | Objects | Function                                                                                      | Location                                                |
| ------: | ----------: | -----------: | ---------------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| removed | -64.015 KiB | 59.2% → 0.0% |     64 KiB → 0 B |   1 → 0 | `<init>(int)`                                                                                 | `java.util.concurrent.atomic.AtomicIntegerArray`        |
| removed |  -3.085 KiB |  2.9% → 0.0% |   3.09 KiB → 0 B |   7 → 0 | `write(String, int, int)`                                                                     | `sun.nio.cs.StreamEncoder`                              |
| removed |  -1.953 KiB |  1.8% → 0.0% |   1.95 KiB → 0 B |  50 → 0 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                           |
| removed |  -1.937 KiB |  1.8% → 0.0% |   1.94 KiB → 0 B |   6 → 0 | `copyOf(byte[], int)`                                                                         | `java.util.Arrays`                                      |
|  -88.9% |    -1.5 KiB | 1.6% → <0.1% | 1.69 KiB → 192 B |  36 → 4 | `makeBlockInliningWrapper(MethodHandle)`                                                      | `java.lang.invoke.MethodHandleImpl`                     |
|  -72.2% |  -1.117 KiB | 1.4% → <0.1% | 1.55 KiB → 440 B |  18 → 5 | `copy()`                                                                                      | `java.lang.reflect.Method`                              |
| removed |  -1.093 KiB |  1.0% → 0.0% |   1.09 KiB → 0 B |  20 → 0 | `stream(Spliterator, boolean)`                                                                | `java.util.stream.StreamSupport`                        |
| removed |  -1.015 KiB |  0.9% → 0.0% |   1.02 KiB → 0 B |   1 → 0 | `resize(int)`                                                                                 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|  -91.3% |    -1,008 B | 1.0% → <0.1% |  1.08 KiB → 96 B |  23 → 2 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                                | `java.lang.invoke.BoundMethodHandle$Species_LLLL`       |
| removed |      -672 B |  0.6% → 0.0% |      672 B → 0 B |  12 → 0 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`         |
| removed |      -648 B |  0.6% → 0.0% |      648 B → 0 B |   9 → 0 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])`       | `org.codehaus.groovy.vmplugin.v8.Selector`              |
| removed |      -416 B |  0.4% → 0.0% |      416 B → 0 B |  19 → 0 | `copyOfRange(Object[], int, int)`                                                             | `java.util.Arrays`                                      |
|  -45.5% |      -400 B | 0.8% → <0.1% |    880 B → 480 B | 22 → 12 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.LinkedHashMap`                               |
|  -62.5% |      -400 B | 0.6% → <0.1% |    640 B → 240 B |  16 → 6 | `make(MethodType, LambdaForm, Object, Object)`                                                | `java.lang.invoke.BoundMethodHandle$Species_LL`         |
| removed |      -360 B |  0.3% → 0.0% |      360 B → 0 B |  15 → 0 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                           |
| removed |      -336 B |  0.3% → 0.0% |      336 B → 0 B |   1 → 0 | `load(DataInputStream)`                                                                       | `java.time.zone.TzdbZoneRulesProvider`                  |
|  -27.3% |      -336 B |  1.1% → 0.1% |  1.2 KiB → 896 B | 22 → 16 | `getOrPutMethods(String, MetaMethodIndex$Header)`                                             | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| removed |      -304 B |  0.3% → 0.0% |      304 B → 0 B |  19 → 0 | `lambdaFormEditor(LambdaForm)`                                                                | `java.lang.invoke.LambdaFormEditor`                     |
| removed |      -288 B |  0.3% → 0.0% |      288 B → 0 B |  12 → 0 | `parameterArray()`                                                                            | `java.lang.invoke.MethodType`                           |
| removed |      -280 B |  0.3% → 0.0% |      280 B → 0 B |  11 → 0 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                               |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Standard library

|    Change |        Delta |            % |               Size | Objects | Function                                                                    | Location                                          |
| --------: | -----------: | -----------: | -----------------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------- |
| +89340.5% | +914.343 KiB | 0.9% → 92.5% | 1.02 KiB → 915 KiB | 23 → 26 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                  |
|       new |  +913.89 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 3 | `loadClassOrNull(String, boolean)`                                          | `jdk.internal.loader.BuiltinClassLoader`          |
|       new |  +913.89 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 3 | `loadClass(String, boolean)`                                                | `jdk.internal.loader.BuiltinClassLoader`          |
|       new |  +913.89 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 3 | `loadClass(String, boolean)`                                                | `jdk.internal.loader.ClassLoaders$AppClassLoader` |
|       new |  +913.89 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 3 | `loadClass(String)`                                                         | `java.lang.ClassLoader`                           |
|       new |  +913.89 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 3 | `forName0(String, boolean, ClassLoader, Class)`                             | `java.lang.Class`                                 |
|       new | +913.875 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 2 | `findClassOnClassPathOrNull(String)`                                        | `jdk.internal.loader.BuiltinClassLoader`          |
|       new | +913.765 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 1 | `initCEN(int, ZipCoder)`                                                    | `java.util.zip.ZipFile$Source`                    |
|       new | +913.765 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                    |
|       new | +913.765 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 1 | `get(File, boolean, ZipCoder)`                                              | `java.util.zip.ZipFile$Source`                    |
|       new | +913.765 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 1 | `<init>(ZipFile, ZipCoder, File, int)`                                      | `java.util.zip.ZipFile$CleanableResource`         |
|       new | +913.765 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 1 | `<init>(File, int, Charset)`                                                | `java.util.zip.ZipFile`                           |
|       new | +913.765 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 1 | `<init>(File, int)`                                                         | `java.util.zip.ZipFile`                           |
|       new | +913.765 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 1 | `<init>(File, boolean, int, Runtime$Version)`                               | `java.util.jar.JarFile`                           |
|       new | +913.765 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 1 | `getJarFile(URL)`                                                           | `jdk.internal.loader.URLClassPath$JarLoader`      |
|       new | +913.765 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 1 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$JarLoader$1`    |
|       new | +913.765 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 1 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                  |
|       new | +913.765 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 1 | `ensureOpen()`                                                              | `jdk.internal.loader.URLClassPath$JarLoader`      |
|       new | +913.765 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 1 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)`              | `jdk.internal.loader.URLClassPath$JarLoader`      |
|       new | +913.765 KiB | 0.0% → 92.3% |      0 B → 914 KiB |   0 → 1 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$3`              |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

|  Change |        Delta |            % |           Size | Objects | Function                                                                                    | Location                                             |
| ------: | -----------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -107.648 KiB | 99.6% → 0.0% |  108 KiB → 0 B | 704 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
| removed | -107.585 KiB | 99.5% → 0.0% |  108 KiB → 0 B | 703 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800`  |
| removed |   -107.5 KiB | 99.5% → 0.0% |  108 KiB → 0 B | 701 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000`  |
| removed |   -107.5 KiB | 99.5% → 0.0% |  108 KiB → 0 B | 701 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00`  |
| removed |   -107.5 KiB | 99.5% → 0.0% |  108 KiB → 0 B | 701 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800`  |
| removed | -107.265 KiB | 99.2% → 0.0% |  107 KiB → 0 B | 696 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |
| removed | -107.007 KiB | 99.0% → 0.0% |  107 KiB → 0 B | 696 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010c6400`  |
| removed | -107.007 KiB | 99.0% → 0.0% |  107 KiB → 0 B | 696 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010c7000`  |
| removed | -106.843 KiB | 98.8% → 0.0% |  107 KiB → 0 B | 689 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080108e000`  |
| removed |  -97.398 KiB | 90.1% → 0.0% | 97.4 KiB → 0 B | 425 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010a9800`  |
| removed |  -97.125 KiB | 89.9% → 0.0% | 97.1 KiB → 0 B | 424 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801098400`  |
| removed |  -97.125 KiB | 89.9% → 0.0% | 97.1 KiB → 0 B | 424 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00`  |
| removed |  -97.125 KiB | 89.9% → 0.0% | 97.1 KiB → 0 B | 424 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000080109a000`  |
| removed |  -97.031 KiB | 89.8% → 0.0% |   97 KiB → 0 B | 422 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080102b000`  |
| removed |  -97.031 KiB | 89.8% → 0.0% |   97 KiB → 0 B | 422 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080109bc00`  |
| removed |  -96.523 KiB | 89.3% → 0.0% | 96.5 KiB → 0 B | 414 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000801095000` |
| removed |  -94.117 KiB | 87.1% → 0.0% | 94.1 KiB → 0 B | 385 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010d4000`  |
| removed |  -94.117 KiB | 87.1% → 0.0% | 94.1 KiB → 0 B | 385 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000801188800`  |
| removed |  -94.117 KiB | 87.1% → 0.0% | 94.1 KiB → 0 B | 385 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000801188c00`  |
| removed |  -94.117 KiB | 87.1% → 0.0% | 94.1 KiB → 0 B | 385 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010d5c00`  |
