# Retained heap profile

Retained 2.58 MiB over 13 objects (203 KiB per object).

| Category         |      % |     Size | Objects |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 2.57 MiB |      10 |
| Ours             |  <0.1% |    120 B |       3 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 2.58 MiB (100.0%) main(String[]) at org.renaissance.core.Launcher
    └── 2.58 MiB (100.0%) launchHarnessClass(String, String[])
        └── 2.58 MiB (100.0%) loadAndInvokeHarnessClass(ModuleLoader, String, String[])
            └── 2.58 MiB (100.0%) invoke(Object, Object[]) at java.lang.reflect.Method
                └── 2.58 MiB (100.0%) invoke(Object, Object[]) at jdk.internal.reflect.DirectMethodHandleAccessor
                    └── 2.58 MiB (100.0%) invokeImpl(Object, Object[])
                        └── 2.58 MiB (100.0%) invokeExact_MT(Object, Object, Object, Object) at java.lang.invoke.Invokers$Holder
                            └── 2.58 MiB (100.0%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x000000780100d800
                                └── 2.58 MiB (100.0%) invokeStatic(Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007801001800
                                    └── 2.58 MiB (100.0%) main(String[]) at org.renaissance.harness.RenaissanceSuite
                                        ├── 2.31 MiB (89.7%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
                                        │   └── 2.31 MiB (89.7%) runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)
                                        │       └── 2.31 MiB (89.7%) foreach(Function1) at scala.collection.immutable.List
                                        │           └── 2.31 MiB (89.7%) apply(Object) at scala.runtime.function.JProcedure1
                                        │               └── … 2.31 MiB (89.7%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8
                                        │                   └── 2.31 MiB (89.7%) runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
                                        │                       ├── 2.06 MiB (80.0%) executeBenchmark() at org.renaissance.harness.ExecutionDriver
                                        │                       │   └── 2.06 MiB (80.0%) setUpBeforeAll(BenchmarkContext) at org.renaissance.jdk.concurrent.FjKmeans
                                        │                       │       └── 2.06 MiB (80.0%) generateData(int, int, int) at org.renaissance.jdk.concurrent.JavaKMeans
                                        │                       │           └── 2.06 MiB (80.0%) collect(Collector) at java.util.stream.ReferencePipeline
                                        │                       │               └── 2.06 MiB (80.0%) evaluate(TerminalOp) at java.util.stream.AbstractPipeline
                                        │                       │                   └── 2.06 MiB (80.0%) evaluateSequential(PipelineHelper, Spliterator) at java.util.stream.ReduceOps$ReduceOp
                                        │                       │                       └── 2.06 MiB (80.0%) wrapAndCopyInto(Sink, Spliterator) at java.util.stream.AbstractPipeline
                                        │                       │                           └── 2.06 MiB (80.0%) copyInto(Sink, Spliterator)
                                        │                       │                               └── 2.06 MiB (80.0%) forEachRemaining(Consumer) at java.util.Spliterator$OfInt
                                        │                       │                                   └── 2.06 MiB (80.0%) forEachRemaining(IntConsumer) at java.util.stream.Streams$RangeIntSpliterator
                                        │                       │                                       └── 2.06 MiB (80.0%) accept(int) at java.util.stream.IntPipeline$1$1
                                        │                       │                                           └── 2.06 MiB (80.0%) accept(Object) at java.util.stream.ReduceOps$3ReducingSink
                                        │                       │                                               └── 2.06 MiB (80.0%) accept(Object, Object) at java.util.stream.Collectors$$Lambda.0x000000780101bfb8
                                        │                       │                                                   └── 2.06 MiB (80.0%) add(Object) at java.util.ArrayList
                                        │                       │                                                       └── 2.06 MiB (80.0%) add(Object, Object[], int)
                                        │                       │                                                           └── 2.06 MiB (80.0%) grow()
                                        │                       │                                                               └── 2.06 MiB (80.0%) grow(int)
                                        │                       │                                                                   └── 2.06 MiB (80.0%) copyOf(Object[], int) at java.util.Arrays
                                        │                       └── … 255 KiB (9.7%) initCEN(int, ZipCoder) at java.util.zip.ZipFile$Source
                                        └── … 271 KiB (10.3%) findClass(String) at java.net.URLClassLoader
                                            └── 271 KiB (10.3%) doPrivileged(PrivilegedExceptionAction, AccessControlContext) at java.security.AccessController
                                                └── … 271 KiB (10.3%) executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class) at java.security.AccessController
                                                    ├── … 255 KiB (9.7%, self 19.3% globally) initCEN(int, ZipCoder) at java.util.zip.ZipFile$Source
                                                    └── … 16 KiB (0.6%) resize() at java.util.HashMap
```

## Hottest functions

### Self size

Functions with the most bytes retained within the function body, excluding callees.

|     % |     Size | Objects | Function                     | Location                                    |
| ----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 80.0% | 2.06 MiB |       1 | `copyOf(Object[], int)`      | `java.util.Arrays`                          |
| 19.3% |  510 KiB |       2 | `initCEN(int, ZipCoder)`     | `java.util.zip.ZipFile$Source`              |
|  0.6% |   16 KiB |       1 | `resize()`                   | `java.util.HashMap`                         |
| <0.1% |    128 B |       1 | `findBootstrapClass(String)` | `java.lang.ClassLoader`                     |
| <0.1% |    120 B |       3 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| <0.1% |     72 B |       3 | `valueOf(double)`            | `java.lang.Double`                          |
| <0.1% |     64 B |       1 | `newLinkedHashMap(int)`      | `java.util.LinkedHashMap`                   |
| <0.1% |     48 B |       1 | `compress(char[], int, int)` | `java.lang.StringUTF16`                     |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Objects | Function                     | Location                       |
| ----: | -------: | ------: | ---------------------------- | ------------------------------ |
| 80.0% | 2.06 MiB |       1 | `copyOf(Object[], int)`      | `java.util.Arrays`             |
| 19.3% |  510 KiB |       2 | `initCEN(int, ZipCoder)`     | `java.util.zip.ZipFile$Source` |
|  0.6% |   16 KiB |       1 | `resize()`                   | `java.util.HashMap`            |
| <0.1% |    128 B |       1 | `findBootstrapClass(String)` | `java.lang.ClassLoader`        |
| <0.1% |     72 B |       3 | `valueOf(double)`            | `java.lang.Double`             |
| <0.1% |     64 B |       1 | `newLinkedHashMap(int)`      | `java.util.LinkedHashMap`      |
| <0.1% |     48 B |       1 | `compress(char[], int, int)` | `java.lang.StringUTF16`        |

#### Lines

Lines with the largest contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Objects | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 2.06 MiB |       1 | `java.util.Arrays:3482` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |    Size | Objects | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 510 KiB |       2 | `java.util.zip.ZipFile$Source:1733` |

##### `resize()` (`java.util.HashMap`)

|      % |   Size | Objects | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 16 KiB |       1 | `java.util.HashMap:710` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Size | Objects | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 120 B |       3 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Objects | Location               |
| -----: | ---: | ------: | ---------------------- |
| 100.0% | 72 B |       3 | `java.lang.Double:773` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

|      % | Size | Objects | Location                       |
| -----: | ---: | ------: | ------------------------------ |
| 100.0% | 64 B |       1 | `java.util.LinkedHashMap:1078` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|      % | Size | Objects | Location                    |
| -----: | ---: | ------: | --------------------------- |
| 100.0% | 48 B |       1 | `java.lang.StringUTF16:211` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Objects | Caller      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow(int)` | `java.util.ArrayList` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |    Size | Objects | Caller                                          | Location                       |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 510 KiB |       2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `resize()` (`java.util.HashMap`)

|      % |   Size | Objects | Caller                                          | Location            |
| -----: | -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 16 KiB |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `findBootstrapClass(String)` (`java.lang.ClassLoader`)

|      % |  Size | Objects | Caller                             | Location                |
| -----: | ----: | ------: | ---------------------------------- | ----------------------- |
| 100.0% | 128 B |       1 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Size | Objects | Caller       | Location                                                               |
| -----: | ----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 120 B |       3 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011f96e0` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Objects | Caller                                           | Location                                    |
| -----: | ---: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 72 B |       3 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

|      % | Size | Objects | Caller        | Location                   |
| -----: | ---: | ------: | ------------- | -------------------------- |
| 100.0% | 64 B |       1 | `<init>(int)` | `java.util.jar.Attributes` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|      % | Size | Objects | Caller                           | Location           |
| -----: | ---: | ------: | -------------------------------- | ------------------ |
| 100.0% | 48 B |       1 | `<init>(char[], int, int, Void)` | `java.lang.String` |

### Total size

Functions with the most bytes retained within the function and its callees.

|      % |     Size | Objects | Function                                                                                                               | Location                                                               |
| -----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.58 MiB |      13 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| 100.0% | 2.58 MiB |      13 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007801001800`                   |
| 100.0% | 2.58 MiB |      13 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000780100d800`                    |
| 100.0% | 2.58 MiB |      13 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                                     |
| 100.0% | 2.58 MiB |      13 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
| 100.0% | 2.58 MiB |      13 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
| 100.0% | 2.58 MiB |      13 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
| 100.0% | 2.58 MiB |      13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| 100.0% | 2.58 MiB |      13 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| 100.0% | 2.58 MiB |      13 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  89.7% | 2.31 MiB |      11 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  89.7% | 2.31 MiB |       9 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  89.7% | 2.31 MiB |       9 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8` |
|  89.7% | 2.31 MiB |       9 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  89.7% | 2.31 MiB |       9 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  89.7% | 2.31 MiB |       9 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  80.0% | 2.06 MiB |       7 | `accept(int)`                                                                                                          | `java.util.stream.IntPipeline$1$1`                                     |
|  80.0% | 2.06 MiB |       7 | `forEachRemaining(IntConsumer)`                                                                                        | `java.util.stream.Streams$RangeIntSpliterator`                         |
|  80.0% | 2.06 MiB |       7 | `forEachRemaining(Consumer)`                                                                                           | `java.util.Spliterator$OfInt`                                          |
|  80.0% | 2.06 MiB |       7 | `copyInto(Sink, Spliterator)`                                                                                          | `java.util.stream.AbstractPipeline`                                    |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|      % |     Size | Objects | Function                                          | Location                                             |
| -----: | -------: | ------: | ------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 2.58 MiB |      13 | `invokeStatic(Object, Object)`                    | `java.lang.invoke.LambdaForm$DMH.0x0000007801001800` |
| 100.0% | 2.58 MiB |      13 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000780100d800`  |
| 100.0% | 2.58 MiB |      13 | `invokeExact_MT(Object, Object, Object, Object)`  | `java.lang.invoke.Invokers$Holder`                   |
| 100.0% | 2.58 MiB |      13 | `invokeImpl(Object, Object[])`                    | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 100.0% | 2.58 MiB |      13 | `invoke(Object, Object[])`                        | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 100.0% | 2.58 MiB |      13 | `invoke(Object, Object[])`                        | `java.lang.reflect.Method`                           |
|  89.7% | 2.31 MiB |       9 | `apply(Object)`                                   | `scala.runtime.function.JProcedure1`                 |
|  89.7% | 2.31 MiB |       9 | `foreach(Function1)`                              | `scala.collection.immutable.List`                    |
|  80.0% | 2.06 MiB |       7 | `accept(int)`                                     | `java.util.stream.IntPipeline$1$1`                   |
|  80.0% | 2.06 MiB |       7 | `forEachRemaining(IntConsumer)`                   | `java.util.stream.Streams$RangeIntSpliterator`       |
|  80.0% | 2.06 MiB |       7 | `forEachRemaining(Consumer)`                      | `java.util.Spliterator$OfInt`                        |
|  80.0% | 2.06 MiB |       7 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                  |
|  80.0% | 2.06 MiB |       7 | `wrapAndCopyInto(Sink, Spliterator)`              | `java.util.stream.AbstractPipeline`                  |
|  80.0% | 2.06 MiB |       7 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`                |
|  80.0% | 2.06 MiB |       7 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`                  |
|  80.0% | 2.06 MiB |       7 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`                 |
|  80.0% | 2.06 MiB |       1 | `copyOf(Object[], int)`                           | `java.util.Arrays`                                   |
|  80.0% | 2.06 MiB |       1 | `grow(int)`                                       | `java.util.ArrayList`                                |
|  80.0% | 2.06 MiB |       1 | `grow()`                                          | `java.util.ArrayList`                                |
|  80.0% | 2.06 MiB |       1 | `add(Object, Object[], int)`                      | `java.util.ArrayList`                                |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |     Size | Objects | Caller                         | Location                                             |
| -----: | -------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 2.58 MiB |      13 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801001800` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001800`)

|      % |     Size | Objects | Caller                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 2.58 MiB |      13 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780100d800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000780100d800`)

|      % |     Size | Objects | Caller                                           | Location                           |
| -----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.58 MiB |      13 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Objects | Caller                         | Location                                          |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 2.58 MiB |      13 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Caller                     | Location                                          |
| -----: | -------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 2.58 MiB |      13 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Caller                     | Location                   |
| -----: | -------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 2.58 MiB |      13 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |     Size | Objects | Caller                                                      | Location                        |
| -----: | -------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.58 MiB |      13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.58 MiB |      13 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Caller           | Location                        |
| -----: | -------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 2.58 MiB |      13 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Caller           | Location                                   |
| -----: | -------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 2.31 MiB |      11 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Caller              | Location                                                               |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.31 MiB |       9 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`)

|      % |     Size | Objects | Caller          | Location                             |
| -----: | -------: | ------: | --------------- | ------------------------------------ |
| 100.0% | 2.31 MiB |       9 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Objects | Caller               | Location                             |
| -----: | -------: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 2.31 MiB |       9 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| 100.0% | 2.31 MiB |       9 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |     Size | Objects | Caller                                                                        | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.31 MiB |       9 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Caller           | Location                                    |
| -----: | -------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 2.31 MiB |       9 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|      % |     Size | Objects | Caller                          | Location                                       |
| -----: | -------: | ------: | ------------------------------- | ---------------------------------------------- |
| 100.0% | 2.06 MiB |       7 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|      % |     Size | Objects | Caller                       | Location                      |
| -----: | -------: | ------: | ---------------------------- | ----------------------------- |
| 100.0% | 2.06 MiB |       7 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|      % |     Size | Objects | Caller                        | Location                            |
| -----: | -------: | ------: | ----------------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       7 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Caller                               | Location                            |
| -----: | -------: | ------: | ------------------------------------ | ----------------------------------- |
| 100.0% | 2.06 MiB |       7 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Caller                                            | Location                              |
| -----: | -------: | ------: | ------------------------------------------------- | ------------------------------------- |
| 100.0% | 2.06 MiB |       7 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |
|  <0.1% |     72 B |       3 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`   |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|      % |     Size | Objects | Caller                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       7 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Caller               | Location                             |
| -----: | -------: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |       7 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|      % |     Size | Objects | Caller                        | Location                                    |
| -----: | -------: | ------: | ----------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |       7 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Objects | Caller      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Objects | Caller   | Location              |
| -----: | -------: | ------: | -------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow()` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Objects | Caller                       | Location              |
| -----: | -------: | ------: | ---------------------------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Objects | Caller        | Location              |
| -----: | -------: | ------: | ------------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `add(Object)` | `java.util.ArrayList` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |     Size | Objects | Callee              | Location                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 89.7% | 2.31 MiB |      11 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| 10.3% |  271 KiB |       2 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001800`)

|      % |     Size | Objects | Callee           | Location                                   |
| -----: | -------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 2.58 MiB |      13 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000780100d800`)

|      % |     Size | Objects | Callee                         | Location                                             |
| -----: | -------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 2.58 MiB |      13 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801001800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Objects | Callee                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 2.58 MiB |      13 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780100d800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Callee                                           | Location                           |
| -----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.58 MiB |      13 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Callee                         | Location                                          |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 2.58 MiB |      13 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |     Size | Objects | Callee                     | Location                                          |
| -----: | -------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 2.58 MiB |      13 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Callee                     | Location                   |
| -----: | -------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 2.58 MiB |      13 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Callee                                                      | Location                        |
| -----: | -------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.58 MiB |      13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Callee                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.58 MiB |      13 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Callee                                                                        | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.31 MiB |       9 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  <0.1% |    128 B |       1 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |
|  <0.1% |     48 B |       1 | `apply(Function0)`                                                            | `scala.util.Try$`                           |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Objects | Callee                                                                                       | Location                                  |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 89.2% | 2.06 MiB |       7 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| 10.8% |  255 KiB |       2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`)

|      % |     Size | Objects | Callee                                                                                                                 | Location                                    |
| -----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.31 MiB |       9 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Objects | Callee              | Location                                                               |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.31 MiB |       9 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8` |
| 100.0% | 2.31 MiB |       9 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |     Size | Objects | Callee          | Location                             |
| -----: | -------: | ------: | --------------- | ------------------------------------ |
| 100.0% | 2.31 MiB |       9 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Callee               | Location                          |
| -----: | -------: | ------: | -------------------- | --------------------------------- |
| 100.0% | 2.31 MiB |       9 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|      % |     Size | Objects | Callee           | Location                                                               |
| -----: | -------: | ------: | ---------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.06 MiB |       1 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`                             |
|  <0.1% |    192 B |       6 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011f9270` |
|  <0.1% |     72 B |       3 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011f94a8` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|      % |     Size | Objects | Callee        | Location                           |
| -----: | -------: | ------: | ------------- | ---------------------------------- |
| 100.0% | 2.06 MiB |       7 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|      % |     Size | Objects | Callee                          | Location                                       |
| -----: | -------: | ------: | ------------------------------- | ---------------------------------------------- |
| 100.0% | 2.06 MiB |       7 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Callee                       | Location                      |
| -----: | -------: | ------: | ---------------------------- | ----------------------------- |
| 100.0% | 2.06 MiB |       7 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Callee                        | Location                            |
| -----: | -------: | ------: | ----------------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       7 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|      % |     Size | Objects | Callee                               | Location                            |
| -----: | -------: | ------: | ------------------------------------ | ----------------------------------- |
| 100.0% | 2.06 MiB |       7 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Callee                                            | Location                              |
| -----: | -------: | ------: | ------------------------------------------------- | ------------------------------------- |
| 100.0% | 2.06 MiB |       7 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|      % |     Size | Objects | Callee                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       7 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Objects | Callee                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 2.06 MiB |       1 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Objects | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Objects | Callee   | Location              |
| -----: | -------: | ------: | -------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow()` | `java.util.ArrayList` |

## Hottest call stacks

Call stacks with the most bytes retained in their leaf frame.

Common call stack: `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000780100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.0% | 2.06 MiB |       1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x000000780101bfb8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  9.7% |  255 KiB |       1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  9.7% |  255 KiB |       1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` |
|  0.6% |   16 KiB |       1 | `resize()` (`java.util.HashMap`) ← `putVal(int, Object, Object, boolean, boolean)` ← `put(Object, Object)` ← `read(InputStream, String)` (`java.util.jar.Manifest`) ← `<init>(JarVerifier, InputStream, String)` ← `<init>(InputStream, String)` ← `getManifestFromReference()` (`java.util.jar.JarFile`) ← `getManifest()` ← `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |    128 B |       1 | `findBootstrapClass(String)` (`java.lang.ClassLoader`) ← `findBootstrapClassOrNull(String)` ← `findBootstrapClassOrNull(String)` (`java.lang.System$2`) ← `loadClassOrNull(String, boolean)` (`jdk.internal.loader.ClassLoaders$BootClassLoader`) ← `loadClassOrNull(String)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClassOrNull(String, boolean)` ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `releaseFence()` (`scala.runtime.Statics`) ← `<init>(Object)` (`scala.collection.ArrayOps$ArrayIterator`) ← `iterator()` (`scala.collection.immutable.ArraySeq$ofRef`) ← `addAll(IterableOnce)` (`scala.collection.mutable.Growable`) ← `addAll$(Growable, IterableOnce)` ← `addAll(IterableOnce)` (`scala.collection.immutable.MapBuilderImpl`) ← `from(IterableOnce)` (`scala.collection.immutable.Map$`) ← `from(IterableOnce)` ← `apply(Seq)` (`scala.collection.MapFactory`) ← `apply$(MapFactory, Seq)` ← `apply(Seq)` (`scala.collection.immutable.Map$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |    120 B |       3 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011f96e0`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011f9270`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                     |
| <0.1% |     72 B |       3 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011f94a8`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011f9270`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                               |
| <0.1% |     64 B |       1 | `newLinkedHashMap(int)` (`java.util.LinkedHashMap`) ← `<init>(int)` (`java.util.jar.Attributes`) ← `read(InputStream, String)` (`java.util.jar.Manifest`) ← `<init>(JarVerifier, InputStream, String)` ← `<init>(InputStream, String)` ← `getManifestFromReference()` (`java.util.jar.JarFile`) ← `getManifest()` ← `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <0.1% |     48 B |       1 | `compress(char[], int, int)` (`java.lang.StringUTF16`) ← `<init>(char[], int, int, Void)` (`java.lang.String`) ← `<init>(char[], int, int)` ← `loadConvert(char[], int, int, StringBuilder)` (`java.util.Properties`) ← `load0(Properties$LineReader)` ← `load(InputStream)` ← `loadProperties(URL)` (`org.renaissance.core.ResourceUtils`) ← `loadPropertiesAsMap(URL)` ← `create(Path, String, Optional, Map, boolean)` (`org.renaissance.core.BenchmarkSuite`) ← `$anonfun$1(Path, Config)` (`org.renaissance.harness.RenaissanceSuite$`) ← `apply()` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007801136f20`) ← `apply(Function0)` (`scala.util.Try$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
