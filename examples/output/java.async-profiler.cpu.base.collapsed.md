# Profile

Collected 4,869 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 60.3% |   2,937 |
| Native           | 21.9% |   1,068 |
| Standard library | 15.1% |     733 |
| JIT              |  1.5% |      75 |
| Compiler         |  1.1% |      54 |
| Unknown          | <0.1% |       2 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                           | Location                                                   |
| ----: | ------: | ---------------------------------- | ---------------------------------------------------------- |
| 19.8% |     965 | `distance`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 19.8% |     962 | `accumulate`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  9.1% |     444 | `findNearestCentroid`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  8.6% |     420 | `vectorSum`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  3.0% |     148 | `computeIfAbsent`                  | `java.util.HashMap`                                        |
|  2.9% |     141 | `doubleValue`                      | `java.lang.Double`                                         |
|  2.6% |     129 | `collectClusters`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.5% |      73 | `zero_blocks`                      | `<unknown>`                                                |
|  1.2% |      58 | `add`                              | `java.util.ArrayList`                                      |
|  0.2% |      12 | `merge`                            | `java.util.HashMap`                                        |
|  0.1% |       4 | `forEach`                          | `java.util.HashMap`                                        |
|  0.1% |       4 | `lambda$collectClusters$0`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% |       3 | `get`                              | `java.util.ArrayList`                                      |
|  0.1% |       3 | `join`                             | `java.util.concurrent.ForkJoinTask`                        |
| <0.1% |       2 | `computeDirectly`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       2 | `PhaseChaitin::build_ifg_physical` | `<unknown>`                                                |
| <0.1% |       2 | `PhaseChaitin::elide_copy`         | `<unknown>`                                                |
| <0.1% |       2 | `vtable stub`                      | `<unknown>`                                                |
| <0.1% |       2 | `Matcher::match_tree`              | `<unknown>`                                                |
| <0.1% |       2 | `size`                             | `java.util.ArrayList`                                      |

#### Categories

##### Ours

|     % | Samples | Function                   | Location                                                               |
| ----: | ------: | -------------------------- | ---------------------------------------------------------------------- |
| 19.8% |     965 | `distance`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 19.8% |     962 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  9.1% |     444 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  8.6% |     420 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  2.6% |     129 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.1% |       4 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       2 | `computeDirectly`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       2 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| <0.1% |       1 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       1 | `average`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| <0.1% |       1 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       1 | `accept`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88` |
| <0.1% |       1 | `lambda$generateData$3`    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       1 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d0011258d8` |
| <0.1% |       1 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       1 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

##### Standard library

|     % | Samples | Function          | Location                            |
| ----: | ------: | ----------------- | ----------------------------------- |
|  3.0% |     148 | `computeIfAbsent` | `java.util.HashMap`                 |
|  2.9% |     141 | `doubleValue`     | `java.lang.Double`                  |
|  1.2% |      58 | `add`             | `java.util.ArrayList`               |
|  0.2% |      12 | `merge`           | `java.util.HashMap`                 |
|  0.1% |       4 | `forEach`         | `java.util.HashMap`                 |
|  0.1% |       3 | `get`             | `java.util.ArrayList`               |
|  0.1% |       3 | `join`            | `java.util.concurrent.ForkJoinTask` |
| <0.1% |       2 | `size`            | `java.util.ArrayList`               |
| <0.1% |       1 | `fork`            | `java.util.concurrent.ForkJoinTask` |

##### JIT

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
|  1.5% |      73 | `zero_blocks` | `<unknown>` |
| <0.1% |       2 | `vtable stub` | `<unknown>` |

##### Compiler

|     % | Samples | Function                            | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| <0.1% |       2 | `PhaseChaitin::build_ifg_physical`  | `<unknown>` |
| <0.1% |       2 | `PhaseChaitin::elide_copy`          | `<unknown>` |
| <0.1% |       2 | `Matcher::match_tree`               | `<unknown>` |
| <0.1% |       1 | `Node::needs_anti_dependence_check` | `<unknown>` |
| <0.1% |       1 | `PhaseIdealLoop::build_loop_early`  | `<unknown>` |
| <0.1% |       1 | `IndexSet::initialize`              | `<unknown>` |
| <0.1% |       1 | `Matcher::pd_clone_node`            | `<unknown>` |
| <0.1% |       1 | `HaltNode::is_CFG`                  | `<unknown>` |
| <0.1% |       1 | `LinearScan::assign_reg_num`        | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::raise_pressure`      | `<unknown>` |
| <0.1% |       1 | `TypeInstPtr::hash`                 | `<unknown>` |
| <0.1% |       1 | `Matcher::int_pressure_limit`       | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::Split`               | `<unknown>` |
| <0.1% |       1 | `TypeInterfaces::hash`              | `<unknown>` |
| <0.1% |       1 | `ValueStack::ValueStack`            | `<unknown>` |
| <0.1% |       1 | `GraphBuilder::append_with_bci`     | `<unknown>` |
| <0.1% |       1 | `TypeInt::eq`                       | `<unknown>` |
| <0.1% |       1 | `PhaseIterGVN::transform_old`       | `<unknown>` |
| <0.1% |       1 | `storeLNode::emit`                  | `<unknown>` |
| <0.1% |       1 | `PhaseOutput::shorten_branches`     | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |     965 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------- |
| 100.0% |     962 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     444 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     420 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeIfAbsent` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     148 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue` (`java.lang.Double`)

|     % | Samples | Caller       | Location                                                   |
| ----: | ------: | ------------ | ---------------------------------------------------------- |
| 87.9% |     124 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 12.1% |      17 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     129 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 63.0% |      46 | `merge`               | `java.util.HashMap`                                        |
|  9.6% |       7 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.7% |       2 | `<init>`              | `java.util.ArrayList`                                      |

##### `add` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 87.9% |      51 | `add`             | `java.util.ArrayList`                                      |
| 12.1% |       7 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |      12 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       4 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller  | Location                                                                              |
| -----: | ------: | ------- | ------------------------------------------------------------------------------------- |
| 100.0% |       4 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000d001186b38` |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 66.7% |       2 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 33.3% |       1 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       3 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 50.0% |       1 | `join`    | `java.util.concurrent.ForkJoinTask`                    |
| 50.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `Matcher::match_tree` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       2 | `Matcher::xform` | `<unknown>` |

##### `size` (`java.util.ArrayList`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |       2 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller   | Location                                               |
| -----: | ------: | -------- | ------------------------------------------------------ |
| 100.0% |       2 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d0011876a0` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88`)

|      % | Samples | Caller    | Location            |
| -----: | ------: | --------- | ------------------- |
| 100.0% |       1 | `forEach` | `java.util.HashMap` |

##### `lambda$generateData$3` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001125b10` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller           | Location                                                  |
| -----: | ------: | ---------------- | --------------------------------------------------------- |
| 100.0% |       1 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `fork` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `Node::needs_anti_dependence_check` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `Node_Backward_Iterator::next` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `IndexSet::initialize` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       1 | `PhaseIFG::init` | `<unknown>` |

##### `Matcher::pd_clone_node` (`<unknown>`)

|      % | Samples | Caller                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |       1 | `Matcher::find_shared` | `<unknown>` |

##### `HaltNode::is_CFG` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_loop_tree` | `<unknown>` |

##### `LinearScan::assign_reg_num` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       1 | `LinearScan::do_linear_scan` | `<unknown>` |

##### `PhaseChaitin::raise_pressure` (`<unknown>`)

|      % | Samples | Caller                                         | Location    |
| -----: | ------: | ---------------------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::compute_initial_block_pressure` | `<unknown>` |

##### `Matcher::int_pressure_limit` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `ValueStack::ValueStack` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |       1 | `GraphBuilder::append_with_bci` | `<unknown>` |

##### `GraphBuilder::append_with_bci` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       1 | `GraphBuilder::arithmetic_op` | `<unknown>` |

##### `TypeInt::eq` (`<unknown>`)

|      % | Samples | Caller      | Location    |
| -----: | ------: | ----------- | ----------- |
| 100.0% |       1 | `Type::cmp` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `PhaseIterGVN::optimize` | `<unknown>` |

##### `storeLNode::emit` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |       1 | `PhaseOutput::shorten_branches` | `<unknown>` |

##### `PhaseOutput::shorten_branches` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       1 | `PhaseOutput::Output` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                 | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 90.0% |   4,381 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 86.6% |   4,218 | `join`                   | `java.util.concurrent.ForkJoinTask`                                    |
| 41.0% |   1,997 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 32.9% |   1,601 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 32.8% |   1,599 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 30.9% |   1,504 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 22.3% |   1,086 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 20.2% |     984 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.1% |     981 | `invoke`                 | `java.util.concurrent.ForkJoinTask`                                    |
| 14.0% |     682 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.0% |     682 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.0% |     680 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 10.1% |     493 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.5% |     462 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.5% |     462 | `call`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68` |
|  7.1% |     347 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  7.1% |     347 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.8% |     332 | `forEach`                | `java.util.HashMap`                                                    |
|  6.7% |     328 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88` |
|  6.7% |     327 | `merge`                  | `java.util.HashMap`                                                    |

#### Categories

##### Ours

|     % | Samples | Function                 | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 90.0% |   4,381 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 41.0% |   1,997 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 32.9% |   1,601 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 32.8% |   1,599 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 30.9% |   1,504 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 22.3% |   1,086 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 20.2% |     984 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 14.0% |     682 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.0% |     682 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.0% |     680 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 10.1% |     493 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.5% |     462 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.5% |     462 | `call`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68` |
|  7.1% |     347 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  7.1% |     347 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.7% |     328 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88` |
|  6.7% |     327 | `lambda$merge$7`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  4.5% |     219 | `lambda$merge$6`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  4.5% |     219 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d0011876a0` |
|  0.8% |      37 | `launchHarnessClass`     | `org.renaissance.core.Launcher`                                        |

##### Standard library

|     % | Samples | Function          | Location                             |
| ----: | ------: | ----------------- | ------------------------------------ |
| 86.6% |   4,218 | `join`            | `java.util.concurrent.ForkJoinTask`  |
| 20.1% |     981 | `invoke`          | `java.util.concurrent.ForkJoinTask`  |
|  6.8% |     332 | `forEach`         | `java.util.HashMap`                  |
|  6.7% |     327 | `merge`           | `java.util.HashMap`                  |
|  4.2% |     204 | `get`             | `java.util.ArrayList`                |
|  3.8% |     187 | `computeIfAbsent` | `java.util.HashMap`                  |
|  3.0% |     145 | `addAll`          | `java.util.ArrayList`                |
|  2.9% |     141 | `doubleValue`     | `java.lang.Double`                   |
|  2.6% |     128 | `add`             | `java.util.ArrayList`                |
|  1.5% |      73 | `<init>`          | `java.util.ArrayList`                |
|  0.7% |      32 | `invoke`          | `java.lang.reflect.Method`           |
|  0.3% |      17 | `loadClass`       | `java.lang.ClassLoader`              |
|  0.3% |      16 | `foreach`         | `scala.collection.immutable.List`    |
|  0.3% |      14 | `<init>`          | `java.util.HashMap`                  |
|  0.2% |       9 | `fork`            | `java.util.concurrent.ForkJoinTask`  |
|  0.2% |       8 | `collect`         | `java.util.stream.ReferencePipeline` |
|  0.1% |       7 | `<clinit>`        | `scala.Predef$`                      |
|  0.1% |       7 | `copy`            | `java.nio.file.Files`                |
|  0.1% |       4 | `toArray`         | `java.util.stream.ReferencePipeline` |
| <0.1% |       2 | `getResources`    | `java.lang.ClassLoader`              |

##### JIT

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
|  1.5% |      73 | `zero_blocks` | `<unknown>` |
| <0.1% |       2 | `vtable stub` | `<unknown>` |

##### Compiler

|    % | Samples | Function                                   | Location    |
| ---: | ------: | ------------------------------------------ | ----------- |
| 1.8% |      86 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 1.7% |      81 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 1.3% |      63 | `Compile::Compile`                         | `<unknown>` |
| 1.3% |      63 | `C2Compiler::compile_method`               | `<unknown>` |
| 0.7% |      35 | `Compile::Code_Gen`                        | `<unknown>` |
| 0.4% |      21 | `Compile::Optimize`                        | `<unknown>` |
| 0.4% |      18 | `Compilation::compile_java_method`         | `<unknown>` |
| 0.4% |      18 | `Compilation::compile_method`              | `<unknown>` |
| 0.4% |      18 | `Compilation::Compilation`                 | `<unknown>` |
| 0.3% |      17 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
| 0.3% |      16 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
| 0.3% |      13 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
| 0.3% |      13 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
| 0.2% |      10 | `Matcher::match`                           | `<unknown>` |
| 0.2% |       8 | `Compilation::emit_lir`                    | `<unknown>` |
| 0.2% |       8 | `Compilation::build_hir`                   | `<unknown>` |
| 0.1% |       7 | `Matcher::match_tree`                      | `<unknown>` |
| 0.1% |       7 | `Matcher::xform`                           | `<unknown>` |
| 0.1% |       6 | `Compile::optimize_loops`                  | `<unknown>` |
| 0.1% |       6 | `GraphBuilder::GraphBuilder`               | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 96.3% |   4,218 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 45.6% |   1,997 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 36.5% |   1,601 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 15.6% |     682 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  7.9% |     347 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee        | Location    |
| ----: | ------: | ------------- | ----------- |
| <0.1% |       1 | `vtable stub` | `<unknown>` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |   1,997 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  75.3% |   1,504 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  24.7% |     493 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee            | Location                                                  |
| ----: | ------: | ----------------- | --------------------------------------------------------- |
| 99.9% |   1,599 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 99.9% |   1,599 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee               | Location                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------- |
| 67.9% |   1,086 | `accumulate`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  5.8% |      92 | `get`                | `java.util.ArrayList`                                     |
|  0.1% |       1 | `DeoptimizationBlob` | `<unknown>`                                               |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 65.4% |     984 | `distance`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.3% |      64 | `get`             | `java.util.ArrayList`                                      |
|  0.5% |       7 | `zero_blocks`     | `<unknown>`                                                |
|  0.2% |       3 | `_new_array_Java` | `<unknown>`                                                |
|  0.1% |       2 | `size`            | `java.util.ArrayList`                                      |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee        | Location           |
| ----: | ------: | ------------- | ------------------ |
| 11.4% |     124 | `doubleValue` | `java.lang.Double` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 1.7% |      17 | `doubleValue`   | `java.lang.Double` |
| 0.2% |       2 | `SafepointBlob` | `<unknown>`        |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 99.7% |     680 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.1% |       1 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.1% |       1 | `put`     | `java.util.HashMap`                                    |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     682 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     682 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 99.9% |     679 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                           | Location              |
| ----: | ------: | -------------------------------- | --------------------- |
| 37.9% |     187 | `computeIfAbsent`                | `java.util.HashMap`   |
| 25.6% |     126 | `add`                            | `java.util.ArrayList` |
|  9.7% |      48 | `get`                            | `java.util.ArrayList` |
|  0.4% |       2 | `counter_overflow Runtime1 stub` | `<unknown>`           |
|  0.2% |       1 | `_new_instance_Java`             | `<unknown>`           |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee      | Location                                               |
| ----: | ------: | ----------- | ------------------------------------------------------ |
| 99.4% |     459 | `invoke`    | `java.util.concurrent.ForkJoinTask`                    |
|  0.4% |       2 | `<init>`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.2% |       1 | `loadClass` | `java.lang.ClassLoader`                                |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |     462 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee    | Location            |
| ----: | ------: | --------- | ------------------- |
| 95.7% |     332 | `forEach` | `java.util.HashMap` |
|  4.0% |      14 | `<init>`  | `java.util.HashMap` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |     347 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 100.0% |     347 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach` (`java.util.HashMap`)

|     % | Samples | Callee   | Location                                                               |
| ----: | ------: | -------- | ---------------------------------------------------------------------- |
| 98.8% |     328 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88`)

|     % | Samples | Callee           | Location                                    |
| ----: | ------: | ---------------- | ------------------------------------------- |
| 99.7% |     327 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge` (`java.util.HashMap`)

|     % | Samples | Callee        | Location                                                               |
| ----: | ------: | ------------- | ---------------------------------------------------------------------- |
| 67.0% |     219 | `apply`       | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d0011876a0` |
| 14.1% |      46 | `zero_blocks` | `<unknown>`                                                            |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee  | Location            |
| -----: | ------: | ------- | ------------------- |
| 100.0% |     327 | `merge` | `java.util.HashMap` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 66.2% |     145 | `addAll` | `java.util.ArrayList` |
| 33.3% |      73 | `<init>` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d0011876a0`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     219 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeIfAbsent` (`java.util.HashMap`)

|    % | Samples | Callee  | Location                                                                              |
| ---: | ------: | ------- | ------------------------------------------------------------------------------------- |
| 2.1% |       4 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000d001186b38` |

##### `add` (`java.util.ArrayList`)

|     % | Samples | Callee | Location              |
| ----: | ------: | ------ | --------------------- |
| 94.5% |     121 | `add`  | `java.util.ArrayList` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 94.2% |      81 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  5.8% |       5 | `CompileQueue::get`                        | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 77.8% |      63 | `C2Compiler::compile_method` | `<unknown>` |

##### `<init>` (`java.util.ArrayList`)

|    % | Samples | Callee        | Location    |
| ---: | ------: | ------------- | ----------- |
| 2.7% |       2 | `zero_blocks` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 55.6% |      35 | `Compile::Code_Gen`      | `<unknown>` |
| 33.3% |      21 | `Compile::Optimize`      | `<unknown>` |
|  1.6% |       1 | `Compile::return_values` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      63 | `Compile::Compile` | `<unknown>` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                      | Location                        |
| ----: | ------: | --------------------------- | ------------------------------- |
| 97.3% |      36 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher` |
|  2.7% |       1 | `createScratchRoot`         | `org.renaissance.core.Launcher` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 48.6% |      17 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 28.6% |      10 | `Matcher::match`                  | `<unknown>` |
| 14.3% |       5 | `PhaseOutput::Output`             | `<unknown>` |
|  2.9% |       1 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  2.9% |       1 | `PhaseOutput::install_code`       | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 47.6% |      10 | `PhaseIdealLoop::optimize`             | `<unknown>` |
| 28.6% |       6 | `Compile::optimize_loops`              | `<unknown>` |
|  9.5% |       2 | `PhaseIterGVN::optimize`               | `<unknown>` |
|  4.8% |       1 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |
|  4.8% |       1 | `ConnectionGraph::do_analysis`         | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 44.4% |       8 | `Compilation::emit_lir`       | `<unknown>` |
| 44.4% |       8 | `Compilation::build_hir`      | `<unknown>` |
| 11.1% |       2 | `Compilation::emit_code_body` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      18 | `Compilation::compile_java_method` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |      18 | `Compilation::compile_method` | `<unknown>` |

##### `loadClass` (`java.lang.ClassLoader`)

|      % | Samples | Callee      | Location                |
| -----: | ------: | ----------- | ----------------------- |
| 100.0% |      17 | `loadClass` | `java.lang.ClassLoader` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 29.4% |       5 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 17.6% |       3 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| 11.8% |       2 | `PhaseChaitin::Split`                      | `<unknown>` |
|  5.9% |       1 | `PhaseIFG::init`                           | `<unknown>` |
|  5.9% |       1 | `PhaseChaitin::Select`                     | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 81.3% |      13 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 12.5% |       2 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 30.8% |       4 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 15.4% |       2 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
|  7.7% |       1 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|  7.7% |       1 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |
|  7.7% |       1 | `PhiNode::pinned`                      | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      13 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|     % | Samples | Callee                 | Location    |
| ----: | ------: | ---------------------- | ----------- |
| 70.0% |       7 | `Matcher::xform`       | `<unknown>` |
| 30.0% |       3 | `Matcher::find_shared` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 62.5% |       5 | `LinearScan::do_linear_scan` | `<unknown>` |
| 37.5% |       3 | `BlockList::iterate_forward` | `<unknown>` |

##### `<clinit>` (`scala.Predef$`)

|     % | Samples | Callee      | Location                |
| ----: | ------: | ----------- | ----------------------- |
| 14.3% |       1 | `loadClass` | `java.lang.ClassLoader` |

##### `Matcher::match_tree` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 42.9% |       3 | `Matcher::Label_Root` | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       7 | `Matcher::match_tree` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 83.3% |       5 | `GraphBuilder::iterate_all_blocks`   | `<unknown>` |
| 16.7% |       1 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |

##### `getResources` (`java.lang.ClassLoader`)

|      % | Samples | Callee         | Location                |
| -----: | ------: | -------------- | ----------------------- |
| 100.0% |       2 | `getResources` | `java.lang.ClassLoader` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4.1% |     200 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.5% |     172 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.7% |     133 | `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.6% |     129 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.5% |     121 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.2% |     108 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.9% |      91 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.8% |      87 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                               |
| 1.7% |      85 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |      85 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68`) |
| 1.7% |      84 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% |      76 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.5% |      75 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.5% |      71 | `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.4% |      68 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.3% |      65 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.3% |      62 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke` (`java.util.concurrent.ForkJoinTask`) ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                              |
| 1.3% |      61 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke` (`java.util.concurrent.ForkJoinTask`) ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                      |
| 1.2% |      59 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.1% |      52 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
