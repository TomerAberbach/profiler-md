# Allocated heap profile diff

Allocated 11.8 GiB (-401.766 KiB, ~0%) over 24,242 samples (512 KiB per sample).

| Category         | Change |      Delta |             % |              Size |         Samples |
| ---------------- | -----: | ---------: | ------------: | ----------------: | --------------: |
| Standard library |    ~0% | +5.607 MiB | 99.1% → 99.2% |          11.7 GiB | 24,027 → 24,039 |
| Ours             |  -5.6% | -5.999 MiB |   0.9% → 0.8% | 107 MiB → 101 MiB |       215 → 203 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |           % |                Size |       Samples | Function                                                                                      | Location                                                  |
| -----: | ----------: | ----------: | ------------------: | ------------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|  +6.0% | +32.999 MiB | 4.6% → 4.8% |   554 MiB → 587 MiB | 1,109 → 1,175 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                                     |
| +39.9% | +28.499 MiB | 0.6% → 0.8% |  71.5 MiB → 100 MiB |     143 → 200 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`            |
|  +4.2% | +25.499 MiB | 5.0% → 5.2% |   608 MiB → 634 MiB | 1,217 → 1,268 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`           |
|  +7.4% | +24.999 MiB | 2.8% → 3.0% |   337 MiB → 362 MiB |     674 → 724 | `make(MethodType, LambdaForm, Object, Object)`                                                | `java.lang.invoke.BoundMethodHandle$Species_LL`           |
| +19.0% | +22.999 MiB | 1.0% → 1.2% |   121 MiB → 144 MiB |     242 → 288 | `of(byte, int)`                                                                               | `java.lang.invoke.LambdaFormEditor$TransformKey`          |
| +10.0% | +21.999 MiB | 1.8% → 2.0% |   220 MiB → 242 MiB |     440 → 484 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                             |
|  +7.4% | +20.999 MiB | 2.3% → 2.5% |   284 MiB → 305 MiB |     568 → 610 | `stream(Spliterator, boolean)`                                                                | `java.util.stream.StreamSupport`                          |
| +13.7% | +17.999 MiB | 1.1% → 1.2% |   131 MiB → 149 MiB |     262 → 298 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                        | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`        |
| +31.3% | +17.499 MiB | 0.5% → 0.6% |   56 MiB → 73.5 MiB |     112 → 147 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)`                                  | `java.math.MutableBigInteger`                             |
| +19.4% | +15.499 MiB | 0.7% → 0.8% |   80 MiB → 95.5 MiB |     160 → 191 | `copyWith(MethodType, LambdaForm)`                                                            | `java.lang.invoke.BoundMethodHandle$Species_L`            |
| +11.4% | +14.999 MiB | 1.1% → 1.2% |   131 MiB → 146 MiB |     263 → 293 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`     |
| +20.3% | +12.999 MiB | 0.5% → 0.6% |     64 MiB → 77 MiB |     128 → 154 | `put(Object, Object)`                                                                         | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`      |
| +38.1% | +11.999 MiB | 0.3% → 0.4% | 31.5 MiB → 43.5 MiB |       63 → 87 | `asSpreader(int, Class, int)`                                                                 | `java.lang.invoke.MethodHandle`                           |
| +60.6% |  +9.999 MiB | 0.1% → 0.2% | 16.5 MiB → 26.5 MiB |       33 → 53 | `of(byte, int, int, int[])`                                                                   | `java.lang.invoke.LambdaFormEditor$TransformKey`          |
|  +9.5% |  +9.499 MiB | 0.8% → 0.9% |   100 MiB → 109 MiB |     200 → 219 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                 | `java.lang.invoke.MethodHandleImpl`                       |
| +19.4% |  +9.499 MiB | 0.4% → 0.5% |   49 MiB → 58.5 MiB |      98 → 117 | `createEntryListArray(int)`                                                                   | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`      |
|  +3.5% |  +8.999 MiB | 2.1% → 2.2% |   259 MiB → 268 MiB |     519 → 537 | `make(MethodType, LambdaForm, Object, Object, Object, Object)`                                | `java.lang.invoke.BoundMethodHandle$Species_LLLL`         |
|  +6.2% |  +7.499 MiB | 1.0% → 1.1% |   121 MiB → 129 MiB |     243 → 258 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])`       | `org.codehaus.groovy.vmplugin.v8.Selector`                |
| +11.4% |  +6.999 MiB | 0.5% → 0.6% | 61.5 MiB → 68.5 MiB |     123 → 137 | `divideOneWord(int, MutableBigInteger)`                                                       | `java.math.MutableBigInteger`                             |
| +20.0% |  +6.999 MiB |        0.3% |     35 MiB → 42 MiB |       70 → 84 | `lambda$setGuards$1(int)`                                                                     | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |           % |                Size |       Samples | Function                                                                  | Location                                            |
| -----: | ----------: | ----------: | ------------------: | ------------: | ------------------------------------------------------------------------- | --------------------------------------------------- |
|  -3.5% | -27.499 MiB | 6.4% → 6.2% |   777 MiB → 749 MiB | 1,554 → 1,499 | `makeImpl(Class, Class[], boolean)`                                       | `java.lang.invoke.MethodType`                       |
|  -9.9% | -24.499 MiB | 2.0% → 1.8% |   247 MiB → 223 MiB |     495 → 446 | `newNode(int, Object, Object, HashMap$Node)`                              | `java.util.HashMap`                                 |
|  -6.0% | -20.499 MiB | 2.8% → 2.7% |   343 MiB → 322 MiB |     686 → 645 | `newArray(Class, int)`                                                    | `java.lang.reflect.Array`                           |
| -12.9% | -19.499 MiB | 1.2% → 1.1% |   151 MiB → 132 MiB |     303 → 264 | `make(MethodType, LambdaForm, Object, Object, Object)`                    | `java.lang.invoke.BoundMethodHandle$Species_LLL`    |
| -15.3% | -17.999 MiB | 1.0% → 0.8% |  117 MiB → 99.5 MiB |     235 → 199 | `toBigInteger(int)`                                                       | `java.math.MutableBigInteger`                       |
| -14.4% | -13.999 MiB | 0.8% → 0.7% |     97 MiB → 83 MiB |     194 → 166 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl`                 |
| -20.8% | -13.499 MiB | 0.5% → 0.4% |   65 MiB → 51.5 MiB |     130 → 103 | `copyOf(Object[], int)`                                                   | `java.util.Arrays`                                  |
| -15.6% | -12.999 MiB | 0.7% → 0.6% | 83.5 MiB → 70.5 MiB |     167 → 141 | `listIterator(int)`                                                       | `java.util.LinkedList`                              |
|  -9.1% | -12.499 MiB | 1.1% → 1.0% |   137 MiB → 125 MiB |     275 → 250 | `<init>()`                                                                | `java.math.MutableBigInteger`                       |
|  -2.9% | -10.499 MiB | 3.0% → 2.9% |   365 MiB → 354 MiB |     730 → 709 | `newInstance(Class, int)`                                                 | `java.lang.reflect.Array`                           |
| -12.9% | -10.499 MiB | 0.7% → 0.6% |   81.5 MiB → 71 MiB |     163 → 142 | `convertToTypeArray(Object[])`                                            | `org.codehaus.groovy.runtime.MetaClassHelper`       |
| -15.1% |  -9.499 MiB | 0.5% → 0.4% |   63 MiB → 53.5 MiB |     126 → 107 | `matcher(CharSequence)`                                                   | `java.util.regex.Pattern`                           |
| -19.6% |  -8.999 MiB | 0.4% → 0.3% |     46 MiB → 37 MiB |       92 → 74 | `of(byte, int, int, int)`                                                 | `java.lang.invoke.LambdaFormEditor$TransformKey`    |
| -21.5% |  -8.499 MiB |        0.3% |   39.5 MiB → 31 MiB |       79 → 62 | `put(String, MethodHandleWrapper)`                                        | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite` |
|  -3.5% |  -7.999 MiB | 1.9% → 1.8% |   227 MiB → 219 MiB |     454 → 438 | `allocateInstance(Object)`                                                | `java.lang.invoke.DirectMethodHandle`               |
| -17.6% |  -7.999 MiB | 0.4% → 0.3% | 45.5 MiB → 37.5 MiB |       91 → 75 | `getCachedContext(PredictionContext)`                                     | `groovyjarjarantlr4.v4.runtime.atn.ATN`             |
| -47.1% |  -7.999 MiB |        0.1% |      17 MiB → 9 MiB |       34 → 18 | `valueOf(long)`                                                           | `java.math.BigDecimal`                              |
| -17.2% |  -7.499 MiB | 0.4% → 0.3% |   43.5 MiB → 36 MiB |       87 → 72 | `getParameterTypes()`                                                     | `java.lang.reflect.Method`                          |
| -15.6% |  -6.999 MiB | 0.4% → 0.3% |     45 MiB → 38 MiB |       90 → 76 | `<init>(int)`                                                             | `java.util.ArrayList`                               |
|  -4.1% |  -6.999 MiB | 1.4% → 1.3% |   169 MiB → 162 MiB |     339 → 325 | `valueOf(long)`                                                           | `java.lang.Long`                                    |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |       Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +11.827 GiB | 0.0% → 99.9% | 0 B → 11.8 GiB | 0 → 24,219 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
|    new | +11.826 GiB | 0.0% → 99.9% | 0 B → 11.8 GiB | 0 → 24,217 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010a9400`  |
|    new | +11.825 GiB | 0.0% → 99.9% | 0 B → 11.8 GiB | 0 → 24,216 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003010abc00`  |
|    new | +11.825 GiB | 0.0% → 99.9% | 0 B → 11.8 GiB | 0 → 24,216 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000003010ac400`  |
|    new | +11.825 GiB | 0.0% → 99.9% | 0 B → 11.8 GiB | 0 → 24,216 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000003010ac800`  |
|    new | +11.815 GiB | 0.0% → 99.8% | 0 B → 11.8 GiB | 0 → 24,195 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000301092800` |
|    new | +11.804 GiB | 0.0% → 99.7% | 0 B → 11.8 GiB | 0 → 24,174 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010c6400`  |
|    new | +11.804 GiB | 0.0% → 99.7% | 0 B → 11.8 GiB | 0 → 24,174 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003010c7000`  |
|    new |   +11.8 GiB | 0.0% → 99.7% | 0 B → 11.8 GiB | 0 → 24,166 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301092000`  |
|    new | +11.665 GiB | 0.0% → 98.5% | 0 B → 11.7 GiB | 0 → 23,889 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301096800`  |
|    new | +11.665 GiB | 0.0% → 98.5% | 0 B → 11.7 GiB | 0 → 23,889 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000301098000`  |
|    new | +11.665 GiB | 0.0% → 98.5% | 0 B → 11.7 GiB | 0 → 23,889 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301098400`  |
|    new | +11.665 GiB | 0.0% → 98.5% | 0 B → 11.7 GiB | 0 → 23,889 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030109a000`  |
|    new | +11.663 GiB | 0.0% → 98.5% | 0 B → 11.7 GiB | 0 → 23,884 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030102b000`  |
|    new | +11.564 GiB | 0.0% → 97.7% | 0 B → 11.6 GiB | 0 → 23,681 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010ab400`  |
|    new | +11.421 GiB | 0.0% → 96.5% | 0 B → 11.4 GiB | 0 → 23,390 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010d4000`  |
|    new | +11.421 GiB | 0.0% → 96.5% | 0 B → 11.4 GiB | 0 → 23,390 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301188c00`  |
|    new | +11.398 GiB | 0.0% → 96.3% | 0 B → 11.4 GiB | 0 → 23,342 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000301093400` |
|    new | +11.389 GiB | 0.0% → 96.2% | 0 B → 11.4 GiB | 0 → 23,323 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003010d5c00`  |
|    new | +11.363 GiB | 0.0% → 96.0% | 0 B → 11.4 GiB | 0 → 23,270 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000301188800`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -11.827 GiB | 99.9% → 0.0% | 11.8 GiB → 0 B | 24,219 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001088800` |
| removed | -11.826 GiB | 99.9% → 0.0% | 11.8 GiB → 0 B | 24,217 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000090010a9400`  |
| removed | -11.825 GiB | 99.9% → 0.0% | 11.8 GiB → 0 B | 24,216 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000090010abc00`  |
| removed | -11.825 GiB | 99.9% → 0.0% | 11.8 GiB → 0 B | 24,216 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000090010ac400`  |
| removed | -11.825 GiB | 99.9% → 0.0% | 11.8 GiB → 0 B | 24,216 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000090010ac800`  |
| removed | -11.809 GiB | 99.8% → 0.0% | 11.8 GiB → 0 B | 24,183 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000009001092800` |
| removed | -11.804 GiB | 99.7% → 0.0% | 11.8 GiB → 0 B | 24,173 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000090010c6400`  |
| removed | -11.804 GiB | 99.7% → 0.0% | 11.8 GiB → 0 B | 24,173 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000090010c7000`  |
| removed |   -11.8 GiB | 99.7% → 0.0% | 11.8 GiB → 0 B | 24,166 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000009001092000`  |
| removed | -11.678 GiB | 98.6% → 0.0% | 11.7 GiB → 0 B | 23,916 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000009001096800`  |
| removed | -11.678 GiB | 98.6% → 0.0% | 11.7 GiB → 0 B | 23,916 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000009001098000`  |
| removed | -11.678 GiB | 98.6% → 0.0% | 11.7 GiB → 0 B | 23,916 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000009001098400`  |
| removed | -11.673 GiB | 98.6% → 0.0% | 11.7 GiB → 0 B | 23,906 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000900109a000`  |
| removed | -11.673 GiB | 98.6% → 0.0% | 11.7 GiB → 0 B | 23,905 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000900102b000`  |
| removed | -11.565 GiB | 97.7% → 0.0% | 11.6 GiB → 0 B | 23,683 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000090010ab400`  |
| removed | -11.421 GiB | 96.5% → 0.0% | 11.4 GiB → 0 B | 23,390 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000090010d4000`  |
| removed | -11.421 GiB | 96.5% → 0.0% | 11.4 GiB → 0 B | 23,390 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000009001188c00`  |
| removed | -11.415 GiB | 96.4% → 0.0% | 11.4 GiB → 0 B | 23,376 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000009001093400` |
| removed | -11.396 GiB | 96.3% → 0.0% | 11.4 GiB → 0 B | 23,339 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000090010d5c00`  |
| removed | -11.372 GiB | 96.1% → 0.0% | 11.4 GiB → 0 B | 23,289 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000009001188800`  |

# Retained heap profile diff

Retained 1.32 MiB → 958 KiB (-393.906 KiB, -29.1%) over 677 objects → 655 objects (2 KiB → 1.46 KiB per object).

| Category         | Change |        Delta |      % |               Size |   Objects |
| ---------------- | -----: | -----------: | -----: | -----------------: | --------: |
| Standard library | -29.1% | -393.875 KiB | 100.0% | 1.32 MiB → 958 KiB | 673 → 652 |
| Ours             | -26.7% |        -32 B |  <0.1% |       120 B → 88 B |     4 → 3 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |      Delta |            % |              Size | Objects | Function                                                                                      | Location                                                      |
| ------: | ---------: | -----------: | ----------------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|     new | +4.015 KiB |  0.0% → 0.4% |    0 B → 4.02 KiB |   0 → 1 | `<init>(int, int, MemorySegment)`                                                             | `java.nio.HeapByteBuffer`                                     |
|     new |     +792 B |  0.0% → 0.1% |       0 B → 792 B |  0 → 11 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])`       | `org.codehaus.groovy.vmplugin.v8.Selector`                    |
|  +38.9% |     +392 B |         0.1% | 1008 B → 1.37 KiB | 18 → 25 | `grow(int)`                                                                                   | `java.util.ArrayList`                                         |
|     new |     +384 B | 0.0% → <0.1% |       0 B → 384 B |   0 → 1 | `toArray()`                                                                                   | `java.lang.PublicMethods`                                     |
|  +55.1% |     +304 B | <0.1% → 0.1% |     552 B → 856 B |  6 → 10 | `compress(char[], int, int)`                                                                  | `java.lang.StringUTF16`                                       |
|     new |     +304 B | 0.0% → <0.1% |       0 B → 304 B |   0 → 2 | `makeWithoutCaching(String)`                                                                  | `org.codehaus.groovy.ast.ClassHelper`                         |
|     new |     +288 B | 0.0% → <0.1% |       0 B → 288 B |   0 → 2 | `sizeCache(int)`                                                                              | `java.lang.ClassValue$ClassValueMap`                          |
| +100.0% |     +240 B |        <0.1% |     240 B → 480 B | 10 → 20 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                                 |
|  +22.2% |     +224 B |         0.1% |  1008 B → 1.2 KiB | 18 → 22 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`               |
|  +42.9% |     +168 B | <0.1% → 0.1% |     392 B → 560 B |  7 → 10 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                        | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`            |
|  +75.0% |     +168 B |        <0.1% |     224 B → 392 B |   4 → 7 | `map(Function)`                                                                               | `java.util.stream.ReferencePipeline`                          |
|     new |     +144 B | 0.0% → <0.1% |       0 B → 144 B |   0 → 2 | `getTargetPropertyInfo()`                                                                     | `java.beans.Introspector`                                     |
|     new |     +144 B | 0.0% → <0.1% |       0 B → 144 B |   0 → 2 | `visitVariableDeclarator(GroovyParser$VariableDeclaratorContext)`                             | `org.apache.groovy.parser.antlr4.AstBuilder`                  |
| +133.3% |     +128 B |        <0.1% |      96 B → 224 B |   1 → 3 | `<init>(int)`                                                                                 | `java.lang.AbstractStringBuilder`                             |
| +200.0% |     +128 B |        <0.1% |      64 B → 192 B |   1 → 3 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])`                         | `sun.reflect.annotation.AnnotationParser`                     |
| +500.0% |     +120 B |        <0.1% |      24 B → 144 B |   1 → 6 | `lambda$setGuards$1(int)`                                                                     | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`     |
|     new |     +112 B | 0.0% → <0.1% |       0 B → 112 B |   0 → 2 | `registerMethods(Class, boolean, boolean, Map)`                                               | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl` |
|     new |     +112 B | 0.0% → <0.1% |       0 B → 112 B |   0 → 1 | `opWrapSink(int, Sink)`                                                                       | `java.util.stream.IntPipeline$10`                             |
|     new |     +112 B | 0.0% → <0.1% |       0 B → 112 B |   0 → 1 | `<clinit>()`                                                                                  | `java.util.ImmutableCollections$Access`                       |
| +200.0% |      +96 B |        <0.1% |      48 B → 144 B |   2 → 6 | `implReadLine(boolean, boolean[])`                                                            | `java.io.BufferedReader`                                      |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |            % |                Size | Objects | Function                                                                        | Location                                                            |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| removed | -288.062 KiB | 21.3% → 0.0% |       288 KiB → 0 B |   3 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                  | `java.util.concurrent.ConcurrentHashMap`                            |
| removed |  -64.015 KiB |  4.7% → 0.0% |        64 KiB → 0 B |   1 → 0 | `<init>(int)`                                                                   | `java.util.concurrent.atomic.AtomicIntegerArray`                    |
|  -99.6% |  -30.203 KiB | 2.2% → <0.1% |    30.3 KiB → 128 B |       1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                             |
|  -62.0% |   -6.562 KiB |  0.8% → 0.4% | 10.6 KiB → 4.02 KiB |   5 → 1 | `resize(int)`                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`             |
|  -55.7% |   -3.867 KiB |  0.5% → 0.3% | 6.95 KiB → 3.08 KiB |   3 → 1 | `copyOfRange(byte[], int, int)`                                                 | `java.util.Arrays`                                                  |
|  -56.8% |   -1.703 KiB |  0.2% → 0.1% |     3 KiB → 1.3 KiB |   7 → 3 | `write(String, int, int)`                                                       | `sun.nio.cs.StreamEncoder`                                          |
|  -70.7% |   -1.265 KiB |         0.1% |    1.79 KiB → 536 B |   4 → 2 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                                  |
| removed |   -1.203 KiB |  0.1% → 0.0% |       1.2 KiB → 0 B |   1 → 0 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`                         |
| removed |   -1.015 KiB |  0.1% → 0.0% |      1.02 KiB → 0 B |   1 → 0 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector`                         |
|  -93.7% |       -712 B | 0.1% → <0.1% |        760 B → 48 B |   3 → 2 | `<init>(int)`                                                                   | `java.util.ArrayList`                                               |
|  -14.9% |       -352 B |         0.2% | 2.31 KiB → 1.97 KiB |      18 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                                                  |
|  -20.8% |       -280 B |         0.1% | 1.31 KiB → 1.04 KiB | 24 → 19 | `stream(Spliterator, boolean)`                                                  | `java.util.stream.StreamSupport`                                    |
|  -18.0% |       -280 B |         0.1% | 1.52 KiB → 1.24 KiB |   5 → 4 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                                  |
|  -30.0% |       -240 B |         0.1% |       800 B → 560 B | 20 → 14 | `make(MethodType, LambdaForm, Object, Object)`                                  | `java.lang.invoke.BoundMethodHandle$Species_LL`                     |
|  -51.9% |       -224 B |        <0.1% |       432 B → 208 B |  12 → 6 | `make(byte, Class, MemberName, Class)`                                          | `java.lang.invoke.DirectMethodHandle`                               |
| removed |       -200 B | <0.1% → 0.0% |         200 B → 0 B |   1 → 0 | `createBuiltInTypes(SymbolHash, XSSimpleTypeDecl)`                              | `com.sun.org.apache.xerces.internal.impl.dv.xs.BaseSchemaDVFactory` |
|  -82.1% |       -184 B |        <0.1% |        224 B → 40 B |   4 → 1 | `clone()`                                                                       | `java.lang.Object`                                                  |
|   -8.2% |       -160 B |  0.1% → 0.2% | 1.91 KiB → 1.76 KiB | 49 → 45 | `makeImpl(Class, Class[], boolean)`                                             | `java.lang.invoke.MethodType`                                       |
|  -19.0% |       -160 B |         0.1% |       840 B → 680 B | 21 → 17 | `spliterator(Object[], int, int, int)`                                          | `java.util.Spliterators`                                            |
| removed |       -152 B | <0.1% → 0.0% |         152 B → 0 B |   1 → 0 | `visitClassDeclaration(GroovyParser$ClassDeclarationContext)`                   | `org.apache.groovy.parser.antlr4.AstBuilder`                        |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Standard library

| Change |       Delta |           % |           Size | Objects | Function                                                                                    | Location                                             |
| -----: | ----------: | ----------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +44.046 KiB | 0.0% → 4.6% |   0 B → 44 KiB | 0 → 650 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003010abc00`  |
|    new | +44.046 KiB | 0.0% → 4.6% |   0 B → 44 KiB | 0 → 650 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000003010ac400`  |
|    new | +44.046 KiB | 0.0% → 4.6% |   0 B → 44 KiB | 0 → 650 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000003010ac800`  |
|    new | +44.046 KiB | 0.0% → 4.6% |   0 B → 44 KiB | 0 → 650 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
|    new | +44.046 KiB | 0.0% → 4.6% |   0 B → 44 KiB | 0 → 650 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010a9400`  |
|    new | +43.835 KiB | 0.0% → 4.6% | 0 B → 43.8 KiB | 0 → 646 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003010c7000`  |
|    new | +43.835 KiB | 0.0% → 4.6% | 0 B → 43.8 KiB | 0 → 646 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010c6400`  |
|    new | +43.695 KiB | 0.0% → 4.6% | 0 B → 43.7 KiB | 0 → 643 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000301092800` |
|    new | +43.656 KiB | 0.0% → 4.6% | 0 B → 43.7 KiB | 0 → 639 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301092000`  |
|    new | +32.914 KiB | 0.0% → 3.4% | 0 B → 32.9 KiB | 0 → 368 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030109a000`  |
|    new | +32.859 KiB | 0.0% → 3.4% | 0 B → 32.9 KiB | 0 → 364 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301096800`  |
|    new | +32.859 KiB | 0.0% → 3.4% | 0 B → 32.9 KiB | 0 → 364 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000301098000`  |
|    new | +32.859 KiB | 0.0% → 3.4% | 0 B → 32.9 KiB | 0 → 364 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301098400`  |
|    new | +32.773 KiB | 0.0% → 3.4% | 0 B → 32.8 KiB | 0 → 362 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030102b000`  |
|    new | +32.757 KiB | 0.0% → 3.4% | 0 B → 32.8 KiB | 0 → 362 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010ab400`  |
|    new | +32.484 KiB | 0.0% → 3.4% | 0 B → 32.5 KiB | 0 → 356 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000301093400` |
|    new | +30.132 KiB | 0.0% → 3.1% | 0 B → 30.1 KiB | 0 → 327 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010d4000`  |
|    new | +30.132 KiB | 0.0% → 3.1% | 0 B → 30.1 KiB | 0 → 327 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000301188800`  |
|    new | +30.132 KiB | 0.0% → 3.1% | 0 B → 30.1 KiB | 0 → 327 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301188c00`  |
|    new | +30.132 KiB | 0.0% → 3.1% | 0 B → 30.1 KiB | 0 → 327 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003010d5c00`  |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

|  Change |        Delta |            % |          Size | Objects | Function                                                                                    | Location                                             |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -438.07 KiB | 32.4% → 0.0% | 438 KiB → 0 B | 673 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001088800` |
| removed | -438.031 KiB | 32.4% → 0.0% | 438 KiB → 0 B | 672 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000090010a9400`  |
| removed | -437.992 KiB | 32.4% → 0.0% | 438 KiB → 0 B | 671 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000090010abc00`  |
| removed | -437.992 KiB | 32.4% → 0.0% | 438 KiB → 0 B | 671 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000090010ac800`  |
| removed | -437.992 KiB | 32.4% → 0.0% | 438 KiB → 0 B | 671 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000090010ac400`  |
| removed | -437.867 KiB | 32.4% → 0.0% | 438 KiB → 0 B | 667 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000090010c7000`  |
| removed | -437.867 KiB | 32.4% → 0.0% | 438 KiB → 0 B | 667 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000090010c6400`  |
| removed | -437.703 KiB | 32.4% → 0.0% | 438 KiB → 0 B | 661 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000009001092000`  |
| removed | -437.554 KiB | 32.4% → 0.0% | 438 KiB → 0 B | 660 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000009001092800` |
| removed | -427.281 KiB | 31.6% → 0.0% | 427 KiB → 0 B | 412 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000009001096800`  |
| removed | -427.281 KiB | 31.6% → 0.0% | 427 KiB → 0 B | 412 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000009001098400`  |
| removed | -427.281 KiB | 31.6% → 0.0% | 427 KiB → 0 B | 412 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000009001098000`  |
| removed | -427.023 KiB | 31.6% → 0.0% | 427 KiB → 0 B | 406 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000900109a000`  |
| removed |     -427 KiB | 31.6% → 0.0% | 427 KiB → 0 B | 405 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000900102b000`  |
| removed |  -426.96 KiB | 31.6% → 0.0% | 427 KiB → 0 B | 405 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000090010ab400`  |
| removed | -426.546 KiB | 31.6% → 0.0% | 427 KiB → 0 B | 397 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000009001093400` |
| removed | -424.828 KiB | 31.4% → 0.0% | 425 KiB → 0 B | 373 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000090010d4000`  |
| removed | -424.828 KiB | 31.4% → 0.0% | 425 KiB → 0 B | 373 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000009001188c00`  |
| removed | -424.828 KiB | 31.4% → 0.0% | 425 KiB → 0 B | 373 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000090010d5c00`  |
| removed | -424.828 KiB | 31.4% → 0.0% | 425 KiB → 0 B | 373 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000009001188800`  |
