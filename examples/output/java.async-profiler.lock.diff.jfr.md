# Lock contention profile diff

Blocked 1.9ms → 2.7ms (+0.80ms, +42.6%) over 15 contentions → 19 contentions (125.0µs → 140.7µs per contention).

| Category         | Change |   Delta |              % |          Time | Contentions |
| ---------------- | -----: | ------: | -------------: | ------------: | ----------: |
| Standard library | +42.0% | +0.79ms | 100.0% → 99.6% | 1.9ms → 2.7ms |     15 → 18 |
| Ours             |    new | +0.01ms |    0.0% → 0.4% |  0ms → 10.3µs |       0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

|  Change |   Delta |             % |          Time | Contentions | Function                                    | Location                                               |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------- | ------------------------------------------------------ |
|  +54.0% | +0.68ms | 67.5% → 72.9% | 1.3ms → 1.9ms |           4 | `loadClass(String, boolean)`                | `java.lang.ClassLoader`                                |
|     new | +0.28ms |  0.0% → 10.5% |   0ms → 0.3ms |       0 → 5 | `mapToObj(DoubleFunction, int)`             | `java.util.stream.DoublePipeline`                      |
|     new | +0.21ms |   0.0% → 7.7% |   0ms → 0.2ms |       0 → 5 | `opWrapSink(int, Sink)`                     | `java.util.stream.DoublePipeline$1`                    |
| +113.5% | +0.09ms |   4.2% → 6.2% | 0.1ms → 0.2ms |       3 → 1 | `<init>(boolean)`                           | `java.util.concurrent.locks.ReentrantReadWriteLock`    |
|     new | +0.02ms |   0.0% → 0.8% |  0ms → 21.9µs |       0 → 1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files`                                  |
|     new | +0.01ms |   0.0% → 0.5% |  0ms → 12.3µs |       0 → 1 | `<clinit>()`                                | `java.nio.file.FileVisitResult`                        |
|     new | +0.01ms |   0.0% → 0.4% |  0ms → 10.3µs |       0 → 1 | `average(List)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function                                    | Location                                            |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------- | --------------------------------------------------- |
|  +54.0% | +0.68ms | 67.5% → 72.9% | 1.3ms → 1.9ms |           4 | `loadClass(String, boolean)`                | `java.lang.ClassLoader`                             |
|     new | +0.28ms |  0.0% → 10.5% |   0ms → 0.3ms |       0 → 5 | `mapToObj(DoubleFunction, int)`             | `java.util.stream.DoublePipeline`                   |
|     new | +0.21ms |   0.0% → 7.7% |   0ms → 0.2ms |       0 → 5 | `opWrapSink(int, Sink)`                     | `java.util.stream.DoublePipeline$1`                 |
| +113.5% | +0.09ms |   4.2% → 6.2% | 0.1ms → 0.2ms |       3 → 1 | `<init>(boolean)`                           | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|     new | +0.02ms |   0.0% → 0.8% |  0ms → 21.9µs |       0 → 1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files`                               |
|     new | +0.01ms |   0.0% → 0.5% |  0ms → 12.3µs |       0 → 1 | `<clinit>()`                                | `java.nio.file.FileVisitResult`                     |

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

|  Change |   Delta |            % |           Time | Contentions | Function                           | Location                                 |
| ------: | ------: | -----------: | -------------: | ----------: | ---------------------------------- | ---------------------------------------- |
|  -93.5% | -0.38ms | 21.9% → 1.0% | 0.4ms → 26.5µs |       2 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |
| removed | -0.05ms |  2.7% → 0.0% |    0.1ms → 0ms |       1 → 0 | `getDeclaredMethods0(boolean)`     | `java.lang.Class`                        |
| removed | -0.02ms |  1.3% → 0.0% |   24.5µs → 0ms |       1 → 0 | `$values()`                        | `java.nio.file.FileVisitOption`          |
| removed | -0.02ms |  0.9% → 0.0% |   17.0µs → 0ms |       1 → 0 | `visit(Path, boolean, boolean)`    | `java.nio.file.FileTreeWalker`           |
| removed | -0.01ms |  0.6% → 0.0% |   11.9µs → 0ms |       1 → 0 | `newDirectoryStream(Path)`         | `java.nio.file.Files`                    |
| removed | -0.01ms |  0.5% → 0.0% |    9.8µs → 0ms |       1 → 0 | `$values()`                        | `java.nio.file.FileTreeWalker$EventType` |
| removed | -0.01ms |  0.3% → 0.0% |    6.5µs → 0ms |       1 → 0 | `<init>(Collection, int)`          | `java.nio.file.FileTreeWalker`           |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |   Delta |             % |          Time | Contentions | Function                                             | Location                                               |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | ------------------------------------------------------ |
| +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
| +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                   |
| +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                    |
| +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                    |
| +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                    |
| +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`            |
| +85.0% | +0.71ms | 44.8% → 58.1% | 0.8ms → 1.6ms |       2 → 9 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| +85.0% | +0.71ms | 44.8% → 58.1% | 0.8ms → 1.6ms |       2 → 9 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                    |
| +85.0% | +0.71ms | 44.8% → 58.1% | 0.8ms → 1.6ms |       2 → 9 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                    |
| +54.8% | +0.69ms | 67.5% → 73.3% | 1.3ms → 2.0ms |       4 → 5 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +54.0% | +0.68ms | 67.5% → 72.9% | 1.3ms → 1.9ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                |
|    new | +0.49ms |  0.0% → 18.2% |   0ms → 0.5ms |      0 → 10 | `boxed(double[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +17.9% | +0.30ms | 89.4% → 73.9% | 1.7ms → 2.0ms |       6 → 5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                |
|    new | +0.28ms |  0.0% → 10.5% |   0ms → 0.3ms |       0 → 5 | `mapToObj(DoubleFunction, int)`                      | `java.util.stream.DoublePipeline`                      |
|    new | +0.28ms |  0.0% → 10.5% |   0ms → 0.3ms |       0 → 5 | `boxed()`                                            | `java.util.stream.DoublePipeline`                      |
|    new | +0.21ms |   0.0% → 7.7% |   0ms → 0.2ms |       0 → 5 | `opWrapSink(int, Sink)`                              | `java.util.stream.DoublePipeline$1`                    |
|    new | +0.21ms |   0.0% → 7.7% |   0ms → 0.2ms |       0 → 5 | `wrapSink(Sink)`                                     | `java.util.stream.AbstractPipeline`                    |

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function                                             | Location                                            |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------------- |
|  +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
|  +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
|  +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
|  +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
|  +93.2% | +1.18ms | 67.5% → 91.5% | 1.3ms → 2.4ms |      4 → 15 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
|  +85.0% | +0.71ms | 44.8% → 58.1% | 0.8ms → 1.6ms |       2 → 9 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  +85.0% | +0.71ms | 44.8% → 58.1% | 0.8ms → 1.6ms |       2 → 9 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
|  +85.0% | +0.71ms | 44.8% → 58.1% | 0.8ms → 1.6ms |       2 → 9 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
|  +54.0% | +0.68ms | 67.5% → 72.9% | 1.3ms → 1.9ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                             |
|  +17.9% | +0.30ms | 89.4% → 73.9% | 1.7ms → 2.0ms |       6 → 5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                             |
|     new | +0.28ms |  0.0% → 10.5% |   0ms → 0.3ms |       0 → 5 | `mapToObj(DoubleFunction, int)`                      | `java.util.stream.DoublePipeline`                   |
|     new | +0.28ms |  0.0% → 10.5% |   0ms → 0.3ms |       0 → 5 | `boxed()`                                            | `java.util.stream.DoublePipeline`                   |
|     new | +0.21ms |   0.0% → 7.7% |   0ms → 0.2ms |       0 → 5 | `opWrapSink(int, Sink)`                              | `java.util.stream.DoublePipeline$1`                 |
|     new | +0.21ms |   0.0% → 7.7% |   0ms → 0.2ms |       0 → 5 | `wrapSink(Sink)`                                     | `java.util.stream.AbstractPipeline`                 |
|     new | +0.21ms |   0.0% → 7.7% |   0ms → 0.2ms |       0 → 5 | `wrapAndCopyInto(Sink, Spliterator)`                 | `java.util.stream.AbstractPipeline`                 |
|     new | +0.21ms |   0.0% → 7.7% |   0ms → 0.2ms |       0 → 5 | `evaluate(Spliterator, boolean, IntFunction)`        | `java.util.stream.AbstractPipeline`                 |
|     new | +0.21ms |   0.0% → 7.7% |   0ms → 0.2ms |       0 → 5 | `evaluateToArrayNode(IntFunction)`                   | `java.util.stream.AbstractPipeline`                 |
|     new | +0.21ms |   0.0% → 7.7% |   0ms → 0.2ms |       0 → 5 | `toArray(IntFunction)`                               | `java.util.stream.ReferencePipeline`                |
| +113.5% | +0.09ms |   4.2% → 6.2% | 0.1ms → 0.2ms |       3 → 1 | `<init>(boolean)`                                    | `java.util.concurrent.locks.ReentrantReadWriteLock` |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |            % |           Time | Contentions | Function                                        | Location                                                   |
| ------: | ------: | -----------: | -------------: | ----------: | ----------------------------------------------- | ---------------------------------------------------------- |
|  -93.5% | -0.38ms | 21.9% → 1.0% | 0.4ms → 26.5µs |       2 → 1 | `loadClassOrNull(String, boolean)`              | `jdk.internal.loader.BuiltinClassLoader`                   |
|  -93.5% | -0.38ms | 21.9% → 1.0% | 0.4ms → 26.5µs |       2 → 1 | `loadClass(String, boolean)`                    | `jdk.internal.loader.BuiltinClassLoader`                   |
|  -93.5% | -0.38ms | 21.9% → 1.0% | 0.4ms → 26.5µs |       2 → 1 | `loadClass(String, boolean)`                    | `jdk.internal.loader.ClassLoaders$AppClassLoader`          |
|  -62.7% | -0.38ms | 32.5% → 8.5% |  0.6ms → 0.2ms |      11 → 4 | `deleteRecursively(Path, boolean)`              | `org.renaissance.core.DirUtils`                            |
|  -62.7% | -0.38ms | 32.5% → 8.5% |  0.6ms → 0.2ms |      11 → 4 | `deleteRecursively(Path)`                       | `org.renaissance.core.DirUtils`                            |
|  -62.7% | -0.38ms | 32.5% → 8.5% |  0.6ms → 0.2ms |      11 → 4 | `lambda$createScratchDirectory$1(Path)`         | `org.renaissance.core.DirUtils`                            |
|  -62.7% | -0.38ms | 32.5% → 8.5% |  0.6ms → 0.2ms |      11 → 4 | `run()`                                         | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |
|  -62.7% | -0.38ms | 32.5% → 8.5% |  0.6ms → 0.2ms |      11 → 4 | `runWith(Object, Runnable)`                     | `java.lang.Thread`                                         |
|  -62.7% | -0.38ms | 32.5% → 8.5% |  0.6ms → 0.2ms |      11 → 4 | `run()`                                         | `java.lang.Thread`                                         |
| removed | -0.08ms |  4.0% → 0.0% |    0.1ms → 0ms |       2 → 0 | `getEnumConstantsShared()`                      | `java.lang.Class`                                          |
| removed | -0.08ms |  4.0% → 0.0% |    0.1ms → 0ms |       2 → 0 | `getEnumConstantsShared(Class)`                 | `java.lang.System$2`                                       |
| removed | -0.08ms |  4.0% → 0.0% |    0.1ms → 0ms |       2 → 0 | `getUniverse(Class)`                            | `java.util.EnumSet`                                        |
| removed | -0.08ms |  4.0% → 0.0% |    0.1ms → 0ms |       2 → 0 | `noneOf(Class)`                                 | `java.util.EnumSet`                                        |
| removed | -0.05ms |  2.7% → 0.0% |    0.1ms → 0ms |       1 → 0 | `getDeclaredMethods0(boolean)`                  | `java.lang.Class`                                          |
| removed | -0.05ms |  2.7% → 0.0% |    0.1ms → 0ms |       1 → 0 | `privateGetDeclaredMethods(boolean)`            | `java.lang.Class`                                          |
| removed | -0.05ms |  2.7% → 0.0% |    0.1ms → 0ms |       1 → 0 | `getMethodsRecursive(String, Class[], boolean)` | `java.lang.Class`                                          |
| removed | -0.05ms |  2.7% → 0.0% |    0.1ms → 0ms |       1 → 0 | `getMethod0(String, Class[])`                   | `java.lang.Class`                                          |
| removed | -0.05ms |  2.7% → 0.0% |    0.1ms → 0ms |       1 → 0 | `getMethod(String, Class[])`                    | `java.lang.Class`                                          |
| removed | -0.02ms |  1.3% → 0.0% |   24.5µs → 0ms |       1 → 0 | `$values()`                                     | `java.nio.file.FileVisitOption`                            |
| removed | -0.02ms |  1.3% → 0.0% |   24.5µs → 0ms |       1 → 0 | `<clinit>()`                                    | `java.nio.file.FileVisitOption`                            |

##### Standard library

|  Change |   Delta |            % |           Time | Contentions | Function                                        | Location                                           |
| ------: | ------: | -----------: | -------------: | ----------: | ----------------------------------------------- | -------------------------------------------------- |
|  -93.5% | -0.38ms | 21.9% → 1.0% | 0.4ms → 26.5µs |       2 → 1 | `loadClassOrNull(String, boolean)`              | `jdk.internal.loader.BuiltinClassLoader`           |
|  -93.5% | -0.38ms | 21.9% → 1.0% | 0.4ms → 26.5µs |       2 → 1 | `loadClass(String, boolean)`                    | `jdk.internal.loader.BuiltinClassLoader`           |
|  -93.5% | -0.38ms | 21.9% → 1.0% | 0.4ms → 26.5µs |       2 → 1 | `loadClass(String, boolean)`                    | `jdk.internal.loader.ClassLoaders$AppClassLoader`  |
|  -62.7% | -0.38ms | 32.5% → 8.5% |  0.6ms → 0.2ms |      11 → 4 | `runWith(Object, Runnable)`                     | `java.lang.Thread`                                 |
|  -62.7% | -0.38ms | 32.5% → 8.5% |  0.6ms → 0.2ms |      11 → 4 | `run()`                                         | `java.lang.Thread`                                 |
| removed | -0.08ms |  4.0% → 0.0% |    0.1ms → 0ms |       2 → 0 | `getEnumConstantsShared()`                      | `java.lang.Class`                                  |
| removed | -0.08ms |  4.0% → 0.0% |    0.1ms → 0ms |       2 → 0 | `getEnumConstantsShared(Class)`                 | `java.lang.System$2`                               |
| removed | -0.08ms |  4.0% → 0.0% |    0.1ms → 0ms |       2 → 0 | `getUniverse(Class)`                            | `java.util.EnumSet`                                |
| removed | -0.08ms |  4.0% → 0.0% |    0.1ms → 0ms |       2 → 0 | `noneOf(Class)`                                 | `java.util.EnumSet`                                |
| removed | -0.05ms |  2.7% → 0.0% |    0.1ms → 0ms |       1 → 0 | `getDeclaredMethods0(boolean)`                  | `java.lang.Class`                                  |
| removed | -0.05ms |  2.7% → 0.0% |    0.1ms → 0ms |       1 → 0 | `privateGetDeclaredMethods(boolean)`            | `java.lang.Class`                                  |
| removed | -0.05ms |  2.7% → 0.0% |    0.1ms → 0ms |       1 → 0 | `getMethodsRecursive(String, Class[], boolean)` | `java.lang.Class`                                  |
| removed | -0.05ms |  2.7% → 0.0% |    0.1ms → 0ms |       1 → 0 | `getMethod0(String, Class[])`                   | `java.lang.Class`                                  |
| removed | -0.05ms |  2.7% → 0.0% |    0.1ms → 0ms |       1 → 0 | `getMethod(String, Class[])`                    | `java.lang.Class`                                  |
| removed | -0.02ms |  1.3% → 0.0% |   24.5µs → 0ms |       1 → 0 | `$values()`                                     | `java.nio.file.FileVisitOption`                    |
| removed | -0.02ms |  1.3% → 0.0% |   24.5µs → 0ms |       1 → 0 | `<clinit>()`                                    | `java.nio.file.FileVisitOption`                    |
| removed | -0.02ms |  1.3% → 0.0% |   24.5µs → 0ms |       1 → 0 | `ensureClassInitialized0(Class)`                | `jdk.internal.misc.Unsafe`                         |
| removed | -0.02ms |  1.3% → 0.0% |   24.5µs → 0ms |       1 → 0 | `ensureClassInitialized(Class)`                 | `jdk.internal.misc.Unsafe`                         |
| removed | -0.02ms |  1.3% → 0.0% |   24.5µs → 0ms |       1 → 0 | `ensureClassInitialized(Class)`                 | `jdk.internal.reflect.MethodHandleAccessorFactory` |
| removed | -0.02ms |  1.3% → 0.0% |   24.5µs → 0ms |       1 → 0 | `newMethodAccessor(Method, boolean)`            | `jdk.internal.reflect.MethodHandleAccessorFactory` |
