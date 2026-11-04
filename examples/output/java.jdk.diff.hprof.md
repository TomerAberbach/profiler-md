# Heap snapshot diff

Held 12.9 MiB → 13.7 MiB (+792.743 KiB, +6.0%) over 700,553 → 704,092 nodes and 790,424 → 869,892 edges.

| Category           | Change |        Delta |             % |                Size |             Nodes |
| ------------------ | -----: | -----------: | ------------: | ------------------: | ----------------: |
| Array              |  +9.5% | +730.958 KiB | 58.0% → 59.9% |  7.5 MiB → 8.22 MiB | 130,187 → 131,175 |
| Number             |    ~0% |       +200 B | 29.5% → 27.9% |            3.82 MiB | 501,121 → 501,146 |
| Object             |  +4.0% |  +51.099 KiB |   9.8% → 9.6% | 1.26 MiB → 1.31 MiB |   43,528 → 45,260 |
| String             |  +2.8% |   +8.886 KiB |   2.4% → 2.3% |   314 KiB → 322 KiB |   22,938 → 23,588 |
| Object shape       |  +3.7% |   +1.602 KiB |          0.3% | 43.7 KiB → 45.3 KiB |     2,683 → 2,827 |
| Big number         |   0.0% |          0 B |         <0.1% |            2.52 KiB |                92 |
| Regular expression |   0.0% |          0 B |         <0.1% |               333 B |                 3 |
| Synthetic          |      — |          0 B |          0.0% |                 0 B |                 1 |

`B ←(several paths)– A` means `A` retains `B` only through other nodes, along several paths.

## Largest constructors

### Self size

#### Regressions

Constructors with the largest increase in instance bytes, excluding referenced nodes. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |       Instances | Constructor                                     |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------------------- |
| +39.4% | +571.242 KiB | 10.9% → 14.4% | 1.41 MiB → 1.97 MiB |   1,985 → 2,123 | `java.lang.Object[]`                            |
| +42.0% |  +93.718 KiB |   1.7% → 2.3% |   223 KiB → 317 KiB |   1,925 → 1,793 | `int[]`                                         |
|  +2.0% |  +31.162 KiB | 11.9% → 11.5% | 1.54 MiB → 1.57 MiB | 23,684 → 24,321 | `byte[]`                                        |
| +51.6% |  +14.953 KiB |   0.2% → 0.3% |     29 KiB → 44 KiB |       256 → 388 | `java.lang.ref.SoftReference[]`                 |
|  +5.9% |  +10.171 KiB |          1.3% |   171 KiB → 181 KiB |   6,259 → 6,631 | `java.util.concurrent.ConcurrentHashMap$Node`   |
|  +2.8% |   +8.886 KiB |   2.4% → 2.3% |   314 KiB → 322 KiB | 22,938 → 23,588 | `java.lang.String`                              |
| +22.9% |   +6.703 KiB |   0.2% → 0.3% |   29.3 KiB → 36 KiB |       624 → 767 | `java.lang.invoke.MethodType`                   |
| +27.0% |   +5.941 KiB |          0.2% |     22 KiB → 28 KiB |       627 → 796 | `jdk.internal.util.WeakReferenceKey`            |
| +19.3% |   +5.886 KiB |   0.2% → 0.3% | 30.6 KiB → 36.4 KiB |       711 → 848 | `java.lang.invoke.MemberName`                   |
| +11.1% |   +5.671 KiB |          0.4% | 51.2 KiB → 56.8 KiB |   1,191 → 1,323 | `java.util.LinkedHashMap$Entry`                 |
| +44.9% |   +5.265 KiB |          0.1% |   11.7 KiB → 17 KiB |         40 → 54 | `java.lang.invoke.MethodHandle[]`               |
|  +4.2% |   +4.875 KiB |          0.9% |   117 KiB → 122 KiB |         94 → 97 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
| +46.1% |   +4.847 KiB |          0.1% | 10.5 KiB → 15.4 KiB |       317 → 463 | `java.lang.invoke.LambdaForm$Name`              |
| +31.6% |   +3.445 KiB |          0.1% | 10.9 KiB → 14.3 KiB |       497 → 629 | `java.lang.Class[]`                             |
|  +1.6% |    +2.75 KiB |          1.3% |   176 KiB → 179 KiB |       425 → 413 | `java.util.HashMap$Node[]`                      |
| +45.9% |   +2.689 KiB |  <0.1% → 0.1% | 5.85 KiB → 8.54 KiB |       111 → 162 | `java.lang.invoke.LambdaForm`                   |
| +44.8% |   +2.531 KiB |  <0.1% → 0.1% | 5.66 KiB → 8.19 KiB |       116 → 167 | `java.lang.invoke.LambdaForm$Name[]`            |
| +41.4% |   +2.355 KiB |  <0.1% → 0.1% |  5.7 KiB → 8.05 KiB |       162 → 229 | `java.lang.invoke.MethodTypeForm`               |
| +24.6% |   +1.763 KiB |          0.1% | 7.18 KiB → 8.94 KiB |       171 → 213 | `java.lang.invoke.DirectMethodHandle`           |
|  +3.7% |   +1.602 KiB |          0.3% | 43.7 KiB → 45.3 KiB |   2,683 → 2,827 | `java.lang.Class`                               |

##### Array

|  Change |        Delta |             % |                Size |         Instances | Constructor                                        |
| ------: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------------------- |
|  +39.4% | +571.242 KiB | 10.9% → 14.4% | 1.41 MiB → 1.97 MiB |     1,985 → 2,123 | `java.lang.Object[]`                               |
|  +42.0% |  +93.718 KiB |   1.7% → 2.3% |   223 KiB → 317 KiB |     1,925 → 1,793 | `int[]`                                            |
|   +2.0% |  +31.162 KiB | 11.9% → 11.5% | 1.54 MiB → 1.57 MiB |   23,684 → 24,321 | `byte[]`                                           |
|  +51.6% |  +14.953 KiB |   0.2% → 0.3% |     29 KiB → 44 KiB |         256 → 388 | `java.lang.ref.SoftReference[]`                    |
|  +44.9% |   +5.265 KiB |          0.1% |   11.7 KiB → 17 KiB |           40 → 54 | `java.lang.invoke.MethodHandle[]`                  |
|   +4.2% |   +4.875 KiB |          0.9% |   117 KiB → 122 KiB |           94 → 97 | `java.util.concurrent.ConcurrentHashMap$Node[]`    |
|  +31.6% |   +3.445 KiB |          0.1% | 10.9 KiB → 14.3 KiB |         497 → 629 | `java.lang.Class[]`                                |
|   +1.6% |    +2.75 KiB |          1.3% |   176 KiB → 179 KiB |         425 → 413 | `java.util.HashMap$Node[]`                         |
|  +44.8% |   +2.531 KiB |  <0.1% → 0.1% | 5.66 KiB → 8.19 KiB |         116 → 167 | `java.lang.invoke.LambdaForm$Name[]`               |
|  +49.2% |       +256 B |         <0.1% |       520 B → 776 B |             3 → 4 | `java.lang.ClassValue$Entry[]`                     |
|  +35.7% |       +200 B |         <0.1% |       560 B → 760 B |            7 → 13 | `double[]`                                         |
|     ~0% |       +200 B | 29.5% → 27.8% |            3.82 MiB | 100,015 → 100,020 | `java.lang.Double[]`                               |
| +133.3% |       +160 B |         <0.1% |       120 B → 280 B |             3 → 7 | `java.lang.invoke.BoundMethodHandle$SpeciesData[]` |
|   +6.3% |       +128 B |         <0.1% |    2 KiB → 2.13 KiB |           16 → 17 | `java.util.WeakHashMap$Entry[]`                    |
| +300.0% |        +96 B |         <0.1% |        32 B → 128 B |             1 → 4 | `java.lang.invoke.LambdaFormEditor$Transform[]`    |
|   +0.1% |        +16 B |          0.1% |            19.1 KiB |               447 | `java.lang.String[]`                               |

##### Number

| Change |  Delta |             % |     Size |         Instances | Constructor        |
| -----: | -----: | ------------: | -------: | ----------------: | ------------------ |
|    ~0% | +200 B | 29.5% → 27.8% | 3.82 MiB | 500,076 → 500,101 | `java.lang.Double` |

##### Object

|  Change |       Delta |            % |                Size |       Instances | Constructor                                            |
| ------: | ----------: | -----------: | ------------------: | --------------: | ------------------------------------------------------ |
|   +5.9% | +10.171 KiB |         1.3% |   171 KiB → 181 KiB |   6,259 → 6,631 | `java.util.concurrent.ConcurrentHashMap$Node`          |
|  +22.9% |  +6.703 KiB |  0.2% → 0.3% |   29.3 KiB → 36 KiB |       624 → 767 | `java.lang.invoke.MethodType`                          |
|  +27.0% |  +5.941 KiB |         0.2% |     22 KiB → 28 KiB |       627 → 796 | `jdk.internal.util.WeakReferenceKey`                   |
|  +19.3% |  +5.886 KiB |  0.2% → 0.3% | 30.6 KiB → 36.4 KiB |       711 → 848 | `java.lang.invoke.MemberName`                          |
|  +11.1% |  +5.671 KiB |         0.4% | 51.2 KiB → 56.8 KiB |   1,191 → 1,323 | `java.util.LinkedHashMap$Entry`                        |
|  +46.1% |  +4.847 KiB |         0.1% | 10.5 KiB → 15.4 KiB |       317 → 463 | `java.lang.invoke.LambdaForm$Name`                     |
|  +45.9% |  +2.689 KiB | <0.1% → 0.1% | 5.85 KiB → 8.54 KiB |       111 → 162 | `java.lang.invoke.LambdaForm`                          |
|  +41.4% |  +2.355 KiB | <0.1% → 0.1% |  5.7 KiB → 8.05 KiB |       162 → 229 | `java.lang.invoke.MethodTypeForm`                      |
|  +24.6% |  +1.763 KiB |         0.1% | 7.18 KiB → 8.94 KiB |       171 → 213 | `java.lang.invoke.DirectMethodHandle`                  |
|  +25.2% |  +1.562 KiB | <0.1% → 0.1% | 6.21 KiB → 7.77 KiB |       159 → 199 | `java.lang.ref.SoftReference`                          |
|  +43.4% |  +1.242 KiB |        <0.1% |  2.86 KiB → 4.1 KiB |       122 → 175 | `java.lang.invoke.LambdaForm$NamedFunction`            |
| +237.5% |  +1.039 KiB |        <0.1% |    448 B → 1.48 KiB |          8 → 27 | `java.lang.invoke.LambdaFormEditor$Transform`          |
|   +0.3% |      +840 B |  2.1% → 2.0% |   278 KiB → 279 KiB | 10,168 → 10,198 | `java.util.HashMap$Node`                               |
|  +17.0% |      +672 B |        <0.1% | 3.86 KiB → 4.51 KiB |        94 → 110 | `java.lang.invoke.BoundMethodHandle$Species_L`         |
| +400.0% |      +660 B |        <0.1% |       165 B → 825 B |          3 → 15 | `java.lang.invoke.DirectMethodHandle$Accessor`         |
|  +66.7% |      +400 B |        <0.1% |     600 B → 1,000 B |         12 → 20 | `java.lang.invoke.BoundMethodHandle$Species_LL`        |
|   +4.1% |      +295 B |         0.1% | 7.09 KiB → 7.38 KiB |       123 → 128 | `java.lang.invoke.DirectMethodHandle$Constructor`      |
| +133.3% |      +288 B |        <0.1% |       216 B → 504 B |           3 → 7 | `java.lang.invoke.BoundMethodHandle$SpeciesData`       |
|   +2.5% |      +252 B |         0.1% |   9.76 KiB → 10 KiB |       119 → 122 | `java.util.concurrent.ConcurrentHashMap`               |
|  +17.4% |      +232 B |        <0.1% |  1.3 KiB → 1.53 KiB |         23 → 27 | `java.lang.invoke.MethodHandleImpl$AsVarargsCollector` |

##### String

| Change |      Delta |           % |              Size |       Instances | Constructor        |
| -----: | ---------: | ----------: | ----------------: | --------------: | ------------------ |
|  +2.8% | +8.886 KiB | 2.4% → 2.3% | 314 KiB → 322 KiB | 22,938 → 23,588 | `java.lang.String` |

#### Improvements

Constructors with the largest decrease in instance bytes, excluding referenced nodes. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |     Delta |            % |                Size | Instances | Constructor                                                |
| ------: | --------: | -----------: | ------------------: | --------: | ---------------------------------------------------------- |
|  -97.8% | -2.75 KiB |        <0.1% |     2.81 KiB → 64 B |    45 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -35.4% |    -1 KiB |        <0.1% | 2.83 KiB → 1.83 KiB | 181 → 117 | `java.util.ArrayList`                                      |
|   -3.1% |    -576 B |         0.1% | 18.3 KiB → 17.8 KiB | 391 → 379 | `java.util.HashMap`                                        |
|   -7.8% |    -255 B |        <0.1% | 3.19 KiB → 2.94 KiB |   64 → 59 | `java.lang.invoke.DirectMethodHandle$Special`              |
| removed |     -16 B | <0.1% → 0.0% |          16 B → 0 B |     1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell[]`     |
| removed |     -16 B | <0.1% → 0.0% |          16 B → 0 B |     2 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell`       |
|  -16.7% |      -8 B |        <0.1% |         48 B → 40 B |     1 → 5 | `org.renaissance.harness.RenaissanceSuite$$$Lambda`        |

##### Array

|  Change | Delta |            % |       Size | Instances | Constructor                                            |
| ------: | ----: | -----------: | ---------: | --------: | ------------------------------------------------------ |
| removed | -16 B | <0.1% → 0.0% | 16 B → 0 B |     1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell[]` |

##### Object

|  Change |     Delta |            % |                Size | Instances | Constructor                                                |
| ------: | --------: | -----------: | ------------------: | --------: | ---------------------------------------------------------- |
|  -97.8% | -2.75 KiB |        <0.1% |     2.81 KiB → 64 B |    45 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -35.4% |    -1 KiB |        <0.1% | 2.83 KiB → 1.83 KiB | 181 → 117 | `java.util.ArrayList`                                      |
|   -3.1% |    -576 B |         0.1% | 18.3 KiB → 17.8 KiB | 391 → 379 | `java.util.HashMap`                                        |
|   -7.8% |    -255 B |        <0.1% | 3.19 KiB → 2.94 KiB |   64 → 59 | `java.lang.invoke.DirectMethodHandle$Special`              |
| removed |     -16 B | <0.1% → 0.0% |          16 B → 0 B |     2 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell`       |
|  -16.7% |      -8 B |        <0.1% |         48 B → 40 B |     1 → 5 | `org.renaissance.harness.RenaissanceSuite$$$Lambda`        |

#### Retainer paths

Retainer paths with the largest change in contribution to each constructor's self size.

##### `java.lang.Object[]`

|  Change |        Delta |           % |               Size | Instances | Path                                                                                                                                                                             |
| ------: | -----------: | ----------: | -----------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +242.8% | +110.664 KiB | 3.1% → 7.7% | 45.6 KiB → 156 KiB |    12 → 1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                |
|     new |   +78.64 KiB | 0.0% → 3.9% |     0 B → 78.6 KiB |     0 → 1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[6]– java.util.HashMap$Node[]`                            |
|     new |  +78.632 KiB | 0.0% → 3.9% |     0 B → 78.6 KiB |     0 → 1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[6]– java.util.HashMap$Node[] ←.table– java.util.HashMap` |
|     new |  +78.125 KiB | 0.0% → 3.9% |     0 B → 78.1 KiB |     0 → 1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node`                                                                                          |
|     new |  +78.125 KiB | 0.0% → 3.9% |     0 B → 78.1 KiB |     0 → 1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[7]– java.util.HashMap$Node[]`                                                           |

##### `int[]`

|  Change |       Delta |             % |                Size | Instances | Path                                                                                                                                         |
| ------: | ----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| +117.4% | +92.984 KiB | 35.5% → 54.4% |  79.2 KiB → 172 KiB | 898 → 738 | `int[] ← (GC root)`                                                                                                                          |
|   +0.6% |      +588 B | 43.4% → 30.7% | 96.7 KiB → 97.3 KiB |        10 | `int[] ←.entries– java.util.zip.ZipFile$Source`                                                                                              |
| removed |      -104 B |  <0.1% → 0.0% |         104 B → 0 B |     1 → 0 | `int[] ←.data– jdk.internal.math.FDBigInteger ←[332]– jdk.internal.math.FDBigInteger[] ←[2]– java.lang.Object[] ←[2221]– java.lang.Object[]` |
| removed |      -104 B |  <0.1% → 0.0% |         104 B → 0 B |     1 → 0 | `int[] ←.data– jdk.internal.math.FDBigInteger ←[333]– jdk.internal.math.FDBigInteger[] ←[2]– java.lang.Object[] ←[2221]– java.lang.Object[]` |
| removed |      -104 B |  <0.1% → 0.0% |         104 B → 0 B |     1 → 0 | `int[] ←.data– jdk.internal.math.FDBigInteger ←[334]– jdk.internal.math.FDBigInteger[] ←[2]– java.lang.Object[] ←[2221]– java.lang.Object[]` |

##### `byte[]`

| Change |      Delta |             % |                Size |     Instances | Path                                                                                                                                                                                                                                                                                                                                                                                      |
| -----: | ---------: | ------------: | ------------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +0.6% | +3.976 KiB | 45.3% → 44.6% |   715 KiB → 719 KiB |            10 | `byte[] ←.cen– java.util.zip.ZipFile$Source`                                                                                                                                                                                                                                                                                                                                              |
| +16.4% | +2.757 KiB |   1.1% → 1.2% | 16.8 KiB → 19.5 KiB |     265 → 328 | `byte[] ←.value– java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType`                                                                                                                                                                                                                                                                                                        |
| +38.7% | +2.529 KiB |   0.4% → 0.6% | 6.53 KiB → 9.06 KiB |     174 → 241 | `byte[] ←.value– java.lang.String ←.key– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| +38.7% | +2.529 KiB |   0.4% → 0.6% | 6.53 KiB → 9.06 KiB |     174 → 241 | `byte[] ←.value– java.lang.String ←.key– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  +5.2% |  +1.91 KiB |   2.3% → 2.4% | 36.9 KiB → 38.8 KiB | 1,023 → 1,061 | `byte[] ← (GC root)`                                                                                                                                                                                                                                                                                                                                                                      |

##### `java.lang.ref.SoftReference[]`

| Change |      Delta |             % |                Size | Instances | Path                                                                                                                 |
| -----: | ---------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| +47.7% | +8.531 KiB | 61.6% → 60.1% | 17.9 KiB → 26.4 KiB |  88 → 130 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                       |
| +60.0% | +4.875 KiB | 28.0% → 29.6% |   8.13 KiB → 13 KiB |   40 → 64 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType`   |
| +47.7% |   +1,008 B |   7.1% → 6.9% | 2.06 KiB → 3.05 KiB |  88 → 130 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm`                                     |
| +60.0% |     +576 B |   3.2% → 3.4% |     960 B → 1.5 KiB |   40 → 64 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType` |

##### `java.util.concurrent.ConcurrentHashMap$Node`

|  Change | Delta |            % |        Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | ----: | -----------: | ----------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -56 B | <0.1% → 0.0% |  56 B → 0 B |     2 → 0 | `java.util.concurrent.ConcurrentHashMap$Node ←[8]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.perms– java.io.FilePermissionCollection ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain` |
| removed | -56 B | <0.1% → 0.0% |  56 B → 0 B |     2 → 0 | `java.util.concurrent.ConcurrentHashMap$Node ←[5]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.perms– java.io.FilePermissionCollection ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain` |
| removed | -56 B | <0.1% → 0.0% |  56 B → 0 B |     2 → 0 | `java.util.concurrent.ConcurrentHashMap$Node ←[9]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.perms– java.io.FilePermissionCollection ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain` |
| +100.0% | +28 B |        <0.1% | 28 B → 56 B |     1 → 2 | `java.util.concurrent.ConcurrentHashMap$Node ←.next– java.util.concurrent.ConcurrentHashMap$Node ←[14]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                                                                                                                      |
| +100.0% | +28 B |        <0.1% | 28 B → 56 B |     1 → 2 | `java.util.concurrent.ConcurrentHashMap$Node ←.next– java.util.concurrent.ConcurrentHashMap$Node ←[5]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                                                                                                                       |

##### `java.lang.String`

| Change |      Delta |             % |                Size |     Instances | Path                                                                                                                                                                                                                                                                                                                                                                      |
| -----: | ---------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +0.8% | +1.121 KiB | 42.2% → 41.4% |   132 KiB → 133 KiB | 9,679 → 9,761 | `java.lang.String ← (GC root)`                                                                                                                                                                                                                                                                                                                                            |
| +38.5% |     +938 B |   0.8% → 1.0% | 2.38 KiB → 3.29 KiB |     174 → 241 | `java.lang.String ←.key– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| +38.5% |     +938 B |   0.8% → 1.0% | 2.38 KiB → 3.29 KiB |     174 → 241 | `java.lang.String ←.key– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
| +23.8% |     +882 B |   1.2% → 1.4% | 3.62 KiB → 4.48 KiB |     265 → 328 | `java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType`                                                                                                                                                                                                                                                                                                        |
| +38.9% |     +196 B |          0.2% |       504 B → 700 B |       36 → 50 | `java.lang.String ←.name– java.lang.invoke.MemberName ←.vmentry– java.lang.invoke.LambdaForm`                                                                                                                                                                                                                                                                             |

##### `java.lang.invoke.MethodType`

|  Change |      Delta |             % |              Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------: | ---------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  +23.1% | +6.703 KiB | 99.0% → 99.2% | 29 KiB → 35.7 KiB | 618 → 761 | `java.lang.invoke.MethodType ← (GC root)`                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |      -48 B |   0.2% → 0.0% |        48 B → 0 B |     1 → 0 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←.next– java.util.concurrent.ConcurrentHashMap$Node ←[414]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|     new |      +48 B |   0.0% → 0.1% |        0 B → 48 B |     0 → 1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[414]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |

##### `jdk.internal.util.WeakReferenceKey`

|  Change |  Delta |           % |             Size | Instances | Path                                                                                                                                                                                                                                                                                                                              |
| ------: | -----: | ----------: | ---------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +866.7% | +936 B | 0.5% → 3.6% | 108 B → 1.02 KiB |    3 → 29 | `jdk.internal.util.WeakReferenceKey ←(several paths)– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                                                                                                              |
| removed |  -36 B | 0.2% → 0.0% |       36 B → 0 B |     1 → 0 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[94]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| removed |  -36 B | 0.2% → 0.0% |       36 B → 0 B |     1 → 0 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[85]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| removed |  -36 B | 0.2% → 0.0% |       36 B → 0 B |     1 → 0 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[75]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| removed |  -36 B | 0.2% → 0.0% |       36 B → 0 B |     1 → 0 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[74]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |

##### `java.lang.invoke.MemberName`

|  Change |      Delta |             % |                Size | Instances | Path                                                                                                                                                                                                         |
| ------: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  +47.0% | +1.675 KiB | 11.7% → 14.4% | 3.57 KiB → 5.24 KiB |  83 → 122 | `java.lang.invoke.MemberName ←.vmentry– java.lang.invoke.LambdaForm`                                                                                                                                         |
|  +40.7% | +1.031 KiB |   8.3% → 9.8% | 2.54 KiB → 3.57 KiB |   59 → 83 | `java.lang.invoke.MemberName ← (GC root)`                                                                                                                                                                    |
| +100.0% |     +484 B |   1.5% → 2.6% |       484 B → 968 B |   11 → 22 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[6]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  +80.0% |     +352 B |   1.4% → 2.1% |       440 B → 792 B |   10 → 18 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.DirectMethodHandle`                                                                                                                                  |
|  +33.3% |     +220 B |   2.1% → 2.4% |       660 B → 880 B |   15 → 20 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[4]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |

##### `java.util.LinkedHashMap$Entry`

| Change |      Delta |             % |                Size | Instances | Path                                                                                                                                                                                                                                                                                                                                              |
| -----: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +38.5% | +2.878 KiB | 14.6% → 18.2% | 7.48 KiB → 10.4 KiB | 174 → 241 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| +38.5% | +2.878 KiB | 14.6% → 18.2% | 7.48 KiB → 10.4 KiB | 174 → 241 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
| +15.9% |     +440 B |   5.3% → 5.5% | 2.71 KiB → 3.14 KiB |   63 → 73 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                  |
| -72.7% |     -352 B |   0.9% → 0.2% |       484 B → 132 B |    11 → 3 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`  |
| -72.7% |     -352 B |   0.9% → 0.2% |       484 B → 132 B |    11 → 3 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                  |

##### `java.lang.invoke.MethodHandle[]`

|  Change |      Delta |             % |                Size | Instances | Path                                                                                                            |
| ------: | ---------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------------- |
|  +58.8% | +5.078 KiB | 73.7% → 80.7% | 8.63 KiB → 13.7 KiB |   17 → 27 | `java.lang.invoke.MethodHandle[] ←.invokers– java.lang.invoke.Invokers ←.invokers– java.lang.invoke.MethodType` |
| +133.3% |     +192 B |   1.2% → 1.9% |       144 B → 336 B |     3 → 7 | `java.lang.invoke.MethodHandle[] ←.transformHelpers– java.lang.invoke.BoundMethodHandle$SpeciesData`            |

##### `java.util.concurrent.ConcurrentHashMap$Node[]`

|  Change |  Delta |             % |            Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | -----: | ------------: | --------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  +33.3% | +4 KiB | 10.3% → 13.2% | 12 KiB → 16 KiB |         2 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                                                                                                                                                                           |
| +100.0% | +256 B |   0.2% → 0.4% |   256 B → 512 B |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.LOOKASIDE_TABLE– class java.lang.invoke.MethodHandles$Lookup`                                                                                                                                                                                                                       |
|  +16.7% | +128 B |   0.6% → 0.7% |   768 B → 896 B |     6 → 7 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain`                                                                                                                                                                                                  |
|  +16.7% | +128 B |   0.6% → 0.7% |   768 B → 896 B |     6 → 7 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.perms– java.io.FilePermissionCollection ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain` |
|  +33.3% | +128 B |   0.3% → 0.4% |   384 B → 512 B |         2 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.packages– java.net.URLClassLoader`                                                                                                                                                                                                                                                  |

##### `java.lang.invoke.LambdaForm$Name`

|  Change |  Delta |             % |                Size | Instances | Path                                                                                                             |
| ------: | -----: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
|  +69.7% | +782 B | 10.4% → 12.1% |  1.1 KiB → 1.86 KiB |   33 → 56 | `java.lang.invoke.LambdaForm$Name ←[5]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
| +122.2% | +748 B |   5.7% → 8.6% |    612 B → 1.33 KiB |   18 → 40 | `java.lang.invoke.LambdaForm$Name ←[6]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  +53.8% | +714 B | 12.3% → 13.0% | 1.29 KiB → 1.99 KiB |   39 → 60 | `java.lang.invoke.LambdaForm$Name ←[4]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  +39.5% | +510 B | 12.0% → 11.4% | 1.26 KiB → 1.76 KiB |   38 → 53 | `java.lang.invoke.LambdaForm$Name ←[3]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
| +100.0% | +340 B |   3.2% → 4.3% |       340 B → 680 B |   10 → 20 | `java.lang.invoke.LambdaForm$Name ←[7]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |

##### `java.lang.Class[]`

| Change |      Delta |             % |                Size | Instances | Path                                                      |
| -----: | ---------: | ------------: | ------------------: | --------: | --------------------------------------------------------- |
| +35.8% | +3.257 KiB | 83.6% → 86.2% | 9.11 KiB → 12.4 KiB | 393 → 516 | `java.lang.Class[] ←.ptypes– java.lang.invoke.MethodType` |
| +10.8% |     +192 B | 16.0% → 13.5% | 1.74 KiB → 1.93 KiB |  97 → 106 | `java.lang.Class[] ← (GC root)`                           |

##### `java.util.HashMap$Node[]`

|  Change |      Delta |           % |                Size | Instances | Path                                                                                                                                                                                                                                                                                                                                |
| ------: | ---------: | ----------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +100.0% |     +2 KiB | 1.1% → 2.2% |       2 KiB → 4 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| +100.0% |     +2 KiB | 1.1% → 2.2% |       2 KiB → 4 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  -11.6% | -1.062 KiB | 5.2% → 4.5% | 9.13 KiB → 8.06 KiB |    13 → 2 | `java.util.HashMap$Node[] ←.table– java.util.HashMap`                                                                                                                                                                                                                                                                               |
|  +14.3% |     +256 B | 1.0% → 1.1% |    1.75 KiB → 2 KiB |     7 → 8 | `java.util.HashMap$Node[] ←.table– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                  |
| removed |     -256 B | 0.1% → 0.0% |         256 B → 0 B |     3 → 0 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                                                                                                            |

##### `java.lang.invoke.LambdaForm`

| Change |      Delta |             % |                Size | Instances | Path                                                                                                                                                                                                                                                                                                                                              |
| -----: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +47.0% | +2.056 KiB | 74.8% → 75.3% | 4.38 KiB → 6.43 KiB |  83 → 122 | `java.lang.invoke.LambdaForm ← (GC root)`                                                                                                                                                                                                                                                                                                         |
| +16.7% |     +108 B |  10.8% → 8.6% |       648 B → 756 B |   12 → 14 | `java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                                                                                                         |
|    new |     +108 B |   0.0% → 1.2% |         0 B → 108 B |     0 → 2 | `java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                                                                                                                               |
|    new |      +54 B |   0.0% → 0.6% |          0 B → 54 B |     0 → 1 | `java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                                                                           |
|    new |      +54 B |   0.0% → 0.6% |          0 B → 54 B |     0 → 1 | `java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm` |

##### `java.lang.invoke.LambdaForm$Name[]`

| Change |      Delta |             % |                Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -----: | ---------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +47.9% | +1.929 KiB | 71.3% → 72.8% | 4.03 KiB → 5.96 KiB |  83 → 122 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|    new |      +88 B |   0.0% → 1.0% |          0 B → 88 B |     0 → 2 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                                                                                                                                                                                                                                                                                                                                           |
|    new |      +80 B |   0.0% → 1.0% |          0 B → 80 B |     0 → 1 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[1]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm` |
| +14.3% |      +72 B |   8.7% → 6.9% |       504 B → 576 B |   12 → 14 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                                                                                                                                                                                                                                                                                                                     |
|    new |      +72 B |   0.0% → 0.9% |          0 B → 72 B |     0 → 1 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                       |

##### `java.lang.invoke.MethodTypeForm`

| Change |      Delta |             % |                Size | Instances | Path                                                                  |
| -----: | ---------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------- |
| +42.2% | +1.511 KiB | 63.0% → 63.3% |  3.59 KiB → 5.1 KiB | 102 → 145 | `java.lang.invoke.MethodTypeForm ← (GC root)`                         |
| +40.0% |     +864 B | 37.0% → 36.7% | 2.11 KiB → 2.95 KiB |   60 → 84 | `java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType` |

##### `java.lang.invoke.DirectMethodHandle`

|  Change |  Delta |             % |                Size | Instances | Path                                                                                                                                                                                                                                                                                        |
| ------: | -----: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +50.0% | +774 B | 21.1% → 25.4% | 1.51 KiB → 2.27 KiB |   36 → 54 | `java.lang.invoke.DirectMethodHandle ← (GC root)`                                                                                                                                                                                                                                           |
|  +50.0% |  +43 B |   1.2% → 1.4% |        86 B → 129 B |     2 → 3 | `java.lang.invoke.DirectMethodHandle ←.e0– java.util.ImmutableCollections$List12 ←.factories– java.lang.invoke.BoundMethodHandle$SpeciesData`                                                                                                                                               |
| +100.0% |  +43 B |   0.6% → 0.9% |         43 B → 86 B |     1 → 2 | `java.lang.invoke.DirectMethodHandle ←.target– java.lang.invoke.MethodHandleImpl$AsVarargsCollector ←[4]– java.lang.Object[] ←.<resolved_references>– class scala.collection.mutable.ArrayBuffer`                                                                                           |
| +100.0% |  +43 B |   0.6% → 0.9% |         43 B → 86 B |     1 → 2 | `java.lang.invoke.DirectMethodHandle ←[3]– java.lang.Object[] ←.<resolved_references>– class scala.collection.mutable.ArrayBuffer`                                                                                                                                                          |
| removed |  -43 B |   0.6% → 0.0% |          43 B → 0 B |     1 → 0 | `java.lang.invoke.DirectMethodHandle ←.target– java.lang.invoke.MethodHandleImpl$AsVarargsCollector ←[2]– java.lang.Object[] ←.<resolved_references>– class scala.collection.immutable.Map ←[38]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |

##### `java.lang.Class`

|   Change |  Delta |            % |          Size | Instances | Path                                                                                                              |
| -------: | -----: | -----------: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------- |
|   +70.0% | +224 B |  0.7% → 1.2% | 320 B → 544 B |   37 → 57 | `java.lang.Class ←.clazz– java.lang.invoke.MemberName ←.vmentry– java.lang.invoke.LambdaForm`                     |
|  removed | -224 B |  0.5% → 0.0% |   224 B → 0 B |         1 | `java.lang.Class ←[32]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |
| +1350.0% | +216 B | <0.1% → 0.5% |  16 B → 232 B |         2 | `java.lang.Class ←[35]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |
|   -89.7% | -208 B |  0.5% → 0.1% |  232 B → 24 B |         2 | `java.lang.Class ←[75]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |
|  +480.0% | +192 B |  0.1% → 0.5% |  40 B → 232 B |         2 | `java.lang.Class ←[84]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |

##### `java.lang.ClassValue$Entry[]`

| Change |  Delta |            % |        Size | Instances | Path                                                                                                             |
| -----: | -----: | -----------: | ----------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
|    new | +256 B | 0.0% → 33.0% | 0 B → 256 B |     0 → 1 | `java.lang.ClassValue$Entry[] ←.cacheArray– java.lang.ClassValue$ClassValueMap ←.classValueMap– java.lang.Class` |

##### `double[]`

| Change | Delta |           % |       Size | Instances | Path                                                                                                                                                                                                                                                                                                                 |
| -----: | ----: | ----------: | ---------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +40 B | 0.0% → 5.3% | 0 B → 40 B |     0 → 1 | `double[] ←.head– scala.collection.immutable.$colon$colon ←.expectedPoints– org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                                                                                 |
|    new | +40 B | 0.0% → 5.3% | 0 B → 40 B |     0 → 1 | `double[] ←.head– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.expectedPoints– org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                                 |
|    new | +40 B | 0.0% → 5.3% | 0 B → 40 B |     0 → 1 | `double[] ←.head– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.expectedPoints– org.renaissance.jdk.concurrent.FjKmeans`                                                                                                 |
|    new | +40 B | 0.0% → 5.3% | 0 B → 40 B |     0 → 1 | `double[] ←.head– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.expectedPoints– org.renaissance.jdk.concurrent.FjKmeans`                                                 |
|    new | +40 B | 0.0% → 5.3% | 0 B → 40 B |     0 → 1 | `double[] ←.head– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.expectedPoints– org.renaissance.jdk.concurrent.FjKmeans` |

##### `java.lang.Double[]`

|  Change |      Delta |              % |                Size |        Instances | Path                                                                                 |
| ------: | ---------: | -------------: | ------------------: | ---------------: | ------------------------------------------------------------------------------------ |
| +166.7% | +2.384 MiB | 37.5% → 100.0% | 1.43 MiB → 3.81 MiB | 37,498 → 100,005 | `java.lang.Double[] ← (GC root)`                                                     |
| removed |      -40 B |   <0.1% → 0.0% |          40 B → 0 B |            1 → 0 | `java.lang.Double[] ←[31259]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| removed |      -40 B |   <0.1% → 0.0% |          40 B → 0 B |            1 → 0 | `java.lang.Double[] ←[31258]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| removed |      -40 B |   <0.1% → 0.0% |          40 B → 0 B |            1 → 0 | `java.lang.Double[] ←[31257]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| removed |      -40 B |   <0.1% → 0.0% |          40 B → 0 B |            1 → 0 | `java.lang.Double[] ←[31256]– java.lang.Object[] ←.elementData– java.util.ArrayList` |

##### `java.lang.invoke.BoundMethodHandle$SpeciesData[]`

|  Change |  Delta |      % |          Size | Instances | Path                                                                                                            |
| ------: | -----: | -----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------- |
| +133.3% | +160 B | 100.0% | 120 B → 280 B |     3 → 7 | `java.lang.invoke.BoundMethodHandle$SpeciesData[] ←.extensions– java.lang.invoke.BoundMethodHandle$SpeciesData` |

##### `java.util.WeakHashMap$Entry[]`

| Change |  Delta |           % |        Size | Instances | Path                                                                                                         |
| -----: | -----: | ----------: | ----------: | --------: | ------------------------------------------------------------------------------------------------------------ |
|    new | +128 B | 0.0% → 5.9% | 0 B → 128 B |     0 → 1 | `java.util.WeakHashMap$Entry[] ←.table– java.lang.ClassValue$ClassValueMap ←.classValueMap– java.lang.Class` |

##### `java.lang.invoke.LambdaFormEditor$Transform[]`

|  Change | Delta |              % |        Size | Instances | Path                                                                                                                                                                                                                                                    |
| ------: | ----: | -------------: | ----------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +200.0% | +64 B | 100.0% → 75.0% | 32 B → 96 B |     1 → 3 | `java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                                                                           |
|     new | +32 B |   0.0% → 25.0% |  0 B → 32 B |     0 → 1 | `java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm` |

##### `java.lang.String[]`

| Change | Delta |           % |          Size | Instances | Path                             |
| -----: | ----: | ----------: | ------------: | --------: | -------------------------------- |
|  +6.1% | +16 B | 1.3% → 1.4% | 264 B → 280 B |         3 | `java.lang.String[] ← (GC root)` |

##### `java.lang.Double`

|  Change |        Delta |            % |              Size |        Instances | Path                                        |
| ------: | -----------: | -----------: | ----------------: | ---------------: | ------------------------------------------- |
| +166.7% | +488.335 KiB | 7.5% → 20.0% | 293 KiB → 781 KiB | 37,498 → 100,005 | `java.lang.Double ←[4]– java.lang.Double[]` |
| +166.7% | +488.335 KiB | 7.5% → 20.0% | 293 KiB → 781 KiB | 37,498 → 100,005 | `java.lang.Double ←[3]– java.lang.Double[]` |
| +166.7% | +488.335 KiB | 7.5% → 20.0% | 293 KiB → 781 KiB | 37,498 → 100,005 | `java.lang.Double ←[2]– java.lang.Double[]` |
| +166.7% | +488.335 KiB | 7.5% → 20.0% | 293 KiB → 781 KiB | 37,498 → 100,005 | `java.lang.Double ←[1]– java.lang.Double[]` |
| +166.7% | +488.335 KiB | 7.5% → 20.0% | 293 KiB → 781 KiB | 37,498 → 100,005 | `java.lang.Double ←[0]– java.lang.Double[]` |

##### `java.lang.ref.SoftReference`

|  Change |  Delta |             % |                Size | Instances | Path                                                                                                                                                   |
| ------: | -----: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  +37.9% | +440 B | 18.2% → 20.1% | 1.13 KiB → 1.56 KiB |   29 → 40 | `java.lang.ref.SoftReference ←[2]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                       |
|  +44.4% | +320 B | 11.3% → 13.1% |    720 B → 1.02 KiB |   18 → 26 | `java.lang.ref.SoftReference ←[1]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                       |
|  +43.8% | +280 B | 10.1% → 11.6% |       640 B → 920 B |   16 → 23 | `java.lang.ref.SoftReference ←[0]– java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm`                                     |
| +300.0% | +120 B |   0.6% → 2.0% |        40 B → 160 B |     1 → 4 | `java.lang.ref.SoftReference ←[0]– java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType` |
|  +50.0% |  +80 B |   2.5% → 3.0% |       160 B → 240 B |     4 → 6 | `java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                       |

##### `java.lang.invoke.LambdaForm$NamedFunction`

|  Change |  Delta |             % |          Size | Instances | Path                                                                                                                                                                   |
| ------: | -----: | ------------: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +110.5% | +504 B | 15.6% → 22.9% | 456 B → 960 B |   19 → 40 | `java.lang.invoke.LambdaForm$NamedFunction ← (GC root)`                                                                                                                |
| +100.0% | +288 B |  9.8% → 13.7% | 288 B → 576 B |   12 → 24 | `java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[6]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  +40.0% | +144 B | 12.3% → 12.0% | 360 B → 504 B |   15 → 21 | `java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[4]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  +26.3% | +120 B | 15.6% → 13.7% | 456 B → 576 B |   19 → 24 | `java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[5]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  -75.0% |  -72 B |   3.3% → 0.6% |   96 B → 24 B |     4 → 1 | `java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[9]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |

##### `java.lang.invoke.LambdaFormEditor$Transform`

|  Change |  Delta |             % |         Size | Instances | Path                                                                                                                                                                                                                                                                                                      |
| ------: | -----: | ------------: | -----------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +500.0% | +280 B | 12.5% → 22.2% | 56 B → 336 B |     1 → 6 | `java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                                                                                                                               |
| +200.0% | +112 B | 12.5% → 11.1% | 56 B → 168 B |     1 → 3 | `java.lang.invoke.LambdaFormEditor$Transform ←[1]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                                                                           |
| +200.0% | +112 B | 12.5% → 11.1% | 56 B → 168 B |     1 → 3 | `java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                                                                           |
|     new | +112 B |   0.0% → 7.4% |  0 B → 112 B |     0 → 2 | `java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                         |
|     new |  +56 B |   0.0% → 3.7% |   0 B → 56 B |     0 → 1 | `java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm` |

##### `java.util.HashMap$Node`

|  Change |  Delta |            % |         Size | Instances | Path                                                                                                              |
| ------: | -----: | -----------: | -----------: | --------: | ----------------------------------------------------------------------------------------------------------------- |
|  -84.6% | -308 B | 0.1% → <0.1% | 364 B → 56 B |    13 → 2 | `java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                |
|  -91.7% | -308 B | 0.1% → <0.1% | 336 B → 28 B |    12 → 1 | `java.util.HashMap$Node ←[7]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                |
|  -85.7% | -168 B | 0.1% → <0.1% | 196 B → 28 B |     7 → 1 | `java.util.HashMap$Node ←[15]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                               |
| removed | -168 B |  0.1% → 0.0% |  168 B → 0 B |     6 → 0 | `java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[5]– java.util.HashMap$Node[] ←.table– java.util.HashMap` |
| removed | -168 B |  0.1% → 0.0% |  168 B → 0 B |     6 → 0 | `java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[7]– java.util.HashMap$Node[] ←.table– java.util.HashMap` |

##### `java.lang.invoke.BoundMethodHandle$Species_L`

|  Change | Delta |           % |          Size | Instances | Path                                                                                                                                                                     |
| ------: | ----: | ----------: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  +25.0% | +42 B | 4.3% → 4.5% | 168 B → 210 B |     4 → 5 | `java.lang.invoke.BoundMethodHandle$Species_L ← (GC root)`                                                                                                               |
| removed | -42 B | 1.1% → 0.0% |    42 B → 0 B |     1 → 0 | `java.lang.invoke.BoundMethodHandle$Species_L ←[22]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.jdk.concurrent.JavaKMeans`                        |
| removed | -42 B | 1.1% → 0.0% |    42 B → 0 B |     1 → 0 | `java.lang.invoke.BoundMethodHandle$Species_L ←[31]– java.lang.Object[] ←.<resolved_references>– class scopt.OptionDef`                                                  |
| removed | -42 B | 1.1% → 0.0% |    42 B → 0 B |     1 → 0 | `java.lang.invoke.BoundMethodHandle$Species_L ←[30]– java.lang.Object[] ←.<resolved_references>– class scopt.OptionDef`                                                  |
| removed | -42 B | 1.1% → 0.0% |    42 B → 0 B |     1 → 0 | `java.lang.invoke.BoundMethodHandle$Species_L ←[39]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `java.lang.invoke.DirectMethodHandle$Accessor`

|  Change |  Delta |      % |          Size | Instances | Path                                                       |
| ------: | -----: | -----: | ------------: | --------: | ---------------------------------------------------------- |
| +400.0% | +660 B | 100.0% | 165 B → 825 B |    3 → 15 | `java.lang.invoke.DirectMethodHandle$Accessor ← (GC root)` |

##### `java.lang.invoke.BoundMethodHandle$Species_LL`

| Change | Delta |           % |       Size | Instances | Path                                                                                                                                                                                                                                                             |
| -----: | ----: | ----------: | ---------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +50 B | 0.0% → 5.0% | 0 B → 50 B |     0 → 1 | `java.lang.invoke.BoundMethodHandle$Species_LL ←.argL1– java.lang.invoke.BoundMethodHandle$Species_LLLL ←[30]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.jdk.concurrent.FjKmeans`                                                        |
|    new | +50 B | 0.0% → 5.0% | 0 B → 50 B |     0 → 1 | `java.lang.invoke.BoundMethodHandle$Species_LL ←.argL1– java.lang.invoke.BoundMethodHandle$Species_LLLL ←[34]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.jdk.concurrent.FjKmeans`                                                        |
|    new | +50 B | 0.0% → 5.0% | 0 B → 50 B |     0 → 1 | `java.lang.invoke.BoundMethodHandle$Species_LL ←.argL2– java.lang.invoke.BoundMethodHandle$Species_LLLL ←[34]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.jdk.concurrent.FjKmeans`                                                        |
|    new | +50 B | 0.0% → 5.0% | 0 B → 50 B |     0 → 1 | `java.lang.invoke.BoundMethodHandle$Species_LL ←.argL0– java.lang.invoke.BoundMethodHandle$Species_LL ←.argL1– java.lang.invoke.BoundMethodHandle$Species_LLLL ←[29]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.jdk.concurrent.FjKmeans` |
|    new | +50 B | 0.0% → 5.0% | 0 B → 50 B |     0 → 1 | `java.lang.invoke.BoundMethodHandle$Species_LL ←.argL1– java.lang.invoke.BoundMethodHandle$Species_LL ←.argL1– java.lang.invoke.BoundMethodHandle$Species_LLLL ←[29]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.jdk.concurrent.FjKmeans` |

##### `java.lang.invoke.DirectMethodHandle$Constructor`

|  Change | Delta |             % |          Size | Instances | Path                                                                                                                                                 |
| ------: | ----: | ------------: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| +100.0% | +59 B |   0.8% → 1.6% |  59 B → 118 B |     1 → 2 | `java.lang.invoke.DirectMethodHandle$Constructor ←[15]– java.lang.Object[] ←.<resolved_references>– class scala.collection.mutable.ArrayBuffer`      |
|   +7.7% | +59 B | 10.6% → 10.9% | 767 B → 826 B |   13 → 14 | `java.lang.invoke.DirectMethodHandle$Constructor ← (GC root)`                                                                                        |
| removed | -59 B |   0.8% → 0.0% |    59 B → 0 B |     1 → 0 | `java.lang.invoke.DirectMethodHandle$Constructor ←[21]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.jdk.concurrent.JavaKMeans` |
| removed | -59 B |   0.8% → 0.0% |    59 B → 0 B |     1 → 0 | `java.lang.invoke.DirectMethodHandle$Constructor ←[141]– java.lang.Object[] ←.<resolved_references>– class scopt.ORunner$`                           |
| removed | -59 B |   0.8% → 0.0% |    59 B → 0 B |     1 → 0 | `java.lang.invoke.DirectMethodHandle$Constructor ←[140]– java.lang.Object[] ←.<resolved_references>– class scopt.ORunner$`                           |

##### `java.lang.invoke.BoundMethodHandle$SpeciesData`

|  Change |  Delta |      % |          Size | Instances | Path                                                         |
| ------: | -----: | -----: | ------------: | --------: | ------------------------------------------------------------ |
| +133.3% | +288 B | 100.0% | 216 B → 504 B |     3 → 7 | `java.lang.invoke.BoundMethodHandle$SpeciesData ← (GC root)` |

##### `java.util.concurrent.ConcurrentHashMap`

| Change | Delta |           % |          Size | Instances | Path                                                                                                                                                                                                                                                                                                                          |
| -----: | ----: | ----------: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +16.7% | +84 B | 5.0% → 5.7% | 504 B → 588 B |     6 → 7 | `java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain`                                                                                                                                                                                                  |
| +16.7% | +84 B | 5.0% → 5.7% | 504 B → 588 B |     6 → 7 | `java.util.concurrent.ConcurrentHashMap ←.perms– java.io.FilePermissionCollection ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain` |
|    new | +84 B | 0.0% → 0.8% |    0 B → 84 B |     0 → 1 | `java.util.concurrent.ConcurrentHashMap ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[8]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– java.lang.WeakPairMap ←.exports– class java.lang.Module$ReflectionData`                                                 |

##### `java.lang.invoke.MethodHandleImpl$AsVarargsCollector`

|  Change | Delta |           % |         Size | Instances | Path                                                                                                                                                                                                                                          |
| ------: | ----: | ----------: | -----------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +100.0% | +58 B | 4.3% → 7.4% | 58 B → 116 B |     1 → 2 | `java.lang.invoke.MethodHandleImpl$AsVarargsCollector ←[4]– java.lang.Object[] ←.<resolved_references>– class scala.collection.mutable.ArrayBuffer`                                                                                           |
| removed | -58 B | 4.3% → 0.0% |   58 B → 0 B |     1 → 0 | `java.lang.invoke.MethodHandleImpl$AsVarargsCollector ←[2]– java.lang.Object[] ←.<resolved_references>– class scala.collection.immutable.Map ←[38]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |
| removed | -58 B | 4.3% → 0.0% |   58 B → 0 B |     1 → 0 | `java.lang.invoke.MethodHandleImpl$AsVarargsCollector ←[6]– java.lang.Object[] ←.<resolved_references>– class scopt.OptionParser ←[31]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`             |
| removed | -58 B | 4.3% → 0.0% |   58 B → 0 B |     1 → 0 | `java.lang.invoke.MethodHandleImpl$AsVarargsCollector ←[2]– java.lang.Object[] ←.<resolved_references>– class scala.runtime.LazyVals$`                                                                                                        |
| removed | -58 B | 4.3% → 0.0% |   58 B → 0 B |     1 → 0 | `java.lang.invoke.MethodHandleImpl$AsVarargsCollector ←[5]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.jdk.concurrent.FjKmeans`                                                                                        |

##### `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`

| Change |     Delta |      % |            Size | Instances | Path                                                                   |
| -----: | --------: | -----: | --------------: | --------: | ---------------------------------------------------------------------- |
| -97.8% | -2.75 KiB | 100.0% | 2.81 KiB → 64 B |    45 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask ← (GC root)` |

##### `java.util.ArrayList`

|  Change |  Delta |           % |         Size | Instances | Path                                                                                                                                            |
| ------: | -----: | ----------: | -----------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------- |
|  -91.7% | -176 B | 6.6% → 0.9% | 192 B → 16 B |    12 → 1 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                 |
|  -91.7% | -176 B | 6.6% → 0.9% | 192 B → 16 B |    12 → 1 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←[7]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                 |
| removed |  -96 B | 3.3% → 0.0% |   96 B → 0 B |     6 → 0 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[5]– java.util.HashMap$Node[] ←.table– java.util.HashMap`  |
| removed |  -96 B | 3.3% → 0.0% |   96 B → 0 B |     6 → 0 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[7]– java.util.HashMap$Node[] ←.table– java.util.HashMap`  |
| removed |  -96 B | 3.3% → 0.0% |   96 B → 0 B |     6 → 0 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[13]– java.util.HashMap$Node[] ←.table– java.util.HashMap` |

##### `java.util.HashMap`

|  Change |  Delta |           % |          Size | Instances | Path                                                                                                                          |
| ------: | -----: | ----------: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------- |
|  -71.4% | -480 B | 3.6% → 1.1% | 672 B → 192 B |    14 → 4 | `java.util.HashMap ← (GC root)`                                                                                               |
| removed | -144 B | 0.8% → 0.0% |   144 B → 0 B |     3 → 0 | `java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                        |
|  +14.3% |  +48 B | 1.8% → 2.1% | 336 B → 384 B |     7 → 8 | `java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `java.lang.invoke.DirectMethodHandle$Special`

|  Change | Delta |           % |       Size | Instances | Path                                                                                                                                             |
| ------: | ----: | ----------: | ---------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed | -51 B | 1.6% → 0.0% | 51 B → 0 B |     1 → 0 | `java.lang.invoke.DirectMethodHandle$Special ←[1]– java.lang.Object[] ←.<resolved_references>– class scala.runtime.LazyVals$`                    |
| removed | -51 B | 1.6% → 0.0% | 51 B → 0 B |     1 → 0 | `java.lang.invoke.DirectMethodHandle$Special ←[15]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.harness.RenaissanceSuite$` |
| removed | -51 B | 1.6% → 0.0% | 51 B → 0 B |     1 → 0 | `java.lang.invoke.DirectMethodHandle$Special ←[13]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.harness.RenaissanceSuite$` |
| removed | -51 B | 1.6% → 0.0% | 51 B → 0 B |     1 → 0 | `java.lang.invoke.DirectMethodHandle$Special ←[9]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.harness.RenaissanceSuite$`  |
| removed | -51 B | 1.6% → 0.0% | 51 B → 0 B |     1 → 0 | `java.lang.invoke.DirectMethodHandle$Special ←[4]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.harness.RenaissanceSuite$`  |

##### `java.util.concurrent.ConcurrentHashMap$CounterCell[]`

|  Change | Delta |             % |       Size | Instances | Path                                                                                                                                                                                                                                               |
| ------: | ----: | ------------: | ---------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |     1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell[] ←.counterCells– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |

##### `java.util.concurrent.ConcurrentHashMap$CounterCell`

|  Change | Delta |            % |      Size | Instances | Path                                                                                                                                                                                                                                                                                                        |
| ------: | ----: | -----------: | --------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |  -8 B | 50.0% → 0.0% | 8 B → 0 B |     1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell ←[1]– java.util.concurrent.ConcurrentHashMap$CounterCell[] ←.counterCells– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| removed |  -8 B | 50.0% → 0.0% | 8 B → 0 B |     1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell ←[0]– java.util.concurrent.ConcurrentHashMap$CounterCell[] ←.counterCells– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |

##### `org.renaissance.harness.RenaissanceSuite$$$Lambda`

| Change | Delta |      % |        Size | Instances | Path                                                            |
| -----: | ----: | -----: | ----------: | --------: | --------------------------------------------------------------- |
| -16.7% |  -8 B | 100.0% | 48 B → 40 B |         1 | `org.renaissance.harness.RenaissanceSuite$$$Lambda ← (GC root)` |

### Retained size

#### Regressions

Constructors with the largest increase in instance bytes, including nodes only the instances keep alive. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |       Instances | Constructor                                     |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------------------- |
| +38.0% | +590.501 KiB | 11.7% → 15.3% | 1.52 MiB → 2.09 MiB | 10,168 → 10,198 | `java.util.HashMap$Node`                        |
| +30.1% | +511.333 KiB | 12.8% → 15.7% | 1.66 MiB → 2.16 MiB |       425 → 413 | `java.util.HashMap$Node[]`                      |
| +11.6% | +197.787 KiB | 12.9% → 13.6% | 1.67 MiB → 1.86 MiB |       391 → 379 | `java.util.HashMap`                             |
|  +5.3% |  +51.052 KiB |          7.3% | 968 KiB → 1,019 KiB |   2,683 → 2,827 | `java.lang.Class`                               |
|  +3.4% |  +32.505 KiB |   7.2% → 7.0% |   950 KiB → 983 KiB | 22,938 → 23,588 | `java.lang.String`                              |
|  +1.9% |   +29.39 KiB | 11.7% → 11.2% | 1.51 MiB → 1.54 MiB | 23,684 → 24,321 | `byte[]`                                        |
|  +5.0% |  +26.586 KiB |          4.0% |   536 KiB → 562 KiB |       119 → 122 | `java.util.concurrent.ConcurrentHashMap`        |
|  +5.0% |  +26.536 KiB |   4.0% → 3.9% |   527 KiB → 553 KiB |         94 → 97 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
| +31.9% |   +25.33 KiB |   0.6% → 0.7% |  79.5 KiB → 105 KiB |       624 → 767 | `java.lang.invoke.MethodType`                   |
|  +6.6% |  +21.911 KiB |          2.5% |   334 KiB → 356 KiB |   6,259 → 6,631 | `java.util.concurrent.ConcurrentHashMap$Node`   |
| +13.9% |  +19.358 KiB |   1.0% → 1.1% |   139 KiB → 158 KiB |               2 | `java.net.URLClassLoader`                       |
| +41.3% |  +19.308 KiB |   0.4% → 0.5% | 46.7 KiB → 66.1 KiB |       162 → 229 | `java.lang.invoke.MethodTypeForm`               |
| +50.3% |  +18.414 KiB |   0.3% → 0.4% |   36.6 KiB → 55 KiB |       111 → 162 | `java.lang.invoke.LambdaForm`                   |
| +41.3% |  +16.953 KiB |   0.3% → 0.4% |   41.1 KiB → 58 KiB |       256 → 388 | `java.lang.ref.SoftReference[]`                 |
|  +3.0% |  +15.896 KiB |   4.0% → 3.9% |   533 KiB → 549 KiB |   5,825 → 5,826 | `java.util.LinkedHashMap`                       |
| +11.6% |  +14.724 KiB |          1.0% |   127 KiB → 141 KiB |               2 | `org.renaissance.core.ModuleLoader`             |
| +11.8% |  +14.724 KiB |   0.9% → 1.0% |   124 KiB → 139 KiB |              38 | `java.util.LinkedHashSet`                       |
|  +9.6% |  +11.829 KiB |   0.9% → 1.0% |   123 KiB → 135 KiB |   1,191 → 1,323 | `java.util.LinkedHashMap$Entry`                 |
| +45.4% |   +11.32 KiB |   0.2% → 0.3% | 24.9 KiB → 36.3 KiB |       116 → 167 | `java.lang.invoke.LambdaForm$Name[]`            |
| +18.9% |  +10.531 KiB |   0.4% → 0.5% | 55.7 KiB → 66.2 KiB |               1 | `jdk.internal.util.ReferencedKeySet`            |

##### Array

|   Change |        Delta |             % |                Size |         Instances | Constructor                                        |
| -------: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------------------- |
|   +30.1% | +511.333 KiB | 12.8% → 15.7% | 1.66 MiB → 2.16 MiB |         425 → 413 | `java.util.HashMap$Node[]`                         |
|    +1.9% |   +29.39 KiB | 11.7% → 11.2% | 1.51 MiB → 1.54 MiB |   23,684 → 24,321 | `byte[]`                                           |
|    +5.0% |  +26.536 KiB |   4.0% → 3.9% |   527 KiB → 553 KiB |           94 → 97 | `java.util.concurrent.ConcurrentHashMap$Node[]`    |
|   +41.3% |  +16.953 KiB |   0.3% → 0.4% |   41.1 KiB → 58 KiB |         256 → 388 | `java.lang.ref.SoftReference[]`                    |
|   +45.4% |   +11.32 KiB |   0.2% → 0.3% | 24.9 KiB → 36.3 KiB |         116 → 167 | `java.lang.invoke.LambdaForm$Name[]`               |
|   +46.4% |   +5.478 KiB |          0.1% | 11.8 KiB → 17.3 KiB |           40 → 54 | `java.lang.invoke.MethodHandle[]`                  |
| +2484.7% |   +3.494 KiB |         <0.1% |    144 B → 3.63 KiB |             1 → 4 | `java.lang.invoke.LambdaFormEditor$Transform[]`    |
|   +31.8% |   +3.445 KiB |          0.1% | 10.8 KiB → 14.3 KiB |         497 → 629 | `java.lang.Class[]`                                |
|  +111.0% |       +634 B |         <0.1% |    571 B → 1.18 KiB |                 3 | `scala.collection.mutable.HashMap$Node[]`          |
|    +2.3% |       +625 B |          0.2% | 26.1 KiB → 26.7 KiB |               447 | `java.lang.String[]`                               |
|      ~0% |       +400 B | 59.0% → 55.7% |            7.63 MiB | 100,015 → 100,020 | `java.lang.Double[]`                               |
| +3200.0% |       +256 B |         <0.1% |         8 B → 264 B |             3 → 4 | `java.lang.ClassValue$Entry[]`                     |
|   +35.7% |       +200 B |         <0.1% |       560 B → 760 B |            7 → 13 | `double[]`                                         |
|    +8.6% |       +180 B |         <0.1% | 2.05 KiB → 2.23 KiB |           16 → 17 | `java.util.WeakHashMap$Entry[]`                    |
|   +59.2% |       +180 B |         <0.1% |       304 B → 484 B |                 5 | `java.lang.invoke.LambdaForm$NamedFunction[]`      |
|  +133.3% |       +160 B |         <0.1% |       120 B → 280 B |             3 → 7 | `java.lang.invoke.BoundMethodHandle$SpeciesData[]` |
|   +12.5% |        +84 B |         <0.1% |       672 B → 756 B |                 2 | `java.lang.invoke.MethodHandle[][]`                |

##### Number

| Change |  Delta |             % |     Size |         Instances | Constructor        |
| -----: | -----: | ------------: | -------: | ----------------: | ------------------ |
|    ~0% | +200 B | 29.5% → 27.8% | 3.82 MiB | 500,076 → 500,101 | `java.lang.Double` |

##### Object

| Change |        Delta |             % |                Size |       Instances | Constructor                                   |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------- |
| +38.0% | +590.501 KiB | 11.7% → 15.3% | 1.52 MiB → 2.09 MiB | 10,168 → 10,198 | `java.util.HashMap$Node`                      |
| +11.6% | +197.787 KiB | 12.9% → 13.6% | 1.67 MiB → 1.86 MiB |       391 → 379 | `java.util.HashMap`                           |
|  +5.0% |  +26.586 KiB |          4.0% |   536 KiB → 562 KiB |       119 → 122 | `java.util.concurrent.ConcurrentHashMap`      |
| +31.9% |   +25.33 KiB |   0.6% → 0.7% |  79.5 KiB → 105 KiB |       624 → 767 | `java.lang.invoke.MethodType`                 |
|  +6.6% |  +21.911 KiB |          2.5% |   334 KiB → 356 KiB |   6,259 → 6,631 | `java.util.concurrent.ConcurrentHashMap$Node` |
| +13.9% |  +19.358 KiB |   1.0% → 1.1% |   139 KiB → 158 KiB |               2 | `java.net.URLClassLoader`                     |
| +41.3% |  +19.308 KiB |   0.4% → 0.5% | 46.7 KiB → 66.1 KiB |       162 → 229 | `java.lang.invoke.MethodTypeForm`             |
| +50.3% |  +18.414 KiB |   0.3% → 0.4% |   36.6 KiB → 55 KiB |       111 → 162 | `java.lang.invoke.LambdaForm`                 |
|  +3.0% |  +15.896 KiB |   4.0% → 3.9% |   533 KiB → 549 KiB |   5,825 → 5,826 | `java.util.LinkedHashMap`                     |
| +11.6% |  +14.724 KiB |          1.0% |   127 KiB → 141 KiB |               2 | `org.renaissance.core.ModuleLoader`           |
| +11.8% |  +14.724 KiB |   0.9% → 1.0% |   124 KiB → 139 KiB |              38 | `java.util.LinkedHashSet`                     |
|  +9.6% |  +11.829 KiB |   0.9% → 1.0% |   123 KiB → 135 KiB |   1,191 → 1,323 | `java.util.LinkedHashMap$Entry`               |
| +18.9% |  +10.531 KiB |   0.4% → 0.5% | 55.7 KiB → 66.2 KiB |               1 | `jdk.internal.util.ReferencedKeySet`          |
| +18.9% |  +10.531 KiB |   0.4% → 0.5% | 55.6 KiB → 66.2 KiB |               1 | `jdk.internal.util.ReferencedKeyMap`          |
| +43.5% |   +8.921 KiB |          0.2% | 20.5 KiB → 29.4 KiB |       317 → 463 | `java.lang.invoke.LambdaForm$Name`            |
| +19.7% |   +7.706 KiB |          0.3% | 39.1 KiB → 46.8 KiB |       711 → 848 | `java.lang.invoke.MemberName`                 |
| +11.4% |   +7.362 KiB |          0.5% | 64.8 KiB → 72.1 KiB |               1 | `org.renaissance.core.BenchmarkSuite`         |
| +11.6% |   +7.362 KiB |          0.5% | 63.3 KiB → 70.7 KiB |               4 | `java.util.Optional`                          |
| +26.6% |   +5.941 KiB |          0.2% | 22.3 KiB → 28.3 KiB |       627 → 796 | `jdk.internal.util.WeakReferenceKey`          |
| +58.8% |   +5.234 KiB |          0.1% |  8.9 KiB → 14.1 KiB |         17 → 27 | `java.lang.invoke.Invokers`                   |

##### String

| Change |       Delta |           % |              Size |       Instances | Constructor        |
| -----: | ----------: | ----------: | ----------------: | --------------: | ------------------ |
|  +3.4% | +32.505 KiB | 7.2% → 7.0% | 950 KiB → 983 KiB | 22,938 → 23,588 | `java.lang.String` |

#### Improvements

Constructors with the largest decrease in instance bytes, including nodes only the instances keep alive. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |             % |                Size |     Instances | Constructor                                                |
| ------: | ----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------- |
|  -66.6% |  -4.231 MiB | 49.1% → 15.5% | 6.35 MiB → 2.12 MiB | 1,985 → 2,123 | `java.lang.Object[]`                                       |
|  -70.6% |  -4.214 MiB | 46.1% → 12.8% | 5.97 MiB → 1.75 MiB |     181 → 117 | `java.util.ArrayList`                                      |
|  -99.8% | -71.136 KiB |  0.5% → <0.1% |    71.3 KiB → 120 B |        45 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -9.1% | -14.523 KiB |   1.2% → 1.0% |   159 KiB → 145 KiB | 1,925 → 1,793 | `int[]`                                                    |
|   -7.7% |      -629 B |          0.1% | 8.01 KiB → 7.39 KiB |       64 → 59 | `java.lang.invoke.DirectMethodHandle$Special`              |
|   -1.3% |       -86 B |         <0.1% | 6.37 KiB → 6.29 KiB |             3 | `jdk.internal.loader.URLClassPath`                         |
|   -5.1% |       -68 B |         <0.1% | 1.29 KiB → 1.23 KiB |             1 | `java.lang.invoke.LambdaForm$Name[][]`                     |
| removed |       -32 B |  <0.1% → 0.0% |          32 B → 0 B |         1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell[]`     |
| removed |       -16 B |  <0.1% → 0.0% |          16 B → 0 B |         2 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell`       |
|  -16.7% |        -8 B |         <0.1% |         48 B → 40 B |         1 → 5 | `org.renaissance.harness.RenaissanceSuite$$$Lambda`        |
|   -0.2% |        -8 B |         <0.1% |  3.91 KiB → 3.9 KiB |             1 | `java.lang.Long[]`                                         |

##### Array

|  Change |       Delta |             % |                Size |     Instances | Constructor                                            |
| ------: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------ |
|  -66.6% |  -4.231 MiB | 49.1% → 15.5% | 6.35 MiB → 2.12 MiB | 1,985 → 2,123 | `java.lang.Object[]`                                   |
|   -9.1% | -14.523 KiB |   1.2% → 1.0% |   159 KiB → 145 KiB | 1,925 → 1,793 | `int[]`                                                |
|   -5.1% |       -68 B |         <0.1% | 1.29 KiB → 1.23 KiB |             1 | `java.lang.invoke.LambdaForm$Name[][]`                 |
| removed |       -32 B |  <0.1% → 0.0% |          32 B → 0 B |         1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell[]` |
|   -0.2% |        -8 B |         <0.1% |  3.91 KiB → 3.9 KiB |             1 | `java.lang.Long[]`                                     |

##### Object

|  Change |       Delta |             % |                Size | Instances | Constructor                                                |
| ------: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------- |
|  -70.6% |  -4.214 MiB | 46.1% → 12.8% | 5.97 MiB → 1.75 MiB | 181 → 117 | `java.util.ArrayList`                                      |
|  -99.8% | -71.136 KiB |  0.5% → <0.1% |    71.3 KiB → 120 B |    45 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -7.7% |      -629 B |          0.1% | 8.01 KiB → 7.39 KiB |   64 → 59 | `java.lang.invoke.DirectMethodHandle$Special`              |
|   -1.3% |       -86 B |         <0.1% | 6.37 KiB → 6.29 KiB |         3 | `jdk.internal.loader.URLClassPath`                         |
| removed |       -16 B |  <0.1% → 0.0% |          16 B → 0 B |     2 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell`       |
|  -16.7% |        -8 B |         <0.1% |         48 B → 40 B |     1 → 5 | `org.renaissance.harness.RenaissanceSuite$$$Lambda`        |

#### Retainer paths

Retainer paths with the largest change in contribution to each constructor's retained size.

##### `java.util.HashMap$Node`

|  Change |        Delta |           % |               Size | Instances | Path                                                                                                              |
| ------: | -----------: | ----------: | -----------------: | --------: | ----------------------------------------------------------------------------------------------------------------- |
|     new | +156.804 KiB | 0.0% → 7.3% |      0 B → 157 KiB |     0 → 1 | `java.util.HashMap$Node ←[6]– java.util.HashMap$Node[]`                                                           |
|     new | +156.757 KiB | 0.0% → 7.3% |      0 B → 157 KiB |     0 → 1 | `java.util.HashMap$Node ←[6]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                |
| +237.8% | +110.191 KiB | 3.0% → 7.3% | 46.3 KiB → 157 KiB |    13 → 2 | `java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                |
|     new |  +78.683 KiB | 0.0% → 3.7% |     0 B → 78.7 KiB |     0 → 1 | `java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[6]– java.util.HashMap$Node[]`                            |
|     new |  +78.675 KiB | 0.0% → 3.7% |     0 B → 78.7 KiB |     0 → 1 | `java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[6]– java.util.HashMap$Node[] ←.table– java.util.HashMap` |

##### `java.util.HashMap$Node[]`

|     Change |        Delta |             % |                Size | Instances | Path                                                                                                                                                                                                |
| ---------: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +250187.5% | +312.734 KiB | <0.1% → 14.2% |     128 B → 313 KiB |     1 → 2 | `java.util.HashMap$Node[] ← (GC root)`                                                                                                                                                              |
|     +81.2% |  +251.92 KiB | 18.3% → 25.4% |   310 KiB → 562 KiB |    13 → 2 | `java.util.HashMap$Node[] ←.table– java.util.HashMap`                                                                                                                                               |
|    removed |    -68.3 KiB |   4.0% → 0.0% |      68.3 KiB → 0 B |     3 → 0 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                            |
|     +11.6% |   +7.362 KiB |   3.7% → 3.2% | 63.2 KiB → 70.6 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|     +11.6% |   +7.362 KiB |   3.7% → 3.2% | 63.2 KiB → 70.6 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |

##### `java.util.HashMap`

|  Change |        Delta |             % |                Size | Instances | Path                                                                                                                                                              |
| ------: | -----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +80.9% | +251.452 KiB | 18.2% → 29.5% |   311 KiB → 562 KiB |    14 → 4 | `java.util.HashMap ← (GC root)`                                                                                                                                   |
| removed |  -68.441 KiB |   4.0% → 0.0% |      68.4 KiB → 0 B |     3 → 0 | `java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                            |
|  +11.6% |   +7.362 KiB |          3.7% | 63.3 KiB → 70.7 KiB |         1 | `java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  +11.6% |   +7.362 KiB |          3.7% | 63.3 KiB → 70.7 KiB |         1 | `java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
|     ~0% |        +48 B | 57.5% → 51.5% |             982 KiB |     7 → 8 | `java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                     |

##### `java.lang.Class`

|    Change |       Delta |             % |              Size |     Instances | Path                                                                                                               |
| --------: | ----------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------------------------------------------------------------ |
|     +5.2% | +45.854 KiB | 91.7% → 91.6% | 888 KiB → 934 KiB | 1,840 → 1,863 | `java.lang.Class ← (GC root)`                                                                                      |
|    -99.8% | -16.074 KiB |  1.7% → <0.1% |   16.1 KiB → 40 B |             2 | `java.lang.Class ←[169]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |
| +12828.1% | +16.035 KiB |  <0.1% → 1.6% |  128 B → 16.2 KiB |             2 | `java.lang.Class ←[171]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |
|    -98.3% |  -1.359 KiB |  0.1% → <0.1% |   1.38 KiB → 24 B |         2 → 1 | `java.lang.Class ←[164]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |
|  +8650.0% |  +1.351 KiB |  <0.1% → 0.1% |   16 B → 1.37 KiB |             2 | `java.lang.Class ←[166]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |

##### `java.lang.String`

| Change |      Delta |             % |                Size |     Instances | Path                                                                                                                                                                                                                                                                                                                                                                      |
| -----: | ---------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +17.7% | +3.619 KiB |   2.1% → 2.4% |   20.4 KiB → 24 KiB |     265 → 328 | `java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType`                                                                                                                                                                                                                                                                                                        |
| +38.7% | +3.445 KiB |   0.9% → 1.3% | 8.91 KiB → 12.4 KiB |     174 → 241 | `java.lang.String ←.key– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| +38.7% | +3.445 KiB |   0.9% → 1.3% | 8.91 KiB → 12.4 KiB |     174 → 241 | `java.lang.String ←.key– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  +0.8% | +2.692 KiB | 36.3% → 35.4% |   345 KiB → 347 KiB | 9,679 → 9,761 | `java.lang.String ← (GC root)`                                                                                                                                                                                                                                                                                                                                            |
|  +6.4% |     +768 B |   1.2% → 1.3% | 11.8 KiB → 12.5 KiB |       35 → 40 | `java.lang.String ←.value– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                |

##### `byte[]`

| Change |      Delta |             % |                Size |     Instances | Path                                                                                                                                                                                                                                                                                                                                                                                      |
| -----: | ---------: | ------------: | ------------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +0.6% | +3.976 KiB | 46.3% → 45.7% |   715 KiB → 719 KiB |            10 | `byte[] ←.cen– java.util.zip.ZipFile$Source`                                                                                                                                                                                                                                                                                                                                              |
| +16.4% | +2.757 KiB |   1.1% → 1.2% | 16.8 KiB → 19.5 KiB |     265 → 328 | `byte[] ←.value– java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType`                                                                                                                                                                                                                                                                                                        |
| +38.7% | +2.529 KiB |   0.4% → 0.6% | 6.53 KiB → 9.06 KiB |     174 → 241 | `byte[] ←.value– java.lang.String ←.key– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| +38.7% | +2.529 KiB |   0.4% → 0.6% | 6.53 KiB → 9.06 KiB |     174 → 241 | `byte[] ←.value– java.lang.String ←.key– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  +5.2% |  +1.91 KiB |   2.4% → 2.5% | 36.9 KiB → 38.8 KiB | 1,023 → 1,061 | `byte[] ← (GC root)`                                                                                                                                                                                                                                                                                                                                                                      |

##### `java.util.concurrent.ConcurrentHashMap`

| Change |      Delta |             % |                Size | Instances | Path                                                                                                                                                                          |
| -----: | ---------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +26.5% | +13.05 KiB |  9.2% → 11.1% | 49.3 KiB → 62.3 KiB |         2 | `java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                           |
| +17.3% | +9.617 KiB | 10.4% → 11.6% | 55.5 KiB → 65.1 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|  +2.1% |     +799 B |   6.9% → 6.7% | 36.9 KiB → 37.6 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– jdk.internal.loader.ClassLoaders$AppClassLoader`                                                                   |
| +17.3% |     +604 B |   0.6% → 0.7% |  3.4 KiB → 3.99 KiB |         2 | `java.util.concurrent.ConcurrentHashMap ←.packages– java.net.URLClassLoader`                                                                                                  |
| +16.7% |     +601 B |          0.7% | 3.52 KiB → 4.11 KiB |     6 → 7 | `java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain`                                                  |

##### `java.util.concurrent.ConcurrentHashMap$Node[]`

| Change |      Delta |             % |                Size | Instances | Path                                                                                                                                                                                                                                 |
| -----: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| +26.6% | +13.05 KiB |  9.3% → 11.2% | 49.1 KiB → 62.2 KiB |         2 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                           |
| +17.4% | +9.648 KiB | 10.5% → 11.7% |   55.4 KiB → 65 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|  +2.1% |     +799 B |   7.0% → 6.8% | 36.8 KiB → 37.6 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– jdk.internal.loader.ClassLoaders$AppClassLoader`                                                                   |
| +18.2% |     +604 B |   0.6% → 0.7% | 3.24 KiB → 3.83 KiB |         2 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.packages– java.net.URLClassLoader`                                                                                                  |
| +25.0% |     +569 B |   0.4% → 0.5% | 2.23 KiB → 2.78 KiB |         2 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.package2certs– java.net.URLClassLoader`                                                                                             |

##### `java.lang.invoke.MethodType`

|  Change |      Delta |             % |               Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------: | ---------: | ------------: | -----------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  +32.0% | +25.33 KiB | 99.6% → 99.7% | 79.2 KiB → 105 KiB | 618 → 761 | `java.lang.invoke.MethodType ← (GC root)`                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |      -48 B |   0.1% → 0.0% |         48 B → 0 B |     1 → 0 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←.next– java.util.concurrent.ConcurrentHashMap$Node ←[414]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|     new |      +48 B |  0.0% → <0.1% |         0 B → 48 B |     0 → 1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[414]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |

##### `java.util.concurrent.ConcurrentHashMap$Node`

|  Change |  Delta |           % |                Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | -----: | ----------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +390 B | 0.0% → 0.1% |         0 B → 390 B |     0 → 1 | `java.util.concurrent.ConcurrentHashMap$Node ←[8]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– java.lang.WeakPairMap ←.exports– class java.lang.Module$ReflectionData`                                                                                                                                                                                                        |
|  +16.7% | +389 B |        0.7% | 2.28 KiB → 2.66 KiB |     6 → 7 | `java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain`                                                                                                                                                                                                  |
| removed | -280 B | 0.1% → 0.0% |         280 B → 0 B |     2 → 0 | `java.util.concurrent.ConcurrentHashMap$Node ←[8]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.perms– java.io.FilePermissionCollection ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain` |
| removed | -280 B | 0.1% → 0.0% |         280 B → 0 B |     2 → 0 | `java.util.concurrent.ConcurrentHashMap$Node ←[5]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.perms– java.io.FilePermissionCollection ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain` |
| removed | -280 B | 0.1% → 0.0% |         280 B → 0 B |     2 → 0 | `java.util.concurrent.ConcurrentHashMap$Node ←[9]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.perms– java.io.FilePermissionCollection ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain` |

##### `java.net.URLClassLoader`

| Change |       Delta |      % |              Size | Instances | Path                                  |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------- |
| +13.9% | +19.358 KiB | 100.0% | 139 KiB → 158 KiB |         2 | `java.net.URLClassLoader ← (GC root)` |

##### `java.lang.invoke.MethodTypeForm`

| Change |       Delta |             % |                Size | Instances | Path                                                                  |
| -----: | ----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------- |
| +36.6% | +12.792 KiB | 74.8% → 72.3% |   35 KiB → 47.8 KiB | 102 → 145 | `java.lang.invoke.MethodTypeForm ← (GC root)`                         |
| +55.3% |  +6.515 KiB | 25.2% → 27.7% | 11.8 KiB → 18.3 KiB |   60 → 84 | `java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType` |

##### `java.lang.invoke.LambdaForm`

| Change |       Delta |             % |                Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +62.4% | +17.765 KiB | 77.7% → 84.0% | 28.5 KiB → 46.2 KiB |  83 → 122 | `java.lang.invoke.LambdaForm ← (GC root)`                                                                                                                                                                                                                                                                                                                                                                                                               |
|    new |  +2.894 KiB |   0.0% → 5.3% |      0 B → 2.89 KiB |     0 → 1 | `java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                                                                                                                                                                                 |
|    new |  +1.423 KiB |   0.0% → 2.6% |      0 B → 1.42 KiB |     0 → 1 | `java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[1]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                       |
|    new |  +1.097 KiB |   0.0% → 2.0% |       0 B → 1.1 KiB |     0 → 1 | `java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[1]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm` |
|    new |  +1.066 KiB |   0.0% → 1.9% |      0 B → 1.07 KiB |     0 → 1 | `java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                       |

##### `java.lang.ref.SoftReference[]`

| Change |       Delta |             % |                Size | Instances | Path                                                                                                                 |
| -----: | ----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| +34.9% | +10.023 KiB | 69.9% → 66.7% | 28.7 KiB → 38.7 KiB |  88 → 130 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                       |
| +57.4% |  +4.992 KiB | 21.2% → 23.6% | 8.69 KiB → 13.7 KiB |   40 → 64 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType`   |
| +46.8% |  +1.257 KiB |   6.5% → 6.8% | 2.69 KiB → 3.95 KiB |  88 → 130 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm`                                     |
| +69.6% |      +696 B |   2.4% → 2.9% |  1,000 B → 1.66 KiB |   40 → 64 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType` |

##### `java.util.LinkedHashMap`

| Change |      Delta |           % |                Size | Instances | Path                                                                                                                                                                                                                                                                                              |
| -----: | ---------: | ----------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +44.7% | +8.331 KiB | 3.5% → 4.9% |   18.6 KiB → 27 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| +44.7% | +8.331 KiB | 3.5% → 4.9% |   18.6 KiB → 27 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  +6.4% | +1.171 KiB | 3.4% → 3.6% | 18.3 KiB → 19.5 KiB |     7 → 8 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                  |
| -58.0% |     -941 B | 0.3% → 0.1% |    1.58 KiB → 681 B |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`  |
| -58.0% |     -941 B | 0.3% → 0.1% |    1.58 KiB → 681 B |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                  |

##### `org.renaissance.core.ModuleLoader`

| Change |      Delta |     % |                Size | Instances | Path                                                                                                                |
| -----: | ---------: | ----: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| +11.6% | +7.362 KiB | 50.0% | 63.3 KiB → 70.7 KiB |         1 | `org.renaissance.core.ModuleLoader ← (GC root)`                                                                     |
| +11.6% | +7.362 KiB | 50.0% | 63.3 KiB → 70.7 KiB |         1 | `org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |

##### `java.util.LinkedHashSet`

| Change |      Delta |             % |                Size | Instances | Path                                                                                                                                                                                                                                                               |
| -----: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| +44.7% | +8.331 KiB | 15.0% → 19.4% |   18.6 KiB → 27 KiB |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| +44.7% | +8.331 KiB | 15.0% → 19.4% |   18.6 KiB → 27 KiB |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
| -57.7% |     -941 B |   1.3% → 0.5% |    1.59 KiB → 689 B |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`  |
| -57.7% |     -941 B |   1.3% → 0.5% |    1.59 KiB → 689 B |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                  |
|  +1.4% |     +266 B | 15.4% → 14.0% | 19.2 KiB → 19.4 KiB |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                  |

##### `java.util.LinkedHashMap$Entry`

| Change |      Delta |             % |                Size | Instances | Path                                                                                                                                                                                                                                                                                                                                              |
| -----: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +38.6% | +6.324 KiB | 13.4% → 16.9% | 16.4 KiB → 22.7 KiB | 174 → 241 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| +38.6% | +6.324 KiB | 13.4% → 16.9% | 16.4 KiB → 22.7 KiB | 174 → 241 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  +8.1% | +1.191 KiB | 12.0% → 11.8% | 14.8 KiB → 15.9 KiB |   63 → 73 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                  |
| -73.0% |     -804 B |   0.9% → 0.2% |    1.08 KiB → 297 B |    11 → 3 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`  |
| -73.0% |     -804 B |   0.9% → 0.2% |    1.08 KiB → 297 B |    11 → 3 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                  |

##### `java.lang.invoke.LambdaForm$Name[]`

| Change |      Delta |             % |            Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -----: | ---------: | ------------: | --------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +47.3% | +9.003 KiB | 76.3% → 77.3% | 19 KiB → 28 KiB |  83 → 122 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|    new |     +422 B |   0.0% → 1.1% |     0 B → 422 B |     0 → 1 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[1]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm` |
|    new |     +406 B |   0.0% → 1.1% |     0 B → 406 B |     0 → 1 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                       |
|    new |     +322 B |   0.0% → 0.9% |     0 B → 322 B |     0 → 1 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[1]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                       |
|    new |     +306 B |   0.0% → 0.8% |     0 B → 306 B |     0 → 1 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                                                                                                                             |

##### `jdk.internal.util.ReferencedKeySet`

| Change |       Delta |      % |                Size | Instances | Path                                                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------------------------------------------------------- |
| +18.9% | +10.531 KiB | 100.0% | 55.7 KiB → 66.2 KiB |         1 | `jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |

##### `java.lang.invoke.MethodHandle[]`

|  Change |      Delta |             % |                Size | Instances | Path                                                                                                                                  |
| ------: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
|  +58.8% | +5.078 KiB | 73.1% → 79.3% | 8.63 KiB → 13.7 KiB |   17 → 27 | `java.lang.invoke.MethodHandle[] ←.invokers– java.lang.invoke.Invokers ←.invokers– java.lang.invoke.MethodType`                       |
| +133.3% |     +192 B |   1.2% → 1.9% |       144 B → 336 B |     3 → 7 | `java.lang.invoke.MethodHandle[] ←.transformHelpers– java.lang.invoke.BoundMethodHandle$SpeciesData`                                  |
|  +53.5% |      +92 B |   1.4% → 1.5% |       172 B → 264 B |         1 | `java.lang.invoke.MethodHandle[] ←.IDENTITY_MHS– class java.lang.invoke.MethodHandles`                                                |
| +104.2% |      +50 B |   0.4% → 0.6% |         48 B → 98 B |         1 | `java.lang.invoke.MethodHandle[] ←[0]– java.lang.invoke.MethodHandle[][] ←.DOUBLE_MIXERS– class java.lang.invoke.StringConcatFactory` |
|  +87.5% |      +42 B |   0.4% → 0.5% |         48 B → 90 B |         1 | `java.lang.invoke.MethodHandle[] ←.PREPENDERS– class java.lang.invoke.StringConcatFactory`                                            |

##### `java.lang.invoke.LambdaFormEditor$Transform[]`

|   Change |      Delta |            % |             Size | Instances | Path                                                                                                                                                                                                                                                    |
| -------: | ---------: | -----------: | ---------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +2484.7% | +3.494 KiB |       100.0% | 144 B → 3.63 KiB |     1 → 3 | `java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                                                                           |
|      new |  +2.63 KiB | 0.0% → 72.4% |   0 B → 2.63 KiB |     0 → 1 | `java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm` |

##### `java.lang.Class[]`

| Change |      Delta |             % |                Size | Instances | Path                                                      |
| -----: | ---------: | ------------: | ------------------: | --------: | --------------------------------------------------------- |
| +35.8% | +3.257 KiB | 84.1% → 86.6% | 9.11 KiB → 12.4 KiB | 393 → 516 | `java.lang.Class[] ←.ptypes– java.lang.invoke.MethodType` |
| +10.8% |     +192 B | 16.1% → 13.5% | 1.74 KiB → 1.93 KiB |  97 → 106 | `java.lang.Class[] ← (GC root)`                           |

##### `scala.collection.mutable.HashMap$Node[]`

|  Change |  Delta |             % |          Size | Instances | Path                                                                                                                  |
| ------: | -----: | ------------: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------- |
| +312.3% | +634 B | 35.6% → 69.5% | 203 B → 837 B |         1 | `scala.collection.mutable.HashMap$Node[] ←.scala$collection$mutable$HashMap$$table– scala.collection.mutable.HashMap` |

##### `java.lang.String[]`

|  Change |  Delta |           % |            Size | Instances | Path                             |
| ------: | -----: | ----------: | --------------: | --------: | -------------------------------- |
| +161.1% | +625 B | 1.5% → 3.7% | 388 B → 1,013 B |         3 | `java.lang.String[] ← (GC root)` |

##### `java.lang.Double[]`

|  Change |      Delta |              % |                Size |        Instances | Path                                                                                 |
| ------: | ---------: | -------------: | ------------------: | ---------------: | ------------------------------------------------------------------------------------ |
| +166.7% | +4.768 MiB | 37.5% → 100.0% | 2.86 MiB → 7.63 MiB | 37,498 → 100,005 | `java.lang.Double[] ← (GC root)`                                                     |
| removed |      -80 B |   <0.1% → 0.0% |          80 B → 0 B |            1 → 0 | `java.lang.Double[] ←[31259]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| removed |      -80 B |   <0.1% → 0.0% |          80 B → 0 B |            1 → 0 | `java.lang.Double[] ←[31258]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| removed |      -80 B |   <0.1% → 0.0% |          80 B → 0 B |            1 → 0 | `java.lang.Double[] ←[31257]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| removed |      -80 B |   <0.1% → 0.0% |          80 B → 0 B |            1 → 0 | `java.lang.Double[] ←[31256]– java.lang.Object[] ←.elementData– java.util.ArrayList` |

##### `java.lang.ClassValue$Entry[]`

| Change |  Delta |            % |        Size | Instances | Path                                                                                                             |
| -----: | -----: | -----------: | ----------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
|    new | +256 B | 0.0% → 97.0% | 0 B → 256 B |     0 → 1 | `java.lang.ClassValue$Entry[] ←.cacheArray– java.lang.ClassValue$ClassValueMap ←.classValueMap– java.lang.Class` |

##### `double[]`

| Change | Delta |           % |       Size | Instances | Path                                                                                                                                                                                                                                                                                                                 |
| -----: | ----: | ----------: | ---------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +40 B | 0.0% → 5.3% | 0 B → 40 B |     0 → 1 | `double[] ←.head– scala.collection.immutable.$colon$colon ←.expectedPoints– org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                                                                                 |
|    new | +40 B | 0.0% → 5.3% | 0 B → 40 B |     0 → 1 | `double[] ←.head– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.expectedPoints– org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                                 |
|    new | +40 B | 0.0% → 5.3% | 0 B → 40 B |     0 → 1 | `double[] ←.head– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.expectedPoints– org.renaissance.jdk.concurrent.FjKmeans`                                                                                                 |
|    new | +40 B | 0.0% → 5.3% | 0 B → 40 B |     0 → 1 | `double[] ←.head– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.expectedPoints– org.renaissance.jdk.concurrent.FjKmeans`                                                 |
|    new | +40 B | 0.0% → 5.3% | 0 B → 40 B |     0 → 1 | `double[] ←.head– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.next– scala.collection.immutable.$colon$colon ←.expectedPoints– org.renaissance.jdk.concurrent.FjKmeans` |

##### `java.util.WeakHashMap$Entry[]`

| Change |  Delta |           % |        Size | Instances | Path                                                                                                         |
| -----: | -----: | ----------: | ----------: | --------: | ------------------------------------------------------------------------------------------------------------ |
|    new | +180 B | 0.0% → 7.9% | 0 B → 180 B |     0 → 1 | `java.util.WeakHashMap$Entry[] ←.table– java.lang.ClassValue$ClassValueMap ←.classValueMap– java.lang.Class` |

##### `java.lang.invoke.LambdaForm$NamedFunction[]`

|  Change |  Delta |             % |         Size | Instances | Path                                                                                       |
| ------: | -----: | ------------: | -----------: | --------: | ------------------------------------------------------------------------------------------ |
| +375.0% | +180 B | 15.8% → 47.1% | 48 B → 228 B |         1 | `java.lang.invoke.LambdaForm$NamedFunction[] ←.NF_zero– class java.lang.invoke.LambdaForm` |

##### `java.lang.invoke.BoundMethodHandle$SpeciesData[]`

|  Change |  Delta |      % |          Size | Instances | Path                                                                                                            |
| ------: | -----: | -----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------- |
| +133.3% | +160 B | 100.0% | 120 B → 280 B |     3 → 7 | `java.lang.invoke.BoundMethodHandle$SpeciesData[] ←.extensions– java.lang.invoke.BoundMethodHandle$SpeciesData` |

##### `java.lang.invoke.MethodHandle[][]`

| Change | Delta |             % |          Size | Instances | Path                                                                                                |
| -----: | ----: | ------------: | ------------: | --------: | --------------------------------------------------------------------------------------------------- |
| +14.9% | +50 B | 50.0% → 51.1% | 336 B → 386 B |         1 | `java.lang.invoke.MethodHandle[][] ←.DOUBLE_MIXERS– class java.lang.invoke.StringConcatFactory`     |
| +10.1% | +34 B | 50.0% → 48.9% | 336 B → 370 B |         1 | `java.lang.invoke.MethodHandle[][] ←.DOUBLE_PREPENDERS– class java.lang.invoke.StringConcatFactory` |

##### `java.lang.Double`

|  Change |        Delta |            % |              Size |        Instances | Path                                        |
| ------: | -----------: | -----------: | ----------------: | ---------------: | ------------------------------------------- |
| +166.7% | +488.335 KiB | 7.5% → 20.0% | 293 KiB → 781 KiB | 37,498 → 100,005 | `java.lang.Double ←[4]– java.lang.Double[]` |
| +166.7% | +488.335 KiB | 7.5% → 20.0% | 293 KiB → 781 KiB | 37,498 → 100,005 | `java.lang.Double ←[3]– java.lang.Double[]` |
| +166.7% | +488.335 KiB | 7.5% → 20.0% | 293 KiB → 781 KiB | 37,498 → 100,005 | `java.lang.Double ←[2]– java.lang.Double[]` |
| +166.7% | +488.335 KiB | 7.5% → 20.0% | 293 KiB → 781 KiB | 37,498 → 100,005 | `java.lang.Double ←[1]– java.lang.Double[]` |
| +166.7% | +488.335 KiB | 7.5% → 20.0% | 293 KiB → 781 KiB | 37,498 → 100,005 | `java.lang.Double ←[0]– java.lang.Double[]` |

##### `jdk.internal.util.ReferencedKeyMap`

| Change |       Delta |      % |                Size | Instances | Path                                                                                                                            |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------- |
| +18.9% | +10.531 KiB | 100.0% | 55.6 KiB → 66.2 KiB |         1 | `jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |

##### `java.lang.invoke.LambdaForm$Name`

|  Change |      Delta |             % |                Size | Instances | Path                                                                                                             |
| ------: | ---------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
| +111.7% | +2.093 KiB |  9.1% → 13.5% | 1.88 KiB → 3.97 KiB |   18 → 40 | `java.lang.invoke.LambdaForm$Name ←[6]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  +46.7% | +1.416 KiB | 14.8% → 15.1% | 3.03 KiB → 4.45 KiB |   33 → 56 | `java.lang.invoke.LambdaForm$Name ←[5]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  +47.6% | +1.373 KiB | 14.1% → 14.5% | 2.88 KiB → 4.26 KiB |   39 → 60 | `java.lang.invoke.LambdaForm$Name ←[4]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  +79.4% |     +800 B |   4.8% → 6.0% |  1,008 B → 1.77 KiB |   10 → 20 | `java.lang.invoke.LambdaForm$Name ←[7]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  +29.3% |     +738 B | 12.0% → 10.8% | 2.46 KiB → 3.18 KiB |   38 → 53 | `java.lang.invoke.LambdaForm$Name ←[3]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |

##### `java.lang.invoke.MemberName`

|  Change |      Delta |             % |                Size | Instances | Path                                                                                                                                                                                                         |
| ------: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  +48.6% | +2.365 KiB | 12.5% → 15.5% | 4.87 KiB → 7.24 KiB |  83 → 122 | `java.lang.invoke.MemberName ←.vmentry– java.lang.invoke.LambdaForm`                                                                                                                                         |
|  +45.3% | +1.273 KiB |   7.2% → 8.7% | 2.81 KiB → 4.09 KiB |   59 → 83 | `java.lang.invoke.MemberName ← (GC root)`                                                                                                                                                                    |
| +100.0% |     +484 B |   1.2% → 2.0% |       484 B → 968 B |   11 → 22 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[6]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  +80.0% |     +352 B |   1.1% → 1.7% |       440 B → 792 B |   10 → 18 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.DirectMethodHandle`                                                                                                                                  |
|  +33.3% |     +220 B |   1.6% → 1.8% |       660 B → 880 B |   15 → 20 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[4]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |

##### `org.renaissance.core.BenchmarkSuite`

| Change |      Delta |      % |                Size | Instances | Path                                              |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------------------------- |
| +11.4% | +7.362 KiB | 100.0% | 64.8 KiB → 72.1 KiB |         1 | `org.renaissance.core.BenchmarkSuite ← (GC root)` |

##### `java.util.Optional`

| Change |      Delta |      % |                Size | Instances | Path                                                                     |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------------------------------------------------ |
| +11.6% | +7.362 KiB | 100.0% | 63.3 KiB → 70.7 KiB |         1 | `java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |

##### `jdk.internal.util.WeakReferenceKey`

|  Change |  Delta |           % |             Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | -----: | ----------: | ---------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +866.7% | +936 B | 0.5% → 3.6% | 108 B → 1.02 KiB |    3 → 29 | `jdk.internal.util.WeakReferenceKey ←(several paths)– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                                                                                                                                                                   |
| +133.3% |  +48 B | 0.2% → 0.3% |      36 B → 84 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[414]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |
|  -57.1% |  -48 B | 0.4% → 0.1% |      84 B → 36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←.next– java.util.concurrent.ConcurrentHashMap$Node ←[414]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| removed |  -36 B | 0.2% → 0.0% |       36 B → 0 B |     1 → 0 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[94]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                      |
| removed |  -36 B | 0.2% → 0.0% |       36 B → 0 B |     1 → 0 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[85]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                      |

##### `java.lang.invoke.Invokers`

| Change |      Delta |      % |               Size | Instances | Path                                                                |
| -----: | ---------: | -----: | -----------------: | --------: | ------------------------------------------------------------------- |
| +58.8% | +5.234 KiB | 100.0% | 8.9 KiB → 14.1 KiB |   17 → 27 | `java.lang.invoke.Invokers ←.invokers– java.lang.invoke.MethodType` |

##### `java.lang.Object[]`

|  Change |        Delta |             % |               Size | Instances | Path                                                                                                                                                                             |
| ------: | -----------: | ------------: | -----------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -85.4% |   -4.768 MiB | 87.9% → 38.4% | 5.58 MiB → 834 KiB |     2 → 1 | `java.lang.Object[] ←.elementData– java.util.ArrayList`                                                                                                                          |
| +242.8% | +110.664 KiB |   0.7% → 7.2% | 45.6 KiB → 156 KiB |    12 → 1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                |
|     new |   +78.64 KiB |   0.0% → 3.6% |     0 B → 78.6 KiB |     0 → 1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[6]– java.util.HashMap$Node[]`                            |
|     new |  +78.632 KiB |   0.0% → 3.6% |     0 B → 78.6 KiB |     0 → 1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[6]– java.util.HashMap$Node[] ←.table– java.util.HashMap` |
|     new |  +78.125 KiB |   0.0% → 3.6% |     0 B → 78.1 KiB |     0 → 1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node`                                                                                          |

##### `java.util.ArrayList`

|  Change |        Delta |             % |               Size | Instances | Path                                                                                                                                           |
| ------: | -----------: | ------------: | -----------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
|  -85.4% |   -4.768 MiB | 93.6% → 46.4% | 5.58 MiB → 834 KiB |     2 → 1 | `java.util.ArrayList ← (GC root)`                                                                                                              |
| +241.4% | +110.492 KiB |   0.7% → 8.7% | 45.8 KiB → 156 KiB |    12 → 1 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                |
|     new |  +78.656 KiB |   0.0% → 4.4% |     0 B → 78.7 KiB |     0 → 1 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[6]– java.util.HashMap$Node[]`                            |
|     new |  +78.648 KiB |   0.0% → 4.4% |     0 B → 78.6 KiB |     0 → 1 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[6]– java.util.HashMap$Node[] ←.table– java.util.HashMap` |
|     new |   +78.14 KiB |   0.0% → 4.4% |     0 B → 78.1 KiB |     0 → 1 | `java.util.ArrayList ←.value– java.util.HashMap$Node`                                                                                          |

##### `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`

| Change |       Delta |      % |             Size | Instances | Path                                                                   |
| -----: | ----------: | -----: | ---------------: | --------: | ---------------------------------------------------------------------- |
| -99.8% | -71.136 KiB | 100.0% | 71.3 KiB → 120 B |    45 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask ← (GC root)` |

##### `int[]`

|  Change |       Delta |              % |                Size | Instances | Path                                                                                                                                         |
| ------: | ----------: | -------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| +117.4% | +92.984 KiB | 49.8% → 119.1% |  79.2 KiB → 172 KiB | 898 → 738 | `int[] ← (GC root)`                                                                                                                          |
|   +0.6% |      +588 B |  60.8% → 67.3% | 96.7 KiB → 97.3 KiB |        10 | `int[] ←.entries– java.util.zip.ZipFile$Source`                                                                                              |
| removed |      -104 B |    0.1% → 0.0% |         104 B → 0 B |     1 → 0 | `int[] ←.data– jdk.internal.math.FDBigInteger ←[332]– jdk.internal.math.FDBigInteger[] ←[2]– java.lang.Object[] ←[2221]– java.lang.Object[]` |
| removed |      -104 B |    0.1% → 0.0% |         104 B → 0 B |     1 → 0 | `int[] ←.data– jdk.internal.math.FDBigInteger ←[333]– jdk.internal.math.FDBigInteger[] ←[2]– java.lang.Object[] ←[2221]– java.lang.Object[]` |
| removed |      -104 B |    0.1% → 0.0% |         104 B → 0 B |     1 → 0 | `int[] ←.data– jdk.internal.math.FDBigInteger ←[334]– jdk.internal.math.FDBigInteger[] ←[2]– java.lang.Object[] ←[2221]– java.lang.Object[]` |

##### `java.lang.invoke.DirectMethodHandle$Special`

|  Change |  Delta |           % |        Size | Instances | Path                                                                                                                                             |
| ------: | -----: | ----------: | ----------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed | -141 B | 1.7% → 0.0% | 141 B → 0 B |     1 → 0 | `java.lang.invoke.DirectMethodHandle$Special ←[30]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.harness.RenaissanceSuite$` |
| removed | -141 B | 1.7% → 0.0% | 141 B → 0 B |     1 → 0 | `java.lang.invoke.DirectMethodHandle$Special ←[28]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.harness.RenaissanceSuite$` |
|     new | +139 B | 0.0% → 1.8% | 0 B → 139 B |     0 → 1 | `java.lang.invoke.DirectMethodHandle$Special ←[27]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.jdk.concurrent.FjKmeans`   |
| removed | -136 B | 1.7% → 0.0% | 136 B → 0 B |     1 → 0 | `java.lang.invoke.DirectMethodHandle$Special ←[25]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.harness.RenaissanceSuite$` |
| removed | -134 B | 1.6% → 0.0% | 134 B → 0 B |     1 → 0 | `java.lang.invoke.DirectMethodHandle$Special ←[1]– java.lang.Object[] ←.<resolved_references>– class scala.runtime.LazyVals$`                    |

##### `jdk.internal.loader.URLClassPath`

| Change | Delta |             % |                Size | Instances | Path                                                              |
| -----: | ----: | ------------: | ------------------: | --------: | ----------------------------------------------------------------- |
|  -1.5% | -86 B | 87.2% → 87.1% | 5.56 KiB → 5.48 KiB |         2 | `jdk.internal.loader.URLClassPath ←.ucp– java.net.URLClassLoader` |

##### `java.lang.invoke.LambdaForm$Name[][]`

| Change | Delta |      % |                Size | Instances | Path                                                                                           |
| -----: | ----: | -----: | ------------------: | --------: | ---------------------------------------------------------------------------------------------- |
|  -5.1% | -68 B | 100.0% | 1.29 KiB → 1.23 KiB |         1 | `java.lang.invoke.LambdaForm$Name[][] ←.INTERNED_ARGUMENTS– class java.lang.invoke.LambdaForm` |

##### `java.util.concurrent.ConcurrentHashMap$CounterCell[]`

|  Change | Delta |             % |       Size | Instances | Path                                                                                                                                                                                                                                               |
| ------: | ----: | ------------: | ---------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |     1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell[] ←.counterCells– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |

##### `java.util.concurrent.ConcurrentHashMap$CounterCell`

|  Change | Delta |            % |      Size | Instances | Path                                                                                                                                                                                                                                                                                                        |
| ------: | ----: | -----------: | --------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |  -8 B | 50.0% → 0.0% | 8 B → 0 B |     1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell ←[1]– java.util.concurrent.ConcurrentHashMap$CounterCell[] ←.counterCells– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| removed |  -8 B | 50.0% → 0.0% | 8 B → 0 B |     1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell ←[0]– java.util.concurrent.ConcurrentHashMap$CounterCell[] ←.counterCells– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |

##### `org.renaissance.harness.RenaissanceSuite$$$Lambda`

| Change | Delta |      % |        Size | Instances | Path                                                            |
| -----: | ----: | -----: | ----------: | --------: | --------------------------------------------------------------- |
| -16.7% |  -8 B | 100.0% | 48 B → 40 B |         1 | `org.renaissance.harness.RenaissanceSuite$$$Lambda ← (GC root)` |

##### `java.lang.Long[]`

| Change | Delta |      % |               Size | Instances | Path                                                       |
| -----: | ----: | -----: | -----------------: | --------: | ---------------------------------------------------------- |
|  -0.2% |  -8 B | 100.0% | 3.91 KiB → 3.9 KiB |         1 | `java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
