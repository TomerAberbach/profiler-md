# Allocated native memory profile

Allocated 243 MiB over 84,474 samples (2.95 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| native   | 100.0% | 243 MiB |  84,474 |

## Hottest functions

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|    % |     Size | Samples | Function                                                                                                               | Location                                                               |
| ---: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 4.5% |   11 MiB |  37,403 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| 4.5% |   11 MiB |  37,403 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
| 4.4% | 10.7 MiB |  34,080 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| 4.3% | 10.5 MiB |  32,957 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
| 4.3% | 10.5 MiB |  32,792 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| 4.0% | 9.68 MiB |  25,523 | `loadClass(String)`                                                                                                    | `java.lang.ClassLoader`                                                |
| 3.9% |  9.4 MiB |  29,499 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| 1.5% | 3.61 MiB |   9,375 | `<clinit>()`                                                                                                           | `scala.Predef$`                                                        |
| 1.2% | 2.99 MiB |   6,645 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| 1.2% | 2.96 MiB |   6,528 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| 1.2% | 2.96 MiB |   6,434 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| 1.2% | 2.96 MiB |   6,434 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0` |
| 1.2% | 2.84 MiB |   5,978 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| 1.1% | 2.75 MiB |   5,057 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
| 1.1% | 2.69 MiB |   4,845 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 0.4% | 1022 KiB |   3,663 | `parse(String[])`                                                                                                      | `org.renaissance.harness.ConfigParser`                                 |
| 0.4% |  944 KiB |   4,186 | `createParser(Map)`                                                                                                    | `org.renaissance.harness.ConfigParser`                                 |
| 0.4% |  944 KiB |   4,186 | `<init>(Map)`                                                                                                          | `org.renaissance.harness.ConfigParser`                                 |
| 0.3% |  836 KiB |   1,552 | `apply(Seq)`                                                                                                           | `scala.collection.immutable.Map$`                                      |
| 0.3% |  699 KiB |   1,449 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % |     Size | Samples | Callee                                                      | Location                            |
| ----: | -------: | ------: | ----------------------------------------------------------- | ----------------------------------- |
| 98.0% | 10.7 MiB |  34,080 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|  1.0% |  112 KiB |   2,488 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |
|  0.8% | 87.9 KiB |     588 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |
|  0.2% | 17.1 KiB |      96 | `loadClass(String)`                                         | `java.lang.ClassLoader`             |
| <0.1% | 5.42 KiB |      83 | `getScratchBase(String[])`                                  | `org.renaissance.core.Launcher`     |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |   Size | Samples | Callee                                 | Location                        |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 11 MiB |  37,403 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % |     Size | Samples | Callee                                   | Location                            |
| ----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 97.6% | 10.5 MiB |  32,876 | `invoke(Object, Object[])`               | `java.lang.reflect.Method`          |
|  1.9% |  211 KiB |   1,059 | `createClassLoaderForModule(String)`     | `org.renaissance.core.ModuleLoader` |
|  0.4% | 47.9 KiB |     131 | `loadClass(String)`                      | `java.lang.ClassLoader`             |
| <0.1% |    248 B |       8 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib`                      |
| <0.1% |    160 B |       6 | `getMethod(String, Class[])`             | `java.lang.Class`                   |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |     Size | Samples | Callee                                   | Location                                    |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------------------- |
| 89.8% |  9.4 MiB |  29,499 | `main(String[])`                         | `org.renaissance.harness.RenaissanceSuite$` |
| 10.2% | 1.07 MiB |   3,259 | `loadClass(String)`                      | `java.lang.ClassLoader`                     |
| <0.1% |  2.3 KiB |      34 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib`                              |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Size | Samples | Callee                 | Location    |
| ----: | ----: | ------: | ---------------------- | ----------- |
| <0.1% | 164 B |       5 | `ic_miss_stub`         | `<unknown>` |
| <0.1% |  32 B |       1 | `resolve_virtual_call` | `<unknown>` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Samples | Callee                                                                        | Location                                    |
| ----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 31.8% | 2.99 MiB |   6,645 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| 20.5% | 1.93 MiB |   6,131 | `<clinit>()`                                                                  | `scala.Predef$`                             |
| 11.0% | 1.03 MiB |   3,337 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |
| 10.6% | 1022 KiB |   3,663 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
|  9.8% |  944 KiB |   4,186 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |

##### `<clinit>()` (`scala.Predef$`)

|    % |    Size | Samples | Callee                                   | Location                |
| ---: | ------: | ------: | ---------------------------------------- | ----------------------- |
| 9.1% | 337 KiB |     884 | `loadClass(String)`                      | `java.lang.ClassLoader` |
| 0.2% | 7.6 KiB |      46 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib`          |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Samples | Callee                                                           | Location                                    |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ------------------------------------------- |
| 99.0% | 2.96 MiB |   6,434 | `foreach(Function1)`                                             | `scala.collection.immutable.List`           |
|  0.5% | 15.6 KiB |     103 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`      |
|  0.2% | 6.13 KiB |      43 | `getVmStartNanos()`                                              | `org.renaissance.harness.RenaissanceSuite$` |
|  0.2% | 4.93 KiB |      40 | `linkMethodHandleConstant(Class, int, Class, String, Object)`    | `java.lang.invoke.MethodHandleNatives`      |
| <0.1% |  1.5 KiB |      11 | `loadClass(String)`                                              | `java.lang.ClassLoader`                     |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|    % |     Size | Samples | Callee          | Location                                                               |
| ---: | -------: | ------: | --------------- | ---------------------------------------------------------------------- |
| 0.2% | 5.39 KiB |      94 | `apply(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111e248` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Samples | Callee                                                                                       | Location                                  |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 96.0% | 2.84 MiB |   5,978 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|  3.7% |  111 KiB |     404 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |
|  0.3% | 8.78 KiB |      45 | `loadClass(String)`                                                                          | `java.lang.ClassLoader`                   |
| <0.1% |    324 B |       7 | `InterpreterRuntime::resolve_from_cache`                                                     | `libjvm.dylib`                            |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0`)

|      % |     Size | Samples | Callee                                                                                                                 | Location                                    |
| -----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.96 MiB |   6,434 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|     % |     Size | Samples | Callee                                | Location                                  |
| ----: | -------: | ------: | ------------------------------------- | ----------------------------------------- |
| 96.7% | 2.75 MiB |   5,057 | `executeOperation(int)`               | `org.renaissance.harness.ExecutionDriver` |
|  3.0% | 86.4 KiB |     867 | `setUpBeforeAll(BenchmarkContext)`    | `org.renaissance.jdk.concurrent.FjKmeans` |
|  0.2% | 4.38 KiB |      44 | `printBeforeEachMessage(int)`         | `org.renaissance.harness.ExecutionDriver` |
|  0.1% | 2.18 KiB |       6 | `printAfterSuccessMessage(int, long)` | `org.renaissance.harness.ExecutionDriver` |
|  0.1% | 2.02 KiB |       4 | `tearDownAfterAll(BenchmarkContext)`  | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|     % |     Size | Samples | Callee                                                           | Location                                  |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ----------------------------------------- |
| 98.0% | 2.69 MiB |   4,845 | `run(BenchmarkContext)`                                          | `org.renaissance.jdk.concurrent.FjKmeans` |
|  1.9% | 52.2 KiB |     155 | `notifyAfterOperationSetUp(String, int, boolean)`                | `org.renaissance.harness.EventDispatcher` |
|  0.1% | 3.19 KiB |      30 | `linkMethodHandleConstant(Class, int, Class, String, Object)`    | `java.lang.invoke.MethodHandleNatives`    |
| <0.1% | 1.32 KiB |      16 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`    |
| <0.1% |    216 B |       8 | `InterpreterRuntime::resolve_from_cache`                         | `libjvm.dylib`                            |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|     % |     Size | Samples | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 62.3% | 1.68 MiB |   3,244 | `<clinit>()`                             | `scala.Predef$`                    |
| 23.6% |  651 KiB |     657 | `loadClass(String)`                      | `java.lang.ClassLoader`            |
| 13.2% |  364 KiB |     773 | `map(Function1)`                         | `scala.collection.immutable.Range` |
|  0.5% | 13.9 KiB |      80 | `until$extension(int, int)`              | `scala.runtime.RichInt$`           |
|  0.1% | 3.72 KiB |      41 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib`                     |

##### `parse(String[])` (`org.renaissance.harness.ConfigParser`)

|     % |     Size | Samples | Callee                     | Location                         |
| ----: | -------: | ------: | -------------------------- | -------------------------------- |
| 60.3% |  616 KiB |   2,727 | `parse(Seq, Object)`       | `scopt.OptionParser`             |
| 39.2% |  401 KiB |     923 | `<init>()`                 | `org.renaissance.harness.Config` |
|  0.3% | 3.48 KiB |       9 | `wrapRefArray(Object[])`   | `scala.LowPriorityImplicits`     |
|  0.1% | 1.46 KiB |       4 | `InterpreterRuntime::_new` | `libjvm.dylib`                   |

##### `createParser(Map)` (`org.renaissance.harness.ConfigParser`)

|     % |     Size | Samples | Callee                     | Location                                       |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------- |
| 71.6% |  676 KiB |   3,159 | `<init>(Map)`              | `org.renaissance.harness.ConfigParser$$anon$1` |
| 27.3% |  257 KiB |     922 | `<clinit>()`               | `scopt.OptionParser`                           |
|  0.9% | 8.81 KiB |      90 | `loadClass(String)`        | `java.lang.ClassLoader`                        |
|  0.2% | 1.42 KiB |      15 | `InterpreterRuntime::_new` | `libjvm.dylib`                                 |

##### `<init>(Map)` (`org.renaissance.harness.ConfigParser`)

|      % |    Size | Samples | Callee              | Location                               |
| -----: | ------: | ------: | ------------------- | -------------------------------------- |
| 100.0% | 944 KiB |   4,186 | `createParser(Map)` | `org.renaissance.harness.ConfigParser` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % |     Size | Samples | Callee              | Location                                                   |
| ----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 82.2% |  574 KiB |   1,156 | `join()`            | `java.util.concurrent.ForkJoinTask`                        |
| 40.2% |  281 KiB |     358 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 21.7% |  152 KiB |     472 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 13.3% |   93 KiB |     157 | `fork()`            | `java.util.concurrent.ForkJoinTask`                        |
| 12.1% | 84.5 KiB |     170 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  0.5% | 1.28 MiB |   3,425 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `<clinit>()` (`scala.Predef$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.4% | 1.04 MiB |   1,589 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `<clinit>()` (`scala.Predef$`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0`) ← … ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                      |
|  0.3% |  745 KiB |   2,385 | `loadClass(String)` (`java.lang.ClassLoader`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.3% |  727 KiB |   1,122 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `apply(Seq)` (`scala.collection.immutable.Map$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.2% |  504 KiB |   1,292 | `loadClass(String)` (`java.lang.ClassLoader`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |  318 KiB |     470 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0`) ← … ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                               |
|  0.1% |  227 KiB |     563 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `loadClass(String)` ← … ← `<clinit>()` (`scala.Predef$`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0`) ← … ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                            |
|  0.1% |  210 KiB |     132 | `loadClass(String)` (`java.lang.ClassLoader`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0`) ← … ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                           |
|  0.1% |  201 KiB |     732 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `loadClass(String)` ← … ← `<clinit>()` (`scala.Predef$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |  199 KiB |     600 | `loadClass(String)` (`java.lang.ClassLoader`) ← `withBenchmarkSpecification(String)` (`org.renaissance.harness.Config`) ← `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` (`org.renaissance.harness.ConfigParser`) ← `apply(Object, Object)` (`org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x000000b8010e6bb0`) ← `action$$anonfun$1(Function2, Object, Object)` (`scopt.OptionDef`) ← `apply(Object, Object)` (`scopt.OptionDef$$Lambda.0x000000b8010d95b8`) ← `applyArgument(String, Object, Option)` (`scopt.OptionDef`) ← `handleArgument$1(List, OParserSetup, ListBuffer, ListBuffer, ListBuffer, ObjectRef, BooleanRef, ListBuffer, LazyRef, LazyRef, LazyRef, OptionDef, String)` (`scopt.ORunner$`) ← `runParser(Seq, Object, List, OParserSetup)` ← `parse(Seq, Object)` (`scopt.OptionParser`) ← `parse(String[])` (`org.renaissance.harness.ConfigParser`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) |
|  0.1% |  190 KiB |     624 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `loadClass(String)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.1% |  165 KiB |     412 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `loadClass(String)` ← … ← `loadClass(String)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.1% |  141 KiB |     406 | `loadClass(String)` (`java.lang.ClassLoader`) ← `head(Seq)` (`scopt.OptionParser`) ← `<init>(Map)` (`org.renaissance.harness.ConfigParser$$anon$1`) ← `createParser(Map)` (`org.renaissance.harness.ConfigParser`) ← `<init>(Map)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.1% |  133 KiB |     476 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `loadClass(String)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% |  122 KiB |     405 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `loadClass(String)` ← … ← `loadClass(String)` ← … ← `loadClass(String)` ← … ← `loadClass(String)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <0.1% |  114 KiB |      26 | `copy(InputStream, Path, CopyOption[])` (`java.nio.file.Files`) ← `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`) ← `extractResources(Iterable, Path)` ← `createClassLoaderForModule(String)` (`org.renaissance.core.ModuleLoader`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <0.1% |  112 KiB |     504 | `loadClass(String)` (`java.lang.ClassLoader`) ← `parse(Seq, Object)` (`scopt.OptionParser`) ← `parse(String[])` (`org.renaissance.harness.ConfigParser`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <0.1% |  111 KiB |     361 | `loadClass(String)` (`java.lang.ClassLoader`) ← `<clinit>()` (`scala.Predef$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| <0.1% |  104 KiB |     238 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `loadClass(String)` ← … ← `loadClass(String)` ← … ← `<clinit>()` (`scala.Predef$`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0`) ← … ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                  |
| <0.1% |  104 KiB |     398 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `loadClass(String)` ← … ← `loadClass(String)` ← … ← `loadClass(String)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
