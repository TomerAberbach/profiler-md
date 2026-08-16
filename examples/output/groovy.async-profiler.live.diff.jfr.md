# Allocated heap profile diff

Allocated 9.18 MiB → 7.94 MiB (-1.234 MiB, -13.5%) over 24,242 samples (397 B → 344 B per sample).

| Category         | Change |      Delta |     % |                Size |         Samples |
| ---------------- | -----: | ---------: | ----: | ------------------: | --------------: |
| Standard library | -13.5% | -1.234 MiB | 99.9% | 9.17 MiB → 7.94 MiB | 24,027 → 24,039 |
| Ours             |  -2.7% |     -208 B |  0.1% | 7.61 KiB → 7.41 KiB |       215 → 203 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |           % |                Size |       Samples | Function                                                                                      | Location                                              |
| ------: | ----------: | ----------: | ------------------: | ------------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|  +62.0% | +90.609 KiB | 1.6% → 2.9% |   146 KiB → 237 KiB |     258 → 259 | `resize()`                                                                                    | `java.util.HashMap`                                   |
|  +23.5% | +64.062 KiB | 2.9% → 4.1% |   272 KiB → 336 KiB |       17 → 21 | `getText(BufferedReader)`                                                                     | `org.codehaus.groovy.runtime.IOGroovyMethods`         |
|  +80.0% | +32.062 KiB | 0.4% → 0.9% | 40.1 KiB → 72.1 KiB |         5 → 9 | `<init>(int, int, MemorySegment)`                                                             | `java.nio.HeapCharBuffer`                             |
|  +24.1% | +28.062 KiB | 1.2% → 1.8% |   116 KiB → 144 KiB |       16 → 20 | `<init>(int, int, MemorySegment)`                                                             | `java.nio.HeapByteBuffer`                             |
|  +18.7% | +23.929 KiB | 1.4% → 1.9% |   128 KiB → 152 KiB |       15 → 18 | `<init>(InputStream, Inflater, int)`                                                          | `java.util.zip.InflaterInputStream`                   |
|     new | +16.015 KiB | 0.0% → 0.2% |        0 B → 16 KiB |         0 → 1 | `<init>(Writer, int, int)`                                                                    | `java.io.BufferedWriter`                              |
|   +7.5% | +14.625 KiB | 2.1% → 2.6% |   194 KiB → 209 KiB | 1,109 → 1,175 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                                 |
| +142.9% | +10.156 KiB | 0.1% → 0.2% | 7.11 KiB → 17.3 KiB |        7 → 17 | `<init>(ClassWriter)`                                                                         | `jdk.internal.org.objectweb.asm.SymbolTable`          |
|  +16.8% |  +3.742 KiB | 0.2% → 0.3% |   22.3 KiB → 26 KiB |       83 → 91 | `copyOf(int[], int)`                                                                          | `java.util.Arrays`                                    |
|  +15.9% |  +3.437 KiB | 0.2% → 0.3% |   21.6 KiB → 25 KiB |     263 → 293 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
|   +4.2% |  +2.789 KiB | 0.7% → 0.9% | 66.6 KiB → 69.3 KiB | 1,217 → 1,268 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`       |
|   +7.4% |  +2.296 KiB | 0.3% → 0.4% | 31.1 KiB → 33.4 KiB |     568 → 610 | `stream(Spliterator, boolean)`                                                                | `java.util.stream.StreamSupport`                      |
|  +39.9% |  +2.226 KiB |        0.1% | 5.59 KiB → 7.81 KiB |     143 → 200 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`        |
|   +4.5% |  +2.171 KiB | 0.5% → 0.6% |   47.8 KiB → 50 KiB |     390 → 399 | `compile()`                                                                                   | `java.util.regex.Pattern`                             |
|  +13.7% |  +1.968 KiB |        0.2% | 14.3 KiB → 16.3 KiB |     262 → 298 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)`                        | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`    |
|   +7.4% |  +1.953 KiB |        0.3% | 26.3 KiB → 28.3 KiB |     674 → 724 | `make(MethodType, LambdaForm, Object, Object)`                                                | `java.lang.invoke.BoundMethodHandle$Species_LL`       |
|   +2.6% |  +1.843 KiB | 0.7% → 0.9% | 69.8 KiB → 71.7 KiB |       53 → 59 | `enlarge(int)`                                                                                | `jdk.internal.org.objectweb.asm.ByteVector`           |
|  +20.4% |  +1.609 KiB |        0.1% | 7.88 KiB → 9.49 KiB |     106 → 102 | `newSlice(int[], int, boolean)`                                                               | `java.util.regex.Pattern`                             |
|  +19.4% |   +1.21 KiB |        0.1% | 6.25 KiB → 7.46 KiB |     160 → 191 | `copyWith(MethodType, LambdaForm)`                                                            | `java.lang.invoke.BoundMethodHandle$Species_L`        |
|   +9.3% |  +1.101 KiB | 0.1% → 0.2% |   11.9 KiB → 13 KiB |     440 → 484 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                         |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                                |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -50.0% | -913.765 KiB | 19.4% → 11.2% |  1.78 MiB → 914 KiB |         2 → 1 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`                          |
| -11.9% | -348.835 KiB | 31.2% → 31.7% | 2.86 MiB → 2.52 MiB |     145 → 132 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                      |
| -50.0% | -144.125 KiB |   3.1% → 1.8% |   288 KiB → 144 KiB |             4 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                  | `java.util.concurrent.ConcurrentHashMap`                |
| -99.9% |  -63.937 KiB |  0.7% → <0.1% |       64 KiB → 80 B |         1 → 2 | `<init>(int)`                                                                   | `java.util.concurrent.atomic.AtomicIntegerArray`        |
| -99.6% |  -30.203 KiB |  0.3% → <0.1% |    30.3 KiB → 128 B |             1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                 |
| -32.6% |  -15.257 KiB |   0.5% → 0.4% | 46.9 KiB → 31.6 KiB |     130 → 103 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                      |
| -39.1% |  -10.664 KiB |   0.3% → 0.2% | 27.3 KiB → 16.6 KiB |       19 → 11 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`             |
|  -3.5% |   -7.304 KiB |   2.2% → 2.5% |   211 KiB → 204 KiB |     461 → 453 | `optimize(Pattern$Node)`                                                        | `java.util.regex.Pattern$BnM`                           |
| -54.9% |   -7.062 KiB |          0.1% | 12.9 KiB → 5.81 KiB |         8 → 4 | `resize(int)`                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
| -34.4% |    -6.32 KiB |   0.2% → 0.1% |   18.4 KiB → 12 KiB |         6 → 3 | `<init>(File)`                                                                  | `groovy.util.CharsetToolkit`                            |
| -56.1% |   -4.718 KiB |  0.1% → <0.1% |  8.41 KiB → 3.7 KiB |       22 → 11 | `copyOfRange(byte[], int, int)`                                                 | `java.util.Arrays`                                      |
| -28.7% |   -3.734 KiB |          0.1% |   13 KiB → 9.29 KiB |       31 → 23 | `write(String, int, int)`                                                       | `sun.nio.cs.StreamEncoder`                              |
|  -3.5% |   -2.148 KiB |   0.6% → 0.7% | 60.7 KiB → 58.6 KiB | 1,554 → 1,499 | `makeImpl(Class, Class[], boolean)`                                             | `java.lang.invoke.MethodType`                           |
| -12.9% |   -1.828 KiB |          0.2% | 14.2 KiB → 12.4 KiB |     303 → 264 | `make(MethodType, LambdaForm, Object, Object, Object)`                          | `java.lang.invoke.BoundMethodHandle$Species_LLL`        |
|  -8.5% |   -1.726 KiB |          0.2% | 20.4 KiB → 18.6 KiB |     730 → 709 | `newInstance(Class, int)`                                                       | `java.lang.reflect.Array`                               |
|  -9.9% |   -1.531 KiB |          0.2% | 15.5 KiB → 13.9 KiB |     495 → 446 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                                     |
| -15.1% |   -1.484 KiB |          0.1% | 9.84 KiB → 8.36 KiB |     126 → 107 | `matcher(CharSequence)`                                                         | `java.util.regex.Pattern`                               |
| -15.3% |   -1.406 KiB |          0.1% | 9.18 KiB → 7.77 KiB |     235 → 199 | `toBigInteger(int)`                                                             | `java.math.MutableBigInteger`                           |
| -19.3% |   -1.265 KiB |          0.1% |  6.57 KiB → 5.3 KiB |       90 → 76 | `<init>(int)`                                                                   | `java.util.ArrayList`                                   |
|  -8.4% |       -928 B |          0.1% | 10.8 KiB → 9.89 KiB |            23 | `<init>(Collection)`                                                            | `java.util.ArrayList`                                   |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |      Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| -----: | ---------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +6.708 MiB | 0.0% → 84.5% | 0 B → 6.71 MiB | 0 → 24,219 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
|    new | +6.708 MiB | 0.0% → 84.5% | 0 B → 6.71 MiB | 0 → 24,217 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010a9400`  |
|    new | +6.708 MiB | 0.0% → 84.5% | 0 B → 6.71 MiB | 0 → 24,216 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003010abc00`  |
|    new | +6.708 MiB | 0.0% → 84.5% | 0 B → 6.71 MiB | 0 → 24,216 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000003010ac400`  |
|    new | +6.708 MiB | 0.0% → 84.5% | 0 B → 6.71 MiB | 0 → 24,216 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000003010ac800`  |
|    new | +6.693 MiB | 0.0% → 84.3% | 0 B → 6.69 MiB | 0 → 24,195 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000301092800` |
|    new | +6.673 MiB | 0.0% → 84.0% | 0 B → 6.67 MiB | 0 → 23,681 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010ab400`  |
|    new | +5.751 MiB | 0.0% → 72.4% | 0 B → 5.75 MiB | 0 → 24,174 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010c6400`  |
|    new | +5.751 MiB | 0.0% → 72.4% | 0 B → 5.75 MiB | 0 → 24,174 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003010c7000`  |
|    new |  +5.75 MiB | 0.0% → 72.4% | 0 B → 5.75 MiB | 0 → 24,166 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000301092000`  |
|    new |  +5.74 MiB | 0.0% → 72.3% | 0 B → 5.74 MiB | 0 → 23,889 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301096800`  |
|    new |  +5.74 MiB | 0.0% → 72.3% | 0 B → 5.74 MiB | 0 → 23,889 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000301098000`  |
|    new |  +5.74 MiB | 0.0% → 72.3% | 0 B → 5.74 MiB | 0 → 23,889 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301098400`  |
|    new |  +5.74 MiB | 0.0% → 72.3% | 0 B → 5.74 MiB | 0 → 23,884 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030102b000`  |
|    new | +5.733 MiB | 0.0% → 72.2% | 0 B → 5.73 MiB | 0 → 23,889 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000030109a000`  |
|    new | +5.687 MiB | 0.0% → 71.6% | 0 B → 5.69 MiB | 0 → 23,342 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000301093400` |
|    new | +5.664 MiB | 0.0% → 71.3% | 0 B → 5.66 MiB | 0 → 23,201 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003010d4c00`  |
|    new | +5.617 MiB | 0.0% → 70.7% | 0 B → 5.62 MiB | 0 → 23,218 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000003010d3800`  |
|    new | +5.482 MiB | 0.0% → 69.0% | 0 B → 5.48 MiB | 0 → 23,390 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010d4000`  |
|    new | +5.482 MiB | 0.0% → 69.0% | 0 B → 5.48 MiB | 0 → 23,390 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000301188c00`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |      Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| ------: | ---------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -7.145 MiB | 77.9% → 0.0% | 7.15 MiB → 0 B | 24,219 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001088800` |
| removed | -7.137 MiB | 77.8% → 0.0% | 7.14 MiB → 0 B | 24,217 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000090010a9400`  |
| removed | -7.137 MiB | 77.8% → 0.0% | 7.14 MiB → 0 B | 24,216 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000090010abc00`  |
| removed | -7.137 MiB | 77.8% → 0.0% | 7.14 MiB → 0 B | 24,216 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000090010ac400`  |
| removed | -7.137 MiB | 77.8% → 0.0% | 7.14 MiB → 0 B | 24,216 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000090010ac800`  |
| removed | -7.105 MiB | 77.4% → 0.0% | 7.11 MiB → 0 B | 24,183 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000009001092800` |
| removed | -7.086 MiB | 77.2% → 0.0% | 7.09 MiB → 0 B | 23,683 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000090010ab400`  |
| removed | -6.254 MiB | 68.2% → 0.0% | 6.25 MiB → 0 B | 24,166 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000009001092000`  |
| removed | -6.243 MiB | 68.0% → 0.0% | 6.24 MiB → 0 B | 24,173 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000090010c6400`  |
| removed | -6.243 MiB | 68.0% → 0.0% | 6.24 MiB → 0 B | 24,173 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000090010c7000`  |
| removed | -6.242 MiB | 68.0% → 0.0% | 6.24 MiB → 0 B | 23,916 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000009001096800`  |
| removed | -6.242 MiB | 68.0% → 0.0% | 6.24 MiB → 0 B | 23,916 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000009001098000`  |
| removed | -6.242 MiB | 68.0% → 0.0% | 6.24 MiB → 0 B | 23,916 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000009001098400`  |
| removed |  -6.23 MiB | 67.9% → 0.0% | 6.23 MiB → 0 B | 23,906 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000900109a000`  |
| removed |  -6.23 MiB | 67.9% → 0.0% | 6.23 MiB → 0 B | 23,905 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000900102b000`  |
| removed | -6.181 MiB | 67.4% → 0.0% | 6.18 MiB → 0 B | 23,376 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000009001093400` |
| removed | -6.149 MiB | 67.0% → 0.0% | 6.15 MiB → 0 B | 23,207 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000090010d4c00`  |
| removed | -6.138 MiB | 66.9% → 0.0% | 6.14 MiB → 0 B | 23,267 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000090010d3800`  |
| removed |  -5.92 MiB | 64.5% → 0.0% | 5.92 MiB → 0 B | 23,390 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000090010d4000`  |
| removed |  -5.92 MiB | 64.5% → 0.0% | 5.92 MiB → 0 B | 23,390 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000009001188c00`  |

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
