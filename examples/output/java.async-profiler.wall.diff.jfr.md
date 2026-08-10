# Profile diff

5,140 samples → 4,878 samples (-262 samples, -5.1%).

| Category         |  Change | Delta |             % |       Samples |
| ---------------- | ------: | ----: | ------------: | ------------: |
| Native           |   -2.8% |  -118 | 81.3% → 83.3% | 4,179 → 4,061 |
| Ours             |   +8.2% |   +51 | 12.1% → 13.8% |     620 → 671 |
| Standard library |  -35.7% |   -65 |   3.5% → 2.4% |     182 → 117 |
| Compiler         | +100.0% |    +7 |   0.1% → 0.3% |        7 → 14 |
| JIT              |  -33.3% |    -5 |   0.3% → 0.2% |       15 → 10 |
| Unknown          |  -96.4% |  -132 |   2.7% → 0.1% |       137 → 5 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

| Change | Delta |            % |   Samples | Function                                   | Location                                                   |
| -----: | ----: | -----------: | --------: | ------------------------------------------ | ---------------------------------------------------------- |
| +57.5% |   +77 |  2.6% → 4.3% | 134 → 211 | `distance(Double[], Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +11.1% |   +25 |  4.4% → 5.1% | 225 → 250 | `accumulate(Double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +63.2% |   +12 |  0.4% → 0.6% |   19 → 31 | `collectClusters(int[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +2 | 0.0% → <0.1% |     0 → 2 | `merge(Object, Object, BiFunction)`        | `java.util.HashMap`                                        |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `compute()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `get(int)`                                 | `java.util.ArrayList`                                      |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `add(Object)`                              | `java.util.ArrayList`                                      |
|  +3.0% |    +1 |  0.6% → 0.7% |   33 → 34 | `computeIfAbsent(Object, Function)`        | `java.util.HashMap`                                        |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `lambda$run$0(int, List, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `PhaseIterGVN::transform_old`              | `libjvm.dylib`                                             |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `OopMapValue::write_on`                    | `libjvm.dylib`                                             |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `ProjNode::Opcode`                         | `libjvm.dylib`                                             |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `Node_Backward_Iterator::next`             | `libjvm.dylib`                                             |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `PhaseChaitin::merge_multidefs`            | `libjvm.dylib`                                             |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `MultiNode::is_CFG`                        | `libjvm.dylib`                                             |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `PhaseIdealLoop::build_loop_early`         | `libjvm.dylib`                                             |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `Node::match_edge`                         | `libjvm.dylib`                                             |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `PhaseIterGVN::subsume_node`               | `libjvm.dylib`                                             |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib`                                             |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |  Samples | Function                          | Location                                                   |
| ------: | ----: | -----------: | -------: | --------------------------------- | ---------------------------------------------------------- |
|  -31.6% |   -42 |  2.6% → 1.9% | 133 → 91 | `findNearestCentroid()`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -90.2% |   -37 |  0.8% → 0.1% |   41 → 4 | `doubleValue()`                   | `java.lang.Double`                                         |
|  -18.3% |   -19 |  2.0% → 1.7% | 104 → 85 | `vectorSum()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -33.3% |    -5 |  0.3% → 0.2% |  15 → 10 | `zero_blocks`                     | `<unknown>`                                                |
| removed |    -2 | <0.1% → 0.0% |    2 → 0 | `createSubtask(int, int)`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `lambda$merge$6(List, List)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `combineResults(Object, Object)`  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `add(double[], double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib`                                             |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `MachNode::Opcode`                | `libjvm.dylib`                                             |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `Type::cmp`                       | `libjvm.dylib`                                             |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `PhaseCCP::push_loadp`            | `libjvm.dylib`                                             |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `PhaseChaitin::PhaseChaitin`      | `libjvm.dylib`                                             |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % |   Samples | Function                                    | Location                                                   |
| ------: | ----: | -----------: | --------: | ------------------------------------------- | ---------------------------------------------------------- |
|  +38.2% |   +60 |  3.1% → 4.4% | 157 → 217 | `distance(Double[], Double[])`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +3.6% |   +11 |  6.0% → 6.5% | 307 → 318 | `findNearestCentroid()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +2.7% |   +11 |  8.1% → 8.7% | 414 → 425 | `computeDirectly()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +26.7% |    +4 |  0.3% → 0.4% |   15 → 19 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib`                                             |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `Compilation::compile_method`               | `libjvm.dylib`                                             |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `Compilation::Compilation`                  | `libjvm.dylib`                                             |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `PhaseIterGVN::transform_old`               | `libjvm.dylib`                                             |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `PhaseIterGVN::optimize`                    | `libjvm.dylib`                                             |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `Compilation::compile_java_method`          | `libjvm.dylib`                                             |
|   +5.3% |    +2 |  0.7% → 0.8% |   38 → 40 | `computeIfAbsent(Object, Function)`         | `java.util.HashMap`                                        |
| +100.0% |    +2 | <0.1% → 0.1% |     2 → 4 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib`                                             |
|  +40.0% |    +2 |         0.1% |     5 → 7 | `Compile::Optimize`                         | `libjvm.dylib`                                             |
|  +16.7% |    +2 |  0.2% → 0.3% |   12 → 14 | `Compile::Compile`                          | `libjvm.dylib`                                             |
|  +16.7% |    +2 |  0.2% → 0.3% |   12 → 14 | `C2Compiler::compile_method`                | `libjvm.dylib`                                             |
| +200.0% |    +2 | <0.1% → 0.1% |     1 → 3 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib`                                             |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `ciBytecodeStream::get_method`              | `libjvm.dylib`                                             |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `GraphBuilder::invoke`                      | `libjvm.dylib`                                             |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib`                                             |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib`                                             |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib`                                             |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                              | Location                                                               |
| -----: | ----: | ------------: | ------------: | ------------------------------------- | ---------------------------------------------------------------------- |
|  -4.8% |   -54 | 22.0% → 22.1% | 1,130 → 1,076 | `compute()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| -90.2% |   -37 |   0.8% → 0.1% |        41 → 4 | `doubleValue()`                       | `java.lang.Double`                                                     |
|  -3.3% |   -36 | 21.1% → 21.5% | 1,087 → 1,051 | `join()`                              | `java.util.concurrent.ForkJoinTask`                                    |
|  -8.8% |   -34 |   7.5% → 7.2% |     385 → 351 | `vectorSum()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -8.8% |   -34 |   7.5% → 7.2% |     385 → 351 | `computeDirectly()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -10.4% |   -28 |   5.2% → 4.9% |     268 → 240 | `invoke()`                            | `java.util.concurrent.ForkJoinTask`                                    |
| -10.5% |   -20 |   3.7% → 3.5% |     191 → 171 | `computeClusterAverages()`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -10.5% |   -20 |   3.7% → 3.5% |     191 → 171 | `computeDirectly()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -7.3% |   -20 |   5.3% → 5.2% |     273 → 253 | `CompileQueue::get`                   | `libjvm.dylib`                                                         |
| -46.2% |   -18 |   0.8% → 0.4% |       39 → 21 | `add(Object)`                         | `java.util.ArrayList`                                                  |
|  -9.0% |   -17 |   3.7% → 3.5% |     188 → 171 | `average(List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -5.6% |   -16 |          5.6% |     288 → 272 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib`                                                         |
| -29.4% |   -15 |   1.0% → 0.7% |       51 → 36 | `get(int)`                            | `java.util.ArrayList`                                                  |
| -15.8% |   -12 |   1.5% → 1.3% |       76 → 64 | `merge(Object, Object, BiFunction)`   | `java.util.HashMap`                                                    |
| -13.6% |   -11 |   1.6% → 1.4% |       81 → 70 | `merge(Map, Map)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -13.2% |   -10 |   1.5% → 1.4% |       76 → 66 | `lambda$merge$7(Map, Object, List)`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -13.2% |   -10 |   1.5% → 1.4% |       76 → 66 | `accept(Object, Object)`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801186fd8` |
| -12.8% |   -10 |   1.5% → 1.4% |       78 → 68 | `forEach(BiConsumer)`                 | `java.util.HashMap`                                                    |
| -12.5% |   -10 |   1.6% → 1.4% |       80 → 70 | `combineResults(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -12.5% |   -10 |   1.6% → 1.4% |       80 → 70 | `combineResults(Object, Object)`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
