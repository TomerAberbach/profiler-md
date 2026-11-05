# Retained heap profile diff

Retained 2.36 MiB → 2.58 MiB (+222.64 KiB, +9.2%) over 9 → 13 objects (268 KiB → 203 KiB per object).

| Category         |  Change |        Delta |      % |                Size | Objects |
| ---------------- | ------: | -----------: | -----: | ------------------: | ------: |
| Standard library |   +9.2% | +222.562 KiB | 100.0% | 2.36 MiB → 2.57 MiB |  8 → 10 |
| Ours             | +200.0% |        +80 B |  <0.1% |        40 B → 120 B |   1 → 3 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 2.31 MiB → 2.58 MiB (98.0% → 100.0%) main(String[]) at org.renaissance.core.Launcher
│   └── 2.31 MiB → 2.58 MiB (98.0% → 100.0%) launchHarnessClass(String, String[])
│       └── 2.31 MiB → 2.58 MiB (98.0% → 100.0%) loadAndInvokeHarnessClass(ModuleLoader, String, String[])
│           └── 2.31 MiB → 2.58 MiB (98.0% → 100.0%) invoke(Object, Object[]) at java.lang.reflect.Method
│               └── 2.31 MiB → 2.58 MiB (98.0% → 100.0%) invoke(Object, Object[]) at jdk.internal.reflect.DirectMethodHandleAccessor
│                   └── 2.31 MiB → 2.58 MiB (98.0% → 100.0%) invokeImpl(Object, Object[])
│                       └── 2.31 MiB → 2.58 MiB (98.0% → 100.0%) invokeExact_MT(Object, Object, Object, Object) at java.lang.invoke.Invokers$Holder
│                           └── 2.31 MiB → 2.58 MiB (98.0% → 100.0%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x000000780100d800
│                               └── 2.31 MiB → 2.58 MiB (98.0% → 100.0%) invokeStatic(Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007801001800
│                                   └── 2.31 MiB → 2.58 MiB (98.0% → 100.0%) main(String[]) at org.renaissance.harness.RenaissanceSuite
│                                       ├── 2.06 MiB → 2.31 MiB (87.4% → 89.7%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
│                                       │   └── 2.06 MiB → 2.31 MiB (87.4% → 89.7%) runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)
│                                       │       └── 2.06 MiB → 2.31 MiB (87.4% → 89.7%) foreach(Function1) at scala.collection.immutable.List
│                                       │           └── 2.06 MiB → 2.31 MiB (87.4% → 89.7%) apply(Object) at scala.runtime.function.JProcedure1
│                                       │               └── … 2.06 MiB → 2.31 MiB (87.4% → 89.7%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8
│                                       │                   ├── 0 B → 2.31 MiB (0.0% → 89.7%) runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
│                                       │                   │   ├── 0 B → 2.06 MiB (0.0% → 80.0%) executeBenchmark() at org.renaissance.harness.ExecutionDriver
│                                       │                   │   │   └── 0 B → 2.06 MiB (0.0% → 80.0%) setUpBeforeAll(BenchmarkContext) at org.renaissance.jdk.concurrent.FjKmeans
│                                       │                   │   │       └── 0 B → 2.06 MiB (0.0% → 80.0%) generateData(int, int, int) at org.renaissance.jdk.concurrent.JavaKMeans
│                                       │                   │   │           └── 0 B → 2.06 MiB (0.0% → 80.0%) collect(Collector) at java.util.stream.ReferencePipeline
│                                       │                   │   │               └── 0 B → 2.06 MiB (0.0% → 80.0%) evaluate(TerminalOp) at java.util.stream.AbstractPipeline
│                                       │                   │   │                   └── 0 B → 2.06 MiB (0.0% → 80.0%) evaluateSequential(PipelineHelper, Spliterator) at java.util.stream.ReduceOps$ReduceOp
│                                       │                   │   │                       └── 0 B → 2.06 MiB (0.0% → 80.0%) wrapAndCopyInto(Sink, Spliterator) at java.util.stream.AbstractPipeline
│                                       │                   │   │                           └── 0 B → 2.06 MiB (0.0% → 80.0%) copyInto(Sink, Spliterator)
│                                       │                   │   │                               └── 0 B → 2.06 MiB (0.0% → 80.0%) forEachRemaining(Consumer) at java.util.Spliterator$OfInt
│                                       │                   │   │                                   └── 0 B → 2.06 MiB (0.0% → 80.0%) forEachRemaining(IntConsumer) at java.util.stream.Streams$RangeIntSpliterator
│                                       │                   │   │                                       └── 0 B → 2.06 MiB (0.0% → 80.0%) accept(int) at java.util.stream.IntPipeline$1$1
│                                       │                   │   │                                           └── 0 B → 2.06 MiB (0.0% → 80.0%) accept(Object) at java.util.stream.ReduceOps$3ReducingSink
│                                       │                   │   │                                               └── 0 B → 2.06 MiB (0.0% → 80.0%) accept(Object, Object) at java.util.stream.Collectors$$Lambda.0x000000780101bfb8
│                                       │                   │   │                                                   └── 0 B → 2.06 MiB (0.0% → 80.0%) add(Object) at java.util.ArrayList
│                                       │                   │   │                                                       └── 0 B → 2.06 MiB (0.0% → 80.0%) add(Object, Object[], int)
│                                       │                   │   │                                                           └── 0 B → 2.06 MiB (0.0% → 80.0%) grow()
│                                       │                   │   │                                                               └── 0 B → 2.06 MiB (0.0% → 80.0%) grow(int)
│                                       │                   │   │                                                                   └── 0 B → 2.06 MiB (0.0% → 80.0%) copyOf(Object[], int) at java.util.Arrays
│                                       │                   │   └── … 0 B → 255 KiB (0.0% → 9.7%) initCEN(int, ZipCoder) at java.util.zip.ZipFile$Source
│                                       │                   └── … 2.06 MiB → 0 B (87.4% → 0.0%, self 89.4% → 80.0% globally) copyOf(Object[], int) at java.util.Arrays
│                                       └── … 255 KiB → 271 KiB (10.6% → 10.3%) executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class) at java.security.AccessController
│                                           ├── … 255 KiB (10.6% → 9.7%, self 10.6% → 19.3% globally) initCEN(int, ZipCoder) at java.util.zip.ZipFile$Source
│                                           └── … 0 B → 16 KiB (0.0% → 0.6%) resize() at java.util.HashMap
└── … 48.7 KiB → 0 B (2.0% → 0.0%) copyOf(Object[], int) at java.util.Arrays
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |              Size | Objects | Function                     | Location                                    |
| ------: | -----------: | ------------: | ----------------: | ------: | ---------------------------- | ------------------------------------------- |
| +100.0% | +255.085 KiB | 10.6% → 19.3% | 255 KiB → 510 KiB |   1 → 2 | `initCEN(int, ZipCoder)`     | `java.util.zip.ZipFile$Source`              |
|     new |  +16.015 KiB |   0.0% → 0.6% |      0 B → 16 KiB |   0 → 1 | `resize()`                   | `java.util.HashMap`                         |
|     new |       +128 B |  0.0% → <0.1% |       0 B → 128 B |   0 → 1 | `findBootstrapClass(String)` | `java.lang.ClassLoader`                     |
| +200.0% |        +80 B |         <0.1% |      40 B → 120 B |   1 → 3 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
|     new |        +64 B |  0.0% → <0.1% |        0 B → 64 B |   0 → 1 | `newLinkedHashMap(int)`      | `java.util.LinkedHashMap`                   |
|     new |        +48 B |  0.0% → <0.1% |        0 B → 48 B |   0 → 1 | `compress(char[], int, int)` | `java.lang.StringUTF16`                     |

##### Standard library

|  Change |        Delta |             % |              Size | Objects | Function                     | Location                       |
| ------: | -----------: | ------------: | ----------------: | ------: | ---------------------------- | ------------------------------ |
| +100.0% | +255.085 KiB | 10.6% → 19.3% | 255 KiB → 510 KiB |   1 → 2 | `initCEN(int, ZipCoder)`     | `java.util.zip.ZipFile$Source` |
|     new |  +16.015 KiB |   0.0% → 0.6% |      0 B → 16 KiB |   0 → 1 | `resize()`                   | `java.util.HashMap`            |
|     new |       +128 B |  0.0% → <0.1% |       0 B → 128 B |   0 → 1 | `findBootstrapClass(String)` | `java.lang.ClassLoader`        |
|     new |        +64 B |  0.0% → <0.1% |        0 B → 64 B |   0 → 1 | `newLinkedHashMap(int)`      | `java.util.LinkedHashMap`      |
|     new |        +48 B |  0.0% → <0.1% |        0 B → 48 B |   0 → 1 | `compress(char[], int, int)` | `java.lang.StringUTF16`        |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |       Delta |             % |                Size | Objects | Function                      | Location                |
| ------: | ----------: | ------------: | ------------------: | ------: | ----------------------------- | ----------------------- |
|   -2.3% | -48.687 KiB | 89.4% → 80.0% | 2.11 MiB → 2.06 MiB |   2 → 1 | `copyOf(Object[], int)`       | `java.util.Arrays`      |
| removed |       -72 B |  <0.1% → 0.0% |          72 B → 0 B |   1 → 0 | `getDeclaredFields0(boolean)` | `java.lang.Class`       |
| removed |       -16 B |  <0.1% → 0.0% |          16 B → 0 B |   1 → 0 | `getClassLoadingLock(String)` | `java.lang.ClassLoader` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |              Size | Objects | Location                            |
| ------: | -----------: | -----: | ----------------: | ------: | ----------------------------------- |
| +100.0% | +255.085 KiB | 100.0% | 255 KiB → 510 KiB |   1 → 2 | `java.util.zip.ZipFile$Source:1733` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |             % |         Size | Objects | Location                |
| -----: | ----------: | ------------: | -----------: | ------: | ----------------------- |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `java.util.HashMap:710` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % |         Size | Objects | Location                                       |
| ------: | ----: | -----: | -----------: | ------: | ---------------------------------------------- |
| +200.0% | +80 B | 100.0% | 40 B → 120 B |   1 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Location                       |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------ |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `java.util.LinkedHashMap:1078` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change | Delta |             % |       Size | Objects | Location                    |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `java.lang.StringUTF16:211` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size | Objects | Location                |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------- |
|  -2.3% | -48.687 KiB | 100.0% | 2.11 MiB → 2.06 MiB |   2 → 1 | `java.util.Arrays:3482` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % |       Size | Objects | Location                    |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |   1 → 0 | `java.lang.ClassLoader:680` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |              Size | Objects | Caller                                          | Location                       |
| ------: | -----------: | -----: | ----------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +100.0% | +255.085 KiB | 100.0% | 255 KiB → 510 KiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |             % |         Size | Objects | Caller                                          | Location            |
| -----: | ----------: | ------------: | -----------: | ------: | ----------------------------------------------- | ------------------- |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `findBootstrapClass(String)` (`java.lang.ClassLoader`)

| Change |  Delta |             % |        Size | Objects | Caller                             | Location                |
| -----: | -----: | ------------: | ----------: | ------: | ---------------------------------- | ----------------------- |
|    new | +128 B | 0.0% → 100.0% | 0 B → 128 B |   0 → 1 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % |         Size | Objects | Caller       | Location                                            |
| ------: | ----: | -----: | -----------: | ------: | ------------ | --------------------------------------------------- |
| +200.0% | +80 B | 100.0% | 40 B → 120 B |   1 → 3 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Caller        | Location                   |
| -----: | ----: | ------------: | ---------: | ------: | ------------- | -------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `<init>(int)` | `java.util.jar.Attributes` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change | Delta |             % |       Size | Objects | Caller                           | Location           |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------- | ------------------ |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size | Objects | Caller      | Location              |
| -----: | ----------: | -----: | ------------------: | ------: | ----------- | --------------------- |
|  -2.3% | -48.687 KiB | 100.0% | 2.11 MiB → 2.06 MiB |   2 → 1 | `grow(int)` | `java.util.ArrayList` |

##### `getDeclaredFields0(boolean)` (`java.lang.Class`)

|  Change | Delta |             % |       Size | Objects | Caller                              | Location          |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------- | ----------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `privateGetDeclaredFields(boolean)` | `java.lang.Class` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % |       Size | Objects | Caller                             | Location                                 |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------- | ---------------------------------------- |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |   1 → 0 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |              % |                Size | Objects | Function                                                                                                               | Location                                                               |
| ------: | -----------: | -------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new |    +2.31 MiB |   0.0% → 89.7% |      0 B → 2.31 MiB |   0 → 9 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007801001800`                   |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000780100d800`                    |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                                     |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
| +106.3% | +271.273 KiB |  10.6% → 20.0% |   255 KiB → 526 KiB |   2 → 5 | `loadClass(String, boolean)`                                                                                           | `java.lang.ClassLoader`                                                |
| +106.3% | +271.273 KiB |  10.6% → 20.0% |   255 KiB → 526 KiB |   2 → 5 | `loadClass(String)`                                                                                                    | `java.lang.ClassLoader`                                                |
| +106.3% | +271.164 KiB |  10.6% → 20.0% |   255 KiB → 526 KiB |   1 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)`                                            | `java.security.AccessController`                                       |
| +106.3% | +271.164 KiB |  10.6% → 20.0% |   255 KiB → 526 KiB |   1 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`                                                        | `java.security.AccessController`                                       |
| +106.3% | +271.164 KiB |  10.6% → 20.0% |   255 KiB → 526 KiB |   1 → 4 | `run()`                                                                                                                | `java.net.URLClassLoader$1`                                            |
| +106.3% | +271.164 KiB |  10.6% → 20.0% |   255 KiB → 526 KiB |   1 → 4 | `findClass(String)`                                                                                                    | `java.net.URLClassLoader`                                              |
|  +12.1% | +255.312 KiB |  87.4% → 89.7% | 2.06 MiB → 2.31 MiB |  7 → 11 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +12.1% | +255.156 KiB |  87.4% → 89.7% | 2.06 MiB → 2.31 MiB |   6 → 9 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8` |
|  +12.1% | +255.156 KiB |  87.4% → 89.7% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |

##### Standard library

|  Change |        Delta |              % |                Size | Objects | Function                                                                    | Location                                             |
| ------: | -----------: | -------------: | ------------------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000007801001800` |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000780100d800`  |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                   |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invokeImpl(Object, Object[])`                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invoke(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +11.5% | +271.328 KiB | 98.0% → 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invoke(Object, Object[])`                                                  | `java.lang.reflect.Method`                           |
| +106.3% | +271.273 KiB |  10.6% → 20.0% |   255 KiB → 526 KiB |   2 → 5 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                              |
| +106.3% | +271.273 KiB |  10.6% → 20.0% |   255 KiB → 526 KiB |   2 → 5 | `loadClass(String)`                                                         | `java.lang.ClassLoader`                              |
| +106.3% | +271.164 KiB |  10.6% → 20.0% |   255 KiB → 526 KiB |   1 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
| +106.3% | +271.164 KiB |  10.6% → 20.0% |   255 KiB → 526 KiB |   1 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |
| +106.3% | +271.164 KiB |  10.6% → 20.0% |   255 KiB → 526 KiB |   1 → 4 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |
| +106.3% | +271.164 KiB |  10.6% → 20.0% |   255 KiB → 526 KiB |   1 → 4 | `findClass(String)`                                                         | `java.net.URLClassLoader`                            |
|  +12.1% | +255.156 KiB |  87.4% → 89.7% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)`                                                             | `scala.runtime.function.JProcedure1`                 |
|  +12.1% | +255.156 KiB |  87.4% → 89.7% | 2.06 MiB → 2.31 MiB |   6 → 9 | `foreach(Function1)`                                                        | `scala.collection.immutable.List`                    |
|     new | +255.148 KiB |    0.0% → 9.7% |       0 B → 255 KiB |   0 → 2 | `getDeclaredConstructors0(boolean)`                                         | `java.lang.Class`                                    |
|     new | +255.148 KiB |    0.0% → 9.7% |       0 B → 255 KiB |   0 → 2 | `privateGetDeclaredConstructors(boolean)`                                   | `java.lang.Class`                                    |
|     new | +255.148 KiB |    0.0% → 9.7% |       0 B → 255 KiB |   0 → 2 | `getConstructor0(Class[], int)`                                             | `java.lang.Class`                                    |
|     new | +255.148 KiB |    0.0% → 9.7% |       0 B → 255 KiB |   0 → 2 | `getDeclaredConstructor(Class[])`                                           | `java.lang.Class`                                    |
| +100.0% | +255.085 KiB |  10.6% → 19.3% |   255 KiB → 510 KiB |   1 → 2 | `initCEN(int, ZipCoder)`                                                    | `java.util.zip.ZipFile$Source`                       |
| +100.0% | +255.085 KiB |  10.6% → 19.3% |   255 KiB → 510 KiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                       |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                               |
| ------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |   -2.06 MiB |  87.4% → 0.0% |      2.06 MiB → 0 B |   6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -2.3% | -48.687 KiB | 89.4% → 80.0% | 2.11 MiB → 2.06 MiB |   2 → 1 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
|   -2.3% | -48.687 KiB | 89.4% → 80.0% | 2.11 MiB → 2.06 MiB |   2 → 1 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                  |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dda28` |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dd7e0` |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |

##### Standard library

|  Change |       Delta |             % |                Size | Objects | Function                                             | Location                                            |
| ------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------------------- | --------------------------------------------------- |
|   -2.3% | -48.687 KiB | 89.4% → 80.0% | 2.11 MiB → 2.06 MiB |   2 → 1 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                  |
|   -2.3% | -48.687 KiB | 89.4% → 80.0% | 2.11 MiB → 2.06 MiB |   2 → 1 | `grow(int)`                                          | `java.util.ArrayList`                               |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `addAll(Collection)`                                 | `java.util.ArrayList`                               |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                 |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                 |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| removed | -48.687 KiB |   2.0% → 0.0% |      48.7 KiB → 0 B |   1 → 0 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| removed |       -72 B |  <0.1% → 0.0% |          72 B → 0 B |   1 → 0 | `getDeclaredFields0(boolean)`                        | `java.lang.Class`                                   |
| removed |       -72 B |  <0.1% → 0.0% |          72 B → 0 B |   1 → 0 | `privateGetDeclaredFields(boolean)`                  | `java.lang.Class`                                   |
| removed |       -72 B |  <0.1% → 0.0% |          72 B → 0 B |   1 → 0 | `getDeclaredField(String)`                           | `java.lang.Class`                                   |
| removed |       -72 B |  <0.1% → 0.0% |          72 B → 0 B |   1 → 0 | `<clinit>()`                                         | `java.util.concurrent.ForkJoinPool`                 |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |             % |           Size | Objects | Caller              | Location                                                               |
| -----: | --------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +2.31 MiB | 0.0% → 100.0% | 0 B → 2.31 MiB |   0 → 9 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |        Delta |      % |                Size | Objects | Caller                         | Location                                             |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ---------------------------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801001800` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001800`)

| Change |        Delta |      % |                Size | Objects | Caller                           | Location                                            |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780100d800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000780100d800`)

| Change |        Delta |      % |                Size | Objects | Caller                                           | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |        Delta |      % |                Size | Objects | Caller                         | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Caller                     | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Caller                     | Location                   |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |        Delta |      % |                Size | Objects | Caller                                                      | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Caller                                 | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Caller           | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change |        Delta |      % |              Size | Objects | Caller              | Location                |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------- | ----------------------- |
| +106.3% | +271.273 KiB | 100.0% | 255 KiB → 526 KiB |   2 → 5 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|  Change |        Delta |              % |              Size | Objects | Caller                              | Location                                   |
| ------: | -----------: | -------------: | ----------------: | ------: | ----------------------------------- | ------------------------------------------ |
|     new | +255.148 KiB |   0.0% → 48.5% |     0 B → 255 KiB |   0 → 2 | `getDeclaredConstructors0(boolean)` | `java.lang.Class`                          |
|   +6.3% |  +16.015 KiB | 100.0% → 51.5% | 255 KiB → 271 KiB |   1 → 2 | `main(String[])`                    | `org.renaissance.harness.RenaissanceSuite` |
|     new |       +128 B |   0.0% → <0.1% |       0 B → 128 B |   0 → 1 | `releaseFence()`                    | `scala.runtime.Statics`                    |
| removed |        -16 B |   <0.1% → 0.0% |        16 B → 0 B |   1 → 0 | `<clinit>()`                        | `scala.package$`                           |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

|  Change |        Delta |      % |              Size | Objects | Caller                                                          | Location                         |
| ------: | -----------: | -----: | ----------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| +106.3% | +271.164 KiB | 100.0% | 255 KiB → 526 KiB |   1 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` (`java.security.AccessController`)

|  Change |        Delta |              % |              Size | Objects | Caller              | Location                                     |
| ------: | -----------: | -------------: | ----------------: | ------: | ------------------- | -------------------------------------------- |
| +106.3% | +271.164 KiB |         100.0% | 255 KiB → 526 KiB |   1 → 4 | `findClass(String)` | `java.net.URLClassLoader`                    |
| +100.0% | +255.085 KiB | 100.0% → 96.9% | 255 KiB → 510 KiB |   1 → 2 | `ensureOpen()`      | `jdk.internal.loader.URLClassPath$JarLoader` |
| +100.0% | +255.085 KiB | 100.0% → 96.9% | 255 KiB → 510 KiB |   1 → 2 | `getLoader(URL)`    | `jdk.internal.loader.URLClassPath`           |

##### `run()` (`java.net.URLClassLoader$1`)

|  Change |        Delta |      % |              Size | Objects | Caller                                                                      | Location                         |
| ------: | -----------: | -----: | ----------------: | ------: | --------------------------------------------------------------------------- | -------------------------------- |
| +106.3% | +271.164 KiB | 100.0% | 255 KiB → 526 KiB |   1 → 4 | `run()`                                                                     | `java.net.URLClassLoader$1`      |
| +106.3% | +271.164 KiB | 100.0% | 255 KiB → 526 KiB |   1 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `findClass(String)` (`java.net.URLClassLoader`)

|  Change |        Delta |      % |              Size | Objects | Caller                       | Location                |
| ------: | -----------: | -----: | ----------------: | ------: | ---------------------------- | ----------------------- |
| +106.3% | +271.164 KiB | 100.0% | 255 KiB → 526 KiB |   1 → 4 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |                Size | Objects | Caller           | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------ |
| +12.1% | +255.312 KiB | 100.0% | 2.06 MiB → 2.31 MiB |  7 → 11 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`)

| Change |        Delta |      % |                Size | Objects | Caller          | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | --------------- | ------------------------------------ |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |        Delta |      % |                Size | Objects | Caller               | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------- | ------------------------------------ |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |        Delta |      % |                Size | Objects | Caller                                                                        | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `getDeclaredConstructors0(boolean)` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Caller                                    | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------- | ----------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `privateGetDeclaredConstructors(boolean)` | `java.lang.Class` |

##### `privateGetDeclaredConstructors(boolean)` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Caller                          | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ----------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `getConstructor0(Class[], int)` | `java.lang.Class` |

##### `getConstructor0(Class[], int)` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Caller                            | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------- | ----------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `getDeclaredConstructor(Class[])` | `java.lang.Class` |

##### `getDeclaredConstructor(Class[])` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Caller                                 | Location                              |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------- | ------------------------------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `createBenchmark(BenchmarkDescriptor)` | `org.renaissance.core.BenchmarkSuite` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |              Size | Objects | Caller                                          | Location                       |
| ------: | -----------: | -----: | ----------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +100.0% | +255.085 KiB | 100.0% | 255 KiB → 510 KiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |              Size | Objects | Caller                         | Location                       |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------------------ | ------------------------------ |
| +100.0% | +255.085 KiB | 100.0% | 255 KiB → 510 KiB |   1 → 2 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |     Delta |             % |           Size | Objects | Caller              | Location                                                               |
| ------: | --------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   6 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size | Objects | Caller      | Location              |
| -----: | ----------: | -----: | ------------------: | ------: | ----------- | --------------------- |
|  -2.3% | -48.687 KiB | 100.0% | 2.11 MiB → 2.06 MiB |   2 → 1 | `grow(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change |       Delta |           % |           Size | Objects | Caller               | Location              |
| ------: | ----------: | ----------: | -------------: | ------: | -------------------- | --------------------- |
| removed | -48.687 KiB | 2.3% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `addAll(Collection)` | `java.util.ArrayList` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change |       Delta |             % |           Size | Objects | Caller                       | Location                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |             % |           Size | Objects | Caller                  | Location                                                               |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dda28` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dda28`)

|  Change |       Delta |             % |           Size | Objects | Caller                              | Location            |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------- | ------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change |       Delta |             % |           Size | Objects | Caller                              | Location                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------- | ------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |             % |           Size | Objects | Caller                   | Location                                                               |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dd7e0` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dd7e0`)

|  Change |       Delta |             % |           Size | Objects | Caller                | Location            |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------- | ------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change |       Delta |             % |           Size | Objects | Caller            | Location                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------- | ------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |             % |           Size | Objects | Caller                     | Location                                                   |
| ------: | ----------: | ------------: | -------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |       Delta |             % |           Size | Objects | Caller                           | Location                                                   |
| ------: | ----------: | ------------: | -------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |       Delta |             % |           Size | Objects | Caller      | Location                                               |
| ------: | ----------: | ------------: | -------------: | ------: | ----------- | ------------------------------------------------------ |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |       Delta |             % |           Size | Objects | Caller   | Location                             |
| ------: | ----------: | ------------: | -------------: | ------: | -------- | ------------------------------------ |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change |       Delta |             % |           Size | Objects | Caller     | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | ---------- | ----------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |           Size | Objects | Caller                                               | Location                                      |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`           |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |       Delta |             % |           Size | Objects | Caller                 | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------- | ----------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |           Size | Objects | Caller   | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | -------- | ----------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |           Size | Objects | Caller      | Location                                               |
| ------: | ----------: | ------------: | -------------: | ------: | ----------- | ------------------------------------------------------ |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |           Size | Objects | Caller                         | Location                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------ | ------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|  Change |       Delta |             % |           Size | Objects | Caller     | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | ---------- | ----------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |       Delta |             % |           Size | Objects | Caller                                   | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------- | ----------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change |       Delta |             % |           Size | Objects | Caller                              | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |       Delta |             % |           Size | Objects | Caller  | Location                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ------- | ------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `getDeclaredFields0(boolean)` (`java.lang.Class`)

|  Change | Delta |             % |       Size | Objects | Caller                              | Location          |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------- | ----------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `privateGetDeclaredFields(boolean)` | `java.lang.Class` |

##### `privateGetDeclaredFields(boolean)` (`java.lang.Class`)

|  Change | Delta |             % |       Size | Objects | Caller                     | Location          |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------- | ----------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `getDeclaredField(String)` | `java.lang.Class` |

##### `getDeclaredField(String)` (`java.lang.Class`)

|  Change | Delta |             % |       Size | Objects | Caller       | Location                            |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | ----------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `<clinit>()` | `java.util.concurrent.ForkJoinPool` |

##### `<clinit>()` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |       Size | Objects | Caller             | Location                                    |
| ------: | ----: | ------------: | ---------: | ------: | ------------------ | ------------------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `<init>(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |           Size | Objects | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 7 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new | +255.148 KiB | 0.0% → 10.8% |  0 B → 255 KiB |   0 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |        Delta |             % |                Size | Objects | Callee              | Location                                    |
| -----: | -----------: | ------------: | ------------------: | ------: | ------------------- | ------------------------------------------- |
| +12.1% | +255.312 KiB | 89.2% → 89.7% | 2.06 MiB → 2.31 MiB |  7 → 11 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  +6.3% |  +16.015 KiB | 10.8% → 10.3% |   255 KiB → 271 KiB |   1 → 2 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001800`)

| Change |        Delta |      % |                Size | Objects | Callee           | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------ |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000780100d800`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                             |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ---------------------------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801001800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |        Delta |      % |                Size | Objects | Callee                           | Location                                            |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000780100d800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                                           | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                   |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                                      | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                 | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ------------------------------- |
| +11.5% | +271.328 KiB | 100.0% | 2.31 MiB → 2.58 MiB |  8 → 13 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change |        Delta |      % |              Size | Objects | Callee                       | Location                                          |
| ------: | -----------: | -----: | ----------------: | ------: | ---------------------------- | ------------------------------------------------- |
| +106.3% | +271.164 KiB | 100.0% | 255 KiB → 526 KiB |   1 → 4 | `findClass(String)`          | `java.net.URLClassLoader`                         |
| +700.0% |       +112 B |  <0.1% |      16 B → 128 B |       1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|  Change |        Delta |      % |              Size | Objects | Callee                       | Location                |
| ------: | -----------: | -----: | ----------------: | ------: | ---------------------------- | ----------------------- |
| +106.3% | +271.273 KiB | 100.0% | 255 KiB → 526 KiB |   2 → 5 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

|  Change |        Delta |              % |              Size | Objects | Callee  | Location                                       |
| ------: | -----------: | -------------: | ----------------: | ------: | ------- | ---------------------------------------------- |
| +106.3% | +271.164 KiB |         100.0% | 255 KiB → 526 KiB |   1 → 4 | `run()` | `java.net.URLClassLoader$1`                    |
| +100.0% | +255.085 KiB | 100.0% → 96.9% | 255 KiB → 510 KiB |   1 → 2 | `run()` | `jdk.internal.loader.URLClassPath$JarLoader$1` |
| +100.0% | +255.085 KiB | 100.0% → 96.9% | 255 KiB → 510 KiB |   1 → 2 | `run()` | `jdk.internal.loader.URLClassPath$3`           |

##### `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` (`java.security.AccessController`)

|  Change |        Delta |      % |              Size | Objects | Callee                                                                      | Location                         |
| ------: | -----------: | -----: | ----------------: | ------: | --------------------------------------------------------------------------- | -------------------------------- |
| +106.3% | +271.164 KiB | 100.0% | 255 KiB → 526 KiB |   1 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `run()` (`java.net.URLClassLoader$1`)

|  Change |        Delta |              % |              Size | Objects | Callee                          | Location                           |
| ------: | -----------: | -------------: | ----------------: | ------: | ------------------------------- | ---------------------------------- |
| +106.3% | +271.164 KiB |         100.0% | 255 KiB → 526 KiB |   1 → 4 | `run()`                         | `java.net.URLClassLoader$1`        |
| +100.0% | +255.085 KiB | 100.0% → 96.9% | 255 KiB → 510 KiB |   1 → 2 | `getResource(String, boolean)`  | `jdk.internal.loader.URLClassPath` |
|     new |  +16.078 KiB |    0.0% → 3.1% |    0 B → 16.1 KiB |   0 → 2 | `defineClass(String, Resource)` | `java.net.URLClassLoader`          |

##### `findClass(String)` (`java.net.URLClassLoader`)

|  Change |        Delta |      % |              Size | Objects | Callee                                                          | Location                         |
| ------: | -----------: | -----: | ----------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| +106.3% | +271.164 KiB | 100.0% | 255 KiB → 526 KiB |   1 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |                Size | Objects | Callee                                                                        | Location                                    |
| ------: | -----------: | -----------: | ------------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  +12.1% | +255.156 KiB |       100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new |       +128 B | 0.0% → <0.1% |         0 B → 128 B |   0 → 1 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |
|     new |        +48 B | 0.0% → <0.1% |          0 B → 48 B |   0 → 1 | `apply(Function0)`                                                            | `scala.util.Try$`                           |
| removed |        -16 B | <0.1% → 0.0% |          16 B → 0 B |   1 → 0 | `<clinit>()`                                                                  | `scala.Predef$`                             |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`)

|  Change |     Delta |             % |           Size | Objects | Callee                                                                                                                 | Location                                    |
| ------: | --------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +2.31 MiB | 0.0% → 100.0% | 0 B → 2.31 MiB |   0 → 9 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |        Delta |      % |                Size | Objects | Callee              | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8` |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |        Delta |      % |                Size | Objects | Callee          | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | --------------- | ------------------------------------ |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `getDeclaredConstructors0(boolean)` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Callee              | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `privateGetDeclaredConstructors(boolean)` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Callee                              | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------- | ----------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `getDeclaredConstructors0(boolean)` | `java.lang.Class` |

##### `getConstructor0(Class[], int)` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Callee                                    | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------- | ----------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `privateGetDeclaredConstructors(boolean)` | `java.lang.Class` |

##### `getDeclaredConstructor(Class[])` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Callee                          | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ----------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `getConstructor0(Class[], int)` | `java.lang.Class` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |              Size | Objects | Callee                   | Location                       |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------------ | ------------------------------ |
| +100.0% | +255.085 KiB | 100.0% | 255 KiB → 510 KiB |   1 → 2 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |     Delta |             % |           Size | Objects | Callee               | Location                                  |
| ------: | --------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   6 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size | Objects | Callee                  | Location           |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------- | ------------------ |
|  -2.3% | -48.687 KiB | 100.0% | 2.11 MiB → 2.06 MiB |   2 → 1 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change |       Delta |             % |           Size | Objects | Callee      | Location              |
| ------: | ----------: | ------------: | -------------: | ------: | ----------- | --------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `grow(int)` | `java.util.ArrayList` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |             % |           Size | Objects | Callee               | Location              |
| ------: | ----------: | ------------: | -------------: | ------: | -------------------- | --------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dda28`)

|  Change |       Delta |             % |           Size | Objects | Callee                       | Location                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change |       Delta |             % |           Size | Objects | Callee                  | Location                                                               |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dda28` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |             % |           Size | Objects | Callee                              | Location            |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------- | ------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dd7e0`)

|  Change |       Delta |             % |           Size | Objects | Callee                              | Location                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------- | ------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change |       Delta |             % |           Size | Objects | Callee                   | Location                                                               |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dd7e0` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |             % |           Size | Objects | Callee                | Location            |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------- | ------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |       Delta |             % |           Size | Objects | Callee            | Location                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------- | ------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |       Delta |             % |           Size | Objects | Callee                     | Location                                                   |
| ------: | ----------: | ------------: | -------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |       Delta |             % |           Size | Objects | Callee                           | Location                                                   |
| ------: | ----------: | ------------: | -------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change |       Delta |             % |           Size | Objects | Callee      | Location                                               |
| ------: | ----------: | ------------: | -------------: | ------: | ----------- | ------------------------------------------------------ |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |           Size | Objects | Callee   | Location                                            |
| ------: | ----------: | ------------: | -------------: | ------: | -------- | --------------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `exec()` | `java.util.concurrent.RecursiveTask`                |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |       Delta |             % |           Size | Objects | Callee     | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | ---------- | ----------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |           Size | Objects | Callee                                    | Location                                      |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------------- | --------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |           Size | Objects | Callee                 | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------- | ----------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |           Size | Objects | Callee     | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | ---------- | ----------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|  Change |       Delta |             % |           Size | Objects | Callee   | Location                                                               |
| ------: | ----------: | ------------: | -------------: | ------: | -------- | ---------------------------------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011d7aa8` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |       Delta |             % |           Size | Objects | Callee     | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | ---------- | ----------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change |       Delta |             % |           Size | Objects | Callee                                               | Location                                      |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |       Delta |             % |           Size | Objects | Callee                                   | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------- | ----------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change |       Delta |             % |           Size | Objects | Callee                              | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed | -48.687 KiB | 100.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `privateGetDeclaredFields(boolean)` (`java.lang.Class`)

|  Change | Delta |             % |       Size | Objects | Callee                        | Location          |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------- | ----------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `getDeclaredFields0(boolean)` | `java.lang.Class` |

##### `getDeclaredField(String)` (`java.lang.Class`)

|  Change | Delta |             % |       Size | Objects | Callee                              | Location          |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------- | ----------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `privateGetDeclaredFields(boolean)` | `java.lang.Class` |

##### `<clinit>()` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |       Size | Objects | Callee                     | Location          |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------- | ----------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `getDeclaredField(String)` | `java.lang.Class` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes retained in their leaf frame.

Common call stack: `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000780100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`

| Change |        Delta |            % |           Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -----: | -----------: | -----------: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 80.0% | 0 B → 2.06 MiB |   0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x000000780101bfb8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new | +255.085 KiB |  0.0% → 9.7% |  0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` |
|    new |  +16.015 KiB |  0.0% → 0.6% |   0 B → 16 KiB |   0 → 1 | `resize()` (`java.util.HashMap`) ← `putVal(int, Object, Object, boolean, boolean)` ← `put(Object, Object)` ← `read(InputStream, String)` (`java.util.jar.Manifest`) ← `<init>(JarVerifier, InputStream, String)` ← `<init>(InputStream, String)` ← `getManifestFromReference()` (`java.util.jar.JarFile`) ← `getManifest()` ← `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|    new |       +128 B | 0.0% → <0.1% |    0 B → 128 B |   0 → 1 | `findBootstrapClass(String)` (`java.lang.ClassLoader`) ← `findBootstrapClassOrNull(String)` ← `findBootstrapClassOrNull(String)` (`java.lang.System$2`) ← `loadClassOrNull(String, boolean)` (`jdk.internal.loader.ClassLoaders$BootClassLoader`) ← `loadClassOrNull(String)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClassOrNull(String, boolean)` ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `releaseFence()` (`scala.runtime.Statics`) ← `<init>(Object)` (`scala.collection.ArrayOps$ArrayIterator`) ← `iterator()` (`scala.collection.immutable.ArraySeq$ofRef`) ← `addAll(IterableOnce)` (`scala.collection.mutable.Growable`) ← `addAll$(Growable, IterableOnce)` ← `addAll(IterableOnce)` (`scala.collection.immutable.MapBuilderImpl`) ← `from(IterableOnce)` (`scala.collection.immutable.Map$`) ← `from(IterableOnce)` ← `apply(Seq)` (`scala.collection.MapFactory`) ← `apply$(MapFactory, Seq)` ← `apply(Seq)` (`scala.collection.immutable.Map$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|    new |       +120 B | 0.0% → <0.1% |    0 B → 120 B |   0 → 3 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                           |
|    new |        +72 B | 0.0% → <0.1% |     0 B → 72 B |   0 → 3 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                     |
|    new |        +64 B | 0.0% → <0.1% |     0 B → 64 B |   0 → 1 | `newLinkedHashMap(int)` (`java.util.LinkedHashMap`) ← `<init>(int)` (`java.util.jar.Attributes`) ← `read(InputStream, String)` (`java.util.jar.Manifest`) ← `<init>(JarVerifier, InputStream, String)` ← `<init>(InputStream, String)` ← `getManifestFromReference()` (`java.util.jar.JarFile`) ← `getManifest()` ← `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000078011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|    new |        +48 B | 0.0% → <0.1% |     0 B → 48 B |   0 → 1 | `compress(char[], int, int)` (`java.lang.StringUTF16`) ← `<init>(char[], int, int, Void)` (`java.lang.String`) ← `<init>(char[], int, int)` ← `loadConvert(char[], int, int, StringBuilder)` (`java.util.Properties`) ← `load0(Properties$LineReader)` ← `load(InputStream)` ← `loadProperties(URL)` (`org.renaissance.core.ResourceUtils`) ← `loadPropertiesAsMap(URL)` ← `create(Path, String, Optional, Map, boolean)` (`org.renaissance.core.BenchmarkSuite`) ← `$anonfun$1(Path, Config)` (`org.renaissance.harness.RenaissanceSuite$`) ← `apply()` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007801136f20`) ← `apply(Function0)` (`scala.util.Try$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Improvements

Call stacks with the largest decrease in bytes retained in their leaf frame.

|  Change |       Delta |            % |           Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | ----------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed |   -2.06 MiB | 87.4% → 0.0% | 2.06 MiB → 0 B |   1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x000000880101bfb8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000880100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -48.687 KiB |  2.0% → 0.0% | 48.7 KiB → 0 B |   1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dda28`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011dd7e0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011d7aa8`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| removed |       -72 B | <0.1% → 0.0% |     72 B → 0 B |   1 → 0 | `getDeclaredFields0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredFields(boolean)` ← `getDeclaredField(String)` ← `<clinit>()` (`java.util.concurrent.ForkJoinPool`) ← `<init>(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000880100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |       -72 B | <0.1% → 0.0% |     72 B → 0 B |   3 → 0 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000880100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                 |
| removed |       -40 B | <0.1% → 0.0% |     40 B → 0 B |   1 → 0 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000088011545f0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000880100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                       |
| removed |       -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `getClassLoadingLock(String)` (`java.lang.ClassLoader`) ← `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClassOrNull(String)` ← `loadClassOrNull(String, boolean)` ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `<clinit>()` (`scala.package$`) ← `<clinit>()` (`scala.Predef$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000880100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
