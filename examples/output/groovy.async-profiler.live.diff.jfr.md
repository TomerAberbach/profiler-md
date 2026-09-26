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

|      Change |       Delta |             % |                Size |        Samples | Function                                         | Location                                            |
| ----------: | ----------: | ------------: | ------------------: | -------------: | ------------------------------------------------ | --------------------------------------------------- |
|  +201466.7% | +11.804 GiB | <0.1% → 98.4% |    6 MiB → 11.8 GiB |    12 → 24,187 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
|    +7720.5% | +11.802 GiB |  1.3% → 99.6% |    157 MiB → 12 GiB |   311 → 24,484 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| +1179799.9% | +11.521 GiB | <0.1% → 96.0% |    1 MiB → 11.5 GiB |     2 → 23,597 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d5c00` |
|    +3317.1% | +11.467 GiB |  2.9% → 98.4% |  354 MiB → 11.8 GiB |   708 → 24,192 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
|    +1244.6% | +10.629 GiB |  7.2% → 95.7% |  875 MiB → 11.5 GiB | 1,747 → 23,518 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001288800` |
|  +109531.6% | +10.161 GiB |  0.1% → 84.7% |  9.5 MiB → 10.2 GiB |    19 → 20,830 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700159f800` |
|  +346683.3% | +10.156 GiB | <0.1% → 84.6% |    3 MiB → 10.2 GiB |     6 → 20,807 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070015a2400` |
|   +44170.2% | +10.136 GiB |  0.2% → 84.6% | 23.5 MiB → 10.2 GiB |    47 → 20,807 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070015a2800` |
|     +457.8% |  +9.407 GiB | 17.4% → 95.5% | 2.05 GiB → 11.5 GiB | 4,208 → 23,473 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010d4c00` |
|  +212766.7% |   +9.35 GiB | <0.1% → 77.9% |  4.5 MiB → 9.35 GiB |     9 → 19,158 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700163e400` |
|  +159550.0% |  +9.348 GiB | <0.1% → 77.9% |    6 MiB → 9.35 GiB |    12 → 19,158 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700163ec00` |
|    +6742.1% |  +9.217 GiB |  1.2% → 77.9% |  140 MiB → 9.35 GiB |   280 → 19,158 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700163f000` |
|  +252771.4% |  +8.639 GiB | <0.1% → 72.0% |  3.5 MiB → 8.64 GiB |     7 → 17,700 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001369400` |
|     +321.4% |  +8.411 GiB | 22.2% → 91.9% |   2.62 GiB → 11 GiB | 5,357 → 22,584 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001282400` |
|    +1662.5% |  +8.198 GiB |  4.2% → 72.4% |  505 MiB → 8.69 GiB | 1,010 → 17,800 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700126a400` |
|  +535100.0% |  +7.838 GiB | <0.1% → 65.3% |  1.5 MiB → 7.84 GiB |     3 → 16,056 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017c1400` |
|   +12266.0% |  +5.809 GiB |  0.4% → 48.8% | 48.5 MiB → 5.86 GiB |    97 → 11,994 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001369800` |
|   +12939.1% |  +5.496 GiB |  0.4% → 46.1% | 43.5 MiB → 5.54 GiB |    87 → 11,343 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d4800` |
|  +377399.9% |  +3.685 GiB | <0.1% → 30.7% |    1 MiB → 3.69 GiB |      2 → 7,549 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001291000` |
|     +169.9% |   +3.39 GiB | 16.9% → 44.9% |    2 GiB → 5.39 GiB | 4,086 → 11,028 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001360400` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |             % |                Size |        Samples | Function                                         | Location                                            |
| ------: | ----------: | ------------: | ------------------: | -------------: | ------------------------------------------------ | --------------------------------------------------- |
|  -99.9% | -11.735 GiB |  99.6% → 0.1% |   11.7 GiB → 13 MiB |    24,058 → 25 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001018400` |
| -100.0% | -11.608 GiB | 98.4% → <0.1% |  11.6 GiB → 512 KiB |     23,774 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001018800` |
| -100.0% | -11.209 GiB | 95.0% → <0.1% |  11.2 GiB → 512 KiB |     22,957 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070011ea000` |
|  -98.0% | -11.013 GiB |  95.3% → 1.9% |  11.2 GiB → 228 MiB |   23,010 → 457 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8000` |
|  -99.9% | -10.782 GiB |  91.5% → 0.1% |  10.8 GiB → 6.5 MiB |    22,094 → 13 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070011eb400` |
|  -91.9% | -10.669 GiB |  98.4% → 7.8% |  11.6 GiB → 961 MiB | 23,773 → 1,923 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700109b400` |
|  -92.2% | -10.069 GiB |  92.6% → 7.1% |  10.9 GiB → 877 MiB | 22,374 → 1,753 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700128d000` |
| -100.0% |  -9.925 GiB | 84.2% → <0.1% |    9.93 GiB → 1 MiB |     20,330 → 2 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001435c00` |
|  -99.9% |   -9.92 GiB |  84.2% → 0.1% |  9.93 GiB → 6.5 MiB |    20,331 → 13 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070014e5c00` |
|  -99.8% |  -9.916 GiB |  84.2% → 0.2% |   9.94 GiB → 20 MiB |    20,350 → 40 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070014ea400` |
|  -99.9% |  -9.155 GiB | 77.7% → <0.1% |  9.16 GiB → 5.5 MiB |    18,762 → 11 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001524800` |
|  -99.9% |  -9.155 GiB | 77.7% → <0.1% |  9.16 GiB → 5.5 MiB |    18,762 → 11 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700141f800` |
|  -99.9% |  -9.155 GiB | 77.7% → <0.1% |  9.16 GiB → 5.5 MiB |    18,762 → 11 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700156c800` |
|  -98.8% |  -8.327 GiB |  71.4% → 0.8% |  8.43 GiB → 103 MiB |   17,258 → 206 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001372400` |
| -100.0% |  -7.652 GiB | 64.9% → <0.1% |  7.65 GiB → 512 KiB |     15,674 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001501800` |
|  -68.3% |  -5.793 GiB | 71.9% → 22.4% | 8.48 GiB → 2.68 GiB | 17,357 → 5,494 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001290000` |
|  -99.9% |  -5.669 GiB | 48.1% → <0.1% |    5.67 GiB → 4 MiB |     11,618 → 8 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001335c00` |
| -100.0% |  -5.378 GiB | 45.6% → <0.1% |    5.38 GiB → 2 MiB |     11,018 → 4 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700110c400` |
|  -98.9% |  -5.149 GiB |  44.1% → 0.5% | 5.21 GiB → 59.5 MiB |   10,664 → 119 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001182000` |
|  -99.9% |  -3.649 GiB | 31.0% → <0.1% |    3.65 GiB → 2 MiB |      7,477 → 4 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001262400` |

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

|  Change |        Delta |             % |                Size |  Objects | Function                                         | Location                                             |
| ------: | -----------: | ------------: | ------------------: | -------: | ------------------------------------------------ | ---------------------------------------------------- |
|  -97.7% | -104.421 KiB |  98.8% → 0.2% |  107 KiB → 2.42 KiB | 689 → 40 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001120400`  |
|  -95.0% |  -92.515 KiB |  90.1% → 0.5% | 97.4 KiB → 4.88 KiB | 425 → 68 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001360400`  |
|  -93.9% |  -91.101 KiB |  89.8% → 0.6% |   97 KiB → 5.93 KiB | 422 → 87 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700126a400`  |
|  -99.3% |  -90.445 KiB |  84.3% → 0.1% |    91.1 KiB → 696 B |  308 → 8 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700136bc00`  |
|  -93.2% |  -90.445 KiB |  89.8% → 0.7% |   97 KiB → 6.59 KiB | 422 → 96 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00`  |
|  -94.8% |  -89.078 KiB |  86.9% → 0.5% |   94 KiB → 4.88 KiB | 382 → 68 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001369400`  |
| -100.0% |  -84.117 KiB | 77.8% → <0.1% |     84.1 KiB → 32 B |  241 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001662000`  |
|  -99.1% |  -78.789 KiB |  73.5% → 0.1% |    79.5 KiB → 696 B |  149 → 8 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001373c00`  |
|  -98.8% |  -78.531 KiB |  73.5% → 0.1% |    79.5 KiB → 960 B | 149 → 10 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001373000`  |
|  -99.8% |  -77.523 KiB | 71.8% → <0.1% |    77.6 KiB → 120 B |  143 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070018c0800`  |
|  -99.9% |  -77.273 KiB | 71.5% → <0.1% |     77.3 KiB → 48 B |  138 → 1 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700152bc00`  |
|  -99.6% |  -77.023 KiB | 71.5% → <0.1% |    77.3 KiB → 304 B |  138 → 5 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001130800`  |
|  -92.4% |  -73.429 KiB |  73.5% → 0.6% | 79.5 KiB → 6.04 KiB | 149 → 90 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001268800`  |
|  -91.4% |  -71.187 KiB |  72.0% → 0.7% | 77.8 KiB → 6.66 KiB |  146 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017c2800`  |
| removed |  -70.132 KiB |  64.9% → 0.0% |      70.1 KiB → 0 B |  136 → 0 | `invokeVirtual(Object, Object, int)`             | `java.lang.invoke.LambdaForm$DMH.0x0000000801109400` |
|  -99.9% |  -68.695 KiB | 63.6% → <0.1% |     68.7 KiB → 40 B |  106 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001371c00`  |
|  -83.5% |   -65.07 KiB |  72.1% → 1.3% | 77.9 KiB → 12.8 KiB | 148 → 10 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c9000`  |
| removed |  -64.195 KiB |  59.4% → 0.0% |      64.2 KiB → 0 B |    5 → 0 | `list()`                                         | `org.apache.groovy.parser.antlr4.GroovyParser`       |
|  -99.9% |  -64.132 KiB | 59.4% → <0.1% |     64.2 KiB → 40 B |    4 → 1 | `expressionList(boolean)`                        | `org.apache.groovy.parser.antlr4.GroovyParser`       |
| removed |  -64.015 KiB |  59.2% → 0.0% |        64 KiB → 0 B |    1 → 0 | `<init>(int)`                                    | `java.util.concurrent.atomic.AtomicIntegerArray`     |
