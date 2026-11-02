# Retained heap profile diff

Retained 2.31 MiB → 2.57 MiB (+261.195 KiB, +11.0%) over 8 → 13 objects (296 KiB → 202 KiB per object).

| Category         |  Change |        Delta |            % |                Size | Objects |
| ---------------- | ------: | -----------: | -----------: | ------------------: | ------: |
| Standard library |  +11.0% | +261.234 KiB |       100.0% | 2.31 MiB → 2.57 MiB |  7 → 13 |
| Ours             | removed |        -40 B | <0.1% → 0.0% |          40 B → 0 B |   1 → 0 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 2.31 MiB → 2.56 MiB (100.0% → 99.8%) main(String[]) at org.renaissance.core.Launcher
    └── 2.31 MiB → 2.56 MiB (100.0% → 99.8%) launchHarnessClass(String, String[])
        └── 2.31 MiB → 2.56 MiB (100.0% → 99.8%) loadAndInvokeHarnessClass(ModuleLoader, String, String[])
            └── 2.31 MiB → 2.56 MiB (100.0% → 99.8%) invoke(Object, Object[]) at java.lang.reflect.Method
                └── 2.31 MiB → 2.56 MiB (100.0% → 99.8%) invoke(Object, Object[]) at jdk.internal.reflect.DirectMethodHandleAccessor
                    └── 2.31 MiB → 2.56 MiB (100.0% → 99.8%) invokeImpl(Object, Object[])
                        └── 2.31 MiB → 2.56 MiB (100.0% → 99.8%) invokeExact_MT(Object, Object, Object, Object) at java.lang.invoke.Invokers$Holder
                            └── 2.31 MiB → 2.56 MiB (100.0% → 99.8%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x000000f00100d800
                                └── 2.31 MiB → 2.56 MiB (100.0% → 99.8%) invokeStatic(Object, Object) at java.lang.invoke.LambdaForm$DMH.0x000000f001001800
                                    └── 2.31 MiB → 2.56 MiB (100.0% → 99.8%) main(String[]) at org.renaissance.harness.RenaissanceSuite
                                        ├── 2.06 MiB → 2.31 MiB (89.2% → 90.1%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
                                        │   └── 2.06 MiB → 2.31 MiB (89.2% → 90.1%) runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)
                                        │       └── 2.06 MiB → 2.31 MiB (89.2% → 90.1%) foreach(Function1) at scala.collection.immutable.List
                                        │           └── 2.06 MiB → 2.31 MiB (89.2% → 90.1%) apply(Object) at scala.runtime.function.JProcedure1
                                        │               └── … 2.06 MiB → 2.31 MiB (89.2% → 90.1%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f0011583b8
                                        │                   ├── 0 B → 2.31 MiB (0.0% → 90.1%) runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
                                        │                   │   ├── … 0 B → 2.06 MiB (0.0% → 80.3%) grow() at java.util.ArrayList
                                        │                   │   │   └── 0 B → 2.06 MiB (0.0% → 80.3%) grow(int)
                                        │                   │   │       └── 0 B → 2.06 MiB (0.0% → 80.3%) copyOf(Object[], int) at java.util.Arrays
                                        │                   │   └── … 0 B → 255 KiB (0.0% → 9.7%) initCEN(int, ZipCoder) at java.util.zip.ZipFile$Source
                                        │                   └── 2.06 MiB → 0 B (89.2% → 0.0%) runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
                                        │                       └── 2.06 MiB → 0 B (89.2% → 0.0%) executeBenchmark() at org.renaissance.harness.ExecutionDriver
                                        │                           └── 2.06 MiB → 0 B (89.2% → 0.0%) setUpBeforeAll(BenchmarkContext) at org.renaissance.jdk.concurrent.FjKmeans
                                        │                               └── 2.06 MiB → 0 B (89.2% → 0.0%) generateData(int, int, int) at org.renaissance.jdk.concurrent.JavaKMeans
                                        │                                   └── 2.06 MiB → 0 B (89.2% → 0.0%) collect(Collector) at java.util.stream.ReferencePipeline
                                        │                                       └── 2.06 MiB → 0 B (89.2% → 0.0%) evaluate(TerminalOp) at java.util.stream.AbstractPipeline
                                        │                                           └── 2.06 MiB → 0 B (89.2% → 0.0%) evaluateSequential(PipelineHelper, Spliterator) at java.util.stream.ReduceOps$ReduceOp
                                        │                                               └── 2.06 MiB → 0 B (89.2% → 0.0%) wrapAndCopyInto(Sink, Spliterator) at java.util.stream.AbstractPipeline
                                        │                                                   └── 2.06 MiB → 0 B (89.2% → 0.0%) copyInto(Sink, Spliterator)
                                        │                                                       └── 2.06 MiB → 0 B (89.2% → 0.0%) forEachRemaining(Consumer) at java.util.Spliterator$OfInt
                                        │                                                           └── 2.06 MiB → 0 B (89.2% → 0.0%) forEachRemaining(IntConsumer) at java.util.stream.Streams$RangeIntSpliterator
                                        │                                                               └── 2.06 MiB → 0 B (89.2% → 0.0%) accept(int) at java.util.stream.IntPipeline$1$1
                                        │                                                                   └── 2.06 MiB → 0 B (89.2% → 0.0%) accept(Object) at java.util.stream.ReduceOps$3ReducingSink
                                        │                                                                       └── 2.06 MiB → 0 B (89.2% → 0.0%) accept(Object, Object) at java.util.stream.Collectors$$Lambda.0x000000f00101bfb8
                                        │                                                                           └── 2.06 MiB → 0 B (89.2% → 0.0%) add(Object) at java.util.ArrayList
                                        │                                                                               └── 2.06 MiB → 0 B (89.2% → 0.0%) add(Object, Object[], int)
                                        │                                                                                   └── 2.06 MiB → 0 B (89.2% → 0.0%) grow()
                                        │                                                                                       └── 2.06 MiB → 0 B (89.2% → 0.0%) grow(int)
                                        │                                                                                           └── 2.06 MiB → 0 B (89.2% → 0.0%, self 89.2% → 80.6% globally) copyOf(Object[], int) at java.util.Arrays
                                        └── … 255 KiB (10.8% → 9.7%, self 10.8% → 19.4% globally) initCEN(int, ZipCoder) at java.util.zip.ZipFile$Source
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                     | Location                       |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------- | ------------------------------ |
| +100.0% | +255.085 KiB | 10.8% → 19.4% |   255 KiB → 510 KiB |   1 → 2 | `initCEN(int, ZipCoder)`     | `java.util.zip.ZipFile$Source` |
|   +0.3% |   +6.015 KiB | 89.2% → 80.6% | 2.06 MiB → 2.07 MiB |   1 → 2 | `copyOf(Object[], int)`      | `java.util.Arrays`             |
| +100.0% |        +72 B |         <0.1% |        72 B → 144 B |   3 → 6 | `valueOf(double)`            | `java.lang.Double`             |
|     new |        +72 B |  0.0% → <0.1% |          0 B → 72 B |   0 → 1 | `compress(char[], int, int)` | `java.lang.StringUTF16`        |
|     new |        +64 B |  0.0% → <0.1% |          0 B → 64 B |   0 → 1 | `newLinkedHashMap(int)`      | `java.util.LinkedHashMap`      |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change | Delta |            % |       Size | Objects | Function                      | Location                                    |
| ------: | ----: | -----------: | ---------: | ------: | ----------------------------- | ------------------------------------------- |
| removed | -72 B | <0.1% → 0.0% | 72 B → 0 B |   1 → 0 | `getDeclaredFields0(boolean)` | `java.lang.Class`                           |
| removed | -40 B | <0.1% → 0.0% | 40 B → 0 B |   1 → 0 | `lambda$generateData$4(int)`  | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### Standard library

|  Change | Delta |            % |       Size | Objects | Function                      | Location          |
| ------: | ----: | -----------: | ---------: | ------: | ----------------------------- | ----------------- |
| removed | -72 B | <0.1% → 0.0% | 72 B → 0 B |   1 → 0 | `getDeclaredFields0(boolean)` | `java.lang.Class` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |              Size | Objects | Location                            |
| ------: | -----------: | -----: | ----------------: | ------: | ----------------------------------- |
| +100.0% | +255.085 KiB | 100.0% | 255 KiB → 510 KiB |   1 → 2 | `java.util.zip.ZipFile$Source:1733` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Objects | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
|  +0.3% | +6.015 KiB | 100.0% | 2.06 MiB → 2.07 MiB |   1 → 2 | `java.util.Arrays:3482` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change | Delta |      % |         Size | Objects | Location               |
| ------: | ----: | -----: | -----------: | ------: | ---------------------- |
| +100.0% | +72 B | 100.0% | 72 B → 144 B |   3 → 6 | `java.lang.Double:773` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change | Delta |             % |       Size | Objects | Location                    |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------- |
|    new | +72 B | 0.0% → 100.0% | 0 B → 72 B |   0 → 1 | `java.lang.StringUTF16:211` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Location                       |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------ |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `java.util.LinkedHashMap:1078` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |       Size | Objects | Location                                       |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |              Size | Objects | Caller                                          | Location                       |
| ------: | -----------: | -----: | ----------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +100.0% | +255.085 KiB | 100.0% | 255 KiB → 510 KiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Objects | Caller      | Location              |
| -----: | ---------: | -----: | ------------------: | ------: | ----------- | --------------------- |
|  +0.3% | +6.015 KiB | 100.0% | 2.06 MiB → 2.07 MiB |   1 → 2 | `grow(int)` | `java.util.ArrayList` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change | Delta |      % |         Size | Objects | Caller                                           | Location                                    |
| ------: | ----: | -----: | -----------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +100.0% | +72 B | 100.0% | 72 B → 144 B |   3 → 6 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change | Delta |             % |       Size | Objects | Caller                           | Location           |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------- | ------------------ |
|    new | +72 B | 0.0% → 100.0% | 0 B → 72 B |   0 → 1 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Caller        | Location                   |
| -----: | ----: | ------------: | ---------: | ------: | ------------- | -------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `<init>(int)` | `java.util.jar.Attributes` |

##### `getDeclaredFields0(boolean)` (`java.lang.Class`)

|  Change | Delta |             % |       Size | Objects | Caller                              | Location          |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------- | ----------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `privateGetDeclaredFields(boolean)` | `java.lang.Class` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |       Size | Objects | Caller       | Location                                            |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | --------------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |              % |                Size | Objects | Function                                                                                                               | Location                                             |
| ------: | -----------: | -------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |    +2.31 MiB |   0.0% → 90.1% |      0 B → 2.31 MiB |   0 → 9 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`          |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`           |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000f001001800` |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000f00100d800`  |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                   |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                           |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                      |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                      |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                      |
|  +12.1% | +255.179 KiB |  89.2% → 90.1% | 2.06 MiB → 2.31 MiB |  6 → 10 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`          |
| +100.0% | +255.148 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   2 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)`                                            | `java.security.AccessController`                     |
| +100.0% | +255.148 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   2 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`                                                        | `java.security.AccessController`                     |
| +100.0% | +255.148 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   2 → 4 | `run()`                                                                                                                | `java.net.URLClassLoader$1`                          |
| +100.0% | +255.148 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   2 → 4 | `findClass(String)`                                                                                                    | `java.net.URLClassLoader`                            |
| +100.0% | +255.148 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   2 → 4 | `loadClass(String, boolean)`                                                                                           | `java.lang.ClassLoader`                              |
| +100.0% | +255.148 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   2 → 4 | `loadClass(String)`                                                                                                    | `java.lang.ClassLoader`                              |
|     new | +255.148 KiB |    0.0% → 9.7% |       0 B → 255 KiB |   0 → 2 | `getDeclaredConstructors0(boolean)`                                                                                    | `java.lang.Class`                                    |
|     new | +255.148 KiB |    0.0% → 9.7% |       0 B → 255 KiB |   0 → 2 | `privateGetDeclaredConstructors(boolean)`                                                                              | `java.lang.Class`                                    |

##### Standard library

|  Change |        Delta |              % |                Size | Objects | Function                                                                    | Location                                             |
| ------: | -----------: | -------------: | ------------------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x000000f001001800` |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000f00100d800`  |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                   |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invokeImpl(Object, Object[])`                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invoke(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +10.8% | +255.179 KiB | 100.0% → 99.8% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invoke(Object, Object[])`                                                  | `java.lang.reflect.Method`                           |
| +100.0% | +255.148 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   2 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
| +100.0% | +255.148 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   2 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |
| +100.0% | +255.148 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   2 → 4 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |
| +100.0% | +255.148 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   2 → 4 | `findClass(String)`                                                         | `java.net.URLClassLoader`                            |
| +100.0% | +255.148 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   2 → 4 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                              |
| +100.0% | +255.148 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   2 → 4 | `loadClass(String)`                                                         | `java.lang.ClassLoader`                              |
|     new | +255.148 KiB |    0.0% → 9.7% |       0 B → 255 KiB |   0 → 2 | `getDeclaredConstructors0(boolean)`                                         | `java.lang.Class`                                    |
|     new | +255.148 KiB |    0.0% → 9.7% |       0 B → 255 KiB |   0 → 2 | `privateGetDeclaredConstructors(boolean)`                                   | `java.lang.Class`                                    |
|     new | +255.148 KiB |    0.0% → 9.7% |       0 B → 255 KiB |   0 → 2 | `getConstructor0(Class[], int)`                                             | `java.lang.Class`                                    |
|     new | +255.148 KiB |    0.0% → 9.7% |       0 B → 255 KiB |   0 → 2 | `getDeclaredConstructor(Class[])`                                           | `java.lang.Class`                                    |
|  +12.1% | +255.109 KiB |  89.2% → 90.1% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)`                                                             | `scala.runtime.function.JProcedure1`                 |
|  +12.1% | +255.109 KiB |  89.2% → 90.1% | 2.06 MiB → 2.31 MiB |   6 → 9 | `foreach(Function1)`                                                        | `scala.collection.immutable.List`                    |
| +100.0% | +255.085 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   1 → 2 | `initCEN(int, ZipCoder)`                                                    | `java.util.zip.ZipFile$Source`                       |
| +100.0% | +255.085 KiB |  10.8% → 19.4% |   255 KiB → 510 KiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                       |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |     Delta |             % |           Size | Objects | Function                                                                                                               | Location                                    |
| ------: | --------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -2.06 MiB |  89.2% → 0.0% | 2.06 MiB → 0 B |   6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |     -72 B |  <0.1% → 0.0% |     72 B → 0 B |   1 → 0 | `getDeclaredFields0(boolean)`                                                                                          | `java.lang.Class`                           |
| removed |     -72 B |  <0.1% → 0.0% |     72 B → 0 B |   1 → 0 | `privateGetDeclaredFields(boolean)`                                                                                    | `java.lang.Class`                           |
| removed |     -72 B |  <0.1% → 0.0% |     72 B → 0 B |   1 → 0 | `getDeclaredField(String)`                                                                                             | `java.lang.Class`                           |
| removed |     -72 B |  <0.1% → 0.0% |     72 B → 0 B |   1 → 0 | `<clinit>()`                                                                                                           | `java.util.concurrent.ForkJoinPool`         |
| removed |     -72 B |  <0.1% → 0.0% |     72 B → 0 B |   1 → 0 | `<init>(int, int)`                                                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans` |
|     ~0% |     -40 B | 89.2% → 80.3% |       2.06 MiB |   6 → 7 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`   |
|     ~0% |     -40 B | 89.2% → 80.3% |       2.06 MiB |   6 → 7 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`   |
| removed |     -40 B |  <0.1% → 0.0% |     40 B → 0 B |   1 → 0 | `lambda$generateData$4(int)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans` |
| removed |     -40 B |  <0.1% → 0.0% |     40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)`                                                                                            | `java.util.stream.Nodes$ArrayNode`          |
| removed |     -40 B |  <0.1% → 0.0% |     40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)`                                                                                            | `java.util.stream.Nodes$FixedNodeBuilder`   |
| removed |     -40 B |  <0.1% → 0.0% |     40 B → 0 B |   1 → 0 | `builder(long, IntFunction)`                                                                                           | `java.util.stream.Nodes`                    |
| removed |     -40 B |  <0.1% → 0.0% |     40 B → 0 B |   1 → 0 | `makeNodeBuilder(long, IntFunction)`                                                                                   | `java.util.stream.ReferencePipeline`        |

##### Standard library

|  Change | Delta |            % |       Size | Objects | Function                             | Location                                  |
| ------: | ----: | -----------: | ---------: | ------: | ------------------------------------ | ----------------------------------------- |
| removed | -72 B | <0.1% → 0.0% | 72 B → 0 B |   1 → 0 | `getDeclaredFields0(boolean)`        | `java.lang.Class`                         |
| removed | -72 B | <0.1% → 0.0% | 72 B → 0 B |   1 → 0 | `privateGetDeclaredFields(boolean)`  | `java.lang.Class`                         |
| removed | -72 B | <0.1% → 0.0% | 72 B → 0 B |   1 → 0 | `getDeclaredField(String)`           | `java.lang.Class`                         |
| removed | -72 B | <0.1% → 0.0% | 72 B → 0 B |   1 → 0 | `<clinit>()`                         | `java.util.concurrent.ForkJoinPool`       |
| removed | -40 B | <0.1% → 0.0% | 40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)`          | `java.util.stream.Nodes$ArrayNode`        |
| removed | -40 B | <0.1% → 0.0% | 40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)`          | `java.util.stream.Nodes$FixedNodeBuilder` |
| removed | -40 B | <0.1% → 0.0% | 40 B → 0 B |   1 → 0 | `builder(long, IntFunction)`         | `java.util.stream.Nodes`                  |
| removed | -40 B | <0.1% → 0.0% | 40 B → 0 B |   1 → 0 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline`      |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |             % |           Size | Objects | Caller              | Location                                                               |
| -----: | --------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +2.31 MiB | 0.0% → 100.0% | 0 B → 2.31 MiB |   0 → 9 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f0011583b8` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |        Delta |      % |                Size | Objects | Caller                         | Location                                             |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ---------------------------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001001800` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001001800`)

| Change |        Delta |      % |                Size | Objects | Caller                           | Location                                            |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f00100d800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00100d800`)

| Change |        Delta |      % |                Size | Objects | Caller                                           | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |        Delta |      % |                Size | Objects | Caller                         | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Caller                     | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Caller                     | Location                   |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |        Delta |      % |                Size | Objects | Caller                                                      | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Caller                                 | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Caller           | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |                Size | Objects | Caller           | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------ |
| +12.1% | +255.179 KiB | 100.0% | 2.06 MiB → 2.31 MiB |  6 → 10 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

|  Change |        Delta |      % |              Size | Objects | Caller                                                          | Location                         |
| ------: | -----------: | -----: | ----------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| +100.0% | +255.148 KiB | 100.0% | 255 KiB → 510 KiB |   2 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` (`java.security.AccessController`)

|  Change |        Delta |      % |              Size | Objects | Caller              | Location                                     |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------- | -------------------------------------------- |
| +100.0% | +255.148 KiB | 100.0% | 255 KiB → 510 KiB |   2 → 4 | `findClass(String)` | `java.net.URLClassLoader`                    |
| +100.0% | +255.085 KiB | 100.0% | 255 KiB → 510 KiB |   1 → 2 | `ensureOpen()`      | `jdk.internal.loader.URLClassPath$JarLoader` |
| +100.0% | +255.085 KiB | 100.0% | 255 KiB → 510 KiB |   1 → 2 | `getLoader(URL)`    | `jdk.internal.loader.URLClassPath`           |

##### `run()` (`java.net.URLClassLoader$1`)

|  Change |        Delta |      % |              Size | Objects | Caller                                                                      | Location                         |
| ------: | -----------: | -----: | ----------------: | ------: | --------------------------------------------------------------------------- | -------------------------------- |
| +100.0% | +255.148 KiB | 100.0% | 255 KiB → 510 KiB |   2 → 4 | `run()`                                                                     | `java.net.URLClassLoader$1`      |
| +100.0% | +255.148 KiB | 100.0% | 255 KiB → 510 KiB |   2 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `findClass(String)` (`java.net.URLClassLoader`)

|  Change |        Delta |      % |              Size | Objects | Caller                       | Location                |
| ------: | -----------: | -----: | ----------------: | ------: | ---------------------------- | ----------------------- |
| +100.0% | +255.148 KiB | 100.0% | 255 KiB → 510 KiB |   2 → 4 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change |        Delta |      % |              Size | Objects | Caller              | Location                |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------- | ----------------------- |
| +100.0% | +255.148 KiB | 100.0% | 255 KiB → 510 KiB |   2 → 4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change |        Delta |            % |          Size | Objects | Caller                              | Location          |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------------------- | ----------------- |
|    new | +255.148 KiB | 0.0% → 50.0% | 0 B → 255 KiB |   0 → 2 | `getDeclaredConstructors0(boolean)` | `java.lang.Class` |

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

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |        Delta |      % |                Size | Objects | Caller               | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------- | ------------------------------------ |
| +12.1% | +255.109 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| +12.1% | +255.109 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |        Delta |      % |                Size | Objects | Caller                                                                        | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +12.1% | +255.109 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

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
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   6 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0` |

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

##### `<init>(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |       Size | Objects | Caller                             | Location                                  |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------- | ----------------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % |     Size | Objects | Caller               | Location                                  |
| -----: | ----: | -----: | -------: | ------: | -------------------- | ----------------------------------------- |
|    ~0% | -40 B | 100.0% | 2.06 MiB |   6 → 7 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change |     Delta |             % |           Size | Objects | Caller                                                                                                                 | Location                                    |
| ------: | --------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new | +2.06 MiB | 0.0% → 100.0% | 0 B → 2.06 MiB |   0 → 7 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |       Size | Objects | Caller       | Location                                            |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | --------------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`)

|  Change | Delta |             % |       Size | Objects | Caller                      | Location                                  |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- | ----------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |             % |       Size | Objects | Caller                       | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------- | ------------------------ |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `builder(long, IntFunction)` | `java.util.stream.Nodes` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|  Change | Delta |             % |       Size | Objects | Caller                               | Location                             |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------ | ------------------------------------ |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |             % |       Size | Objects | Caller                                        | Location                            |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------- | ----------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |           Size | Objects | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 7 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new | +255.148 KiB | 0.0% → 10.8% |  0 B → 255 KiB |   0 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |        Delta |             % |                Size | Objects | Callee           | Location                                    |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------- | ------------------------------------------- |
| +12.1% | +255.179 KiB | 89.2% → 90.3% | 2.06 MiB → 2.31 MiB |  6 → 10 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001001800`)

| Change |        Delta |      % |                Size | Objects | Callee           | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------ |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00100d800`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                             |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ---------------------------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001001800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |        Delta |      % |                Size | Objects | Callee                           | Location                                            |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f00100d800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                                           | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                   |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                                      | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                 | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ------------------------------- |
| +10.8% | +255.179 KiB | 100.0% | 2.31 MiB → 2.56 MiB |  8 → 12 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |                Size | Objects | Callee                                                                        | Location                                    |
| -----: | -----------: | -----------: | ------------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +12.1% | +255.109 KiB |       100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|    new |        +72 B | 0.0% → <0.1% |          0 B → 72 B |   0 → 1 | `apply(Function0)`                                                            | `scala.util.Try$`                           |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

|  Change |        Delta |      % |              Size | Objects | Callee  | Location                                       |
| ------: | -----------: | -----: | ----------------: | ------: | ------- | ---------------------------------------------- |
| +100.0% | +255.148 KiB | 100.0% | 255 KiB → 510 KiB |   2 → 4 | `run()` | `java.net.URLClassLoader$1`                    |
| +100.0% | +255.085 KiB | 100.0% | 255 KiB → 510 KiB |   1 → 2 | `run()` | `jdk.internal.loader.URLClassPath$JarLoader$1` |
| +100.0% | +255.085 KiB | 100.0% | 255 KiB → 510 KiB |   1 → 2 | `run()` | `jdk.internal.loader.URLClassPath$3`           |

##### `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` (`java.security.AccessController`)

|  Change |        Delta |      % |              Size | Objects | Callee                                                                      | Location                         |
| ------: | -----------: | -----: | ----------------: | ------: | --------------------------------------------------------------------------- | -------------------------------- |
| +100.0% | +255.148 KiB | 100.0% | 255 KiB → 510 KiB |   2 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `run()` (`java.net.URLClassLoader$1`)

|  Change |        Delta |      % |              Size | Objects | Callee                          | Location                           |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------------------- | ---------------------------------- |
| +100.0% | +255.148 KiB | 100.0% | 255 KiB → 510 KiB |   2 → 4 | `run()`                         | `java.net.URLClassLoader$1`        |
| +100.0% | +255.085 KiB | 100.0% | 255 KiB → 510 KiB |   1 → 2 | `getResource(String, boolean)`  | `jdk.internal.loader.URLClassPath` |
| +200.0% |        +64 B |  <0.1% |       32 B → 96 B |   1 → 2 | `defineClass(String, Resource)` | `java.net.URLClassLoader`          |

##### `findClass(String)` (`java.net.URLClassLoader`)

|  Change |        Delta |      % |              Size | Objects | Callee                                                          | Location                         |
| ------: | -----------: | -----: | ----------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| +100.0% | +255.148 KiB | 100.0% | 255 KiB → 510 KiB |   2 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change |        Delta |      % |              Size | Objects | Callee              | Location                  |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------- | ------------------------- |
| +100.0% | +255.148 KiB | 100.0% | 255 KiB → 510 KiB |   2 → 4 | `findClass(String)` | `java.net.URLClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|  Change |        Delta |      % |              Size | Objects | Callee                       | Location                |
| ------: | -----------: | -----: | ----------------: | ------: | ---------------------------- | ----------------------- |
| +100.0% | +255.148 KiB | 100.0% | 255 KiB → 510 KiB |   2 → 4 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

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

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |        Delta |      % |                Size | Objects | Callee              | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| +12.1% | +255.109 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f0011583b8` |
| +12.1% | +255.109 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |        Delta |      % |                Size | Objects | Callee          | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | --------------- | ------------------------------------ |
| +12.1% | +255.109 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |              Size | Objects | Callee                   | Location                       |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------------ | ------------------------------ |
| +100.0% | +255.085 KiB | 100.0% | 255 KiB → 510 KiB |   1 → 2 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |     Delta |             % |           Size | Objects | Callee               | Location                                  |
| ------: | --------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   6 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

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

##### `<init>(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |       Size | Objects | Callee       | Location                            |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | ----------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `<clinit>()` | `java.util.concurrent.ForkJoinPool` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |            % |       Size | Objects | Callee                        | Location                                    |
| ------: | ----: | -----------: | ---------: | ------: | ----------------------------- | ------------------------------------------- |
| removed | -72 B | <0.1% → 0.0% | 72 B → 0 B |   1 → 0 | `<init>(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans` |
|     ~0% | +32 B |       100.0% |   2.06 MiB |   5 → 7 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |      % |     Size | Objects | Callee                             | Location                                  |
| -----: | ----: | -----: | -------: | ------: | ---------------------------------- | ----------------------------------------- |
|    ~0% | -40 B | 100.0% | 2.06 MiB |   6 → 7 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`)

|  Change | Delta |             % |       Size | Objects | Callee       | Location                                            |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | --------------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |             % |       Size | Objects | Callee                      | Location                           |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- | ---------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$ArrayNode` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|  Change | Delta |             % |       Size | Objects | Callee                      | Location                                  |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- | ----------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |             % |       Size | Objects | Callee                       | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------- | ------------------------ |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `builder(long, IntFunction)` | `java.util.stream.Nodes` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes retained in their leaf frame.

| Change |        Delta |            % |           Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 80.3% | 0 B → 2.06 MiB |   0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x000000f00101bfb8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f0011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new | +255.085 KiB |  0.0% → 9.7% |  0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f0011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|    new |   +6.015 KiB |  0.0% → 0.2% | 0 B → 6.02 KiB |   0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011faef8`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|    new |       +144 B | 0.0% → <0.1% |    0 B → 144 B |   0 → 6 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f0011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                     |
|    new |        +72 B | 0.0% → <0.1% |     0 B → 72 B |   0 → 1 | `compress(char[], int, int)` (`java.lang.StringUTF16`) ← `<init>(char[], int, int, Void)` (`java.lang.String`) ← `<init>(char[], int, int)` ← `loadConvert(char[], int, int, StringBuilder)` (`java.util.Properties`) ← `load0(Properties$LineReader)` ← `load(InputStream)` ← `loadProperties(URL)` (`org.renaissance.core.ResourceUtils`) ← `loadPropertiesAsMap(URL)` ← `create(Path, String, Optional, Map, boolean)` (`org.renaissance.core.BenchmarkSuite`) ← `$anonfun$1(Path, Config)` (`org.renaissance.harness.RenaissanceSuite$`) ← `apply()` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f001136f20`) ← `apply(Function0)` (`scala.util.Try$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|    new |        +64 B | 0.0% → <0.1% |     0 B → 64 B |   0 → 1 | `newLinkedHashMap(int)` (`java.util.LinkedHashMap`) ← `<init>(int)` (`java.util.jar.Attributes`) ← `read(InputStream, String)` (`java.util.jar.Manifest`) ← `<init>(JarVerifier, InputStream, String)` ← `<init>(InputStream, String)` ← `getManifestFromReference()` (`java.util.jar.JarFile`) ← `getManifest()` ← `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f0011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Improvements

Call stacks with the largest decrease in bytes retained in their leaf frame.

Common call stack: `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`

|  Change |     Delta |            % |           Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------: | --------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -2.06 MiB | 89.2% → 0.0% | 2.06 MiB → 0 B |   1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x000000700101bfb8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |     -72 B | <0.1% → 0.0% |     72 B → 0 B |   1 → 0 | `getDeclaredFields0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredFields(boolean)` ← `getDeclaredField(String)` ← `<clinit>()` (`java.util.concurrent.ForkJoinPool`) ← `<init>(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |     -72 B | <0.1% → 0.0% |     72 B → 0 B |   3 → 0 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) |
| removed |     -40 B | <0.1% → 0.0% |     40 B → 0 B |   1 → 0 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)                                                       |
