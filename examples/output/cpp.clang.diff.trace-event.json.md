# Trace diff

Recorded 8,315 → 8,829 events (+514, +6.2%) over 9.61s → 10.04s (+433.34ms, +4.5%).

| Category    | Change |     Delta |     % |              Time |         Count |
| ----------- | -----: | --------: | ----: | ----------------: | ------------: |
| Compilation |  +4.5% | +404.37ms | 92.8% |     8.92s → 9.32s | 7,609 → 8,119 |
| Parsing     |  +4.2% |  +28.98ms |  7.2% | 690.9ms → 719.9ms |     706 → 710 |

## Longest thread spans

Spans recorded on one thread. A span's time includes time its thread spent waiting.

### Self time

#### Regressions

Thread spans with the largest increase in time, excluding child spans. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |              Time |         Count |              Mean |               Max | Span                                                                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | ----------------: | ----------------: | --------------------------------------------------------------------------------------------- |
| +16.5% | +168.34ms | 10.6% → 11.8% |     1.01s → 1.18s | 1,696 → 1,868 |             0.6ms |   13.3ms → 15.7ms | `InstantiateFunction`                                                                         |
| +10.8% | +106.90ms | 10.3% → 11.0% |   994.0ms → 1.10s |     799 → 869 |     1.2ms → 1.3ms |     4.9ms → 5.4ms | `PassManager<Function>`                                                                       |
|  +8.4% |  +34.60ms |   4.3% → 4.5% | 414.0ms → 448.6ms |     162 → 163 |     2.6ms → 2.8ms |   29.5ms → 40.0ms | `ParseFunctionDefinition`                                                                     |
|  +5.0% |  +30.32ms |          6.3% | 602.9ms → 633.2ms |             1 | 602.9ms → 633.2ms | 602.9ms → 633.2ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  +2.0% |  +21.84ms | 11.1% → 10.8% |     1.06s → 1.08s |     726 → 745 |             1.5ms |   12.2ms → 10.8ms | `OptFunction`                                                                                 |
|  +7.8% |  +17.68ms |          2.4% | 226.8ms → 244.5ms |     758 → 821 |             0.3ms |             0.8ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
| +13.8% |  +13.77ms |   1.0% → 1.1% |  99.7ms → 113.5ms |       73 → 75 |     1.4ms → 1.5ms |     6.7ms → 9.0ms | `CodeGen Function`                                                                            |
|  +2.0% |  +12.90ms |   6.6% → 6.5% | 637.5ms → 650.4ms |             2 | 318.7ms → 325.2ms | 444.6ms → 439.1ms | `Frontend`                                                                                    |
|  +0.6% |   +8.43ms | 15.7% → 15.1% |     1.51s → 1.52s |     830 → 836 |             1.8ms | 103.8ms → 102.1ms | `RunPass`                                                                                     |
|  +7.2% |   +7.20ms |   1.0% → 1.1% |  99.6ms → 106.8ms |       56 → 59 |             1.8ms |   10.7ms → 11.4ms | `GVNPass`                                                                                     |
|  +3.0% |   +6.82ms |          2.4% | 230.5ms → 237.3ms |     122 → 135 |     1.9ms → 1.8ms |   21.0ms → 19.3ms | `InlinerPass`                                                                                 |
| +19.9% |   +5.97ms |   0.3% → 0.4% |   30.0ms → 35.9ms |             1 |   30.0ms → 35.9ms |   30.0ms → 35.9ms | `DeadArgumentEliminationPass`                                                                 |
|  +4.7% |   +5.04ms |          1.1% | 108.3ms → 113.3ms |             1 | 108.3ms → 113.3ms | 108.3ms → 113.3ms | `PerformPendingInstantiations`                                                                |
|  +1.2% |   +3.92ms |   3.5% → 3.4% | 336.5ms → 340.5ms |     421 → 451 |             0.8ms |    12.3ms → 5.0ms | `InstantiateClass`                                                                            |
|  +1.1% |   +3.54ms |   3.2% → 3.1% | 311.7ms → 315.2ms |     250 → 251 |     1.2ms → 1.3ms |     8.0ms → 7.2ms | `InstCombinePass`                                                                             |
|    new |   +3.46ms |  0.0% → <0.1% |       0ms → 3.5ms |         0 → 1 |       0ms → 3.5ms |       0ms → 3.5ms | `LoopFullUnrollPass`                                                                          |
|  +5.1% |   +3.37ms |          0.7% |   66.0ms → 69.4ms |       42 → 48 |     1.6ms → 1.4ms |   16.6ms → 16.5ms | `DSEPass`                                                                                     |
| +55.4% |   +2.77ms |          0.1% |     5.0ms → 7.8ms |       17 → 22 |     0.3ms → 0.4ms |             0.6ms | `BlockFrequencyAnalysis`                                                                      |
| +45.1% |   +2.09ms |  <0.1% → 0.1% |     4.6ms → 6.7ms |             1 |     4.6ms → 6.7ms |     4.6ms → 6.7ms | `Backend`                                                                                     |
| +10.5% |   +2.04ms |          0.2% |   19.4ms → 21.4ms |             1 |   19.4ms → 21.4ms |   19.4ms → 21.4ms | `ExecuteCompiler`                                                                             |

##### Compilation

| Change |     Delta |             % |              Time |         Count |              Mean |               Max | Span                                                                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | ----------------: | ----------------: | --------------------------------------------------------------------------------------------- |
| +16.5% | +168.34ms | 10.6% → 11.8% |     1.01s → 1.18s | 1,696 → 1,868 |             0.6ms |   13.3ms → 15.7ms | `InstantiateFunction`                                                                         |
| +10.8% | +106.90ms | 10.3% → 11.0% |   994.0ms → 1.10s |     799 → 869 |     1.2ms → 1.3ms |     4.9ms → 5.4ms | `PassManager<Function>`                                                                       |
|  +5.0% |  +30.32ms |          6.3% | 602.9ms → 633.2ms |             1 | 602.9ms → 633.2ms | 602.9ms → 633.2ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  +2.0% |  +21.84ms | 11.1% → 10.8% |     1.06s → 1.08s |     726 → 745 |             1.5ms |   12.2ms → 10.8ms | `OptFunction`                                                                                 |
|  +7.8% |  +17.68ms |          2.4% | 226.8ms → 244.5ms |     758 → 821 |             0.3ms |             0.8ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
| +13.8% |  +13.77ms |   1.0% → 1.1% |  99.7ms → 113.5ms |       73 → 75 |     1.4ms → 1.5ms |     6.7ms → 9.0ms | `CodeGen Function`                                                                            |
|  +2.0% |  +12.90ms |   6.6% → 6.5% | 637.5ms → 650.4ms |             2 | 318.7ms → 325.2ms | 444.6ms → 439.1ms | `Frontend`                                                                                    |
|  +0.6% |   +8.43ms | 15.7% → 15.1% |     1.51s → 1.52s |     830 → 836 |             1.8ms | 103.8ms → 102.1ms | `RunPass`                                                                                     |
|  +7.2% |   +7.20ms |   1.0% → 1.1% |  99.6ms → 106.8ms |       56 → 59 |             1.8ms |   10.7ms → 11.4ms | `GVNPass`                                                                                     |
|  +3.0% |   +6.82ms |          2.4% | 230.5ms → 237.3ms |     122 → 135 |     1.9ms → 1.8ms |   21.0ms → 19.3ms | `InlinerPass`                                                                                 |
| +19.9% |   +5.97ms |   0.3% → 0.4% |   30.0ms → 35.9ms |             1 |   30.0ms → 35.9ms |   30.0ms → 35.9ms | `DeadArgumentEliminationPass`                                                                 |
|  +4.7% |   +5.04ms |          1.1% | 108.3ms → 113.3ms |             1 | 108.3ms → 113.3ms | 108.3ms → 113.3ms | `PerformPendingInstantiations`                                                                |
|  +1.2% |   +3.92ms |   3.5% → 3.4% | 336.5ms → 340.5ms |     421 → 451 |             0.8ms |    12.3ms → 5.0ms | `InstantiateClass`                                                                            |
|  +1.1% |   +3.54ms |   3.2% → 3.1% | 311.7ms → 315.2ms |     250 → 251 |     1.2ms → 1.3ms |     8.0ms → 7.2ms | `InstCombinePass`                                                                             |
|    new |   +3.46ms |  0.0% → <0.1% |       0ms → 3.5ms |         0 → 1 |       0ms → 3.5ms |       0ms → 3.5ms | `LoopFullUnrollPass`                                                                          |
|  +5.1% |   +3.37ms |          0.7% |   66.0ms → 69.4ms |       42 → 48 |     1.6ms → 1.4ms |   16.6ms → 16.5ms | `DSEPass`                                                                                     |
| +55.4% |   +2.77ms |          0.1% |     5.0ms → 7.8ms |       17 → 22 |     0.3ms → 0.4ms |             0.6ms | `BlockFrequencyAnalysis`                                                                      |
| +45.1% |   +2.09ms |  <0.1% → 0.1% |     4.6ms → 6.7ms |             1 |     4.6ms → 6.7ms |     4.6ms → 6.7ms | `Backend`                                                                                     |
| +10.5% |   +2.04ms |          0.2% |   19.4ms → 21.4ms |             1 |   19.4ms → 21.4ms |   19.4ms → 21.4ms | `ExecuteCompiler`                                                                             |
| +10.6% |   +2.04ms |          0.2% |   19.1ms → 21.2ms |       17 → 20 |             1.1ms |     3.0ms → 3.6ms | `ADCEPass`                                                                                    |

##### Parsing

| Change |    Delta |           % |              Time |     Count |          Mean |             Max | Span                      |
| -----: | -------: | ----------: | ----------------: | --------: | ------------: | --------------: | ------------------------- |
|  +8.4% | +34.60ms | 4.3% → 4.5% | 414.0ms → 448.6ms | 162 → 163 | 2.6ms → 2.8ms | 29.5ms → 40.0ms | `ParseFunctionDefinition` |

#### Improvements

Thread spans with the largest decrease in time, excluding child spans. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |            % |              Time |     Count |              Mean |               Max | Span                                   |
| ------: | -------: | -----------: | ----------------: | --------: | ----------------: | ----------------: | -------------------------------------- |
|  -28.6% | -11.50ms |  0.4% → 0.3% |   40.2ms → 28.7ms |         2 |   20.1ms → 14.3ms |   25.3ms → 16.8ms | `GlobalDCEPass`                        |
|   -5.9% |  -5.96ms |  1.0% → 0.9% |  100.3ms → 94.4ms |         2 |   50.2ms → 47.2ms |   71.9ms → 65.5ms | `GlobalOptPass`                        |
|   -6.8% |  -5.78ms |  0.9% → 0.8% |   85.5ms → 79.7ms |         1 |   85.5ms → 79.7ms |   85.5ms → 79.7ms | `IPSCCPPass`                           |
|   -1.1% |  -4.53ms |  4.3% → 4.1% | 414.1ms → 409.6ms |         1 | 414.1ms → 409.6ms | 414.1ms → 409.6ms | `OptModule`                            |
|   -2.2% |  -3.84ms |  1.8% → 1.7% | 173.7ms → 169.9ms | 143 → 145 |             1.2ms |     5.6ms → 5.0ms | `ParseClass`                           |
|  -12.5% |  -2.18ms |         0.2% |   17.4ms → 15.2ms |   19 → 16 |     0.9ms → 1.0ms |     2.5ms → 2.3ms | `SROAPass`                             |
|   -8.8% |  -1.81ms |         0.2% |   20.5ms → 18.7ms |   15 → 14 |     1.4ms → 1.3ms |     4.1ms → 4.3ms | `CorrelatedValuePropagationPass`       |
|   -1.7% |  -1.78ms |  1.1% → 1.0% | 103.2ms → 101.4ms | 206 → 207 |             0.5ms |   43.2ms → 41.5ms | `ParseDeclarationOrFunctionDefinition` |
|   -0.5% |  -1.50ms |  3.4% → 3.3% | 330.3ms → 328.8ms |         6 |   55.0ms → 54.8ms | 117.5ms → 119.0ms | `ModuleToFunctionPassAdaptor`          |
|   -1.7% |  -1.00ms |         0.6% |   59.3ms → 58.3ms |        48 |             1.2ms |             4.5ms | `MemorySSAAnalysis`                    |
|   -2.5% |  -0.98ms |         0.4% |   39.6ms → 38.6ms |   35 → 36 |             1.1ms |     3.7ms → 3.5ms | `JumpThreadingPass`                    |
| removed |  -0.98ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 |       1.0ms → 0ms |       1.0ms → 0ms | `LoopDeletionPass`                     |
|  -18.1% |  -0.96ms | 0.1% → <0.1% |     5.3ms → 4.3ms |         1 |     5.3ms → 4.3ms |     5.3ms → 4.3ms | `GlobalsAA`                            |
|  -16.5% |  -0.77ms |        <0.1% |     4.7ms → 3.9ms |         3 |     1.6ms → 1.3ms |     2.0ms → 1.5ms | `InstSimplifyPass`                     |
|   -6.3% |  -0.73ms |         0.1% |   11.5ms → 10.7ms |        14 |             0.8ms |     1.2ms → 1.1ms | `BranchProbabilityAnalysis`            |
|   -1.5% |  -0.72ms |         0.5% |   49.0ms → 48.3ms |   46 → 47 |     1.1ms → 1.0ms |     3.4ms → 2.4ms | `SimplifyCFGPass`                      |
|  -49.8% |  -0.62ms |        <0.1% |     1.3ms → 0.6ms |     2 → 1 |             0.6ms |     0.7ms → 0.6ms | `IndVarSimplifyPass`                   |
|  -17.4% |  -0.56ms |        <0.1% |     3.2ms → 2.6ms |         1 |     3.2ms → 2.6ms |     3.2ms → 2.6ms | `RecomputeGlobalsAAPass`               |
| removed |  -0.53ms | <0.1% → 0.0% |       0.5ms → 0ms |     1 → 0 |       0.5ms → 0ms |       0.5ms → 0ms | `EliminateAvailableExternallyPass`     |
|   -5.4% |  -0.51ms |         0.1% |     9.3ms → 8.8ms |   21 → 22 |             0.4ms |     3.6ms → 3.3ms | `MemCpyOptPass`                        |

##### Compilation

|  Change |    Delta |            % |              Time |   Count |              Mean |               Max | Span                                |
| ------: | -------: | -----------: | ----------------: | ------: | ----------------: | ----------------: | ----------------------------------- |
|  -28.6% | -11.50ms |  0.4% → 0.3% |   40.2ms → 28.7ms |       2 |   20.1ms → 14.3ms |   25.3ms → 16.8ms | `GlobalDCEPass`                     |
|   -5.9% |  -5.96ms |  1.0% → 0.9% |  100.3ms → 94.4ms |       2 |   50.2ms → 47.2ms |   71.9ms → 65.5ms | `GlobalOptPass`                     |
|   -6.8% |  -5.78ms |  0.9% → 0.8% |   85.5ms → 79.7ms |       1 |   85.5ms → 79.7ms |   85.5ms → 79.7ms | `IPSCCPPass`                        |
|   -1.1% |  -4.53ms |  4.3% → 4.1% | 414.1ms → 409.6ms |       1 | 414.1ms → 409.6ms | 414.1ms → 409.6ms | `OptModule`                         |
|  -12.5% |  -2.18ms |         0.2% |   17.4ms → 15.2ms | 19 → 16 |     0.9ms → 1.0ms |     2.5ms → 2.3ms | `SROAPass`                          |
|   -8.8% |  -1.81ms |         0.2% |   20.5ms → 18.7ms | 15 → 14 |     1.4ms → 1.3ms |     4.1ms → 4.3ms | `CorrelatedValuePropagationPass`    |
|   -0.5% |  -1.50ms |  3.4% → 3.3% | 330.3ms → 328.8ms |       6 |   55.0ms → 54.8ms | 117.5ms → 119.0ms | `ModuleToFunctionPassAdaptor`       |
|   -1.7% |  -1.00ms |         0.6% |   59.3ms → 58.3ms |      48 |             1.2ms |             4.5ms | `MemorySSAAnalysis`                 |
|   -2.5% |  -0.98ms |         0.4% |   39.6ms → 38.6ms | 35 → 36 |             1.1ms |     3.7ms → 3.5ms | `JumpThreadingPass`                 |
| removed |  -0.98ms | <0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 |       1.0ms → 0ms |       1.0ms → 0ms | `LoopDeletionPass`                  |
|  -18.1% |  -0.96ms | 0.1% → <0.1% |     5.3ms → 4.3ms |       1 |     5.3ms → 4.3ms |     5.3ms → 4.3ms | `GlobalsAA`                         |
|  -16.5% |  -0.77ms |        <0.1% |     4.7ms → 3.9ms |       3 |     1.6ms → 1.3ms |     2.0ms → 1.5ms | `InstSimplifyPass`                  |
|   -6.3% |  -0.73ms |         0.1% |   11.5ms → 10.7ms |      14 |             0.8ms |     1.2ms → 1.1ms | `BranchProbabilityAnalysis`         |
|   -1.5% |  -0.72ms |         0.5% |   49.0ms → 48.3ms | 46 → 47 |     1.1ms → 1.0ms |     3.4ms → 2.4ms | `SimplifyCFGPass`                   |
|  -49.8% |  -0.62ms |        <0.1% |     1.3ms → 0.6ms |   2 → 1 |             0.6ms |     0.7ms → 0.6ms | `IndVarSimplifyPass`                |
|  -17.4% |  -0.56ms |        <0.1% |     3.2ms → 2.6ms |       1 |     3.2ms → 2.6ms |     3.2ms → 2.6ms | `RecomputeGlobalsAAPass`            |
| removed |  -0.53ms | <0.1% → 0.0% |       0.5ms → 0ms |   1 → 0 |       0.5ms → 0ms |       0.5ms → 0ms | `EliminateAvailableExternallyPass`  |
|   -5.4% |  -0.51ms |         0.1% |     9.3ms → 8.8ms | 21 → 22 |             0.4ms |     3.6ms → 3.3ms | `MemCpyOptPass`                     |
|   -6.2% |  -0.50ms |         0.1% |     8.1ms → 7.6ms |       1 |     8.1ms → 7.6ms |     8.1ms → 7.6ms | `ReversePostOrderFunctionAttrsPass` |
|   -4.9% |  -0.48ms |         0.1% |     9.7ms → 9.2ms |       2 |     4.9ms → 4.6ms |     6.6ms → 6.5ms | `LazyCallGraphAnalysis`             |

##### Parsing

| Change |   Delta |           % |              Time |     Count |  Mean |             Max | Span                                   |
| -----: | ------: | ----------: | ----------------: | --------: | ----: | --------------: | -------------------------------------- |
|  -2.2% | -3.84ms | 1.8% → 1.7% | 173.7ms → 169.9ms | 143 → 145 | 1.2ms |   5.6ms → 5.0ms | `ParseClass`                           |
|  -1.7% | -1.78ms | 1.1% → 1.0% | 103.2ms → 101.4ms | 206 → 207 | 0.5ms | 43.2ms → 41.5ms | `ParseDeclarationOrFunctionDefinition` |

#### Parents

Parent spans with the largest change in contribution to each span's self time.

##### `InstantiateFunction`

| Change |     Delta |             % |              Time |         Count |          Mean |             Max | Parent                         |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------: | --------------: | ------------------------------ |
| +18.6% | +124.09ms | 65.4% → 66.6% | 666.9ms → 791.0ms | 1,233 → 1,350 | 0.5ms → 0.6ms | 11.8ms → 15.7ms | `InstantiateFunction`          |
| +11.7% |  +39.24ms | 32.9% → 31.5% | 335.2ms → 374.4ms |     408 → 461 |         0.8ms | 13.3ms → 12.4ms | `PerformPendingInstantiations` |
| +84.8% |   +5.75ms |   0.7% → 1.1% |    6.8ms → 12.5ms |       43 → 46 | 0.2ms → 0.3ms |   0.6ms → 5.4ms | `InstantiateClass`             |
|  -9.2% |   -0.73ms |   0.8% → 0.6% |     7.9ms → 7.1ms |             7 | 1.1ms → 1.0ms |   2.6ms → 1.7ms | `ParseClass`                   |
|  -0.5% |   -0.01ms |   0.3% → 0.2% |             2.6ms |         5 → 4 | 0.5ms → 0.7ms |   0.8ms → 1.1ms | `ParseFunctionDefinition`      |

##### `PassManager<Function>`

| Change |    Delta |             % |              Time |     Count |          Mean |             Max | Parent                        |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | --------------: | ----------------------------- |
| +10.1% | +76.43ms | 76.0% → 75.6% | 755.9ms → 832.4ms | 593 → 641 |         1.3ms |   4.9ms → 5.4ms | `CGSCCToFunctionPassAdaptor`  |
| +12.8% | +30.46ms | 23.9% → 24.4% | 238.1ms → 268.5ms | 204 → 225 |         1.2ms |   3.1ms → 4.2ms | `ModuleToFunctionPassAdaptor` |
| +86.7% |  +0.01ms |         <0.1% |   15.0µs → 28.0µs |     2 → 3 | 7.5µs → 9.3µs | 13.0µs → 14.0µs | `FunctionToLoopPassAdaptor`   |

##### `ParseFunctionDefinition`

| Change |    Delta |             % |              Time |     Count |          Mean |             Max | Parent                                 |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | --------------: | -------------------------------------- |
|  +9.7% | +37.21ms | 93.1% → 94.2% | 385.3ms → 422.5ms | 132 → 135 | 2.9ms → 3.1ms | 29.5ms → 40.0ms | `ParseDeclarationOrFunctionDefinition` |
|  -9.1% |  -2.61ms |   6.9% → 5.8% |   28.7ms → 26.1ms |   30 → 28 | 1.0ms → 0.9ms |   2.7ms → 2.8ms | `Frontend`                             |

##### `ModuleToPostOrderCGSCCPassAdaptor`

| Change |    Delta |      % |              Time | Count |              Mean |               Max | Parent                     |
| -----: | -------: | -----: | ----------------: | ----: | ----------------: | ----------------: | -------------------------- |
|  +5.0% | +30.32ms | 100.0% | 602.9ms → 633.2ms |     1 | 602.9ms → 633.2ms | 602.9ms → 633.2ms | `ModuleInlinerWrapperPass` |

##### `OptFunction`

| Change |    Delta |      % |          Time |     Count |  Mean |             Max | Parent      |
| -----: | -------: | -----: | ------------: | --------: | ----: | --------------: | ----------- |
|  +2.0% | +21.84ms | 100.0% | 1.06s → 1.08s | 726 → 745 | 1.5ms | 12.2ms → 10.8ms | `OptModule` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

| Change |    Delta |      % |              Time |     Count |  Mean |   Max | Parent                  |
| -----: | -------: | -----: | ----------------: | --------: | ----: | ----: | ----------------------- |
|  +7.8% | +17.68ms | 100.0% | 226.8ms → 244.5ms | 758 → 821 | 0.3ms | 0.8ms | `DevirtSCCRepeatedPass` |

##### `CodeGen Function`

| Change |    Delta |      % |             Time |   Count |          Mean |           Max | Parent     |
| -----: | -------: | -----: | ---------------: | ------: | ------------: | ------------: | ---------- |
| +13.8% | +13.77ms | 100.0% | 99.7ms → 113.5ms | 73 → 75 | 1.4ms → 1.5ms | 6.7ms → 9.0ms | `Frontend` |

##### `Frontend`

| Change |    Delta |      % |              Time | Count |              Mean |               Max | Parent            |
| -----: | -------: | -----: | ----------------: | ----: | ----------------: | ----------------: | ----------------- |
|  +2.0% | +12.90ms | 100.0% | 637.5ms → 650.4ms |     2 | 318.7ms → 325.2ms | 444.6ms → 439.1ms | `ExecuteCompiler` |

##### `RunPass`

| Change |   Delta |      % |          Time |     Count |  Mean |               Max | Parent        |
| -----: | ------: | -----: | ------------: | --------: | ----: | ----------------: | ------------- |
|  +0.6% | +8.43ms | 100.0% | 1.51s → 1.52s | 830 → 836 | 1.8ms | 103.8ms → 102.1ms | `OptFunction` |

##### `GVNPass`

| Change |   Delta |      % |             Time |   Count |  Mean |             Max | Parent                  |
| -----: | ------: | -----: | ---------------: | ------: | ----: | --------------: | ----------------------- |
|  +7.2% | +7.20ms | 100.0% | 99.6ms → 106.8ms | 56 → 59 | 1.8ms | 10.7ms → 11.4ms | `PassManager<Function>` |

##### `InlinerPass`

| Change |   Delta |      % |              Time |     Count |          Mean |             Max | Parent                                                                                        |
| -----: | ------: | -----: | ----------------: | --------: | ------------: | --------------: | --------------------------------------------------------------------------------------------- |
|  +3.0% | +6.82ms | 100.0% | 230.5ms → 237.3ms | 122 → 135 | 1.9ms → 1.8ms | 21.0ms → 19.3ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `DeadArgumentEliminationPass`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Parent      |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | ----------- |
| +19.9% | +5.97ms | 100.0% | 30.0ms → 35.9ms |     1 | 30.0ms → 35.9ms | 30.0ms → 35.9ms | `Optimizer` |

##### `PerformPendingInstantiations`

| Change |   Delta |      % |              Time | Count |              Mean |               Max | Parent     |
| -----: | ------: | -----: | ----------------: | ----: | ----------------: | ----------------: | ---------- |
|  +4.7% | +5.04ms | 100.0% | 108.3ms → 113.3ms |     1 | 108.3ms → 113.3ms | 108.3ms → 113.3ms | `Frontend` |

##### `InstantiateClass`

|  Change |   Delta |             % |              Time |     Count |          Mean |            Max | Parent                    |
| ------: | ------: | ------------: | ----------------: | --------: | ------------: | -------------: | ------------------------- |
|   +5.8% | +6.95ms | 35.6% → 37.3% | 119.9ms → 126.9ms | 148 → 170 | 0.8ms → 0.7ms | 12.3ms → 5.0ms | `InstantiateFunction`     |
|  -15.7% | -3.77ms |   7.1% → 6.0% |   24.0ms → 20.3ms |   35 → 30 |         0.7ms |  1.9ms → 1.7ms | `ParseFunctionDefinition` |
| +294.4% | +2.46ms |   0.2% → 1.0% |     0.8ms → 3.3ms |     2 → 3 | 0.4ms → 1.1ms |  0.5ms → 2.4ms | `Frontend`                |
|   -7.1% | -1.94ms |   8.1% → 7.4% |   27.1ms → 25.2ms |   40 → 38 |         0.7ms |  1.2ms → 1.5ms | `ParseClass`              |
|   +0.5% | +0.82ms | 48.7% → 48.4% | 164.0ms → 164.8ms | 195 → 210 |         0.8ms |  5.1ms → 2.4ms | `InstantiateClass`        |

##### `InstCombinePass`

| Change |   Delta |      % |              Time |     Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | ----------------: | --------: | ------------: | ------------: | ----------------------- |
|  +1.1% | +3.54ms | 100.0% | 311.7ms → 315.2ms | 250 → 251 | 1.2ms → 1.3ms | 8.0ms → 7.2ms | `PassManager<Function>` |

##### `LoopFullUnrollPass`

| Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent                                                                                |
| -----: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ------------------------------------------------------------------------------------- |
|    new | +3.46ms | 0.0% → 100.0% | 0ms → 3.5ms | 0 → 1 | 0ms → 3.5ms | 0ms → 3.5ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>` |

##### `DSEPass`

| Change |   Delta |      % |            Time |   Count |          Mean |             Max | Parent                  |
| -----: | ------: | -----: | --------------: | ------: | ------------: | --------------: | ----------------------- |
|  +5.1% | +3.37ms | 100.0% | 66.0ms → 69.4ms | 42 → 48 | 1.6ms → 1.4ms | 16.6ms → 16.5ms | `PassManager<Function>` |

##### `BlockFrequencyAnalysis`

| Change |   Delta |             % |          Time |   Count |  Mean |           Max | Parent              |
| -----: | ------: | ------------: | ------------: | ------: | ----: | ------------: | ------------------- |
| +68.3% | +1.48ms | 43.3% → 46.9% | 2.2ms → 3.6ms |  6 → 10 | 0.4ms |         0.6ms | `InlinerPass`       |
| +45.5% | +1.29ms | 56.7% → 53.1% | 2.8ms → 4.1ms | 11 → 12 | 0.3ms | 0.5ms → 0.6ms | `AlwaysInlinerPass` |

##### `Backend`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent            |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------- |
| +45.1% | +2.09ms | 100.0% | 4.6ms → 6.7ms |     1 | 4.6ms → 6.7ms | 4.6ms → 6.7ms | `ExecuteCompiler` |

##### `ADCEPass`

| Change |   Delta |      % |            Time |   Count |  Mean |           Max | Parent                  |
| -----: | ------: | -----: | --------------: | ------: | ----: | ------------: | ----------------------- |
| +10.6% | +2.04ms | 100.0% | 19.1ms → 21.2ms | 17 → 20 | 1.1ms | 3.0ms → 3.6ms | `PassManager<Function>` |

##### `GlobalDCEPass`

| Change |    Delta |      % |            Time | Count |            Mean |             Max | Parent      |
| -----: | -------: | -----: | --------------: | ----: | --------------: | --------------: | ----------- |
| -28.6% | -11.50ms | 100.0% | 40.2ms → 28.7ms |     2 | 20.1ms → 14.3ms | 25.3ms → 16.8ms | `Optimizer` |

##### `GlobalOptPass`

| Change |   Delta |      % |             Time | Count |            Mean |             Max | Parent      |
| -----: | ------: | -----: | ---------------: | ----: | --------------: | --------------: | ----------- |
|  -5.9% | -5.96ms | 100.0% | 100.3ms → 94.4ms |     2 | 50.2ms → 47.2ms | 71.9ms → 65.5ms | `Optimizer` |

##### `IPSCCPPass`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Parent      |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | ----------- |
|  -6.8% | -5.78ms | 100.0% | 85.5ms → 79.7ms |     1 | 85.5ms → 79.7ms | 85.5ms → 79.7ms | `Optimizer` |

##### `OptModule`

| Change |   Delta |      % |              Time | Count |              Mean |               Max | Parent          |
| -----: | ------: | -----: | ----------------: | ----: | ----------------: | ----------------: | --------------- |
|  -1.1% | -4.53ms | 100.0% | 414.1ms → 409.6ms |     1 | 414.1ms → 409.6ms | 414.1ms → 409.6ms | `CodeGenPasses` |

##### `ParseClass`

| Change |   Delta |             % |              Time |   Count |          Mean |           Max | Parent                                 |
| -----: | ------: | ------------: | ----------------: | ------: | ------------: | ------------: | -------------------------------------- |
|  -1.9% | -2.30ms | 68.1% → 68.2% | 118.2ms → 115.9ms | 92 → 96 | 1.3ms → 1.2ms | 5.6ms → 5.0ms | `Frontend`                             |
|  -2.8% | -1.54ms | 31.9% → 31.8% |   55.5ms → 53.9ms | 51 → 49 |         1.1ms |         4.4ms | `ParseDeclarationOrFunctionDefinition` |

##### `SROAPass`

| Change |   Delta |      % |            Time |   Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | --------------: | ------: | ------------: | ------------: | ----------------------- |
| -12.5% | -2.18ms | 100.0% | 17.4ms → 15.2ms | 19 → 16 | 0.9ms → 1.0ms | 2.5ms → 2.3ms | `PassManager<Function>` |

##### `CorrelatedValuePropagationPass`

| Change |   Delta |      % |            Time |   Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | --------------: | ------: | ------------: | ------------: | ----------------------- |
|  -8.8% | -1.81ms | 100.0% | 20.5ms → 18.7ms | 15 → 14 | 1.4ms → 1.3ms | 4.1ms → 4.3ms | `PassManager<Function>` |

##### `ParseDeclarationOrFunctionDefinition`

| Change |   Delta |             % |            Time |     Count |          Mean |             Max | Parent                                 |
| -----: | ------: | ------------: | --------------: | --------: | ------------: | --------------: | -------------------------------------- |
|  -1.3% | -1.25ms | 94.6% → 95.0% | 97.6ms → 96.4ms | 203 → 204 |         0.5ms | 43.2ms → 41.5ms | `Frontend`                             |
|  -9.6% | -0.53ms |   5.4% → 5.0% |   5.6ms → 5.0ms |         3 | 1.9ms → 1.7ms |   3.3ms → 2.7ms | `ParseDeclarationOrFunctionDefinition` |

##### `ModuleToFunctionPassAdaptor`

| Change |   Delta |             % |              Time | Count |            Mean |               Max | Parent                     |
| -----: | ------: | ------------: | ----------------: | ----: | --------------: | ----------------: | -------------------------- |
|  -0.6% | -2.00ms | 96.8% → 96.6% | 319.6ms → 317.6ms |     4 | 79.9ms → 79.4ms | 117.5ms → 119.0ms | `Optimizer`                |
|  +4.7% | +0.50ms |   3.2% → 3.4% |   10.6ms → 11.1ms |     2 |   5.3ms → 5.6ms |     7.2ms → 7.3ms | `ModuleInlinerWrapperPass` |

##### `MemorySSAAnalysis`

| Change |   Delta |             % |            Time |   Count |  Mean |           Max | Parent                      |
| -----: | ------: | ------------: | --------------: | ------: | ----: | ------------: | --------------------------- |
| -11.1% | -1.77ms | 26.9% → 24.3% | 15.9ms → 14.2ms |   9 → 8 | 1.8ms | 4.0ms → 3.4ms | `FunctionToLoopPassAdaptor` |
|  +3.5% | +0.70ms | 33.4% → 35.1% | 19.8ms → 20.5ms | 18 → 19 | 1.1ms | 4.0ms → 4.5ms | `MemCpyOptPass`             |
|  +0.3% | +0.07ms | 39.7% → 40.5% |          23.6ms |      21 | 1.1ms | 4.5ms → 4.2ms | `EarlyCSEPass`              |

##### `JumpThreadingPass`

| Change |   Delta |      % |            Time |   Count |  Mean |           Max | Parent                  |
| -----: | ------: | -----: | --------------: | ------: | ----: | ------------: | ----------------------- |
|  -2.5% | -0.98ms | 100.0% | 39.6ms → 38.6ms | 35 → 36 | 1.1ms | 3.7ms → 3.5ms | `PassManager<Function>` |

##### `LoopDeletionPass`

|  Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent                                                                                |
| ------: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ------------------------------------------------------------------------------------- |
| removed | -0.98ms | 100.0% → 0.0% | 1.0ms → 0ms | 1 → 0 | 1.0ms → 0ms | 1.0ms → 0ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>` |

##### `GlobalsAA`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                                                                              |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------------------------------------------------------------------------- |
| -18.1% | -0.96ms | 100.0% | 5.3ms → 4.3ms |     1 | 5.3ms → 4.3ms | 5.3ms → 4.3ms | `RequireAnalysisPass<llvm::GlobalsAA, llvm::Module, llvm::AnalysisManager<Module>>` |

##### `InstSimplifyPass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------------- |
| -16.5% | -0.77ms | 100.0% | 4.7ms → 3.9ms |     3 | 1.6ms → 1.3ms | 2.0ms → 1.5ms | `PassManager<Function>` |

##### `BranchProbabilityAnalysis`

| Change |   Delta |      % |            Time | Count |  Mean |           Max | Parent                   |
| -----: | ------: | -----: | --------------: | ----: | ----: | ------------: | ------------------------ |
|  -6.3% | -0.73ms | 100.0% | 11.5ms → 10.7ms |    14 | 0.8ms | 1.2ms → 1.1ms | `BlockFrequencyAnalysis` |

##### `SimplifyCFGPass`

| Change |   Delta |      % |            Time |   Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | --------------: | ------: | ------------: | ------------: | ----------------------- |
|  -1.5% | -0.72ms | 100.0% | 49.0ms → 48.3ms | 46 → 47 | 1.1ms → 1.0ms | 3.4ms → 2.4ms | `PassManager<Function>` |

##### `IndVarSimplifyPass`

| Change |   Delta |      % |          Time | Count |  Mean |           Max | Parent                                                                                |
| -----: | ------: | -----: | ------------: | ----: | ----: | ------------: | ------------------------------------------------------------------------------------- |
| -49.8% | -0.62ms | 100.0% | 1.3ms → 0.6ms | 2 → 1 | 0.6ms | 0.7ms → 0.6ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>` |

##### `RecomputeGlobalsAAPass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent      |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------- |
| -17.4% | -0.56ms | 100.0% | 3.2ms → 2.6ms |     1 | 3.2ms → 2.6ms | 3.2ms → 2.6ms | `Optimizer` |

##### `EliminateAvailableExternallyPass`

|  Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent      |
| ------: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ----------- |
| removed | -0.53ms | 100.0% → 0.0% | 0.5ms → 0ms | 1 → 0 | 0.5ms → 0ms | 0.5ms → 0ms | `Optimizer` |

##### `MemCpyOptPass`

| Change |   Delta |      % |          Time |   Count |  Mean |           Max | Parent                  |
| -----: | ------: | -----: | ------------: | ------: | ----: | ------------: | ----------------------- |
|  -5.4% | -0.51ms | 100.0% | 9.3ms → 8.8ms | 21 → 22 | 0.4ms | 3.6ms → 3.3ms | `PassManager<Function>` |

##### `ReversePostOrderFunctionAttrsPass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent      |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------- |
|  -6.2% | -0.50ms | 100.0% | 8.1ms → 7.6ms |     1 | 8.1ms → 7.6ms | 8.1ms → 7.6ms | `Optimizer` |

##### `LazyCallGraphAnalysis`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Parent                                                    |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------------------------------------------------------- |
| -11.1% | -0.34ms | 31.7% → 29.6% | 3.1ms → 2.7ms |     1 | 3.1ms → 2.7ms | 3.1ms → 2.7ms | `ReversePostOrderFunctionAttrsPass`                       |
|  -2.0% | -0.14ms | 68.3% → 70.4% | 6.6ms → 6.5ms |     1 | 6.6ms → 6.5ms | 6.6ms → 6.5ms | `InnerAnalysisManagerProxy<CGSCCAnalysisManager, Module>` |

### Total time

#### Regressions

Thread spans with the largest increase in time, including child spans. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |              Time |         Count |              Mean |               Max | Span                                                                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | ----------------: | ----------------: | --------------------------------------------------------------------------------------------- |
|  +4.5% | +433.34ms |        100.0% |    9.61s → 10.04s |             1 |    9.61s → 10.04s |    9.61s → 10.04s | `ExecuteCompiler`                                                                             |
|  +8.1% | +232.95ms | 30.1% → 31.1% |     2.89s → 3.12s |             2 |     1.44s → 1.56s |     2.69s → 2.90s | `Frontend`                                                                                    |
|  +3.0% | +198.36ms | 69.7% → 68.7% |     6.70s → 6.90s |             1 |     6.70s → 6.90s |     6.70s → 6.90s | `Backend`                                                                                     |
| +14.1% | +183.13ms | 13.5% → 14.8% |     1.30s → 1.48s |             1 |     1.30s → 1.48s |     1.30s → 1.48s | `PerformPendingInstantiations`                                                                |
| +14.8% | +182.07ms | 12.8% → 14.1% |     1.23s → 1.41s | 1,696 → 1,868 |     2.7ms → 2.9ms |   34.0ms → 36.8ms | `InstantiateFunction`                                                                         |
|  +4.6% | +169.50ms |         38.5% |     3.70s → 3.87s |             1 |     3.70s → 3.87s |     3.70s → 3.87s | `Optimizer`                                                                                   |
|  +5.9% | +149.39ms | 26.4% → 26.7% |     2.53s → 2.68s |             1 |     2.53s → 2.68s |     2.53s → 2.68s | `ModuleInlinerWrapperPass`                                                                    |
|  +6.0% | +149.17ms | 26.0% → 26.3% |     2.49s → 2.64s |             1 |     2.49s → 2.64s |     2.49s → 2.64s | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  +6.9% | +128.35ms | 19.3% → 19.7% |     1.85s → 1.97s |     799 → 869 |             2.3ms | 113.2ms → 110.2ms | `PassManager<Function>`                                                                       |
|  +6.3% | +118.99ms | 19.6% → 20.0% |        1.88s → 2s |     759 → 821 |     2.5ms → 2.4ms | 138.0ms → 134.6ms | `DevirtSCCRepeatedPass`                                                                       |
|  +6.3% | +118.49ms | 19.6% → 19.9% |     1.88s → 1.99s |     758 → 821 |     2.5ms → 2.4ms | 137.9ms → 134.4ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  +6.5% |  +92.22ms | 14.7% → 14.9% |     1.40s → 1.50s |     594 → 643 |     2.4ms → 2.3ms | 114.3ms → 112.0ms | `CGSCCToFunctionPassAdaptor`                                                                  |
|  +4.6% |  +35.62ms |          8.1% | 781.7ms → 817.4ms |             6 | 130.3ms → 136.2ms | 515.2ms → 553.1ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  +6.6% |  +31.28ms |   4.9% → 5.0% | 470.6ms → 501.9ms |     162 → 163 |     2.9ms → 3.1ms |   29.5ms → 40.0ms | `ParseFunctionDefinition`                                                                     |
|  +1.2% |  +30.96ms | 26.8% → 26.0% |     2.58s → 2.61s |     726 → 745 |     3.6ms → 3.5ms | 243.1ms → 235.8ms | `OptFunction`                                                                                 |
|  +0.9% |  +26.76ms | 31.2% → 30.1% |     2.99s → 3.02s |             1 |     2.99s → 3.02s |     2.99s → 3.02s | `CodeGenPasses`                                                                               |
|  +0.9% |  +26.44ms | 31.1% → 30.1% |     2.99s → 3.02s |             1 |     2.99s → 3.02s |     2.99s → 3.02s | `OptModule`                                                                                   |
|  +3.9% |  +26.18ms |          7.0% | 672.3ms → 698.5ms |     206 → 207 |     3.3ms → 3.4ms |   48.1ms → 46.2ms | `ParseDeclarationOrFunctionDefinition`                                                        |
| +13.8% |  +13.77ms |   1.0% → 1.1% |  99.7ms → 113.5ms |       73 → 75 |     1.4ms → 1.5ms |     6.7ms → 9.0ms | `CodeGen Function`                                                                            |
|  +2.8% |   +9.55ms |   3.6% → 3.5% | 344.0ms → 353.5ms |     421 → 451 |     1.9ms → 1.8ms |   12.3ms → 10.0ms | `InstantiateClass`                                                                            |

##### Compilation

| Change |     Delta |             % |              Time |         Count |              Mean |               Max | Span                                                                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | ----------------: | ----------------: | --------------------------------------------------------------------------------------------- |
|  +4.5% | +433.34ms |        100.0% |    9.61s → 10.04s |             1 |    9.61s → 10.04s |    9.61s → 10.04s | `ExecuteCompiler`                                                                             |
|  +8.1% | +232.95ms | 30.1% → 31.1% |     2.89s → 3.12s |             2 |     1.44s → 1.56s |     2.69s → 2.90s | `Frontend`                                                                                    |
|  +3.0% | +198.36ms | 69.7% → 68.7% |     6.70s → 6.90s |             1 |     6.70s → 6.90s |     6.70s → 6.90s | `Backend`                                                                                     |
| +14.1% | +183.13ms | 13.5% → 14.8% |     1.30s → 1.48s |             1 |     1.30s → 1.48s |     1.30s → 1.48s | `PerformPendingInstantiations`                                                                |
| +14.8% | +182.07ms | 12.8% → 14.1% |     1.23s → 1.41s | 1,696 → 1,868 |     2.7ms → 2.9ms |   34.0ms → 36.8ms | `InstantiateFunction`                                                                         |
|  +4.6% | +169.50ms |         38.5% |     3.70s → 3.87s |             1 |     3.70s → 3.87s |     3.70s → 3.87s | `Optimizer`                                                                                   |
|  +5.9% | +149.39ms | 26.4% → 26.7% |     2.53s → 2.68s |             1 |     2.53s → 2.68s |     2.53s → 2.68s | `ModuleInlinerWrapperPass`                                                                    |
|  +6.0% | +149.17ms | 26.0% → 26.3% |     2.49s → 2.64s |             1 |     2.49s → 2.64s |     2.49s → 2.64s | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  +6.9% | +128.35ms | 19.3% → 19.7% |     1.85s → 1.97s |     799 → 869 |             2.3ms | 113.2ms → 110.2ms | `PassManager<Function>`                                                                       |
|  +6.3% | +118.99ms | 19.6% → 20.0% |        1.88s → 2s |     759 → 821 |     2.5ms → 2.4ms | 138.0ms → 134.6ms | `DevirtSCCRepeatedPass`                                                                       |
|  +6.3% | +118.49ms | 19.6% → 19.9% |     1.88s → 1.99s |     758 → 821 |     2.5ms → 2.4ms | 137.9ms → 134.4ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  +6.5% |  +92.22ms | 14.7% → 14.9% |     1.40s → 1.50s |     594 → 643 |     2.4ms → 2.3ms | 114.3ms → 112.0ms | `CGSCCToFunctionPassAdaptor`                                                                  |
|  +4.6% |  +35.62ms |          8.1% | 781.7ms → 817.4ms |             6 | 130.3ms → 136.2ms | 515.2ms → 553.1ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  +1.2% |  +30.96ms | 26.8% → 26.0% |     2.58s → 2.61s |     726 → 745 |     3.6ms → 3.5ms | 243.1ms → 235.8ms | `OptFunction`                                                                                 |
|  +0.9% |  +26.76ms | 31.2% → 30.1% |     2.99s → 3.02s |             1 |     2.99s → 3.02s |     2.99s → 3.02s | `CodeGenPasses`                                                                               |
|  +0.9% |  +26.44ms | 31.1% → 30.1% |     2.99s → 3.02s |             1 |     2.99s → 3.02s |     2.99s → 3.02s | `OptModule`                                                                                   |
| +13.8% |  +13.77ms |   1.0% → 1.1% |  99.7ms → 113.5ms |       73 → 75 |     1.4ms → 1.5ms |     6.7ms → 9.0ms | `CodeGen Function`                                                                            |
|  +2.8% |   +9.55ms |   3.6% → 3.5% | 344.0ms → 353.5ms |     421 → 451 |     1.9ms → 1.8ms |   12.3ms → 10.0ms | `InstantiateClass`                                                                            |
|  +0.6% |   +9.12ms | 15.7% → 15.2% |     1.51s → 1.52s |     830 → 836 |             1.8ms | 103.8ms → 102.1ms | `RunPass`                                                                                     |
|  +3.6% |   +8.51ms |          2.5% | 238.3ms → 246.8ms |     122 → 135 |     2.0ms → 1.8ms |   21.0ms → 19.3ms | `InlinerPass`                                                                                 |

##### Parsing

| Change |    Delta |           % |              Time |     Count |          Mean |             Max | Span                                   |
| -----: | -------: | ----------: | ----------------: | --------: | ------------: | --------------: | -------------------------------------- |
|  +6.6% | +31.28ms | 4.9% → 5.0% | 470.6ms → 501.9ms | 162 → 163 | 2.9ms → 3.1ms | 29.5ms → 40.0ms | `ParseFunctionDefinition`              |
|  +3.9% | +26.18ms |        7.0% | 672.3ms → 698.5ms | 206 → 207 | 3.3ms → 3.4ms | 48.1ms → 46.2ms | `ParseDeclarationOrFunctionDefinition` |

#### Improvements

Thread spans with the largest decrease in time, including child spans. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |            % |              Time |     Count |            Mean |             Max | Span                                                                                |
| ------: | -------: | -----------: | ----------------: | --------: | --------------: | --------------: | ----------------------------------------------------------------------------------- |
|  -28.6% | -11.50ms |  0.4% → 0.3% |   40.2ms → 28.7ms |         2 | 20.1ms → 14.3ms | 25.3ms → 16.8ms | `GlobalDCEPass`                                                                     |
|   -2.9% |  -7.94ms |  2.8% → 2.6% | 273.1ms → 265.2ms | 143 → 145 |   1.9ms → 1.8ms | 11.3ms → 10.3ms | `ParseClass`                                                                        |
|   -7.4% |  -6.39ms |  0.9% → 0.8% |   86.1ms → 79.7ms |         1 | 86.1ms → 79.7ms | 86.1ms → 79.7ms | `IPSCCPPass`                                                                        |
|   -5.9% |  -5.96ms |  1.0% → 0.9% |  100.3ms → 94.4ms |         2 | 50.2ms → 47.2ms | 71.9ms → 65.5ms | `GlobalOptPass`                                                                     |
|   -8.8% |  -1.81ms |         0.2% |   20.5ms → 18.7ms |   15 → 14 |   1.4ms → 1.3ms |   4.1ms → 4.3ms | `CorrelatedValuePropagationPass`                                                    |
|   -5.1% |  -1.02ms |         0.2% |   20.2ms → 19.2ms |   19 → 16 |   1.1ms → 1.2ms |   2.5ms → 2.3ms | `SROAPass`                                                                          |
|   -1.7% |  -1.00ms |         0.6% |   59.3ms → 58.3ms |        48 |           1.2ms |           4.5ms | `MemorySSAAnalysis`                                                                 |
|   -2.5% |  -0.98ms |         0.4% |   39.6ms → 38.6ms |   35 → 36 |           1.1ms |   3.7ms → 3.5ms | `JumpThreadingPass`                                                                 |
| removed |  -0.98ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 |     1.0ms → 0ms |     1.0ms → 0ms | `LoopDeletionPass`                                                                  |
|   -7.5% |  -0.84ms |         0.1% |   11.2ms → 10.3ms |         1 | 11.2ms → 10.3ms | 11.2ms → 10.3ms | `ReversePostOrderFunctionAttrsPass`                                                 |
|  -16.5% |  -0.77ms |        <0.1% |     4.7ms → 3.9ms |         3 |   1.6ms → 1.3ms |   2.0ms → 1.5ms | `InstSimplifyPass`                                                                  |
|  -49.8% |  -0.62ms |        <0.1% |     1.3ms → 0.6ms |     2 → 1 |           0.6ms |   0.7ms → 0.6ms | `IndVarSimplifyPass`                                                                |
|   -3.9% |  -0.56ms |         0.1% |   14.4ms → 13.8ms |        14 |           1.0ms |   1.9ms → 2.0ms | `BranchProbabilityAnalysis`                                                         |
| removed |  -0.53ms | <0.1% → 0.0% |       0.5ms → 0ms |     1 → 0 |     0.5ms → 0ms |     0.5ms → 0ms | `EliminateAvailableExternallyPass`                                                  |
|   -4.9% |  -0.48ms |         0.1% |     9.7ms → 9.2ms |         2 |   4.9ms → 4.6ms |   6.6ms → 6.5ms | `LazyCallGraphAnalysis`                                                             |
|   -7.3% |  -0.46ms |         0.1% |     6.3ms → 5.8ms |         5 |   1.3ms → 1.2ms |   2.8ms → 2.2ms | `ReassociatePass`                                                                   |
|  -31.8% |  -0.44ms |        <0.1% |     1.4ms → 1.0ms |     2 → 1 |   0.7ms → 1.0ms |   0.8ms → 1.0ms | `AAManager`                                                                         |
|  -31.7% |  -0.44ms |        <0.1% |     1.4ms → 0.9ms |     2 → 1 |   0.7ms → 0.9ms |   0.8ms → 0.9ms | `BasicAA`                                                                           |
|   -0.4% |  -0.21ms |         0.5% |   49.0ms → 48.8ms |   46 → 47 |   1.1ms → 1.0ms |   3.4ms → 2.4ms | `SimplifyCFGPass`                                                                   |
|   -0.8% |  -0.16ms |         0.2% |   20.8ms → 20.7ms |         1 | 20.8ms → 20.7ms | 20.8ms → 20.7ms | `RequireAnalysisPass<llvm::GlobalsAA, llvm::Module, llvm::AnalysisManager<Module>>` |

##### Compilation

|  Change |    Delta |            % |             Time |   Count |            Mean |             Max | Span                                                                                |
| ------: | -------: | -----------: | ---------------: | ------: | --------------: | --------------: | ----------------------------------------------------------------------------------- |
|  -28.6% | -11.50ms |  0.4% → 0.3% |  40.2ms → 28.7ms |       2 | 20.1ms → 14.3ms | 25.3ms → 16.8ms | `GlobalDCEPass`                                                                     |
|   -7.4% |  -6.39ms |  0.9% → 0.8% |  86.1ms → 79.7ms |       1 | 86.1ms → 79.7ms | 86.1ms → 79.7ms | `IPSCCPPass`                                                                        |
|   -5.9% |  -5.96ms |  1.0% → 0.9% | 100.3ms → 94.4ms |       2 | 50.2ms → 47.2ms | 71.9ms → 65.5ms | `GlobalOptPass`                                                                     |
|   -8.8% |  -1.81ms |         0.2% |  20.5ms → 18.7ms | 15 → 14 |   1.4ms → 1.3ms |   4.1ms → 4.3ms | `CorrelatedValuePropagationPass`                                                    |
|   -5.1% |  -1.02ms |         0.2% |  20.2ms → 19.2ms | 19 → 16 |   1.1ms → 1.2ms |   2.5ms → 2.3ms | `SROAPass`                                                                          |
|   -1.7% |  -1.00ms |         0.6% |  59.3ms → 58.3ms |      48 |           1.2ms |           4.5ms | `MemorySSAAnalysis`                                                                 |
|   -2.5% |  -0.98ms |         0.4% |  39.6ms → 38.6ms | 35 → 36 |           1.1ms |   3.7ms → 3.5ms | `JumpThreadingPass`                                                                 |
| removed |  -0.98ms | <0.1% → 0.0% |      1.0ms → 0ms |   1 → 0 |     1.0ms → 0ms |     1.0ms → 0ms | `LoopDeletionPass`                                                                  |
|   -7.5% |  -0.84ms |         0.1% |  11.2ms → 10.3ms |       1 | 11.2ms → 10.3ms | 11.2ms → 10.3ms | `ReversePostOrderFunctionAttrsPass`                                                 |
|  -16.5% |  -0.77ms |        <0.1% |    4.7ms → 3.9ms |       3 |   1.6ms → 1.3ms |   2.0ms → 1.5ms | `InstSimplifyPass`                                                                  |
|  -49.8% |  -0.62ms |        <0.1% |    1.3ms → 0.6ms |   2 → 1 |           0.6ms |   0.7ms → 0.6ms | `IndVarSimplifyPass`                                                                |
|   -3.9% |  -0.56ms |         0.1% |  14.4ms → 13.8ms |      14 |           1.0ms |   1.9ms → 2.0ms | `BranchProbabilityAnalysis`                                                         |
| removed |  -0.53ms | <0.1% → 0.0% |      0.5ms → 0ms |   1 → 0 |     0.5ms → 0ms |     0.5ms → 0ms | `EliminateAvailableExternallyPass`                                                  |
|   -4.9% |  -0.48ms |         0.1% |    9.7ms → 9.2ms |       2 |   4.9ms → 4.6ms |   6.6ms → 6.5ms | `LazyCallGraphAnalysis`                                                             |
|   -7.3% |  -0.46ms |         0.1% |    6.3ms → 5.8ms |       5 |   1.3ms → 1.2ms |   2.8ms → 2.2ms | `ReassociatePass`                                                                   |
|  -31.8% |  -0.44ms |        <0.1% |    1.4ms → 1.0ms |   2 → 1 |   0.7ms → 1.0ms |   0.8ms → 1.0ms | `AAManager`                                                                         |
|  -31.7% |  -0.44ms |        <0.1% |    1.4ms → 0.9ms |   2 → 1 |   0.7ms → 0.9ms |   0.8ms → 0.9ms | `BasicAA`                                                                           |
|   -0.4% |  -0.21ms |         0.5% |  49.0ms → 48.8ms | 46 → 47 |   1.1ms → 1.0ms |   3.4ms → 2.4ms | `SimplifyCFGPass`                                                                   |
|   -0.8% |  -0.16ms |         0.2% |  20.8ms → 20.7ms |       1 | 20.8ms → 20.7ms | 20.8ms → 20.7ms | `RequireAnalysisPass<llvm::GlobalsAA, llvm::Module, llvm::AnalysisManager<Module>>` |
|   -4.6% |  -0.16ms |        <0.1% |    3.5ms → 3.3ms |       1 |   3.5ms → 3.3ms |   3.5ms → 3.3ms | `AssignmentTrackingPass`                                                            |

##### Parsing

| Change |   Delta |           % |              Time |     Count |          Mean |             Max | Span         |
| -----: | ------: | ----------: | ----------------: | --------: | ------------: | --------------: | ------------ |
|  -2.9% | -7.94ms | 2.8% → 2.6% | 273.1ms → 265.2ms | 143 → 145 | 1.9ms → 1.8ms | 11.3ms → 10.3ms | `ParseClass` |

#### Attribute values

Attribute values with the largest change in contribution to each span's total time.

##### `InstantiateFunction`

|  Change |    Delta |           % |         Time | Count |         Mean |          Max | Attribute | Value                                                                                                                             |
| ------: | -------: | ----------: | -----------: | ----: | -----------: | -----------: | --------- | --------------------------------------------------------------------------------------------------------------------------------- |
|     new | +35.20ms | 0.0% → 0.6% | 0ms → 35.2ms | 0 → 1 | 0ms → 35.2ms | 0ms → 35.2ms | `detail`  | `fmt::nested_formatter<double>::write_padded<fmt::context, (lambda at /src/fmt/test/format-test.cc:1992:30)>`                     |
| removed | -34.05ms | 0.7% → 0.0% | 34.0ms → 0ms | 1 → 0 | 34.0ms → 0ms | 34.0ms → 0ms | `detail`  | `fmt::nested_formatter<double>::write_padded<fmt::context, (lambda at /src/fmt/test/format-test.cc:1894:30)>`                     |
|     new | +28.45ms | 0.0% → 0.5% | 0ms → 28.4ms | 0 → 1 | 0ms → 28.4ms | 0ms → 28.4ms | `detail`  | `fmt::detail::value<fmt::context>::format_custom<fmt::nested_view<double, char>>`                                                 |
| removed | -27.43ms | 0.6% → 0.0% | 27.4ms → 0ms | 1 → 0 | 27.4ms → 0ms | 27.4ms → 0ms | `detail`  | `fmt::detail::value<fmt::context>::format_custom<fmt::nested_view<double, char>, fmt::formatter<fmt::nested_view<double, char>>>` |
| removed | -25.23ms | 0.6% → 0.0% | 25.2ms → 0ms | 1 → 0 | 25.2ms → 0ms | 25.2ms → 0ms | `detail`  | `fmt::detail::write_float<char, fmt::basic_appender<char>, double>`                                                               |

##### `ModuleInlinerWrapperPass`

| Change |     Delta |      % |          Time | Count |          Mean |           Max | Attribute | Value      |
| -----: | --------: | -----: | ------------: | ----: | ------------: | ------------: | --------- | ---------- |
|  +5.9% | +149.39ms | 100.0% | 2.53s → 2.68s |     1 | 2.53s → 2.68s | 2.53s → 2.68s | `detail`  | `[module]` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

| Change |     Delta |      % |          Time | Count |          Mean |           Max | Attribute | Value      |
| -----: | --------: | -----: | ------------: | ----: | ------------: | ------------: | --------- | ---------- |
|  +6.0% | +149.17ms | 100.0% | 2.49s → 2.64s |     1 | 2.49s → 2.64s | 2.49s → 2.64s | `detail`  | `[module]` |

##### `PassManager<Function>`

|  Change |    Delta |           % |         Time | Count |         Mean |          Max | Attribute | Value                                                                            |
| ------: | -------: | ----------: | -----------: | ----: | -----------: | -----------: | --------- | -------------------------------------------------------------------------------- |
|     new | +45.30ms | 0.0% → 2.3% | 0ms → 45.3ms | 0 → 2 | 0ms → 22.6ms | 0ms → 27.5ms | `detail`  | `_ZN3fmt3v126detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi`        |
| removed | -38.60ms | 2.1% → 0.0% | 38.6ms → 0ms | 2 → 0 | 19.3ms → 0ms | 23.7ms → 0ms | `detail`  | `_ZN3fmt3v116detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi`        |
|     new | +17.49ms | 0.0% → 0.9% | 0ms → 17.5ms | 0 → 3 |  0ms → 5.8ms | 0ms → 12.5ms | `detail`  | `_ZN35format_test_debug_presentation_Test8TestBodyEv`                            |
|     new | +14.54ms | 0.0% → 0.7% | 0ms → 14.5ms | 0 → 2 |  0ms → 7.3ms | 0ms → 10.1ms | `detail`  | `_ZN3fmt3v126detail12format_floatIdEEiT_iRKNS0_12format_specsEbRNS1_6bufferIcEE` |
| removed | -12.58ms | 0.7% → 0.0% | 12.6ms → 0ms | 3 → 0 |  4.2ms → 0ms |  8.1ms → 0ms | `detail`  | `_ZN3fmt3v116detail12format_floatIdEEiT_iRKNS0_12format_specsEbRNS1_6bufferIcEE` |

##### `DevirtSCCRepeatedPass`

|  Change |    Delta |           % |            Time | Count |            Mean |             Max | Attribute | Value                                                                              |
| ------: | -------: | ----------: | --------------: | ----: | --------------: | --------------: | --------- | ---------------------------------------------------------------------------------- |
|     new | +30.55ms | 0.0% → 1.5% |    0ms → 30.6ms | 0 → 1 |    0ms → 30.6ms |    0ms → 30.6ms | `detail`  | `(_ZN3fmt3v126detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi)`        |
| removed | -26.80ms | 1.4% → 0.0% |    26.8ms → 0ms | 1 → 0 |    26.8ms → 0ms |    26.8ms → 0ms | `detail`  | `(_ZN3fmt3v116detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi)`        |
|     new | +15.75ms | 0.0% → 0.8% |    0ms → 15.8ms | 0 → 1 |    0ms → 15.8ms |    0ms → 15.8ms | `detail`  | `(_ZN35format_test_debug_presentation_Test8TestBodyEv)`                            |
|     new | +11.59ms | 0.0% → 0.6% |    0ms → 11.6ms | 0 → 1 |    0ms → 11.6ms |    0ms → 11.6ms | `detail`  | `(_ZN3fmt3v126detail12format_floatIdEEiT_iRKNS0_12format_specsEbRNS1_6bufferIcEE)` |
|  +12.3% |  +9.83ms | 4.2% → 4.5% | 79.9ms → 89.8ms |     1 | 79.9ms → 89.8ms | 79.9ms → 89.8ms | `detail`  | `(_ZN26format_test_precision_Test8TestBodyEv)`                                     |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|  Change |    Delta |           % |            Time | Count |            Mean |             Max | Attribute | Value                                                                              |
| ------: | -------: | ----------: | --------------: | ----: | --------------: | --------------: | --------- | ---------------------------------------------------------------------------------- |
|     new | +30.50ms | 0.0% → 1.5% |    0ms → 30.5ms | 0 → 2 |    0ms → 15.3ms |    0ms → 29.8ms | `detail`  | `(_ZN3fmt3v126detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi)`        |
| removed | -26.77ms | 1.4% → 0.0% |    26.8ms → 0ms | 2 → 0 |    13.4ms → 0ms |    26.2ms → 0ms | `detail`  | `(_ZN3fmt3v116detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi)`        |
|     new | +15.70ms | 0.0% → 0.8% |    0ms → 15.7ms | 0 → 1 |    0ms → 15.7ms |    0ms → 15.7ms | `detail`  | `(_ZN35format_test_debug_presentation_Test8TestBodyEv)`                            |
|     new | +11.57ms | 0.0% → 0.6% |    0ms → 11.6ms | 0 → 1 |    0ms → 11.6ms |    0ms → 11.6ms | `detail`  | `(_ZN3fmt3v126detail12format_floatIdEEiT_iRKNS0_12format_specsEbRNS1_6bufferIcEE)` |
|  +12.4% |  +9.85ms | 4.2% → 4.5% | 79.6ms → 89.5ms |     1 | 79.6ms → 89.5ms | 79.6ms → 89.5ms | `detail`  | `(_ZN26format_test_precision_Test8TestBodyEv)`                                     |

##### `CGSCCToFunctionPassAdaptor`

|  Change |    Delta |           % |         Time | Count |         Mean |          Max | Attribute | Value                                                                                                                                                                               |
| ------: | -------: | ----------: | -----------: | ----: | -----------: | -----------: | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +27.60ms | 0.0% → 1.8% | 0ms → 27.6ms | 0 → 1 | 0ms → 27.6ms | 0ms → 27.6ms | `detail`  | `(_ZN3fmt3v126detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi)`                                                                                                         |
| removed | -23.73ms | 1.7% → 0.0% | 23.7ms → 0ms | 1 → 0 | 23.7ms → 0ms | 23.7ms → 0ms | `detail`  | `(_ZN3fmt3v116detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi)`                                                                                                         |
|     new | +12.58ms | 0.0% → 0.8% | 0ms → 12.6ms | 0 → 1 | 0ms → 12.6ms | 0ms → 12.6ms | `detail`  | `(_ZN35format_test_debug_presentation_Test8TestBodyEv)`                                                                                                                             |
|     new | +10.16ms | 0.0% → 0.7% | 0ms → 10.2ms | 0 → 1 | 0ms → 10.2ms | 0ms → 10.2ms | `detail`  | `(_ZN3fmt3v126detail12format_floatIdEEiT_iRKNS0_12format_specsEbRNS1_6bufferIcEE)`                                                                                                  |
|     new |  +8.91ms | 0.0% → 0.6% |  0ms → 8.9ms | 0 → 1 |  0ms → 8.9ms |  0ms → 8.9ms | `detail`  | `(_ZN3fmt3v126formatIJNS0_6detail9named_argIciEES4_S4_S4_S4_S4_S4_S4_S4_S4_S4_S4_S4_S4_S4_S4_EEENSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEENS0_7fstringIJDpT_EE1tEDpOSC_)` |

##### `ModuleToFunctionPassAdaptor`

| Change |    Delta |      % |              Time | Count |              Mean |               Max | Attribute | Value      |
| -----: | -------: | -----: | ----------------: | ----: | ----------------: | ----------------: | --------- | ---------- |
|  +4.6% | +35.62ms | 100.0% | 781.7ms → 817.4ms |     6 | 130.3ms → 136.2ms | 515.2ms → 553.1ms | `detail`  | `[module]` |

##### `ParseFunctionDefinition`

|  Change |    Delta |             % |              Time |     Count |          Mean |             Max | Attribute | Value                 |
| ------: | -------: | ------------: | ----------------: | --------: | ------------: | --------------: | --------- | --------------------- |
|   +8.9% | +36.28ms | 86.7% → 88.5% | 408.1ms → 444.4ms | 110 → 115 | 3.7ms → 3.9ms | 29.5ms → 40.0ms | `detail`  | `TestBody`            |
|  +35.7% |  +1.48ms |   0.9% → 1.1% |     4.1ms → 5.6ms |         1 | 4.1ms → 5.6ms |   4.1ms → 5.6ms | `detail`  | `format`              |
|  -44.3% |  -1.21ms |   0.6% → 0.3% |     2.7ms → 1.5ms |         1 | 2.7ms → 1.5ms |   2.7ms → 1.5ms | `detail`  | `check_unknown_types` |
|  -21.0% |  -0.95ms |   1.0% → 0.7% |     4.5ms → 3.6ms |         2 | 2.3ms → 1.8ms |   2.4ms → 1.8ms | `detail`  | `PrintTo`             |
| removed |  -0.94ms |   0.2% → 0.0% |       0.9ms → 0ms |     1 → 0 |   0.9ms → 0ms |     0.9ms → 0ms | `detail`  | `do_write_float`      |

##### `OptFunction`

|  Change |    Delta |           % |         Time | Count |         Mean |          Max | Attribute | Value                                                                                                                                                                             |
| ------: | -------: | ----------: | -----------: | ----: | -----------: | -----------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +39.79ms | 0.0% → 1.5% | 0ms → 39.8ms | 0 → 4 |  0ms → 9.9ms | 0ms → 25.4ms | `detail`  | `_ZN3fmt3v126detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi`                                                                                                         |
| removed | -38.50ms | 1.5% → 0.0% | 38.5ms → 0ms | 3 → 0 | 12.8ms → 0ms | 26.0ms → 0ms | `detail`  | `_ZN3fmt3v116detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi`                                                                                                         |
|     new | +25.93ms | 0.0% → 1.0% | 0ms → 25.9ms | 0 → 3 |  0ms → 8.6ms | 0ms → 20.4ms | `detail`  | `_ZN35format_test_debug_presentation_Test8TestBodyEv`                                                                                                                             |
| removed | -14.81ms | 0.6% → 0.0% | 14.8ms → 0ms | 3 → 0 |  4.9ms → 0ms | 13.1ms → 0ms | `detail`  | `_ZN3fmt3v116formatIJNS0_6detail9named_argIciEES4_S4_S4_S4_S4_S4_S4_S4_S4_S4_S4_S4_S4_S4_S4_EEENSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEENS0_7fstringIJDpT_EE1tEDpOSC_` |
|     new | +13.81ms | 0.0% → 0.5% | 0ms → 13.8ms | 0 → 1 | 0ms → 13.8ms | 0ms → 13.8ms | `detail`  | `_ZN3fmt3v126detail11write_fixedIcNS1_14digit_groupingIcEENS0_14basic_appenderIcEENS1_9dragonbox10decimal_fpIdEEEET1_SA_RKT2_iT_RKNS0_12format_specsENS0_4signENS0_10locale_refE` |

##### `OptModule`

| Change |    Delta |      % |          Time | Count |          Mean |           Max | Attribute | Value                          |
| -----: | -------: | -----: | ------------: | ----: | ------------: | ------------: | --------- | ------------------------------ |
|  +0.9% | +26.44ms | 100.0% | 2.99s → 3.02s |     1 | 2.99s → 3.02s | 2.99s → 3.02s | `detail`  | `/src/fmt/test/format-test.cc` |

##### `ParseDeclarationOrFunctionDefinition`

|  Change |    Delta |           % |         Time | Count |         Mean |          Max | Attribute | Value                                                                                     |
| ------: | -------: | ----------: | -----------: | ----: | -----------: | -----------: | --------- | ----------------------------------------------------------------------------------------- |
|     new | +40.05ms | 0.0% → 5.7% | 0ms → 40.1ms | 0 → 1 | 0ms → 40.1ms | 0ms → 40.1ms | `detail`  | `/src/fmt/test/format-test.cc:1210:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>` |
|     new | +32.09ms | 0.0% → 4.6% | 0ms → 32.1ms | 0 → 1 | 0ms → 32.1ms | 0ms → 32.1ms | `detail`  | `/src/fmt/test/format-test.cc:1030:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>` |
| removed | -29.47ms | 4.3% → 0.0% | 29.5ms → 0ms | 1 → 0 | 29.5ms → 0ms | 29.5ms → 0ms | `detail`  | `/src/fmt/test/format-test.cc:1108:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>` |
| removed | -28.18ms | 4.2% → 0.0% | 28.2ms → 0ms | 1 → 0 | 28.2ms → 0ms | 28.2ms → 0ms | `detail`  | `/src/fmt/test/format-test.cc:950:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>`  |
|     new | +23.46ms | 0.0% → 3.3% | 0ms → 23.5ms | 0 → 1 | 0ms → 23.5ms | 0ms → 23.5ms | `detail`  | `/src/fmt/test/format-test.cc:971:1 <Spelling=/src/fmt/test/gtest/gtest/gtest.h:4936:3>`  |

##### `CodeGen Function`

|  Change |   Delta |           % |          Time | Count |          Mean |           Max | Attribute | Value                                                                                                                                                                        |
| ------: | ------: | ----------: | ------------: | ----: | ------------: | ------------: | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +2.42ms | 0.0% → 2.1% |   0ms → 2.4ms | 0 → 1 |   0ms → 2.4ms |   0ms → 2.4ms | `detail`  | `fmt::detail::write_fixed(fmt::basic_appender<char>, const fmt::detail::big_decimal_fp &, int, char, const format_specs &, sign, locale_ref)::(anonymous class)::operator()` |
|  +34.9% | +2.34ms | 6.7% → 8.0% | 6.7ms → 9.0ms |     1 | 6.7ms → 9.0ms | 6.7ms → 9.0ms | `detail`  | `format_test_runtime_precision_Test::TestBody`                                                                                                                               |
|     new | +1.67ms | 0.0% → 1.5% |   0ms → 1.7ms | 0 → 1 |   0ms → 1.7ms |   0ms → 1.7ms | `detail`  | `format_test_debug_presentation_Test::TestBody`                                                                                                                              |
|  -60.0% | -1.48ms | 2.5% → 0.9% | 2.5ms → 1.0ms |     1 | 2.5ms → 1.0ms | 2.5ms → 1.0ms | `detail`  | `format_test_format_bin_Test::TestBody`                                                                                                                                      |
| removed | -1.43ms | 1.4% → 0.0% |   1.4ms → 0ms | 1 → 0 |   1.4ms → 0ms |   1.4ms → 0ms | `detail`  | `fmt::detail::write<char, fmt::basic_appender<char>, void, 0>`                                                                                                               |

##### `InstantiateClass`

|  Change |    Delta |           % |          Time | Count |          Mean |           Max | Attribute | Value                                                                                                                                                                                                                                   |
| ------: | -------: | ----------: | ------------: | ----: | ------------: | ------------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -12.30ms | 1.5% → 0.0% |  12.3ms → 0ms | 1 → 0 |  12.3ms → 0ms |  12.3ms → 0ms | `detail`  | `std::is_array<const char[6]>`                                                                                                                                                                                                          |
| removed |  -5.08ms | 0.6% → 0.0% |   5.1ms → 0ms | 1 → 0 |   5.1ms → 0ms |   5.1ms → 0ms | `detail`  | `std::__or_<std::is_reference<testing::Matcher<unsigned long>>, std::is_function<testing::Matcher<unsigned long>>, std::is_void<testing::Matcher<unsigned long>>, std::__is_array_unknown_bounds<testing::Matcher<unsigned long>>>`     |
|     new |  +4.96ms | 0.0% → 0.6% |   0ms → 5.0ms | 0 → 1 |   0ms → 5.0ms |   0ms → 5.0ms | `detail`  | `std::is_reference<test::struct_as_const_reference>`                                                                                                                                                                                    |
|  -86.0% |  -4.76ms | 0.7% → 0.1% | 5.5ms → 0.8ms |     1 | 5.5ms → 0.8ms | 5.5ms → 0.8ms | `detail`  | `std::__and_<std::__and_<std::is_constructible<testing::Matcher<unsigned long>, const testing::Matcher<unsigned long> &>>, std::__and_<std::is_convertible<const testing::Matcher<unsigned long> &, testing::Matcher<unsigned long>>>>` |
|  -88.8% |  -4.74ms | 0.7% → 0.1% | 5.3ms → 0.6ms |     1 | 5.3ms → 0.6ms | 5.3ms → 0.6ms | `detail`  | `std::__and_<std::is_constructible<testing::Matcher<unsigned long>, const testing::Matcher<unsigned long> &>>`                                                                                                                          |

##### `RunPass`

| Change |    Delta |             % |              Time |     Count |          Mean |               Max | Attribute | Value                           |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | ----------------: | --------- | ------------------------------- |
|  +1.8% | +14.29ms | 51.1% → 51.8% | 774.1ms → 788.3ms | 256 → 262 |         3.0ms | 103.8ms → 102.1ms | `detail`  | `AArch64 Instruction Selection` |
| +18.6% |  +7.12ms |   2.5% → 3.0% |   38.4ms → 45.5ms |   33 → 39 |         1.2ms |     7.9ms → 9.1ms | `detail`  | `Loop Pass Manager`             |
| +21.8% |  +6.89ms |   2.1% → 2.5% |   31.7ms → 38.5ms |   27 → 30 | 1.2ms → 1.3ms |     5.5ms → 6.2ms | `detail`  | `Memory SSA`                    |
|  +4.9% |  +4.70ms |   6.4% → 6.6% |  96.4ms → 101.1ms |   50 → 52 |         1.9ms |   14.8ms → 14.9ms | `detail`  | `CodeGen Prepare`               |
|  -9.3% |  -4.61ms |   3.3% → 3.0% |   49.7ms → 45.0ms |   27 → 26 | 1.8ms → 1.7ms |     9.8ms → 8.7ms | `detail`  | `Register Coalescer`            |

##### `InlinerPass`

|  Change |   Delta |           % |            Time | Count |            Mean |             Max | Attribute | Value                                                                       |
| ------: | ------: | ----------: | --------------: | ----: | --------------: | --------------: | --------- | --------------------------------------------------------------------------- |
| removed | -2.96ms | 1.2% → 0.0% |     3.0ms → 0ms | 2 → 0 |     1.5ms → 0ms |     2.4ms → 0ms | `detail`  | `(_ZN3fmt3v116detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi)` |
|     new | +2.82ms | 0.0% → 1.1% |     0ms → 2.8ms | 0 → 1 |     0ms → 2.8ms |     0ms → 2.8ms | `detail`  | `(_ZN35format_test_debug_presentation_Test8TestBodyEv)`                     |
|     new | +2.78ms | 0.0% → 1.1% |     0ms → 2.8ms | 0 → 2 |     0ms → 1.4ms |     0ms → 2.1ms | `detail`  | `(_ZN3fmt3v126detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi)` |
|  +17.9% | +2.42ms | 5.7% → 6.4% | 13.5ms → 15.9ms |     1 | 13.5ms → 15.9ms | 13.5ms → 15.9ms | `detail`  | `(_ZN26format_test_precision_Test8TestBodyEv)`                              |
|   -8.1% | -1.69ms | 8.8% → 7.8% | 21.0ms → 19.3ms |     1 | 21.0ms → 19.3ms | 21.0ms → 19.3ms | `detail`  | `(_GLOBAL__sub_I_format_test.cc)`                                           |

##### `GlobalDCEPass`

| Change |    Delta |      % |            Time | Count |            Mean |             Max | Attribute | Value      |
| -----: | -------: | -----: | --------------: | ----: | --------------: | --------------: | --------- | ---------- |
| -28.6% | -11.50ms | 100.0% | 40.2ms → 28.7ms |     2 | 20.1ms → 14.3ms | 25.3ms → 16.8ms | `detail`  | `[module]` |

##### `ParseClass`

|  Change |   Delta |           % |            Time | Count |          Mean |            Max | Attribute | Value                          |
| ------: | ------: | ----------: | --------------: | ----: | ------------: | -------------: | --------- | ------------------------------ |
| removed | -2.79ms | 1.0% → 0.0% |     2.8ms → 0ms | 1 → 0 |   2.8ms → 0ms |    2.8ms → 0ms | `detail`  | `std::basic_ostream`           |
|  +18.5% | +2.78ms | 5.5% → 6.7% | 15.0ms → 17.8ms | 5 → 6 |         3.0ms | 8.4ms → 10.2ms | `detail`  | `fmt::formatter`               |
|  +34.1% | +2.19ms | 2.3% → 3.2% |   6.4ms → 8.6ms |     1 | 6.4ms → 8.6ms |  6.4ms → 8.6ms | `detail`  | `testing::Test`                |
| +235.8% | +2.13ms | 0.3% → 1.1% |   0.9ms → 3.0ms |     1 | 0.9ms → 3.0ms |  0.9ms → 3.0ms | `detail`  | `testing::internal::MutexBase` |
|  +37.6% | +2.00ms | 1.9% → 2.8% |   5.3ms → 7.3ms |     1 | 5.3ms → 7.3ms |  5.3ms → 7.3ms | `detail`  | `std::chrono::system_clock`    |

##### `IPSCCPPass`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Attribute | Value      |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | --------- | ---------- |
|  -7.4% | -6.39ms | 100.0% | 86.1ms → 79.7ms |     1 | 86.1ms → 79.7ms | 86.1ms → 79.7ms | `detail`  | `[module]` |

##### `GlobalOptPass`

| Change |   Delta |      % |             Time | Count |            Mean |             Max | Attribute | Value      |
| -----: | ------: | -----: | ---------------: | ----: | --------------: | --------------: | --------- | ---------- |
|  -5.9% | -5.96ms | 100.0% | 100.3ms → 94.4ms |     2 | 50.2ms → 47.2ms | 71.9ms → 65.5ms | `detail`  | `[module]` |

##### `CorrelatedValuePropagationPass`

|  Change |   Delta |             % |          Time | Count |          Mean |           Max | Attribute | Value                                                                     |
| ------: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------- | ------------------------------------------------------------------------- |
| removed | -1.21ms |   5.9% → 0.0% |   1.2ms → 0ms | 2 → 0 |   0.6ms → 0ms |   0.7ms → 0ms | `detail`  | `_ZN3fmt3v116detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi` |
|     new | +1.11ms |   0.0% → 5.9% |   0ms → 1.1ms | 0 → 2 |   0ms → 0.6ms |   0ms → 0.6ms | `detail`  | `_ZN3fmt3v126detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi` |
|  -25.9% | -0.56ms |  10.5% → 8.5% | 2.2ms → 1.6ms |     2 | 1.1ms → 0.8ms | 1.3ms → 0.9ms | `detail`  | `_ZN30format_test_runtime_width_Test8TestBodyEv`                          |
| removed | -0.51ms |   2.5% → 0.0% |   0.5ms → 0ms | 1 → 0 |   0.5ms → 0ms |   0.5ms → 0ms | `detail`  | `_ZN22format_test_width_Test8TestBodyEv`                                  |
|  -14.5% | -0.41ms | 13.9% → 13.0% | 2.8ms → 2.4ms |     2 | 1.4ms → 1.2ms | 1.7ms → 1.3ms | `detail`  | `_ZN34format_test_runtime_precision_Test8TestBodyEv`                      |

##### `SROAPass`

|  Change |   Delta |            % |          Time | Count |          Mean |           Max | Attribute | Value                                            |
| ------: | ------: | -----------: | ------------: | ----: | ------------: | ------------: | --------- | ------------------------------------------------ |
|     new | +1.14ms |  0.0% → 5.9% |   0ms → 1.1ms | 0 → 1 |   0ms → 1.1ms |   0ms → 1.1ms | `detail`  | `_ZN22format_test_bytes_Test8TestBodyEv`         |
|  -56.7% | -0.66ms |  5.7% → 2.6% | 1.2ms → 0.5ms | 2 → 1 | 0.6ms → 0.5ms | 0.6ms → 0.5ms | `detail`  | `_ZN26format_test_plus_sign_Test8TestBodyEv`     |
|  -49.0% | -0.65ms |  6.6% → 3.5% | 1.3ms → 0.7ms | 2 → 1 |         0.7ms | 0.8ms → 0.7ms | `detail`  | `_ZN30format_test_format_double_Test8TestBodyEv` |
| removed | -0.57ms |  2.8% → 0.0% |   0.6ms → 0ms | 1 → 0 |   0.6ms → 0ms |   0.6ms → 0ms | `detail`  | `_ZN26format_test_zero_flag_Test8TestBodyEv`     |
|  +29.8% | +0.53ms | 8.8% → 12.0% | 1.8ms → 2.3ms |     1 | 1.8ms → 2.3ms | 1.8ms → 2.3ms | `detail`  | `_GLOBAL__sub_I_format_test.cc`                  |

##### `MemorySSAAnalysis`

|  Change |   Delta |             % |            Time | Count |          Mean |           Max | Attribute | Value                                                 |
| ------: | ------: | ------------: | --------------: | ----: | ------------: | ------------: | --------- | ----------------------------------------------------- |
|  -12.1% | -1.26ms | 17.5% → 15.6% |  10.4ms → 9.1ms |     4 | 2.6ms → 2.3ms | 3.3ms → 3.0ms | `detail`  | `_ZN34format_test_runtime_precision_Test8TestBodyEv`  |
| removed | -1.15ms |   1.9% → 0.0% |     1.1ms → 0ms | 2 → 0 |   0.6ms → 0ms |   0.6ms → 0ms | `detail`  | `_ZN27format_test_left_align_Test8TestBodyEv`         |
|     new | +1.13ms |   0.0% → 1.9% |     0ms → 1.1ms | 0 → 2 |   0ms → 0.6ms |   0ms → 0.6ms | `detail`  | `_ZN35format_test_debug_presentation_Test8TestBodyEv` |
|   +8.5% | +0.90ms | 17.8% → 19.7% | 10.6ms → 11.5ms |     4 | 2.6ms → 2.9ms | 4.0ms → 3.4ms | `detail`  | `_ZN26format_test_precision_Test8TestBodyEv`          |
|  -14.4% | -0.72ms |   8.5% → 7.4% |   5.0ms → 4.3ms |     3 | 1.7ms → 1.4ms | 1.9ms → 1.7ms | `detail`  | `_ZN30format_test_runtime_width_Test8TestBodyEv`      |

##### `JumpThreadingPass`

|  Change |   Delta |             % |          Time | Count |          Mean |           Max | Attribute | Value                                                                     |
| ------: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------- | ------------------------------------------------------------------------- |
|     new | +1.99ms |   0.0% → 5.1% |   0ms → 2.0ms | 0 → 2 |   0ms → 1.0ms |   0ms → 1.2ms | `detail`  | `_ZN3fmt3v126detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi` |
| removed | -1.84ms |   4.7% → 0.0% |   1.8ms → 0ms | 2 → 0 |   0.9ms → 0ms |   1.2ms → 0ms | `detail`  | `_ZN3fmt3v116detail13format_dragonENS1_8basic_fpIoEEjiRNS1_6bufferIcEERi` |
|  +78.6% | +0.77ms |   2.5% → 4.5% | 1.0ms → 1.8ms | 1 → 2 | 1.0ms → 0.9ms | 1.0ms → 0.9ms | `detail`  | `_ZN27format_test_arg_errors_Test8TestBodyEv`                             |
|  -15.9% | -0.74ms | 11.8% → 10.2% | 4.7ms → 3.9ms |     2 | 2.3ms → 2.0ms | 2.7ms → 2.0ms | `detail`  | `_ZN30format_test_runtime_width_Test8TestBodyEv`                          |
|     new | +0.63ms |   0.0% → 1.6% |   0ms → 0.6ms | 0 → 1 |   0ms → 0.6ms |   0ms → 0.6ms | `detail`  | `_ZN35format_test_debug_presentation_Test8TestBodyEv`                     |

##### `LoopDeletionPass`

|  Change |   Delta |             % |        Time | Count |        Mean |         Max | Attribute | Value                                                                                                                                            |
| ------: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed | -0.98ms | 100.0% → 0.0% | 1.0ms → 0ms | 1 → 0 | 1.0ms → 0ms | 1.0ms → 0ms | `detail`  | `loop %<unnamed loop> in function _ZN3fmt3v116detail9write_intIcNS0_14basic_appenderIcEEjEET0_S5_NS1_13write_int_argIT1_EERKNS0_12format_specsE` |

##### `ReversePostOrderFunctionAttrsPass`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Attribute | Value      |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | --------- | ---------- |
|  -7.5% | -0.84ms | 100.0% | 11.2ms → 10.3ms |     1 | 11.2ms → 10.3ms | 11.2ms → 10.3ms | `detail`  | `[module]` |

##### `InstSimplifyPass`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Attribute | Value                                                |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------- | ---------------------------------------------------- |
| -24.5% | -0.49ms | 43.1% → 38.9% | 2.0ms → 1.5ms |     1 | 2.0ms → 1.5ms | 2.0ms → 1.5ms | `detail`  | `_ZN26format_test_precision_Test8TestBodyEv`         |
| -12.3% | -0.21ms | 35.6% → 37.4% | 1.7ms → 1.5ms |     1 | 1.7ms → 1.5ms | 1.7ms → 1.5ms | `detail`  | `_ZN34format_test_runtime_precision_Test8TestBodyEv` |
|  -7.2% | -0.07ms | 21.3% → 23.6% | 1.0ms → 0.9ms |     1 | 1.0ms → 0.9ms | 1.0ms → 0.9ms | `detail`  | `_GLOBAL__sub_I_format_test.cc`                      |

##### `IndVarSimplifyPass`

|  Change |   Delta |             % |        Time | Count |        Mean |         Max | Attribute | Value                                                                                   |
| ------: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | --------- | --------------------------------------------------------------------------------------- |
| removed | -0.74ms |  59.0% → 0.0% | 0.7ms → 0ms | 1 → 0 | 0.7ms → 0ms | 0.7ms → 0ms | `detail`  | `loop %<unnamed loop> in function _ZN3fmt3v116detail11add_compareERKNS1_6bigintES4_S4_` |
|     new | +0.63ms | 0.0% → 100.0% | 0ms → 0.6ms | 0 → 1 | 0ms → 0.6ms | 0ms → 0.6ms | `detail`  | `loop %<unnamed loop> in function _ZN3fmt3v126detail11add_compareERKNS1_6bigintES4_S4_` |
| removed | -0.51ms |  41.0% → 0.0% | 0.5ms → 0ms | 1 → 0 | 0.5ms → 0ms | 0.5ms → 0ms | `detail`  | `loop %<unnamed loop> in function _ZNSt7__cxx119to_stringEl`                            |

##### `BranchProbabilityAnalysis`

|  Change |   Delta |             % |          Time | Count |          Mean |           Max | Attribute | Value                                                |
| ------: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------- | ---------------------------------------------------- |
| removed | -0.57ms |   4.0% → 0.0% |   0.6ms → 0ms | 1 → 0 |   0.6ms → 0ms |   0.6ms → 0ms | `detail`  | `_ZN30format_test_format_double_Test8TestBodyEv`     |
| removed | -0.55ms |   3.8% → 0.0% |   0.5ms → 0ms | 1 → 0 |   0.5ms → 0ms |   0.5ms → 0ms | `detail`  | `_ZN22format_test_width_Test8TestBodyEv`             |
|     new | +0.50ms |   0.0% → 3.6% |   0ms → 0.5ms | 0 → 1 |   0ms → 0.5ms |   0ms → 0.5ms | `detail`  | `_ZN26format_test_zero_flag_Test8TestBodyEv`         |
|  +53.4% | +0.37ms |   4.8% → 7.7% | 0.7ms → 1.1ms | 1 → 2 | 0.7ms → 0.5ms | 0.7ms → 0.5ms | `detail`  | `_ZN27format_test_arg_errors_Test8TestBodyEv`        |
|   -6.3% | -0.22ms | 23.9% → 23.3% | 3.4ms → 3.2ms |     2 | 1.7ms → 1.6ms | 1.8ms → 1.7ms | `detail`  | `_ZN34format_test_runtime_precision_Test8TestBodyEv` |

##### `EliminateAvailableExternallyPass`

|  Change |   Delta |             % |        Time | Count |        Mean |         Max | Attribute | Value      |
| ------: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | --------- | ---------- |
| removed | -0.53ms | 100.0% → 0.0% | 0.5ms → 0ms | 1 → 0 | 0.5ms → 0ms | 0.5ms → 0ms | `detail`  | `[module]` |

##### `LazyCallGraphAnalysis`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Attribute | Value      |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | --------- | ---------- |
|  -4.9% | -0.48ms | 100.0% | 9.7ms → 9.2ms |     2 | 4.9ms → 4.6ms | 6.6ms → 6.5ms | `detail`  | `[module]` |

##### `ReassociatePass`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Attribute | Value                                                |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------- | ---------------------------------------------------- |
| -20.8% | -0.58ms | 44.1% → 37.7% | 2.8ms → 2.2ms |     1 | 2.8ms → 2.2ms | 2.8ms → 2.2ms | `detail`  | `_GLOBAL__sub_I_format_test.cc`                      |
| +11.8% | +0.13ms | 17.4% → 21.0% | 1.1ms → 1.2ms |     1 | 1.1ms → 1.2ms | 1.1ms → 1.2ms | `detail`  | `_ZN26format_test_precision_Test8TestBodyEv`         |
|  -1.2% | -0.01ms | 16.1% → 17.2% |         1.0ms |     1 |         1.0ms |         1.0ms | `detail`  | `_ZN34format_test_runtime_precision_Test8TestBodyEv` |
|  -0.1% | -1.00µs | 10.9% → 11.7% |         0.7ms |     1 |         0.7ms |         0.7ms | `detail`  | `_ZN26format_test_hash_flag_Test8TestBodyEv`         |
|  +0.1% | +1.00µs | 11.5% → 12.4% |         0.7ms |     1 |         0.7ms |         0.7ms | `detail`  | `_ZN30format_test_runtime_width_Test8TestBodyEv`     |

##### `AAManager`

|  Change |   Delta |              % |          Time | Count |          Mean |           Max | Attribute | Value                                        |
| ------: | ------: | -------------: | ------------: | ----: | ------------: | ------------: | --------- | -------------------------------------------- |
| removed | -0.61ms |   43.8% → 0.0% |   0.6ms → 0ms | 1 → 0 |   0.6ms → 0ms |   0.6ms → 0ms | `detail`  | `_ZN26format_test_precision_Test8TestBodyEv` |
|  +21.3% | +0.17ms | 56.2% → 100.0% | 0.8ms → 1.0ms |     1 | 0.8ms → 1.0ms | 0.8ms → 1.0ms | `detail`  | `_GLOBAL__sub_I_format_test.cc`              |

##### `BasicAA`

|  Change |   Delta |              % |          Time | Count |          Mean |           Max | Attribute | Value                                        |
| ------: | ------: | -------------: | ------------: | ----: | ------------: | ------------: | --------- | -------------------------------------------- |
| removed | -0.61ms |   43.8% → 0.0% |   0.6ms → 0ms | 1 → 0 |   0.6ms → 0ms |   0.6ms → 0ms | `detail`  | `_ZN26format_test_precision_Test8TestBodyEv` |
|  +21.4% | +0.17ms | 56.2% → 100.0% | 0.8ms → 0.9ms |     1 | 0.8ms → 0.9ms | 0.8ms → 0.9ms | `detail`  | `_GLOBAL__sub_I_format_test.cc`              |

##### `SimplifyCFGPass`

| Change |   Delta |             % |            Time | Count |          Mean |           Max | Attribute | Value                                              |
| -----: | ------: | ------------: | --------------: | ----: | ------------: | ------------: | --------- | -------------------------------------------------- |
| -58.1% | -1.21ms |   4.2% → 1.8% |   2.1ms → 0.9ms | 3 → 1 | 0.7ms → 0.9ms |         0.9ms | `detail`  | `_ZN32format_test_format_examples_Test8TestBodyEv` |
|  +6.4% | +0.71ms | 22.5% → 24.1% | 11.0ms → 11.8ms |     8 | 1.4ms → 1.5ms | 2.1ms → 2.2ms | `detail`  | `_ZN26format_test_precision_Test8TestBodyEv`       |
|  -6.1% | -0.58ms | 19.2% → 18.1% |   9.4ms → 8.8ms |     6 | 1.6ms → 1.5ms | 3.4ms → 2.4ms | `detail`  | `_GLOBAL__sub_I_format_test.cc`                    |
|    new | +0.54ms |   0.0% → 1.1% |     0ms → 0.5ms | 0 → 1 |   0ms → 0.5ms |   0ms → 0.5ms | `detail`  | `__cxx_global_var_init`                            |
| +50.3% | +0.36ms |   1.5% → 2.2% |   0.7ms → 1.1ms | 1 → 2 | 0.7ms → 0.5ms | 0.7ms → 0.6ms | `detail`  | `_ZN27format_test_arg_errors_Test8TestBodyEv`      |

##### `RequireAnalysisPass<llvm::GlobalsAA, llvm::Module, llvm::AnalysisManager<Module>>`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Attribute | Value      |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | --------- | ---------- |
|  -0.8% | -0.16ms | 100.0% | 20.8ms → 20.7ms |     1 | 20.8ms → 20.7ms | 20.8ms → 20.7ms | `detail`  | `[module]` |

##### `AssignmentTrackingPass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Attribute | Value      |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | --------- | ---------- |
|  -4.6% | -0.16ms | 100.0% | 3.5ms → 3.3ms |     1 | 3.5ms → 3.3ms | 3.5ms → 3.3ms | `detail`  | `[module]` |

#### Parents

Parent spans with the largest change in contribution to each span's total time.

##### `Frontend`

| Change |     Delta |      % |          Time | Count |          Mean |           Max | Parent            |
| -----: | --------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------- |
|  +8.1% | +232.95ms | 100.0% | 2.89s → 3.12s |     2 | 1.44s → 1.56s | 2.69s → 2.90s | `ExecuteCompiler` |

##### `Backend`

| Change |     Delta |      % |          Time | Count |          Mean |           Max | Parent            |
| -----: | --------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------- |
|  +3.0% | +198.36ms | 100.0% | 6.70s → 6.90s |     1 | 6.70s → 6.90s | 6.70s → 6.90s | `ExecuteCompiler` |

##### `PerformPendingInstantiations`

| Change |     Delta |      % |          Time | Count |          Mean |           Max | Parent     |
| -----: | --------: | -----: | ------------: | ----: | ------------: | ------------: | ---------- |
| +14.1% | +183.13ms | 100.0% | 1.30s → 1.48s |     1 | 1.30s → 1.48s | 1.30s → 1.48s | `Frontend` |

##### `InstantiateFunction`

| Change |     Delta |             % |            Time |         Count |          Mean |             Max | Parent                         |
| -----: | --------: | ------------: | --------------: | ------------: | ------------: | --------------: | ------------------------------ |
| +20.6% | +680.23ms | 72.6% → 73.5% |   3.30s → 3.98s | 1,233 → 1,350 | 2.7ms → 3.0ms | 33.8ms → 36.7ms | `InstantiateFunction`          |
| +14.9% | +178.09ms | 26.2% → 25.3% |   1.19s → 1.37s |     408 → 461 | 2.9ms → 3.0ms | 34.0ms → 36.8ms | `PerformPendingInstantiations` |
| +19.7% |   +6.29ms |          0.7% | 31.9ms → 38.2ms |       43 → 46 | 0.7ms → 0.8ms |   5.6ms → 6.1ms | `InstantiateClass`             |
| +20.5% |   +1.37ms |          0.1% |   6.7ms → 8.0ms |         5 → 4 | 1.3ms → 2.0ms |   4.1ms → 5.5ms | `ParseFunctionDefinition`      |
|  +3.5% |   +0.70ms |          0.4% | 19.8ms → 20.5ms |             7 | 2.8ms → 2.9ms |   7.8ms → 9.3ms | `ParseClass`                   |

##### `Optimizer`

| Change |     Delta |      % |          Time | Count |          Mean |           Max | Parent    |
| -----: | --------: | -----: | ------------: | ----: | ------------: | ------------: | --------- |
|  +4.6% | +169.50ms | 100.0% | 3.70s → 3.87s |     1 | 3.70s → 3.87s | 3.70s → 3.87s | `Backend` |

##### `ModuleInlinerWrapperPass`

| Change |     Delta |      % |          Time | Count |          Mean |           Max | Parent      |
| -----: | --------: | -----: | ------------: | ----: | ------------: | ------------: | ----------- |
|  +5.9% | +149.39ms | 100.0% | 2.53s → 2.68s |     1 | 2.53s → 2.68s | 2.53s → 2.68s | `Optimizer` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

| Change |     Delta |      % |          Time | Count |          Mean |           Max | Parent                     |
| -----: | --------: | -----: | ------------: | ----: | ------------: | ------------: | -------------------------- |
|  +6.0% | +149.17ms | 100.0% | 2.49s → 2.64s |     1 | 2.49s → 2.64s | 2.49s → 2.64s | `ModuleInlinerWrapperPass` |

##### `PassManager<Function>`

| Change |    Delta |             % |              Time |     Count |          Mean |               Max | Parent                        |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | ----------------: | ----------------------------- |
|  +6.5% | +91.23ms | 75.6% → 75.2% |     1.39s → 1.49s | 593 → 641 | 2.4ms → 2.3ms | 113.2ms → 110.2ms | `CGSCCToFunctionPassAdaptor`  |
|  +8.2% | +37.11ms | 24.4% → 24.7% | 451.5ms → 488.6ms | 204 → 225 |         2.2ms |   34.9ms → 37.8ms | `ModuleToFunctionPassAdaptor` |
| +30.2% |  +0.45ms |          0.1% |     1.5ms → 1.9ms |     2 → 3 | 0.7ms → 0.6ms |     0.8ms → 0.9ms | `FunctionToLoopPassAdaptor`   |

##### `DevirtSCCRepeatedPass`

| Change |     Delta |      % |       Time |     Count |          Mean |               Max | Parent                              |
| -----: | --------: | -----: | ---------: | --------: | ------------: | ----------------: | ----------------------------------- |
|  +6.3% | +118.99ms | 100.0% | 1.88s → 2s | 759 → 821 | 2.5ms → 2.4ms | 138.0ms → 134.6ms | `ModuleToPostOrderCGSCCPassAdaptor` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

| Change |     Delta |      % |          Time |     Count |          Mean |               Max | Parent                  |
| -----: | --------: | -----: | ------------: | --------: | ------------: | ----------------: | ----------------------- |
|  +6.3% | +118.49ms | 100.0% | 1.88s → 1.99s | 758 → 821 | 2.5ms → 2.4ms | 137.9ms → 134.4ms | `DevirtSCCRepeatedPass` |

##### `CGSCCToFunctionPassAdaptor`

| Change |    Delta |      % |          Time |     Count |          Mean |               Max | Parent                                                                                        |
| -----: | -------: | -----: | ------------: | --------: | ------------: | ----------------: | --------------------------------------------------------------------------------------------- |
|  +6.5% | +92.22ms | 100.0% | 1.40s → 1.50s | 594 → 643 | 2.4ms → 2.3ms | 114.3ms → 112.0ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `ModuleToFunctionPassAdaptor`

| Change |    Delta |     % |              Time | Count |              Mean |               Max | Parent                     |
| -----: | -------: | ----: | ----------------: | ----: | ----------------: | ----------------: | -------------------------- |
|  +4.6% | +35.11ms | 98.6% | 771.1ms → 806.2ms |     4 | 192.8ms → 201.6ms | 515.2ms → 553.1ms | `Optimizer`                |
|  +4.7% |  +0.50ms |  1.4% |   10.6ms → 11.1ms |     2 |     5.3ms → 5.6ms |     7.2ms → 7.3ms | `ModuleInlinerWrapperPass` |

##### `ParseFunctionDefinition`

| Change |    Delta |             % |              Time |     Count |          Mean |             Max | Parent                                 |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | --------------: | -------------------------------------- |
|  +7.7% | +34.00ms | 93.6% → 94.5% | 440.2ms → 474.2ms | 132 → 135 | 3.3ms → 3.5ms | 29.5ms → 40.0ms | `ParseDeclarationOrFunctionDefinition` |
|  -9.0% |  -2.72ms |   6.4% → 5.5% |   30.3ms → 27.6ms |   30 → 28 |         1.0ms |   2.7ms → 2.8ms | `Frontend`                             |

##### `OptFunction`

| Change |    Delta |      % |          Time |     Count |          Mean |               Max | Parent      |
| -----: | -------: | -----: | ------------: | --------: | ------------: | ----------------: | ----------- |
|  +1.2% | +30.96ms | 100.0% | 2.58s → 2.61s | 726 → 745 | 3.6ms → 3.5ms | 243.1ms → 235.8ms | `OptModule` |

##### `CodeGenPasses`

| Change |    Delta |      % |          Time | Count |          Mean |           Max | Parent    |
| -----: | -------: | -----: | ------------: | ----: | ------------: | ------------: | --------- |
|  +0.9% | +26.76ms | 100.0% | 2.99s → 3.02s |     1 | 2.99s → 3.02s | 2.99s → 3.02s | `Backend` |

##### `OptModule`

| Change |    Delta |      % |          Time | Count |          Mean |           Max | Parent          |
| -----: | -------: | -----: | ------------: | ----: | ------------: | ------------: | --------------- |
|  +0.9% | +26.44ms | 100.0% | 2.99s → 3.02s |     1 | 2.99s → 3.02s | 2.99s → 3.02s | `CodeGenPasses` |

##### `ParseDeclarationOrFunctionDefinition`

| Change |    Delta |             % |              Time |     Count |          Mean |             Max | Parent                                 |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | --------------: | -------------------------------------- |
|  +3.9% | +26.18ms | 99.2% → 99.3% | 672.3ms → 698.5ms | 203 → 204 | 3.3ms → 3.4ms | 48.1ms → 46.2ms | `Frontend`                             |
|  -9.6% |  -0.53ms |   0.8% → 0.7% |     5.6ms → 5.0ms |         3 | 1.9ms → 1.7ms |   3.3ms → 2.7ms | `ParseDeclarationOrFunctionDefinition` |

##### `CodeGen Function`

| Change |    Delta |      % |             Time |   Count |          Mean |           Max | Parent     |
| -----: | -------: | -----: | ---------------: | ------: | ------------: | ------------: | ---------- |
| +13.8% | +13.77ms | 100.0% | 99.7ms → 113.5ms | 73 → 75 | 1.4ms → 1.5ms | 6.7ms → 9.0ms | `Frontend` |

##### `InstantiateClass`

| Change |    Delta |             % |              Time |     Count |          Mean |             Max | Parent                    |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | --------------: | ------------------------- |
|  +7.8% | +18.11ms | 28.5% → 30.6% | 231.2ms → 249.3ms | 148 → 170 | 1.6ms → 1.5ms | 12.3ms → 10.0ms | `InstantiateFunction`     |
|  -1.5% |  -6.71ms | 54.6% → 53.5% | 443.0ms → 436.3ms | 195 → 210 | 2.3ms → 2.1ms |   8.6ms → 9.0ms | `InstantiateClass`        |
|  -6.0% |  -4.81ms |   9.8% → 9.2% |   79.6ms → 74.8ms |   40 → 38 |         2.0ms |   6.8ms → 8.3ms | `ParseClass`              |
|  -9.4% |  -4.68ms |   6.1% → 5.5% |   49.9ms → 45.2ms |   35 → 30 | 1.4ms → 1.5ms |   8.7ms → 9.0ms | `ParseFunctionDefinition` |
| +30.4% |  +2.19ms |   0.9% → 1.2% |     7.2ms → 9.4ms |     2 → 3 | 3.6ms → 3.1ms |   5.4ms → 5.3ms | `Frontend`                |

##### `RunPass`

| Change |   Delta |      % |          Time |     Count |  Mean |               Max | Parent        |
| -----: | ------: | -----: | ------------: | --------: | ----: | ----------------: | ------------- |
|  +0.6% | +9.12ms | 100.0% | 1.51s → 1.52s | 830 → 836 | 1.8ms | 103.8ms → 102.1ms | `OptFunction` |

##### `InlinerPass`

| Change |   Delta |      % |              Time |     Count |          Mean |             Max | Parent                                                                                        |
| -----: | ------: | -----: | ----------------: | --------: | ------------: | --------------: | --------------------------------------------------------------------------------------------- |
|  +3.6% | +8.51ms | 100.0% | 238.3ms → 246.8ms | 122 → 135 | 2.0ms → 1.8ms | 21.0ms → 19.3ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `GlobalDCEPass`

| Change |    Delta |      % |            Time | Count |            Mean |             Max | Parent      |
| -----: | -------: | -----: | --------------: | ----: | --------------: | --------------: | ----------- |
| -28.6% | -11.50ms | 100.0% | 40.2ms → 28.7ms |     2 | 20.1ms → 14.3ms | 25.3ms → 16.8ms | `Optimizer` |

##### `ParseClass`

| Change |   Delta |             % |              Time |   Count |          Mean |             Max | Parent                                 |
| -----: | ------: | ------------: | ----------------: | ------: | ------------: | --------------: | -------------------------------------- |
|  -4.2% | -5.44ms | 46.9% → 46.3% | 128.2ms → 122.8ms | 51 → 49 |         2.5ms | 11.3ms → 10.3ms | `ParseDeclarationOrFunctionDefinition` |
|  -1.7% | -2.50ms | 53.1% → 53.7% | 144.9ms → 142.4ms | 92 → 96 | 1.6ms → 1.5ms | 10.8ms → 10.2ms | `Frontend`                             |

##### `IPSCCPPass`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Parent      |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | ----------- |
|  -7.4% | -6.39ms | 100.0% | 86.1ms → 79.7ms |     1 | 86.1ms → 79.7ms | 86.1ms → 79.7ms | `Optimizer` |

##### `GlobalOptPass`

| Change |   Delta |      % |             Time | Count |            Mean |             Max | Parent      |
| -----: | ------: | -----: | ---------------: | ----: | --------------: | --------------: | ----------- |
|  -5.9% | -5.96ms | 100.0% | 100.3ms → 94.4ms |     2 | 50.2ms → 47.2ms | 71.9ms → 65.5ms | `Optimizer` |

##### `CorrelatedValuePropagationPass`

| Change |   Delta |      % |            Time |   Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | --------------: | ------: | ------------: | ------------: | ----------------------- |
|  -8.8% | -1.81ms | 100.0% | 20.5ms → 18.7ms | 15 → 14 | 1.4ms → 1.3ms | 4.1ms → 4.3ms | `PassManager<Function>` |

##### `SROAPass`

| Change |   Delta |      % |            Time |   Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | --------------: | ------: | ------------: | ------------: | ----------------------- |
|  -5.1% | -1.02ms | 100.0% | 20.2ms → 19.2ms | 19 → 16 | 1.1ms → 1.2ms | 2.5ms → 2.3ms | `PassManager<Function>` |

##### `MemorySSAAnalysis`

| Change |   Delta |             % |            Time |   Count |  Mean |           Max | Parent                      |
| -----: | ------: | ------------: | --------------: | ------: | ----: | ------------: | --------------------------- |
| -11.1% | -1.77ms | 26.9% → 24.3% | 15.9ms → 14.2ms |   9 → 8 | 1.8ms | 4.0ms → 3.4ms | `FunctionToLoopPassAdaptor` |
|  +3.5% | +0.70ms | 33.4% → 35.1% | 19.8ms → 20.5ms | 18 → 19 | 1.1ms | 4.0ms → 4.5ms | `MemCpyOptPass`             |
|  +0.3% | +0.07ms | 39.7% → 40.5% |          23.6ms |      21 | 1.1ms | 4.5ms → 4.2ms | `EarlyCSEPass`              |

##### `JumpThreadingPass`

| Change |   Delta |      % |            Time |   Count |  Mean |           Max | Parent                  |
| -----: | ------: | -----: | --------------: | ------: | ----: | ------------: | ----------------------- |
|  -2.5% | -0.98ms | 100.0% | 39.6ms → 38.6ms | 35 → 36 | 1.1ms | 3.7ms → 3.5ms | `PassManager<Function>` |

##### `LoopDeletionPass`

|  Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent                                                                                |
| ------: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ------------------------------------------------------------------------------------- |
| removed | -0.98ms | 100.0% → 0.0% | 1.0ms → 0ms | 1 → 0 | 1.0ms → 0ms | 1.0ms → 0ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>` |

##### `ReversePostOrderFunctionAttrsPass`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Parent      |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | ----------- |
|  -7.5% | -0.84ms | 100.0% | 11.2ms → 10.3ms |     1 | 11.2ms → 10.3ms | 11.2ms → 10.3ms | `Optimizer` |

##### `InstSimplifyPass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------------- |
| -16.5% | -0.77ms | 100.0% | 4.7ms → 3.9ms |     3 | 1.6ms → 1.3ms | 2.0ms → 1.5ms | `PassManager<Function>` |

##### `IndVarSimplifyPass`

| Change |   Delta |      % |          Time | Count |  Mean |           Max | Parent                                                                                |
| -----: | ------: | -----: | ------------: | ----: | ----: | ------------: | ------------------------------------------------------------------------------------- |
| -49.8% | -0.62ms | 100.0% | 1.3ms → 0.6ms | 2 → 1 | 0.6ms | 0.7ms → 0.6ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>` |

##### `BranchProbabilityAnalysis`

| Change |   Delta |      % |            Time | Count |  Mean |           Max | Parent                   |
| -----: | ------: | -----: | --------------: | ----: | ----: | ------------: | ------------------------ |
|  -3.9% | -0.56ms | 100.0% | 14.4ms → 13.8ms |    14 | 1.0ms | 1.9ms → 2.0ms | `BlockFrequencyAnalysis` |

##### `EliminateAvailableExternallyPass`

|  Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent      |
| ------: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ----------- |
| removed | -0.53ms | 100.0% → 0.0% | 0.5ms → 0ms | 1 → 0 | 0.5ms → 0ms | 0.5ms → 0ms | `Optimizer` |

##### `LazyCallGraphAnalysis`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Parent                                                    |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------------------------------------------------------- |
| -11.1% | -0.34ms | 31.7% → 29.6% | 3.1ms → 2.7ms |     1 | 3.1ms → 2.7ms | 3.1ms → 2.7ms | `ReversePostOrderFunctionAttrsPass`                       |
|  -2.0% | -0.14ms | 68.3% → 70.4% | 6.6ms → 6.5ms |     1 | 6.6ms → 6.5ms | 6.6ms → 6.5ms | `InnerAnalysisManagerProxy<CGSCCAnalysisManager, Module>` |

##### `ReassociatePass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------------- |
|  -7.3% | -0.46ms | 100.0% | 6.3ms → 5.8ms |     5 | 1.3ms → 1.2ms | 2.8ms → 2.2ms | `PassManager<Function>` |

##### `AAManager`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                       |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------------- |
| -31.8% | -0.44ms | 100.0% | 1.4ms → 1.0ms | 2 → 1 | 0.7ms → 1.0ms | 0.8ms → 1.0ms | `PostOrderFunctionAttrsPass` |

##### `BasicAA`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent      |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------- |
| -31.7% | -0.44ms | 100.0% | 1.4ms → 0.9ms | 2 → 1 | 0.7ms → 0.9ms | 0.8ms → 0.9ms | `AAManager` |

##### `SimplifyCFGPass`

| Change |   Delta |      % |            Time |   Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | --------------: | ------: | ------------: | ------------: | ----------------------- |
|  -0.4% | -0.21ms | 100.0% | 49.0ms → 48.8ms | 46 → 47 | 1.1ms → 1.0ms | 3.4ms → 2.4ms | `PassManager<Function>` |

##### `RequireAnalysisPass<llvm::GlobalsAA, llvm::Module, llvm::AnalysisManager<Module>>`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Parent                     |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | -------------------------- |
|  -0.8% | -0.16ms | 100.0% | 20.8ms → 20.7ms |     1 | 20.8ms → 20.7ms | 20.8ms → 20.7ms | `ModuleInlinerWrapperPass` |

##### `AssignmentTrackingPass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent      |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------- |
|  -4.6% | -0.16ms | 100.0% | 3.5ms → 3.3ms |     1 | 3.5ms → 3.3ms | 3.5ms → 3.3ms | `Optimizer` |

#### Children

Child spans with the largest change in contribution to each span's total time.

##### `ExecuteCompiler`

| Change |     Delta |             % |          Time | Count |          Mean |           Max | Child      |
| -----: | --------: | ------------: | ------------: | ----: | ------------: | ------------: | ---------- |
|  +8.1% | +232.95ms | 30.1% → 31.1% | 2.89s → 3.12s |     2 | 1.44s → 1.56s | 2.69s → 2.90s | `Frontend` |
|  +3.0% | +198.36ms | 69.7% → 68.7% | 6.70s → 6.90s |     1 | 6.70s → 6.90s | 6.70s → 6.90s | `Backend`  |

##### `Frontend`

| Change |     Delta |             % |              Time |     Count |          Mean |             Max | Child                                  |
| -----: | --------: | ------------: | ----------------: | --------: | ------------: | --------------: | -------------------------------------- |
| +14.1% | +183.13ms | 45.0% → 47.5% |     1.30s → 1.48s |         1 | 1.30s → 1.48s |   1.30s → 1.48s | `PerformPendingInstantiations`         |
|  +3.9% |  +26.18ms | 23.2% → 22.3% | 672.3ms → 698.5ms | 203 → 204 | 3.3ms → 3.4ms | 48.1ms → 46.2ms | `ParseDeclarationOrFunctionDefinition` |
| +13.8% |  +13.77ms |   3.4% → 3.6% |  99.7ms → 113.5ms |   73 → 75 | 1.4ms → 1.5ms |   6.7ms → 9.0ms | `CodeGen Function`                     |
|  -9.0% |   -2.72ms |   1.0% → 0.9% |   30.3ms → 27.6ms |   30 → 28 |         1.0ms |   2.7ms → 2.8ms | `ParseFunctionDefinition`              |
|  -1.7% |   -2.50ms |   5.0% → 4.6% | 144.9ms → 142.4ms |   92 → 96 | 1.6ms → 1.5ms | 10.8ms → 10.2ms | `ParseClass`                           |

##### `Backend`

| Change |     Delta |             % |          Time | Count |          Mean |           Max | Child           |
| -----: | --------: | ------------: | ------------: | ----: | ------------: | ------------: | --------------- |
|  +4.6% | +169.50ms | 55.2% → 56.1% | 3.70s → 3.87s |     1 | 3.70s → 3.87s | 3.70s → 3.87s | `Optimizer`     |
|  +0.9% |  +26.76ms | 44.7% → 43.8% | 2.99s → 3.02s |     1 | 2.99s → 3.02s | 2.99s → 3.02s | `CodeGenPasses` |

##### `PerformPendingInstantiations`

| Change |     Delta |             % |          Time |     Count |          Mean |             Max | Child                 |
| -----: | --------: | ------------: | ------------: | --------: | ------------: | --------------: | --------------------- |
| +14.9% | +178.09ms | 91.7% → 92.4% | 1.19s → 1.37s | 408 → 461 | 2.9ms → 3.0ms | 34.0ms → 36.8ms | `InstantiateFunction` |

##### `InstantiateFunction`

| Change |     Delta |             % |              Time |         Count |          Mean |             Max | Child                 |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------: | --------------: | --------------------- |
| +20.6% | +680.23ms | 72.6% → 73.5% |     3.30s → 3.98s | 1,233 → 1,350 | 2.7ms → 3.0ms | 33.8ms → 36.7ms | `InstantiateFunction` |
|  +7.8% |  +18.11ms |   5.1% → 4.6% | 231.2ms → 249.3ms |     148 → 170 | 1.6ms → 1.5ms | 12.3ms → 10.0ms | `InstantiateClass`    |

##### `Optimizer`

| Change |     Delta |             % |              Time | Count |              Mean |               Max | Child                         |
| -----: | --------: | ------------: | ----------------: | ----: | ----------------: | ----------------: | ----------------------------- |
|  +5.9% | +149.39ms | 68.4% → 69.3% |     2.53s → 2.68s |     1 |     2.53s → 2.68s |     2.53s → 2.68s | `ModuleInlinerWrapperPass`    |
|  +4.6% |  +35.11ms |         20.8% | 771.1ms → 806.2ms |     4 | 192.8ms → 201.6ms | 515.2ms → 553.1ms | `ModuleToFunctionPassAdaptor` |
| -28.6% |  -11.50ms |   1.1% → 0.7% |   40.2ms → 28.7ms |     2 |   20.1ms → 14.3ms |   25.3ms → 16.8ms | `GlobalDCEPass`               |
|  -7.4% |   -6.39ms |   2.3% → 2.1% |   86.1ms → 79.7ms |     1 |   86.1ms → 79.7ms |   86.1ms → 79.7ms | `IPSCCPPass`                  |
| +19.9% |   +5.97ms |   0.8% → 0.9% |   30.0ms → 35.9ms |     1 |   30.0ms → 35.9ms |   30.0ms → 35.9ms | `DeadArgumentEliminationPass` |

##### `ModuleInlinerWrapperPass`

| Change |     Delta |             % |            Time | Count |            Mean |             Max | Child                                                                               |
| -----: | --------: | ------------: | --------------: | ----: | --------------: | --------------: | ----------------------------------------------------------------------------------- |
|  +6.0% | +149.17ms | 98.6% → 98.7% |   2.49s → 2.64s |     1 |   2.49s → 2.64s |   2.49s → 2.64s | `ModuleToPostOrderCGSCCPassAdaptor`                                                 |
|  +4.7% |   +0.50ms |          0.4% | 10.6ms → 11.1ms |     2 |   5.3ms → 5.6ms |   7.2ms → 7.3ms | `ModuleToFunctionPassAdaptor`                                                       |
|  -0.8% |   -0.16ms |          0.8% | 20.8ms → 20.7ms |     1 | 20.8ms → 20.7ms | 20.8ms → 20.7ms | `RequireAnalysisPass<llvm::GlobalsAA, llvm::Module, llvm::AnalysisManager<Module>>` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

| Change |     Delta |             % |          Time |     Count |          Mean |               Max | Child                                                     |
| -----: | --------: | ------------: | ------------: | --------: | ------------: | ----------------: | --------------------------------------------------------- |
|  +6.3% | +118.99ms | 75.6% → 75.8% |    1.88s → 2s | 759 → 821 | 2.5ms → 2.4ms | 138.0ms → 134.6ms | `DevirtSCCRepeatedPass`                                   |
|  -2.0% |   -0.13ms |   0.3% → 0.2% | 6.6ms → 6.5ms |         1 | 6.6ms → 6.5ms |     6.6ms → 6.5ms | `InnerAnalysisManagerProxy<CGSCCAnalysisManager, Module>` |

##### `PassManager<Function>`

| Change |   Delta |             % |              Time |     Count |          Mean |             Max | Child                       |
| -----: | ------: | ------------: | ----------------: | --------: | ------------: | --------------: | --------------------------- |
|  +7.2% | +7.20ms |          5.4% |  99.6ms → 106.8ms |   56 → 59 |         1.8ms | 10.7ms → 11.4ms | `GVNPass`                   |
|  +1.1% | +3.52ms | 17.1% → 16.2% | 316.5ms → 320.0ms | 250 → 251 |         1.3ms |   9.0ms → 8.2ms | `InstCombinePass`           |
|  +4.1% | +2.74ms |   3.6% → 3.5% |   66.7ms → 69.4ms |   42 → 48 | 1.6ms → 1.4ms | 16.6ms → 16.5ms | `DSEPass`                   |
|  +5.6% | +2.47ms |          2.4% |   44.3ms → 46.8ms |        36 | 1.2ms → 1.3ms |   4.6ms → 5.5ms | `FunctionToLoopPassAdaptor` |
|  +8.9% | +1.96ms |          1.2% |   22.0ms → 23.9ms |   17 → 20 | 1.3ms → 1.2ms |   4.3ms → 4.9ms | `ADCEPass`                  |

##### `DevirtSCCRepeatedPass`

| Change |     Delta |     % |          Time |     Count |          Mean |               Max | Child                                                                                         |
| -----: | --------: | ----: | ------------: | --------: | ------------: | ----------------: | --------------------------------------------------------------------------------------------- |
|  +6.3% | +118.49ms | 99.6% | 1.88s → 1.99s | 758 → 821 | 2.5ms → 2.4ms | 137.9ms → 134.4ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

| Change |    Delta |             % |              Time |     Count |          Mean |               Max | Child                        |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | ----------------: | ---------------------------- |
|  +6.5% | +92.22ms | 74.9% → 75.1% |     1.40s → 1.50s | 594 → 643 | 2.4ms → 2.3ms | 114.3ms → 112.0ms | `CGSCCToFunctionPassAdaptor` |
|  +3.6% |  +8.51ms | 12.7% → 12.3% | 238.3ms → 246.8ms | 122 → 135 | 2.0ms → 1.8ms |   21.0ms → 19.3ms | `InlinerPass`                |
|  +1.3% |  +0.08ms |          0.3% |     6.3ms → 6.4ms |         5 |         1.3ms |     2.4ms → 2.7ms | `PostOrderFunctionAttrsPass` |

##### `CGSCCToFunctionPassAdaptor`

| Change |    Delta |     % |          Time |     Count |          Mean |               Max | Child                   |
| -----: | -------: | ----: | ------------: | --------: | ------------: | ----------------: | ----------------------- |
|  +6.5% | +91.23ms | 99.3% | 1.39s → 1.49s | 593 → 641 | 2.4ms → 2.3ms | 113.2ms → 110.2ms | `PassManager<Function>` |

##### `ModuleToFunctionPassAdaptor`

| Change |    Delta |             % |              Time |     Count |  Mean |             Max | Child                   |
| -----: | -------: | ------------: | ----------------: | --------: | ----: | --------------: | ----------------------- |
|  +8.2% | +37.11ms | 57.8% → 59.8% | 451.5ms → 488.6ms | 204 → 225 | 2.2ms | 34.9ms → 37.8ms | `PassManager<Function>` |

##### `ParseFunctionDefinition`

| Change |   Delta |            % |            Time |   Count |          Mean |           Max | Child                 |
| -----: | ------: | -----------: | --------------: | ------: | ------------: | ------------: | --------------------- |
|  -9.4% | -4.68ms | 10.6% → 9.0% | 49.9ms → 45.2ms | 35 → 30 | 1.4ms → 1.5ms | 8.7ms → 9.0ms | `InstantiateClass`    |
| +20.5% | +1.37ms |  1.4% → 1.6% |   6.7ms → 8.0ms |   5 → 4 | 1.3ms → 2.0ms | 4.1ms → 5.5ms | `InstantiateFunction` |

##### `OptFunction`

| Change |   Delta |             % |          Time |     Count |  Mean |               Max | Child     |
| -----: | ------: | ------------: | ------------: | --------: | ----: | ----------------: | --------- |
|  +0.6% | +9.12ms | 58.7% → 58.3% | 1.51s → 1.52s | 830 → 836 | 1.8ms | 103.8ms → 102.1ms | `RunPass` |

##### `CodeGenPasses`

| Change |    Delta |      % |          Time | Count |          Mean |           Max | Child       |
| -----: | -------: | -----: | ------------: | ----: | ------------: | ------------: | ----------- |
|  +0.9% | +26.44ms | 100.0% | 2.99s → 3.02s |     1 | 2.99s → 3.02s | 2.99s → 3.02s | `OptModule` |

##### `OptModule`

| Change |    Delta |             % |          Time |     Count |          Mean |               Max | Child         |
| -----: | -------: | ------------: | ------------: | --------: | ------------: | ----------------: | ------------- |
|  +1.2% | +30.96ms | 86.2% → 86.4% | 2.58s → 2.61s | 726 → 745 | 3.6ms → 3.5ms | 243.1ms → 235.8ms | `OptFunction` |

##### `ParseDeclarationOrFunctionDefinition`

|  Change |    Delta |             % |              Time |     Count |          Mean |             Max | Child                                  |
| ------: | -------: | ------------: | ----------------: | --------: | ------------: | --------------: | -------------------------------------- |
|   +7.7% | +34.00ms | 64.9% → 67.4% | 440.2ms → 474.2ms | 132 → 135 | 3.3ms → 3.5ms | 29.5ms → 40.0ms | `ParseFunctionDefinition`              |
|   -4.2% |  -5.44ms | 18.9% → 17.5% | 128.2ms → 122.8ms |   51 → 49 |         2.5ms | 11.3ms → 10.3ms | `ParseClass`                           |
| removed |  -0.60ms |   0.1% → 0.0% |       0.6ms → 0ms |     1 → 0 |   0.6ms → 0ms |     0.6ms → 0ms | `InstantiateClass`                     |
|   -9.6% |  -0.53ms |   0.8% → 0.7% |     5.6ms → 5.0ms |         3 | 1.9ms → 1.7ms |   3.3ms → 2.7ms | `ParseDeclarationOrFunctionDefinition` |

##### `InstantiateClass`

| Change |   Delta |             % |              Time |     Count |          Mean |           Max | Child                 |
| -----: | ------: | ------------: | ----------------: | --------: | ------------: | ------------: | --------------------- |
|  -1.5% | -6.71ms | 54.6% → 53.5% | 443.0ms → 436.3ms | 195 → 210 | 2.3ms → 2.1ms | 8.6ms → 9.0ms | `InstantiateClass`    |
| +19.7% | +6.29ms |   3.9% → 4.7% |   31.9ms → 38.2ms |   43 → 46 | 0.7ms → 0.8ms | 5.6ms → 6.1ms | `InstantiateFunction` |

##### `RunPass`

| Change |   Delta |            % |          Time | Count |  Mean |   Max | Child         |
| -----: | ------: | -----------: | ------------: | ----: | ----: | ----: | ------------- |
| +96.9% | +0.69ms | <0.1% → 0.1% | 0.7ms → 1.4ms | 1 → 2 | 0.7ms | 0.7ms | `RunLoopPass` |

##### `InlinerPass`

| Change |   Delta |           % |          Time |  Count |          Mean |           Max | Child                    |
| -----: | ------: | ----------: | ------------: | -----: | ------------: | ------------: | ------------------------ |
| +21.6% | +1.69ms | 3.3% → 3.8% | 7.8ms → 9.5ms | 6 → 10 | 1.3ms → 0.9ms | 2.1ms → 1.9ms | `BlockFrequencyAnalysis` |

##### `ParseClass`

| Change |   Delta |             % |            Time |   Count |          Mean |           Max | Child                 |
| -----: | ------: | ------------: | --------------: | ------: | ------------: | ------------: | --------------------- |
|  -6.0% | -4.81ms | 29.1% → 28.2% | 79.6ms → 74.8ms | 40 → 38 |         2.0ms | 6.8ms → 8.3ms | `InstantiateClass`    |
|  +3.5% | +0.70ms |   7.3% → 7.7% | 19.8ms → 20.5ms |       7 | 2.8ms → 2.9ms | 7.8ms → 9.3ms | `InstantiateFunction` |

##### `IPSCCPPass`

|  Change |   Delta |           % |        Time | Count |        Mean |         Max | Child                   |
| ------: | ------: | ----------: | ----------: | ----: | ----------: | ----------: | ----------------------- |
| removed | -0.61ms | 0.7% → 0.0% | 0.6ms → 0ms | 1 → 0 | 0.6ms → 0ms | 0.6ms → 0ms | `DominatorTreeAnalysis` |

##### `SROAPass`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Child                   |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | ----------------------- |
| +41.4% | +1.16ms | 13.8% → 20.6% | 2.8ms → 3.9ms | 3 → 4 | 0.9ms → 1.0ms | 1.3ms → 1.8ms | `DominatorTreeAnalysis` |

##### `ReversePostOrderFunctionAttrsPass`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Child                   |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | ----------------------- |
| -11.1% | -0.34ms | 27.5% → 26.4% | 3.1ms → 2.7ms |     1 | 3.1ms → 2.7ms | 3.1ms → 2.7ms | `LazyCallGraphAnalysis` |

##### `BranchProbabilityAnalysis`

| Change |   Delta |             % |          Time | Count |  Mean |           Max | Child          |
| -----: | ------: | ------------: | ------------: | ----: | ----: | ------------: | -------------- |
|  +5.6% | +0.17ms | 20.5% → 22.5% | 3.0ms → 3.1ms |     5 | 0.6ms | 0.7ms → 0.9ms | `LoopAnalysis` |

##### `AAManager`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Child     |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------- |
| -31.7% | -0.44ms | 99.4% → 99.6% | 1.4ms → 0.9ms | 2 → 1 | 0.7ms → 0.9ms | 0.8ms → 0.9ms | `BasicAA` |

##### `BasicAA`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Child                   |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | ----------------------- |
| -31.7% | -0.44ms | 99.6% → 99.7% | 1.4ms → 0.9ms | 2 → 1 | 0.7ms → 0.9ms | 0.8ms → 0.9ms | `DominatorTreeAnalysis` |

##### `SimplifyCFGPass`

| Change |   Delta |           % |        Time | Count |        Mean |         Max | Child              |
| -----: | ------: | ----------: | ----------: | ----: | ----------: | ----------: | ------------------ |
|    new | +0.51ms | 0.0% → 1.1% | 0ms → 0.5ms | 0 → 1 | 0ms → 0.5ms | 0ms → 0.5ms | `TargetIRAnalysis` |

##### `RequireAnalysisPass<llvm::GlobalsAA, llvm::Module, llvm::AnalysisManager<Module>>`

| Change |   Delta |              % |            Time | Count |            Mean |             Max | Child       |
| -----: | ------: | -------------: | --------------: | ----: | --------------: | --------------: | ----------- |
|  -0.8% | -0.16ms | 99.9% → 100.0% | 20.8ms → 20.7ms |     1 | 20.8ms → 20.7ms | 20.8ms → 20.7ms | `GlobalsAA` |

### Count

#### Regressions

Thread spans with the largest increase in occurrences recorded. Categories account for at least 1.0% of self time on the base or the current side.

|  Change | Delta |             % |         Count | Span                                                                                          |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------- |
|  +10.1% |  +172 | 20.9% → 21.6% | 1,696 → 1,868 | `InstantiateFunction`                                                                         |
|   +8.8% |   +70 |  9.8% → 10.1% |     799 → 869 | `PassManager<Function>`                                                                       |
|   +8.3% |   +63 |   9.3% → 9.5% |     758 → 821 | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|   +8.2% |   +62 |   9.3% → 9.5% |     759 → 821 | `DevirtSCCRepeatedPass`                                                                       |
|   +8.2% |   +49 |   7.3% → 7.4% |     594 → 643 | `CGSCCToFunctionPassAdaptor`                                                                  |
|   +7.1% |   +30 |          5.2% |     421 → 451 | `InstantiateClass`                                                                            |
|   +2.6% |   +19 |   8.9% → 8.6% |     726 → 745 | `OptFunction`                                                                                 |
|  +10.7% |   +13 |   1.5% → 1.6% |     122 → 135 | `InlinerPass`                                                                                 |
|  +14.3% |    +6 |   0.5% → 0.6% |       42 → 48 | `DSEPass`                                                                                     |
|   +0.7% |    +6 |  10.2% → 9.7% |     830 → 836 | `RunPass`                                                                                     |
|  +29.4% |    +5 |   0.2% → 0.3% |       17 → 22 | `BlockFrequencyAnalysis`                                                                      |
|   +9.3% |    +4 |          0.5% |       43 → 47 | `EarlyCSEPass`                                                                                |
|   +5.4% |    +3 |          0.7% |       56 → 59 | `GVNPass`                                                                                     |
|  +17.6% |    +3 |          0.2% |       17 → 20 | `ADCEPass`                                                                                    |
|   +1.4% |    +2 |   1.8% → 1.7% |     143 → 145 | `ParseClass`                                                                                  |
|   +2.7% |    +2 |          0.9% |       73 → 75 | `CodeGen Function`                                                                            |
| +100.0% |    +2 |         <0.1% |         2 → 4 | `LoopVectorizePass`                                                                           |
|   +0.5% |    +1 |   2.5% → 2.4% |     206 → 207 | `ParseDeclarationOrFunctionDefinition`                                                        |
|   +0.6% |    +1 |   2.0% → 1.9% |     162 → 163 | `ParseFunctionDefinition`                                                                     |
|   +2.2% |    +1 |   0.6% → 0.5% |       46 → 47 | `SimplifyCFGPass`                                                                             |

##### Compilation

|  Change | Delta |             % |         Count | Span                                                                                          |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------- |
|  +10.1% |  +172 | 20.9% → 21.6% | 1,696 → 1,868 | `InstantiateFunction`                                                                         |
|   +8.8% |   +70 |  9.8% → 10.1% |     799 → 869 | `PassManager<Function>`                                                                       |
|   +8.3% |   +63 |   9.3% → 9.5% |     758 → 821 | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|   +8.2% |   +62 |   9.3% → 9.5% |     759 → 821 | `DevirtSCCRepeatedPass`                                                                       |
|   +8.2% |   +49 |   7.3% → 7.4% |     594 → 643 | `CGSCCToFunctionPassAdaptor`                                                                  |
|   +7.1% |   +30 |          5.2% |     421 → 451 | `InstantiateClass`                                                                            |
|   +2.6% |   +19 |   8.9% → 8.6% |     726 → 745 | `OptFunction`                                                                                 |
|  +10.7% |   +13 |   1.5% → 1.6% |     122 → 135 | `InlinerPass`                                                                                 |
|  +14.3% |    +6 |   0.5% → 0.6% |       42 → 48 | `DSEPass`                                                                                     |
|   +0.7% |    +6 |  10.2% → 9.7% |     830 → 836 | `RunPass`                                                                                     |
|  +29.4% |    +5 |   0.2% → 0.3% |       17 → 22 | `BlockFrequencyAnalysis`                                                                      |
|   +9.3% |    +4 |          0.5% |       43 → 47 | `EarlyCSEPass`                                                                                |
|   +5.4% |    +3 |          0.7% |       56 → 59 | `GVNPass`                                                                                     |
|  +17.6% |    +3 |          0.2% |       17 → 20 | `ADCEPass`                                                                                    |
|   +2.7% |    +2 |          0.9% |       73 → 75 | `CodeGen Function`                                                                            |
| +100.0% |    +2 |         <0.1% |         2 → 4 | `LoopVectorizePass`                                                                           |
|   +2.2% |    +1 |   0.6% → 0.5% |       46 → 47 | `SimplifyCFGPass`                                                                             |
|   +0.4% |    +1 |   3.1% → 2.9% |     250 → 251 | `InstCombinePass`                                                                             |
|  +11.1% |    +1 |          0.1% |        9 → 10 | `LoopAnalysis`                                                                                |
|   +2.9% |    +1 |          0.4% |       35 → 36 | `JumpThreadingPass`                                                                           |

##### Parsing

| Change | Delta |           % |     Count | Span                                   |
| -----: | ----: | ----------: | --------: | -------------------------------------- |
|  +1.4% |    +2 | 1.8% → 1.7% | 143 → 145 | `ParseClass`                           |
|  +0.5% |    +1 | 2.5% → 2.4% | 206 → 207 | `ParseDeclarationOrFunctionDefinition` |
|  +0.6% |    +1 | 2.0% → 1.9% | 162 → 163 | `ParseFunctionDefinition`              |

#### Improvements

Thread spans with the largest decrease in occurrences recorded. Categories account for at least 1.0% of self time on the base or the current side.

##### Compilation

|  Change | Delta |            % |   Count | Span                               |
| ------: | ----: | -----------: | ------: | ---------------------------------- |
|  -15.8% |    -3 |         0.2% | 19 → 16 | `SROAPass`                         |
|   -4.3% |    -1 |         0.3% | 23 → 22 | `DominatorTreeAnalysis`            |
|   -6.7% |    -1 |         0.2% | 15 → 14 | `CorrelatedValuePropagationPass`   |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `AAManager`                        |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `BasicAA`                          |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `IndVarSimplifyPass`               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `EliminateAvailableExternallyPass` |
|   -6.3% |    -1 |         0.2% | 16 → 15 | `SLPVectorizerPass`                |
|  -33.3% |    -1 |        <0.1% |   3 → 2 | `InferAlignmentPass`               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LoopDeletionPass`                 |

## Longest async spans

Spans of operations that stay pending while threads do other work. Async spans overlap one another, so their times can sum to more than the trace's duration.

### Elapsed time

#### Improvements

Async spans with the largest decrease in time elapsed from start to end.

| Change |    Delta |              Time | Count |            Mean |               Max | Span     |
| -----: | -------: | ----------------: | ----: | --------------: | ----------------: | -------- |
|  -3.2% | -24.31ms | 757.5ms → 733.2ms |   195 | 13.5ms → 13.1ms | 433.5ms → 410.8ms | `Source` |

#### Attribute values

Attribute values with the largest change in contribution to each span's elapsed time.

##### `Source`

| Change |    Delta |             % |              Time | Count |              Mean |               Max | Attribute | Value                                                                    |
| -----: | -------: | ------------: | ----------------: | ----: | ----------------: | ----------------: | --------- | ------------------------------------------------------------------------ |
|  -5.2% | -22.68ms | 16.5% → 16.1% | 433.5ms → 410.8ms |     1 | 433.5ms → 410.8ms | 433.5ms → 410.8ms | `detail`  | `/src/fmt/test/gtest-extra.h`                                            |
|  -5.2% | -22.32ms | 16.4% → 16.0% | 430.0ms → 407.7ms |     1 | 430.0ms → 407.7ms | 430.0ms → 407.7ms | `detail`  | `/src/fmt/test/gtest/gmock/gmock.h`                                      |
|  -8.3% | -17.87ms |   8.2% → 7.8% | 215.2ms → 197.3ms |     1 | 215.2ms → 197.3ms | 215.2ms → 197.3ms | `detail`  | `/src/fmt/test/gtest/gtest/gtest.h`                                      |
|  -3.3% |  -7.97ms |          9.2% | 242.5ms → 234.5ms |     1 | 242.5ms → 234.5ms | 242.5ms → 234.5ms | `detail`  | `/src/fmt/include/fmt/format.h`                                          |
| -11.1% |  -7.85ms |   2.7% → 2.5% |   70.4ms → 62.6ms |     1 |   70.4ms → 62.6ms |   70.4ms → 62.6ms | `detail`  | `/usr/lib/gcc/aarch64-linux-gnu/14/../../../../include/c++/14/stdexcept` |

#### Parents

Parent spans with the largest change in contribution to each span's elapsed time.

##### `Source`

| Change |    Delta |     % |          Time | Count |           Mean |               Max | Parent   |
| -----: | -------: | ----: | ------------: | ----: | -------------: | ----------------: | -------- |
|  -3.2% | -59.84ms | 71.2% | 1.87s → 1.81s |   185 | 10.1ms → 9.8ms | 430.0ms → 407.7ms | `Source` |

#### Children

Child spans with the largest change in contribution to each span's elapsed time.

##### `Source`

| Change |    Delta |     % |          Time | Count |           Mean |               Max | Child    |
| -----: | -------: | ----: | ------------: | ----: | -------------: | ----------------: | -------- |
|  -3.2% | -59.84ms | 71.2% | 1.87s → 1.81s |   185 | 10.1ms → 9.8ms | 430.0ms → 407.7ms | `Source` |

### Count

No async span differed in occurrences recorded.
