# Retained heap profile

Retained 2.36 MiB over 9 sampled objects (268 KiB per sampled object).

| Category         |      % |     Size | Sampled objects |
| ---------------- | -----: | -------: | --------------: |
| Standard library | 100.0% | 2.36 MiB |               8 |
| Ours             |  <0.1% |     40 B |               1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2.31 MiB (98.0%) main(String[]) at org.renaissance.core.Launcher
│   └── 2.31 MiB (98.0%) launchHarnessClass(String, String[])
│       └── 2.31 MiB (98.0%) loadAndInvokeHarnessClass(ModuleLoader, String, String[])
│           └── 2.31 MiB (98.0%) invoke(Object, Object[]) at java.lang.reflect.Method
│               └── 2.31 MiB (98.0%) invoke(Object, Object[]) at jdk.internal.reflect.DirectMethodHandleAccessor
│                   └── 2.31 MiB (98.0%) invokeImpl(Object, Object[])
│                       └── 2.31 MiB (98.0%) invokeExact_MT(Object, Object, Object, Object) at java.lang.invoke.Invokers$Holder
│                           └── 2.31 MiB (98.0%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x000000880100d800
│                               └── 2.31 MiB (98.0%) invokeStatic(Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000008801001800
│                                   └── 2.31 MiB (98.0%) main(String[]) at org.renaissance.harness.RenaissanceSuite
│                                       ├── 2.06 MiB (87.4%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
│                                       │   └── 2.06 MiB (87.4%) runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)
│                                       │       └── 2.06 MiB (87.4%) foreach(Function1) at scala.collection.immutable.List
│                                       │           └── 2.06 MiB (87.4%) apply(Object): Object at scala.runtime.function.JProcedure1
│                                       │               └── 2.06 MiB (87.4%) apply(Object): BoxedUnit
│                                       │                   └── 2.06 MiB (87.4%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0
│                                       │                       └── 2.06 MiB (87.4%) runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
│                                       │                           └── 2.06 MiB (87.4%) executeBenchmark() at org.renaissance.harness.ExecutionDriver
│                                       │                               └── 2.06 MiB (87.4%) setUpBeforeAll(BenchmarkContext) at org.renaissance.jdk.concurrent.FjKmeans
│                                       │                                   └── 2.06 MiB (87.4%) generateData(int, int, int) at org.renaissance.jdk.concurrent.JavaKMeans
│                                       │                                       └── 2.06 MiB (87.4%) collect(Collector) at java.util.stream.ReferencePipeline
│                                       │                                           └── 2.06 MiB (87.4%) evaluate(TerminalOp) at java.util.stream.AbstractPipeline
│                                       │                                               └── 2.06 MiB (87.4%) evaluateSequential(PipelineHelper, Spliterator) at java.util.stream.ReduceOps$ReduceOp
│                                       │                                                   └── 2.06 MiB (87.4%) wrapAndCopyInto(Sink, Spliterator) at java.util.stream.AbstractPipeline
│                                       │                                                       └── 2.06 MiB (87.4%) copyInto(Sink, Spliterator)
│                                       │                                                           └── 2.06 MiB (87.4%) forEachRemaining(Consumer) at java.util.Spliterator$OfInt
│                                       │                                                               └── 2.06 MiB (87.4%) forEachRemaining(IntConsumer) at java.util.stream.Streams$RangeIntSpliterator
│                                       │                                                                   └── 2.06 MiB (87.4%) accept(int) at java.util.stream.IntPipeline$1$1
│                                       │                                                                       └── 2.06 MiB (87.4%) accept(Object) at java.util.stream.ReduceOps$3ReducingSink
│                                       │                                                                           └── 2.06 MiB (87.4%) accept(Object, Object) at java.util.stream.Collectors$$Lambda.0x000000880101bfb8
│                                       │                                                                               └── 2.06 MiB (87.4%) add(Object) at java.util.ArrayList
│                                       │                                                                                   └── 2.06 MiB (87.4%) add(Object, Object[], int)
│                                       │                                                                                       └── 2.06 MiB (87.4%) grow()
│                                       │                                                                                           └── 2.06 MiB (87.4%) grow(int)
│                                       │                                                                                               └── 2.06 MiB (87.4%, self 89.4% globally) copyOf(Object[], int) at java.util.Arrays
│                                       └── … 255 KiB (10.6%) <init>(ZipFile, ZipCoder, File, int) at java.util.zip.ZipFile$CleanableResource
│                                           └── 255 KiB (10.6%) get(File, boolean, ZipCoder) at java.util.zip.ZipFile$Source
│                                               └── 255 KiB (10.6%) <init>(ZipFile$Source$Key, boolean, ZipCoder)
│                                                   └── 255 KiB (10.6%) initCEN(int, ZipCoder)
└── … 48.7 KiB (2.0%) copyOf(Object[], int) at java.util.Arrays
```

## Hottest functions

### Self size

Functions with the most bytes retained within the function body, excluding callees.

|     % |     Size | Sampled objects | Function                      | Location                                    |
| ----: | -------: | --------------: | ----------------------------- | ------------------------------------------- |
| 89.4% | 2.11 MiB |               2 | `copyOf(Object[], int)`       | `java.util.Arrays`                          |
| 10.6% |  255 KiB |               1 | `initCEN(int, ZipCoder)`      | `java.util.zip.ZipFile$Source`              |
| <0.1% |     72 B |               1 | `getDeclaredFields0(boolean)` | `java.lang.Class`                           |
| <0.1% |     72 B |               3 | `valueOf(double)`             | `java.lang.Double`                          |
| <0.1% |     40 B |               1 | `lambda$generateData$4(int)`  | `org.renaissance.jdk.concurrent.JavaKMeans` |
| <0.1% |     16 B |               1 | `getClassLoadingLock(String)` | `java.lang.ClassLoader`                     |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Sampled objects | Function                      | Location                       |
| ----: | -------: | --------------: | ----------------------------- | ------------------------------ |
| 89.4% | 2.11 MiB |               2 | `copyOf(Object[], int)`       | `java.util.Arrays`             |
| 10.6% |  255 KiB |               1 | `initCEN(int, ZipCoder)`      | `java.util.zip.ZipFile$Source` |
| <0.1% |     72 B |               1 | `getDeclaredFields0(boolean)` | `java.lang.Class`              |
| <0.1% |     72 B |               3 | `valueOf(double)`             | `java.lang.Double`             |
| <0.1% |     16 B |               1 | `getClassLoadingLock(String)` | `java.lang.ClassLoader`        |

#### Lines

Lines with the largest contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Sampled objects | Location                |
| -----: | -------: | --------------: | ----------------------- |
| 100.0% | 2.11 MiB |               2 | `java.util.Arrays:3482` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |    Size | Sampled objects | Location                            |
| -----: | ------: | --------------: | ----------------------------------- |
| 100.0% | 255 KiB |               1 | `java.util.zip.ZipFile$Source:1733` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Sampled objects | Location               |
| -----: | ---: | --------------: | ---------------------- |
| 100.0% | 72 B |               3 | `java.lang.Double:773` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Size | Sampled objects | Location                                       |
| -----: | ---: | --------------: | ---------------------------------------------- |
| 100.0% | 40 B |               1 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

|      % | Size | Sampled objects | Location                    |
| -----: | ---: | --------------: | --------------------------- |
| 100.0% | 16 B |               1 | `java.lang.ClassLoader:680` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Sampled objects | Caller      | Location              |
| -----: | -------: | --------------: | ----------- | --------------------- |
| 100.0% | 2.11 MiB |               2 | `grow(int)` | `java.util.ArrayList` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |    Size | Sampled objects | Caller                                          | Location                       |
| -----: | ------: | --------------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 255 KiB |               1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `getDeclaredFields0(boolean)` (`java.lang.Class`)

|      % | Size | Sampled objects | Caller                              | Location          |
| -----: | ---: | --------------: | ----------------------------------- | ----------------- |
| 100.0% | 72 B |               1 | `privateGetDeclaredFields(boolean)` | `java.lang.Class` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Sampled objects | Caller                                           | Location                                    |
| -----: | ---: | --------------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 72 B |               3 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Size | Sampled objects | Caller       | Location                                                               |
| -----: | ---: | --------------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 40 B |               1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000880115dd48` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

|      % | Size | Sampled objects | Caller                             | Location                                 |
| -----: | ---: | --------------: | ---------------------------------- | ---------------------------------------- |
| 100.0% | 16 B |               1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

### Total size

Functions with the most bytes retained within the function and its callees.

|     % |     Size | Sampled objects | Function                                                                                                               | Location                                                               |
| ----: | -------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 98.0% | 2.31 MiB |               8 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| 98.0% | 2.31 MiB |               8 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000008801001800`                   |
| 98.0% | 2.31 MiB |               8 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000880100d800`                    |
| 98.0% | 2.31 MiB |               8 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                                     |
| 98.0% | 2.31 MiB |               8 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
| 98.0% | 2.31 MiB |               8 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
| 98.0% | 2.31 MiB |               8 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
| 98.0% | 2.31 MiB |               8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| 98.0% | 2.31 MiB |               8 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| 98.0% | 2.31 MiB |               8 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
| 89.4% | 2.11 MiB |               2 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
| 89.4% | 2.11 MiB |               2 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                  |
| 87.4% | 2.06 MiB |               7 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| 87.4% | 2.06 MiB |               6 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 87.4% | 2.06 MiB |               6 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| 87.4% | 2.06 MiB |               6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| 87.4% | 2.06 MiB |               6 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0` |
| 87.4% | 2.06 MiB |               6 | `apply(Object): BoxedUnit`                                                                                             | `scala.runtime.function.JProcedure1`                                   |
| 87.4% | 2.06 MiB |               6 | `apply(Object): Object`                                                                                                | `scala.runtime.function.JProcedure1`                                   |
| 87.4% | 2.06 MiB |               6 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Sampled objects | Function                                          | Location                                             |
| ----: | -------: | --------------: | ------------------------------------------------- | ---------------------------------------------------- |
| 98.0% | 2.31 MiB |               8 | `invokeStatic(Object, Object)`                    | `java.lang.invoke.LambdaForm$DMH.0x0000008801001800` |
| 98.0% | 2.31 MiB |               8 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000880100d800`  |
| 98.0% | 2.31 MiB |               8 | `invokeExact_MT(Object, Object, Object, Object)`  | `java.lang.invoke.Invokers$Holder`                   |
| 98.0% | 2.31 MiB |               8 | `invokeImpl(Object, Object[])`                    | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 98.0% | 2.31 MiB |               8 | `invoke(Object, Object[])`                        | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 98.0% | 2.31 MiB |               8 | `invoke(Object, Object[])`                        | `java.lang.reflect.Method`                           |
| 89.4% | 2.11 MiB |               2 | `copyOf(Object[], int)`                           | `java.util.Arrays`                                   |
| 89.4% | 2.11 MiB |               2 | `grow(int)`                                       | `java.util.ArrayList`                                |
| 87.4% | 2.06 MiB |               6 | `apply(Object): BoxedUnit`                        | `scala.runtime.function.JProcedure1`                 |
| 87.4% | 2.06 MiB |               6 | `apply(Object): Object`                           | `scala.runtime.function.JProcedure1`                 |
| 87.4% | 2.06 MiB |               6 | `foreach(Function1)`                              | `scala.collection.immutable.List`                    |
| 87.4% | 2.06 MiB |               5 | `accept(int)`                                     | `java.util.stream.IntPipeline$1$1`                   |
| 87.4% | 2.06 MiB |               5 | `forEachRemaining(IntConsumer)`                   | `java.util.stream.Streams$RangeIntSpliterator`       |
| 87.4% | 2.06 MiB |               5 | `forEachRemaining(Consumer)`                      | `java.util.Spliterator$OfInt`                        |
| 87.4% | 2.06 MiB |               5 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                  |
| 87.4% | 2.06 MiB |               5 | `wrapAndCopyInto(Sink, Spliterator)`              | `java.util.stream.AbstractPipeline`                  |
| 87.4% | 2.06 MiB |               5 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`                |
| 87.4% | 2.06 MiB |               5 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`                  |
| 87.4% | 2.06 MiB |               5 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`                 |
| 87.4% | 2.06 MiB |               1 | `grow()`                                          | `java.util.ArrayList`                                |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |     Size | Sampled objects | Caller                         | Location                                             |
| -----: | -------: | --------------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 2.31 MiB |               8 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801001800` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001800`)

|      % |     Size | Sampled objects | Caller                           | Location                                            |
| -----: | -------: | --------------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 2.31 MiB |               8 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000880100d800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000880100d800`)

|      % |     Size | Sampled objects | Caller                                           | Location                           |
| -----: | -------: | --------------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.31 MiB |               8 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Sampled objects | Caller                         | Location                                          |
| -----: | -------: | --------------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 2.31 MiB |               8 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Sampled objects | Caller                     | Location                                          |
| -----: | -------: | --------------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 2.31 MiB |               8 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Sampled objects | Caller                     | Location                   |
| -----: | -------: | --------------: | -------------------------- | -------------------------- |
| 100.0% | 2.31 MiB |               8 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |     Size | Sampled objects | Caller                                                      | Location                        |
| -----: | -------: | --------------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.31 MiB |               8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Sampled objects | Caller                                 | Location                        |
| -----: | -------: | --------------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.31 MiB |               8 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Sampled objects | Caller           | Location                        |
| -----: | -------: | --------------: | ---------------- | ------------------------------- |
| 100.0% | 2.31 MiB |               8 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Sampled objects | Caller      | Location              |
| -----: | -------: | --------------: | ----------- | --------------------- |
| 100.0% | 2.11 MiB |               2 | `grow(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|     % |     Size | Sampled objects | Caller               | Location              |
| ----: | -------: | --------------: | -------------------- | --------------------- |
| 97.7% | 2.06 MiB |               1 | `grow()`             | `java.util.ArrayList` |
|  2.3% | 48.7 KiB |               1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Sampled objects | Caller           | Location                                   |
| -----: | -------: | --------------: | ---------------- | ------------------------------------------ |
| 100.0% | 2.06 MiB |               7 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |     Size | Sampled objects | Caller               | Location                                  |
| -----: | -------: | --------------: | -------------------- | ----------------------------------------- |
| 100.0% | 2.06 MiB |               6 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |     Size | Sampled objects | Caller                                                                                                                 | Location                                    |
| -----: | -------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |               6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Sampled objects | Caller              | Location                                                               |
| -----: | -------: | --------------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.06 MiB |               6 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0`)

|      % |     Size | Sampled objects | Caller                     | Location                             |
| -----: | -------: | --------------: | -------------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |               6 | `apply(Object): BoxedUnit` | `scala.runtime.function.JProcedure1` |

##### `apply(Object): BoxedUnit` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Sampled objects | Caller                  | Location                             |
| -----: | -------: | --------------: | ----------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |               6 | `apply(Object): Object` | `scala.runtime.function.JProcedure1` |

##### `apply(Object): Object` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Sampled objects | Caller               | Location                          |
| -----: | -------: | --------------: | -------------------- | --------------------------------- |
| 100.0% | 2.06 MiB |               6 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |     Size | Sampled objects | Caller                                                                        | Location                                    |
| -----: | -------: | --------------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |               6 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|      % |     Size | Sampled objects | Caller                          | Location                                       |
| -----: | -------: | --------------: | ------------------------------- | ---------------------------------------------- |
| 100.0% | 2.06 MiB |               5 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|      % |     Size | Sampled objects | Caller                       | Location                      |
| -----: | -------: | --------------: | ---------------------------- | ----------------------------- |
| 100.0% | 2.06 MiB |               5 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|      % |     Size | Sampled objects | Caller                        | Location                            |
| -----: | -------: | --------------: | ----------------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |               5 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Sampled objects | Caller                               | Location                            |
| -----: | -------: | --------------: | ------------------------------------ | ----------------------------------- |
| 100.0% | 2.06 MiB |               5 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Sampled objects | Caller                                            | Location                              |
| -----: | -------: | --------------: | ------------------------------------------------- | ------------------------------------- |
| 100.0% | 2.06 MiB |               5 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |
|  <0.1% |     72 B |               3 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`   |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|      % |     Size | Sampled objects | Caller                 | Location                            |
| -----: | -------: | --------------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |               5 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Sampled objects | Caller               | Location                             |
| -----: | -------: | --------------: | -------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |               5 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|      % |     Size | Sampled objects | Caller                        | Location                                    |
| -----: | -------: | --------------: | ----------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |               5 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Sampled objects | Caller                       | Location              |
| -----: | -------: | --------------: | ---------------------------- | --------------------- |
| 100.0% | 2.06 MiB |               1 | `add(Object, Object[], int)` | `java.util.ArrayList` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |     Size | Sampled objects | Callee              | Location                                    |
| ----: | -------: | --------------: | ------------------- | ------------------------------------------- |
| 89.2% | 2.06 MiB |               7 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| 10.8% |  255 KiB |               1 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001800`)

|      % |     Size | Sampled objects | Callee           | Location                                   |
| -----: | -------: | --------------: | ---------------- | ------------------------------------------ |
| 100.0% | 2.31 MiB |               8 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000880100d800`)

|      % |     Size | Sampled objects | Callee                         | Location                                             |
| -----: | -------: | --------------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 2.31 MiB |               8 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801001800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Sampled objects | Callee                           | Location                                            |
| -----: | -------: | --------------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 2.31 MiB |               8 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000880100d800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Sampled objects | Callee                                           | Location                           |
| -----: | -------: | --------------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.31 MiB |               8 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Sampled objects | Callee                         | Location                                          |
| -----: | -------: | --------------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 2.31 MiB |               8 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |     Size | Sampled objects | Callee                     | Location                                          |
| -----: | -------: | --------------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 2.31 MiB |               8 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Sampled objects | Callee                     | Location                   |
| -----: | -------: | --------------: | -------------------------- | -------------------------- |
| 100.0% | 2.31 MiB |               8 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Sampled objects | Callee                                                      | Location                        |
| -----: | -------: | --------------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.31 MiB |               8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Sampled objects | Callee                                 | Location                        |
| -----: | -------: | --------------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.31 MiB |               8 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Sampled objects | Callee                  | Location           |
| -----: | -------: | --------------: | ----------------------- | ------------------ |
| 100.0% | 2.11 MiB |               2 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Sampled objects | Callee                                                                        | Location                                    |
| -----: | -------: | --------------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |               6 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  <0.1% |     16 B |               1 | `<clinit>()`                                                                  | `scala.Predef$`                             |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |     Size | Sampled objects | Callee                        | Location                                    |
| -----: | -------: | --------------: | ----------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |               5 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
|  <0.1% |     72 B |               1 | `<init>(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |     Size | Sampled objects | Callee                             | Location                                  |
| -----: | -------: | --------------: | ---------------------------------- | ----------------------------------------- |
| 100.0% | 2.06 MiB |               6 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Sampled objects | Callee               | Location                                  |
| -----: | -------: | --------------: | -------------------- | ----------------------------------------- |
| 100.0% | 2.06 MiB |               6 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0`)

|      % |     Size | Sampled objects | Callee                                                                                                                 | Location                                    |
| -----: | -------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |               6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object): BoxedUnit` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Sampled objects | Callee              | Location                                                               |
| -----: | -------: | --------------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.06 MiB |               6 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0` |

##### `apply(Object): Object` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Sampled objects | Callee                     | Location                             |
| -----: | -------: | --------------: | -------------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |               6 | `apply(Object): BoxedUnit` | `scala.runtime.function.JProcedure1` |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |     Size | Sampled objects | Callee                  | Location                             |
| -----: | -------: | --------------: | ----------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |               6 | `apply(Object): Object` | `scala.runtime.function.JProcedure1` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|      % |     Size | Sampled objects | Callee           | Location                                                               |
| -----: | -------: | --------------: | ---------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.06 MiB |               1 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`                             |
|  <0.1% |    112 B |               4 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000880115d8d8` |
|  <0.1% |     72 B |               3 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000880115db10` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|      % |     Size | Sampled objects | Callee        | Location                           |
| -----: | -------: | --------------: | ------------- | ---------------------------------- |
| 100.0% | 2.06 MiB |               5 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|      % |     Size | Sampled objects | Callee                          | Location                                       |
| -----: | -------: | --------------: | ------------------------------- | ---------------------------------------------- |
| 100.0% | 2.06 MiB |               5 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Sampled objects | Callee                       | Location                      |
| -----: | -------: | --------------: | ---------------------------- | ----------------------------- |
| 100.0% | 2.06 MiB |               5 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Sampled objects | Callee                        | Location                            |
| -----: | -------: | --------------: | ----------------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |               5 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|      % |     Size | Sampled objects | Callee                               | Location                            |
| -----: | -------: | --------------: | ------------------------------------ | ----------------------------------- |
| 100.0% | 2.06 MiB |               5 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Sampled objects | Callee                                            | Location                              |
| -----: | -------: | --------------: | ------------------------------------------------- | ------------------------------------- |
| 100.0% | 2.06 MiB |               5 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|      % |     Size | Sampled objects | Callee                 | Location                            |
| -----: | -------: | --------------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |               5 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Sampled objects | Callee      | Location              |
| -----: | -------: | --------------: | ----------- | --------------------- |
| 100.0% | 2.06 MiB |               1 | `grow(int)` | `java.util.ArrayList` |

## Hottest call stacks

Call stacks with the most bytes retained in their leaf frame.

|     % |     Size | Sampled objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | --------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 87.4% | 2.06 MiB |               1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x000000880101bfb8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0`) ← `apply(Object): BoxedUnit` (`scala.runtime.function.JProcedure1`) ← `apply(Object): Object` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000880100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 10.6% |  255 KiB |               1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run(): Void` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run(): Object` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run(): URLClassPath$Loader` (`jdk.internal.loader.URLClassPath$3`) ← `run(): Object` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run(): Class` (`java.net.URLClassLoader$1`) ← `run(): Object` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000880100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.0% | 48.7 KiB |               1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dda28`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dd7e0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011d7aa8`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| <0.1% |     72 B |               1 | `getDeclaredFields0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredFields(boolean)` ← `getDeclaredField(String)` ← `<clinit>()` (`java.util.concurrent.ForkJoinPool`) ← `<init>(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0`) ← `apply(Object): BoxedUnit` (`scala.runtime.function.JProcedure1`) ← `apply(Object): Object` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000880100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <0.1% |     72 B |               3 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000880115db10`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000880115d8d8`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0`) ← `apply(Object): BoxedUnit` (`scala.runtime.function.JProcedure1`) ← `apply(Object): Object` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000880100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                        |
| <0.1% |     40 B |               1 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000880115dd48`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000880115d8d8`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0`) ← `apply(Object): BoxedUnit` (`scala.runtime.function.JProcedure1`) ← `apply(Object): Object` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000880100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                              |
| <0.1% |     16 B |               1 | `getClassLoadingLock(String)` (`java.lang.ClassLoader`) ← `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClassOrNull(String)` ← `loadClassOrNull(String, boolean)` ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `<clinit>()` (`scala.package$`) ← `<clinit>()` (`scala.Predef$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000880100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
