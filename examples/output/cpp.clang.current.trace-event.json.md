# Trace

Recorded 8,829 events over 10.04s.

| Category    |     % |    Time | Count |
| ----------- | ----: | ------: | ----: |
| Compilation | 92.8% |   9.32s | 8,119 |
| Parsing     |  7.2% | 719.9ms |   710 |

## Longest thread spans

Spans recorded on one thread. A span's time includes time its thread spent waiting.

### Self time

Thread spans with the most time, excluding child spans.

|     % |    Time | Count |    Mean |     Max | Span                                                                                          |
| ----: | ------: | ----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 15.1% |   1.52s |   836 |   1.8ms | 102.1ms | `RunPass`                                                                                     |
| 11.8% |   1.18s | 1,868 |   0.6ms |  15.7ms | `InstantiateFunction`                                                                         |
| 11.0% |   1.10s |   869 |   1.3ms |   5.4ms | `PassManager<Function>`                                                                       |
| 10.8% |   1.08s |   745 |   1.5ms |  10.8ms | `OptFunction`                                                                                 |
|  6.5% | 650.4ms |     2 | 325.2ms | 439.1ms | `Frontend`                                                                                    |
|  6.3% | 633.2ms |     1 | 633.2ms | 633.2ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  4.5% | 448.6ms |   163 |   2.8ms |  40.0ms | `ParseFunctionDefinition`                                                                     |
|  4.1% | 409.6ms |     1 | 409.6ms | 409.6ms | `OptModule`                                                                                   |
|  3.4% | 340.5ms |   451 |   0.8ms |   5.0ms | `InstantiateClass`                                                                            |
|  3.3% | 328.8ms |     6 |  54.8ms | 119.0ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  3.1% | 315.2ms |   251 |   1.3ms |   7.2ms | `InstCombinePass`                                                                             |
|  2.4% | 244.5ms |   821 |   0.3ms |   0.8ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  2.4% | 237.3ms |   135 |   1.8ms |  19.3ms | `InlinerPass`                                                                                 |
|  1.7% | 169.9ms |   145 |   1.2ms |   5.0ms | `ParseClass`                                                                                  |
|  1.1% | 113.5ms |    75 |   1.5ms |   9.0ms | `CodeGen Function`                                                                            |
|  1.1% | 113.3ms |     1 | 113.3ms | 113.3ms | `PerformPendingInstantiations`                                                                |
|  1.1% | 106.8ms |    59 |   1.8ms |  11.4ms | `GVNPass`                                                                                     |
|  1.0% | 101.4ms |   207 |   0.5ms |  41.5ms | `ParseDeclarationOrFunctionDefinition`                                                        |
|  0.9% |  94.4ms |     2 |  47.2ms |  65.5ms | `GlobalOptPass`                                                                               |
|  0.8% |  79.7ms |     1 |  79.7ms |  79.7ms | `IPSCCPPass`                                                                                  |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Compilation

|     % |    Time | Count |    Mean |     Max | Span                                                                                          |
| ----: | ------: | ----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 15.1% |   1.52s |   836 |   1.8ms | 102.1ms | `RunPass`                                                                                     |
| 11.8% |   1.18s | 1,868 |   0.6ms |  15.7ms | `InstantiateFunction`                                                                         |
| 11.0% |   1.10s |   869 |   1.3ms |   5.4ms | `PassManager<Function>`                                                                       |
| 10.8% |   1.08s |   745 |   1.5ms |  10.8ms | `OptFunction`                                                                                 |
|  6.5% | 650.4ms |     2 | 325.2ms | 439.1ms | `Frontend`                                                                                    |
|  6.3% | 633.2ms |     1 | 633.2ms | 633.2ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  4.1% | 409.6ms |     1 | 409.6ms | 409.6ms | `OptModule`                                                                                   |
|  3.4% | 340.5ms |   451 |   0.8ms |   5.0ms | `InstantiateClass`                                                                            |
|  3.3% | 328.8ms |     6 |  54.8ms | 119.0ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  3.1% | 315.2ms |   251 |   1.3ms |   7.2ms | `InstCombinePass`                                                                             |
|  2.4% | 244.5ms |   821 |   0.3ms |   0.8ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  2.4% | 237.3ms |   135 |   1.8ms |  19.3ms | `InlinerPass`                                                                                 |
|  1.1% | 113.5ms |    75 |   1.5ms |   9.0ms | `CodeGen Function`                                                                            |
|  1.1% | 113.3ms |     1 | 113.3ms | 113.3ms | `PerformPendingInstantiations`                                                                |
|  1.1% | 106.8ms |    59 |   1.8ms |  11.4ms | `GVNPass`                                                                                     |
|  0.9% |  94.4ms |     2 |  47.2ms |  65.5ms | `GlobalOptPass`                                                                               |
|  0.8% |  79.7ms |     1 |  79.7ms |  79.7ms | `IPSCCPPass`                                                                                  |
|  0.7% |  69.4ms |    48 |   1.4ms |  16.5ms | `DSEPass`                                                                                     |
|  0.6% |  58.3ms |    48 |   1.2ms |   4.5ms | `MemorySSAAnalysis`                                                                           |
|  0.5% |  53.9ms |     1 |  53.9ms |  53.9ms | `AlwaysInlinerPass`                                                                           |

##### Parsing

|    % |    Time | Count |  Mean |    Max | Span                                   |
| ---: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 4.5% | 448.6ms |   163 | 2.8ms | 40.0ms | `ParseFunctionDefinition`              |
| 1.7% | 169.9ms |   145 | 1.2ms |  5.0ms | `ParseClass`                           |
| 1.0% | 101.4ms |   207 | 0.5ms | 41.5ms | `ParseDeclarationOrFunctionDefinition` |

#### Parents

Parent spans with the largest contribution to each span's self time.

##### `RunPass`

|      % |  Time | Count |  Mean |     Max | Parent        |
| -----: | ----: | ----: | ----: | ------: | ------------- |
| 100.0% | 1.52s |   836 | 1.8ms | 102.1ms | `OptFunction` |

##### `InstantiateFunction`

|     % |    Time | Count |  Mean |    Max | Parent                         |
| ----: | ------: | ----: | ----: | -----: | ------------------------------ |
| 66.6% | 791.0ms | 1,350 | 0.6ms | 15.7ms | `InstantiateFunction`          |
| 31.5% | 374.4ms |   461 | 0.8ms | 12.4ms | `PerformPendingInstantiations` |
|  1.1% |  12.5ms |    46 | 0.3ms |  5.4ms | `InstantiateClass`             |
|  0.6% |   7.1ms |     7 | 1.0ms |  1.7ms | `ParseClass`                   |
|  0.2% |   2.6ms |     4 | 0.7ms |  1.1ms | `ParseFunctionDefinition`      |

##### `PassManager<Function>`

|     % |    Time | Count |  Mean |    Max | Parent                        |
| ----: | ------: | ----: | ----: | -----: | ----------------------------- |
| 75.6% | 832.4ms |   641 | 1.3ms |  5.4ms | `CGSCCToFunctionPassAdaptor`  |
| 24.4% | 268.5ms |   225 | 1.2ms |  4.2ms | `ModuleToFunctionPassAdaptor` |
| <0.1% |  28.0µs |     3 | 9.3µs | 14.0µs | `FunctionToLoopPassAdaptor`   |

##### `OptFunction`

|      % |  Time | Count |  Mean |    Max | Parent      |
| -----: | ----: | ----: | ----: | -----: | ----------- |
| 100.0% | 1.08s |   745 | 1.5ms | 10.8ms | `OptModule` |

##### `Frontend`

|      % |    Time | Count |    Mean |     Max | Parent            |
| -----: | ------: | ----: | ------: | ------: | ----------------- |
| 100.0% | 650.4ms |     2 | 325.2ms | 439.1ms | `ExecuteCompiler` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |    Time | Count |    Mean |     Max | Parent                     |
| -----: | ------: | ----: | ------: | ------: | -------------------------- |
| 100.0% | 633.2ms |     1 | 633.2ms | 633.2ms | `ModuleInlinerWrapperPass` |

##### `ParseFunctionDefinition`

|     % |    Time | Count |  Mean |    Max | Parent                                 |
| ----: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 94.2% | 422.5ms |   135 | 3.1ms | 40.0ms | `ParseDeclarationOrFunctionDefinition` |
|  5.8% |  26.1ms |    28 | 0.9ms |  2.8ms | `Frontend`                             |

##### `OptModule`

|      % |    Time | Count |    Mean |     Max | Parent          |
| -----: | ------: | ----: | ------: | ------: | --------------- |
| 100.0% | 409.6ms |     1 | 409.6ms | 409.6ms | `CodeGenPasses` |

##### `InstantiateClass`

|     % |    Time | Count |  Mean |   Max | Parent                    |
| ----: | ------: | ----: | ----: | ----: | ------------------------- |
| 48.4% | 164.8ms |   210 | 0.8ms | 2.4ms | `InstantiateClass`        |
| 37.3% | 126.9ms |   170 | 0.7ms | 5.0ms | `InstantiateFunction`     |
|  7.4% |  25.2ms |    38 | 0.7ms | 1.5ms | `ParseClass`              |
|  6.0% |  20.3ms |    30 | 0.7ms | 1.7ms | `ParseFunctionDefinition` |
|  1.0% |   3.3ms |     3 | 1.1ms | 2.4ms | `Frontend`                |

##### `ModuleToFunctionPassAdaptor`

|     % |    Time | Count |   Mean |     Max | Parent                     |
| ----: | ------: | ----: | -----: | ------: | -------------------------- |
| 96.6% | 317.6ms |     4 | 79.4ms | 119.0ms | `Optimizer`                |
|  3.4% |  11.1ms |     2 |  5.6ms |   7.3ms | `ModuleInlinerWrapperPass` |

##### `InstCombinePass`

|      % |    Time | Count |  Mean |   Max | Parent                  |
| -----: | ------: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 315.2ms |   251 | 1.3ms | 7.2ms | `PassManager<Function>` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|      % |    Time | Count |  Mean |   Max | Parent                  |
| -----: | ------: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 244.5ms |   821 | 0.3ms | 0.8ms | `DevirtSCCRepeatedPass` |

##### `InlinerPass`

|      % |    Time | Count |  Mean |    Max | Parent                                                                                        |
| -----: | ------: | ----: | ----: | -----: | --------------------------------------------------------------------------------------------- |
| 100.0% | 237.3ms |   135 | 1.8ms | 19.3ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `ParseClass`

|     % |    Time | Count |  Mean |   Max | Parent                                 |
| ----: | ------: | ----: | ----: | ----: | -------------------------------------- |
| 68.2% | 115.9ms |    96 | 1.2ms | 5.0ms | `Frontend`                             |
| 31.8% |  53.9ms |    49 | 1.1ms | 4.4ms | `ParseDeclarationOrFunctionDefinition` |

##### `CodeGen Function`

|      % |    Time | Count |  Mean |   Max | Parent     |
| -----: | ------: | ----: | ----: | ----: | ---------- |
| 100.0% | 113.5ms |    75 | 1.5ms | 9.0ms | `Frontend` |

##### `PerformPendingInstantiations`

|      % |    Time | Count |    Mean |     Max | Parent     |
| -----: | ------: | ----: | ------: | ------: | ---------- |
| 100.0% | 113.3ms |     1 | 113.3ms | 113.3ms | `Frontend` |

##### `GVNPass`

|      % |    Time | Count |  Mean |    Max | Parent                  |
| -----: | ------: | ----: | ----: | -----: | ----------------------- |
| 100.0% | 106.8ms |    59 | 1.8ms | 11.4ms | `PassManager<Function>` |

##### `ParseDeclarationOrFunctionDefinition`

|     % |   Time | Count |  Mean |    Max | Parent                                 |
| ----: | -----: | ----: | ----: | -----: | -------------------------------------- |
| 95.0% | 96.4ms |   204 | 0.5ms | 41.5ms | `Frontend`                             |
|  5.0% |  5.0ms |     3 | 1.7ms |  2.7ms | `ParseDeclarationOrFunctionDefinition` |

##### `GlobalOptPass`

|      % |   Time | Count |   Mean |    Max | Parent      |
| -----: | -----: | ----: | -----: | -----: | ----------- |
| 100.0% | 94.4ms |     2 | 47.2ms | 65.5ms | `Optimizer` |

##### `IPSCCPPass`

|      % |   Time | Count |   Mean |    Max | Parent      |
| -----: | -----: | ----: | -----: | -----: | ----------- |
| 100.0% | 79.7ms |     1 | 79.7ms | 79.7ms | `Optimizer` |

##### `DSEPass`

|      % |   Time | Count |  Mean |    Max | Parent                  |
| -----: | -----: | ----: | ----: | -----: | ----------------------- |
| 100.0% | 69.4ms |    48 | 1.4ms | 16.5ms | `PassManager<Function>` |

##### `MemorySSAAnalysis`

|     % |   Time | Count |  Mean |   Max | Parent                      |
| ----: | -----: | ----: | ----: | ----: | --------------------------- |
| 40.5% | 23.6ms |    21 | 1.1ms | 4.2ms | `EarlyCSEPass`              |
| 35.1% | 20.5ms |    19 | 1.1ms | 4.5ms | `MemCpyOptPass`             |
| 24.3% | 14.2ms |     8 | 1.8ms | 3.4ms | `FunctionToLoopPassAdaptor` |

##### `AlwaysInlinerPass`

|      % |   Time | Count |   Mean |    Max | Parent      |
| -----: | -----: | ----: | -----: | -----: | ----------- |
| 100.0% | 53.9ms |     1 | 53.9ms | 53.9ms | `Optimizer` |

### Total time

Thread spans with the most time, including child spans.

|      % |    Time | Count |    Mean |     Max | Span                                                                                          |
| -----: | ------: | ----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |  10.04s |     1 |  10.04s |  10.04s | `ExecuteCompiler`                                                                             |
|  68.7% |   6.90s |     1 |   6.90s |   6.90s | `Backend`                                                                                     |
|  38.5% |   3.87s |     1 |   3.87s |   3.87s | `Optimizer`                                                                                   |
|  31.1% |   3.12s |     2 |   1.56s |   2.90s | `Frontend`                                                                                    |
|  30.1% |   3.02s |     1 |   3.02s |   3.02s | `CodeGenPasses`                                                                               |
|  30.1% |   3.02s |     1 |   3.02s |   3.02s | `OptModule`                                                                                   |
|  26.7% |   2.68s |     1 |   2.68s |   2.68s | `ModuleInlinerWrapperPass`                                                                    |
|  26.3% |   2.64s |     1 |   2.64s |   2.64s | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  26.0% |   2.61s |   745 |   3.5ms | 235.8ms | `OptFunction`                                                                                 |
|  20.0% |      2s |   821 |   2.4ms | 134.6ms | `DevirtSCCRepeatedPass`                                                                       |
|  19.9% |   1.99s |   821 |   2.4ms | 134.4ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  19.7% |   1.97s |   869 |   2.3ms | 110.2ms | `PassManager<Function>`                                                                       |
|  15.2% |   1.52s |   836 |   1.8ms | 102.1ms | `RunPass`                                                                                     |
|  14.9% |   1.50s |   643 |   2.3ms | 112.0ms | `CGSCCToFunctionPassAdaptor`                                                                  |
|  14.8% |   1.48s |     1 |   1.48s |   1.48s | `PerformPendingInstantiations`                                                                |
|  14.1% |   1.41s | 1,868 |   2.9ms |  36.8ms | `InstantiateFunction`                                                                         |
|   8.1% | 817.4ms |     6 | 136.2ms | 553.1ms | `ModuleToFunctionPassAdaptor`                                                                 |
|   7.0% | 698.5ms |   207 |   3.4ms |  46.2ms | `ParseDeclarationOrFunctionDefinition`                                                        |
|   5.0% | 501.9ms |   163 |   3.1ms |  40.0ms | `ParseFunctionDefinition`                                                                     |
|   3.5% | 353.5ms |   451 |   1.8ms |  10.0ms | `InstantiateClass`                                                                            |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Compilation

|      % |    Time | Count |    Mean |     Max | Span                                                                                          |
| -----: | ------: | ----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |  10.04s |     1 |  10.04s |  10.04s | `ExecuteCompiler`                                                                             |
|  68.7% |   6.90s |     1 |   6.90s |   6.90s | `Backend`                                                                                     |
|  38.5% |   3.87s |     1 |   3.87s |   3.87s | `Optimizer`                                                                                   |
|  31.1% |   3.12s |     2 |   1.56s |   2.90s | `Frontend`                                                                                    |
|  30.1% |   3.02s |     1 |   3.02s |   3.02s | `CodeGenPasses`                                                                               |
|  30.1% |   3.02s |     1 |   3.02s |   3.02s | `OptModule`                                                                                   |
|  26.7% |   2.68s |     1 |   2.68s |   2.68s | `ModuleInlinerWrapperPass`                                                                    |
|  26.3% |   2.64s |     1 |   2.64s |   2.64s | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  26.0% |   2.61s |   745 |   3.5ms | 235.8ms | `OptFunction`                                                                                 |
|  20.0% |      2s |   821 |   2.4ms | 134.6ms | `DevirtSCCRepeatedPass`                                                                       |
|  19.9% |   1.99s |   821 |   2.4ms | 134.4ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  19.7% |   1.97s |   869 |   2.3ms | 110.2ms | `PassManager<Function>`                                                                       |
|  15.2% |   1.52s |   836 |   1.8ms | 102.1ms | `RunPass`                                                                                     |
|  14.9% |   1.50s |   643 |   2.3ms | 112.0ms | `CGSCCToFunctionPassAdaptor`                                                                  |
|  14.8% |   1.48s |     1 |   1.48s |   1.48s | `PerformPendingInstantiations`                                                                |
|  14.1% |   1.41s | 1,868 |   2.9ms |  36.8ms | `InstantiateFunction`                                                                         |
|   8.1% | 817.4ms |     6 | 136.2ms | 553.1ms | `ModuleToFunctionPassAdaptor`                                                                 |
|   3.5% | 353.5ms |   451 |   1.8ms |  10.0ms | `InstantiateClass`                                                                            |
|   3.2% | 320.0ms |   251 |   1.3ms |   8.2ms | `InstCombinePass`                                                                             |
|   2.5% | 246.8ms |   135 |   1.8ms |  19.3ms | `InlinerPass`                                                                                 |

##### Parsing

|    % |    Time | Count |  Mean |    Max | Span                                   |
| ---: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 7.0% | 698.5ms |   207 | 3.4ms | 46.2ms | `ParseDeclarationOrFunctionDefinition` |
| 5.0% | 501.9ms |   163 | 3.1ms | 40.0ms | `ParseFunctionDefinition`              |
| 2.6% | 265.2ms |   145 | 1.8ms | 10.3ms | `ParseClass`                           |

#### Attribute values

Attribute values with the largest contribution to each span's total time.

##### `OptModule`

|      % |  Time | Count |  Mean |   Max | Attribute | Value                          |
| -----: | ----: | ----: | ----: | ----: | --------- | ------------------------------ |
| 100.0% | 3.02s |     1 | 3.02s | 3.02s | `detail`  | `/src/fmt/test/format-test.cc` |

##### `ModuleInlinerWrapperPass`

|      % |  Time | Count |  Mean |   Max | Attribute | Value      |
| -----: | ----: | ----: | ----: | ----: | --------- | ---------- |
| 100.0% | 2.68s |     1 | 2.68s | 2.68s | `detail`  | `[module]` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |  Time | Count |  Mean |   Max | Attribute | Value      |
| -----: | ----: | ----: | ----: | ----: | --------- | ---------- |
| 100.0% | 2.64s |     1 | 2.64s | 2.64s | `detail`  | `[module]` |

##### `OptFunction`

|     % |    Time | Count |   Mean |     Max | Attribute | Value                                                |
| ----: | ------: | ----: | -----: | ------: | --------- | ---------------------------------------------------- |
| 11.1% | 290.6ms |     5 | 58.1ms | 235.8ms | `detail`  | `_GLOBAL__sub_I_format_test.cc`                      |
|  5.3% | 139.2ms |     5 | 27.8ms | 108.4ms | `detail`  | `_ZN26format_test_precision_Test8TestBodyEv`         |
|  4.9% | 128.5ms |     5 | 25.7ms |  99.2ms | `detail`  | `_ZN34format_test_runtime_precision_Test8TestBodyEv` |
|  3.7% |  97.7ms |     5 | 19.5ms |  77.6ms | `detail`  | `_ZN30format_test_runtime_width_Test8TestBodyEv`     |
|  3.0% |  77.8ms |     5 | 15.6ms |  58.5ms | `detail`  | `_ZN26format_test_hash_flag_Test8TestBodyEv`         |

##### `DevirtSCCRepeatedPass`

|    % |    Time | Count |    Mean |     Max | Attribute | Value                                                  |
| ---: | ------: | ----: | ------: | ------: | --------- | ------------------------------------------------------ |
| 6.7% | 134.6ms |     1 | 134.6ms | 134.6ms | `detail`  | `(_GLOBAL__sub_I_format_test.cc)`                      |
| 4.5% |  89.8ms |     1 |  89.8ms |  89.8ms | `detail`  | `(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 3.5% |  69.3ms |     1 |  69.3ms |  69.3ms | `detail`  | `(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 2.6% |  52.0ms |     1 |  52.0ms |  52.0ms | `detail`  | `(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 2.1% |  43.2ms |     1 |  43.2ms |  43.2ms | `detail`  | `(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|    % |    Time | Count |    Mean |     Max | Attribute | Value                                                  |
| ---: | ------: | ----: | ------: | ------: | --------- | ------------------------------------------------------ |
| 6.7% | 134.4ms |     1 | 134.4ms | 134.4ms | `detail`  | `(_GLOBAL__sub_I_format_test.cc)`                      |
| 4.5% |  89.5ms |     1 |  89.5ms |  89.5ms | `detail`  | `(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 3.4% |  68.9ms |     1 |  68.9ms |  68.9ms | `detail`  | `(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 2.6% |  51.8ms |     1 |  51.8ms |  51.8ms | `detail`  | `(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 2.2% |  43.0ms |     1 |  43.0ms |  43.0ms | `detail`  | `(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

##### `PassManager<Function>`

|    % |    Time | Count |   Mean |     Max | Attribute | Value                                                |
| ---: | ------: | ----: | -----: | ------: | --------- | ---------------------------------------------------- |
| 7.5% | 148.8ms |     3 | 49.6ms | 110.2ms | `detail`  | `_GLOBAL__sub_I_format_test.cc`                      |
| 5.4% | 107.5ms |     6 | 17.9ms |  72.1ms | `detail`  | `_ZN26format_test_precision_Test8TestBodyEv`         |
| 4.3% |  86.1ms |     4 | 21.5ms |  55.0ms | `detail`  | `_ZN34format_test_runtime_precision_Test8TestBodyEv` |
| 3.0% |  59.9ms |     4 | 15.0ms |  42.6ms | `detail`  | `_ZN30format_test_runtime_width_Test8TestBodyEv`     |
| 2.5% |  49.9ms |     4 | 12.5ms |  34.6ms | `detail`  | `_ZN26format_test_hash_flag_Test8TestBodyEv`         |

##### `RunPass`

|     % |    Time | Count |  Mean |     Max | Attribute | Value                           |
| ----: | ------: | ----: | ----: | ------: | --------- | ------------------------------- |
| 51.8% | 788.3ms |   262 | 3.0ms | 102.1ms | `detail`  | `AArch64 Instruction Selection` |
|  6.6% | 101.1ms |    52 | 1.9ms |  14.9ms | `detail`  | `CodeGen Prepare`               |
|  3.2% |  48.2ms |    31 | 1.6ms |  13.3ms | `detail`  | `Greedy Register Allocator`     |
|  3.0% |  45.5ms |    39 | 1.2ms |   9.1ms | `detail`  | `Loop Pass Manager`             |
|  3.0% |  45.0ms |    26 | 1.7ms |   8.7ms | `detail`  | `Register Coalescer`            |

##### `CGSCCToFunctionPassAdaptor`

|    % |    Time | Count |    Mean |     Max | Attribute | Value                                                  |
| ---: | ------: | ----: | ------: | ------: | --------- | ------------------------------------------------------ |
| 7.5% | 112.0ms |     1 | 112.0ms | 112.0ms | `detail`  | `(_GLOBAL__sub_I_format_test.cc)`                      |
| 4.8% |  72.3ms |     1 |  72.3ms |  72.3ms | `detail`  | `(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 3.7% |  55.2ms |     1 |  55.2ms |  55.2ms | `detail`  | `(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 2.8% |  42.7ms |     1 |  42.7ms |  42.7ms | `detail`  | `(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 2.3% |  34.8ms |     1 |  34.8ms |  34.8ms | `detail`  | `(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

##### `InstantiateFunction`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                                                                                                              |
| ---: | -----: | ----: | -----: | -----: | --------- | ------------------------------------------------------------------------------------------------------------------ |
| 0.7% | 36.8ms |     1 | 36.8ms | 36.8ms | `detail`  | `testing::StrictMock<mock_allocator<char>>::StrictMock`                                                            |
| 0.7% | 36.7ms |     1 | 36.7ms | 36.7ms | `detail`  | `mock_allocator<char>::mock_allocator`                                                                             |
| 0.6% | 35.2ms |     1 | 35.2ms | 35.2ms | `detail`  | `fmt::nested_formatter<double>::write_padded<fmt::context, (lambda at /src/fmt/test/format-test.cc:1992:30)>`      |
| 0.6% | 34.9ms |     1 | 34.9ms | 34.9ms | `detail`  | `fmt::formatter<point>::format(point, format_context &)::(anonymous class)::operator()<fmt::basic_appender<char>>` |
| 0.6% | 33.1ms |     1 | 33.1ms | 33.1ms | `detail`  | `testing::internal::FunctionMocker<void (int *, unsigned long)>::~FunctionMocker`                                  |

##### `ModuleToFunctionPassAdaptor`

|      % |    Time | Count |    Mean |     Max | Attribute | Value      |
| -----: | ------: | ----: | ------: | ------: | --------- | ---------- |
| 100.0% | 817.4ms |     6 | 136.2ms | 553.1ms | `detail`  | `[module]` |

##### `ParseDeclarationOrFunctionDefinition`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                                                                                     |
| ---: | -----: | ----: | -----: | -----: | --------- | ----------------------------------------------------------------------------------------- |
| 6.6% | 46.2ms |     1 | 46.2ms | 46.2ms | `detail`  | `/usr/lib/gcc/aarch64-linux-gnu/14/../../../../include/c++/14/cmath:83:1`                 |
| 5.7% | 40.1ms |     1 | 40.1ms | 40.1ms | `detail`  | `/src/fmt/test/format-test.cc:1210:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>` |
| 4.6% | 32.1ms |     1 | 32.1ms | 32.1ms | `detail`  | `/src/fmt/test/format-test.cc:1030:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>` |
| 3.6% | 25.5ms |     1 | 25.5ms | 25.5ms | `detail`  | `/usr/include/math.h:34:1 <Spelling=/usr/include/aarch64-linux-gnu/sys/cdefs.h:140:24>`   |
| 3.3% | 23.5ms |     1 | 23.5ms | 23.5ms | `detail`  | `/src/fmt/test/format-test.cc:971:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>`  |

##### `ParseFunctionDefinition`

|     % |    Time | Count |  Mean |    Max | Attribute | Value           |
| ----: | ------: | ----: | ----: | -----: | --------- | --------------- |
| 88.5% | 444.4ms |   115 | 3.9ms | 40.0ms | `detail`  | `TestBody`      |
|  1.1% |   5.6ms |     1 | 5.6ms |  5.6ms | `detail`  | `format`        |
|  0.9% |   4.4ms |     1 | 4.4ms |  4.4ms | `detail`  | `format_dragon` |
|  0.7% |   3.6ms |     2 | 1.8ms |  1.8ms | `detail`  | `PrintTo`       |
|  0.7% |   3.3ms |     2 | 1.6ms |  1.6ms | `detail`  | `operator""s`   |

##### `InstantiateClass`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                                                                                                                                     |
| ---: | -----: | ----: | -----: | -----: | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1.2% | 10.0ms |     1 | 10.0ms | 10.0ms | `detail`  | `std::unique_ptr<testing::internal::ActionResultHolder<char *>>`                                                                          |
| 1.1% |  9.2ms |     1 |  9.2ms |  9.2ms | `detail`  | `testing::internal::ValuesInIteratorRangeGenerator<bool>::Iterator`                                                                       |
| 1.1% |  9.0ms |     1 |  9.0ms |  9.0ms | `detail`  | `testing::internal::MockSpec<int *(unsigned long)>`                                                                                       |
| 1.1% |  9.0ms |     1 |  9.0ms |  9.0ms | `detail`  | `std::unique_ptr<const bool>`                                                                                                             |
| 1.0% |  8.4ms |     1 |  8.4ms |  8.4ms | `detail`  | `std::__uniq_ptr_data<testing::internal::ActionResultHolder<char *>, std::default_delete<testing::internal::ActionResultHolder<char *>>>` |

##### `InstCombinePass`

|     % |   Time | Count |  Mean |   Max | Attribute | Value                                                |
| ----: | -----: | ----: | ----: | ----: | --------- | ---------------------------------------------------- |
| 15.6% | 50.0ms |     7 | 7.1ms | 8.2ms | `detail`  | `_GLOBAL__sub_I_format_test.cc`                      |
|  9.4% | 30.0ms |     8 | 3.8ms | 4.8ms | `detail`  | `_ZN26format_test_precision_Test8TestBodyEv`         |
|  7.7% | 24.5ms |     8 | 3.1ms | 3.8ms | `detail`  | `_ZN34format_test_runtime_precision_Test8TestBodyEv` |
|  6.0% | 19.0ms |     8 | 2.4ms | 3.0ms | `detail`  | `_ZN30format_test_runtime_width_Test8TestBodyEv`     |
|  5.3% | 17.0ms |     8 | 2.1ms | 2.6ms | `detail`  | `_ZN26format_test_hash_flag_Test8TestBodyEv`         |

##### `ParseClass`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                                     |
| ---: | -----: | ----: | -----: | -----: | --------- | ----------------------------------------- |
| 6.7% | 17.8ms |     6 |  3.0ms | 10.2ms | `detail`  | `fmt::formatter`                          |
| 3.9% | 10.3ms |     1 | 10.3ms | 10.3ms | `detail`  | `testing::internal::TypedTestSuitePState` |
| 3.5% |  9.4ms |     1 |  9.4ms |  9.4ms | `detail`  | `testing::internal::FunctionMocker`       |
| 3.2% |  8.6ms |     1 |  8.6ms |  8.6ms | `detail`  | `testing::Test`                           |
| 2.8% |  7.3ms |     1 |  7.3ms |  7.3ms | `detail`  | `std::chrono::system_clock`               |

##### `InlinerPass`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                                                  |
| ---: | -----: | ----: | -----: | -----: | --------- | ------------------------------------------------------ |
| 7.8% | 19.3ms |     1 | 19.3ms | 19.3ms | `detail`  | `(_GLOBAL__sub_I_format_test.cc)`                      |
| 6.4% | 15.9ms |     1 | 15.9ms | 15.9ms | `detail`  | `(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 5.1% | 12.7ms |     1 | 12.7ms | 12.7ms | `detail`  | `(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 3.4% |  8.3ms |     1 |  8.3ms |  8.3ms | `detail`  | `(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 3.0% |  7.5ms |     1 |  7.5ms |  7.5ms | `detail`  | `(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

#### Parents

Parent spans with the largest contribution to each span's total time.

##### `Backend`

|      % |  Time | Count |  Mean |   Max | Parent            |
| -----: | ----: | ----: | ----: | ----: | ----------------- |
| 100.0% | 6.90s |     1 | 6.90s | 6.90s | `ExecuteCompiler` |

##### `Optimizer`

|      % |  Time | Count |  Mean |   Max | Parent    |
| -----: | ----: | ----: | ----: | ----: | --------- |
| 100.0% | 3.87s |     1 | 3.87s | 3.87s | `Backend` |

##### `Frontend`

|      % |  Time | Count |  Mean |   Max | Parent            |
| -----: | ----: | ----: | ----: | ----: | ----------------- |
| 100.0% | 3.12s |     2 | 1.56s | 2.90s | `ExecuteCompiler` |

##### `CodeGenPasses`

|      % |  Time | Count |  Mean |   Max | Parent    |
| -----: | ----: | ----: | ----: | ----: | --------- |
| 100.0% | 3.02s |     1 | 3.02s | 3.02s | `Backend` |

##### `OptModule`

|      % |  Time | Count |  Mean |   Max | Parent          |
| -----: | ----: | ----: | ----: | ----: | --------------- |
| 100.0% | 3.02s |     1 | 3.02s | 3.02s | `CodeGenPasses` |

##### `ModuleInlinerWrapperPass`

|      % |  Time | Count |  Mean |   Max | Parent      |
| -----: | ----: | ----: | ----: | ----: | ----------- |
| 100.0% | 2.68s |     1 | 2.68s | 2.68s | `Optimizer` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |  Time | Count |  Mean |   Max | Parent                     |
| -----: | ----: | ----: | ----: | ----: | -------------------------- |
| 100.0% | 2.64s |     1 | 2.64s | 2.64s | `ModuleInlinerWrapperPass` |

##### `OptFunction`

|      % |  Time | Count |  Mean |     Max | Parent      |
| -----: | ----: | ----: | ----: | ------: | ----------- |
| 100.0% | 2.61s |   745 | 3.5ms | 235.8ms | `OptModule` |

##### `DevirtSCCRepeatedPass`

|      % | Time | Count |  Mean |     Max | Parent                              |
| -----: | ---: | ----: | ----: | ------: | ----------------------------------- |
| 100.0% |   2s |   821 | 2.4ms | 134.6ms | `ModuleToPostOrderCGSCCPassAdaptor` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|      % |  Time | Count |  Mean |     Max | Parent                  |
| -----: | ----: | ----: | ----: | ------: | ----------------------- |
| 100.0% | 1.99s |   821 | 2.4ms | 134.4ms | `DevirtSCCRepeatedPass` |

##### `PassManager<Function>`

|     % |    Time | Count |  Mean |     Max | Parent                        |
| ----: | ------: | ----: | ----: | ------: | ----------------------------- |
| 75.2% |   1.49s |   641 | 2.3ms | 110.2ms | `CGSCCToFunctionPassAdaptor`  |
| 24.7% | 488.6ms |   225 | 2.2ms |  37.8ms | `ModuleToFunctionPassAdaptor` |
|  0.1% |   1.9ms |     3 | 0.6ms |   0.9ms | `FunctionToLoopPassAdaptor`   |

##### `RunPass`

|      % |  Time | Count |  Mean |     Max | Parent        |
| -----: | ----: | ----: | ----: | ------: | ------------- |
| 100.0% | 1.52s |   836 | 1.8ms | 102.1ms | `OptFunction` |

##### `CGSCCToFunctionPassAdaptor`

|      % |  Time | Count |  Mean |     Max | Parent                                                                                        |
| -----: | ----: | ----: | ----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 1.50s |   643 | 2.3ms | 112.0ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `PerformPendingInstantiations`

|      % |  Time | Count |  Mean |   Max | Parent     |
| -----: | ----: | ----: | ----: | ----: | ---------- |
| 100.0% | 1.48s |     1 | 1.48s | 1.48s | `Frontend` |

##### `InstantiateFunction`

|     % |   Time | Count |  Mean |    Max | Parent                         |
| ----: | -----: | ----: | ----: | -----: | ------------------------------ |
| 73.5% |  3.98s | 1,350 | 3.0ms | 36.7ms | `InstantiateFunction`          |
| 25.3% |  1.37s |   461 | 3.0ms | 36.8ms | `PerformPendingInstantiations` |
|  0.7% | 38.2ms |    46 | 0.8ms |  6.1ms | `InstantiateClass`             |
|  0.4% | 20.5ms |     7 | 2.9ms |  9.3ms | `ParseClass`                   |
|  0.1% |  8.0ms |     4 | 2.0ms |  5.5ms | `ParseFunctionDefinition`      |

##### `ModuleToFunctionPassAdaptor`

|     % |    Time | Count |    Mean |     Max | Parent                     |
| ----: | ------: | ----: | ------: | ------: | -------------------------- |
| 98.6% | 806.2ms |     4 | 201.6ms | 553.1ms | `Optimizer`                |
|  1.4% |  11.1ms |     2 |   5.6ms |   7.3ms | `ModuleInlinerWrapperPass` |

##### `ParseDeclarationOrFunctionDefinition`

|     % |    Time | Count |  Mean |    Max | Parent                                 |
| ----: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 99.3% | 698.5ms |   204 | 3.4ms | 46.2ms | `Frontend`                             |
|  0.7% |   5.0ms |     3 | 1.7ms |  2.7ms | `ParseDeclarationOrFunctionDefinition` |

##### `ParseFunctionDefinition`

|     % |    Time | Count |  Mean |    Max | Parent                                 |
| ----: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 94.5% | 474.2ms |   135 | 3.5ms | 40.0ms | `ParseDeclarationOrFunctionDefinition` |
|  5.5% |  27.6ms |    28 | 1.0ms |  2.8ms | `Frontend`                             |

##### `InstantiateClass`

|     % |    Time | Count |  Mean |    Max | Parent                    |
| ----: | ------: | ----: | ----: | -----: | ------------------------- |
| 53.5% | 436.3ms |   210 | 2.1ms |  9.0ms | `InstantiateClass`        |
| 30.6% | 249.3ms |   170 | 1.5ms | 10.0ms | `InstantiateFunction`     |
|  9.2% |  74.8ms |    38 | 2.0ms |  8.3ms | `ParseClass`              |
|  5.5% |  45.2ms |    30 | 1.5ms |  9.0ms | `ParseFunctionDefinition` |
|  1.2% |   9.4ms |     3 | 3.1ms |  5.3ms | `Frontend`                |

##### `InstCombinePass`

|      % |    Time | Count |  Mean |   Max | Parent                  |
| -----: | ------: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 320.0ms |   251 | 1.3ms | 8.2ms | `PassManager<Function>` |

##### `ParseClass`

|     % |    Time | Count |  Mean |    Max | Parent                                 |
| ----: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 53.7% | 142.4ms |    96 | 1.5ms | 10.2ms | `Frontend`                             |
| 46.3% | 122.8ms |    49 | 2.5ms | 10.3ms | `ParseDeclarationOrFunctionDefinition` |

##### `InlinerPass`

|      % |    Time | Count |  Mean |    Max | Parent                                                                                        |
| -----: | ------: | ----: | ----: | -----: | --------------------------------------------------------------------------------------------- |
| 100.0% | 246.8ms |   135 | 1.8ms | 19.3ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

#### Children

Child spans with the largest contribution to each span's total time.

##### `ExecuteCompiler`

|     % |  Time | Count |  Mean |   Max | Child      |
| ----: | ----: | ----: | ----: | ----: | ---------- |
| 68.7% | 6.90s |     1 | 6.90s | 6.90s | `Backend`  |
| 31.1% | 3.12s |     2 | 1.56s | 2.90s | `Frontend` |

##### `Backend`

|     % |  Time | Count |  Mean |   Max | Child           |
| ----: | ----: | ----: | ----: | ----: | --------------- |
| 56.1% | 3.87s |     1 | 3.87s | 3.87s | `Optimizer`     |
| 43.8% | 3.02s |     1 | 3.02s | 3.02s | `CodeGenPasses` |

##### `Optimizer`

|     % |    Time | Count |    Mean |     Max | Child                         |
| ----: | ------: | ----: | ------: | ------: | ----------------------------- |
| 69.3% |   2.68s |     1 |   2.68s |   2.68s | `ModuleInlinerWrapperPass`    |
| 20.8% | 806.2ms |     4 | 201.6ms | 553.1ms | `ModuleToFunctionPassAdaptor` |
|  2.4% |  94.4ms |     2 |  47.2ms |  65.5ms | `GlobalOptPass`               |
|  2.1% |  79.7ms |     1 |  79.7ms |  79.7ms | `IPSCCPPass`                  |
|  1.7% |  66.0ms |     1 |  66.0ms |  66.0ms | `AlwaysInlinerPass`           |

##### `Frontend`

|     % |    Time | Count |  Mean |    Max | Child                                  |
| ----: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 47.5% |   1.48s |     1 | 1.48s |  1.48s | `PerformPendingInstantiations`         |
| 22.3% | 698.5ms |   204 | 3.4ms | 46.2ms | `ParseDeclarationOrFunctionDefinition` |
|  4.6% | 142.4ms |    96 | 1.5ms | 10.2ms | `ParseClass`                           |
|  3.6% | 113.5ms |    75 | 1.5ms |  9.0ms | `CodeGen Function`                     |
|  0.9% |  27.6ms |    28 | 1.0ms |  2.8ms | `ParseFunctionDefinition`              |

##### `CodeGenPasses`

|      % |  Time | Count |  Mean |   Max | Child       |
| -----: | ----: | ----: | ----: | ----: | ----------- |
| 100.0% | 3.02s |     1 | 3.02s | 3.02s | `OptModule` |

##### `OptModule`

|     % |  Time | Count |  Mean |     Max | Child         |
| ----: | ----: | ----: | ----: | ------: | ------------- |
| 86.4% | 2.61s |   745 | 3.5ms | 235.8ms | `OptFunction` |

##### `ModuleInlinerWrapperPass`

|     % |   Time | Count |   Mean |    Max | Child                                                                               |
| ----: | -----: | ----: | -----: | -----: | ----------------------------------------------------------------------------------- |
| 98.7% |  2.64s |     1 |  2.64s |  2.64s | `ModuleToPostOrderCGSCCPassAdaptor`                                                 |
|  0.8% | 20.7ms |     1 | 20.7ms | 20.7ms | `RequireAnalysisPass<llvm::GlobalsAA, llvm::Module, llvm::AnalysisManager<Module>>` |
|  0.4% | 11.1ms |     2 |  5.6ms |  7.3ms | `ModuleToFunctionPassAdaptor`                                                       |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|     % |  Time | Count |  Mean |     Max | Child                                                     |
| ----: | ----: | ----: | ----: | ------: | --------------------------------------------------------- |
| 75.8% |    2s |   821 | 2.4ms | 134.6ms | `DevirtSCCRepeatedPass`                                   |
|  0.2% | 6.5ms |     1 | 6.5ms |   6.5ms | `InnerAnalysisManagerProxy<CGSCCAnalysisManager, Module>` |

##### `OptFunction`

|     % |  Time | Count |  Mean |     Max | Child     |
| ----: | ----: | ----: | ----: | ------: | --------- |
| 58.3% | 1.52s |   836 | 1.8ms | 102.1ms | `RunPass` |

##### `DevirtSCCRepeatedPass`

|     % |  Time | Count |  Mean |     Max | Child                                                                                         |
| ----: | ----: | ----: | ----: | ------: | --------------------------------------------------------------------------------------------- |
| 99.6% | 1.99s |   821 | 2.4ms | 134.4ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|     % |    Time | Count |  Mean |     Max | Child                        |
| ----: | ------: | ----: | ----: | ------: | ---------------------------- |
| 75.1% |   1.50s |   643 | 2.3ms | 112.0ms | `CGSCCToFunctionPassAdaptor` |
| 12.3% | 246.8ms |   135 | 1.8ms |  19.3ms | `InlinerPass`                |
|  0.3% |   6.4ms |     5 | 1.3ms |   2.7ms | `PostOrderFunctionAttrsPass` |

##### `PassManager<Function>`

|     % |    Time | Count |  Mean |    Max | Child             |
| ----: | ------: | ----: | ----: | -----: | ----------------- |
| 16.2% | 320.0ms |   251 | 1.3ms |  8.2ms | `InstCombinePass` |
|  5.4% | 106.8ms |    59 | 1.8ms | 11.4ms | `GVNPass`         |
|  3.5% |  69.4ms |    48 | 1.4ms | 16.5ms | `DSEPass`         |
|  3.4% |  66.7ms |    47 | 1.4ms |  8.4ms | `EarlyCSEPass`    |
|  2.5% |  48.8ms |    47 | 1.0ms |  2.4ms | `SimplifyCFGPass` |

##### `RunPass`

|    % |  Time | Count |  Mean |   Max | Child         |
| ---: | ----: | ----: | ----: | ----: | ------------- |
| 0.1% | 1.4ms |     2 | 0.7ms | 0.7ms | `RunLoopPass` |

##### `CGSCCToFunctionPassAdaptor`

|     % |  Time | Count |  Mean |     Max | Child                   |
| ----: | ----: | ----: | ----: | ------: | ----------------------- |
| 99.3% | 1.49s |   641 | 2.3ms | 110.2ms | `PassManager<Function>` |

##### `PerformPendingInstantiations`

|     % |  Time | Count |  Mean |    Max | Child                 |
| ----: | ----: | ----: | ----: | -----: | --------------------- |
| 92.4% | 1.37s |   461 | 3.0ms | 36.8ms | `InstantiateFunction` |

##### `InstantiateFunction`

|     % |    Time | Count |  Mean |    Max | Child                 |
| ----: | ------: | ----: | ----: | -----: | --------------------- |
| 73.5% |   3.98s | 1,350 | 3.0ms | 36.7ms | `InstantiateFunction` |
|  4.6% | 249.3ms |   170 | 1.5ms | 10.0ms | `InstantiateClass`    |

##### `ModuleToFunctionPassAdaptor`

|     % |    Time | Count |  Mean |    Max | Child                   |
| ----: | ------: | ----: | ----: | -----: | ----------------------- |
| 59.8% | 488.6ms |   225 | 2.2ms | 37.8ms | `PassManager<Function>` |

##### `ParseDeclarationOrFunctionDefinition`

|     % |    Time | Count |  Mean |    Max | Child                                  |
| ----: | ------: | ----: | ----: | -----: | -------------------------------------- |
| 67.4% | 474.2ms |   135 | 3.5ms | 40.0ms | `ParseFunctionDefinition`              |
| 17.5% | 122.8ms |    49 | 2.5ms | 10.3ms | `ParseClass`                           |
|  0.7% |   5.0ms |     3 | 1.7ms |  2.7ms | `ParseDeclarationOrFunctionDefinition` |

##### `ParseFunctionDefinition`

|    % |   Time | Count |  Mean |   Max | Child                 |
| ---: | -----: | ----: | ----: | ----: | --------------------- |
| 9.0% | 45.2ms |    30 | 1.5ms | 9.0ms | `InstantiateClass`    |
| 1.6% |  8.0ms |     4 | 2.0ms | 5.5ms | `InstantiateFunction` |

##### `InstantiateClass`

|     % |    Time | Count |  Mean |   Max | Child                 |
| ----: | ------: | ----: | ----: | ----: | --------------------- |
| 53.5% | 436.3ms |   210 | 2.1ms | 9.0ms | `InstantiateClass`    |
|  4.7% |  38.2ms |    46 | 0.8ms | 6.1ms | `InstantiateFunction` |

##### `InstCombinePass`

|    % |  Time | Count |  Mean |   Max | Child                   |
| ---: | ----: | ----: | ----: | ----: | ----------------------- |
| 1.5% | 4.8ms |     7 | 0.7ms | 1.1ms | `DominatorTreeAnalysis` |

##### `ParseClass`

|     % |   Time | Count |  Mean |   Max | Child                 |
| ----: | -----: | ----: | ----: | ----: | --------------------- |
| 28.2% | 74.8ms |    38 | 2.0ms | 8.3ms | `InstantiateClass`    |
|  7.7% | 20.5ms |     7 | 2.9ms | 9.3ms | `InstantiateFunction` |

##### `InlinerPass`

|    % |  Time | Count |  Mean |   Max | Child                    |
| ---: | ----: | ----: | ----: | ----: | ------------------------ |
| 3.8% | 9.5ms |    10 | 0.9ms | 1.9ms | `BlockFrequencyAnalysis` |

#### Longest instances

Instances of each span with the most time.

##### `ExecuteCompiler`

|      % |   Time | Start |
| -----: | -----: | ----: |
| 100.0% | 10.04s |   0ms |

##### `Backend`

|      % |  Time | Start |
| -----: | ----: | ----: |
| 100.0% | 6.90s | 3.14s |

##### `Optimizer`

|      % |  Time | Start |
| -----: | ----: | ----: |
| 100.0% | 3.87s | 3.14s |

##### `Frontend`

|     % |    Time | Start |
| ----: | ------: | ----: |
| 92.9% |   2.90s | 2.2ms |
|  7.1% | 221.5ms | 2.90s |

##### `CodeGenPasses`

|      % |  Time | Start |
| -----: | ----: | ----: |
| 100.0% | 3.02s | 7.02s |

##### `OptModule`

|      % |  Time | Start | Attributes                            |
| -----: | ----: | ----: | ------------------------------------- |
| 100.0% | 3.02s | 7.02s | `detail=/src/fmt/test/format-test.cc` |

##### `ModuleInlinerWrapperPass`

|      % |  Time | Start | Attributes        |
| -----: | ----: | ----: | ----------------- |
| 100.0% | 2.68s | 3.61s | `detail=[module]` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |  Time | Start | Attributes        |
| -----: | ----: | ----: | ----------------- |
| 100.0% | 2.64s | 3.64s | `detail=[module]` |

##### `OptFunction`

|    % |    Time | Start | Attributes                                                  |
| ---: | ------: | ----: | ----------------------------------------------------------- |
| 9.0% | 235.8ms | 9.68s | `detail=_GLOBAL__sub_I_format_test.cc`                      |
| 4.2% | 108.4ms | 8.38s | `detail=_ZN26format_test_precision_Test8TestBodyEv`         |
| 3.8% |  99.2ms | 8.51s | `detail=_ZN34format_test_runtime_precision_Test8TestBodyEv` |
| 3.0% |  77.6ms | 8.30s | `detail=_ZN30format_test_runtime_width_Test8TestBodyEv`     |
| 2.2% |  58.5ms | 8.15s | `detail=_ZN26format_test_hash_flag_Test8TestBodyEv`         |

##### `DevirtSCCRepeatedPass`

|    % |    Time | Start | Attributes                                                    |
| ---: | ------: | ----: | ------------------------------------------------------------- |
| 6.7% | 134.6ms | 6.14s | `detail=(_GLOBAL__sub_I_format_test.cc)`                      |
| 4.5% |  89.8ms | 4.82s | `detail=(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 3.5% |  69.3ms | 4.93s | `detail=(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 2.6% |  52.0ms | 4.73s | `detail=(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 2.1% |  43.2ms | 4.60s | `detail=(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|    % |    Time | Start | Attributes                                                    |
| ---: | ------: | ----: | ------------------------------------------------------------- |
| 6.7% | 134.4ms | 6.14s | `detail=(_GLOBAL__sub_I_format_test.cc)`                      |
| 4.5% |  89.5ms | 4.82s | `detail=(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 3.4% |  68.9ms | 4.93s | `detail=(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 2.6% |  51.8ms | 4.73s | `detail=(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 2.2% |  43.0ms | 4.60s | `detail=(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

##### `PassManager<Function>`

|    % |    Time | Start | Attributes                                                  |
| ---: | ------: | ----: | ----------------------------------------------------------- |
| 5.6% | 110.2ms | 6.16s | `detail=_GLOBAL__sub_I_format_test.cc`                      |
| 3.6% |  72.1ms | 4.84s | `detail=_ZN26format_test_precision_Test8TestBodyEv`         |
| 2.8% |  55.0ms | 4.94s | `detail=_ZN34format_test_runtime_precision_Test8TestBodyEv` |
| 2.1% |  42.6ms | 4.74s | `detail=_ZN30format_test_runtime_width_Test8TestBodyEv`     |
| 1.9% |  37.8ms | 6.95s | `detail=_GLOBAL__sub_I_format_test.cc`                      |

##### `RunPass`

|    % |    Time | Start | Attributes                             |
| ---: | ------: | ----: | -------------------------------------- |
| 6.7% | 102.1ms | 9.69s | `detail=AArch64 Instruction Selection` |
| 2.8% |  42.9ms | 8.38s | `detail=AArch64 Instruction Selection` |
| 2.3% |  35.3ms | 8.51s | `detail=AArch64 Instruction Selection` |
| 1.6% |  25.1ms | 8.30s | `detail=AArch64 Instruction Selection` |
| 1.4% |  21.2ms | 8.15s | `detail=AArch64 Instruction Selection` |

##### `CGSCCToFunctionPassAdaptor`

|    % |    Time | Start | Attributes                                                    |
| ---: | ------: | ----: | ------------------------------------------------------------- |
| 7.5% | 112.0ms | 6.16s | `detail=(_GLOBAL__sub_I_format_test.cc)`                      |
| 4.8% |  72.3ms | 4.84s | `detail=(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 3.7% |  55.2ms | 4.94s | `detail=(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 2.8% |  42.7ms | 4.74s | `detail=(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 2.3% |  34.8ms | 4.61s | `detail=(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

##### `PerformPendingInstantiations`

|      % |  Time | Start |
| -----: | ----: | ----: |
| 100.0% | 1.48s | 1.42s |

##### `InstantiateFunction`

|    % |   Time | Start | Attributes                                                                                                                |
| ---: | -----: | ----: | ------------------------------------------------------------------------------------------------------------------------- |
| 0.7% | 36.8ms | 1.89s | `detail=testing::StrictMock<mock_allocator<char>>::StrictMock`                                                            |
| 0.7% | 36.7ms | 1.89s | `detail=mock_allocator<char>::mock_allocator`                                                                             |
| 0.6% | 35.2ms | 2.59s | `detail=fmt::nested_formatter<double>::write_padded<fmt::context, (lambda at /src/fmt/test/format-test.cc:1992:30)>`      |
| 0.6% | 34.9ms | 2.59s | `detail=fmt::formatter<point>::format(point, format_context &)::(anonymous class)::operator()<fmt::basic_appender<char>>` |
| 0.6% | 33.1ms | 1.78s | `detail=testing::internal::FunctionMocker<void (int *, unsigned long)>::~FunctionMocker`                                  |

##### `ModuleToFunctionPassAdaptor`

|     % |    Time | Start | Attributes        |
| ----: | ------: | ----: | ----------------- |
| 67.7% | 553.1ms | 6.43s | `detail=[module]` |
| 15.7% | 128.3ms | 3.15s | `detail=[module]` |
| 15.0% | 122.8ms | 3.42s | `detail=[module]` |
|  0.9% |   7.3ms | 6.28s | `detail=[module]` |
|  0.5% |   3.9ms | 3.63s | `detail=[module]` |

##### `ParseDeclarationOrFunctionDefinition`

|    % |   Time |   Start | Attributes                                                                                       |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 6.6% | 46.2ms |  75.4ms | `detail=/usr/lib/gcc/aarch64-linux-gnu/14/../../../../include/c++/14/cmath:83:1`                 |
| 5.7% | 40.1ms |   1.05s | `detail=/src/fmt/test/format-test.cc:1210:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>` |
| 4.6% | 32.1ms |      1s | `detail=/src/fmt/test/format-test.cc:1030:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>` |
| 3.6% | 25.5ms |  44.5ms | `detail=/usr/include/math.h:34:1 <Spelling=/usr/include/aarch64-linux-gnu/sys/cdefs.h:140:24>`   |
| 3.3% | 23.5ms | 977.9ms | `detail=/src/fmt/test/format-test.cc:971:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>`  |

##### `ParseFunctionDefinition`

|    % |   Time |   Start | Attributes        |
| ---: | -----: | ------: | ----------------- |
| 8.0% | 40.0ms |   1.05s | `detail=TestBody` |
| 6.4% | 32.1ms |      1s | `detail=TestBody` |
| 4.7% | 23.4ms | 977.9ms | `detail=TestBody` |
| 4.0% | 20.2ms | 764.9ms | `detail=TestBody` |
| 2.3% | 11.6ms |   1.25s | `detail=TestBody` |

##### `InstantiateClass`

|    % |   Time |   Start | Attributes                                                                                                                                       |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.2% | 10.0ms |   1.86s | `detail=std::unique_ptr<testing::internal::ActionResultHolder<char *>>`                                                                          |
| 1.1% |  9.2ms |   1.61s | `detail=testing::internal::ValuesInIteratorRangeGenerator<bool>::Iterator`                                                                       |
| 1.1% |  9.0ms | 766.3ms | `detail=testing::internal::MockSpec<int *(unsigned long)>`                                                                                       |
| 1.1% |  9.0ms |   1.61s | `detail=std::unique_ptr<const bool>`                                                                                                             |
| 1.0% |  8.4ms |   1.86s | `detail=std::__uniq_ptr_data<testing::internal::ActionResultHolder<char *>, std::default_delete<testing::internal::ActionResultHolder<char *>>>` |

##### `InstCombinePass`

|    % |  Time | Start | Attributes                             |
| ---: | ----: | ----: | -------------------------------------- |
| 2.6% | 8.2ms | 6.17s | `detail=_GLOBAL__sub_I_format_test.cc` |
| 2.3% | 7.2ms | 6.97s | `detail=_GLOBAL__sub_I_format_test.cc` |
| 2.2% | 7.1ms | 6.21s | `detail=_GLOBAL__sub_I_format_test.cc` |
| 2.2% | 6.9ms | 6.95s | `detail=_GLOBAL__sub_I_format_test.cc` |
| 2.2% | 6.9ms | 6.19s | `detail=_GLOBAL__sub_I_format_test.cc` |

##### `ParseClass`

|    % |   Time |   Start | Attributes                                       |
| ---: | -----: | ------: | ------------------------------------------------ |
| 3.9% | 10.3ms | 543.7ms | `detail=testing::internal::TypedTestSuitePState` |
| 3.8% | 10.2ms |   1.22s | `detail=fmt::formatter`                          |
| 3.5% |  9.4ms | 721.1ms | `detail=testing::internal::FunctionMocker`       |
| 3.2% |  8.6ms | 621.4ms | `detail=testing::Test`                           |
| 2.8% |  7.3ms | 250.0ms | `detail=std::chrono::system_clock`               |

##### `InlinerPass`

|    % |   Time | Start | Attributes                                                    |
| ---: | -----: | ----: | ------------------------------------------------------------- |
| 7.8% | 19.3ms | 6.14s | `detail=(_GLOBAL__sub_I_format_test.cc)`                      |
| 6.4% | 15.9ms | 4.82s | `detail=(_ZN26format_test_precision_Test8TestBodyEv)`         |
| 5.1% | 12.7ms | 4.93s | `detail=(_ZN34format_test_runtime_precision_Test8TestBodyEv)` |
| 3.4% |  8.3ms | 4.73s | `detail=(_ZN30format_test_runtime_width_Test8TestBodyEv)`     |
| 3.0% |  7.5ms | 4.60s | `detail=(_ZN26format_test_hash_flag_Test8TestBodyEv)`         |

## Longest async spans

Spans of operations that stay pending while threads do other work. Async spans overlap one another, so their times can sum to more than the trace's duration.

### Elapsed time

Async spans with the most time elapsed from start to end.

|    Time | Count |   Mean |     Max | Span     |
| ------: | ----: | -----: | ------: | -------- |
| 733.2ms |   195 | 13.1ms | 410.8ms | `Source` |

#### Attribute values

Attribute values with the largest contribution to each span's elapsed time.

##### `Source`

|     % |    Time | Count |    Mean |     Max | Attribute | Value                                                                |
| ----: | ------: | ----: | ------: | ------: | --------- | -------------------------------------------------------------------- |
| 16.1% | 410.8ms |     1 | 410.8ms | 410.8ms | `detail`  | `/src/fmt/test/gtest-extra.h`                                        |
| 16.0% | 407.7ms |     1 | 407.7ms | 407.7ms | `detail`  | `/src/fmt/test/gtest/gmock/gmock.h`                                  |
|  9.2% | 234.5ms |     1 | 234.5ms | 234.5ms | `detail`  | `/src/fmt/include/fmt/format.h`                                      |
|  7.8% | 197.3ms |     1 | 197.3ms | 197.3ms | `detail`  | `/src/fmt/test/gtest/gtest/gtest.h`                                  |
|  3.1% |  79.2ms |     1 |  79.2ms |  79.2ms | `detail`  | `/usr/lib/gcc/aarch64-linux-gnu/14/../../../../include/c++/14/cmath` |

#### Parents

Parent spans with the largest contribution to each span's elapsed time.

##### `Source`

|     % |  Time | Count |  Mean |     Max | Parent   |
| ----: | ----: | ----: | ----: | ------: | -------- |
| 71.2% | 1.81s |   185 | 9.8ms | 407.7ms | `Source` |

#### Children

Child spans with the largest contribution to each span's elapsed time.

##### `Source`

|     % |  Time | Count |  Mean |     Max | Child    |
| ----: | ----: | ----: | ----: | ------: | -------- |
| 71.2% | 1.81s |   185 | 9.8ms | 407.7ms | `Source` |

#### Longest instances

Instances of each span with the most time.

##### `Source`

|     % |    Time |   Start | Attributes                                                                  |
| ----: | ------: | ------: | --------------------------------------------------------------------------- |
| 16.1% | 410.8ms | 322.9ms | `detail=/src/fmt/test/gtest-extra.h`                                        |
| 16.0% | 407.7ms | 325.7ms | `detail=/src/fmt/test/gtest/gmock/gmock.h`                                  |
|  9.2% | 234.5ms |   2.7ms | `detail=/src/fmt/include/fmt/format.h`                                      |
|  7.8% | 197.3ms | 447.8ms | `detail=/src/fmt/test/gtest/gtest/gtest.h`                                  |
|  3.1% |  79.2ms |  42.2ms | `detail=/usr/lib/gcc/aarch64-linux-gnu/14/../../../../include/c++/14/cmath` |
