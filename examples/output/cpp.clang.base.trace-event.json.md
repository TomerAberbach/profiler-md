# Trace

Recorded 8,315 events over 9.61s.

| Category    |     % |    Time | Count |
| ----------- | ----: | ------: | ----: |
| Compilation | 92.8% |   8.92s | 7,609 |
| Parsing     |  7.2% | 690.9ms |   706 |

## Longest thread spans

Spans recorded on one thread. A span's time includes time its thread spent waiting.

### Self time

Thread spans with the most time, excluding child spans.

|     % |    Time | Count |    Mean |     Max | Span                                                                                          |
| ----: | ------: | ----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 15.7% |   1.51s |   830 |   1.8ms | 103.8ms | `RunPass`                                                                                     |
| 11.1% |   1.06s |   726 |   1.5ms |  12.2ms | `OptFunction`                                                                                 |
| 10.6% |   1.01s | 1,696 |   0.6ms |  13.3ms | `InstantiateFunction`                                                                         |
| 10.3% | 994.0ms |   799 |   1.2ms |   4.9ms | `PassManager<Function>`                                                                       |
|  6.6% | 637.5ms |     2 | 318.7ms | 444.6ms | `Frontend`                                                                                    |
|  6.3% | 602.9ms |     1 | 602.9ms | 602.9ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  4.3% | 414.1ms |     1 | 414.1ms | 414.1ms | `OptModule`                                                                                   |
|  4.3% | 414.0ms |   162 |   2.6ms |  29.5ms | `ParseFunctionDefinition`                                                                     |
|  3.5% | 336.5ms |   421 |   0.8ms |  12.3ms | `InstantiateClass`                                                                            |
|  3.4% | 330.3ms |     6 |  55.0ms | 117.5ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  3.2% | 311.7ms |   250 |   1.2ms |   8.0ms | `InstCombinePass`                                                                             |
|  2.4% | 230.5ms |   122 |   1.9ms |  21.0ms | `InlinerPass`                                                                                 |
|  2.4% | 226.8ms |   758 |   0.3ms |   0.8ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  1.8% | 173.7ms |   143 |   1.2ms |   5.6ms | `ParseClass`                                                                                  |
|  1.1% | 108.3ms |     1 | 108.3ms | 108.3ms | `PerformPendingInstantiations`                                                                |
|  1.1% | 103.2ms |   206 |   0.5ms |  43.2ms | `ParseDeclarationOrFunctionDefinition`                                                        |
|  1.0% | 100.3ms |     2 |  50.2ms |  71.9ms | `GlobalOptPass`                                                                               |
|  1.0% |  99.7ms |    73 |   1.4ms |   6.7ms | `CodeGen Function`                                                                            |
|  1.0% |  99.6ms |    56 |   1.8ms |  10.7ms | `GVNPass`                                                                                     |
|  0.9% |  85.5ms |     1 |  85.5ms |  85.5ms | `IPSCCPPass`                                                                                  |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Compilation

|     % |    Time | Count |    Mean |     Max | Span                                                                                          |
| ----: | ------: | ----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 15.7% |   1.51s |   830 |   1.8ms | 103.8ms | `RunPass`                                                                                     |
| 11.1% |   1.06s |   726 |   1.5ms |  12.2ms | `OptFunction`                                                                                 |
| 10.6% |   1.01s | 1,696 |   0.6ms |  13.3ms | `InstantiateFunction`                                                                         |
| 10.3% | 994.0ms |   799 |   1.2ms |   4.9ms | `PassManager<Function>`                                                                       |
|  6.6% | 637.5ms |     2 | 318.7ms | 444.6ms | `Frontend`                                                                                    |
|  6.3% | 602.9ms |     1 | 602.9ms | 602.9ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  4.3% | 414.1ms |     1 | 414.1ms | 414.1ms | `OptModule`                                                                                   |
|  3.5% | 336.5ms |   421 |   0.8ms |  12.3ms | `InstantiateClass`                                                                            |
|  3.4% | 330.3ms |     6 |  55.0ms | 117.5ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  3.2% | 311.7ms |   250 |   1.2ms |   8.0ms | `InstCombinePass`                                                                             |
|  2.4% | 230.5ms |   122 |   1.9ms |  21.0ms | `InlinerPass`                                                                                 |
|  2.4% | 226.8ms |   758 |   0.3ms |   0.8ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  1.1% | 108.3ms |     1 | 108.3ms | 108.3ms | `PerformPendingInstantiations`                                                                |
|  1.0% | 100.3ms |     2 |  50.2ms |  71.9ms | `GlobalOptPass`                                                                               |
|  1.0% |  99.7ms |    73 |   1.4ms |   6.7ms | `CodeGen Function`                                                                            |
|  1.0% |  99.6ms |    56 |   1.8ms |  10.7ms | `GVNPass`                                                                                     |
|  0.9% |  85.5ms |     1 |  85.5ms |  85.5ms | `IPSCCPPass`                                                                                  |
|  0.7% |  66.0ms |    42 |   1.6ms |  16.6ms | `DSEPass`                                                                                     |
|  0.6% |  59.3ms |    48 |   1.2ms |   4.5ms | `MemorySSAAnalysis`                                                                           |
|  0.6% |  53.1ms |     1 |  53.1ms |  53.1ms | `AlwaysInlinerPass`                                                                           |

##### Parsing

|    % |    Time | Count |  Mean |    Max | Span                                   |
| ---: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 4.3% | 414.0ms |   162 | 2.6ms | 29.5ms | `ParseFunctionDefinition`              |
| 1.8% | 173.7ms |   143 | 1.2ms |  5.6ms | `ParseClass`                           |
| 1.1% | 103.2ms |   206 | 0.5ms | 43.2ms | `ParseDeclarationOrFunctionDefinition` |

#### Parents

Parent spans with the largest contribution to each span's self time.

##### `RunPass`

|      % |  Time | Count |  Mean |     Max | Parent        |
| -----: | ----: | ----: | ----: | ------: | ------------- |
| 100.0% | 1.51s |   830 | 1.8ms | 103.8ms | `OptFunction` |

##### `OptFunction`

|      % |  Time | Count |  Mean |    Max | Parent      |
| -----: | ----: | ----: | ----: | -----: | ----------- |
| 100.0% | 1.06s |   726 | 1.5ms | 12.2ms | `OptModule` |

##### `InstantiateFunction`

|     % |    Time | Count |  Mean |    Max | Parent                         |
| ----: | ------: | ----: | ----: | -----: | ------------------------------ |
| 65.4% | 666.9ms | 1,233 | 0.5ms | 11.8ms | `InstantiateFunction`          |
| 32.9% | 335.2ms |   408 | 0.8ms | 13.3ms | `PerformPendingInstantiations` |
|  0.8% |   7.8ms |     7 | 1.1ms |  2.6ms | `ParseClass`                   |
|  0.7% |   6.8ms |    43 | 0.2ms |  0.6ms | `InstantiateClass`             |
|  0.3% |   2.6ms |     5 | 0.5ms |  0.8ms | `ParseFunctionDefinition`      |

##### `PassManager<Function>`

|     % |    Time | Count |  Mean |    Max | Parent                        |
| ----: | ------: | ----: | ----: | -----: | ----------------------------- |
| 76.0% | 755.9ms |   593 | 1.3ms |  4.9ms | `CGSCCToFunctionPassAdaptor`  |
| 23.9% | 238.1ms |   204 | 1.2ms |  3.1ms | `ModuleToFunctionPassAdaptor` |
| <0.1% |  15.0µs |     2 | 7.5µs | 13.0µs | `FunctionToLoopPassAdaptor`   |

##### `Frontend`

|      % |    Time | Count |    Mean |     Max | Parent            |
| -----: | ------: | ----: | ------: | ------: | ----------------- |
| 100.0% | 637.5ms |     2 | 318.7ms | 444.6ms | `ExecuteCompiler` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |    Time | Count |    Mean |     Max | Parent                     |
| -----: | ------: | ----: | ------: | ------: | -------------------------- |
| 100.0% | 602.9ms |     1 | 602.9ms | 602.9ms | `ModuleInlinerWrapperPass` |

##### `OptModule`

|      % |    Time | Count |    Mean |     Max | Parent          |
| -----: | ------: | ----: | ------: | ------: | --------------- |
| 100.0% | 414.1ms |     1 | 414.1ms | 414.1ms | `CodeGenPasses` |

##### `ParseFunctionDefinition`

|     % |    Time | Count |  Mean |    Max | Parent                                 |
| ----: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 93.1% | 385.3ms |   132 | 2.9ms | 29.5ms | `ParseDeclarationOrFunctionDefinition` |
|  6.9% |  28.7ms |    30 | 1.0ms |  2.7ms | `Frontend`                             |

##### `InstantiateClass`

|     % |    Time | Count |  Mean |    Max | Parent                    |
| ----: | ------: | ----: | ----: | -----: | ------------------------- |
| 48.7% | 164.0ms |   195 | 0.8ms |  5.1ms | `InstantiateClass`        |
| 35.6% | 119.9ms |   148 | 0.8ms | 12.3ms | `InstantiateFunction`     |
|  8.1% |  27.1ms |    40 | 0.7ms |  1.2ms | `ParseClass`              |
|  7.1% |  24.0ms |    35 | 0.7ms |  1.9ms | `ParseFunctionDefinition` |
|  0.2% |   0.8ms |     2 | 0.4ms |  0.5ms | `Frontend`                |

##### `ModuleToFunctionPassAdaptor`

|     % |    Time | Count |   Mean |     Max | Parent                     |
| ----: | ------: | ----: | -----: | ------: | -------------------------- |
| 96.8% | 319.6ms |     4 | 79.9ms | 117.5ms | `Optimizer`                |
|  3.2% |  10.6ms |     2 |  5.3ms |   7.2ms | `ModuleInlinerWrapperPass` |

##### `InstCombinePass`

|      % |    Time | Count |  Mean |   Max | Parent                  |
| -----: | ------: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 311.7ms |   250 | 1.2ms | 8.0ms | `PassManager<Function>` |

##### `InlinerPass`

|      % |    Time | Count |  Mean |    Max | Parent                                                                                        |
| -----: | ------: | ----: | ----: | -----: | --------------------------------------------------------------------------------------------- |
| 100.0% | 230.5ms |   122 | 1.9ms | 21.0ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|      % |    Time | Count |  Mean |   Max | Parent                  |
| -----: | ------: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 226.8ms |   758 | 0.3ms | 0.8ms | `DevirtSCCRepeatedPass` |

##### `ParseClass`

|     % |    Time | Count |  Mean |   Max | Parent                                 |
| ----: | ------: | ----: | ----: | ----: | -------------------------------------- |
| 68.1% | 118.2ms |    92 | 1.3ms | 5.6ms | `Frontend`                             |
| 31.9% |  55.5ms |    51 | 1.1ms | 4.4ms | `ParseDeclarationOrFunctionDefinition` |

##### `PerformPendingInstantiations`

|      % |    Time | Count |    Mean |     Max | Parent     |
| -----: | ------: | ----: | ------: | ------: | ---------- |
| 100.0% | 108.3ms |     1 | 108.3ms | 108.3ms | `Frontend` |

##### `ParseDeclarationOrFunctionDefinition`

|     % |   Time | Count |  Mean |    Max | Parent                                 |
| ----: | -----: | ----: | ----: | -----: | -------------------------------------- |
| 94.6% | 97.6ms |   203 | 0.5ms | 43.2ms | `Frontend`                             |
|  5.4% |  5.6ms |     3 | 1.9ms |  3.3ms | `ParseDeclarationOrFunctionDefinition` |

##### `GlobalOptPass`

|      % |    Time | Count |   Mean |    Max | Parent      |
| -----: | ------: | ----: | -----: | -----: | ----------- |
| 100.0% | 100.3ms |     2 | 50.2ms | 71.9ms | `Optimizer` |

##### `CodeGen Function`

|      % |   Time | Count |  Mean |   Max | Parent     |
| -----: | -----: | ----: | ----: | ----: | ---------- |
| 100.0% | 99.7ms |    73 | 1.4ms | 6.7ms | `Frontend` |

##### `GVNPass`

|      % |   Time | Count |  Mean |    Max | Parent                  |
| -----: | -----: | ----: | ----: | -----: | ----------------------- |
| 100.0% | 99.6ms |    56 | 1.8ms | 10.7ms | `PassManager<Function>` |

##### `IPSCCPPass`

|      % |   Time | Count |   Mean |    Max | Parent      |
| -----: | -----: | ----: | -----: | -----: | ----------- |
| 100.0% | 85.5ms |     1 | 85.5ms | 85.5ms | `Optimizer` |

##### `DSEPass`

|      % |   Time | Count |  Mean |    Max | Parent                  |
| -----: | -----: | ----: | ----: | -----: | ----------------------- |
| 100.0% | 66.0ms |    42 | 1.6ms | 16.6ms | `PassManager<Function>` |

##### `MemorySSAAnalysis`

|     % |   Time | Count |  Mean |   Max | Parent                      |
| ----: | -----: | ----: | ----: | ----: | --------------------------- |
| 39.7% | 23.6ms |    21 | 1.1ms | 4.5ms | `EarlyCSEPass`              |
| 33.4% | 19.8ms |    18 | 1.1ms | 4.0ms | `MemCpyOptPass`             |
| 26.9% | 15.9ms |     9 | 1.8ms | 4.0ms | `FunctionToLoopPassAdaptor` |

##### `AlwaysInlinerPass`

|      % |   Time | Count |   Mean |    Max | Parent      |
| -----: | -----: | ----: | -----: | -----: | ----------- |
| 100.0% | 53.1ms |     1 | 53.1ms | 53.1ms | `Optimizer` |

### Total time

Thread spans with the most time, including child spans.

|      % |    Time | Count |    Mean |     Max | Span                                                                                          |
| -----: | ------: | ----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |   9.61s |     1 |   9.61s |   9.61s | `ExecuteCompiler`                                                                             |
|  69.7% |   6.70s |     1 |   6.70s |   6.70s | `Backend`                                                                                     |
|  38.5% |   3.70s |     1 |   3.70s |   3.70s | `Optimizer`                                                                                   |
|  31.2% |   2.99s |     1 |   2.99s |   2.99s | `CodeGenPasses`                                                                               |
|  31.1% |   2.99s |     1 |   2.99s |   2.99s | `OptModule`                                                                                   |
|  30.1% |   2.89s |     2 |   1.44s |   2.69s | `Frontend`                                                                                    |
|  26.8% |   2.58s |   726 |   3.6ms | 243.1ms | `OptFunction`                                                                                 |
|  26.4% |   2.53s |     1 |   2.53s |   2.53s | `ModuleInlinerWrapperPass`                                                                    |
|  26.0% |   2.49s |     1 |   2.49s |   2.49s | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  19.6% |   1.88s |   759 |   2.5ms | 138.0ms | `DevirtSCCRepeatedPass`                                                                       |
|  19.6% |   1.88s |   758 |   2.5ms | 137.9ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  19.3% |   1.85s |   799 |   2.3ms | 113.2ms | `PassManager<Function>`                                                                       |
|  15.7% |   1.51s |   830 |   1.8ms | 103.8ms | `RunPass`                                                                                     |
|  14.7% |   1.40s |   594 |   2.4ms | 114.3ms | `CGSCCToFunctionPassAdaptor`                                                                  |
|  13.5% |   1.30s |     1 |   1.30s |   1.30s | `PerformPendingInstantiations`                                                                |
|  12.8% |   1.23s | 1,696 |   2.7ms |  34.0ms | `InstantiateFunction`                                                                         |
|   8.1% | 781.7ms |     6 | 130.3ms | 515.2ms | `ModuleToFunctionPassAdaptor`                                                                 |
|   7.0% | 672.3ms |   206 |   3.3ms |  48.1ms | `ParseDeclarationOrFunctionDefinition`                                                        |
|   4.9% | 470.6ms |   162 |   2.9ms |  29.5ms | `ParseFunctionDefinition`                                                                     |
|   3.6% | 344.0ms |   421 |   1.9ms |  12.3ms | `InstantiateClass`                                                                            |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Compilation

|      % |    Time | Count |    Mean |     Max | Span                                                                                          |
| -----: | ------: | ----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |   9.61s |     1 |   9.61s |   9.61s | `ExecuteCompiler`                                                                             |
|  69.7% |   6.70s |     1 |   6.70s |   6.70s | `Backend`                                                                                     |
|  38.5% |   3.70s |     1 |   3.70s |   3.70s | `Optimizer`                                                                                   |
|  31.2% |   2.99s |     1 |   2.99s |   2.99s | `CodeGenPasses`                                                                               |
|  31.1% |   2.99s |     1 |   2.99s |   2.99s | `OptModule`                                                                                   |
|  30.1% |   2.89s |     2 |   1.44s |   2.69s | `Frontend`                                                                                    |
|  26.8% |   2.58s |   726 |   3.6ms | 243.1ms | `OptFunction`                                                                                 |
|  26.4% |   2.53s |     1 |   2.53s |   2.53s | `ModuleInlinerWrapperPass`                                                                    |
|  26.0% |   2.49s |     1 |   2.49s |   2.49s | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  19.6% |   1.88s |   759 |   2.5ms | 138.0ms | `DevirtSCCRepeatedPass`                                                                       |
|  19.6% |   1.88s |   758 |   2.5ms | 137.9ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  19.3% |   1.85s |   799 |   2.3ms | 113.2ms | `PassManager<Function>`                                                                       |
|  15.7% |   1.51s |   830 |   1.8ms | 103.8ms | `RunPass`                                                                                     |
|  14.7% |   1.40s |   594 |   2.4ms | 114.3ms | `CGSCCToFunctionPassAdaptor`                                                                  |
|  13.5% |   1.30s |     1 |   1.30s |   1.30s | `PerformPendingInstantiations`                                                                |
|  12.8% |   1.23s | 1,696 |   2.7ms |  34.0ms | `InstantiateFunction`                                                                         |
|   8.1% | 781.7ms |     6 | 130.3ms | 515.2ms | `ModuleToFunctionPassAdaptor`                                                                 |
|   3.6% | 344.0ms |   421 |   1.9ms |  12.3ms | `InstantiateClass`                                                                            |
|   3.3% | 316.5ms |   250 |   1.3ms |   9.0ms | `InstCombinePass`                                                                             |
|   2.5% | 238.3ms |   122 |   2.0ms |  21.0ms | `InlinerPass`                                                                                 |

##### Parsing

|    % |    Time | Count |  Mean |    Max | Span                                   |
| ---: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 7.0% | 672.3ms |   206 | 3.3ms | 48.1ms | `ParseDeclarationOrFunctionDefinition` |
| 4.9% | 470.6ms |   162 | 2.9ms | 29.5ms | `ParseFunctionDefinition`              |
| 2.8% | 273.1ms |   143 | 1.9ms | 11.3ms | `ParseClass`                           |

#### Attribute values

Attribute values with the largest contribution to each span's total time.

##### `OptModule`

|      % |  Time | Count |  Mean |   Max | Attribute | Value                          |
| -----: | ----: | ----: | ----: | ----: | --------- | ------------------------------ |
| 100.0% | 2.99s |     1 | 2.99s | 2.99s | `detail`  | `/src/fmt/test/format-test.cc` |

##### `OptFunction`

|     % |    Time | Count |   Mean |     Max | Attribute | Value                                                |
| ----: | ------: | ----: | -----: | ------: | --------- | ---------------------------------------------------- |
| 11.5% | 296.5ms |     5 | 59.3ms | 243.1ms | `detail`  | `_GLOBAL__sub_I_format_test.cc`                      |
|  5.7% | 147.9ms |     5 | 29.6ms | 117.2ms | `detail`  | `_ZN26format_test_precision_Test8TestBodyEv`         |
|  5.3% | 137.7ms |     5 | 27.5ms | 109.9ms | `detail`  | `_ZN34format_test_runtime_precision_Test8TestBodyEv` |
|  3.6% |  92.4ms |     5 | 18.5ms |  72.0ms | `detail`  | `_ZN30format_test_runtime_width_Test8TestBodyEv`     |
|  3.0% |  78.5ms |     5 | 15.7ms |  60.4ms | `detail`  | `_ZN26format_test_hash_flag_Test8TestBodyEv`         |

##### `ModuleInlinerWrapperPass`

|      % |  Time | Count |  Mean |   Max | Attribute | Value      |
| -----: | ----: | ----: | ----: | ----: | --------- | ---------- |
| 100.0% | 2.53s |     1 | 2.53s | 2.53s | `detail`  | `[module]` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |  Time | Count |  Mean |   Max | Attribute | Value      |
| -----: | ----: | ----: | ----: | ----: | --------- | ---------- |
| 100.0% | 2.49s |     1 | 2.49s | 2.49s | `detail`  | `[module]` |

##### `DevirtSCCRepeatedPass`

|    % |    Time | Count |    Mean |     Max | Attribute | Value                                                  |
| ---: | ------: | ----: | ------: | ------: | --------- | ------------------------------------------------------ |
| 7.3% | 138.0ms |     1 | 138.0ms | 138.0ms | `detail`  | `(_GLOBAL__sub_I_format_test.cc)`                      |
| 4.2% |  79.9ms |     1 |  79.9ms |  79.9ms | `detail`  | `(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 3.9% |  73.9ms |     1 |  73.9ms |  73.9ms | `detail`  | `(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 3.0% |  57.4ms |     1 |  57.4ms |  57.4ms | `detail`  | `(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 2.3% |  44.2ms |     1 |  44.2ms |  44.2ms | `detail`  | `(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|    % |    Time | Count |    Mean |     Max | Attribute | Value                                                  |
| ---: | ------: | ----: | ------: | ------: | --------- | ------------------------------------------------------ |
| 7.3% | 137.9ms |     1 | 137.9ms | 137.9ms | `detail`  | `(_GLOBAL__sub_I_format_test.cc)`                      |
| 4.2% |  79.6ms |     1 |  79.6ms |  79.6ms | `detail`  | `(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 3.9% |  73.6ms |     1 |  73.6ms |  73.6ms | `detail`  | `(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 3.0% |  57.1ms |     1 |  57.1ms |  57.1ms | `detail`  | `(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 2.3% |  44.0ms |     1 |  44.0ms |  44.0ms | `detail`  | `(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

##### `PassManager<Function>`

|    % |    Time | Count |   Mean |     Max | Attribute | Value                                                |
| ---: | ------: | ----: | -----: | ------: | --------- | ---------------------------------------------------- |
| 8.0% | 148.7ms |     3 | 49.6ms | 113.2ms | `detail`  | `_GLOBAL__sub_I_format_test.cc`                      |
| 5.4% | 100.3ms |     5 | 20.1ms |  64.0ms | `detail`  | `_ZN26format_test_precision_Test8TestBodyEv`         |
| 4.9% |  91.4ms |     4 | 22.9ms |  60.9ms | `detail`  | `_ZN34format_test_runtime_precision_Test8TestBodyEv` |
| 3.4% |  62.7ms |     4 | 15.7ms |  46.9ms | `detail`  | `_ZN30format_test_runtime_width_Test8TestBodyEv`     |
| 2.7% |  49.5ms |     4 | 12.4ms |  35.2ms | `detail`  | `_ZN26format_test_hash_flag_Test8TestBodyEv`         |

##### `RunPass`

|     % |    Time | Count |  Mean |     Max | Attribute | Value                           |
| ----: | ------: | ----: | ----: | ------: | --------- | ------------------------------- |
| 51.1% | 774.1ms |   256 | 3.0ms | 103.8ms | `detail`  | `AArch64 Instruction Selection` |
|  6.4% |  96.4ms |    50 | 1.9ms |  14.8ms | `detail`  | `CodeGen Prepare`               |
|  3.3% |  49.7ms |    27 | 1.8ms |   9.8ms | `detail`  | `Register Coalescer`            |
|  3.3% |  49.5ms |    31 | 1.6ms |  13.7ms | `detail`  | `Greedy Register Allocator`     |
|  2.9% |  43.4ms |    28 | 1.5ms |  13.9ms | `detail`  | `Machine Instruction Scheduler` |

##### `CGSCCToFunctionPassAdaptor`

|    % |    Time | Count |    Mean |     Max | Attribute | Value                                                  |
| ---: | ------: | ----: | ------: | ------: | --------- | ------------------------------------------------------ |
| 8.1% | 114.3ms |     1 | 114.3ms | 114.3ms | `detail`  | `(_GLOBAL__sub_I_format_test.cc)`                      |
| 4.6% |  64.7ms |     1 |  64.7ms |  64.7ms | `detail`  | `(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 4.3% |  61.1ms |     1 |  61.1ms |  61.1ms | `detail`  | `(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 3.3% |  47.1ms |     1 |  47.1ms |  47.1ms | `detail`  | `(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 2.5% |  35.4ms |     1 |  35.4ms |  35.4ms | `detail`  | `(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

##### `InstantiateFunction`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                                                                                                                             |
| ---: | -----: | ----: | -----: | -----: | --------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 0.7% | 34.0ms |     1 | 34.0ms | 34.0ms | `detail`  | `fmt::nested_formatter<double>::write_padded<fmt::context, (lambda at /src/fmt/test/format-test.cc:1894:30)>`                     |
| 0.7% | 33.8ms |     1 | 33.8ms | 33.8ms | `detail`  | `fmt::formatter<point>::format(point, format_context &)::(anonymous class)::operator()<fmt::basic_appender<char>>`                |
| 0.7% | 31.3ms |     1 | 31.3ms | 31.3ms | `detail`  | `fmt::format_to<fmt::basic_appender<char> &, fmt::nested_view<double, char>, fmt::nested_view<double, char>, 0>`                  |
| 0.6% | 27.7ms |     1 | 27.7ms | 27.7ms | `detail`  | `fmt::detail::value<fmt::context>::value<fmt::nested_view<double, char>, 0>`                                                      |
| 0.6% | 27.4ms |     1 | 27.4ms | 27.4ms | `detail`  | `fmt::detail::value<fmt::context>::format_custom<fmt::nested_view<double, char>, fmt::formatter<fmt::nested_view<double, char>>>` |

##### `ModuleToFunctionPassAdaptor`

|      % |    Time | Count |    Mean |     Max | Attribute | Value      |
| -----: | ------: | ----: | ------: | ------: | --------- | ---------- |
| 100.0% | 781.7ms |     6 | 130.3ms | 515.2ms | `detail`  | `[module]` |

##### `ParseDeclarationOrFunctionDefinition`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                                                                                     |
| ---: | -----: | ----: | -----: | -----: | --------- | ----------------------------------------------------------------------------------------- |
| 7.1% | 48.1ms |     1 | 48.1ms | 48.1ms | `detail`  | `/usr/lib/gcc/aarch64-linux-gnu/14/../../../../include/c++/14/cmath:83:1`                 |
| 4.3% | 29.5ms |     1 | 29.5ms | 29.5ms | `detail`  | `/src/fmt/test/format-test.cc:1108:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>` |
| 4.2% | 28.2ms |     1 | 28.2ms | 28.2ms | `detail`  | `/src/fmt/test/format-test.cc:950:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>`  |
| 3.6% | 24.2ms |     1 | 24.2ms | 24.2ms | `detail`  | `/usr/include/math.h:34:1 <Spelling=/usr/include/aarch64-linux-gnu/sys/cdefs.h:140:24>`   |
| 3.1% | 21.2ms |     1 | 21.2ms | 21.2ms | `detail`  | `/src/fmt/test/format-test.cc:891:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>`  |

##### `ParseFunctionDefinition`

|     % |    Time | Count |  Mean |    Max | Attribute | Value           |
| ----: | ------: | ----: | ----: | -----: | --------- | --------------- |
| 86.7% | 408.1ms |   110 | 3.7ms | 29.5ms | `detail`  | `TestBody`      |
|  1.0% |   4.5ms |     2 | 2.3ms |  2.4ms | `detail`  | `PrintTo`       |
|  0.9% |   4.3ms |     1 | 4.3ms |  4.3ms | `detail`  | `format_dragon` |
|  0.9% |   4.1ms |     1 | 4.1ms |  4.1ms | `detail`  | `format`        |
|  0.8% |   3.8ms |     2 | 1.9ms |  1.9ms | `detail`  | `operator""s`   |

##### `InstantiateClass`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                                                                                                                              |
| ---: | -----: | ----: | -----: | -----: | --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1.5% | 12.3ms |     1 | 12.3ms | 12.3ms | `detail`  | `std::is_array<const char[6]>`                                                                                                     |
| 1.1% |  8.7ms |     1 |  8.7ms |  8.7ms | `detail`  | `testing::internal::MatcherBase<std::basic_string<char>>::ValuePolicy<const testing::MatcherInterface<std::basic_string<char>> *>` |
| 1.1% |  8.7ms |     1 |  8.7ms |  8.7ms | `detail`  | `testing::internal::MockSpec<int *(unsigned long)>`                                                                                |
| 1.1% |  8.6ms |     1 |  8.6ms |  8.6ms | `detail`  | `testing::internal::SharedPayload<std::unique_ptr<const testing::MatcherInterface<std::basic_string<char>>>>`                      |
| 1.0% |  8.5ms |     1 |  8.5ms |  8.5ms | `detail`  | `std::unique_ptr<testing::internal::ActionResultHolder<int *>>`                                                                    |

##### `InstCombinePass`

|     % |   Time | Count |  Mean |   Max | Attribute | Value                                                |
| ----: | -----: | ----: | ----: | ----: | --------- | ---------------------------------------------------- |
| 16.2% | 51.2ms |     7 | 7.3ms | 9.0ms | `detail`  | `_GLOBAL__sub_I_format_test.cc`                      |
|  9.1% | 28.8ms |     8 | 3.6ms | 4.4ms | `detail`  | `_ZN26format_test_precision_Test8TestBodyEv`         |
|  8.1% | 25.5ms |     8 | 3.2ms | 3.9ms | `detail`  | `_ZN34format_test_runtime_precision_Test8TestBodyEv` |
|  5.9% | 18.6ms |     8 | 2.3ms | 3.0ms | `detail`  | `_ZN30format_test_runtime_width_Test8TestBodyEv`     |
|  5.3% | 16.8ms |     8 | 2.1ms | 2.5ms | `detail`  | `_ZN26format_test_hash_flag_Test8TestBodyEv`         |

##### `ParseClass`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                                     |
| ---: | -----: | ----: | -----: | -----: | --------- | ----------------------------------------- |
| 5.5% | 15.0ms |     5 |  3.0ms |  8.4ms | `detail`  | `fmt::formatter`                          |
| 4.1% | 11.3ms |     1 | 11.3ms | 11.3ms | `detail`  | `testing::internal::TypedTestSuitePState` |
| 4.0% | 10.8ms |     1 | 10.8ms | 10.8ms | `detail`  | `testing::internal::FunctionMocker`       |
| 2.9% |  7.9ms |     1 |  7.9ms |  7.9ms | `detail`  | `testing::Message`                        |
| 2.8% |  7.6ms |     1 |  7.6ms |  7.6ms | `detail`  | `std::thread`                             |

##### `InlinerPass`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                                                  |
| ---: | -----: | ----: | -----: | -----: | --------- | ------------------------------------------------------ |
| 8.8% | 21.0ms |     1 | 21.0ms | 21.0ms | `detail`  | `(_GLOBAL__sub_I_format_test.cc)`                      |
| 5.7% | 13.5ms |     1 | 13.5ms | 13.5ms | `detail`  | `(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 4.8% | 11.4ms |     1 | 11.4ms | 11.4ms | `detail`  | `(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 3.9% |  9.2ms |     1 |  9.2ms |  9.2ms | `detail`  | `(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 3.3% |  7.9ms |     1 |  7.9ms |  7.9ms | `detail`  | `(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

#### Parents

Parent spans with the largest contribution to each span's total time.

##### `Backend`

|      % |  Time | Count |  Mean |   Max | Parent            |
| -----: | ----: | ----: | ----: | ----: | ----------------- |
| 100.0% | 6.70s |     1 | 6.70s | 6.70s | `ExecuteCompiler` |

##### `Optimizer`

|      % |  Time | Count |  Mean |   Max | Parent    |
| -----: | ----: | ----: | ----: | ----: | --------- |
| 100.0% | 3.70s |     1 | 3.70s | 3.70s | `Backend` |

##### `CodeGenPasses`

|      % |  Time | Count |  Mean |   Max | Parent    |
| -----: | ----: | ----: | ----: | ----: | --------- |
| 100.0% | 2.99s |     1 | 2.99s | 2.99s | `Backend` |

##### `OptModule`

|      % |  Time | Count |  Mean |   Max | Parent          |
| -----: | ----: | ----: | ----: | ----: | --------------- |
| 100.0% | 2.99s |     1 | 2.99s | 2.99s | `CodeGenPasses` |

##### `Frontend`

|      % |  Time | Count |  Mean |   Max | Parent            |
| -----: | ----: | ----: | ----: | ----: | ----------------- |
| 100.0% | 2.89s |     2 | 1.44s | 2.69s | `ExecuteCompiler` |

##### `OptFunction`

|      % |  Time | Count |  Mean |     Max | Parent      |
| -----: | ----: | ----: | ----: | ------: | ----------- |
| 100.0% | 2.58s |   726 | 3.6ms | 243.1ms | `OptModule` |

##### `ModuleInlinerWrapperPass`

|      % |  Time | Count |  Mean |   Max | Parent      |
| -----: | ----: | ----: | ----: | ----: | ----------- |
| 100.0% | 2.53s |     1 | 2.53s | 2.53s | `Optimizer` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |  Time | Count |  Mean |   Max | Parent                     |
| -----: | ----: | ----: | ----: | ----: | -------------------------- |
| 100.0% | 2.49s |     1 | 2.49s | 2.49s | `ModuleInlinerWrapperPass` |

##### `DevirtSCCRepeatedPass`

|      % |  Time | Count |  Mean |     Max | Parent                              |
| -----: | ----: | ----: | ----: | ------: | ----------------------------------- |
| 100.0% | 1.88s |   759 | 2.5ms | 138.0ms | `ModuleToPostOrderCGSCCPassAdaptor` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|      % |  Time | Count |  Mean |     Max | Parent                  |
| -----: | ----: | ----: | ----: | ------: | ----------------------- |
| 100.0% | 1.88s |   758 | 2.5ms | 137.9ms | `DevirtSCCRepeatedPass` |

##### `PassManager<Function>`

|     % |    Time | Count |  Mean |     Max | Parent                        |
| ----: | ------: | ----: | ----: | ------: | ----------------------------- |
| 75.6% |   1.39s |   593 | 2.4ms | 113.2ms | `CGSCCToFunctionPassAdaptor`  |
| 24.4% | 451.5ms |   204 | 2.2ms |  34.9ms | `ModuleToFunctionPassAdaptor` |
|  0.1% |   1.5ms |     2 | 0.7ms |   0.8ms | `FunctionToLoopPassAdaptor`   |

##### `RunPass`

|      % |  Time | Count |  Mean |     Max | Parent        |
| -----: | ----: | ----: | ----: | ------: | ------------- |
| 100.0% | 1.51s |   830 | 1.8ms | 103.8ms | `OptFunction` |

##### `CGSCCToFunctionPassAdaptor`

|      % |  Time | Count |  Mean |     Max | Parent                                                                                        |
| -----: | ----: | ----: | ----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 1.40s |   594 | 2.4ms | 114.3ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `PerformPendingInstantiations`

|      % |  Time | Count |  Mean |   Max | Parent     |
| -----: | ----: | ----: | ----: | ----: | ---------- |
| 100.0% | 1.30s |     1 | 1.30s | 1.30s | `Frontend` |

##### `InstantiateFunction`

|     % |   Time | Count |  Mean |    Max | Parent                         |
| ----: | -----: | ----: | ----: | -----: | ------------------------------ |
| 72.6% |  3.30s | 1,233 | 2.7ms | 33.8ms | `InstantiateFunction`          |
| 26.2% |  1.19s |   408 | 2.9ms | 34.0ms | `PerformPendingInstantiations` |
|  0.7% | 31.9ms |    43 | 0.7ms |  5.6ms | `InstantiateClass`             |
|  0.4% | 19.8ms |     7 | 2.8ms |  7.8ms | `ParseClass`                   |
|  0.1% |  6.7ms |     5 | 1.3ms |  4.1ms | `ParseFunctionDefinition`      |

##### `ModuleToFunctionPassAdaptor`

|     % |    Time | Count |    Mean |     Max | Parent                     |
| ----: | ------: | ----: | ------: | ------: | -------------------------- |
| 98.6% | 771.1ms |     4 | 192.8ms | 515.2ms | `Optimizer`                |
|  1.4% |  10.6ms |     2 |   5.3ms |   7.2ms | `ModuleInlinerWrapperPass` |

##### `ParseDeclarationOrFunctionDefinition`

|     % |    Time | Count |  Mean |    Max | Parent                                 |
| ----: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 99.2% | 672.3ms |   203 | 3.3ms | 48.1ms | `Frontend`                             |
|  0.8% |   5.6ms |     3 | 1.9ms |  3.3ms | `ParseDeclarationOrFunctionDefinition` |

##### `ParseFunctionDefinition`

|     % |    Time | Count |  Mean |    Max | Parent                                 |
| ----: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 93.6% | 440.2ms |   132 | 3.3ms | 29.5ms | `ParseDeclarationOrFunctionDefinition` |
|  6.4% |  30.3ms |    30 | 1.0ms |  2.7ms | `Frontend`                             |

##### `InstantiateClass`

|     % |    Time | Count |  Mean |    Max | Parent                    |
| ----: | ------: | ----: | ----: | -----: | ------------------------- |
| 54.6% | 443.0ms |   195 | 2.3ms |  8.6ms | `InstantiateClass`        |
| 28.5% | 231.2ms |   148 | 1.6ms | 12.3ms | `InstantiateFunction`     |
|  9.8% |  79.6ms |    40 | 2.0ms |  6.8ms | `ParseClass`              |
|  6.1% |  49.9ms |    35 | 1.4ms |  8.7ms | `ParseFunctionDefinition` |
|  0.9% |   7.2ms |     2 | 3.6ms |  5.4ms | `Frontend`                |

##### `InstCombinePass`

|      % |    Time | Count |  Mean |   Max | Parent                  |
| -----: | ------: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 316.5ms |   250 | 1.3ms | 9.0ms | `PassManager<Function>` |

##### `ParseClass`

|     % |    Time | Count |  Mean |    Max | Parent                                 |
| ----: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 53.1% | 144.9ms |    92 | 1.6ms | 10.8ms | `Frontend`                             |
| 46.9% | 128.2ms |    51 | 2.5ms | 11.3ms | `ParseDeclarationOrFunctionDefinition` |

##### `InlinerPass`

|      % |    Time | Count |  Mean |    Max | Parent                                                                                        |
| -----: | ------: | ----: | ----: | -----: | --------------------------------------------------------------------------------------------- |
| 100.0% | 238.3ms |   122 | 2.0ms | 21.0ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

#### Children

Child spans with the largest contribution to each span's total time.

##### `ExecuteCompiler`

|     % |  Time | Count |  Mean |   Max | Child      |
| ----: | ----: | ----: | ----: | ----: | ---------- |
| 69.7% | 6.70s |     1 | 6.70s | 6.70s | `Backend`  |
| 30.1% | 2.89s |     2 | 1.44s | 2.69s | `Frontend` |

##### `Backend`

|     % |  Time | Count |  Mean |   Max | Child           |
| ----: | ----: | ----: | ----: | ----: | --------------- |
| 55.2% | 3.70s |     1 | 3.70s | 3.70s | `Optimizer`     |
| 44.7% | 2.99s |     1 | 2.99s | 2.99s | `CodeGenPasses` |

##### `Optimizer`

|     % |    Time | Count |    Mean |     Max | Child                         |
| ----: | ------: | ----: | ------: | ------: | ----------------------------- |
| 68.4% |   2.53s |     1 |   2.53s |   2.53s | `ModuleInlinerWrapperPass`    |
| 20.8% | 771.1ms |     4 | 192.8ms | 515.2ms | `ModuleToFunctionPassAdaptor` |
|  2.7% | 100.3ms |     2 |  50.2ms |  71.9ms | `GlobalOptPass`               |
|  2.3% |  86.1ms |     1 |  86.1ms |  86.1ms | `IPSCCPPass`                  |
|  1.7% |  64.7ms |     1 |  64.7ms |  64.7ms | `AlwaysInlinerPass`           |

##### `CodeGenPasses`

|      % |  Time | Count |  Mean |   Max | Child       |
| -----: | ----: | ----: | ----: | ----: | ----------- |
| 100.0% | 2.99s |     1 | 2.99s | 2.99s | `OptModule` |

##### `OptModule`

|     % |  Time | Count |  Mean |     Max | Child         |
| ----: | ----: | ----: | ----: | ------: | ------------- |
| 86.2% | 2.58s |   726 | 3.6ms | 243.1ms | `OptFunction` |

##### `Frontend`

|     % |    Time | Count |  Mean |    Max | Child                                  |
| ----: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 45.0% |   1.30s |     1 | 1.30s |  1.30s | `PerformPendingInstantiations`         |
| 23.2% | 672.3ms |   203 | 3.3ms | 48.1ms | `ParseDeclarationOrFunctionDefinition` |
|  5.0% | 144.9ms |    92 | 1.6ms | 10.8ms | `ParseClass`                           |
|  3.4% |  99.7ms |    73 | 1.4ms |  6.7ms | `CodeGen Function`                     |
|  1.0% |  30.3ms |    30 | 1.0ms |  2.7ms | `ParseFunctionDefinition`              |

##### `OptFunction`

|     % |  Time | Count |  Mean |     Max | Child     |
| ----: | ----: | ----: | ----: | ------: | --------- |
| 58.7% | 1.51s |   830 | 1.8ms | 103.8ms | `RunPass` |

##### `ModuleInlinerWrapperPass`

|     % |   Time | Count |   Mean |    Max | Child                                                                               |
| ----: | -----: | ----: | -----: | -----: | ----------------------------------------------------------------------------------- |
| 98.6% |  2.49s |     1 |  2.49s |  2.49s | `ModuleToPostOrderCGSCCPassAdaptor`                                                 |
|  0.8% | 20.8ms |     1 | 20.8ms | 20.8ms | `RequireAnalysisPass<llvm::GlobalsAA, llvm::Module, llvm::AnalysisManager<Module>>` |
|  0.4% | 10.6ms |     2 |  5.3ms |  7.2ms | `ModuleToFunctionPassAdaptor`                                                       |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|     % |  Time | Count |  Mean |     Max | Child                                                     |
| ----: | ----: | ----: | ----: | ------: | --------------------------------------------------------- |
| 75.6% | 1.88s |   759 | 2.5ms | 138.0ms | `DevirtSCCRepeatedPass`                                   |
|  0.3% | 6.6ms |     1 | 6.6ms |   6.6ms | `InnerAnalysisManagerProxy<CGSCCAnalysisManager, Module>` |

##### `DevirtSCCRepeatedPass`

|     % |  Time | Count |  Mean |     Max | Child                                                                                         |
| ----: | ----: | ----: | ----: | ------: | --------------------------------------------------------------------------------------------- |
| 99.6% | 1.88s |   758 | 2.5ms | 137.9ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|     % |    Time | Count |  Mean |     Max | Child                        |
| ----: | ------: | ----: | ----: | ------: | ---------------------------- |
| 74.9% |   1.40s |   594 | 2.4ms | 114.3ms | `CGSCCToFunctionPassAdaptor` |
| 12.7% | 238.3ms |   122 | 2.0ms |  21.0ms | `InlinerPass`                |
|  0.3% |   6.3ms |     5 | 1.3ms |   2.4ms | `PostOrderFunctionAttrsPass` |

##### `PassManager<Function>`

|     % |    Time | Count |  Mean |    Max | Child             |
| ----: | ------: | ----: | ----: | -----: | ----------------- |
| 17.1% | 316.5ms |   250 | 1.3ms |  9.0ms | `InstCombinePass` |
|  5.4% |  99.6ms |    56 | 1.8ms | 10.7ms | `GVNPass`         |
|  3.6% |  66.7ms |    42 | 1.6ms | 16.6ms | `DSEPass`         |
|  3.5% |  65.4ms |    43 | 1.5ms |  9.0ms | `EarlyCSEPass`    |
|  2.6% |  49.0ms |    46 | 1.1ms |  3.4ms | `SimplifyCFGPass` |

##### `RunPass`

|     % |  Time | Count |  Mean |   Max | Child         |
| ----: | ----: | ----: | ----: | ----: | ------------- |
| <0.1% | 0.7ms |     1 | 0.7ms | 0.7ms | `RunLoopPass` |

##### `CGSCCToFunctionPassAdaptor`

|     % |  Time | Count |  Mean |     Max | Child                   |
| ----: | ----: | ----: | ----: | ------: | ----------------------- |
| 99.3% | 1.39s |   593 | 2.4ms | 113.2ms | `PassManager<Function>` |

##### `PerformPendingInstantiations`

|     % |  Time | Count |  Mean |    Max | Child                 |
| ----: | ----: | ----: | ----: | -----: | --------------------- |
| 91.7% | 1.19s |   408 | 2.9ms | 34.0ms | `InstantiateFunction` |

##### `InstantiateFunction`

|     % |    Time | Count |  Mean |    Max | Child                 |
| ----: | ------: | ----: | ----: | -----: | --------------------- |
| 72.6% |   3.30s | 1,233 | 2.7ms | 33.8ms | `InstantiateFunction` |
|  5.1% | 231.2ms |   148 | 1.6ms | 12.3ms | `InstantiateClass`    |

##### `ModuleToFunctionPassAdaptor`

|     % |    Time | Count |  Mean |    Max | Child                   |
| ----: | ------: | ----: | ----: | -----: | ----------------------- |
| 57.8% | 451.5ms |   204 | 2.2ms | 34.9ms | `PassManager<Function>` |

##### `ParseDeclarationOrFunctionDefinition`

|     % |    Time | Count |  Mean |    Max | Child                                  |
| ----: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 64.9% | 440.2ms |   132 | 3.3ms | 29.5ms | `ParseFunctionDefinition`              |
| 18.9% | 128.2ms |    51 | 2.5ms | 11.3ms | `ParseClass`                           |
|  0.8% |   5.6ms |     3 | 1.9ms |  3.3ms | `ParseDeclarationOrFunctionDefinition` |
|  0.1% |   0.6ms |     1 | 0.6ms |  0.6ms | `InstantiateClass`                     |

##### `ParseFunctionDefinition`

|     % |   Time | Count |  Mean |   Max | Child                 |
| ----: | -----: | ----: | ----: | ----: | --------------------- |
| 10.6% | 49.9ms |    35 | 1.4ms | 8.7ms | `InstantiateClass`    |
|  1.4% |  6.7ms |     5 | 1.3ms | 4.1ms | `InstantiateFunction` |

##### `InstantiateClass`

|     % |    Time | Count |  Mean |   Max | Child                 |
| ----: | ------: | ----: | ----: | ----: | --------------------- |
| 54.6% | 443.0ms |   195 | 2.3ms | 8.6ms | `InstantiateClass`    |
|  3.9% |  31.9ms |    43 | 0.7ms | 5.6ms | `InstantiateFunction` |

##### `InstCombinePass`

|    % |  Time | Count |  Mean |   Max | Child                   |
| ---: | ----: | ----: | ----: | ----: | ----------------------- |
| 1.5% | 4.8ms |     7 | 0.7ms | 1.0ms | `DominatorTreeAnalysis` |

##### `ParseClass`

|     % |   Time | Count |  Mean |   Max | Child                 |
| ----: | -----: | ----: | ----: | ----: | --------------------- |
| 29.1% | 79.6ms |    40 | 2.0ms | 6.8ms | `InstantiateClass`    |
|  7.3% | 19.8ms |     7 | 2.8ms | 7.8ms | `InstantiateFunction` |

##### `InlinerPass`

|    % |  Time | Count |  Mean |   Max | Child                    |
| ---: | ----: | ----: | ----: | ----: | ------------------------ |
| 3.3% | 7.8ms |     6 | 1.3ms | 2.1ms | `BlockFrequencyAnalysis` |

#### Longest instances

Instances of each span with the most time.

##### `ExecuteCompiler`

|      % |  Time | Start |
| -----: | ----: | ----: |
| 100.0% | 9.61s |   0ms |

##### `Backend`

|      % |  Time | Start |
| -----: | ----: | ----: |
| 100.0% | 6.70s | 2.90s |

##### `Optimizer`

|      % |  Time | Start |
| -----: | ----: | ----: |
| 100.0% | 3.70s | 2.91s |

##### `CodeGenPasses`

|      % |  Time | Start |
| -----: | ----: | ----: |
| 100.0% | 2.99s | 6.61s |

##### `OptModule`

|      % |  Time | Start | Attributes                            |
| -----: | ----: | ----: | ------------------------------------- |
| 100.0% | 2.99s | 6.61s | `detail=/src/fmt/test/format-test.cc` |

##### `Frontend`

|     % |    Time | Start |
| ----: | ------: | ----: |
| 93.0% |   2.69s | 2.0ms |
|  7.0% | 201.3ms | 2.69s |

##### `OptFunction`

|    % |    Time | Start | Attributes                                                  |
| ---: | ------: | ----: | ----------------------------------------------------------- |
| 9.4% | 243.1ms | 9.23s | `detail=_GLOBAL__sub_I_format_test.cc`                      |
| 4.5% | 117.2ms | 7.89s | `detail=_ZN26format_test_precision_Test8TestBodyEv`         |
| 4.3% | 109.9ms | 8.02s | `detail=_ZN34format_test_runtime_precision_Test8TestBodyEv` |
| 2.8% |  72.0ms | 7.81s | `detail=_ZN30format_test_runtime_width_Test8TestBodyEv`     |
| 2.3% |  60.4ms | 7.69s | `detail=_ZN26format_test_hash_flag_Test8TestBodyEv`         |

##### `ModuleInlinerWrapperPass`

|      % |  Time | Start | Attributes        |
| -----: | ----: | ----: | ----------------- |
| 100.0% | 2.53s | 3.38s | `detail=[module]` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |  Time | Start | Attributes        |
| -----: | ----: | ----: | ----------------- |
| 100.0% | 2.49s | 3.41s | `detail=[module]` |

##### `DevirtSCCRepeatedPass`

|    % |    Time | Start | Attributes                                                    |
| ---: | ------: | ----: | ------------------------------------------------------------- |
| 7.3% | 138.0ms | 5.75s | `detail=(_GLOBAL__sub_I_format_test.cc)`                      |
| 4.2% |  79.9ms | 4.50s | `detail=(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 3.9% |  73.9ms | 4.59s | `detail=(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 3.0% |  57.4ms | 4.40s | `detail=(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 2.3% |  44.2ms | 4.30s | `detail=(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|    % |    Time | Start | Attributes                                                    |
| ---: | ------: | ----: | ------------------------------------------------------------- |
| 7.3% | 137.9ms | 5.75s | `detail=(_GLOBAL__sub_I_format_test.cc)`                      |
| 4.2% |  79.6ms | 4.50s | `detail=(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 3.9% |  73.6ms | 4.59s | `detail=(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 3.0% |  57.1ms | 4.40s | `detail=(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 2.3% |  44.0ms | 4.30s | `detail=(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

##### `PassManager<Function>`

|    % |    Time | Start | Attributes                                                  |
| ---: | ------: | ----: | ----------------------------------------------------------- |
| 6.1% | 113.2ms | 5.78s | `detail=_GLOBAL__sub_I_format_test.cc`                      |
| 3.5% |  64.0ms | 4.52s | `detail=_ZN26format_test_precision_Test8TestBodyEv`         |
| 3.3% |  60.9ms | 4.60s | `detail=_ZN34format_test_runtime_precision_Test8TestBodyEv` |
| 2.5% |  46.9ms | 4.41s | `detail=_ZN30format_test_runtime_width_Test8TestBodyEv`     |
| 1.9% |  35.2ms | 4.30s | `detail=_ZN26format_test_hash_flag_Test8TestBodyEv`         |

##### `RunPass`

|    % |    Time | Start | Attributes                             |
| ---: | ------: | ----: | -------------------------------------- |
| 6.9% | 103.8ms | 9.24s | `detail=AArch64 Instruction Selection` |
| 2.6% |  40.1ms | 7.89s | `detail=AArch64 Instruction Selection` |
| 2.6% |  39.4ms | 8.03s | `detail=AArch64 Instruction Selection` |
| 1.7% |  26.3ms | 7.82s | `detail=AArch64 Instruction Selection` |
| 1.4% |  21.8ms | 7.69s | `detail=AArch64 Instruction Selection` |

##### `CGSCCToFunctionPassAdaptor`

|    % |    Time | Start | Attributes                                                    |
| ---: | ------: | ----: | ------------------------------------------------------------- |
| 8.1% | 114.3ms | 5.78s | `detail=(_GLOBAL__sub_I_format_test.cc)`                      |
| 4.6% |  64.7ms | 4.52s | `detail=(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 4.3% |  61.1ms | 4.60s | `detail=(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 3.3% |  47.1ms | 4.41s | `detail=(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 2.5% |  35.4ms | 4.30s | `detail=(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

##### `PerformPendingInstantiations`

|      % |  Time | Start |
| -----: | ----: | ----: |
| 100.0% | 1.30s | 1.39s |

##### `InstantiateFunction`

|    % |   Time | Start | Attributes                                                                                                                               |
| ---: | -----: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 0.7% | 34.0ms | 2.38s | `detail=fmt::nested_formatter<double>::write_padded<fmt::context, (lambda at /src/fmt/test/format-test.cc:1894:30)>`                     |
| 0.7% | 33.8ms | 2.38s | `detail=fmt::formatter<point>::format(point, format_context &)::(anonymous class)::operator()<fmt::basic_appender<char>>`                |
| 0.7% | 31.3ms | 2.38s | `detail=fmt::format_to<fmt::basic_appender<char> &, fmt::nested_view<double, char>, fmt::nested_view<double, char>, 0>`                  |
| 0.6% | 27.7ms | 2.38s | `detail=fmt::detail::value<fmt::context>::value<fmt::nested_view<double, char>, 0>`                                                      |
| 0.6% | 27.4ms | 2.38s | `detail=fmt::detail::value<fmt::context>::format_custom<fmt::nested_view<double, char>, fmt::formatter<fmt::nested_view<double, char>>>` |

##### `ModuleToFunctionPassAdaptor`

|     % |    Time | Start | Attributes        |
| ----: | ------: | ----: | ----------------- |
| 65.9% | 515.2ms | 6.07s | `detail=[module]` |
| 17.2% | 134.5ms | 2.91s | `detail=[module]` |
| 15.3% | 119.6ms | 3.20s | `detail=[module]` |
|  0.9% |   7.2ms | 5.91s | `detail=[module]` |
|  0.4% |   3.4ms | 3.40s | `detail=[module]` |

##### `ParseDeclarationOrFunctionDefinition`

|    % |   Time |   Start | Attributes                                                                                       |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 7.1% | 48.1ms |  71.4ms | `detail=/usr/lib/gcc/aarch64-linux-gnu/14/../../../../include/c++/14/cmath:83:1`                 |
| 4.3% | 29.5ms |   1.05s | `detail=/src/fmt/test/format-test.cc:1108:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>` |
| 4.2% | 28.2ms |   1.01s | `detail=/src/fmt/test/format-test.cc:950:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>`  |
| 3.6% | 24.2ms |  42.1ms | `detail=/usr/include/math.h:34:1 <Spelling=/usr/include/aarch64-linux-gnu/sys/cdefs.h:140:24>`   |
| 3.1% | 21.2ms | 991.1ms | `detail=/src/fmt/test/format-test.cc:891:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>`  |

##### `ParseFunctionDefinition`

|    % |   Time |   Start | Attributes        |
| ---: | -----: | ------: | ----------------- |
| 6.3% | 29.5ms |   1.05s | `detail=TestBody` |
| 6.0% | 28.2ms |   1.01s | `detail=TestBody` |
| 4.5% | 21.2ms | 991.1ms | `detail=TestBody` |
| 4.3% | 20.2ms | 788.2ms | `detail=TestBody` |
| 2.3% | 10.9ms | 827.9ms | `detail=TestBody` |

##### `InstantiateClass`

|    % |   Time |   Start | Attributes                                                                                                                                |
| ---: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1.5% | 12.3ms |   1.78s | `detail=std::is_array<const char[6]>`                                                                                                     |
| 1.1% |  8.7ms |   1.49s | `detail=testing::internal::MatcherBase<std::basic_string<char>>::ValuePolicy<const testing::MatcherInterface<std::basic_string<char>> *>` |
| 1.1% |  8.7ms | 789.7ms | `detail=testing::internal::MockSpec<int *(unsigned long)>`                                                                                |
| 1.1% |  8.6ms |   1.49s | `detail=testing::internal::SharedPayload<std::unique_ptr<const testing::MatcherInterface<std::basic_string<char>>>>`                      |
| 1.0% |  8.5ms |   1.68s | `detail=std::unique_ptr<testing::internal::ActionResultHolder<int *>>`                                                                    |

##### `InstCombinePass`

|    % |  Time | Start | Attributes                             |
| ---: | ----: | ----: | -------------------------------------- |
| 2.8% | 9.0ms | 5.79s | `detail=_GLOBAL__sub_I_format_test.cc` |
| 2.4% | 7.7ms | 5.81s | `detail=_GLOBAL__sub_I_format_test.cc` |
| 2.3% | 7.3ms | 5.88s | `detail=_GLOBAL__sub_I_format_test.cc` |
| 2.3% | 7.3ms | 5.84s | `detail=_GLOBAL__sub_I_format_test.cc` |
| 2.2% | 7.0ms | 6.56s | `detail=_GLOBAL__sub_I_format_test.cc` |

##### `ParseClass`

|    % |   Time |   Start | Attributes                                       |
| ---: | -----: | ------: | ------------------------------------------------ |
| 4.1% | 11.3ms | 555.7ms | `detail=testing::internal::TypedTestSuitePState` |
| 4.0% | 10.8ms | 742.4ms | `detail=testing::internal::FunctionMocker`       |
| 3.1% |  8.4ms |   1.21s | `detail=fmt::formatter`                          |
| 2.9% |  7.9ms | 540.3ms | `detail=testing::Message`                        |
| 2.8% |  7.6ms | 314.6ms | `detail=std::thread`                             |

##### `InlinerPass`

|    % |   Time | Start | Attributes                                                    |
| ---: | -----: | ----: | ------------------------------------------------------------- |
| 8.8% | 21.0ms | 5.75s | `detail=(_GLOBAL__sub_I_format_test.cc)`                      |
| 5.7% | 13.5ms | 4.50s | `detail=(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 4.8% | 11.4ms | 4.59s | `detail=(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 3.9% |  9.2ms | 4.40s | `detail=(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 3.3% |  7.9ms | 4.30s | `detail=(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

## Longest async spans

Spans of operations that stay pending while threads do other work. Async spans overlap one another, so their times can sum to more than the trace's duration.

### Elapsed time

Async spans with the most time elapsed from start to end.

|    Time | Count |   Mean |     Max | Span     |
| ------: | ----: | -----: | ------: | -------- |
| 757.5ms |   195 | 13.5ms | 433.5ms | `Source` |

#### Attribute values

Attribute values with the largest contribution to each span's elapsed time.

##### `Source`

|     % |    Time | Count |    Mean |     Max | Attribute | Value                                                                |
| ----: | ------: | ----: | ------: | ------: | --------- | -------------------------------------------------------------------- |
| 16.5% | 433.5ms |     1 | 433.5ms | 433.5ms | `detail`  | `/src/fmt/test/gtest-extra.h`                                        |
| 16.4% | 430.0ms |     1 | 430.0ms | 430.0ms | `detail`  | `/src/fmt/test/gtest/gmock/gmock.h`                                  |
|  9.2% | 242.5ms |     1 | 242.5ms | 242.5ms | `detail`  | `/src/fmt/include/fmt/format.h`                                      |
|  8.2% | 215.2ms |     1 | 215.2ms | 215.2ms | `detail`  | `/src/fmt/test/gtest/gtest/gtest.h`                                  |
|  3.0% |  79.6ms |     1 |  79.6ms |  79.6ms | `detail`  | `/usr/lib/gcc/aarch64-linux-gnu/14/../../../../include/c++/14/cmath` |

#### Parents

Parent spans with the largest contribution to each span's elapsed time.

##### `Source`

|     % |  Time | Count |   Mean |     Max | Parent   |
| ----: | ----: | ----: | -----: | ------: | -------- |
| 71.2% | 1.87s |   185 | 10.1ms | 430.0ms | `Source` |

#### Children

Child spans with the largest contribution to each span's elapsed time.

##### `Source`

|     % |  Time | Count |   Mean |     Max | Child    |
| ----: | ----: | ----: | -----: | ------: | -------- |
| 71.2% | 1.87s |   185 | 10.1ms | 430.0ms | `Source` |

#### Longest instances

Instances of each span with the most time.

##### `Source`

|     % |    Time |   Start | Attributes                                                                  |
| ----: | ------: | ------: | --------------------------------------------------------------------------- |
| 16.5% | 433.5ms | 323.8ms | `detail=/src/fmt/test/gtest-extra.h`                                        |
| 16.4% | 430.0ms | 327.0ms | `detail=/src/fmt/test/gtest/gmock/gmock.h`                                  |
|  9.2% | 242.5ms |   2.4ms | `detail=/src/fmt/include/fmt/format.h`                                      |
|  8.2% | 215.2ms | 448.1ms | `detail=/src/fmt/test/gtest/gtest/gtest.h`                                  |
|  3.0% |  79.6ms |  39.7ms | `detail=/usr/lib/gcc/aarch64-linux-gnu/14/../../../../include/c++/14/cmath` |
