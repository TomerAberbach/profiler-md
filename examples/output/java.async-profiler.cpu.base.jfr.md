# Sampling profile

Collected 4,802 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 57.8% |   2,777 |
| Native           | 26.3% |   1,262 |
| Standard library | 13.7% |     657 |
| JIT              |  1.1% |      54 |
| Compiler         |  1.1% |      52 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                    | Location                                                               |
| ----: | ------: | ------------------------------------------- | ---------------------------------------------------------------------- |
| 19.3% |     926 | `distance(Double[], Double[])`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 18.8% |     901 | `accumulate(Double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  8.6% |     411 | `vectorSum()`                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  8.5% |     410 | `findNearestCentroid()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.8% |     133 | `computeIfAbsent(Object, Function)`         | `java.util.HashMap`                                                    |
|  2.4% |     114 | `collectClusters(int[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.1% |      99 | `doubleValue()`                             | `java.lang.Double`                                                     |
|  1.1% |      53 | `zero_blocks`                               | `<unknown>`                                                            |
|  0.2% |       8 | `merge(Object, Object, BiFunction)`         | `java.util.HashMap`                                                    |
|  0.1% |       5 | `forEach(BiConsumer)`                       | `java.util.HashMap`                                                    |
|  0.1% |       4 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib`                                                         |
|  0.1% |       4 | `add(Object)`                               | `java.util.ArrayList`                                                  |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib`                                                         |
| <0.1% |       2 | `mach_absolute_time`                        | `libsystem_kernel.dylib`                                               |
| <0.1% |       2 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib`                                                         |
| <0.1% |       2 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib`                                                         |
| <0.1% |       2 | `join()`                                    | `java.util.concurrent.ForkJoinTask`                                    |
| <0.1% |       2 | `accept(Object, Object)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88` |
| <0.1% |       2 | `addAll(Collection)`                        | `java.util.ArrayList`                                                  |
| <0.1% |       2 | `get(int)`                                  | `java.util.ArrayList`                                                  |

#### Categories

##### Ours

|     % | Samples | Function                                         | Location                                                               |
| ----: | ------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
| 19.3% |     926 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 18.8% |     901 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  8.6% |     411 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  8.5% |     410 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.4% |     114 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       2 | `accept(Object, Object)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88` |
| <0.1% |       2 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       2 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       2 | `<init>(JavaKMeans, int, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| <0.1% |       1 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       1 | `div(double[], int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| <0.1% |       1 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       1 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       1 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `<init>(JavaKMeans, List, List, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Standard library

|     % | Samples | Function                            | Location                            |
| ----: | ------: | ----------------------------------- | ----------------------------------- |
|  2.8% |     133 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                 |
|  2.1% |      99 | `doubleValue()`                     | `java.lang.Double`                  |
|  0.2% |       8 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                 |
|  0.1% |       5 | `forEach(BiConsumer)`               | `java.util.HashMap`                 |
|  0.1% |       4 | `add(Object)`                       | `java.util.ArrayList`               |
| <0.1% |       2 | `join()`                            | `java.util.concurrent.ForkJoinTask` |
| <0.1% |       2 | `addAll(Collection)`                | `java.util.ArrayList`               |
| <0.1% |       2 | `get(int)`                          | `java.util.ArrayList`               |
| <0.1% |       2 | `fork()`                            | `java.util.concurrent.ForkJoinTask` |
| <0.1% |       1 | `put(Object, Object)`               | `java.util.HashMap`                 |
| <0.1% |       1 | `valueOf(double)`                   | `java.lang.Double`                  |

##### JIT

|     % | Samples | Function                   | Location    |
| ----: | ------: | -------------------------- | ----------- |
|  1.1% |      53 | `zero_blocks`              | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xaabb)` | `<unknown>` |

##### Compiler

|     % | Samples | Function                                             | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
|  0.1% |       4 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_late_post_work`          | `libjvm.dylib` |
| <0.1% |       2 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
| <0.1% |       2 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
| <0.1% |       2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| <0.1% |       1 | `Type::singleton`                                    | `libjvm.dylib` |
| <0.1% |       1 | `IdealKit::clear`                                    | `libjvm.dylib` |
| <0.1% |       1 | `TypeOopPtr::is_loaded`                              | `libjvm.dylib` |
| <0.1% |       1 | `Type::cmp`                                          | `libjvm.dylib` |
| <0.1% |       1 | `PhaseLive::compute`                                 | `libjvm.dylib` |
| <0.1% |       1 | `RegMask::is_bound`                                  | `libjvm.dylib` |
| <0.1% |       1 | `Matcher::xform`                                     | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIdealLoop::is_dominator`                       | `libjvm.dylib` |
| <0.1% |       1 | `PhaseChaitin::Split`                                | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIdealLoop::Dominators`                         | `libjvm.dylib` |
| <0.1% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless`             | `libjvm.dylib` |
| <0.1% |       1 | `CompilationPolicy::create_mdo`                      | `libjvm.dylib` |
| <0.1% |       1 | `AdapterHandlerLibrary::get_adapter`                 | `libjvm.dylib` |
| <0.1% |       1 | `LinearScan::resolve_data_flow`                      | `libjvm.dylib` |
| <0.1% |       1 | `IntervalWalker::walk_to`                            | `libjvm.dylib` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 58.6% |     543 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| 39.6% |     367 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|  1.6% |      15 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |
|  0.1% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:247` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 82.5% |     743 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
| 17.5% |     158 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 83.0% |     341 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
| 16.8% |      69 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
|  0.2% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 47.3% |     194 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| 34.6% |     142 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
|  9.8% |      40 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  6.1% |      25 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
|  2.2% |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 24.8% |      33 | `java.util.HashMap:1197` |
| 21.8% |      29 | `java.util.HashMap:1213` |
| 18.8% |      25 | `java.util.HashMap:1207` |
| 16.5% |      22 | `java.util.HashMap:1204` |
|  7.5% |      10 | `java.util.HashMap:1222` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 30.7% |      35 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
| 28.9% |      33 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |
| 19.3% |      22 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 12.3% |      14 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
|  8.8% |      10 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |

##### `doubleValue()` (`java.lang.Double`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      99 | `java.lang.Double:1001` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 62.5% |       5 | `java.util.HashMap:1384` |
| 25.0% |       2 | `java.util.HashMap:1378` |
| 12.5% |       1 | `java.util.HashMap:1400` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 60.0% |       3 | `java.util.HashMap:1428` |
| 40.0% |       2 | `java.util.HashMap:1429` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       4 | `java.util.ArrayList:495` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 50.0% |       1 | `java.util.concurrent.ForkJoinTask:650` |
| 50.0% |       1 | `java.util.concurrent.ForkJoinTask:651` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 50.0% |       1 | `java.util.ArrayList:759` |
| 50.0% |       1 | `java.util.ArrayList:760` |

##### `get(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       2 | `java.util.ArrayList:427` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:433` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Location                                                   |
| ----: | ------: | ---------------------------------------------------------- |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:137` |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:138` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       2 | `java.util.concurrent.ForkJoinTask:627` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:86` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:190` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:276` |

##### `put(Object, Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:618` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       1 | `java.lang.Double:773` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     926 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     901 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     411 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     410 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     133 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     114 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue()` (`java.lang.Double`)

|     % | Samples | Caller                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 89.9% |      89 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 10.1% |      10 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 77.4% |      41 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
|  1.9% |       1 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       8 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |       5 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |       4 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 66.7% |       2 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| 33.3% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `mach_absolute_time` (`libsystem_kernel.dylib`)

|     % | Samples | Caller              | Location                                    |
| ----: | ------: | ------------------- | ------------------------------------------- |
| 50.0% |       1 | `getVmStartNanos()` | `org.renaissance.harness.RenaissanceSuite$` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |       1 | `PhaseIFG::effective_degree` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseIFG::SquareUp`         | `libjvm.dylib` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       2 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location                                    |
| -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% |       2 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `get(int)` (`java.util.ArrayList`)

|     % | Samples | Caller                  | Location                                                   |
| ----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 50.0% |       1 | `vectorSum()`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 50.0% |       1 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                               | Location                                                  |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% |       2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Caller                                     | Location                                                   |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
| 50.0% |       1 | `<init>(JavaKMeans, List, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 50.0% |       1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::compute_lca_of_uses` | `libjvm.dylib` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller          | Location                                               |
| -----: | ------: | --------------- | ------------------------------------------------------ |
| 100.0% |       1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller       | Location                                                               |
| -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001125b10` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                    | Location                                                   |
| -----: | ------: | ------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `put(Object, Object)` (`java.util.HashMap`)

|      % | Samples | Caller                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Samples | Caller                                           | Location                                    |
| -----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% |       1 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `I2C/C2I adapters(0xaabb)` (`<unknown>`)

|      % | Samples | Caller       | Location                                                               |
| -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011258d8` |

##### `Type::singleton` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       1 | `PhaseCCP::transform_once` | `libjvm.dylib` |

##### `TypeOopPtr::is_loaded` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       1 | `TypeInstPtr::is_same_java_type_as_helper` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `RegMask::is_bound` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::gather_lrg_masks` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       1 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|      % | Samples | Caller                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       1 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `CompilationPolicy::create_mdo` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       1 | `CompilationPolicy::event` | `libjvm.dylib` |

##### `LinearScan::resolve_data_flow` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       1 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       1 | `IntervalWalker::walk_to` | `libjvm.dylib` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                         | Location                                                               |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------------------- |
| 88.0% |   4,226 | `compute()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 84.3% |   4,049 | `join()`                         | `java.util.concurrent.ForkJoinTask`                                    |
| 38.8% |   1,861 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 31.0% |   1,489 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 31.0% |   1,488 | `vectorSum()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 29.3% |   1,408 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.6% |     990 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 20.1% |     964 | `invoke()`                       | `java.util.concurrent.ForkJoinTask`                                    |
| 19.6% |     939 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 14.0% |     672 | `computeClusterAverages()`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.0% |     672 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 13.9% |     669 | `average(List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  9.4% |     453 | `collectClusters(int[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.4% |     452 | `lambda$run$0(int, List, int)`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.4% |     452 | `call()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68` |
|  8.2% |     394 | `merge(Map, Map)`                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  8.2% |     394 | `combineResults(Map, Map)`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  8.2% |     394 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  8.0% |     383 | `forEach(BiConsumer)`            | `java.util.HashMap`                                                    |
|  7.9% |     378 | `accept(Object, Object)`         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88` |

#### Categories

##### Ours

|     % | Samples | Function                            | Location                                                               |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------------------- |
| 88.0% |   4,226 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 38.8% |   1,861 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 31.0% |   1,489 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 31.0% |   1,488 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 29.3% |   1,408 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.6% |     990 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 19.6% |     939 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 14.0% |     672 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.0% |     672 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 13.9% |     669 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  9.4% |     453 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.4% |     452 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.4% |     452 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68` |
|  8.2% |     394 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  8.2% |     394 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  8.2% |     394 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  7.9% |     378 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88` |
|  7.8% |     376 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  5.5% |     265 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  5.5% |     265 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011876a8` |

##### Standard library

|     % | Samples | Function                                | Location                             |
| ----: | ------: | --------------------------------------- | ------------------------------------ |
| 84.3% |   4,049 | `join()`                                | `java.util.concurrent.ForkJoinTask`  |
| 20.1% |     964 | `invoke()`                              | `java.util.concurrent.ForkJoinTask`  |
|  8.0% |     383 | `forEach(BiConsumer)`                   | `java.util.HashMap`                  |
|  7.8% |     375 | `merge(Object, Object, BiFunction)`     | `java.util.HashMap`                  |
|  4.2% |     200 | `get(int)`                              | `java.util.ArrayList`                |
|  3.9% |     188 | `addAll(Collection)`                    | `java.util.ArrayList`                |
|  3.4% |     162 | `computeIfAbsent(Object, Function)`     | `java.util.HashMap`                  |
|  2.5% |     119 | `add(Object)`                           | `java.util.ArrayList`                |
|  2.1% |      99 | `doubleValue()`                         | `java.lang.Double`                   |
|  1.6% |      77 | `<init>(Collection)`                    | `java.util.ArrayList`                |
|  0.6% |      31 | `invoke(Object, Object[])`              | `java.lang.reflect.Method`           |
|  0.3% |      16 | `foreach(Function1)`                    | `scala.collection.immutable.List`    |
|  0.3% |      14 | `loadClass(String)`                     | `java.lang.ClassLoader`              |
|  0.2% |      11 | `<init>(Map)`                           | `java.util.HashMap`                  |
|  0.2% |       8 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files`                |
|  0.1% |       7 | `<clinit>()`                            | `scala.Predef$`                      |
|  0.1% |       7 | `collect(Collector)`                    | `java.util.stream.ReferencePipeline` |
|  0.1% |       6 | `toArray(IntFunction)`                  | `java.util.stream.ReferencePipeline` |
|  0.1% |       6 | `fork()`                                | `java.util.concurrent.ForkJoinTask`  |
| <0.1% |       2 | `put(Object, Object)`                   | `java.util.HashMap`                  |

##### JIT

|     % | Samples | Function                   | Location    |
| ----: | ------: | -------------------------- | ----------- |
|  1.1% |      53 | `zero_blocks`              | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xaabb)` | `<unknown>` |

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 1.7% |      84 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
| 1.5% |      70 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| 1.2% |      60 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| 1.2% |      59 | `Compile::Compile`                          | `libjvm.dylib` |
| 0.6% |      31 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| 0.5% |      23 | `Compile::Optimize`                         | `libjvm.dylib` |
| 0.4% |      19 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
| 0.3% |      16 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
| 0.3% |      14 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
| 0.3% |      14 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
| 0.3% |      13 | `CompileQueue::get`                         | `libjvm.dylib` |
| 0.2% |       9 | `Matcher::match`                            | `libjvm.dylib` |
| 0.2% |       8 | `Compilation::compile_method`               | `libjvm.dylib` |
| 0.2% |       8 | `Compilation::Compilation`                  | `libjvm.dylib` |
| 0.1% |       7 | `Matcher::xform`                            | `libjvm.dylib` |
| 0.1% |       7 | `Compile::optimize_loops`                   | `libjvm.dylib` |
| 0.1% |       6 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 0.1% |       6 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| 0.1% |       5 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| 0.1% |       5 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 95.8% |   4,049 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 44.0% |   1,861 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 35.2% |   1,489 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 15.9% |     672 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  9.3% |     394 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |   1,861 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  75.7% |   1,408 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  24.3% |     453 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee              | Location                                                  |
| ----: | ------: | ------------------- | --------------------------------------------------------- |
| 99.9% |   1,488 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 99.9% |   1,488 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 66.5% |     990 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  5.8% |      87 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                                           | Location                                                   |
| ----: | ------: | ------------------------------------------------ | ---------------------------------------------------------- |
| 66.7% |     939 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.9% |      55 | `get(int)`                                       | `java.util.ArrayList`                                      |
|  0.1% |       2 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                                             |
|  0.1% |       1 | `zero_blocks`                                    | `<unknown>`                                                |
|  0.1% |       1 | `_new_array_Java`                                | `<unknown>`                                                |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 9.0% |      89 | `doubleValue()` | `java.lang.Double` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 1.1% |      10 | `doubleValue()` | `java.lang.Double` |
| 0.3% |       3 | `SafepointBlob` | `<unknown>`        |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee                | Location                                               |
| ----: | ------: | --------------------- | ------------------------------------------------------ |
| 99.6% |     669 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.3% |       2 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.1% |       1 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     672 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     672 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee               | Location                                               |
| ----: | ------: | -------------------- | ------------------------------------------------------ |
| 99.9% |     668 | `invoke()`           | `java.util.concurrent.ForkJoinTask`                    |
|  0.1% |       1 | `div(double[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 35.8% |     162 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 26.0% |     118 | `add(Object)`                       | `java.util.ArrayList` |
| 12.8% |      58 | `get(int)`                          | `java.util.ArrayList` |
|  0.2% |       1 | `_new_instance_Java`                | `<unknown>`           |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     452 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |     452 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                | Location            |
| ----: | ------: | --------------------- | ------------------- |
| 97.2% |     383 | `forEach(BiConsumer)` | `java.util.HashMap` |
|  2.8% |      11 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |     394 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |     394 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Callee                   | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 98.7% |     378 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88`)

|     % | Samples | Callee                              | Location                                    |
| ----: | ------: | ----------------------------------- | ------------------------------------------- |
| 99.5% |     376 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 99.7% |     375 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |
|  0.3% |       1 | `SafepointBlob`                     | `<unknown>`         |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Callee                  | Location                                                               |
| ----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 70.7% |     265 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011876a8` |
| 10.9% |      41 | `zero_blocks`           | `<unknown>`                                                            |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location              |
| ----: | ------: | -------------------- | --------------------- |
| 70.9% |     188 | `addAll(Collection)` | `java.util.ArrayList` |
| 29.1% |      77 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011876a8`)

|      % | Samples | Callee                       | Location                                    |
| -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% |     265 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|    % | Samples | Callee          | Location    |
| ---: | ------: | --------------- | ----------- |
| 0.6% |       1 | `SafepointBlob` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 83.3% |      70 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
| 15.5% |      13 | `CompileQueue::get`                            | `libjvm.dylib` |
|  1.2% |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 85.7% |      60 | `C2Compiler::compile_method` | `libjvm.dylib` |
|  2.9% |       2 | `ciEnv::ciEnv`               | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 98.3% |      59 | `Compile::Compile`                       | `libjvm.dylib` |
|  1.7% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 52.5% |      31 | `Compile::Code_Gen` | `libjvm.dylib` |
| 39.0% |      23 | `Compile::Optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 61.3% |      19 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 29.0% |       9 | `Matcher::match`                  | `libjvm.dylib` |
|  6.5% |       2 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|  3.2% |       1 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 39.1% |       9 | `PhaseIdealLoop::optimize`       | `libjvm.dylib` |
| 30.4% |       7 | `Compile::optimize_loops`        | `libjvm.dylib` |
|  8.7% |       2 | `Compile::final_graph_reshaping` | `libjvm.dylib` |
|  8.7% |       2 | `PhaseCCP::PhaseCCP`             | `libjvm.dylib` |
|  4.3% |       1 | `PhaseCCP::do_transform`         | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 26.3% |       5 | `PhaseChaitin::build_ifg_physical`   | `libjvm.dylib` |
| 21.1% |       4 | `PhaseChaitin::gather_lrg_masks`     | `libjvm.dylib` |
| 10.5% |       2 | `PhaseLive::compute`                 | `libjvm.dylib` |
| 10.5% |       2 | `PhaseChaitin::Split`                | `libjvm.dylib` |
|  5.3% |       1 | `PhaseIFG::Compute_Effective_Degree` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 87.5% |      14 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 12.5% |       2 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 35.7% |       5 | `PhaseIdealLoop::build_loop_late`              | `libjvm.dylib` |
| 21.4% |       3 | `PhaseIdealLoop::split_if_with_blocks`         | `libjvm.dylib` |
| 14.3% |       2 | `PhaseIdealLoop::Dominators`                   | `libjvm.dylib` |
|  7.1% |       1 | `Node::is_CFG`                                 | `libjvm.dylib` |
|  7.1% |       1 | `PhaseIdealLoop::eliminate_useless_predicates` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      14 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 77.8% |       7 | `Matcher::xform`       | `libjvm.dylib` |
| 11.1% |       1 | `LoadNNode::Opcode`    | `libjvm.dylib` |
| 11.1% |       1 | `Matcher::find_shared` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 75.0% |       6 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 25.0% |       2 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       8 | `Compilation::compile_method` | `libjvm.dylib` |

##### `<clinit>()` (`scala.Predef$`)

|     % | Samples | Callee              | Location                |
| ----: | ------: | ------------------- | ----------------------- |
| 14.3% |       1 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `Matcher::xform` (`libjvm.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 71.4% |       5 | `Matcher::match_tree` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 33.3% |       2 | `PhaseIdealLoop::compute_lca_of_uses`         | `libjvm.dylib` |
| 16.7% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       3 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 33.3% |       2 | `Compilation::build_hir`      | `libjvm.dylib` |
| 16.7% |       1 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 20.0% |       1 | `PhaseChaitin::compute_initial_block_pressure` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Callee                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.7% |     180 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.4% |     162 | `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.9% |     138 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.7% |     130 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.6% |     126 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.0% |      98 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.0% |      97 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.0% |      94 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.8% |      88 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |      82 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68`) |
| 1.7% |      81 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.6% |      76 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                       |
| 1.5% |      70 | `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.3% |      61 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                          |
| 1.3% |      61 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.2% |      60 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.2% |      58 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.1% |      55 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0% |      49 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.0% |      48 | `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
