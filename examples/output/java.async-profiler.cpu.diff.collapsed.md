# Sampling profile diff

4,869 samples → 4,711 samples (-158 samples, -3.2%).

| Category         |  Change | Delta |             % |       Samples |
| ---------------- | ------: | ----: | ------------: | ------------: |
| Ours             |   -3.7% |  -108 | 60.3% → 60.1% | 2,937 → 2,829 |
| Native           |   +2.9% |   +31 | 21.9% → 23.3% | 1,068 → 1,099 |
| Standard library |   -6.5% |   -48 | 15.1% → 14.5% |     733 → 685 |
| Compiler         |   -3.7% |    -2 |          1.1% |       54 → 52 |
| JIT              |  -38.7% |   -29 |   1.5% → 1.0% |       75 → 46 |
| Unknown          | removed |    -2 |  <0.1% → 0.0% |         2 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                    | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------- | ---------------------------------------------------------- |
|  +18.8% |   +79 |  8.6% → 10.6% | 420 → 499 | `vectorSum`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +1.2% |   +12 | 19.8% → 20.7% | 962 → 974 | `accumulate`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `addAll`                                    | `java.util.ArrayList`                                      |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `compute`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   +5.2% |    +3 |   1.2% → 1.3% |   58 → 61 | `add`                                       | `java.util.ArrayList`                                      |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `PhaseCCP::transform`                       | `<unknown>`                                                |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `combineResults`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `Node_Backward_Iterator::next`              | `<unknown>`                                                |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `Matcher::find_shared`                      | `<unknown>`                                                |
| +100.0% |    +1 |         <0.1% |     1 → 2 | `lambda$generateData$3`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +100.0% |    +1 |         <0.1% |     1 → 2 | `PhaseChaitin::Split`                       | `<unknown>`                                                |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>`                                                |
| +100.0% |    +1 |         <0.1% |     1 → 2 | `createSubtask`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +50.0% |    +1 |  <0.1% → 0.1% |     2 → 3 | `mach_absolute_time`                        | `<unknown>`                                                |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `combineResults`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `Matcher::Label_Root`                       | `<unknown>`                                                |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `PhaseIdealLoop::Dominators`                | `<unknown>`                                                |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `Matcher::ReduceInst`                       | `<unknown>`                                                |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `ciBytecodeStream::reset_to_bci`            | `<unknown>`                                                |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                            | Location                                                               |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------------------------------------------------- |
|  -20.3% |   -90 |   9.1% → 7.5% | 444 → 354 | `findNearestCentroid`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -8.1% |   -78 | 19.8% → 18.8% | 965 → 887 | `distance`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -24.8% |   -35 |   2.9% → 2.3% | 141 → 106 | `doubleValue`                       | `java.lang.Double`                                                     |
|  -21.7% |   -28 |   2.6% → 2.1% | 129 → 101 | `collectClusters`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -37.0% |   -27 |   1.5% → 1.0% |   73 → 46 | `zero_blocks`                       | `<unknown>`                                                            |
|  -10.1% |   -15 |   3.0% → 2.8% | 148 → 133 | `computeIfAbsent`                   | `java.util.HashMap`                                                    |
|  -66.7% |    -2 |  0.1% → <0.1% |     3 → 1 | `join`                              | `java.util.concurrent.ForkJoinTask`                                    |
|  -50.0% |    -2 |  0.1% → <0.1% |     4 → 2 | `forEach`                           | `java.util.HashMap`                                                    |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `computeDirectly`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -16.7% |    -2 |          0.2% |   12 → 10 | `merge`                             | `java.util.HashMap`                                                    |
|  -50.0% |    -2 |  0.1% → <0.1% |     4 → 2 | `lambda$collectClusters$0`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `vtable stub`                       | `<unknown>`                                                            |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `size`                              | `java.util.ArrayList`                                                  |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `<init>`                            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `merge`                             | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `average`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `Node::needs_anti_dependence_check` | `<unknown>`                                                            |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `apply`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401125b10` |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `accept`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401186d88` |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `PhaseIdealLoop::build_loop_early`  | `<unknown>`                                                            |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                    | Location                                                               |
| ------: | ----: | ------------: | ------------: | ------------------------------------------- | ---------------------------------------------------------------------- |
|   +9.7% |   +66 | 14.0% → 15.9% |     682 → 748 | `computeClusterAverages`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +9.7% |   +66 | 14.0% → 15.9% |     682 → 748 | `computeDirectly`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +8.7% |   +59 | 14.0% → 15.7% |     680 → 739 | `average`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +3.2% |   +51 | 32.8% → 35.0% | 1,599 → 1,650 | `vectorSum`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +3.1% |   +49 | 32.9% → 35.0% | 1,601 → 1,650 | `computeDirectly`                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +4.4% |   +43 | 20.1% → 21.7% |   981 → 1,024 | `invoke`                                    | `java.util.concurrent.ForkJoinTask`                                    |
| +260.0% |   +13 |   0.1% → 0.4% |        5 → 18 | `CompileQueue::get`                         | `<unknown>`                                                            |
|   +7.6% |   +11 |   3.0% → 3.3% |     145 → 156 | `addAll`                                    | `java.util.ArrayList`                                                  |
| +200.0% |    +8 |   0.1% → 0.3% |        4 → 12 | `toArray`                                   | `java.util.stream.ReferencePipeline`                                   |
| +700.0% |    +7 |  <0.1% → 0.2% |         1 → 8 | `boxed`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +7.0% |    +6 |   1.8% → 2.0% |       86 → 92 | `CompileBroker::compiler_thread_loop`       | `<unknown>`                                                            |
| +300.0% |    +6 |  <0.1% → 0.2% |         2 → 8 | `apply`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011258d8` |
|  +12.8% |    +6 |   1.0% → 1.1% |       47 → 53 | `_new_array_Java`                           | `<unknown>`                                                            |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `PhaseCFG::global_code_motion`              | `<unknown>`                                                            |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `PhaseCFG::do_global_code_motion`           | `<unknown>`                                                            |
|  +80.0% |    +4 |   0.1% → 0.2% |         5 → 9 | `GraphBuilder::iterate_all_blocks`          | `<unknown>`                                                            |
| +133.3% |    +4 |          0.1% |         3 → 7 | `CompileBroker::compile_method`             | `<unknown>`                                                            |
| +133.3% |    +4 |          0.1% |         3 → 7 | `CompilationPolicy::event`                  | `<unknown>`                                                            |
|  +60.0% |    +3 |   0.1% → 0.2% |         5 → 8 | `lambda$generateData$5`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +60.0% |    +3 |   0.1% → 0.2% |         5 → 8 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>`                                                            |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                   | Location                                                               |
| -----: | ----: | ------------: | ------------: | ------------------------------------------ | ---------------------------------------------------------------------- |
| -11.5% |  -229 | 41.0% → 37.5% | 1,997 → 1,768 | `computeDirectly`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -11.8% |  -177 | 30.9% → 28.2% | 1,504 → 1,327 | `findNearestCentroid`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.0% |  -177 | 90.0% → 89.2% | 4,381 → 4,204 | `compute`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -3.9% |  -164 | 86.6% → 86.1% | 4,218 → 4,054 | `join`                                     | `java.util.concurrent.ForkJoinTask`                                    |
|  -7.9% |   -78 | 20.2% → 19.2% |     984 → 906 | `distance`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -10.5% |   -52 |  10.1% → 9.4% |     493 → 441 | `collectClusters`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -24.8% |   -35 |   2.9% → 2.3% |     141 → 106 | `doubleValue`                              | `java.lang.Double`                                                     |
|  -9.0% |   -30 |   6.8% → 6.4% |     332 → 302 | `forEach`                                  | `java.util.HashMap`                                                    |
|  -8.6% |   -30 |   7.1% → 6.7% |     347 → 317 | `combineResults`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -8.4% |   -29 |   7.1% → 6.8% |     347 → 318 | `merge`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -8.5% |   -28 |   6.7% → 6.4% |     328 → 300 | `accept`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401186d88` |
|  -8.3% |   -27 |   6.7% → 6.4% |     327 → 300 | `merge`                                    | `java.util.HashMap`                                                    |
|  -8.3% |   -27 |   6.7% → 6.4% |     327 → 300 | `lambda$merge$7`                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -37.0% |   -27 |   1.5% → 1.0% |       73 → 46 | `zero_blocks`                              | `<unknown>`                                                            |
|  -2.1% |   -23 | 22.3% → 22.6% | 1,086 → 1,063 | `accumulate`                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -13.3% |   -17 |   2.6% → 2.4% |     128 → 111 | `add`                                      | `java.util.ArrayList`                                                  |
|  -9.1% |   -17 |   3.8% → 3.6% |     187 → 170 | `computeIfAbsent`                          | `java.util.HashMap`                                                    |
| -11.0% |    -8 |   1.5% → 1.4% |       73 → 65 | `<init>`                                   | `java.util.ArrayList`                                                  |
| -20.0% |    -7 |   0.7% → 0.6% |       35 → 28 | `Compile::Code_Gen`                        | `<unknown>`                                                            |
|  -8.6% |    -7 |   1.7% → 1.6% |       81 → 74 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                                            |
