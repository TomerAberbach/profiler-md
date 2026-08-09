# Allocated heap profile diff

Allocated 8.9 MiB → 5.79 MiB (-3.11 MiB, -34.9%) over 23,956 samples → 24,584 samples (390 B → 247 B per sample).

| Category         | Change |      Delta |     % |                Size |         Samples |
| ---------------- | -----: | ---------: | ----: | ------------------: | --------------: |
| Standard library | -35.0% | -3.111 MiB | 99.9% |  8.9 MiB → 5.79 MiB | 23,752 → 24,361 |
| Ours             |  +6.7% |     +504 B |  0.1% | 7.38 KiB → 7.87 KiB |       204 → 223 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |             % |                Size |       Samples | Function                                 | Location                                       |
| ------: | ----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | ---------------------------------------------- |
|   +3.2% | +32.031 KiB | 10.9% → 17.3% |     993 KiB → 1 MiB |       62 → 64 | `<init>(Reader, int)`                    | `java.io.BufferedReader`                       |
| +129.2% | +22.578 KiB |   0.2% → 0.7% | 17.5 KiB → 40.1 KiB |     155 → 118 | `copyOfRangeByte(byte[], int, int)`      | `java.util.Arrays`                             |
|  +52.0% | +22.312 KiB |   0.5% → 1.1% | 42.9 KiB → 65.2 KiB |     115 → 141 | `copyOf(Object[], int)`                  | `java.util.Arrays`                             |
| +185.9% | +13.945 KiB |   0.1% → 0.4% |  7.5 KiB → 21.4 KiB |     192 → 549 | `make(MethodType, LambdaForm, Object)`   | `java.lang.invoke.BoundMethodHandle$Species_L` |
|   +3.9% |  +8.218 KiB |   2.3% → 3.7% |   213 KiB → 221 KiB |     236 → 293 | `resize()`                               | `java.util.HashMap`                            |
| +511.8% |  +4.078 KiB |  <0.1% → 0.1% |    816 B → 4.88 KiB |        8 → 16 | `copyOfRange(byte[], int, int)`          | `java.util.Arrays`                             |
|   +9.1% |  +3.562 KiB |   0.4% → 0.7% | 39.2 KiB → 42.8 KiB |     836 → 912 | `makeBlockInliningWrapper(MethodHandle)` | `java.lang.invoke.MethodHandleImpl`            |
|   +3.7% |  +2.773 KiB |   0.8% → 1.3% | 74.1 KiB → 76.9 KiB |     108 → 105 | `RemoveQEQuoting()`                      | `java.util.regex.Pattern`                      |
|  +31.4% |  +2.687 KiB |   0.1% → 0.2% | 8.57 KiB → 11.3 KiB |     108 → 127 | `newSlice(int[], int, boolean)`          | `java.util.regex.Pattern`                      |
|  +26.9% |  +2.515 KiB |   0.1% → 0.2% | 9.35 KiB → 11.9 KiB |     171 → 217 | `map(Function)`                          | `java.util.stream.ReferencePipeline`           |
|   +1.2% |  +2.468 KiB |   2.2% → 3.4% |   201 KiB → 203 KiB | 1,138 → 1,144 | `fillInStackTrace(int)`                  | `java.lang.Throwable`                          |
|  +40.7% |  +2.414 KiB |          0.1% | 5.93 KiB → 8.34 KiB |       17 → 19 | `<init>(Collection)`                     | `java.util.ArrayList`                          |
|   +8.8% |  +2.273 KiB |   0.3% → 0.5% | 25.8 KiB → 28.1 KiB |             7 | `<init>(File)`                           | `groovy.util.CharsetToolkit`                   |
|  +38.2% |  +2.234 KiB |          0.1% | 5.84 KiB → 8.08 KiB |       68 → 94 | `copy()`                                 | `java.lang.reflect.Method`                     |
|   +3.6% |  +2.109 KiB |   0.6% → 1.0% |   58.9 KiB → 61 KiB | 1,507 → 1,561 | `makeImpl(Class, Class[], boolean)`      | `java.lang.invoke.MethodType`                  |
|  +57.1% |  +2.062 KiB |  <0.1% → 0.1% | 3.61 KiB → 5.67 KiB |       42 → 66 | `<init>()`                               | `java.util.ArrayDeque`                         |
|   +3.1% |  +2.015 KiB |   0.7% → 1.1% | 64.4 KiB → 66.5 KiB |       52 → 61 | `enlarge(int)`                           | `jdk.internal.org.objectweb.asm.ByteVector`    |
|  +17.2% |  +1.765 KiB |   0.1% → 0.2% |   10.3 KiB → 12 KiB |     443 → 530 | `copyOfRange(Object[], int, int)`        | `java.util.Arrays`                             |
| +184.3% |  +1.007 KiB |         <0.1% |    560 B → 1.55 KiB |       17 → 29 | `clone()`                                | `java.lang.Object`                             |
|   +1.7% |      +928 B |   0.6% → 0.9% | 52.5 KiB → 53.4 KiB |     417 → 420 | `compile()`                              | `java.util.regex.Pattern`                      |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |             % |                Size |   Samples | Function                                                       | Location                                                |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------- | ------------------------------------------------------- |
|  -34.5% |   -1.118 MiB | 36.4% → 36.7% | 3.24 MiB → 2.13 MiB | 132 → 114 | `copyOf(byte[], int)`                                          | `java.util.Arrays`                                      |
| -100.0% | -913.726 KiB | 10.0% → <0.1% |      914 KiB → 80 B |         2 | `initCEN()`                                                    | `jdk.nio.zipfs.ZipFileSystem`                           |
|  -88.3% |  -806.46 KiB |  10.0% → 1.8% |   914 KiB → 107 KiB |         1 | `initCEN(int, ZipCoder)`                                       | `java.util.zip.ZipFile$Source`                          |
|  -47.4% |  -144.14 KiB |   3.3% → 2.7% |   304 KiB → 160 KiB |   19 → 10 | `getText(BufferedReader)`                                      | `org.codehaus.groovy.runtime.IOGroovyMethods`           |
|  -33.3% | -128.109 KiB |   4.2% → 4.3% |   384 KiB → 256 KiB |     6 → 2 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`                |
| removed |  -64.015 KiB |   0.7% → 0.0% |        64 KiB → 0 B |     1 → 0 | `<clinit>()`                                                   | `com.sun.org.apache.xerces.internal.util.XMLChar`       |
|  -18.5% |   -31.75 KiB |   1.9% → 2.4% |   172 KiB → 140 KiB |   20 → 19 | `<init>(int, int, MemorySegment)`                              | `java.nio.HeapByteBuffer`                               |
|  -30.0% |  -24.046 KiB |          0.9% | 80.2 KiB → 56.1 KiB |    10 → 7 | `<init>(int, int, MemorySegment)`                              | `java.nio.HeapCharBuffer`                               |
|   -9.1% |  -20.093 KiB |   2.4% → 3.4% |   221 KiB → 200 KiB | 478 → 450 | `optimize(Pattern$Node)`                                       | `java.util.regex.Pattern$BnM`                           |
|   -7.9% |  -11.781 KiB |   1.6% → 2.3% |   150 KiB → 138 KiB |        14 | `<init>(InputStream, Inflater, int)`                           | `java.util.zip.InflaterInputStream`                     |
|  -37.1% |   -9.671 KiB |          0.3% | 26.1 KiB → 16.4 KiB |   20 → 12 | `<init>(int)`                                                  | `jdk.internal.org.objectweb.asm.ByteVector`             |
|  -44.9% |   -4.796 KiB |          0.1% |  10.7 KiB → 5.9 KiB |   85 → 64 | `<init>(int)`                                                  | `java.util.ArrayList`                                   |
|  -13.1% |   -4.101 KiB |   0.3% → 0.5% | 31.4 KiB → 27.3 KiB | 103 → 100 | `copyOf(int[], int)`                                           | `java.util.Arrays`                                      |
|  -10.5% |   -3.281 KiB |   0.3% → 0.5% | 31.3 KiB → 28.1 KiB | 573 → 513 | `stream(Spliterator, boolean)`                                 | `java.util.stream.StreamSupport`                        |
|  -21.4% |   -2.695 KiB |   0.1% → 0.2% | 12.6 KiB → 9.88 KiB |   29 → 25 | `write(String, int, int)`                                      | `sun.nio.cs.StreamEncoder`                              |
|   -6.3% |   -1.796 KiB |   0.3% → 0.5% | 28.6 KiB → 26.8 KiB | 731 → 685 | `make(MethodType, LambdaForm, Object, Object)`                 | `java.lang.invoke.BoundMethodHandle$Species_LL`         |
|   -8.7% |   -1.765 KiB |   0.2% → 0.3% | 20.2 KiB → 18.4 KiB | 760 → 742 | `newInstance(Class, int)`                                      | `java.lang.reflect.Array`                               |
|  -20.4% |   -1.546 KiB |          0.1% | 7.58 KiB → 6.03 KiB |     5 → 2 | `resize(int)`                                                  | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|  -56.2% |   -1.453 KiB |         <0.1% | 2.59 KiB → 1.13 KiB |         6 | `copyOf(Object[], int, Class)`                                 | `java.util.Arrays`                                      |
|  -14.6% |   -1.218 KiB |          0.1% | 8.34 KiB → 7.13 KiB | 356 → 304 | `valueOf(long)`                                                | `java.lang.Long`                                        |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |      Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| -----: | ---------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +5.591 MiB | 0.0% → 96.5% | 0 B → 5.59 MiB | 0 → 24,556 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
|    new |  +5.59 MiB | 0.0% → 96.5% | 0 B → 5.59 MiB | 0 → 24,551 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010abc00`  |
|    new |  +5.59 MiB | 0.0% → 96.5% | 0 B → 5.59 MiB | 0 → 24,551 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400`  |
|    new |  +5.59 MiB | 0.0% → 96.5% | 0 B → 5.59 MiB | 0 → 24,551 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac800`  |
|    new |  +5.59 MiB | 0.0% → 96.5% | 0 B → 5.59 MiB | 0 → 24,551 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010a9400`  |
|    new | +5.574 MiB | 0.0% → 96.2% | 0 B → 5.57 MiB | 0 → 24,528 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000f001092800` |
|    new | +5.556 MiB | 0.0% → 95.9% | 0 B → 5.56 MiB | 0 → 24,021 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab400`  |
|    new | +5.484 MiB | 0.0% → 94.7% | 0 B → 5.48 MiB | 0 → 24,522 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f001092000`  |
|    new | +5.482 MiB | 0.0% → 94.6% | 0 B → 5.48 MiB | 0 → 24,518 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010c6400`  |
|    new | +5.482 MiB | 0.0% → 94.6% | 0 B → 5.48 MiB | 0 → 24,518 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010c7000`  |
|    new | +5.475 MiB | 0.0% → 94.5% | 0 B → 5.48 MiB | 0 → 24,279 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f001096800`  |
|    new | +5.475 MiB | 0.0% → 94.5% | 0 B → 5.48 MiB | 0 → 24,279 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000f001098000`  |
|    new | +5.475 MiB | 0.0% → 94.5% | 0 B → 5.48 MiB | 0 → 24,279 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f001098400`  |
|    new | +5.472 MiB | 0.0% → 94.5% | 0 B → 5.47 MiB | 0 → 24,271 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f00109a000`  |
|    new | +5.472 MiB | 0.0% → 94.5% | 0 B → 5.47 MiB | 0 → 24,267 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f00102b000`  |
|    new | +5.409 MiB | 0.0% → 93.4% | 0 B → 5.41 MiB | 0 → 23,535 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010d4c00`  |
|    new | +5.398 MiB | 0.0% → 93.2% |  0 B → 5.4 MiB | 0 → 23,694 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000f001093400` |
|    new | +5.334 MiB | 0.0% → 92.1% | 0 B → 5.33 MiB | 0 → 23,577 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f0010d3800`  |
|    new | +5.242 MiB | 0.0% → 90.5% | 0 B → 5.24 MiB | 0 → 23,747 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010d4000`  |
|    new | +5.242 MiB | 0.0% → 90.5% | 0 B → 5.24 MiB | 0 → 23,747 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f001188c00`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |      Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| ------: | ---------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -7.806 MiB | 87.7% → 0.0% | 7.81 MiB → 0 B | 23,932 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed | -7.743 MiB | 87.0% → 0.0% | 7.74 MiB → 0 B | 23,928 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010a9400`  |
| removed | -7.742 MiB | 86.9% → 0.0% | 7.74 MiB → 0 B | 23,922 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00`  |
| removed | -7.742 MiB | 86.9% → 0.0% | 7.74 MiB → 0 B | 23,922 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000070010ac400`  |
| removed | -7.742 MiB | 86.9% → 0.0% | 7.74 MiB → 0 B | 23,922 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000070010ac800`  |
| removed |  -7.74 MiB | 86.9% → 0.0% | 7.74 MiB → 0 B | 23,903 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001092800` |
| removed | -7.721 MiB | 86.7% → 0.0% | 7.72 MiB → 0 B | 23,365 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010ab400`  |
| removed | -6.881 MiB | 77.3% → 0.0% | 6.88 MiB → 0 B | 23,867 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001092000`  |
| removed |  -6.85 MiB | 76.9% → 0.0% | 6.85 MiB → 0 B | 23,602 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001096800`  |
| removed |  -6.85 MiB | 76.9% → 0.0% | 6.85 MiB → 0 B | 23,602 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001098000`  |
| removed |  -6.85 MiB | 76.9% → 0.0% | 6.85 MiB → 0 B | 23,602 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
| removed | -6.798 MiB | 76.4% → 0.0% |  6.8 MiB → 0 B | 23,872 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
| removed | -6.798 MiB | 76.4% → 0.0% |  6.8 MiB → 0 B | 23,872 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`  |
| removed | -6.787 MiB | 76.2% → 0.0% | 6.79 MiB → 0 B | 23,597 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700102b000`  |
| removed | -6.787 MiB | 76.2% → 0.0% | 6.79 MiB → 0 B | 23,598 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| removed | -6.727 MiB | 75.6% → 0.0% | 6.73 MiB → 0 B | 22,855 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d4c00`  |
| removed | -6.678 MiB | 75.0% → 0.0% | 6.68 MiB → 0 B | 23,024 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001093400` |
| removed | -6.614 MiB | 74.3% → 0.0% | 6.61 MiB → 0 B | 22,924 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`  |
| removed | -6.444 MiB | 72.4% → 0.0% | 6.44 MiB → 0 B | 23,079 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010d4000`  |
| removed | -6.444 MiB | 72.4% → 0.0% | 6.44 MiB → 0 B | 23,079 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001188c00`  |
