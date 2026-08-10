# Profile diff

5,188 samples → 5,107 samples (-81 samples, -1.6%).

| Category          |  Change | Delta |             % |       Samples |
| ----------------- | ------: | ----: | ------------: | ------------: |
| Ours              |   -3.0% |   -93 | 59.7% → 58.8% | 3,098 → 3,005 |
| Native            |   +6.6% |   +80 | 23.3% → 25.2% | 1,207 → 1,287 |
| Standard library  |   -6.8% |   -51 | 14.5% → 13.7% |     752 → 701 |
| JIT               |   -9.0% |    -6 |   1.3% → 1.2% |       67 → 61 |
| Compiler          |  -14.5% |    -9 |   1.2% → 1.0% |       62 → 53 |
| Garbage collector | removed |    -2 |  <0.1% → 0.0% |         2 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |     Samples | Function                                    | Location                                                                              |
| ------: | ----: | ------------: | ----------: | ------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +12.5% |  +118 | 18.2% → 20.8% | 943 → 1,061 | `accumulate(Double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +100.0% |    +7 |   0.1% → 0.3% |      7 → 14 | `merge(Object, Object, BiFunction)`         | `java.util.HashMap`                                                                   |
| +500.0% |    +5 |  <0.1% → 0.1% |       1 → 6 | `createSubtask(int, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +4 |   0.0% → 0.1% |       0 → 4 | `combineResults(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +2.8% |    +3 |   2.1% → 2.2% |   108 → 111 | `collectClusters(int[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `apply(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`                |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `combineResults(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `apply(Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c801186b38` |
|  +66.7% |    +2 |          0.1% |       3 → 5 | `_sigtramp`                                 | `libsystem_platform.dylib`                                                            |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `<init>(JavaKMeans, int, int)`              | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `PhaseOutput::BuildOopMaps`                 | `libjvm.dylib`                                                                        |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `forkThreshold()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +20.0% |    +1 |          0.1% |       5 → 6 | `forEach(BiConsumer)`                       | `java.util.HashMap`                                                                   |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `ciTypeFlow::df_flow_types`                 | `libjvm.dylib`                                                                        |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `Matcher::find_shared`                      | `libjvm.dylib`                                                                        |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib`                                                                        |
|  +50.0% |    +1 |  <0.1% → 0.1% |       2 → 3 | `PhaseCFG::schedule_local`                  | `libjvm.dylib`                                                                        |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib`                                                                        |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib`                                                                        |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `put(Object, Object)`                       | `java.util.HashMap`                                                                   |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                    | Location                                                                          |
| ------: | ----: | ------------: | --------: | ------------------------------------------- | --------------------------------------------------------------------------------- |
|  -21.0% |  -103 |   9.5% → 7.6% | 491 → 388 | `findNearestCentroid()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
|  -13.5% |   -76 |  10.8% → 9.5% | 562 → 486 | `vectorSum()`                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                         |
|   -5.2% |   -51 | 18.9% → 18.2% | 983 → 932 | `distance(Double[], Double[])`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
|   -5.4% |    -8 |   2.8% → 2.7% | 147 → 139 | `computeIfAbsent(Object, Function)`         | `java.util.HashMap`                                                               |
|  -11.9% |    -8 |   1.3% → 1.2% |   67 → 59 | `zero_blocks`                               | `<unknown>`                                                                       |
|   -2.8% |    -4 |   2.8% → 2.7% | 143 → 139 | `doubleValue()`                             | `java.lang.Double`                                                                |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `get(int)`                                  | `java.util.ArrayList`                                                             |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `Node_Backward_Iterator::next`              | `libjvm.dylib`                                                                    |
|  -66.7% |    -2 |  0.1% → <0.1% |     3 → 1 | `join()`                                    | `java.util.concurrent.ForkJoinTask`                                               |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `add(Object)`                               | `java.util.ArrayList`                                                             |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib`                                                                    |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `LinearScan::number_instructions`           | `libjvm.dylib`                                                                    |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `g1_post_barrier_slow`                      | `<unknown>`                                                                       |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
|  -33.3% |    -1 |  0.1% → <0.1% |     3 → 2 | `compute()`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                            |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                         |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `toArray(IntFunction)`                      | `java.util.stream.ReferencePipeline`                                              |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `apply(int)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x000000080118c9c0` |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `PhaseCFG::schedule_late`                   | `libjvm.dylib`                                                                    |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `PhaseAggressiveCoalesce::coalesce`         | `libjvm.dylib`                                                                    |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                             | Location                                                                              |
| ------: | ----: | ------------: | ------------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|  +10.2% |  +110 | 20.7% → 23.2% | 1,075 → 1,185 | `accumulate(Double[], double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.9% |   +16 | 33.5% → 34.4% | 1,740 → 1,756 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.9% |   +15 | 33.6% → 34.4% | 1,741 → 1,756 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +700.0% |    +7 |  <0.1% → 0.2% |         1 → 8 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +600.0% |    +6 |  <0.1% → 0.1% |         1 → 7 | `fork()`                             | `java.util.concurrent.ForkJoinTask`                                                   |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +133.3% |    +4 |          0.1% |         3 → 7 | `_sigtramp`                          | `libsystem_platform.dylib`                                                            |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `boxed()`                            | `java.util.stream.DoublePipeline`                                                     |
|  +75.0% |    +3 |          0.1% |         4 → 7 | `boxed(double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `ciTypeFlow::df_flow_types`          | `libjvm.dylib`                                                                        |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `ciTypeFlow::flow_types`             | `libjvm.dylib`                                                                        |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `ciTypeFlow::do_flow`                | `libjvm.dylib`                                                                        |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `ciMethod::get_flow_analysis`        | `libjvm.dylib`                                                                        |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `PhaseChaitin::build_ifg_physical`   | `libjvm.dylib`                                                                        |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `PhaseOutput::BuildOopMaps`          | `libjvm.dylib`                                                                        |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `CompileBroker::create_compile_task` | `libjvm.dylib`                                                                        |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `CompileBroker::compile_method_base` | `libjvm.dylib`                                                                        |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `LIRGenerator::block_do`             | `libjvm.dylib`                                                                        |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `BlockList::iterate_forward`         | `libjvm.dylib`                                                                        |
| +100.0% |    +2 |  <0.1% → 0.1% |         2 → 4 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c801186b38` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                            | Location                                                               |
| -----: | ----: | ------------: | ------------: | ----------------------------------- | ---------------------------------------------------------------------- |
|  -9.9% |  -208 | 40.4% → 37.0% | 2,097 → 1,889 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.3% |  -203 | 90.7% → 88.2% | 4,707 → 4,504 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -4.3% |  -197 | 87.7% → 85.2% | 4,549 → 4,352 | `join()`                            | `java.util.concurrent.ForkJoinTask`                                    |
| -10.3% |  -160 | 30.1% → 27.4% | 1,559 → 1,399 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -5.0% |   -50 | 19.2% → 18.5% |     997 → 947 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -11.1% |   -50 |   8.7% → 7.9% |     451 → 401 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -10.9% |   -49 |   8.6% → 7.8% |     448 → 399 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -11.0% |   -47 |   8.2% → 7.4% |     427 → 380 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -11.0% |   -47 |   8.2% → 7.4% |     427 → 380 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |
| -10.5% |   -47 |   8.6% → 7.9% |     448 → 401 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -8.6% |   -46 |  10.4% → 9.6% |     537 → 491 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -10.8% |   -46 |   8.2% → 7.4% |     426 → 380 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                    |
| -10.6% |   -46 |   8.3% → 7.6% |     432 → 386 | `forEach(BiConsumer)`               | `java.util.HashMap`                                                    |
| -17.7% |   -39 |   4.2% → 3.5% |     220 → 181 | `get(int)`                          | `java.util.ArrayList`                                                  |
| -10.4% |   -34 |   6.3% → 5.7% |     327 → 293 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -9.8% |   -32 |   6.3% → 5.8% |     327 → 295 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |
|  -6.2% |   -31 |   9.7% → 9.2% |     503 → 472 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -6.2% |   -31 |   9.7% → 9.2% |     503 → 472 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |
| -27.3% |   -30 |   2.1% → 1.6% |      110 → 80 | `<init>(Collection)`                | `java.util.ArrayList`                                                  |
| -12.3% |   -23 |   3.6% → 3.2% |     187 → 164 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                                    |

# Allocated heap profile diff

Allocated 3.07 GiB → 3.03 GiB (-41.263 MiB, -1.3%) over 75,095 samples → 74,967 samples (42.8 KiB → 42.4 KiB per sample).

| Category         | Change |        Delta |     % |                Size |         Samples |
| ---------------- | -----: | -----------: | ----: | ------------------: | --------------: |
| Standard library |  -1.3% |  -41.393 MiB | 99.8% | 3.06 GiB → 3.02 GiB | 69,874 → 69,639 |
| Ours             |  +2.0% | +132.726 KiB |  0.2% | 6.61 MiB → 6.74 MiB |   5,221 → 5,328 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |     % |                Size |       Samples | Function                             | Location                                                   |
| ------: | -----------: | ----: | ------------------: | ------------: | ------------------------------------ | ---------------------------------------------------------- |
|   +2.0% | +130.843 KiB |  0.2% | 6.53 MiB → 6.66 MiB | 3,477 → 3,545 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +23.4% |   +3.234 KiB | <0.1% | 13.8 KiB → 17.1 KiB |     295 → 364 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +9.1% |   +1.257 KiB | <0.1% | 13.9 KiB → 15.1 KiB |     254 → 277 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +10.3% |       +160 B | <0.1% | 1.52 KiB → 1.68 KiB |       39 → 43 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +2.9% |       +144 B | <0.1% | 4.78 KiB → 4.92 KiB |     204 → 210 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +100.0% |        +40 B | <0.1% |         40 B → 80 B |         1 → 2 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +50.0% |        +24 B | <0.1% |         48 B → 72 B |         2 → 3 | `<init>(JavaKMeans, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size |   Samples | Function                     | Location                                                   |
| ------: | ---------: | -----------: | ------------------: | --------: | ---------------------------- | ---------------------------------------------------------- |
|  -10.1% | -1.078 KiB |        <0.1% | 10.7 KiB → 9.61 KiB | 228 → 205 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -10.1% |     -896 B |        <0.1% |  8.7 KiB → 7.82 KiB | 159 → 143 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -10.2% |     -312 B |        <0.1% |     3 KiB → 2.7 KiB | 128 → 115 | `valueOf(double)`            | `java.lang.Double`                                         |
|   -4.5% |     -288 B |        <0.1% |    6.28 KiB → 6 KiB | 134 → 128 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -31.6% |     -288 B |        <0.1% |       912 B → 624 B |   19 → 13 | `computeClusterAverages()`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -3.8% |     -216 B |        <0.1% | 5.58 KiB → 5.37 KiB | 238 → 229 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -23.1% |     -144 B |        <0.1% |       624 B → 480 B |   26 → 20 | `range(int, int)`            | `java.util.stream.IntStream`                               |
|  -40.0% |     -112 B |        <0.1% |       280 B → 168 B |     5 → 3 | `div(double[], int)`         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -0.7% |      -56 B |        <0.1% | 7.88 KiB → 7.82 KiB | 144 → 143 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -6.3% |      -48 B |        <0.1% |       768 B → 720 B |   16 → 15 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |      -24 B | <0.1% → 0.0% |          24 B → 0 B |     1 → 0 | `main(String[])`             | `org.renaissance.harness.RenaissanceSuite$`                |
|  -12.5% |       -8 B |        <0.1% |         64 B → 56 B |         2 | `collectGarbage(String)`     | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                                                                    | Location                                                        |
| ------: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
|   +0.5% |   +5.073 MiB | 30.5% → 31.1% |   958 MiB → 963 MiB | 59,794 → 59,892 | `join()`                                                                                                                                                    | `java.util.concurrent.ForkJoinTask`                             |
|   +2.0% | +130.843 KiB |          0.2% | 6.53 MiB → 6.66 MiB |   3,477 → 3,545 | `findNearestCentroid()`                                                                                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`      |
|   +1.1% | +121.171 KiB |          0.4% | 11.2 MiB → 11.3 MiB | 16,626 → 16,673 | `computeDirectly()`                                                                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`      |
|     new |  +26.476 KiB |  0.0% → <0.1% |      0 B → 26.5 KiB |           0 → 2 | `asJava()`                                                                                                                                                  | `scala.collection.convert.AsJavaExtensions$MutableMapHasAsJava` |
| +106.6% |      +16 KiB |         <0.1% |     15 KiB → 31 KiB |               1 | `apply(Seq)`                                                                                                                                                | `scala.collection.mutable.LinkedHashMap$`                       |
|     new |  +15.015 KiB |  0.0% → <0.1% |        0 B → 15 KiB |           0 → 1 | `mkString(String)`                                                                                                                                          | `scala.collection.AbstractIterable`                             |
|  +17.1% |  +11.242 KiB |         <0.1% |   65.8 KiB → 77 KiB |               3 | `apply(Seq)`                                                                                                                                                | `scala.collection.immutable.Map$`                               |
|     new |   +9.585 KiB |  0.0% → <0.1% |      0 B → 9.59 KiB |           0 → 1 | `wrapRefArray(Object[])`                                                                                                                                    | `scala.runtime.ScalaRunTime$`                                   |
| +232.3% |   +8.875 KiB |         <0.1% | 3.82 KiB → 12.7 KiB |               3 | `runParser(Seq, Object, List, OParserSetup)`                                                                                                                | `scopt.ORunner$`                                                |
|     new |   +8.015 KiB |  0.0% → <0.1% |      0 B → 8.02 KiB |           0 → 1 | `createBenchmark(BenchmarkDescriptor)`                                                                                                                      | `org.renaissance.core.BenchmarkSuite`                           |
|     new |   +8.015 KiB |  0.0% → <0.1% |      0 B → 8.02 KiB |           0 → 1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)`                                                                | `org.renaissance.harness.ExecutionDriver`                       |
|     new |   +7.015 KiB |  0.0% → <0.1% |      0 B → 7.02 KiB |           0 → 1 | `<clinit>()`                                                                                                                                                | `scala.runtime.LazyVals$`                                       |
|     new |   +7.015 KiB |  0.0% → <0.1% |      0 B → 7.02 KiB |           0 → 1 | `<clinit>()`                                                                                                                                                | `scopt.OptionParser`                                            |
|     new |   +5.343 KiB |  0.0% → <0.1% |      0 B → 5.34 KiB |           0 → 1 | `$plus$plus(IterableOnce)`                                                                                                                                  | `scala.collection.AbstractIterable`                             |
|     new |   +4.335 KiB |  0.0% → <0.1% |      0 B → 4.34 KiB |           0 → 1 | `applyArgument(String, Object, Option)`                                                                                                                     | `scopt.OptionDef`                                               |
|     new |   +4.335 KiB |  0.0% → <0.1% |      0 B → 4.34 KiB |           0 → 1 | `handleArgument$1(List, OParserSetup, ListBuffer, ListBuffer, ListBuffer, ObjectRef, BooleanRef, ListBuffer, LazyRef, LazyRef, LazyRef, OptionDef, String)` | `scopt.ORunner$`                                                |
|  +23.4% |   +3.234 KiB |         <0.1% | 13.8 KiB → 17.1 KiB |       295 → 364 | `createSubtask(int, int)`                                                                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`       |
|     new |   +3.015 KiB |  0.0% → <0.1% |      0 B → 3.02 KiB |           0 → 1 | `apply(Object)`                                                                                                                                             | `scala.util.Right$`                                             |
|     new |   +3.015 KiB |  0.0% → <0.1% |      0 B → 3.02 KiB |           0 → 1 | `apply$$anonfun$1(String)`                                                                                                                                  | `scopt.OptionDef`                                               |
|     new |   +3.015 KiB |  0.0% → <0.1% |      0 B → 3.02 KiB |           0 → 1 | `apply(Object)`                                                                                                                                             | `scopt.OptionDef$$Lambda.0x000000c8010f3b48`                    |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |         Samples | Function                                                    | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -1.3% |  -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,661 → 56,429 | `lambda$merge$6(List, List)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.3% |  -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,661 → 56,429 | `apply(Object, Object)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |
|  -1.3% |  -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,664 → 56,432 | `merge(Object, Object, BiFunction)`                         | `java.util.HashMap`                                                    |
|  -1.3% |  -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,664 → 56,432 | `lambda$merge$7(Map, Object, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.3% |  -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,664 → 56,432 | `accept(Object, Object)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |
|  -1.3% |  -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,664 → 56,432 | `forEach(BiConsumer)`                                       | `java.util.HashMap`                                                    |
|  -1.3% |  -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 57,113 → 56,898 | `combineResults(Map, Map)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.3% |  -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 57,113 → 56,898 | `combineResults(Object, Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.3% |  -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 57,120 → 56,907 | `merge(Map, Map)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.3% |  -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,657 → 74,559 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -1.5% |  -37.181 MiB | 81.3% → 81.1% | 2.49 GiB → 2.46 GiB | 42,207 → 41,976 | `addAll(Collection)`                                        | `java.util.ArrayList`                                                  |
|  -1.1% |  -21.402 MiB | 62.5% → 62.7% |  1.92 GiB → 1.9 GiB | 14,930 → 15,055 | `lambda$run$0(int, List, int)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% |  -21.402 MiB | 62.5% → 62.7% |  1.92 GiB → 1.9 GiB | 14,930 → 15,055 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |
|  -1.1% |    -21.4 MiB | 62.5% → 62.7% |  1.92 GiB → 1.9 GiB | 15,204 → 15,374 | `invoke()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
|  -0.6% |   -3.335 MiB | 18.2% → 18.3% |   572 MiB → 568 MiB | 14,216 → 14,224 | `<init>(Collection)`                                        | `java.util.ArrayList`                                                  |
| -14.1% | -889.687 KiB |          0.2% | 6.16 MiB → 5.29 MiB |       432 → 401 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
| -14.1% | -889.687 KiB |          0.2% | 6.16 MiB → 5.29 MiB |       432 → 401 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
| -14.1% | -889.289 KiB |          0.2% | 6.16 MiB → 5.29 MiB |       429 → 399 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
| -13.9% | -873.226 KiB |          0.2% | 6.14 MiB → 5.29 MiB |       426 → 398 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                             |
| -13.9% | -873.195 KiB |          0.2% | 6.14 MiB → 5.29 MiB |       426 → 399 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                                             |

# Lock contention profile diff

Blocked 2.7ms → 1.6ms (-1.11ms, -41.1%) over 28 samples → 9 samples (96.7µs → 177.2µs per sample).

| Category         | Change |   Delta |      % |          Time | Samples |
| ---------------- | -----: | ------: | -----: | ------------: | ------: |
| Standard library | -41.1% | -1.11ms | 100.0% | 2.7ms → 1.6ms |  28 → 9 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|  Change |   Delta |            % |          Time | Samples | Function                          | Location                                                               |
| ------: | ------: | -----------: | ------------: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| +173.3% | +0.23ms | 4.9% → 22.9% | 0.1ms → 0.4ms |   3 → 1 | `invoke()`                        | `java.util.concurrent.ForkJoinTask`                                    |
| +173.3% | +0.23ms | 4.9% → 22.9% | 0.1ms → 0.4ms |   3 → 1 | `lambda$run$0(int, List, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +173.3% | +0.23ms | 4.9% → 22.9% | 0.1ms → 0.4ms |   3 → 1 | `call()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |
|  +75.4% | +0.05ms |  2.7% → 8.0% |         0.1ms |   5 → 4 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`                                                  |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |             % |          Time | Samples | Function                                 | Location                                                   |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------------- |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `computeClusterAverages()`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `computeDirectly()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `compute()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -51.5% | -0.74ms | 52.8% → 43.5% | 1.4ms → 0.7ms |  11 → 2 | `join()`                                 | `java.util.concurrent.ForkJoinTask`                        |
| removed | -0.70ms |  25.7% → 0.0% |   0.7ms → 0ms |  18 → 0 | `boxed(double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -30.0% | -0.63ms | 77.5% → 92.0% | 2.1ms → 1.5ms |   9 → 5 | `loadClass(String)`                      | `java.lang.ClassLoader`                                    |
|  -23.4% | -0.37ms | 59.2% → 77.0% | 1.6ms → 1.2ms |       4 | `average(List)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed | -0.30ms |  11.1% → 0.0% |   0.3ms → 0ms |   5 → 0 | `stream(double[])`                       | `java.util.Arrays`                                         |
| removed | -0.19ms |   7.2% → 0.0% |   0.2ms → 0ms |   7 → 0 | `toArray(IntFunction)`                   | `java.util.stream.ReferencePipeline`                       |
| removed | -0.05ms |   1.7% → 0.0% |  47.0µs → 0ms |   3 → 0 | `boxed()`                                | `java.util.stream.DoublePipeline`                          |
|  -10.2% | -0.04ms | 15.1% → 23.0% |         0.4ms |   6 → 5 | `deleteRecursively(Path, boolean)`       | `org.renaissance.core.DirUtils`                            |
|  -10.2% | -0.04ms | 15.1% → 23.0% |         0.4ms |   6 → 5 | `deleteRecursively(Path)`                | `org.renaissance.core.DirUtils`                            |
|  -10.2% | -0.04ms | 15.1% → 23.0% |         0.4ms |   6 → 5 | `lambda$createScratchDirectory$1(Path)`  | `org.renaissance.core.DirUtils`                            |
|  -10.2% | -0.04ms | 15.1% → 23.0% |         0.4ms |   6 → 5 | `run()`                                  | `org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68` |
| removed | -0.01ms |   0.2% → 0.0% |   6.0µs → 0ms |   1 → 0 | `visitFile(Path, BasicFileAttributes)`   | `org.renaissance.core.DirUtils$1`                          |
| removed | -0.01ms |   0.2% → 0.0% |   6.0µs → 0ms |   1 → 0 | `visitFile(Object, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1`                          |
