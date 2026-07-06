# Allocated native memory profile

Allocated 255 MB over 84,474 samples (3.02 kB per sample).

| Category |      % |   Size | Samples |
| -------- | -----: | -----: | ------: |
| native   | 100.0% | 255 MB |  84,474 |

## Hottest functions

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|    % |    Size | Samples | Function                                                                                                               | Location                                                             |
| ---: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 4.5% | 11.5 MB |  37,403 | `launchHarnessClass(String, String[])`                                                                                 | org.renaissance.core.Launcher                                        |
| 4.5% | 11.5 MB |  37,403 | `main(String[])`                                                                                                       | org.renaissance.core.Launcher                                        |
| 4.4% | 11.3 MB |  34,080 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | org.renaissance.core.Launcher                                        |
| 4.3% |   11 MB |  32,957 | `invoke(Object, Object[])`                                                                                             | java.lang.reflect.Method                                             |
| 4.3% |   11 MB |  32,792 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite                             |
| 4.0% | 10.2 MB |  25,523 | `loadClass(String)`                                                                                                    | java.lang.ClassLoader                                                |
| 3.9% | 9.85 MB |  29,499 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |
| 1.5% | 3.78 MB |   9,375 | `<clinit>()`                                                                                                           | scala.Predef$                                                        |
| 1.2% | 3.13 MB |   6,645 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |
| 1.2% | 3.11 MB |   6,528 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
| 1.2% |  3.1 MB |   6,434 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
| 1.2% |  3.1 MB |   6,434 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0 |
| 1.2% | 2.98 MB |   5,978 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
| 1.1% | 2.88 MB |   5,057 | `executeOperation(int)`                                                                                                | org.renaissance.harness.ExecutionDriver                              |
| 1.1% | 2.82 MB |   4,845 | `run(BenchmarkContext)`                                                                                                | org.renaissance.jdk.concurrent.FjKmeans                              |
| 0.4% | 1.05 MB |   3,663 | `parse(String[])`                                                                                                      | org.renaissance.harness.ConfigParser                                 |
| 0.4% |  966 kB |   4,186 | `createParser(Map)`                                                                                                    | org.renaissance.harness.ConfigParser                                 |
| 0.4% |  966 kB |   4,186 | `<init>(Map)`                                                                                                          | org.renaissance.harness.ConfigParser                                 |
| 0.3% |  856 kB |   1,552 | `apply(Seq)`                                                                                                           | scala.collection.immutable.Map$                                      |
| 0.3% |  715 kB |   1,449 | `compute()`                                                                                                            | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `launchHarnessClass(String, String[])` (org.renaissance.core.Launcher)

|     % |    Size | Samples | Callee                                                      | Location                          |
| ----: | ------: | ------: | ----------------------------------------------------------- | --------------------------------- |
| 98.0% | 11.3 MB |  34,080 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher     |
|  1.0% |  115 kB |   2,488 | `createScratchRoot(Path, boolean)`                          | org.renaissance.core.Launcher     |
|  0.8% |   90 kB |     588 | `create(Path, URI)`                                         | org.renaissance.core.ModuleLoader |
|  0.2% | 17.5 kB |      96 | `loadClass(String)`                                         | java.lang.ClassLoader             |
| <0.1% | 5.55 kB |      83 | `getScratchBase(String[])`                                  | org.renaissance.core.Launcher     |

##### `main(String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                                 | Location                      |
| -----: | ------: | ------: | -------------------------------------- | ----------------------------- |
| 100.0% | 11.5 MB |  37,403 | `launchHarnessClass(String, String[])` | org.renaissance.core.Launcher |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher)

|     % |    Size | Samples | Callee                                   | Location                          |
| ----: | ------: | ------: | ---------------------------------------- | --------------------------------- |
| 97.6% |   11 MB |  32,876 | `invoke(Object, Object[])`               | java.lang.reflect.Method          |
|  1.9% |  216 kB |   1,059 | `createClassLoaderForModule(String)`     | org.renaissance.core.ModuleLoader |
|  0.4% | 49.1 kB |     131 | `loadClass(String)`                      | java.lang.ClassLoader             |
| <0.1% |   248 B |       8 | `InterpreterRuntime::resolve_from_cache` | libjvm.dylib                      |
| <0.1% |   160 B |       6 | `getMethod(String, Class[])`             | java.lang.Class                   |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite)

|     % |    Size | Samples | Callee                                   | Location                                  |
| ----: | ------: | ------: | ---------------------------------------- | ----------------------------------------- |
| 89.8% | 9.85 MB |  29,499 | `main(String[])`                         | org.renaissance.harness.RenaissanceSuite$ |
| 10.2% | 1.12 MB |   3,259 | `loadClass(String)`                      | java.lang.ClassLoader                     |
| <0.1% | 2.35 kB |      34 | `InterpreterRuntime::resolve_from_cache` | libjvm.dylib                              |

##### `loadClass(String)` (java.lang.ClassLoader)

|     % |  Size | Samples | Callee                 | Location    |
| ----: | ----: | ------: | ---------------------- | ----------- |
| <0.1% | 164 B |       5 | `ic_miss_stub`         | `<unknown>` |
| <0.1% |  32 B |       1 | `resolve_virtual_call` | `<unknown>` |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite$)

|     % |    Size | Samples | Callee                                                                        | Location                                  |
| ----: | ------: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------- |
| 31.8% | 3.13 MB |   6,645 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | org.renaissance.harness.RenaissanceSuite$ |
| 20.5% | 2.02 MB |   6,131 | `<clinit>()`                                                                  | scala.Predef$                             |
| 11.0% | 1.08 MB |   3,337 | `loadClass(String)`                                                           | java.lang.ClassLoader                     |
| 10.6% | 1.05 MB |   3,663 | `parse(String[])`                                                             | org.renaissance.harness.ConfigParser      |
|  9.8% |  966 kB |   4,186 | `<init>(Map)`                                                                 | org.renaissance.harness.ConfigParser      |

##### `<clinit>()` (scala.Predef$)

|    % |    Size | Samples | Callee                                   | Location              |
| ---: | ------: | ------: | ---------------------------------------- | --------------------- |
| 9.1% |  345 kB |     884 | `loadClass(String)`                      | java.lang.ClassLoader |
| 0.2% | 7.79 kB |      46 | `InterpreterRuntime::resolve_from_cache` | libjvm.dylib          |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$)

|     % |    Size | Samples | Callee                                                           | Location                                  |
| ----: | ------: | ------: | ---------------------------------------------------------------- | ----------------------------------------- |
| 99.0% |  3.1 MB |   6,434 | `foreach(Function1)`                                             | scala.collection.immutable.List           |
|  0.5% |   16 kB |     103 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | java.lang.invoke.MethodHandleNatives      |
|  0.2% | 6.27 kB |      43 | `getVmStartNanos()`                                              | org.renaissance.harness.RenaissanceSuite$ |
|  0.2% | 5.05 kB |      40 | `linkMethodHandleConstant(Class, int, Class, String, Object)`    | java.lang.invoke.MethodHandleNatives      |
| <0.1% | 1.54 kB |      11 | `loadClass(String)`                                              | java.lang.ClassLoader                     |

##### `foreach(Function1)` (scala.collection.immutable.List)

|    % |    Size | Samples | Callee          | Location                                                             |
| ---: | ------: | ------: | --------------- | -------------------------------------------------------------------- |
| 0.2% | 5.52 kB |      94 | `apply(Object)` | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111e248 |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$)

|     % |    Size | Samples | Callee                                                                                       | Location                                |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------- | --------------------------------------- |
| 96.0% | 2.98 MB |   5,978 | `executeBenchmark()`                                                                         | org.renaissance.harness.ExecutionDriver |
|  3.7% |  114 kB |     404 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | org.renaissance.harness.ExecutionDriver |
|  0.3% | 8.99 kB |      45 | `loadClass(String)`                                                                          | java.lang.ClassLoader                   |
| <0.1% |   324 B |       7 | `InterpreterRuntime::resolve_from_cache`                                                     | libjvm.dylib                            |

##### `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0)

|      % |   Size | Samples | Callee                                                                                                                 | Location                                  |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 3.1 MB |   6,434 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$ |

##### `executeBenchmark()` (org.renaissance.harness.ExecutionDriver)

|     % |    Size | Samples | Callee                                | Location                                |
| ----: | ------: | ------: | ------------------------------------- | --------------------------------------- |
| 96.7% | 2.88 MB |   5,057 | `executeOperation(int)`               | org.renaissance.harness.ExecutionDriver |
|  3.0% | 88.4 kB |     867 | `setUpBeforeAll(BenchmarkContext)`    | org.renaissance.jdk.concurrent.FjKmeans |
|  0.2% | 4.49 kB |      44 | `printBeforeEachMessage(int)`         | org.renaissance.harness.ExecutionDriver |
|  0.1% | 2.23 kB |       6 | `printAfterSuccessMessage(int, long)` | org.renaissance.harness.ExecutionDriver |
|  0.1% | 2.06 kB |       4 | `tearDownAfterAll(BenchmarkContext)`  | org.renaissance.jdk.concurrent.FjKmeans |

##### `executeOperation(int)` (org.renaissance.harness.ExecutionDriver)

|     % |    Size | Samples | Callee                                                           | Location                                |
| ----: | ------: | ------: | ---------------------------------------------------------------- | --------------------------------------- |
| 98.0% | 2.82 MB |   4,845 | `run(BenchmarkContext)`                                          | org.renaissance.jdk.concurrent.FjKmeans |
|  1.9% | 53.5 kB |     155 | `notifyAfterOperationSetUp(String, int, boolean)`                | org.renaissance.harness.EventDispatcher |
|  0.1% | 3.27 kB |      30 | `linkMethodHandleConstant(Class, int, Class, String, Object)`    | java.lang.invoke.MethodHandleNatives    |
| <0.1% | 1.35 kB |      16 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | java.lang.invoke.MethodHandleNatives    |
| <0.1% |   216 B |       8 | `InterpreterRuntime::resolve_from_cache`                         | libjvm.dylib                            |

##### `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans)

|     % |    Size | Samples | Callee                                   | Location                         |
| ----: | ------: | ------: | ---------------------------------------- | -------------------------------- |
| 62.3% | 1.76 MB |   3,244 | `<clinit>()`                             | scala.Predef$                    |
| 23.6% |  667 kB |     657 | `loadClass(String)`                      | java.lang.ClassLoader            |
| 13.2% |  373 kB |     773 | `map(Function1)`                         | scala.collection.immutable.Range |
|  0.5% | 14.3 kB |      80 | `until$extension(int, int)`              | scala.runtime.RichInt$           |
|  0.1% | 3.81 kB |      41 | `InterpreterRuntime::resolve_from_cache` | libjvm.dylib                     |

##### `parse(String[])` (org.renaissance.harness.ConfigParser)

|     % |    Size | Samples | Callee                     | Location                       |
| ----: | ------: | ------: | -------------------------- | ------------------------------ |
| 60.3% |  631 kB |   2,727 | `parse(Seq, Object)`       | scopt.OptionParser             |
| 39.2% |  411 kB |     923 | `<init>()`                 | org.renaissance.harness.Config |
|  0.3% | 3.57 kB |       9 | `wrapRefArray(Object[])`   | scala.LowPriorityImplicits     |
|  0.1% |  1.5 kB |       4 | `InterpreterRuntime::_new` | libjvm.dylib                   |

##### `createParser(Map)` (org.renaissance.harness.ConfigParser)

|     % |    Size | Samples | Callee                     | Location                                     |
| ----: | ------: | ------: | -------------------------- | -------------------------------------------- |
| 71.6% |  692 kB |   3,159 | `<init>(Map)`              | org.renaissance.harness.ConfigParser$$anon$1 |
| 27.3% |  263 kB |     922 | `<clinit>()`               | scopt.OptionParser                           |
|  0.9% | 9.02 kB |      90 | `loadClass(String)`        | java.lang.ClassLoader                        |
|  0.2% | 1.46 kB |      15 | `InterpreterRuntime::_new` | libjvm.dylib                                 |

##### `<init>(Map)` (org.renaissance.harness.ConfigParser)

|      % |   Size | Samples | Callee              | Location                             |
| -----: | -----: | ------: | ------------------- | ------------------------------------ |
| 100.0% | 966 kB |   4,186 | `createParser(Map)` | org.renaissance.harness.ConfigParser |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee              | Location                                                 |
| ----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 82.2% |  588 kB |   1,156 | `join()`            | java.util.concurrent.ForkJoinTask                        |
| 40.2% |  288 kB |     358 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 21.7% |  156 kB |     472 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| 13.3% | 95.3 kB |     157 | `fork()`            | java.util.concurrent.ForkJoinTask                        |
| 12.1% | 86.5 kB |     170 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

Common call stack: `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  0.6% | 1.46 MB |   3,786 | `loadClass(String)` (java.lang.ClassLoader) ← `<clinit>()` (scala.Predef$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.5% | 1.16 MB |   1,703 | `loadClass(String)` (java.lang.ClassLoader) ← `<clinit>()` (scala.Predef$) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                        |
|  0.3% |  762 kB |   2,385 | `loadClass(String)` (java.lang.ClassLoader) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.3% |  744 kB |   1,122 | `loadClass(String)` (java.lang.ClassLoader) ← `apply(Seq)` (scala.collection.immutable.Map$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.2% |  517 kB |   1,292 | `loadClass(String)` (java.lang.ClassLoader) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.1% |  326 kB |     470 | `loadClass(String)` (java.lang.ClassLoader) ← `map(Function1)` (scala.collection.immutable.Range) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                 |
|  0.1% |  261 kB |     623 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `<clinit>()` (scala.Predef$) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                  |
|  0.1% |  252 kB |     858 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `<clinit>()` (scala.Predef$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |  215 kB |     132 | `loadClass(String)` (java.lang.ClassLoader) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                       |
|  0.1% |  204 kB |     600 | `loadClass(String)` (java.lang.ClassLoader) ← `withBenchmarkSpecification(String)` (org.renaissance.harness.Config) ← `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` (org.renaissance.harness.ConfigParser) ← `apply(Object, Object)` (org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x000000b8010e6bb0) ← `action$$anonfun$1(Function2, Object, Object)` (scopt.OptionDef) ← `apply(Object, Object)` (scopt.OptionDef$$Lambda.0x000000b8010d95b8) ← `applyArgument(String, Object, Option)` (scopt.OptionDef) ← `handleArgument$1(List, OParserSetup, ListBuffer, ListBuffer, ListBuffer, ObjectRef, BooleanRef, ListBuffer, LazyRef, LazyRef, LazyRef, OptionDef, String)` (scopt.ORunner$) ← `runParser(Seq, Object, List, OParserSetup)` ← `parse(Seq, Object)` (scopt.OptionParser) ← `parse(String[])` (org.renaissance.harness.ConfigParser) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) |
|  0.1% |  194 kB |     624 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.1% |  169 kB |     412 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `loadClass(String)` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |  150 kB |     483 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `loadClass(String)` ← `<clinit>()` (scala.Predef$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.1% |  144 kB |     406 | `loadClass(String)` (java.lang.ClassLoader) ← `head(Seq)` (scopt.OptionParser) ← `<init>(Map)` (org.renaissance.harness.ConfigParser$$anon$1) ← `createParser(Map)` (org.renaissance.harness.ConfigParser) ← `<init>(Map)` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |  136 kB |     476 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |  136 kB |     271 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `loadClass(String)` ← `<clinit>()` (scala.Predef$) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                            |
| <0.1% |  125 kB |     405 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `loadClass(String)` ← `loadClass(String)` ← `loadClass(String)` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <0.1% |  117 kB |      26 | `copy(InputStream, Path, CopyOption[])` (java.nio.file.Files) ← `extractResource(String, Path)` (org.renaissance.core.ResourceUtils) ← `extractResources(Iterable, Path)` ← `createClassLoaderForModule(String)` (org.renaissance.core.ModuleLoader)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <0.1% |  114 kB |     504 | `loadClass(String)` (java.lang.ClassLoader) ← `parse(Seq, Object)` (scopt.OptionParser) ← `parse(String[])` (org.renaissance.harness.ConfigParser) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |  106 kB |     398 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `loadClass(String)` ← `loadClass(String)` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
