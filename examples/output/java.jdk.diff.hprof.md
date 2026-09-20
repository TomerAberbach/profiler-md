# Heap snapshot diff

Allocated 13.4 MiB → 13.3 MiB (-12.499 KiB, -0.1%) across 700,290 → 700,716 nodes and 852,644 → 846,539 edges.

| Category           | Change |       Delta |           % |                Size |             Nodes |
| ------------------ | -----: | ----------: | ----------: | ------------------: | ----------------: |
| Array              |  -0.2% | -18.921 KiB |       59.3% | 7.93 MiB → 7.91 MiB | 130,115 → 130,256 |
| Number             |    ~0% |      +200 B |       28.6% |            3.82 MiB | 501,071 → 501,096 |
| Object             |  +0.5% |  +6.268 KiB | 9.4% → 9.5% | 1.26 MiB → 1.27 MiB |   43,399 → 43,665 |
| String             |    ~0% |       -42 B |        2.3% |   314 KiB → 313 KiB |   22,933 → 22,930 |
| Object shape       |   0.0% |         0 B |        0.3% |            43.7 KiB |     2,676 → 2,673 |
| Big number         |   0.0% |         0 B |       <0.1% |            2.52 KiB |                92 |
| Regular expression |   0.0% |         0 B |       <0.1% |               333 B |                 3 |
| Synthetic          |      — |         0 B |        0.0% |                 0 B |                 1 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

|  Change |       Delta |            % |                Size |         Instances | Constructor                                                |
| ------: | ----------: | -----------: | ------------------: | ----------------: | ---------------------------------------------------------- |
|  +10.7% | +18.203 KiB |  1.2% → 1.4% |   170 KiB → 189 KiB |     1,937 → 1,938 | `int[]`                                                    |
|   +1.3% |  +3.554 KiB |         2.0% |   276 KiB → 280 KiB |   10,093 → 10,223 | `java.util.HashMap$Node`                                   |
|     new |  +3.375 KiB | 0.0% → <0.1% |      0 B → 3.38 KiB |            0 → 54 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +1.2% |  +2.125 KiB |         1.3% |   175 KiB → 177 KiB |         410 → 436 | `java.util.HashMap$Node[]`                                 |
| +114.5% |  +1.968 KiB |        <0.1% | 1.72 KiB → 3.69 KiB |         110 → 236 | `java.util.ArrayList`                                      |
|   +5.8% |  +1.031 KiB |         0.1% | 17.8 KiB → 18.8 KiB |         380 → 402 | `java.util.HashMap`                                        |
|   +6.7% |      +512 B |         0.1% |     7.5 KiB → 8 KiB |           15 → 16 | `java.util.concurrent.ForkJoinTask[]`                      |
|     ~0% |      +200 B |        28.6% | 3.81 MiB → 3.82 MiB | 500,026 → 500,051 | `java.lang.Double`                                         |
|     ~0% |      +200 B |        28.6% | 3.81 MiB → 3.82 MiB | 100,005 → 100,010 | `java.lang.Double[]`                                       |
|   +7.1% |      +161 B |        <0.1% |  2.2 KiB → 2.36 KiB |           14 → 15 | `java.util.concurrent.ForkJoinWorkerThread`                |
| +300.0% |       +72 B |        <0.1% |         24 B → 96 B |             1 → 4 | `java.util.concurrent.ForkJoinTask$Aux`                    |
|   +6.7% |       +48 B |        <0.1% |       720 B → 768 B |           15 → 16 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   +3.3% |       +33 B |        <0.1% |      990 B → 1023 B |           30 → 31 | `java.lang.Thread$FieldHolder`                             |

##### Array

| Change |       Delta |           % |                Size |         Instances | Constructor                           |
| -----: | ----------: | ----------: | ------------------: | ----------------: | ------------------------------------- |
| +10.7% | +18.203 KiB | 1.2% → 1.4% |   170 KiB → 189 KiB |     1,937 → 1,938 | `int[]`                               |
|  +1.2% |  +2.125 KiB |        1.3% |   175 KiB → 177 KiB |         410 → 436 | `java.util.HashMap$Node[]`            |
|  +6.7% |      +512 B |        0.1% |     7.5 KiB → 8 KiB |           15 → 16 | `java.util.concurrent.ForkJoinTask[]` |
|    ~0% |      +200 B |       28.6% | 3.81 MiB → 3.82 MiB | 100,005 → 100,010 | `java.lang.Double[]`                  |

##### Number

| Change |  Delta |     % |                Size |         Instances | Constructor        |
| -----: | -----: | ----: | ------------------: | ----------------: | ------------------ |
|    ~0% | +200 B | 28.6% | 3.81 MiB → 3.82 MiB | 500,026 → 500,051 | `java.lang.Double` |

##### Object

|  Change |      Delta |            % |                Size |       Instances | Constructor                                                |
| ------: | ---------: | -----------: | ------------------: | --------------: | ---------------------------------------------------------- |
|   +1.3% | +3.554 KiB |         2.0% |   276 KiB → 280 KiB | 10,093 → 10,223 | `java.util.HashMap$Node`                                   |
|     new | +3.375 KiB | 0.0% → <0.1% |      0 B → 3.38 KiB |          0 → 54 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +114.5% | +1.968 KiB |        <0.1% | 1.72 KiB → 3.69 KiB |       110 → 236 | `java.util.ArrayList`                                      |
|   +5.8% | +1.031 KiB |         0.1% | 17.8 KiB → 18.8 KiB |       380 → 402 | `java.util.HashMap`                                        |
|   +7.1% |     +161 B |        <0.1% |  2.2 KiB → 2.36 KiB |         14 → 15 | `java.util.concurrent.ForkJoinWorkerThread`                |
| +300.0% |      +72 B |        <0.1% |         24 B → 96 B |           1 → 4 | `java.util.concurrent.ForkJoinTask$Aux`                    |
|   +6.7% |      +48 B |        <0.1% |       720 B → 768 B |         15 → 16 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   +3.3% |      +33 B |        <0.1% |      990 B → 1023 B |         30 → 31 | `java.lang.Thread$FieldHolder`                             |

#### Improvements

Constructors with the largest decrease in self size.

|  Change |       Delta |             % |                Size |       Instances | Constructor                                               |
| ------: | ----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- |
|   -2.0% | -39.101 KiB | 14.1% → 13.9% | 1.89 MiB → 1.85 MiB |   1,914 → 2,042 | `java.lang.Object[]`                                      |
| removed |  -3.445 KiB |  <0.1% → 0.0% |      3.45 KiB → 0 B |          63 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -54.8% |      -680 B |         <0.1% |    1.21 KiB → 560 B |          24 → 7 | `double[]`                                                |
|  -88.9% |      -448 B |         <0.1% |        504 B → 56 B |           9 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|     ~0% |      -184 B |         11.6% |            1.54 MiB | 23,679 → 23,676 | `byte[]`                                                  |
|   -0.1% |       -44 B |          0.2% | 30.6 KiB → 30.5 KiB |       711 → 710 | `java.lang.invoke.MemberName`                             |
|   -0.6% |       -43 B |          0.1% | 7.18 KiB → 7.14 KiB |       171 → 170 | `java.lang.invoke.DirectMethodHandle`                     |
|     ~0% |       -42 B |          2.3% |   314 KiB → 313 KiB | 22,933 → 22,930 | `java.lang.String`                                        |

##### Array

| Change |       Delta |             % |                Size |       Instances | Constructor          |
| -----: | ----------: | ------------: | ------------------: | --------------: | -------------------- |
|  -2.0% | -39.101 KiB | 14.1% → 13.9% | 1.89 MiB → 1.85 MiB |   1,914 → 2,042 | `java.lang.Object[]` |
| -54.8% |      -680 B |         <0.1% |    1.21 KiB → 560 B |          24 → 7 | `double[]`           |
|    ~0% |      -184 B |         11.6% |            1.54 MiB | 23,679 → 23,676 | `byte[]`             |

##### Object

|  Change |      Delta |            % |                Size | Instances | Constructor                                               |
| ------: | ---------: | -----------: | ------------------: | --------: | --------------------------------------------------------- |
| removed | -3.445 KiB | <0.1% → 0.0% |      3.45 KiB → 0 B |    63 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -88.9% |     -448 B |        <0.1% |        504 B → 56 B |     9 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|   -0.1% |      -44 B |         0.2% | 30.6 KiB → 30.5 KiB | 711 → 710 | `java.lang.invoke.MemberName`                             |
|   -0.6% |      -43 B |         0.1% | 7.18 KiB → 7.14 KiB | 171 → 170 | `java.lang.invoke.DirectMethodHandle`                     |

##### String

| Change | Delta |    % |              Size |       Instances | Constructor        |
| -----: | ----: | ---: | ----------------: | --------------: | ------------------ |
|    ~0% | -42 B | 2.3% | 314 KiB → 313 KiB | 22,933 → 22,930 | `java.lang.String` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

|  Change |          Delta |             % |                Size |         Instances | Constructor                                                |
| ------: | -------------: | ------------: | ------------------: | ----------------: | ---------------------------------------------------------- |
|  +47.9% |  +1,008.34 KiB | 15.4% → 22.8% | 2.06 MiB → 3.04 MiB |     1,914 → 2,042 | `java.lang.Object[]`                                       |
|  +58.5% | +1,000.601 KiB | 12.5% → 19.8% | 1.67 MiB → 2.65 MiB |         110 → 236 | `java.util.ArrayList`                                      |
|  +58.0% |   +728.204 KiB |  9.2% → 14.5% | 1.23 MiB → 1.94 MiB |   10,093 → 10,223 | `java.util.HashMap$Node`                                   |
|  +50.1% |    +700.86 KiB | 10.2% → 15.4% | 1.36 MiB → 2.05 MiB |         410 → 436 | `java.util.HashMap$Node[]`                                 |
|  +46.4% |   +652.637 KiB | 10.3% → 15.1% | 1.37 MiB → 2.01 MiB |         380 → 402 | `java.util.HashMap`                                        |
|     new |   +109.089 KiB |   0.0% → 0.8% |       0 B → 109 KiB |            0 → 54 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +12.7% |    +18.308 KiB |   1.1% → 1.2% |   144 KiB → 162 KiB |     1,937 → 1,938 | `int[]`                                                    |
|   +6.7% |         +560 B |          0.1% |  8.2 KiB → 8.75 KiB |           15 → 16 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   +6.7% |         +512 B |          0.1% |     7.5 KiB → 8 KiB |           15 → 16 | `java.util.concurrent.ForkJoinTask[]`                      |
|     ~0% |         +400 B | 57.1% → 57.2% |            7.63 MiB | 100,005 → 100,010 | `java.lang.Double[]`                                       |
|   +7.2% |         +232 B |         <0.1% | 3.16 KiB → 3.39 KiB |           14 → 15 | `java.util.concurrent.ForkJoinWorkerThread`                |
|     ~0% |         +200 B |         28.6% | 3.81 MiB → 3.82 MiB | 500,026 → 500,051 | `java.lang.Double`                                         |
| +300.0% |          +72 B |         <0.1% |         24 B → 96 B |             1 → 4 | `java.util.concurrent.ForkJoinTask$Aux`                    |
|   +3.5% |          +33 B |         <0.1% |       940 B → 973 B |           30 → 31 | `java.lang.Thread$FieldHolder`                             |
|     ~0% |          +20 B |         11.3% |            1.51 MiB |   23,679 → 23,676 | `byte[]`                                                   |
|     ~0% |          +19 B |          7.0% |             951 KiB |   22,933 → 22,930 | `java.lang.String`                                         |
|     ~0% |           +2 B |          1.0% |             139 KiB |                 2 | `java.net.URLClassLoader`                                  |
|   +0.1% |           +2 B |         <0.1% | 1.74 KiB → 1.75 KiB |                13 | `java.security.CodeSource`                                 |
|     ~0% |           +2 B |         <0.1% |            6.46 KiB |                 3 | `jdk.internal.loader.URLClassPath`                         |
|     ~0% |           +1 B |         <0.1% |            3.63 KiB |                22 | `java.net.URL`                                             |

##### Array

| Change |         Delta |             % |                Size |         Instances | Constructor                           |
| -----: | ------------: | ------------: | ------------------: | ----------------: | ------------------------------------- |
| +47.9% | +1,008.34 KiB | 15.4% → 22.8% | 2.06 MiB → 3.04 MiB |     1,914 → 2,042 | `java.lang.Object[]`                  |
| +50.1% |   +700.86 KiB | 10.2% → 15.4% | 1.36 MiB → 2.05 MiB |         410 → 436 | `java.util.HashMap$Node[]`            |
| +12.7% |   +18.308 KiB |   1.1% → 1.2% |   144 KiB → 162 KiB |     1,937 → 1,938 | `int[]`                               |
|  +6.7% |        +512 B |          0.1% |     7.5 KiB → 8 KiB |           15 → 16 | `java.util.concurrent.ForkJoinTask[]` |
|    ~0% |        +400 B | 57.1% → 57.2% |            7.63 MiB | 100,005 → 100,010 | `java.lang.Double[]`                  |
|    ~0% |         +20 B |         11.3% |            1.51 MiB |   23,679 → 23,676 | `byte[]`                              |

##### Number

| Change |  Delta |     % |                Size |         Instances | Constructor        |
| -----: | -----: | ----: | ------------------: | ----------------: | ------------------ |
|    ~0% | +200 B | 28.6% | 3.81 MiB → 3.82 MiB | 500,026 → 500,051 | `java.lang.Double` |

##### Object

|  Change |          Delta |             % |                Size |       Instances | Constructor                                                |
| ------: | -------------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------- |
|  +58.5% | +1,000.601 KiB | 12.5% → 19.8% | 1.67 MiB → 2.65 MiB |       110 → 236 | `java.util.ArrayList`                                      |
|  +58.0% |   +728.204 KiB |  9.2% → 14.5% | 1.23 MiB → 1.94 MiB | 10,093 → 10,223 | `java.util.HashMap$Node`                                   |
|  +46.4% |   +652.637 KiB | 10.3% → 15.1% | 1.37 MiB → 2.01 MiB |       380 → 402 | `java.util.HashMap`                                        |
|     new |   +109.089 KiB |   0.0% → 0.8% |       0 B → 109 KiB |          0 → 54 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +6.7% |         +560 B |          0.1% |  8.2 KiB → 8.75 KiB |         15 → 16 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   +7.2% |         +232 B |         <0.1% | 3.16 KiB → 3.39 KiB |         14 → 15 | `java.util.concurrent.ForkJoinWorkerThread`                |
| +300.0% |          +72 B |         <0.1% |         24 B → 96 B |           1 → 4 | `java.util.concurrent.ForkJoinTask$Aux`                    |
|   +3.5% |          +33 B |         <0.1% |       940 B → 973 B |         30 → 31 | `java.lang.Thread$FieldHolder`                             |
|     ~0% |           +2 B |          1.0% |             139 KiB |               2 | `java.net.URLClassLoader`                                  |
|   +0.1% |           +2 B |         <0.1% | 1.74 KiB → 1.75 KiB |              13 | `java.security.CodeSource`                                 |
|     ~0% |           +2 B |         <0.1% |            6.46 KiB |               3 | `jdk.internal.loader.URLClassPath`                         |
|     ~0% |           +1 B |         <0.1% |            3.63 KiB |              22 | `java.net.URL`                                             |
|     ~0% |           +1 B |         <0.1% |            3.06 KiB |              10 | `jdk.internal.loader.URLClassPath$JarLoader`               |

##### String

| Change | Delta |    % |    Size |       Instances | Constructor        |
| -----: | ----: | ---: | ------: | --------------: | ------------------ |
|    ~0% | +19 B | 7.0% | 951 KiB | 22,933 → 22,930 | `java.lang.String` |

#### Improvements

Constructors with the largest decrease in retained size.

|  Change |      Delta |            % |                Size |     Instances | Constructor                                                 |
| ------: | ---------: | -----------: | ------------------: | ------------: | ----------------------------------------------------------- |
| removed | -3.445 KiB | <0.1% → 0.0% |      3.45 KiB → 0 B |        63 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`   |
|  -54.8% |     -680 B |        <0.1% |    1.21 KiB → 560 B |        24 → 7 | `double[]`                                                  |
|  -88.9% |     -448 B |        <0.1% |        504 B → 56 B |         9 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`      |
|  -30.0% |     -256 B |        <0.1% |       852 B → 596 B |             2 | `java.util.concurrent.ForkJoinPool`                         |
|     ~0% |     -151 B |         7.1% |   969 KiB → 968 KiB | 2,676 → 2,673 | `java.lang.Class`                                           |
|     ~0% |     -108 B |         3.9% |             536 KiB |           119 | `java.util.concurrent.ConcurrentHashMap`                    |
|     ~0% |     -108 B |         3.9% |             527 KiB |            94 | `java.util.concurrent.ConcurrentHashMap$Node[]`             |
|     ~0% |     -108 B |         2.4% |             334 KiB |         6,259 | `java.util.concurrent.ConcurrentHashMap$Node`               |
|   -0.6% |     -108 B |         0.1% | 18.7 KiB → 18.6 KiB |     171 → 170 | `java.lang.invoke.DirectMethodHandle`                       |
|   -0.2% |      -65 B |         0.3% |   39.1 KiB → 39 KiB |     711 → 710 | `java.lang.invoke.MemberName`                               |
|  -46.2% |      -24 B |        <0.1% |         52 B → 28 B |             1 | `java.util.concurrent.ForkJoinTask$AdaptedCallable`         |
|   -0.5% |       -2 B |        <0.1% |       380 B → 378 B |             1 | `org.renaissance.core.BenchmarkSuite$SuiteBenchmarkContext` |
|   -0.1% |       -2 B |        <0.1% |            1.49 KiB |            19 | `sun.nio.fs.UnixPath`                                       |

##### Array

| Change |  Delta |     % |             Size | Instances | Constructor                                     |
| -----: | -----: | ----: | ---------------: | --------: | ----------------------------------------------- |
| -54.8% | -680 B | <0.1% | 1.21 KiB → 560 B |    24 → 7 | `double[]`                                      |
|    ~0% | -108 B |  3.9% |          527 KiB |        94 | `java.util.concurrent.ConcurrentHashMap$Node[]` |

##### Object

|  Change |      Delta |            % |                Size | Instances | Constructor                                                 |
| ------: | ---------: | -----------: | ------------------: | --------: | ----------------------------------------------------------- |
| removed | -3.445 KiB | <0.1% → 0.0% |      3.45 KiB → 0 B |    63 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`   |
|  -88.9% |     -448 B |        <0.1% |        504 B → 56 B |     9 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`      |
|  -30.0% |     -256 B |        <0.1% |       852 B → 596 B |         2 | `java.util.concurrent.ForkJoinPool`                         |
|     ~0% |     -108 B |         3.9% |             536 KiB |       119 | `java.util.concurrent.ConcurrentHashMap`                    |
|     ~0% |     -108 B |         2.4% |             334 KiB |     6,259 | `java.util.concurrent.ConcurrentHashMap$Node`               |
|   -0.6% |     -108 B |         0.1% | 18.7 KiB → 18.6 KiB | 171 → 170 | `java.lang.invoke.DirectMethodHandle`                       |
|   -0.2% |      -65 B |         0.3% |   39.1 KiB → 39 KiB | 711 → 710 | `java.lang.invoke.MemberName`                               |
|  -46.2% |      -24 B |        <0.1% |         52 B → 28 B |         1 | `java.util.concurrent.ForkJoinTask$AdaptedCallable`         |
|   -0.5% |       -2 B |        <0.1% |       380 B → 378 B |         1 | `org.renaissance.core.BenchmarkSuite$SuiteBenchmarkContext` |
|   -0.1% |       -2 B |        <0.1% |            1.49 KiB |        19 | `sun.nio.fs.UnixPath`                                       |
