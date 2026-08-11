# Sampling profile

Collected 4,878 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 83.3% |   4,061 |
| Ours             | 13.8% |     671 |
| Standard library |  2.4% |     117 |
| Compiler         |  0.3% |      14 |
| JIT              |  0.2% |      10 |
| Unknown          |  0.1% |       5 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                   | Location                                                   |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
|  5.1% |     250 | `accumulate(Double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  4.3% |     211 | `distance(Double[], Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.9% |      91 | `findNearestCentroid()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.7% |      85 | `vectorSum()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.7% |      34 | `computeIfAbsent(Object, Function)`        | `java.util.HashMap`                                        |
|  0.6% |      31 | `collectClusters(int[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% |      10 | `zero_blocks`                              | `<unknown>`                                                |
|  0.1% |       4 | `doubleValue()`                            | `java.lang.Double`                                         |
| <0.1% |       2 | `forEach(BiConsumer)`                      | `java.util.HashMap`                                        |
| <0.1% |       2 | `merge(Object, Object, BiFunction)`        | `java.util.HashMap`                                        |
| <0.1% |       1 | `mach_absolute_time`                       | `libsystem_kernel.dylib`                                   |
| <0.1% |       1 | `add(Object)`                              | `java.util.ArrayList`                                      |
| <0.1% |       1 | `compute()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| <0.1% |       1 | `get(int)`                                 | `java.util.ArrayList`                                      |
| <0.1% |       1 | `lambda$run$0(int, List, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       1 | `addAll(Collection)`                       | `java.util.ArrayList`                                      |
| <0.1% |       1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `OopMapValue::write_on`                    | `libjvm.dylib`                                             |
| <0.1% |       1 | `ProjNode::Opcode`                         | `libjvm.dylib`                                             |
| <0.1% |       1 | `Node_Backward_Iterator::next`             | `libjvm.dylib`                                             |

#### Categories

##### Ours

|     % | Samples | Function                                   | Location                                                   |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
|  5.1% |     250 | `accumulate(Double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  4.3% |     211 | `distance(Double[], Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.9% |      91 | `findNearestCentroid()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.7% |      85 | `vectorSum()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.6% |      31 | `collectClusters(int[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `compute()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| <0.1% |       1 | `lambda$run$0(int, List, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|     % | Samples | Function                            | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
|  0.7% |      34 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
|  0.1% |       4 | `doubleValue()`                     | `java.lang.Double`    |
| <0.1% |       2 | `forEach(BiConsumer)`               | `java.util.HashMap`   |
| <0.1% |       2 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |
| <0.1% |       1 | `add(Object)`                       | `java.util.ArrayList` |
| <0.1% |       1 | `get(int)`                          | `java.util.ArrayList` |
| <0.1% |       1 | `addAll(Collection)`                | `java.util.ArrayList` |

##### Compiler

|     % | Samples | Function                                 | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| <0.1% |       1 | `OopMapValue::write_on`                  | `libjvm.dylib` |
| <0.1% |       1 | `ProjNode::Opcode`                       | `libjvm.dylib` |
| <0.1% |       1 | `Node_Backward_Iterator::next`           | `libjvm.dylib` |
| <0.1% |       1 | `PhaseChaitin::merge_multidefs`          | `libjvm.dylib` |
| <0.1% |       1 | `MultiNode::is_CFG`                      | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIdealLoop::build_loop_early`       | `libjvm.dylib` |
| <0.1% |       1 | `Node::match_edge`                       | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIterGVN::subsume_node`             | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIterGVN::transform_old`            | `libjvm.dylib` |
| <0.1% |       1 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
| <0.1% |       1 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |
| <0.1% |       1 | `TypeInt::eq`                            | `libjvm.dylib` |
| <0.1% |       1 | `Node::clone`                            | `libjvm.dylib` |
| <0.1% |       1 | `NodeHash::hash_find_insert`             | `libjvm.dylib` |

##### JIT

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 0.2% |      10 | `zero_blocks` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 93.2% |     233 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
|  6.8% |      17 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 56.9% |     120 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| 40.8% |      86 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|  2.4% |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 56.0% |      51 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| 26.4% |      24 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
|  9.9% |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  5.5% |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
|  2.2% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 85.9% |      73 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
| 14.1% |      12 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 35.3% |      12 | `java.util.HashMap:1213` |
| 23.5% |       8 | `java.util.HashMap:1197` |
| 17.6% |       6 | `java.util.HashMap:1204` |
|  8.8% |       3 | `java.util.HashMap:1207` |
|  8.8% |       3 | `java.util.HashMap:1219` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 32.3% |      10 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
| 25.8% |       8 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 16.1% |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
| 12.9% |       4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
| 12.9% |       4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |

##### `doubleValue()` (`java.lang.Double`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       4 | `java.lang.Double:1001` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       1 | `java.util.HashMap:1427` |
| 50.0% |       1 | `java.util.HashMap:1428` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       1 | `java.util.HashMap:1372` |
| 50.0% |       1 | `java.util.HashMap:1369` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.ArrayList:495` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:146` |

##### `get(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.ArrayList:427` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:59` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.ArrayList:759` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:190` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     250 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     211 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      91 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |      85 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      34 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      31 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 50.0% |       5 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `doubleValue()` (`java.lang.Double`)

|      % | Samples | Caller                         | Location                                                   |
| -----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 100.0% |       4 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |       2 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       2 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `mach_absolute_time` (`libsystem_kernel.dylib`)

|      % | Samples | Caller              | Location                                    |
| -----: | ------: | ------------------- | ------------------------------------------- |
| 100.0% |       1 | `getVmStartNanos()` | `org.renaissance.harness.RenaissanceSuite$` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |       1 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `get(int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |       1 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801183d68` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location                                    |
| -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% |       1 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                    | Location                                                   |
| -----: | ------: | ------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `OopMapValue::write_on` (`libjvm.dylib`)

|      % | Samples | Caller            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |       1 | `OopMap::set_oop` | `libjvm.dylib` |

##### `ProjNode::Opcode` (`libjvm.dylib`)

|      % | Samples | Caller                                   | Location       |
| -----: | ------: | ---------------------------------------- | -------------- |
| 100.0% |       1 | `PhaseCCP::push_child_nodes_to_worklist` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       1 | `PhaseCFG::schedule_late` | `libjvm.dylib` |

##### `PhaseChaitin::merge_multidefs` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node::match_edge` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       1 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseIterGVN::subsume_node` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       1 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `TypeInt::eq` (`libjvm.dylib`)

|      % | Samples | Caller      | Location       |
| -----: | ------: | ----------- | -------------- |
| 100.0% |       1 | `Type::cmp` | `libjvm.dylib` |

##### `Node::clone` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       1 | `Matcher::xform` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                    | Location                                                   |
| ----: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------- |
| 22.1% |   1,076 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 21.5% |   1,051 | `join()`                                                    | `java.util.concurrent.ForkJoinTask`                        |
|  8.7% |     425 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  7.2% |     351 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  7.2% |     351 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  6.5% |     318 | `findNearestCentroid()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  5.6% |     272 | `CompileBroker::compiler_thread_loop`                       | `libjvm.dylib`                                             |
|  5.2% |     253 | `CompileQueue::get`                                         | `libjvm.dylib`                                             |
|  5.1% |     250 | `accumulate(Double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  4.9% |     240 | `invoke()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
|  4.4% |     217 | `distance(Double[], Double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.5% |     171 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  3.5% |     171 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  3.5% |     171 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  2.5% |     121 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                            |
|  2.5% |     121 | `main(String[])`                                            | `org.renaissance.core.Launcher`                            |
|  2.5% |     120 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                 |
|  2.5% |     120 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                                 |
|  2.5% |     120 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                            |
|  2.4% |     119 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$`                |

#### Categories

##### Ours

|     % | Samples | Function                                                                                                               | Location                                                               |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 22.1% |   1,076 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  8.7% |     425 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  7.2% |     351 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  7.2% |     351 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  6.5% |     318 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  5.1% |     250 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  4.4% |     217 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  3.5% |     171 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  3.5% |     171 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  3.5% |     171 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  2.5% |     121 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  2.5% |     121 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  2.5% |     120 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  2.5% |     120 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  2.4% |     119 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     117 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     116 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  2.4% |     116 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     116 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111efe0` |
|  2.3% |     114 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |

##### Standard library

|     % | Samples | Function                            | Location                             |
| ----: | ------: | ----------------------------------- | ------------------------------------ |
| 21.5% |   1,051 | `join()`                            | `java.util.concurrent.ForkJoinTask`  |
|  4.9% |     240 | `invoke()`                          | `java.util.concurrent.ForkJoinTask`  |
|  2.5% |     120 | `invoke(Object, Object[])`          | `java.lang.reflect.Method`           |
|  2.4% |     116 | `foreach(Function1)`                | `scala.collection.immutable.List`    |
|  2.3% |     110 | `get()`                             | `java.util.concurrent.ForkJoinTask`  |
|  2.3% |     110 | `map(Function1)`                    | `scala.collection.immutable.Range`   |
|  1.4% |      68 | `forEach(BiConsumer)`               | `java.util.HashMap`                  |
|  1.3% |      64 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                  |
|  0.8% |      40 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                  |
|  0.7% |      36 | `get(int)`                          | `java.util.ArrayList`                |
|  0.6% |      27 | `addAll(Collection)`                | `java.util.ArrayList`                |
|  0.4% |      21 | `add(Object)`                       | `java.util.ArrayList`                |
|  0.4% |      20 | `<init>(Collection)`                | `java.util.ArrayList`                |
|  0.1% |       4 | `loadClass(String)`                 | `java.lang.ClassLoader`              |
|  0.1% |       4 | `doubleValue()`                     | `java.lang.Double`                   |
|  0.1% |       3 | `collect(Collector)`                | `java.util.stream.ReferencePipeline` |
|  0.1% |       3 | `gc()`                              | `java.lang.Runtime`                  |
| <0.1% |       2 | `<clinit>()`                        | `scala.Predef$`                      |
| <0.1% |       2 | `toArray(IntFunction)`              | `java.util.stream.ReferencePipeline` |
| <0.1% |       2 | `<init>(Map)`                       | `java.util.HashMap`                  |

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
|  5.6% |     272 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
|  5.2% |     253 | `CompileQueue::get`                         | `libjvm.dylib` |
|  0.4% |      19 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
|  0.3% |      14 | `Compile::Compile`                          | `libjvm.dylib` |
|  0.3% |      14 | `C2Compiler::compile_method`                | `libjvm.dylib` |
|  0.1% |       7 | `Compile::Optimize`                         | `libjvm.dylib` |
|  0.1% |       6 | `Compile::Code_Gen`                         | `libjvm.dylib` |
|  0.1% |       5 | `Compilation::compile_method`               | `libjvm.dylib` |
|  0.1% |       5 | `Compilation::Compilation`                  | `libjvm.dylib` |
|  0.1% |       4 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  0.1% |       4 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
|  0.1% |       4 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
|  0.1% |       3 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|  0.1% |       3 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
| <0.1% |       2 | `ciEnv::register_method`                    | `libjvm.dylib` |
| <0.1% |       2 | `ciBytecodeStream::get_method`              | `libjvm.dylib` |
| <0.1% |       2 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
| <0.1% |       2 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| <0.1% |       2 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
| <0.1% |       2 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |

##### JIT

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 0.2% |      10 | `zero_blocks` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 97.7% |   1,051 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 39.5% |     425 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 32.6% |     351 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 15.9% |     171 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  6.5% |      70 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     425 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  74.8% |     318 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  25.2% |     107 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 71.2% |     250 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  4.6% |      16 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     351 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     351 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 68.2% |     217 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.5% |       8 | `get(int)`                     | `java.util.ArrayList`                                      |
|  0.6% |       2 | `SafepointBlob`                | `<unknown>`                                                |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 93.0% |     253 | `CompileQueue::get`                        | `libjvm.dylib` |
|  7.0% |      19 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 1.8% |       4 | `doubleValue()` | `java.lang.Double` |
| 0.9% |       2 | `SafepointBlob` | `<unknown>`        |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     171 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee          | Location                                               |
| -----: | ------: | --------------- | ------------------------------------------------------ |
| 100.0% |     171 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     171 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     171 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                                                      | Location                            |
| ----: | ------: | ----------------------------------------------------------- | ----------------------------------- |
| 99.2% |     120 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|  0.8% |       1 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                                 | Location                        |
| -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% |     121 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % | Samples | Callee              | Location                                    |
| ----: | ------: | ------------------- | ------------------------------------------- |
| 99.2% |     119 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  0.8% |       1 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                     | Location                   |
| -----: | ------: | -------------------------- | -------------------------- |
| 100.0% |     120 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee                                                                        | Location                                    |
| ----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 98.3% |     117 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  0.8% |       1 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  0.8% |       1 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee               | Location                                    |
| ----: | ------: | -------------------- | ------------------------------------------- |
| 99.1% |     116 | `foreach(Function1)` | `scala.collection.immutable.List`           |
|  0.9% |       1 | `getVmStartNanos()`  | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|     % | Samples | Callee                             | Location                                  |
| ----: | ------: | ---------------------------------- | ----------------------------------------- |
| 98.3% |     114 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
|  1.7% |       2 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Callee               | Location                                  |
| -----: | ------: | -------------------- | ----------------------------------------- |
| 100.0% |     116 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111efe0`)

|      % | Samples | Callee                                                                                                                 | Location                                    |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% |     116 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|     % | Samples | Callee                                            | Location                                  |
| ----: | ------: | ------------------------------------------------- | ----------------------------------------- |
| 97.4% |     111 | `run(BenchmarkContext)`                           | `org.renaissance.jdk.concurrent.FjKmeans` |
|  2.6% |       3 | `notifyAfterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.EventDispatcher` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

|      % | Samples | Callee          | Location                                                             |
| -----: | ------: | --------------- | -------------------------------------------------------------------- |
| 100.0% |     110 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a80117ae68` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Callee                   | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 97.1% |      66 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801186fd8` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Callee                  | Location                                                               |
| ----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 73.4% |      47 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801187220` |
|  7.8% |       5 | `zero_blocks`           | `<unknown>`                                                            |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 73.7% |      14 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 50.0% |       7 | `Compile::Optimize` | `libjvm.dylib` |
| 42.9% |       6 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      14 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 28.6% |       2 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |
| 28.6% |       2 | `Compile::optimize_loops`  | `libjvm.dylib` |
| 28.6% |       2 | `PhaseIterGVN::optimize`   | `libjvm.dylib` |
| 14.3% |       1 | `PhaseCCP::PhaseCCP`       | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 50.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 33.3% |       2 | `Matcher::match`                  | `libjvm.dylib` |
| 16.7% |       1 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 60.0% |       3 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 40.0% |       2 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       5 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       2 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 50.0% |       2 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 25.0% |       1 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
| 25.0% |       1 | `AddNode::Value`             | `libjvm.dylib` |
| 25.0% |       1 | `NodeHash::hash_find_insert` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       4 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 66.7% |       2 | `Compilation::build_hir` | `libjvm.dylib` |
| 33.3% |       1 | `Compilation::emit_lir`  | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 33.3% |       1 | `PhaseChaitin::merge_multidefs`          | `libjvm.dylib` |
| 33.3% |       1 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
| 33.3% |       1 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

|     % | Samples | Callee                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 50.0% |       1 | `ciEnv::validate_compile_task_dependencies` | `libjvm.dylib` |

##### `ciBytecodeStream::get_method` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 50.0% |       1 | `ciObjectFactory::get_metadata`   | `libjvm.dylib` |
| 50.0% |       1 | `ciEnv::get_method_by_index_impl` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

|      % | Samples | Callee                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       2 | `ciBytecodeStream::get_method` | `libjvm.dylib` |
|  50.0% |       1 | `GraphBuilder::try_inline`     | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|      % | Samples | Callee                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |       2 | `GraphBuilder::invoke` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |       2 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Callee                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       2 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.2% |     253 | `CompileQueue::get` (`libjvm.dylib`) ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.3% |     110 | `get()` (`java.util.concurrent.ForkJoinTask`) ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a80117ae68`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111efe0`) ← … ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.7% |      84 | `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.9% |      44 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.7% |      36 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.7% |      32 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% |      30 | `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.6% |      29 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% |      28 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% |      25 | `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.5% |      22 | `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% |      22 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% |      22 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% |      18 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.3% |      17 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.3% |      17 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                       |
| 0.3% |      17 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                      |
| 0.3% |      16 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801183d68`) |
| 0.3% |      16 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.3% |      15 | `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
