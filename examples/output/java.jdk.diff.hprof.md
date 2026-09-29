# Heap snapshot diff

Allocated 13.4 MiB → 13.6 MiB (+261.26 KiB, +1.9%) across 700,233 → 704,337 nodes and 852,434 → 851,769 edges.

| Category           | Change |       Delta |             % |                Size |             Nodes |
| ------------------ | -----: | ----------: | ------------: | ------------------: | ----------------: |
| Array              |  +2.3% | +188.39 KiB | 59.3% → 59.6% | 7.93 MiB → 8.11 MiB | 130,106 → 131,265 |
| Number             |    ~0% |      +360 B | 28.6% → 28.1% |            3.82 MiB | 501,076 → 501,121 |
| Object             |  +4.8% | +61.914 KiB |   9.4% → 9.7% | 1.26 MiB → 1.32 MiB |   43,357 → 45,447 |
| String             |  +2.9% |  +9.009 KiB |          2.3% |   313 KiB → 322 KiB |   22,929 → 23,588 |
| Object shape       |  +3.6% |  +1.594 KiB |          0.3% | 43.7 KiB → 45.3 KiB |     2,669 → 2,820 |
| Big number         |   0.0% |         0 B |         <0.1% |            2.52 KiB |                92 |
| Regular expression |   0.0% |         0 B |         <0.1% |               333 B |                 3 |
| Synthetic          |      — |         0 B |          0.0% |                 0 B |                 1 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

|  Change |        Delta |             % |                Size |       Instances | Constructor                                                |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------- |
| +105.4% | +179.121 KiB |   1.2% → 2.5% |   170 KiB → 349 KiB |   1,932 → 1,811 | `int[]`                                                    |
|   +2.0% |  +31.644 KiB | 11.5% → 11.6% | 1.54 MiB → 1.57 MiB | 23,675 → 24,321 | `byte[]`                                                   |
|  +51.6% |  +14.953 KiB |   0.2% → 0.3% |     29 KiB → 44 KiB |       256 → 388 | `java.lang.ref.SoftReference[]`                            |
|   +5.9% |  +10.171 KiB |          1.3% |   171 KiB → 181 KiB |   6,259 → 6,631 | `java.util.concurrent.ConcurrentHashMap$Node`              |
|   +2.9% |   +9.009 KiB |          2.3% |   313 KiB → 322 KiB | 22,929 → 23,588 | `java.lang.String`                                         |
|  +22.9% |   +6.703 KiB |   0.2% → 0.3% |   29.3 KiB → 36 KiB |       624 → 767 | `java.lang.invoke.MethodType`                              |
|  +27.0% |   +5.941 KiB |          0.2% |     22 KiB → 28 KiB |       627 → 796 | `jdk.internal.util.WeakReferenceKey`                       |
|  +19.3% |   +5.886 KiB |   0.2% → 0.3% | 30.6 KiB → 36.4 KiB |       711 → 848 | `java.lang.invoke.MemberName`                              |
|  +11.1% |   +5.671 KiB |          0.4% | 51.2 KiB → 56.8 KiB |   1,191 → 1,323 | `java.util.LinkedHashMap$Entry`                            |
|  +44.9% |   +5.265 KiB |          0.1% |   11.7 KiB → 17 KiB |         40 → 54 | `java.lang.invoke.MethodHandle[]`                          |
|   +2.9% |   +5.125 KiB |          1.3% |   175 KiB → 180 KiB |       411 → 426 | `java.util.HashMap$Node[]`                                 |
|   +4.2% |   +4.875 KiB |          0.9% |   117 KiB → 122 KiB |         94 → 97 | `java.util.concurrent.ConcurrentHashMap$Node[]`            |
|  +46.1% |   +4.847 KiB |          0.1% | 10.5 KiB → 15.4 KiB |       317 → 463 | `java.lang.invoke.LambdaForm$Name`                         |
|   +1.7% |   +4.621 KiB |          2.0% |   276 KiB → 281 KiB | 10,094 → 10,263 | `java.util.HashMap$Node`                                   |
|  +31.6% |   +3.445 KiB |          0.1% | 10.9 KiB → 14.3 KiB |       497 → 629 | `java.lang.Class[]`                                        |
|  +45.9% |   +2.689 KiB |  <0.1% → 0.1% | 5.85 KiB → 8.54 KiB |       111 → 162 | `java.lang.invoke.LambdaForm`                              |
|     new |   +2.562 KiB |  0.0% → <0.1% |      0 B → 2.56 KiB |          0 → 41 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +44.8% |   +2.531 KiB |  <0.1% → 0.1% | 5.66 KiB → 8.19 KiB |       116 → 167 | `java.lang.invoke.LambdaForm$Name[]`                       |
|  +41.4% |   +2.355 KiB |  <0.1% → 0.1% |  5.7 KiB → 8.05 KiB |       162 → 229 | `java.lang.invoke.MethodTypeForm`                          |
|  +24.6% |   +1.763 KiB |          0.1% | 7.18 KiB → 8.94 KiB |       171 → 213 | `java.lang.invoke.DirectMethodHandle`                      |

##### Array

|  Change |        Delta |             % |                Size |         Instances | Constructor                                        |
| ------: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------------------- |
| +105.4% | +179.121 KiB |   1.2% → 2.5% |   170 KiB → 349 KiB |     1,932 → 1,811 | `int[]`                                            |
|   +2.0% |  +31.644 KiB | 11.5% → 11.6% | 1.54 MiB → 1.57 MiB |   23,675 → 24,321 | `byte[]`                                           |
|  +51.6% |  +14.953 KiB |   0.2% → 0.3% |     29 KiB → 44 KiB |         256 → 388 | `java.lang.ref.SoftReference[]`                    |
|  +44.9% |   +5.265 KiB |          0.1% |   11.7 KiB → 17 KiB |           40 → 54 | `java.lang.invoke.MethodHandle[]`                  |
|   +2.9% |   +5.125 KiB |          1.3% |   175 KiB → 180 KiB |         411 → 426 | `java.util.HashMap$Node[]`                         |
|   +4.2% |   +4.875 KiB |          0.9% |   117 KiB → 122 KiB |           94 → 97 | `java.util.concurrent.ConcurrentHashMap$Node[]`    |
|  +31.6% |   +3.445 KiB |          0.1% | 10.9 KiB → 14.3 KiB |         497 → 629 | `java.lang.Class[]`                                |
|  +44.8% |   +2.531 KiB |  <0.1% → 0.1% | 5.66 KiB → 8.19 KiB |         116 → 167 | `java.lang.invoke.LambdaForm$Name[]`               |
|     ~0% |       +360 B | 28.6% → 28.0% | 3.81 MiB → 3.82 MiB | 100,006 → 100,015 | `java.lang.Double[]`                               |
|  +49.2% |       +256 B |         <0.1% |       520 B → 776 B |             3 → 4 | `java.lang.ClassValue$Entry[]`                     |
| +133.3% |       +160 B |         <0.1% |       120 B → 280 B |             3 → 7 | `java.lang.invoke.BoundMethodHandle$SpeciesData[]` |
|   +6.3% |       +128 B |         <0.1% |    2 KiB → 2.13 KiB |           16 → 17 | `java.util.WeakHashMap$Entry[]`                    |
| +300.0% |        +96 B |         <0.1% |        32 B → 128 B |             1 → 4 | `java.lang.invoke.LambdaFormEditor$Transform[]`    |
|   +0.1% |        +16 B |          0.1% |            19.2 KiB |               447 | `java.lang.String[]`                               |

##### Number

| Change |  Delta |             % |                Size |         Instances | Constructor        |
| -----: | -----: | ------------: | ------------------: | ----------------: | ------------------ |
|    ~0% | +360 B | 28.6% → 28.0% | 3.81 MiB → 3.82 MiB | 500,031 → 500,076 | `java.lang.Double` |

##### Object

|  Change |       Delta |            % |                Size |       Instances | Constructor                                                |
| ------: | ----------: | -----------: | ------------------: | --------------: | ---------------------------------------------------------- |
|   +5.9% | +10.171 KiB |         1.3% |   171 KiB → 181 KiB |   6,259 → 6,631 | `java.util.concurrent.ConcurrentHashMap$Node`              |
|  +22.9% |  +6.703 KiB |  0.2% → 0.3% |   29.3 KiB → 36 KiB |       624 → 767 | `java.lang.invoke.MethodType`                              |
|  +27.0% |  +5.941 KiB |         0.2% |     22 KiB → 28 KiB |       627 → 796 | `jdk.internal.util.WeakReferenceKey`                       |
|  +19.3% |  +5.886 KiB |  0.2% → 0.3% | 30.6 KiB → 36.4 KiB |       711 → 848 | `java.lang.invoke.MemberName`                              |
|  +11.1% |  +5.671 KiB |         0.4% | 51.2 KiB → 56.8 KiB |   1,191 → 1,323 | `java.util.LinkedHashMap$Entry`                            |
|  +46.1% |  +4.847 KiB |         0.1% | 10.5 KiB → 15.4 KiB |       317 → 463 | `java.lang.invoke.LambdaForm$Name`                         |
|   +1.7% |  +4.621 KiB |         2.0% |   276 KiB → 281 KiB | 10,094 → 10,263 | `java.util.HashMap$Node`                                   |
|  +45.9% |  +2.689 KiB | <0.1% → 0.1% | 5.85 KiB → 8.54 KiB |       111 → 162 | `java.lang.invoke.LambdaForm`                              |
|     new |  +2.562 KiB | 0.0% → <0.1% |      0 B → 2.56 KiB |          0 → 41 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +41.4% |  +2.355 KiB | <0.1% → 0.1% |  5.7 KiB → 8.05 KiB |       162 → 229 | `java.lang.invoke.MethodTypeForm`                          |
|  +24.6% |  +1.763 KiB |         0.1% | 7.18 KiB → 8.94 KiB |       171 → 213 | `java.lang.invoke.DirectMethodHandle`                      |
|  +25.2% |  +1.562 KiB | <0.1% → 0.1% | 6.21 KiB → 7.77 KiB |       159 → 199 | `java.lang.ref.SoftReference`                              |
|  +43.4% |  +1.242 KiB |        <0.1% |  2.86 KiB → 4.1 KiB |       122 → 175 | `java.lang.invoke.LambdaForm$NamedFunction`                |
|  +64.5% |  +1.109 KiB |        <0.1% | 1.72 KiB → 2.83 KiB |       110 → 181 | `java.util.ArrayList`                                      |
| +237.5% |  +1.039 KiB |        <0.1% |    448 B → 1.48 KiB |          8 → 27 | `java.lang.invoke.LambdaFormEditor$Transform`              |
|  +17.0% |      +672 B |        <0.1% | 3.86 KiB → 4.51 KiB |        94 → 110 | `java.lang.invoke.BoundMethodHandle$Species_L`             |
| +400.0% |      +660 B |        <0.1% |       165 B → 825 B |          3 → 15 | `java.lang.invoke.DirectMethodHandle$Accessor`             |
|   +2.9% |      +528 B |         0.1% | 17.9 KiB → 18.4 KiB |       381 → 392 | `java.util.HashMap`                                        |
|  +66.7% |      +400 B |        <0.1% |     600 B → 1,000 B |         12 → 20 | `java.lang.invoke.BoundMethodHandle$Species_LL`            |
|   +4.1% |      +295 B |         0.1% | 7.09 KiB → 7.38 KiB |       123 → 128 | `java.lang.invoke.DirectMethodHandle$Constructor`          |

##### String

| Change |      Delta |    % |              Size |       Instances | Constructor        |
| -----: | ---------: | ---: | ----------------: | --------------: | ------------------ |
|  +2.9% | +9.009 KiB | 2.3% | 313 KiB → 322 KiB | 22,929 → 23,588 | `java.lang.String` |

#### Improvements

Constructors with the largest decrease in self size.

|  Change |       Delta |             % |                Size |     Instances | Constructor                                               |
| ------: | ----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- |
|   -3.0% | -58.671 KiB | 14.1% → 13.5% | 1.89 MiB → 1.83 MiB | 1,914 → 2,187 | `java.lang.Object[]`                                      |
| removed |      -896 B |  <0.1% → 0.0% |         896 B → 0 B |        16 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|   -6.7% |      -512 B |          0.1% |     7.5 KiB → 7 KiB |       15 → 14 | `java.util.concurrent.ForkJoinTask[]`                     |
|  -88.9% |      -448 B |         <0.1% |        504 B → 56 B |         9 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|  -34.5% |      -400 B |         <0.1% |    1.13 KiB → 760 B |       22 → 13 | `double[]`                                                |
|   -7.8% |      -255 B |         <0.1% | 3.19 KiB → 2.94 KiB |       64 → 59 | `java.lang.invoke.DirectMethodHandle$Special`             |
|   -7.1% |      -161 B |         <0.1% |  2.2 KiB → 2.04 KiB |       14 → 13 | `java.util.concurrent.ForkJoinWorkerThread`               |
|   -6.7% |       -48 B |         <0.1% |       720 B → 672 B |       15 → 14 | `java.util.concurrent.ForkJoinPool$WorkQueue`             |
|   -3.3% |       -33 B |         <0.1% |       990 B → 957 B |       30 → 29 | `java.lang.Thread$FieldHolder`                            |
|  -16.7% |        -8 B |         <0.1% |         48 B → 40 B |         1 → 5 | `org.renaissance.harness.RenaissanceSuite$$$Lambda`       |

##### Array

| Change |       Delta |             % |                Size |     Instances | Constructor                           |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------- |
|  -3.0% | -58.671 KiB | 14.1% → 13.5% | 1.89 MiB → 1.83 MiB | 1,914 → 2,187 | `java.lang.Object[]`                  |
|  -6.7% |      -512 B |          0.1% |     7.5 KiB → 7 KiB |       15 → 14 | `java.util.concurrent.ForkJoinTask[]` |
| -34.5% |      -400 B |         <0.1% |    1.13 KiB → 760 B |       22 → 13 | `double[]`                            |

##### Object

|  Change |  Delta |            % |                Size | Instances | Constructor                                               |
| ------: | -----: | -----------: | ------------------: | --------: | --------------------------------------------------------- |
| removed | -896 B | <0.1% → 0.0% |         896 B → 0 B |    16 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -88.9% | -448 B |        <0.1% |        504 B → 56 B |     9 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|   -7.8% | -255 B |        <0.1% | 3.19 KiB → 2.94 KiB |   64 → 59 | `java.lang.invoke.DirectMethodHandle$Special`             |
|   -7.1% | -161 B |        <0.1% |  2.2 KiB → 2.04 KiB |   14 → 13 | `java.util.concurrent.ForkJoinWorkerThread`               |
|   -6.7% |  -48 B |        <0.1% |       720 B → 672 B |   15 → 14 | `java.util.concurrent.ForkJoinPool$WorkQueue`             |
|   -3.3% |  -33 B |        <0.1% |       990 B → 957 B |   30 → 29 | `java.lang.Thread$FieldHolder`                            |
|  -16.7% |   -8 B |        <0.1% |         48 B → 40 B |     1 → 5 | `org.renaissance.harness.RenaissanceSuite$$$Lambda`       |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

| Change |        Delta |             % |                Size |       Instances | Constructor                                                |
| -----: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------- |
| +53.3% | +749.378 KiB | 10.3% → 15.5% | 1.37 MiB → 2.11 MiB |       381 → 392 | `java.util.HashMap`                                        |
| +53.6% | +749.113 KiB | 10.2% → 15.4% |  1.37 MiB → 2.1 MiB |       411 → 426 | `java.util.HashMap$Node[]`                                 |
| +59.5% | +747.738 KiB |  9.2% → 14.4% | 1.23 MiB → 1.96 MiB | 10,094 → 10,263 | `java.util.HashMap$Node`                                   |
| +35.7% | +611.225 KiB | 12.5% → 16.7% | 1.67 MiB → 2.27 MiB |       110 → 181 | `java.util.ArrayList`                                      |
| +28.1% | +591.041 KiB | 15.4% → 19.4% | 2.06 MiB → 2.63 MiB |   1,914 → 2,187 | `java.lang.Object[]`                                       |
|    new | +413.449 KiB |   0.0% → 3.0% |       0 B → 413 KiB |          0 → 41 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +5.3% |  +51.157 KiB |   7.1% → 7.3% | 969 KiB → 1,020 KiB |   2,669 → 2,820 | `java.lang.Class`                                          |
|  +3.4% |   +32.52 KiB |   7.0% → 7.1% |   951 KiB → 983 KiB | 22,929 → 23,588 | `java.lang.String`                                         |
|  +1.9% |  +29.369 KiB |         11.3% | 1.51 MiB → 1.54 MiB | 23,675 → 24,321 | `byte[]`                                                   |
|  +5.0% |  +26.618 KiB |   3.9% → 4.0% |   536 KiB → 562 KiB |       119 → 122 | `java.util.concurrent.ConcurrentHashMap`                   |
|  +5.0% |  +26.536 KiB |   3.9% → 4.0% |   527 KiB → 553 KiB |         94 → 97 | `java.util.concurrent.ConcurrentHashMap$Node[]`            |
| +31.9% |   +25.33 KiB |   0.6% → 0.8% |  79.5 KiB → 105 KiB |       624 → 767 | `java.lang.invoke.MethodType`                              |
| +15.4% |  +22.097 KiB |   1.1% → 1.2% |   144 KiB → 166 KiB |   1,932 → 1,811 | `int[]`                                                    |
|  +6.6% |  +21.911 KiB |   2.4% → 2.6% |   334 KiB → 356 KiB |   6,259 → 6,631 | `java.util.concurrent.ConcurrentHashMap$Node`              |
| +13.9% |  +19.338 KiB |   1.0% → 1.1% |   139 KiB → 158 KiB |               2 | `java.net.URLClassLoader`                                  |
| +41.3% |  +19.308 KiB |   0.3% → 0.5% | 46.7 KiB → 66.1 KiB |       162 → 229 | `java.lang.invoke.MethodTypeForm`                          |
| +50.3% |  +18.414 KiB |   0.3% → 0.4% |   36.6 KiB → 55 KiB |       111 → 162 | `java.lang.invoke.LambdaForm`                              |
| +41.3% |  +16.953 KiB |   0.3% → 0.4% |   41.1 KiB → 58 KiB |       256 → 388 | `java.lang.ref.SoftReference[]`                            |
|  +3.0% |  +15.896 KiB |          3.9% |   533 KiB → 549 KiB |   5,825 → 5,826 | `java.util.LinkedHashMap`                                  |
| +11.6% |  +14.724 KiB |   0.9% → 1.0% |   127 KiB → 141 KiB |               2 | `org.renaissance.core.ModuleLoader`                        |

##### Array

|   Change |        Delta |             % |                Size |         Instances | Constructor                                        |
| -------: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------------------- |
|   +53.6% | +749.113 KiB | 10.2% → 15.4% |  1.37 MiB → 2.1 MiB |         411 → 426 | `java.util.HashMap$Node[]`                         |
|   +28.1% | +591.041 KiB | 15.4% → 19.4% | 2.06 MiB → 2.63 MiB |     1,914 → 2,187 | `java.lang.Object[]`                               |
|    +1.9% |  +29.369 KiB |         11.3% | 1.51 MiB → 1.54 MiB |   23,675 → 24,321 | `byte[]`                                           |
|    +5.0% |  +26.536 KiB |   3.9% → 4.0% |   527 KiB → 553 KiB |           94 → 97 | `java.util.concurrent.ConcurrentHashMap$Node[]`    |
|   +15.4% |  +22.097 KiB |   1.1% → 1.2% |   144 KiB → 166 KiB |     1,932 → 1,811 | `int[]`                                            |
|   +41.3% |  +16.953 KiB |   0.3% → 0.4% |   41.1 KiB → 58 KiB |         256 → 388 | `java.lang.ref.SoftReference[]`                    |
|   +45.4% |   +11.32 KiB |   0.2% → 0.3% | 24.9 KiB → 36.3 KiB |         116 → 167 | `java.lang.invoke.LambdaForm$Name[]`               |
|   +46.4% |   +5.478 KiB |          0.1% | 11.8 KiB → 17.3 KiB |           40 → 54 | `java.lang.invoke.MethodHandle[]`                  |
| +2484.7% |   +3.494 KiB |         <0.1% |    144 B → 3.63 KiB |             1 → 4 | `java.lang.invoke.LambdaFormEditor$Transform[]`    |
|   +31.8% |   +3.445 KiB |          0.1% | 10.8 KiB → 14.3 KiB |         497 → 629 | `java.lang.Class[]`                                |
|      ~0% |       +720 B | 57.1% → 56.1% |            7.63 MiB | 100,006 → 100,015 | `java.lang.Double[]`                               |
|  +111.0% |       +634 B |         <0.1% |    571 B → 1.18 KiB |                 3 | `scala.collection.mutable.HashMap$Node[]`          |
|    +2.3% |       +625 B |          0.2% |   26.4 KiB → 27 KiB |               447 | `java.lang.String[]`                               |
| +3200.0% |       +256 B |         <0.1% |         8 B → 264 B |             3 → 4 | `java.lang.ClassValue$Entry[]`                     |
|   +59.2% |       +180 B |         <0.1% |       304 B → 484 B |                 5 | `java.lang.invoke.LambdaForm$NamedFunction[]`      |
|    +8.6% |       +180 B |         <0.1% | 2.05 KiB → 2.23 KiB |           16 → 17 | `java.util.WeakHashMap$Entry[]`                    |
|  +133.3% |       +160 B |         <0.1% |       120 B → 280 B |             3 → 7 | `java.lang.invoke.BoundMethodHandle$SpeciesData[]` |
|   +12.5% |        +84 B |         <0.1% |       672 B → 756 B |                 2 | `java.lang.invoke.MethodHandle[][]`                |

##### Number

| Change |  Delta |             % |                Size |         Instances | Constructor        |
| -----: | -----: | ------------: | ------------------: | ----------------: | ------------------ |
|    ~0% | +360 B | 28.6% → 28.0% | 3.81 MiB → 3.82 MiB | 500,031 → 500,076 | `java.lang.Double` |

##### Object

| Change |        Delta |             % |                Size |       Instances | Constructor                                                |
| -----: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------- |
| +53.3% | +749.378 KiB | 10.3% → 15.5% | 1.37 MiB → 2.11 MiB |       381 → 392 | `java.util.HashMap`                                        |
| +59.5% | +747.738 KiB |  9.2% → 14.4% | 1.23 MiB → 1.96 MiB | 10,094 → 10,263 | `java.util.HashMap$Node`                                   |
| +35.7% | +611.225 KiB | 12.5% → 16.7% | 1.67 MiB → 2.27 MiB |       110 → 181 | `java.util.ArrayList`                                      |
|    new | +413.449 KiB |   0.0% → 3.0% |       0 B → 413 KiB |          0 → 41 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +5.0% |  +26.618 KiB |   3.9% → 4.0% |   536 KiB → 562 KiB |       119 → 122 | `java.util.concurrent.ConcurrentHashMap`                   |
| +31.9% |   +25.33 KiB |   0.6% → 0.8% |  79.5 KiB → 105 KiB |       624 → 767 | `java.lang.invoke.MethodType`                              |
|  +6.6% |  +21.911 KiB |   2.4% → 2.6% |   334 KiB → 356 KiB |   6,259 → 6,631 | `java.util.concurrent.ConcurrentHashMap$Node`              |
| +13.9% |  +19.338 KiB |   1.0% → 1.1% |   139 KiB → 158 KiB |               2 | `java.net.URLClassLoader`                                  |
| +41.3% |  +19.308 KiB |   0.3% → 0.5% | 46.7 KiB → 66.1 KiB |       162 → 229 | `java.lang.invoke.MethodTypeForm`                          |
| +50.3% |  +18.414 KiB |   0.3% → 0.4% |   36.6 KiB → 55 KiB |       111 → 162 | `java.lang.invoke.LambdaForm`                              |
|  +3.0% |  +15.896 KiB |          3.9% |   533 KiB → 549 KiB |   5,825 → 5,826 | `java.util.LinkedHashMap`                                  |
| +11.6% |  +14.724 KiB |   0.9% → 1.0% |   127 KiB → 141 KiB |               2 | `org.renaissance.core.ModuleLoader`                        |
| +11.8% |  +14.724 KiB |   0.9% → 1.0% |   124 KiB → 139 KiB |              38 | `java.util.LinkedHashSet`                                  |
|  +9.6% |  +11.829 KiB |   0.9% → 1.0% |   123 KiB → 135 KiB |   1,191 → 1,323 | `java.util.LinkedHashMap$Entry`                            |
| +19.0% |  +10.562 KiB |   0.4% → 0.5% | 55.6 KiB → 66.2 KiB |               1 | `jdk.internal.util.ReferencedKeySet`                       |
| +19.0% |  +10.562 KiB |   0.4% → 0.5% | 55.6 KiB → 66.2 KiB |               1 | `jdk.internal.util.ReferencedKeyMap`                       |
| +43.5% |   +8.921 KiB |          0.2% | 20.5 KiB → 29.4 KiB |       317 → 463 | `java.lang.invoke.LambdaForm$Name`                         |
| +19.7% |   +7.706 KiB |          0.3% | 39.1 KiB → 46.8 KiB |       711 → 848 | `java.lang.invoke.MemberName`                              |
| +11.4% |   +7.362 KiB |          0.5% | 64.8 KiB → 72.1 KiB |               1 | `org.renaissance.core.BenchmarkSuite`                      |
| +11.6% |   +7.362 KiB |          0.5% | 63.3 KiB → 70.7 KiB |               4 | `java.util.Optional`                                       |

##### String

| Change |      Delta |           % |              Size |       Instances | Constructor        |
| -----: | ---------: | ----------: | ----------------: | --------------: | ------------------ |
|  +3.4% | +32.52 KiB | 7.0% → 7.1% | 951 KiB → 983 KiB | 22,929 → 23,588 | `java.lang.String` |

#### Improvements

Constructors with the largest decrease in retained size.

|  Change |     Delta |            % |                Size | Instances | Constructor                                               |
| ------: | --------: | -----------: | ------------------: | --------: | --------------------------------------------------------- |
| removed | -1.07 KiB | <0.1% → 0.0% |      1.07 KiB → 0 B |    16 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -92.9% |    -732 B |        <0.1% |        788 B → 56 B |     9 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|   -7.7% |    -629 B |         0.1% | 8.01 KiB → 7.39 KiB |   64 → 59 | `java.lang.invoke.DirectMethodHandle$Special`             |
|   -6.7% |    -560 B |         0.1% |  8.2 KiB → 7.66 KiB |   15 → 14 | `java.util.concurrent.ForkJoinPool$WorkQueue`             |
|   -6.7% |    -512 B |         0.1% |     7.5 KiB → 7 KiB |   15 → 14 | `java.util.concurrent.ForkJoinTask[]`                     |
|  -34.5% |    -400 B |        <0.1% |    1.13 KiB → 760 B |   22 → 13 | `double[]`                                                |
|   -7.2% |    -232 B |        <0.1% | 3.16 KiB → 2.94 KiB |   14 → 13 | `java.util.concurrent.ForkJoinWorkerThread`               |
|   -1.6% |    -106 B |        <0.1% | 6.38 KiB → 6.28 KiB |         3 | `jdk.internal.loader.URLClassPath`                        |
|   -5.1% |     -68 B |        <0.1% | 1.29 KiB → 1.23 KiB |         1 | `java.lang.invoke.LambdaForm$Name[][]`                    |
|   -3.5% |     -33 B |        <0.1% |       940 B → 907 B |   30 → 29 | `java.lang.Thread$FieldHolder`                            |
|  -16.7% |      -8 B |        <0.1% |         48 B → 40 B |     1 → 5 | `org.renaissance.harness.RenaissanceSuite$$$Lambda`       |
|   -0.2% |      -8 B |        <0.1% |  3.91 KiB → 3.9 KiB |         1 | `java.lang.Long[]`                                        |
|   -0.1% |      -5 B |        <0.1% | 3.59 KiB → 3.58 KiB |        22 | `java.net.URL`                                            |
|   -0.2% |      -5 B |        <0.1% | 3.02 KiB → 3.01 KiB |        10 | `jdk.internal.loader.URLClassPath$JarLoader`              |

##### Array

| Change |  Delta |     % |                Size | Instances | Constructor                            |
| -----: | -----: | ----: | ------------------: | --------: | -------------------------------------- |
|  -6.7% | -512 B |  0.1% |     7.5 KiB → 7 KiB |   15 → 14 | `java.util.concurrent.ForkJoinTask[]`  |
| -34.5% | -400 B | <0.1% |    1.13 KiB → 760 B |   22 → 13 | `double[]`                             |
|  -5.1% |  -68 B | <0.1% | 1.29 KiB → 1.23 KiB |         1 | `java.lang.invoke.LambdaForm$Name[][]` |
|  -0.2% |   -8 B | <0.1% |  3.91 KiB → 3.9 KiB |         1 | `java.lang.Long[]`                     |

##### Object

|  Change |     Delta |            % |                Size | Instances | Constructor                                               |
| ------: | --------: | -----------: | ------------------: | --------: | --------------------------------------------------------- |
| removed | -1.07 KiB | <0.1% → 0.0% |      1.07 KiB → 0 B |    16 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -92.9% |    -732 B |        <0.1% |        788 B → 56 B |     9 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|   -7.7% |    -629 B |         0.1% | 8.01 KiB → 7.39 KiB |   64 → 59 | `java.lang.invoke.DirectMethodHandle$Special`             |
|   -6.7% |    -560 B |         0.1% |  8.2 KiB → 7.66 KiB |   15 → 14 | `java.util.concurrent.ForkJoinPool$WorkQueue`             |
|   -7.2% |    -232 B |        <0.1% | 3.16 KiB → 2.94 KiB |   14 → 13 | `java.util.concurrent.ForkJoinWorkerThread`               |
|   -1.6% |    -106 B |        <0.1% | 6.38 KiB → 6.28 KiB |         3 | `jdk.internal.loader.URLClassPath`                        |
|   -3.5% |     -33 B |        <0.1% |       940 B → 907 B |   30 → 29 | `java.lang.Thread$FieldHolder`                            |
|  -16.7% |      -8 B |        <0.1% |         48 B → 40 B |     1 → 5 | `org.renaissance.harness.RenaissanceSuite$$$Lambda`       |
|   -0.1% |      -5 B |        <0.1% | 3.59 KiB → 3.58 KiB |        22 | `java.net.URL`                                            |
|   -0.2% |      -5 B |        <0.1% | 3.02 KiB → 3.01 KiB |        10 | `jdk.internal.loader.URLClassPath$JarLoader`              |
