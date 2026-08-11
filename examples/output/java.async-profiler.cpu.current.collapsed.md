# Sampling profile

Collected 4,711 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 60.1% |   2,829 |
| Native           | 23.3% |   1,099 |
| Standard library | 14.5% |     685 |
| Compiler         |  1.1% |      52 |
| JIT              |  1.0% |      46 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                   | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 20.7% |     974 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 18.8% |     887 | `distance`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 10.6% |     499 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  7.5% |     354 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.8% |     133 | `computeIfAbsent`          | `java.util.HashMap`                                        |
|  2.3% |     106 | `doubleValue`              | `java.lang.Double`                                         |
|  2.1% |     101 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.3% |      61 | `add`                      | `java.util.ArrayList`                                      |
|  1.0% |      46 | `zero_blocks`              | `<unknown>`                                                |
|  0.2% |      10 | `merge`                    | `java.util.HashMap`                                        |
|  0.1% |       5 | `addAll`                   | `java.util.ArrayList`                                      |
|  0.1% |       3 | `compute`                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  0.1% |       3 | `get`                      | `java.util.ArrayList`                                      |
| <0.1% |       2 | `forEach`                  | `java.util.HashMap`                                        |
| <0.1% |       2 | `lambda$generateData$3`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       2 | `PhaseChaitin::Split`      | `<unknown>`                                                |
| <0.1% |       2 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       2 | `PhaseChaitin::elide_copy` | `<unknown>`                                                |
| <0.1% |       2 | `PhaseCCP::transform`      | `<unknown>`                                                |
| <0.1% |       2 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

#### Categories

##### Ours

|     % | Samples | Function                   | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 20.7% |     974 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 18.8% |     887 | `distance`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 10.6% |     499 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  7.5% |     354 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.1% |     101 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% |       3 | `compute`                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| <0.1% |       2 | `lambda$generateData$3`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       2 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       2 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       1 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       1 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       1 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|     % | Samples | Function          | Location                            |
| ----: | ------: | ----------------- | ----------------------------------- |
|  2.8% |     133 | `computeIfAbsent` | `java.util.HashMap`                 |
|  2.3% |     106 | `doubleValue`     | `java.lang.Double`                  |
|  1.3% |      61 | `add`             | `java.util.ArrayList`               |
|  0.2% |      10 | `merge`           | `java.util.HashMap`                 |
|  0.1% |       5 | `addAll`          | `java.util.ArrayList`               |
|  0.1% |       3 | `get`             | `java.util.ArrayList`               |
| <0.1% |       2 | `forEach`         | `java.util.HashMap`                 |
| <0.1% |       1 | `join`            | `java.util.concurrent.ForkJoinTask` |
| <0.1% |       1 | `valueOf`         | `java.lang.Double`                  |

##### Compiler

|     % | Samples | Function                                    | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| <0.1% |       2 | `PhaseChaitin::Split`                       | `<unknown>` |
| <0.1% |       2 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| <0.1% |       2 | `PhaseCCP::transform`                       | `<unknown>` |
| <0.1% |       1 | `Matcher::ReduceInst`                       | `<unknown>` |
| <0.1% |       1 | `Matcher::match_tree`                       | `<unknown>` |
| <0.1% |       1 | `ciBytecodeStream::reset_to_bci`            | `<unknown>` |
| <0.1% |       1 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| <0.1% |       1 | `IdealKit::make_leaf_call`                  | `<unknown>` |
| <0.1% |       1 | `TypeKlassPtr::exact_klass_helper`          | `<unknown>` |
| <0.1% |       1 | `PhaseCFG::schedule_early`                  | `<unknown>` |
| <0.1% |       1 | `AbstractAssembler::bind`                   | `<unknown>` |
| <0.1% |       1 | `LinearScan::build_intervals`               | `<unknown>` |
| <0.1% |       1 | `CProjNode::is_CFG`                         | `<unknown>` |
| <0.1% |       1 | `AddPNode::Opcode`                          | `<unknown>` |
| <0.1% |       1 | `PhaseCFG::select`                          | `<unknown>` |
| <0.1% |       1 | `PhaseCFG::remove_empty_blocks`             | `<unknown>` |
| <0.1% |       1 | `Node_Array::grow`                          | `<unknown>` |
| <0.1% |       1 | `PhaseIdealLoop::Dominators`                | `<unknown>` |
| <0.1% |       1 | `Node_Backward_Iterator::next`              | `<unknown>` |
| <0.1% |       1 | `Matcher::ReduceOper`                       | `<unknown>` |

##### JIT

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 1.0% |      46 | `zero_blocks` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------- |
| 100.0% |     974 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |     887 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     499 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     354 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     133 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue` (`java.lang.Double`)

|     % | Samples | Caller       | Location                                                   |
| ----: | ------: | ------------ | ---------------------------------------------------------- |
| 84.0% |      89 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 16.0% |      17 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     101 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 93.4% |      57 | `add`             | `java.util.ArrayList`                                      |
|  6.6% |       4 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 63.0% |      29 | `merge`               | `java.util.HashMap`                                        |
| 10.9% |       5 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.2% |       1 | `<init>`              | `java.util.ArrayList`                                      |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |      10 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `addAll` (`java.util.ArrayList`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |       5 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 66.7% |       2 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 33.3% |       1 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       2 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$3` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       2 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401125b10` |

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `PhaseCCP::transform` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       2 | `PhaseCCP::do_transform` | `<unknown>` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller  | Location                                                                              |
| -----: | ------: | ------- | ------------------------------------------------------------------------------------- |
| 100.0% |       2 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000401186b38` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187218` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller          | Location                                                  |
| -----: | ------: | --------------- | --------------------------------------------------------- |
| 100.0% |       1 | `createSubtask` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |       1 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `valueOf` (`java.lang.Double`)

|      % | Samples | Caller                  | Location                                    |
| -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% |       1 | `lambda$generateData$3` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `Matcher::ReduceInst` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `Matcher::ReduceInst_Interior` | `<unknown>` |

##### `Matcher::match_tree` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       1 | `Matcher::xform` | `<unknown>` |

##### `ciBytecodeStream::reset_to_bci` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       1 | `ciMethod::get_method_at_bci` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `TypeKlassPtr::exact_klass_helper` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       1 | `SubTypeCheckNode::sub` | `<unknown>` |

##### `PhaseCFG::schedule_early` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `LinearScan::build_intervals` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       1 | `LinearScan::do_linear_scan` | `<unknown>` |

##### `CProjNode::is_CFG` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseCFG::select` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |       1 | `PhaseCFG::schedule_local` | `<unknown>` |

##### `PhaseCFG::remove_empty_blocks` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |       1 | `Compile::Code_Gen` | `<unknown>` |

##### `Node_Array::grow` (`<unknown>`)

|      % | Samples | Caller                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |       1 | `PhaseCFG::schedule_late` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Node_Backward_Iterator::next` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `Matcher::ReduceOper` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `Matcher::ReduceInst_Interior` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                 | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 89.2% |   4,204 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 86.1% |   4,054 | `join`                   | `java.util.concurrent.ForkJoinTask`                                    |
| 37.5% |   1,768 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 35.0% |   1,650 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 35.0% |   1,650 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 28.2% |   1,327 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 22.6% |   1,063 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 21.7% |   1,024 | `invoke`                 | `java.util.concurrent.ForkJoinTask`                                    |
| 19.2% |     906 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 15.9% |     748 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.9% |     748 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.7% |     739 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  9.7% |     458 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.7% |     458 | `call`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68` |
|  9.4% |     441 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.8% |     318 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  6.7% |     317 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.4% |     302 | `forEach`                | `java.util.HashMap`                                                    |
|  6.4% |     300 | `merge`                  | `java.util.HashMap`                                                    |
|  6.4% |     300 | `lambda$merge$7`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

#### Categories

##### Ours

|     % | Samples | Function                 | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 89.2% |   4,204 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 37.5% |   1,768 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 35.0% |   1,650 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 35.0% |   1,650 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 28.2% |   1,327 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 22.6% |   1,063 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 19.2% |     906 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 15.9% |     748 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.9% |     748 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.7% |     739 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  9.7% |     458 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.7% |     458 | `call`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68` |
|  9.4% |     441 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.8% |     318 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  6.7% |     317 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.4% |     300 | `lambda$merge$7`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  6.4% |     300 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401186d88` |
|  4.7% |     221 | `lambda$merge$6`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  4.7% |     221 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187218` |
|  0.8% |      39 | `launchHarnessClass`     | `org.renaissance.core.Launcher`                                        |

##### Standard library

|     % | Samples | Function          | Location                             |
| ----: | ------: | ----------------- | ------------------------------------ |
| 86.1% |   4,054 | `join`            | `java.util.concurrent.ForkJoinTask`  |
| 21.7% |   1,024 | `invoke`          | `java.util.concurrent.ForkJoinTask`  |
|  6.4% |     302 | `forEach`         | `java.util.HashMap`                  |
|  6.4% |     300 | `merge`           | `java.util.HashMap`                  |
|  4.3% |     202 | `get`             | `java.util.ArrayList`                |
|  3.6% |     170 | `computeIfAbsent` | `java.util.HashMap`                  |
|  3.3% |     156 | `addAll`          | `java.util.ArrayList`                |
|  2.4% |     111 | `add`             | `java.util.ArrayList`                |
|  2.3% |     106 | `doubleValue`     | `java.lang.Double`                   |
|  1.4% |      65 | `<init>`          | `java.util.ArrayList`                |
|  0.7% |      33 | `invoke`          | `java.lang.reflect.Method`           |
|  0.4% |      17 | `foreach`         | `scala.collection.immutable.List`    |
|  0.3% |      16 | `loadClass`       | `java.lang.ClassLoader`              |
|  0.3% |      14 | `<init>`          | `java.util.HashMap`                  |
|  0.3% |      12 | `toArray`         | `java.util.stream.ReferencePipeline` |
|  0.2% |       8 | `collect`         | `java.util.stream.ReferencePipeline` |
|  0.1% |       6 | `copy`            | `java.nio.file.Files`                |
|  0.1% |       6 | `fork`            | `java.util.concurrent.ForkJoinTask`  |
|  0.1% |       6 | `<clinit>`        | `scala.Predef$`                      |
| <0.1% |       2 | `<init>`          | `java.util.logging.SimpleFormatter`  |

##### Compiler

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 2.0% |      92 | `CompileBroker::compiler_thread_loop`       | `<unknown>` |
| 1.6% |      74 | `CompileBroker::invoke_compiler_on_method`  | `<unknown>` |
| 1.3% |      60 | `Compile::Compile`                          | `<unknown>` |
| 1.3% |      60 | `C2Compiler::compile_method`                | `<unknown>` |
| 0.6% |      28 | `Compile::Code_Gen`                         | `<unknown>` |
| 0.4% |      20 | `Compile::Optimize`                         | `<unknown>` |
| 0.4% |      18 | `CompileQueue::get`                         | `<unknown>` |
| 0.3% |      13 | `Compilation::compile_java_method`          | `<unknown>` |
| 0.3% |      13 | `Compilation::compile_method`               | `<unknown>` |
| 0.3% |      13 | `Compilation::Compilation`                  | `<unknown>` |
| 0.3% |      12 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
| 0.3% |      12 | `PhaseIdealLoop::PhaseIdealLoop`            | `<unknown>` |
| 0.3% |      12 | `PhaseIdealLoop::optimize`                  | `<unknown>` |
| 0.2% |      11 | `PhaseChaitin::Register_Allocate`           | `<unknown>` |
| 0.2% |      10 | `Compilation::build_hir`                    | `<unknown>` |
| 0.2% |       9 | `GraphBuilder::iterate_all_blocks`          | `<unknown>` |
| 0.2% |       9 | `GraphBuilder::GraphBuilder`                | `<unknown>` |
| 0.2% |       9 | `Matcher::match`                            | `<unknown>` |
| 0.2% |       8 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
| 0.2% |       8 | `Matcher::match_tree`                       | `<unknown>` |

##### JIT

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 1.0% |      46 | `zero_blocks` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 96.4% |   4,054 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 42.1% |   1,768 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 39.2% |   1,650 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 17.8% |     748 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  7.5% |     317 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |   1,768 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  75.1% |   1,327 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  24.9% |     441 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                                           | Location                                                  |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------- |
| 64.4% |   1,063 | `accumulate`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  5.3% |      87 | `get`                                            | `java.util.ArrayList`                                     |
|  0.1% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>`                                               |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |   1,650 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |   1,650 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 68.3% |     906 | `distance`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.3% |      57 | `get`                            | `java.util.ArrayList`                                      |
|  0.4% |       5 | `zero_blocks`                    | `<unknown>`                                                |
|  0.2% |       3 | `counter_overflow Runtime1 stub` | `<unknown>`                                                |
|  0.2% |       2 | `_new_array_Java`                | `<unknown>`                                                |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|    % | Samples | Callee        | Location           |
| ---: | ------: | ------------- | ------------------ |
| 8.4% |      89 | `doubleValue` | `java.lang.Double` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee                                           | Location           |
| ---: | ------: | ------------------------------------------------ | ------------------ |
| 1.9% |      17 | `doubleValue`                                    | `java.lang.Double` |
| 0.1% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>`        |
| 0.1% |       1 | `SafepointBlob`                                  | `<unknown>`        |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 98.8% |     739 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  1.1% |       8 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.1% |       1 | `put`     | `java.util.HashMap`                                    |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     748 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     748 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |     739 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location                                                   |
| ----: | ------: | -------- | ---------------------------------------------------------- |
| 99.6% |     456 | `invoke` | `java.util.concurrent.ForkJoinTask`                        |
|  0.2% |       1 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  0.2% |       1 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |     458 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                     | Location              |
| ----: | ------: | -------------------------- | --------------------- |
| 38.5% |     170 | `computeIfAbsent`          | `java.util.HashMap`   |
| 25.2% |     111 | `add`                      | `java.util.ArrayList` |
| 13.2% |      58 | `get`                      | `java.util.ArrayList` |
|  0.2% |       1 | `resolve_opt_virtual_call` | `<unknown>`           |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location                           |
| ----: | ------: | -------------------- | ---------------------------------- |
| 95.0% |     302 | `forEach`            | `java.util.HashMap`                |
|  4.4% |      14 | `<init>`             | `java.util.HashMap`                |
|  0.6% |       2 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee           | Location                                                   |
| ----: | ------: | ---------------- | ---------------------------------------------------------- |
| 99.7% |     316 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 99.7% |     316 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach` (`java.util.HashMap`)

|     % | Samples | Callee   | Location                                                               |
| ----: | ------: | -------- | ---------------------------------------------------------------------- |
| 99.3% |     300 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401186d88` |

##### `merge` (`java.util.HashMap`)

|     % | Samples | Callee        | Location                                                               |
| ----: | ------: | ------------- | ---------------------------------------------------------------------- |
| 73.7% |     221 | `apply`       | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187218` |
|  9.7% |      29 | `zero_blocks` | `<unknown>`                                                            |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee  | Location            |
| -----: | ------: | ------- | ------------------- |
| 100.0% |     300 | `merge` | `java.util.HashMap` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401186d88`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     300 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 70.6% |     156 | `addAll` | `java.util.ArrayList` |
| 29.0% |      64 | `<init>` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187218`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     221 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeIfAbsent` (`java.util.HashMap`)

|    % | Samples | Callee  | Location                                                                              |
| ---: | ------: | ------- | ------------------------------------------------------------------------------------- |
| 1.2% |       2 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000401186b38` |

##### `add` (`java.util.ArrayList`)

|     % | Samples | Callee | Location              |
| ----: | ------: | ------ | --------------------- |
| 96.4% |     107 | `add`  | `java.util.ArrayList` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 80.4% |      74 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 19.6% |      18 | `CompileQueue::get`                        | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 81.1% |      60 | `C2Compiler::compile_method`    | `<unknown>` |
|  1.4% |       1 | `ciEnv::get_method_from_handle` | `<unknown>` |

##### `<init>` (`java.util.ArrayList`)

|    % | Samples | Callee        | Location    |
| ---: | ------: | ------------- | ----------- |
| 1.5% |       1 | `zero_blocks` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 46.7% |      28 | `Compile::Code_Gen`                      | `<unknown>` |
| 33.3% |      20 | `Compile::Optimize`                      | `<unknown>` |
|  1.7% |       1 | `Compile::Init`                          | `<unknown>` |
|  1.7% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      60 | `Compile::Compile` | `<unknown>` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                      | Location                        |
| ----: | ------: | --------------------------- | ------------------------------- |
| 97.4% |      38 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher` |
|  2.6% |       1 | `createScratchRoot`         | `org.renaissance.core.Launcher` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 39.3% |      11 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 32.1% |       9 | `Matcher::match`                  | `<unknown>` |
| 17.9% |       5 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  7.1% |       2 | `PhaseOutput::Output`             | `<unknown>` |
|  3.6% |       1 | `PhaseCFG::remove_empty_blocks`   | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 30.0% |       6 | `Compile::optimize_loops`              | `<unknown>` |
| 30.0% |       6 | `PhaseIdealLoop::optimize`             | `<unknown>` |
| 15.0% |       3 | `PhaseCCP::do_transform`               | `<unknown>` |
| 10.0% |       2 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |
|  5.0% |       1 | `PhaseIterGVN::optimize`               | `<unknown>` |

##### `CompileQueue::get` (`<unknown>`)

|    % | Samples | Callee                                | Location    |
| ---: | ------: | ------------------------------------- | ----------- |
| 5.6% |       1 | `CompileTask::select_for_compilation` | `<unknown>` |

##### `loadClass` (`java.lang.ClassLoader`)

|      % | Samples | Callee      | Location                |
| -----: | ------: | ----------- | ----------------------- |
| 100.0% |      16 | `loadClass` | `java.lang.ClassLoader` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 76.9% |      10 | `Compilation::build_hir`      | `<unknown>` |
| 15.4% |       2 | `Compilation::emit_lir`       | `<unknown>` |
|  7.7% |       1 | `Compilation::emit_code_body` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      13 | `Compilation::compile_java_method` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |      13 | `Compilation::compile_method` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 25.0% |       3 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| 16.7% |       2 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
|  8.3% |       1 | `CProjNode::is_CFG`                    | `<unknown>` |
|  8.3% |       1 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
|  8.3% |       1 | `MultiNode::is_CFG`                    | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      12 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|      % | Samples | Callee                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |      12 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 18.2% |       2 | `PhaseChaitin::Split`                      | `<unknown>` |
| 18.2% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| 18.2% |       2 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
|  9.1% |       1 | `PhaseChaitin::Simplify`                   | `<unknown>` |
|  9.1% |       1 | `PhiNode::out_RegMask`                     | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 88.9% |       8 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
| 11.1% |       1 | `GraphBuilder::setup_osr_entry_block`       | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       9 | `GraphBuilder::iterate_all_blocks` | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|     % | Samples | Callee                 | Location    |
| ----: | ------: | ---------------------- | ----------- |
| 88.9% |       8 | `Matcher::xform`       | `<unknown>` |
| 11.1% |       1 | `Matcher::find_shared` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 62.5% |       5 | `GraphBuilder::invoke`        | `<unknown>` |
| 12.5% |       1 | `GraphBuilder::load_constant` | `<unknown>` |
| 12.5% |       1 | `GraphBuilder::access_field`  | `<unknown>` |
| 12.5% |       1 | `GraphBuilder::arithmetic_op` | `<unknown>` |

##### `Matcher::match_tree` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 50.0% |       4 | `Matcher::Label_Root` | `<unknown>` |
| 37.5% |       3 | `Matcher::ReduceInst` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3.5% |     165 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.1% |     147 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.9% |     135 | `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.8% |     130 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.5% |     118 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.3% |     110 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.3% |     107 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.0% |      94 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% |      86 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68`) |
| 1.7% |      78 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.6% |      77 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.6% |      74 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.5% |      69 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.4% |      68 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                               |
| 1.4% |      67 | `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.4% |      66 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke` (`java.util.concurrent.ForkJoinTask`) ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                              |
| 1.3% |      61 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.1% |      54 | `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.1% |      54 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke` (`java.util.concurrent.ForkJoinTask`) ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                      |
| 1.1% |      53 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
