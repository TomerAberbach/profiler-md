# Lock contention profile diff

Blocked 1.9ms → 1.6ms (-0.3ms, -15.2%) over 19 samples → 10 samples (98.9µs → 159.3µs per sample).

| Category | Change |  Delta |      % |          Time | Samples |
| -------- | -----: | -----: | -----: | ------------: | ------: |
| ours     | -15.2% | -0.3ms | 100.0% | 1.9ms → 1.6ms | 19 → 10 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

| Change | Delta |           % |        Time | Samples | Function                                         | Location                                          |
| -----: | ----: | ----------: | ----------: | ------: | ------------------------------------------------ | ------------------------------------------------- |
|    new |  +0ms | 0.0% → 1.4% |         0ms |   0 → 1 | `<init>(Collection, int)`                        | java.nio.file.FileTreeWalker                      |
| +24.7% |  +0ms | 2.6% → 3.8% | 0ms → 0.1ms |       1 | `<init>(boolean)`                                | java.util.concurrent.locks.ReentrantReadWriteLock |
| +30.0% |  +0ms | 0.2% → 0.4% |         0ms |       1 | `preVisitDirectory(Object, BasicFileAttributes)` | java.nio.file.SimpleFileVisitor                   |

#### Progressions

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

|  Change |  Delta |             % |          Time | Samples | Function                                      | Location                               |
| ------: | -----: | ------------: | ------------: | ------: | --------------------------------------------- | -------------------------------------- |
| removed | -0.1ms |   6.4% → 0.0% |   0.1ms → 0ms |   5 → 0 | `opWrapSink(int, Sink)`                       | java.util.stream.DoublePipeline$1      |
|  -20.4% | -0.1ms | 16.7% → 15.7% |         0.3ms |       2 | `loadClassOrNull(String, boolean)`            | jdk.internal.loader.BuiltinClassLoader |
|   -4.7% | -0.1ms | 68.9% → 77.4% | 1.3ms → 1.2ms |   5 → 4 | `loadClass(String, boolean)`                  | java.lang.ClassLoader                  |
| removed |   -0ms |   1.3% → 0.0% |           0ms |   1 → 0 | `walkFileTree(Path, Set, int, FileVisitor)`   | java.nio.file.Files                    |
| removed |   -0ms |   1.2% → 0.0% |           0ms |   1 → 0 | `iterator(DirectoryStream)`                   | sun.nio.fs.UnixDirectoryStream         |
| removed |   -0ms |   1.1% → 0.0% |           0ms |   1 → 0 | `doubleStream(Spliterator$OfDouble, boolean)` | java.util.stream.StreamSupport         |
| removed |   -0ms |   0.2% → 0.0% |           0ms |   1 → 0 | `<clinit>()`                                  | java.nio.file.FileTreeWalker$EventType |
|  -12.5% |   -0ms |          1.4% |           0ms |       1 | `getDeclaredMethods0(boolean)`                | java.lang.Class                        |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|  Change |  Delta |            % |        Time | Samples | Function                                           | Location                                                 |
| ------: | -----: | -----------: | ----------: | ------: | -------------------------------------------------- | -------------------------------------------------------- |
|     new | +0.4ms | 0.0% → 22.6% | 0ms → 0.4ms |   0 → 6 | `run()`                                            | org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68 |
| +578.8% |   +0ms |  0.2% → 1.8% |         0ms |       1 | `visitFile(Path, BasicFileAttributes)`             | org.renaissance.core.DirUtils$1                          |
| +578.8% |   +0ms |  0.2% → 1.8% |         0ms |       1 | `visitFile(Object, BasicFileAttributes)`           | org.renaissance.core.DirUtils$1                          |
|     new |   +0ms |  0.0% → 1.4% |         0ms |   0 → 1 | `<init>(Collection, int)`                          | java.nio.file.FileTreeWalker                             |
|  +24.7% |   +0ms |  2.6% → 3.8% | 0ms → 0.1ms |       1 | `<init>(boolean)`                                  | java.util.concurrent.locks.ReentrantReadWriteLock        |
|  +24.7% |   +0ms |  2.6% → 3.8% | 0ms → 0.1ms |       1 | `<init>(UnixPath, long, DirectoryStream$Filter)`   | sun.nio.fs.UnixDirectoryStream                           |
|  +24.7% |   +0ms |  2.6% → 3.8% | 0ms → 0.1ms |       1 | `newDirectoryStream(Path, DirectoryStream$Filter)` | sun.nio.fs.UnixFileSystemProvider                        |
|  +24.7% |   +0ms |  2.6% → 3.8% | 0ms → 0.1ms |       1 | `newDirectoryStream(Path)`                         | java.nio.file.Files                                      |
|   +6.0% |   +0ms |  5.8% → 7.2% |       0.1ms |   6 → 4 | `walkFileTree(Path, Set, int, FileVisitor)`        | java.nio.file.Files                                      |
|   +2.4% |   +0ms |  7.2% → 8.7% |       0.1ms |   7 → 5 | `walkFileTree(Path, FileVisitor)`                  | java.nio.file.Files                                      |
|  +30.0% |   +0ms |  0.2% → 0.4% |         0ms |       1 | `preVisitDirectory(Object, BasicFileAttributes)`   | java.nio.file.SimpleFileVisitor                          |

#### Progressions

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |  Delta |             % |          Time | Samples | Function                                             | Location                                                 |
| ------: | -----: | ------------: | ------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
| removed | -0.4ms |  23.7% → 0.0% |   0.4ms → 0ms |   8 → 0 | `run()`                                              | org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68 |
|  -33.4% | -0.3ms | 42.7% → 33.5% | 0.8ms → 0.5ms |   5 → 2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue              |
|  -33.4% | -0.3ms | 42.7% → 33.5% | 0.8ms → 0.5ms |   5 → 2 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                        |
|  -33.4% | -0.3ms | 42.7% → 33.5% | 0.8ms → 0.5ms |   5 → 2 | `join()`                                             | java.util.concurrent.ForkJoinTask                        |
|  -14.0% | -0.2ms | 76.3% → 77.4% | 1.4ms → 1.2ms |  11 → 4 | `computeClusterAverages()`                           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  -14.0% | -0.2ms | 76.3% → 77.4% | 1.4ms → 1.2ms |  11 → 4 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  -14.0% | -0.2ms | 76.3% → 77.4% | 1.4ms → 1.2ms |  11 → 4 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
|  -14.0% | -0.2ms | 76.3% → 77.4% | 1.4ms → 1.2ms |  11 → 4 | `exec()`                                             | java.util.concurrent.RecursiveTask                       |
|  -14.0% | -0.2ms | 76.3% → 77.4% | 1.4ms → 1.2ms |  11 → 4 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                        |
|  -14.0% | -0.2ms | 76.3% → 77.4% | 1.4ms → 1.2ms |  11 → 4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue              |
|  -14.0% | -0.2ms | 76.3% → 77.4% | 1.4ms → 1.2ms |  11 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                        |
|  -14.0% | -0.2ms | 76.3% → 77.4% | 1.4ms → 1.2ms |  11 → 4 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                        |
|  -14.0% | -0.2ms | 76.3% → 77.4% | 1.4ms → 1.2ms |  11 → 4 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                |
| removed | -0.2ms |   8.5% → 0.0% |   0.2ms → 0ms |   7 → 0 | `boxed(double[])`                                    | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|   -7.8% | -0.1ms | 85.6% → 93.1% | 1.6ms → 1.5ms |   7 → 6 | `loadClass(String)`                                  | java.lang.ClassLoader                                    |
| removed | -0.1ms |   6.4% → 0.0% |   0.1ms → 0ms |   5 → 0 | `opWrapSink(int, Sink)`                              | java.util.stream.DoublePipeline$1                        |
| removed | -0.1ms |   6.4% → 0.0% |   0.1ms → 0ms |   5 → 0 | `wrapSink(Sink)`                                     | java.util.stream.AbstractPipeline                        |
| removed | -0.1ms |   6.4% → 0.0% |   0.1ms → 0ms |   5 → 0 | `wrapAndCopyInto(Sink, Spliterator)`                 | java.util.stream.AbstractPipeline                        |
| removed | -0.1ms |   6.4% → 0.0% |   0.1ms → 0ms |   5 → 0 | `evaluate(Spliterator, boolean, IntFunction)`        | java.util.stream.AbstractPipeline                        |
| removed | -0.1ms |   6.4% → 0.0% |   0.1ms → 0ms |   5 → 0 | `evaluateToArrayNode(IntFunction)`                   | java.util.stream.AbstractPipeline                        |
