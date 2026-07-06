# Allocated native memory profile

Allocated 258 MB over 82,688 samples (3.12 kB per sample).

| Category |      % |   Size | Samples |
| -------- | -----: | -----: | ------: |
| native   | 100.0% | 258 MB |  82,688 |

## Hottest functions

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|    % |    Size | Samples | Function                                                                                                               | Location                                                             |
| ---: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 4.5% | 11.5 MB |  37,426 | `launchHarnessClass(String, String[])`                                                                                 | org.renaissance.core.Launcher                                        |
| 4.5% | 11.5 MB |  37,426 | `main(String[])`                                                                                                       | org.renaissance.core.Launcher                                        |
| 4.4% | 11.3 MB |  34,102 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | org.renaissance.core.Launcher                                        |
| 4.3% |   11 MB |  32,954 | `invoke(Object, Object[])`                                                                                             | java.lang.reflect.Method                                             |
| 4.3% |   11 MB |  32,791 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite                             |
| 3.9% | 10.1 MB |  25,503 | `loadClass(String)`                                                                                                    | java.lang.ClassLoader                                                |
| 3.8% |  9.9 MB |  29,499 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |
| 1.5% | 3.78 MB |   9,374 | `<clinit>()`                                                                                                           | scala.Predef$                                                        |
| 1.2% | 3.18 MB |   6,644 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |
| 1.2% | 3.15 MB |   6,524 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
| 1.2% | 3.15 MB |   6,433 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
| 1.2% | 3.15 MB |   6,433 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0 |
| 1.2% | 3.02 MB |   5,981 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
| 1.1% | 2.92 MB |   5,062 | `executeOperation(int)`                                                                                                | org.renaissance.harness.ExecutionDriver                              |
| 1.1% | 2.83 MB |   4,843 | `run(BenchmarkContext)`                                                                                                | org.renaissance.jdk.concurrent.FjKmeans                              |
| 0.4% | 1.05 MB |   3,661 | `parse(String[])`                                                                                                      | org.renaissance.harness.ConfigParser                                 |
| 0.4% |  966 kB |   4,176 | `createParser(Map)`                                                                                                    | org.renaissance.harness.ConfigParser                                 |
| 0.4% |  966 kB |   4,176 | `<init>(Map)`                                                                                                          | org.renaissance.harness.ConfigParser                                 |
| 0.3% |  856 kB |   1,552 | `apply(Seq)`                                                                                                           | scala.collection.immutable.Map$                                      |
| 0.3% |  753 kB |   1,512 | `compute()`                                                                                                            | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `launchHarnessClass(String, String[])` (org.renaissance.core.Launcher)

|     % |    Size | Samples | Callee                                                      | Location                          |
| ----: | ------: | ------: | ----------------------------------------------------------- | --------------------------------- |
| 98.0% | 11.3 MB |  34,102 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher     |
|  1.0% |  115 kB |   2,489 | `createScratchRoot(Path, boolean)`                          | org.renaissance.core.Launcher     |
|  0.8% |   90 kB |     588 | `create(Path, URI)`                                         | org.renaissance.core.ModuleLoader |
|  0.2% | 17.5 kB |      96 | `loadClass(String)`                                         | java.lang.ClassLoader             |
| <0.1% | 5.55 kB |      83 | `getScratchBase(String[])`                                  | org.renaissance.core.Launcher     |

##### `main(String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                                 | Location                      |
| -----: | ------: | ------: | -------------------------------------- | ----------------------------- |
| 100.0% | 11.5 MB |  37,426 | `launchHarnessClass(String, String[])` | org.renaissance.core.Launcher |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher)

|     % |    Size | Samples | Callee                                   | Location                          |
| ----: | ------: | ------: | ---------------------------------------- | --------------------------------- |
| 97.6% |   11 MB |  32,875 | `invoke(Object, Object[])`               | java.lang.reflect.Method          |
|  1.9% |  217 kB |   1,082 | `createClassLoaderForModule(String)`     | org.renaissance.core.ModuleLoader |
|  0.4% | 49.1 kB |     131 | `loadClass(String)`                      | java.lang.ClassLoader             |
| <0.1% |   248 B |       8 | `InterpreterRuntime::resolve_from_cache` | libjvm.dylib                      |
| <0.1% |   160 B |       6 | `getMethod(String, Class[])`             | java.lang.Class                   |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite)

|     % |    Size | Samples | Callee                                   | Location                                  |
| ----: | ------: | ------: | ---------------------------------------- | ----------------------------------------- |
| 89.8% |  9.9 MB |  29,499 | `main(String[])`                         | org.renaissance.harness.RenaissanceSuite$ |
| 10.2% | 1.12 MB |   3,258 | `loadClass(String)`                      | java.lang.ClassLoader                     |
| <0.1% | 2.35 kB |      34 | `InterpreterRuntime::resolve_from_cache` | libjvm.dylib                              |

##### `loadClass(String)` (java.lang.ClassLoader)

|     % |  Size | Samples | Callee                 | Location    |
| ----: | ----: | ------: | ---------------------- | ----------- |
| <0.1% | 164 B |       5 | `ic_miss_stub`         | `<unknown>` |
| <0.1% |  32 B |       1 | `resolve_virtual_call` | `<unknown>` |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite$)

|     % |    Size | Samples | Callee                                                                        | Location                                  |
| ----: | ------: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------- |
| 32.1% | 3.18 MB |   6,644 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | org.renaissance.harness.RenaissanceSuite$ |
| 20.4% | 2.02 MB |   6,130 | `<clinit>()`                                                                  | scala.Predef$                             |
| 10.9% | 1.08 MB |   3,337 | `loadClass(String)`                                                           | java.lang.ClassLoader                     |
| 10.6% | 1.05 MB |   3,661 | `parse(String[])`                                                             | org.renaissance.harness.ConfigParser      |
|  9.8% |  966 kB |   4,176 | `<init>(Map)`                                                                 | org.renaissance.harness.ConfigParser      |

##### `<clinit>()` (scala.Predef$)

|    % |    Size | Samples | Callee                                   | Location              |
| ---: | ------: | ------: | ---------------------------------------- | --------------------- |
| 9.1% |  346 kB |     885 | `loadClass(String)`                      | java.lang.ClassLoader |
| 0.2% | 7.79 kB |      46 | `InterpreterRuntime::resolve_from_cache` | libjvm.dylib          |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$)

|     % |    Size | Samples | Callee                                                           | Location                                  |
| ----: | ------: | ------: | ---------------------------------------------------------------- | ----------------------------------------- |
| 99.1% | 3.15 MB |   6,433 | `foreach(Function1)`                                             | scala.collection.immutable.List           |
|  0.5% |   16 kB |     103 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | java.lang.invoke.MethodHandleNatives      |
|  0.2% | 6.27 kB |      43 | `getVmStartNanos()`                                              | org.renaissance.harness.RenaissanceSuite$ |
|  0.2% | 5.05 kB |      40 | `linkMethodHandleConstant(Class, int, Class, String, Object)`    | java.lang.invoke.MethodHandleNatives      |
| <0.1% | 1.54 kB |      11 | `loadClass(String)`                                              | java.lang.ClassLoader                     |

##### `foreach(Function1)` (scala.collection.immutable.List)

|    % |    Size | Samples | Callee          | Location                                                             |
| ---: | ------: | ------: | --------------- | -------------------------------------------------------------------- |
| 0.2% | 5.38 kB |      91 | `apply(Object)` | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111e248 |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$)

|     % |    Size | Samples | Callee                                                                                       | Location                                |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------- | --------------------------------------- |
| 96.1% | 3.02 MB |   5,981 | `executeBenchmark()`                                                                         | org.renaissance.harness.ExecutionDriver |
|  3.6% |  113 kB |     400 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | org.renaissance.harness.ExecutionDriver |
|  0.3% | 8.99 kB |      45 | `loadClass(String)`                                                                          | java.lang.ClassLoader                   |
| <0.1% |   324 B |       7 | `InterpreterRuntime::resolve_from_cache`                                                     | libjvm.dylib                            |

##### `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0)

|      % |    Size | Samples | Callee                                                                                                                 | Location                                  |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 3.15 MB |   6,433 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$ |

##### `executeBenchmark()` (org.renaissance.harness.ExecutionDriver)

|     % |    Size | Samples | Callee                                | Location                                |
| ----: | ------: | ------: | ------------------------------------- | --------------------------------------- |
| 96.6% | 2.92 MB |   5,062 | `executeOperation(int)`               | org.renaissance.harness.ExecutionDriver |
|  3.2% | 96.9 kB |     863 | `setUpBeforeAll(BenchmarkContext)`    | org.renaissance.jdk.concurrent.FjKmeans |
|  0.1% | 4.49 kB |      44 | `printBeforeEachMessage(int)`         | org.renaissance.harness.ExecutionDriver |
|  0.1% | 2.06 kB |       4 | `tearDownAfterAll(BenchmarkContext)`  | org.renaissance.jdk.concurrent.FjKmeans |
| <0.1% |   260 B |       8 | `printAfterSuccessMessage(int, long)` | org.renaissance.harness.ExecutionDriver |

##### `executeOperation(int)` (org.renaissance.harness.ExecutionDriver)

|     % |    Size | Samples | Callee                                                           | Location                                |
| ----: | ------: | ------: | ---------------------------------------------------------------- | --------------------------------------- |
| 96.8% | 2.83 MB |   4,843 | `run(BenchmarkContext)`                                          | org.renaissance.jdk.concurrent.FjKmeans |
|  3.1% | 89.4 kB |     164 | `notifyAfterOperationSetUp(String, int, boolean)`                | org.renaissance.harness.EventDispatcher |
|  0.1% | 3.14 kB |      28 | `linkMethodHandleConstant(Class, int, Class, String, Object)`    | java.lang.invoke.MethodHandleNatives    |
| <0.1% | 1.35 kB |      16 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | java.lang.invoke.MethodHandleNatives    |
| <0.1% |   216 B |       8 | `InterpreterRuntime::resolve_from_cache`                         | libjvm.dylib                            |

##### `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans)

|     % |    Size | Samples | Callee                                   | Location                         |
| ----: | ------: | ------: | ---------------------------------------- | -------------------------------- |
| 62.3% | 1.76 MB |   3,244 | `<clinit>()`                             | scala.Predef$                    |
| 23.7% |  669 kB |     654 | `loadClass(String)`                      | java.lang.ClassLoader            |
| 13.3% |  375 kB |     774 | `map(Function1)`                         | scala.collection.immutable.Range |
|  0.5% | 14.3 kB |      80 | `until$extension(int, int)`              | scala.runtime.RichInt$           |
|  0.1% | 3.81 kB |      41 | `InterpreterRuntime::resolve_from_cache` | libjvm.dylib                     |

##### `parse(String[])` (org.renaissance.harness.ConfigParser)

|     % |    Size | Samples | Callee                     | Location                       |
| ----: | ------: | ------: | -------------------------- | ------------------------------ |
| 60.2% |  630 kB |   2,725 | `parse(Seq, Object)`       | scopt.OptionParser             |
| 39.3% |  411 kB |     923 | `<init>()`                 | org.renaissance.harness.Config |
|  0.3% | 3.57 kB |       9 | `wrapRefArray(Object[])`   | scala.LowPriorityImplicits     |
|  0.1% |  1.5 kB |       4 | `InterpreterRuntime::_new` | libjvm.dylib                   |

##### `createParser(Map)` (org.renaissance.harness.ConfigParser)

|     % |    Size | Samples | Callee                     | Location                                     |
| ----: | ------: | ------: | -------------------------- | -------------------------------------------- |
| 71.6% |  692 kB |   3,147 | `<init>(Map)`              | org.renaissance.harness.ConfigParser$$anon$1 |
| 27.3% |  264 kB |     924 | `<clinit>()`               | scopt.OptionParser                           |
|  0.9% | 9.02 kB |      90 | `loadClass(String)`        | java.lang.ClassLoader                        |
|  0.2% | 1.46 kB |      15 | `InterpreterRuntime::_new` | libjvm.dylib                                 |

##### `<init>(Map)` (org.renaissance.harness.ConfigParser)

|      % |   Size | Samples | Callee              | Location                             |
| -----: | -----: | ------: | ------------------- | ------------------------------------ |
| 100.0% | 966 kB |   4,176 | `createParser(Map)` | org.renaissance.harness.ConfigParser |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee              | Location                                                 |
| ----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 83.1% |  626 kB |   1,178 | `join()`            | java.util.concurrent.ForkJoinTask                        |
| 37.3% |  281 kB |     331 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 21.1% |  159 kB |     500 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| 11.4% | 85.5 kB |     161 | `fork()`            | java.util.concurrent.ForkJoinTask                        |
| 10.7% | 80.9 kB |     161 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

Common call stack: `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  0.6% | 1.46 MB |   3,786 | `loadClass(String)` (java.lang.ClassLoader) ← `<clinit>()` (scala.Predef$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.4% | 1.16 MB |   1,703 | `loadClass(String)` (java.lang.ClassLoader) ← `<clinit>()` (scala.Predef$) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                        |
|  0.3% |  762 kB |   2,385 | `loadClass(String)` (java.lang.ClassLoader) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.3% |  744 kB |   1,122 | `loadClass(String)` (java.lang.ClassLoader) ← `apply(Seq)` (scala.collection.immutable.Map$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.2% |  517 kB |   1,292 | `loadClass(String)` (java.lang.ClassLoader) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.1% |  326 kB |     470 | `loadClass(String)` (java.lang.ClassLoader) ← `map(Function1)` (scala.collection.immutable.Range) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                 |
|  0.1% |  261 kB |     623 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `<clinit>()` (scala.Predef$) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                  |
|  0.1% |  252 kB |     858 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `<clinit>()` (scala.Predef$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |  215 kB |     132 | `loadClass(String)` (java.lang.ClassLoader) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                       |
|  0.1% |  204 kB |     600 | `loadClass(String)` (java.lang.ClassLoader) ← `withBenchmarkSpecification(String)` (org.renaissance.harness.Config) ← `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` (org.renaissance.harness.ConfigParser) ← `apply(Object, Object)` (org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x00000070010e6bb0) ← `action$$anonfun$1(Function2, Object, Object)` (scopt.OptionDef) ← `apply(Object, Object)` (scopt.OptionDef$$Lambda.0x00000070010d95b8) ← `applyArgument(String, Object, Option)` (scopt.OptionDef) ← `handleArgument$1(List, OParserSetup, ListBuffer, ListBuffer, ListBuffer, ObjectRef, BooleanRef, ListBuffer, LazyRef, LazyRef, LazyRef, OptionDef, String)` (scopt.ORunner$) ← `runParser(Seq, Object, List, OParserSetup)` ← `parse(Seq, Object)` (scopt.OptionParser) ← `parse(String[])` (org.renaissance.harness.ConfigParser) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) |
|  0.1% |  194 kB |     624 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.1% |  169 kB |     412 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `loadClass(String)` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |  150 kB |     483 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `loadClass(String)` ← `<clinit>()` (scala.Predef$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.1% |  144 kB |     406 | `loadClass(String)` (java.lang.ClassLoader) ← `head(Seq)` (scopt.OptionParser) ← `<init>(Map)` (org.renaissance.harness.ConfigParser$$anon$1) ← `createParser(Map)` (org.renaissance.harness.ConfigParser) ← `<init>(Map)` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |  136 kB |     476 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |  136 kB |     271 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `loadClass(String)` ← `<clinit>()` (scala.Predef$) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                            |
| <0.1% |  125 kB |     405 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `loadClass(String)` ← `loadClass(String)` ← `loadClass(String)` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <0.1% |  117 kB |      26 | `copy(InputStream, Path, CopyOption[])` (java.nio.file.Files) ← `extractResource(String, Path)` (org.renaissance.core.ResourceUtils) ← `extractResources(Iterable, Path)` ← `createClassLoaderForModule(String)` (org.renaissance.core.ModuleLoader)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <0.1% |  114 kB |     504 | `loadClass(String)` (java.lang.ClassLoader) ← `parse(Seq, Object)` (scopt.OptionParser) ← `parse(String[])` (org.renaissance.harness.ConfigParser) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |  106 kB |     398 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `loadClass(String)` ← `loadClass(String)` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
