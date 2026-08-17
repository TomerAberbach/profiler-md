# Heap snapshot diff

Allocated 13.4 MiB → 12.9 MiB (-480.98 KiB, -3.5%) across 700,372 → 700,479 nodes and 852,764 → 790,411 edges.

| Category           | Change |        Delta |             % |                Size |             Nodes |
| ------------------ | -----: | -----------: | ------------: | ------------------: | ----------------: |
| Array              |  -5.9% | -482.794 KiB | 59.4% → 57.9% | 7.94 MiB → 7.47 MiB | 130,134 → 130,173 |
| Number             |   0.0% |          0 B | 28.5% → 29.6% |            3.82 MiB |           501,096 |
| Object             |  +0.2% |   +1.984 KiB |   9.4% → 9.8% |            1.26 MiB |   43,416 → 43,510 |
| String             |  -0.1% |       -182 B |   2.3% → 2.4% |             314 KiB |   22,945 → 22,932 |
| Object shape       |    ~0% |         +8 B |          0.3% |            43.7 KiB |     2,685 → 2,672 |
| Big number         |   0.0% |          0 B |         <0.1% |            2.52 KiB |                92 |
| Regular expression |   0.0% |          0 B |         <0.1% |               333 B |                 3 |
| Synthetic          |      — |          0 B |          0.0% |                 0 B |                 1 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

| Change |      Delta |            % |                Size |       Instances | Constructor                                                |
| -----: | ---------: | -----------: | ------------------: | --------------: | ---------------------------------------------------------- |
|  +2.8% | +5.308 KiB |  1.4% → 1.5% |   188 KiB → 193 KiB |   1,929 → 1,941 | `int[]`                                                    |
|    new | +3.687 KiB | 0.0% → <0.1% |      0 B → 3.69 KiB |          0 → 59 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +0.6% |  +1.64 KiB |  2.0% → 2.1% |   276 KiB → 278 KiB | 10,093 → 10,153 | `java.util.HashMap$Node`                                   |
|  +0.6% |     +1 KiB |         1.3% |   175 KiB → 176 KiB |       410 → 422 | `java.util.HashMap$Node[]`                                 |
| +48.6% |     +864 B |        <0.1% | 1.73 KiB → 2.58 KiB |       111 → 165 | `java.util.ArrayList`                                      |
|  +1.8% |     +336 B |         0.1% | 17.9 KiB → 18.2 KiB |       381 → 388 | `java.util.HashMap`                                        |
|    ~0% |       +8 B |         0.3% |            43.7 KiB |   2,685 → 2,672 | `java.lang.Class`                                          |

##### Array

| Change |      Delta |           % |              Size |     Instances | Constructor                |
| -----: | ---------: | ----------: | ----------------: | ------------: | -------------------------- |
|  +2.8% | +5.308 KiB | 1.4% → 1.5% | 188 KiB → 193 KiB | 1,929 → 1,941 | `int[]`                    |
|  +0.6% |     +1 KiB |        1.3% | 175 KiB → 176 KiB |     410 → 422 | `java.util.HashMap$Node[]` |

##### Object

| Change |      Delta |            % |                Size |       Instances | Constructor                                                |
| -----: | ---------: | -----------: | ------------------: | --------------: | ---------------------------------------------------------- |
|    new | +3.687 KiB | 0.0% → <0.1% |      0 B → 3.69 KiB |          0 → 59 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +0.6% |  +1.64 KiB |  2.0% → 2.1% |   276 KiB → 278 KiB | 10,093 → 10,153 | `java.util.HashMap$Node`                                   |
| +48.6% |     +864 B |        <0.1% | 1.73 KiB → 2.58 KiB |       111 → 165 | `java.util.ArrayList`                                      |
|  +1.8% |     +336 B |         0.1% | 17.9 KiB → 18.2 KiB |       381 → 388 | `java.util.HashMap`                                        |

#### Improvements

Constructors with the largest decrease in self size.

|  Change |        Delta |             % |                Size |       Instances | Constructor                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- |
|  -25.2% | -487.273 KiB | 14.1% → 10.9% | 1.89 MiB → 1.41 MiB |   1,915 → 1,969 | `java.lang.Object[]`                                      |
| removed |   -3.992 KiB |  <0.1% → 0.0% |      3.99 KiB → 0 B |          73 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -64.1% |     -1,000 B |         <0.1% |    1.52 KiB → 560 B |          32 → 7 | `double[]`                                                |
|   -0.1% |       -858 B | 11.5% → 12.0% |            1.54 MiB | 23,691 → 23,678 | `byte[]`                                                  |
|  -88.9% |       -448 B |         <0.1% |        504 B → 56 B |           9 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|   -0.1% |       -182 B |   2.3% → 2.4% |             314 KiB | 22,945 → 22,932 | `java.lang.String`                                        |
|  -75.0% |        -72 B |         <0.1% |         96 B → 24 B |           4 → 1 | `java.util.concurrent.ForkJoinTask$Aux`                   |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |           1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell[]`    |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |           2 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell`      |

##### Array

|  Change |        Delta |             % |                Size |       Instances | Constructor                                            |
| ------: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------------ |
|  -25.2% | -487.273 KiB | 14.1% → 10.9% | 1.89 MiB → 1.41 MiB |   1,915 → 1,969 | `java.lang.Object[]`                                   |
|  -64.1% |     -1,000 B |         <0.1% |    1.52 KiB → 560 B |          32 → 7 | `double[]`                                             |
|   -0.1% |       -858 B | 11.5% → 12.0% |            1.54 MiB | 23,691 → 23,678 | `byte[]`                                               |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |           1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell[]` |

##### Object

|  Change |      Delta |            % |           Size | Instances | Constructor                                               |
| ------: | ---------: | -----------: | -------------: | --------: | --------------------------------------------------------- |
| removed | -3.992 KiB | <0.1% → 0.0% | 3.99 KiB → 0 B |    73 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -88.9% |     -448 B |        <0.1% |   504 B → 56 B |     9 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|  -75.0% |      -72 B |        <0.1% |    96 B → 24 B |     4 → 1 | `java.util.concurrent.ForkJoinTask$Aux`                   |
| removed |      -16 B | <0.1% → 0.0% |     16 B → 0 B |     2 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell`      |

##### String

| Change |  Delta |           % |    Size |       Instances | Constructor        |
| -----: | -----: | ----------: | ------: | --------------: | ------------------ |
|  -0.1% | -182 B | 2.3% → 2.4% | 314 KiB | 22,945 → 22,932 | `java.lang.String` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

|  Change |        Delta |             % |                Size |       Instances | Constructor                                                |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------- |
| +256.8% |   +4.292 MiB | 12.5% → 46.2% | 1.67 MiB → 5.96 MiB |       111 → 165 | `java.util.ArrayList`                                      |
| +208.6% |   +4.291 MiB | 15.4% → 49.2% | 2.06 MiB → 6.35 MiB |   1,915 → 1,969 | `java.lang.Object[]`                                       |
|  +21.2% | +297.916 KiB | 10.3% → 12.9% | 1.37 MiB → 1.66 MiB |       381 → 388 | `java.util.HashMap`                                        |
|  +21.3% | +297.588 KiB | 10.2% → 12.8% | 1.36 MiB → 1.66 MiB |       410 → 422 | `java.util.HashMap$Node[]`                                 |
|  +23.6% | +296.588 KiB |  9.2% → 11.7% | 1.23 MiB → 1.52 MiB | 10,093 → 10,153 | `java.util.HashMap$Node`                                   |
|  +14.9% |  +21.363 KiB |   1.1% → 1.3% |   144 KiB → 165 KiB |   1,929 → 1,941 | `int[]`                                                    |
|     new |   +3.687 KiB |  0.0% → <0.1% |      0 B → 3.69 KiB |          0 → 59 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Array

|  Change |        Delta |             % |                Size |     Instances | Constructor                |
| ------: | -----------: | ------------: | ------------------: | ------------: | -------------------------- |
| +208.6% |   +4.291 MiB | 15.4% → 49.2% | 2.06 MiB → 6.35 MiB | 1,915 → 1,969 | `java.lang.Object[]`       |
|  +21.3% | +297.588 KiB | 10.2% → 12.8% | 1.36 MiB → 1.66 MiB |     410 → 422 | `java.util.HashMap$Node[]` |
|  +14.9% |  +21.363 KiB |   1.1% → 1.3% |   144 KiB → 165 KiB | 1,929 → 1,941 | `int[]`                    |

##### Object

|  Change |        Delta |             % |                Size |       Instances | Constructor                                                |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------- |
| +256.8% |   +4.292 MiB | 12.5% → 46.2% | 1.67 MiB → 5.96 MiB |       111 → 165 | `java.util.ArrayList`                                      |
|  +21.2% | +297.916 KiB | 10.3% → 12.9% | 1.37 MiB → 1.66 MiB |       381 → 388 | `java.util.HashMap`                                        |
|  +23.6% | +296.588 KiB |  9.2% → 11.7% | 1.23 MiB → 1.52 MiB | 10,093 → 10,153 | `java.util.HashMap$Node`                                   |
|     new |   +3.687 KiB |  0.0% → <0.1% |      0 B → 3.69 KiB |          0 → 59 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

#### Improvements

Constructors with the largest decrease in retained size.

|  Change |      Delta |             % |                Size |       Instances | Constructor                                               |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- |
| removed | -4.226 KiB |  <0.1% → 0.0% |      4.23 KiB → 0 B |          73 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -64.1% |   -1,000 B |         <0.1% |    1.52 KiB → 560 B |          32 → 7 | `double[]`                                                |
|  -37.0% |     -456 B |         <0.1% |     1.2 KiB → 777 B |               1 | `scala.collection.immutable.VectorBuilder`                |
|  -88.9% |     -448 B |         <0.1% |        504 B → 56 B |           9 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|  -75.0% |      -72 B |         <0.1% |         96 B → 24 B |           4 → 1 | `java.util.concurrent.ForkJoinTask$Aux`                   |
|     ~0% |      -32 B |   3.9% → 4.1% |             536 KiB |             119 | `java.util.concurrent.ConcurrentHashMap`                  |
|   -0.1% |      -32 B |          0.4% | 55.7 KiB → 55.6 KiB |               1 | `jdk.internal.util.ReferencedKeySet`                      |
|   -0.1% |      -32 B |          0.4% |            55.6 KiB |               1 | `jdk.internal.util.ReferencedKeyMap`                      |
| removed |      -32 B |  <0.1% → 0.0% |          32 B → 0 B |           1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell[]`    |
|     ~0% |      -24 B |   7.1% → 7.3% |             969 KiB |   2,685 → 2,672 | `java.lang.Class`                                         |
|     ~0% |      -20 B | 11.3% → 11.7% |            1.51 MiB | 23,691 → 23,678 | `byte[]`                                                  |
| removed |      -16 B |  <0.1% → 0.0% |          16 B → 0 B |           2 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell`      |
|     ~0% |      -15 B |   6.9% → 7.2% |             951 KiB | 22,945 → 22,932 | `java.lang.String`                                        |
|     ~0% |      -10 B |   1.0% → 1.1% |             139 KiB |               2 | `java.net.URLClassLoader`                                 |
|   -0.2% |      -10 B |         <0.1% |            6.42 KiB |               3 | `jdk.internal.loader.URLClassPath`                        |
|   -0.1% |       -5 B |         <0.1% |  3.61 KiB → 3.6 KiB |              22 | `java.net.URL`                                            |
|   -0.2% |       -5 B |         <0.1% |            3.04 KiB |              10 | `jdk.internal.loader.URLClassPath$JarLoader`              |
|   -0.2% |       -4 B |         <0.1% |            1.72 KiB |              13 | `java.security.CodeSource`                                |
|   -0.1% |       -1 B |         <0.1% |            1.49 KiB |              19 | `sun.nio.fs.UnixPath`                                     |

##### Array

|  Change |    Delta |             % |             Size |       Instances | Constructor                                            |
| ------: | -------: | ------------: | ---------------: | --------------: | ------------------------------------------------------ |
|  -64.1% | -1,000 B |         <0.1% | 1.52 KiB → 560 B |          32 → 7 | `double[]`                                             |
| removed |    -32 B |  <0.1% → 0.0% |       32 B → 0 B |           1 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell[]` |
|     ~0% |    -20 B | 11.3% → 11.7% |         1.51 MiB | 23,691 → 23,678 | `byte[]`                                               |

##### Object

|  Change |      Delta |            % |                Size | Instances | Constructor                                               |
| ------: | ---------: | -----------: | ------------------: | --------: | --------------------------------------------------------- |
| removed | -4.226 KiB | <0.1% → 0.0% |      4.23 KiB → 0 B |    73 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -37.0% |     -456 B |        <0.1% |     1.2 KiB → 777 B |         1 | `scala.collection.immutable.VectorBuilder`                |
|  -88.9% |     -448 B |        <0.1% |        504 B → 56 B |     9 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|  -75.0% |      -72 B |        <0.1% |         96 B → 24 B |     4 → 1 | `java.util.concurrent.ForkJoinTask$Aux`                   |
|     ~0% |      -32 B |  3.9% → 4.1% |             536 KiB |       119 | `java.util.concurrent.ConcurrentHashMap`                  |
|   -0.1% |      -32 B |         0.4% | 55.7 KiB → 55.6 KiB |         1 | `jdk.internal.util.ReferencedKeySet`                      |
|   -0.1% |      -32 B |         0.4% |            55.6 KiB |         1 | `jdk.internal.util.ReferencedKeyMap`                      |
| removed |      -16 B | <0.1% → 0.0% |          16 B → 0 B |     2 → 0 | `java.util.concurrent.ConcurrentHashMap$CounterCell`      |
|     ~0% |      -10 B |  1.0% → 1.1% |             139 KiB |         2 | `java.net.URLClassLoader`                                 |
|   -0.2% |      -10 B |        <0.1% |            6.42 KiB |         3 | `jdk.internal.loader.URLClassPath`                        |
|   -0.1% |       -5 B |        <0.1% |  3.61 KiB → 3.6 KiB |        22 | `java.net.URL`                                            |
|   -0.2% |       -5 B |        <0.1% |            3.04 KiB |        10 | `jdk.internal.loader.URLClassPath$JarLoader`              |
|   -0.2% |       -4 B |        <0.1% |            1.72 KiB |        13 | `java.security.CodeSource`                                |
|   -0.1% |       -1 B |        <0.1% |            1.49 KiB |        19 | `sun.nio.fs.UnixPath`                                     |

##### String

| Change | Delta |           % |    Size |       Instances | Constructor        |
| -----: | ----: | ----------: | ------: | --------------: | ------------------ |
|    ~0% | -15 B | 6.9% → 7.2% | 951 KiB | 22,945 → 22,932 | `java.lang.String` |
