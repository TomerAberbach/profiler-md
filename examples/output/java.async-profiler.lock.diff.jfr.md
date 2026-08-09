# Lock contention profile diff

Blocked 1.9ms → 1.6ms (-0.29ms, -15.2%) over 19 contentions → 10 contentions (98.9µs → 159.3µs per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library | -15.2% | -0.29ms | 100.0% | 1.9ms → 1.6ms |     19 → 10 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|  Change |   Delta |           % |           Time | Contentions | Function                                 | Location                          |
| ------: | ------: | ----------: | -------------: | ----------: | ---------------------------------------- | --------------------------------- |
| +578.8% | +0.02ms | 0.2% → 1.8% | 4.1µs → 28.0µs |           1 | `visitFile(Path, BasicFileAttributes)`   | `org.renaissance.core.DirUtils$1` |
| +578.8% | +0.02ms | 0.2% → 1.8% | 4.1µs → 28.0µs |           1 | `visitFile(Object, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1` |
|   +2.4% | +3.21µs | 7.2% → 8.7% |          0.1ms |       7 → 5 | `walkFileTree(Path, FileVisitor)`        | `java.nio.file.Files`             |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |             % |          Time | Contentions | Function                                | Location                                                               |
| ------: | ------: | ------------: | ------------: | ----------: | --------------------------------------- | ---------------------------------------------------------------------- |
|  -33.4% | -0.27ms | 42.7% → 33.5% | 0.8ms → 0.5ms |       5 → 2 | `join()`                                | `java.util.concurrent.ForkJoinTask`                                    |
|  -14.0% | -0.20ms | 76.3% → 77.4% | 1.4ms → 1.2ms |      11 → 4 | `computeClusterAverages()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -14.0% | -0.20ms | 76.3% → 77.4% | 1.4ms → 1.2ms |      11 → 4 | `computeDirectly()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -14.0% | -0.20ms | 76.3% → 77.4% | 1.4ms → 1.2ms |      11 → 4 | `compute()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed | -0.16ms |   8.5% → 0.0% |   0.2ms → 0ms |       7 → 0 | `boxed(double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -7.8% | -0.13ms | 85.6% → 93.1% | 1.6ms → 1.5ms |       7 → 6 | `loadClass(String)`                     | `java.lang.ClassLoader`                                                |
| removed | -0.12ms |   6.4% → 0.0% |   0.1ms → 0ms |       5 → 0 | `toArray(IntFunction)`                  | `java.util.stream.ReferencePipeline`                                   |
|  -19.0% | -0.08ms | 23.7% → 22.6% |         0.4ms |       8 → 6 | `deleteRecursively(Path, boolean)`      | `org.renaissance.core.DirUtils`                                        |
|  -19.0% | -0.08ms | 23.7% → 22.6% |         0.4ms |       8 → 6 | `deleteRecursively(Path)`               | `org.renaissance.core.DirUtils`                                        |
|  -19.0% | -0.08ms | 23.7% → 22.6% |         0.4ms |       8 → 6 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils`                                        |
|  -19.0% | -0.08ms | 23.7% → 22.6% |         0.4ms |       8 → 6 | `run()`                                 | `org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68`             |
|   -3.3% | -0.04ms | 67.8% → 77.4% | 1.3ms → 1.2ms |           4 | `average(List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed | -0.03ms |   1.4% → 0.0% |  27.0µs → 0ms |       1 → 0 | `invoke()`                              | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -0.03ms |   1.4% → 0.0% |  27.0µs → 0ms |       1 → 0 | `lambda$run$0(int, List, int)`          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -0.03ms |   1.4% → 0.0% |  27.0µs → 0ms |       1 → 0 | `call()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f801183d68` |
| removed | -0.02ms |   1.1% → 0.0% |  20.4µs → 0ms |       1 → 0 | `stream(double[])`                      | `java.util.Arrays`                                                     |
