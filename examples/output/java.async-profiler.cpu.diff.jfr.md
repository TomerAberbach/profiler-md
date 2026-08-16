# Sampling profile diff

Collected 4,802 samples → 4,822 samples (+20 samples, +0.4%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  +4.2% |  +117 | 57.8% → 60.0% | 2,777 → 2,894 |
| Native           | -12.1% |  -153 | 26.3% → 23.0% | 1,262 → 1,109 |
| Standard library |  +7.9% |   +52 | 13.7% → 14.7% |     657 → 709 |
| Compiler         | +17.3% |    +9 |   1.1% → 1.3% |       52 → 61 |
| JIT              |  -9.3% |    -5 |   1.1% → 1.0% |       54 → 49 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                      | Location                                                   |
| ------: | ----: | ------------: | --------: | --------------------------------------------- | ---------------------------------------------------------- |
|  +10.8% |   +97 | 18.8% → 20.7% | 901 → 998 | `accumulate(Double[], double[])`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +10.9% |   +45 |   8.6% → 9.5% | 411 → 456 | `vectorSum()`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +16.5% |   +22 |   2.8% → 3.2% | 133 → 155 | `computeIfAbsent(Object, Function)`           | `java.util.HashMap`                                        |
|  +14.1% |   +14 |   2.1% → 2.3% |  99 → 113 | `doubleValue()`                               | `java.lang.Double`                                         |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `compute()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  +37.5% |    +3 |          0.2% |    8 → 11 | `merge(Object, Object, BiFunction)`           | `java.util.HashMap`                                        |
| +100.0% |    +2 |  <0.1% → 0.1% |     2 → 4 | `mach_absolute_time`                          | `libsystem_kernel.dylib`                                   |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `PhaseChaitin::Split`                         | `libjvm.dylib`                                             |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `combineResults(Object, Object)`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `I2C/C2I adapters(0xba)`                      | `<unknown>`                                                |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `PhaseChaitin::build_ifg_virtual`             | `libjvm.dylib`                                             |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `Node_Backward_Iterator::next`                | `libjvm.dylib`                                             |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `PhaseIdealLoop::build_loop_late`             | `libjvm.dylib`                                             |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `PhaseIFG::effective_degree`                  | `libjvm.dylib`                                             |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `Matcher::match_tree`                         | `libjvm.dylib`                                             |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib`                                             |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `computeDirectly()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `merge(Map, Map)`                             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +0.9% |    +1 |          2.4% | 114 → 115 | `collectClusters(int[])`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `lambda$run$0(int, List, int)`                | `org.renaissance.jdk.concurrent.JavaKMeans`                |

##### Ours

| Change | Delta |             % |   Samples | Function                             | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
| +10.8% |   +97 | 18.8% → 20.7% | 901 → 998 | `accumulate(Double[], double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +10.9% |   +45 |   8.6% → 9.5% | 411 → 456 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +4 |   0.0% → 0.1% |     0 → 4 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|    new |    +2 |  0.0% → <0.1% |     0 → 2 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +0.9% |    +1 |          2.4% | 114 → 115 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +50.0% |    +1 |  <0.1% → 0.1% |     2 → 3 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>(JavaKMeans, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

| Change | Delta |            % |   Samples | Function                            | Location                       |
| -----: | ----: | -----------: | --------: | ----------------------------------- | ------------------------------ |
| +16.5% |   +22 |  2.8% → 3.2% | 133 → 155 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`            |
| +14.1% |   +14 |  2.1% → 2.3% |  99 → 113 | `doubleValue()`                     | `java.lang.Double`             |
| +37.5% |    +3 |         0.2% |    8 → 11 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`            |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `size()`                            | `java.util.ArrayList`          |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `mapToObj(IntFunction)`             | `java.util.stream.IntPipeline` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::build_ifg_virtual`               | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Node_Backward_Iterator::next`                  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_late`               | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIFG::effective_degree`                    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::match_tree`                           | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`   | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LIR_Assembler::emit_code`                      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciObjectFactory::ciObjectFactory`              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIterGVN::remove_globally_dead_node`       | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::post_allocate_copy_removal`      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `DebugInformationRecorder::describe_scope`      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhiNode::Identity`                             | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_tree`               | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ProjNode::is_CFG`                              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIFG::init`                                | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::compute_debug_info_for_scope`      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::assign_reg_num`                    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LIRGenerator::state_for`                       | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |

##### JIT

| Change | Delta |            % | Samples | Function                 | Location    |
| -----: | ----: | -----------: | ------: | ------------------------ | ----------- |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `I2C/C2I adapters(0xba)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `vtable stub`            | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                             | Location                                                               |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|   -5.9% |   -24 |   8.5% → 8.0% | 410 → 386 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -15.1% |    -8 |   1.1% → 0.9% |   53 → 45 | `zero_blocks`                                        | `<unknown>`                                                            |
|   -0.5% |    -5 | 19.3% → 19.1% | 926 → 921 | `distance(Double[], Double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -80.0% |    -4 |  0.1% → <0.1% |     5 → 1 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib`                                                         |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib`                                                         |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801187478` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib`                                                         |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `<init>(JavaKMeans, int, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `Type::singleton`                                    | `libjvm.dylib`                                                         |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `IdealKit::clear`                                    | `libjvm.dylib`                                                         |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `TypeOopPtr::is_loaded`                              | `libjvm.dylib`                                                         |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `Type::cmp`                                          | `libjvm.dylib`                                                         |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `RegMask::is_bound`                                  | `libjvm.dylib`                                                         |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib`                                                         |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `Matcher::xform`                                     | `libjvm.dylib`                                                         |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `PhaseIdealLoop::is_dominator`                       | `libjvm.dylib`                                                         |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `div(double[], int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Ours

|  Change | Delta |             % |   Samples | Function                                   | Location                                                               |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | ---------------------------------------------------------------------- |
|   -5.9% |   -24 |   8.5% → 8.0% | 410 → 386 | `findNearestCentroid()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.5% |    -5 | 19.3% → 19.1% | 926 → 921 | `distance(Double[], Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `accept(Object, Object)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801187478` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `<init>(JavaKMeans, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `div(double[], int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Standard library

|  Change | Delta |            % | Samples | Function              | Location                            |
| ------: | ----: | -----------: | ------: | --------------------- | ----------------------------------- |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `forEach(BiConsumer)` | `java.util.HashMap`                 |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `addAll(Collection)`  | `java.util.ArrayList`               |
|  -25.0% |    -1 |         0.1% |   4 → 3 | `add(Object)`         | `java.util.ArrayList`               |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `fork()`              | `java.util.concurrent.ForkJoinTask` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `valueOf(double)`     | `java.lang.Double`                  |

##### Compiler

|  Change | Delta |            % | Samples | Function                                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- | -------------- |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Type::singleton`                                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IdealKit::clear`                                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeOopPtr::is_loaded`                              | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Type::cmp`                                          | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `RegMask::is_bound`                                  | `libjvm.dylib` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Matcher::xform`                                     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::is_dominator`                       | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CompilationPolicy::create_mdo`                      | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `AdapterHandlerLibrary::get_adapter`                 | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScan::resolve_data_flow`                      | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IntervalWalker::walk_to`                            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhiNode::wait_for_region_igvn`                      | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `loadLNode::oper_input_base`                         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Unique_Node_List::remove`                           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::is_CFG`                                       | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCFG::build_cfg`                                | `libjvm.dylib` |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -15.1% |    -8 | 1.1% → 0.9% | 53 → 45 | `zero_blocks` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                   | Location                                                   |
| ------: | ----: | ------------: | ------------: | ------------------------------------------ | ---------------------------------------------------------- |
|   +9.7% |  +144 | 31.0% → 33.8% | 1,488 → 1,632 | `vectorSum()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +9.7% |  +144 | 31.0% → 33.9% | 1,489 → 1,633 | `computeDirectly()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +2.6% |  +107 | 84.3% → 86.2% | 4,049 → 4,156 | `join()`                                   | `java.util.concurrent.ForkJoinTask`                        |
|  +10.1% |  +100 | 20.6% → 22.6% |   990 → 1,090 | `accumulate(Double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +1.8% |   +74 | 88.0% → 89.2% | 4,226 → 4,300 | `compute()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   +2.0% |   +37 | 38.8% → 39.4% | 1,861 → 1,898 | `computeDirectly()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +5.4% |   +36 | 14.0% → 14.7% |     672 → 708 | `computeClusterAverages()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +5.4% |   +36 | 14.0% → 14.7% |     672 → 708 | `computeDirectly()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +7.5% |   +34 |  9.4% → 10.1% |     453 → 487 | `collectClusters(int[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +4.9% |   +33 | 13.9% → 14.6% |     669 → 702 | `average(List)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +14.2% |   +23 |   3.4% → 3.8% |     162 → 185 | `computeIfAbsent(Object, Function)`        | `java.util.HashMap`                                        |
|  +11.0% |   +22 |   4.2% → 4.6% |     200 → 222 | `get(int)`                                 | `java.util.ArrayList`                                      |
|   +1.8% |   +17 | 20.1% → 20.3% |     964 → 981 | `invoke()`                                 | `java.util.concurrent.ForkJoinTask`                        |
|  +14.1% |   +14 |   2.1% → 2.3% |      99 → 113 | `doubleValue()`                            | `java.lang.Double`                                         |
| +100.0% |    +8 |   0.2% → 0.3% |        8 → 16 | `Compilation::compile_method`              | `libjvm.dylib`                                             |
| +100.0% |    +8 |   0.2% → 0.3% |        8 → 16 | `Compilation::Compilation`                 | `libjvm.dylib`                                             |
| +116.7% |    +7 |   0.1% → 0.3% |        6 → 13 | `Compilation::compile_java_method`         | `libjvm.dylib`                                             |
|   +7.1% |    +5 |   1.5% → 1.6% |       70 → 75 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`                                             |
|   +4.2% |    +5 |   2.5% → 2.6% |     119 → 124 | `add(Object)`                              | `java.util.ArrayList`                                      |
| +200.0% |    +4 |  <0.1% → 0.1% |         2 → 6 | `PhaseChaitin::Split`                      | `libjvm.dylib`                                             |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +9.7% |  +144 | 31.0% → 33.8% | 1,488 → 1,632 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +9.7% |  +144 | 31.0% → 33.9% | 1,489 → 1,633 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +10.1% |  +100 | 20.6% → 22.6% |   990 → 1,090 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +1.8% |   +74 | 88.0% → 89.2% | 4,226 → 4,300 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   +2.0% |   +37 | 38.8% → 39.4% | 1,861 → 1,898 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +5.4% |   +36 | 14.0% → 14.7% |     672 → 708 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +5.4% |   +36 | 14.0% → 14.7% |     672 → 708 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +7.5% |   +34 |  9.4% → 10.1% |     453 → 487 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +4.9% |   +33 | 13.9% → 14.6% |     669 → 702 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +0.4% |    +4 |         19.6% |     939 → 943 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +11.1% |    +4 |   0.7% → 0.8% |       36 → 40 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +11.1% |    +4 |   0.7% → 0.8% |       36 → 40 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +11.4% |    +4 |   0.7% → 0.8% |       35 → 39 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +13.8% |    +4 |   0.6% → 0.7% |       29 → 33 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +9.7% |    +3 |   0.6% → 0.7% |       31 → 34 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +17.6% |    +3 |          0.4% |       17 → 20 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +18.8% |    +3 |   0.3% → 0.4% |       16 → 19 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +18.8% |    +3 |   0.3% → 0.4% |       16 → 19 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000e80111efe0` |
|  +25.0% |    +3 |   0.2% → 0.3% |       12 → 15 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                         | Location                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------- | -------------------------------------- |
|   +2.6% |  +107 | 84.3% → 86.2% | 4,049 → 4,156 | `join()`                                                         | `java.util.concurrent.ForkJoinTask`    |
|  +14.2% |   +23 |   3.4% → 3.8% |     162 → 185 | `computeIfAbsent(Object, Function)`                              | `java.util.HashMap`                    |
|  +11.0% |   +22 |   4.2% → 4.6% |     200 → 222 | `get(int)`                                                       | `java.util.ArrayList`                  |
|   +1.8% |   +17 | 20.1% → 20.3% |     964 → 981 | `invoke()`                                                       | `java.util.concurrent.ForkJoinTask`    |
|  +14.1% |   +14 |   2.1% → 2.3% |      99 → 113 | `doubleValue()`                                                  | `java.lang.Double`                     |
|   +4.2% |    +5 |   2.5% → 2.6% |     119 → 124 | `add(Object)`                                                    | `java.util.ArrayList`                  |
|  +28.6% |    +4 |   0.3% → 0.4% |       14 → 18 | `loadClass(String)`                                              | `java.lang.ClassLoader`                |
|   +9.7% |    +3 |   0.6% → 0.7% |       31 → 34 | `invoke(Object, Object[])`                                       | `java.lang.reflect.Method`             |
|  +18.8% |    +3 |   0.3% → 0.4% |       16 → 19 | `foreach(Function1)`                                             | `scala.collection.immutable.List`      |
|  +33.3% |    +2 |   0.1% → 0.2% |         6 → 8 | `toArray(IntFunction)`                                           | `java.util.stream.ReferencePipeline`   |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `mapToObj(IntFunction)`                                          | `java.util.stream.IntPipeline`         |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `map(Function1)`                                                 | `scala.collection.immutable.Range`     |
|  +16.7% |    +1 |          0.1% |         6 → 7 | `fork()`                                                         | `java.util.concurrent.ForkJoinTask`    |
| +100.0% |    +1 |         <0.1% |         1 → 2 | `<init>()`                                                       | `java.util.logging.SimpleFormatter`    |
| +100.0% |    +1 |         <0.1% |         1 → 2 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `size()`                                                         | `java.util.ArrayList`                  |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `getResourceAsStream(String)`                                    | `java.lang.Class`                      |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `<init>(String)`                                                 | `java.net.URL`                         |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `apply(Seq)`                                                     | `scala.collection.immutable.Map$`      |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `mkString(String)`                                               | `scala.collection.AbstractIterable`    |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
| +100.0% |    +8 |  0.2% → 0.3% |  8 → 16 | `Compilation::compile_method`               | `libjvm.dylib` |
| +100.0% |    +8 |  0.2% → 0.3% |  8 → 16 | `Compilation::Compilation`                  | `libjvm.dylib` |
| +116.7% |    +7 |  0.1% → 0.3% |  6 → 13 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|   +7.1% |    +5 |  1.5% → 1.6% | 70 → 75 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| +133.3% |    +4 |         0.1% |   3 → 7 | `Compilation::emit_lir`                     | `libjvm.dylib` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `Compilation::build_hir`                    | `libjvm.dylib` |
| +100.0% |    +3 |         0.1% |   3 → 6 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `PhaseOutput::Output`                       | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseCFG::global_code_motion`              | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseCFG::do_global_code_motion`           | `libjvm.dylib` |
|   +2.4% |    +2 |  1.7% → 1.8% | 84 → 86 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
|  +50.0% |    +2 |         0.1% |   4 → 6 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
|  +50.0% |    +2 |         0.1% |   4 → 6 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::build_ifg_virtual`           | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `LinearScan::assign_reg_num`                | `libjvm.dylib` |

##### JIT

| Change | Delta |            % | Samples | Function                 | Location    |
| -----: | ----: | -----------: | ------: | ------------------------ | ----------- |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `I2C/C2I adapters(0xba)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `vtable stub`            | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % |   Samples | Function                            | Location                                                               |
| ------: | ----: | -----------: | --------: | ----------------------------------- | ---------------------------------------------------------------------- |
|  -24.1% |   -95 |  8.2% → 6.2% | 394 → 299 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -24.1% |   -95 |  8.2% → 6.2% | 394 → 299 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -24.5% |   -94 |  8.0% → 6.0% | 383 → 289 | `forEach(BiConsumer)`               | `java.util.HashMap`                                                    |
|  -23.6% |   -93 |  8.2% → 6.2% | 394 → 301 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -23.8% |   -90 |  7.9% → 6.0% | 378 → 288 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801187478` |
|  -23.4% |   -88 |  7.8% → 6.0% | 376 → 288 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -23.2% |   -87 |  7.8% → 6.0% | 375 → 288 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                    |
|  -18.9% |   -50 |  5.5% → 4.5% | 265 → 215 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -18.9% |   -50 |  5.5% → 4.5% | 265 → 215 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e8011876c0` |
|  -24.5% |   -46 |  3.9% → 2.9% | 188 → 142 | `addAll(Collection)`                | `java.util.ArrayList`                                                  |
|  -19.0% |   -11 |  1.2% → 1.0% |   58 → 47 | `_new_array_Java`                   | `<unknown>`                                                            |
|  -15.1% |    -8 |  1.1% → 0.9% |   53 → 45 | `zero_blocks`                       | `<unknown>`                                                            |
| removed |    -8 |  0.2% → 0.0% |     8 → 0 | `SafepointBlob`                     | `<unknown>`                                                            |
|  -55.6% |    -5 |  0.2% → 0.1% |     9 → 4 | `Matcher::match`                    | `libjvm.dylib`                                                         |
|  -80.0% |    -4 | 0.1% → <0.1% |     5 → 1 | `PhaseChaitin::build_ifg_physical`  | `libjvm.dylib`                                                         |
|   -5.0% |    -3 |         1.2% |   60 → 57 | `C2Compiler::compile_method`        | `libjvm.dylib`                                                         |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `PhaseChaitin::gather_lrg_masks`    | `libjvm.dylib`                                                         |
|  -60.0% |    -3 | 0.1% → <0.1% |     5 → 2 | `Matcher::match_tree`               | `libjvm.dylib`                                                         |
|  -42.9% |    -3 |         0.1% |     7 → 4 | `Matcher::xform`                    | `libjvm.dylib`                                                         |
|   -3.9% |    -3 |  1.6% → 1.5% |   77 → 74 | `<init>(Collection)`                | `java.util.ArrayList`                                                  |

##### Ours

|  Change | Delta |            % |   Samples | Function                                                               | Location                                                               |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -24.1% |   -95 |  8.2% → 6.2% | 394 → 299 | `merge(Map, Map)`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -24.1% |   -95 |  8.2% → 6.2% | 394 → 299 | `combineResults(Map, Map)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -23.6% |   -93 |  8.2% → 6.2% | 394 → 301 | `combineResults(Object, Object)`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -23.8% |   -90 |  7.9% → 6.0% | 378 → 288 | `accept(Object, Object)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801187478` |
|  -23.4% |   -88 |  7.8% → 6.0% | 376 → 288 | `lambda$merge$7(Map, Object, List)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -18.9% |   -50 |  5.5% → 4.5% | 265 → 215 | `lambda$merge$6(List, List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -18.9% |   -50 |  5.5% → 4.5% | 265 → 215 | `apply(Object, Object)`                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e8011876c0` |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `createSubtask(int, int)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `apply(int)`                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801125b10` |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `lambda$generateData$3(int, int, Random[], int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `<init>(JavaKMeans, List, List, int, int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `<init>(JavaKMeans, int, int)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `div(double[], int)`                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -12.5% |    -1 |  0.2% → 0.1% |     8 → 7 | `extractResource(String, Path)`                                        | `org.renaissance.core.ResourceUtils`                                   |
|  -12.5% |    -1 |  0.2% → 0.1% |     8 → 7 | `extractResources(Iterable, Path)`                                     | `org.renaissance.core.ResourceUtils`                                   |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<clinit>()`                                                           | `scopt.OptionParser`                                                   |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `OptionDef$superArg$1(OptionDefKind, String, OptionDefCallback, Read)` | `scopt.OptionDef`                                                      |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>(OptionDefKind, String, OptionDefCallback, Read)`               | `scopt.OptionDef`                                                      |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `makeDef(OptionDefKind, String, Read)`                                 | `scopt.OptionParser`                                                   |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `handleOccurrence$1(ObjectRef, OptionDef, ListBuffer)`                 | `scopt.ORunner$`                                                       |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                       | Location                                            |
| ------: | ----: | -----------: | --------: | ---------------------------------------------- | --------------------------------------------------- |
|  -24.5% |   -94 |  8.0% → 6.0% | 383 → 289 | `forEach(BiConsumer)`                          | `java.util.HashMap`                                 |
|  -23.2% |   -87 |  7.8% → 6.0% | 375 → 288 | `merge(Object, Object, BiFunction)`            | `java.util.HashMap`                                 |
|  -24.5% |   -46 |  3.9% → 2.9% | 188 → 142 | `addAll(Collection)`                           | `java.util.ArrayList`                               |
|   -3.9% |    -3 |  1.6% → 1.5% |   77 → 74 | `<init>(Collection)`                           | `java.util.ArrayList`                               |
|  -18.2% |    -2 |         0.2% |    11 → 9 | `<init>(Map)`                                  | `java.util.HashMap`                                 |
|  -25.0% |    -2 |  0.2% → 0.1% |     8 → 6 | `copy(InputStream, Path, CopyOption[])`        | `java.nio.file.Files`                               |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<clinit>()`                                   | `java.util.logging.Handler`                         |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `put(Object, Object)`                          | `java.util.HashMap`                                 |
|  -14.3% |    -1 |         0.1% |     7 → 6 | `<clinit>()`                                   | `scala.Predef$`                                     |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `wrapRefArray(Object[])`                       | `scala.runtime.ScalaRunTime$`                       |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `getOffset(Class, String)`                     | `scala.runtime.LazyVals$`                           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `apply(Seq)`                                   | `scala.collection.mutable.ArrayBuffer$`             |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `$minus$eq(Object)`                            | `scala.collection.mutable.AbstractBuffer`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>()`                                     | `scala.collection.mutable.LinkedHashSet`            |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001126c00` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `valueOf(double)`                              | `java.lang.Double`                                  |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `nextDouble()`                                 | `java.util.Random`                                  |

##### Compiler

|  Change | Delta |            % | Samples | Function                                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- | -------------- |
|  -55.6% |    -5 |  0.2% → 0.1% |   9 → 4 | `Matcher::match`                                     | `libjvm.dylib` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
|   -5.0% |    -3 |         1.2% | 60 → 57 | `C2Compiler::compile_method`                         | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `Matcher::match_tree`                                | `libjvm.dylib` |
|  -42.9% |    -3 |         0.1% |   7 → 4 | `Matcher::xform`                                     | `libjvm.dylib` |
|   -8.7% |    -2 |  0.5% → 0.4% | 23 → 21 | `Compile::Optimize`                                  | `libjvm.dylib` |
|   -3.4% |    -2 |         1.2% | 59 → 57 | `Compile::Compile`                                   | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseIdealLoop::split_if_with_blocks_pre`           | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Type::hashcons`                                     | `libjvm.dylib` |
|  -33.3% |    -2 |         0.1% |   6 → 4 | `PhaseIdealLoop::build_loop_late_post_work`          | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
|  -15.4% |    -2 |  0.3% → 0.2% | 13 → 11 | `CompileQueue::get`                                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::split_thru_phi`                     | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::compute_lca_of_uses`                | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Matcher::Label_Root`                                | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCFG::PhaseCFG`                                 | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCCP::analyze`                                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCCP::PhaseCCP`                                 | `libjvm.dylib` |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -15.1% |    -8 | 1.1% → 0.9% | 53 → 45 | `zero_blocks` | `<unknown>` |
