# Trace diff

Recorded 740 → 891 events (+151, +20.4%) over 744.0ms → 940.4ms (+196.40ms, +26.4%).

| Category    | Change |     Delta |             % |              Time |     Count |
| ----------- | -----: | --------: | ------------: | ----------------: | --------: |
| Compilation | +25.6% | +186.12ms | 97.6% → 97.0% | 726.5ms → 912.6ms | 680 → 810 |
| Parsing     | +58.8% |  +10.28ms |   2.4% → 3.0% |   17.5ms → 27.8ms |   60 → 81 |

## Longest thread spans

Spans recorded on one thread. A span's time includes time its thread spent waiting.

### Self time

#### Regressions

Thread spans with the largest increase in time, excluding child spans. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time |     Count |            Mean |               Max | Span                                                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | --------------: | ----------------: | --------------------------------------------------------------------------------------------- |
|  +23.9% | +40.35ms | 22.7% → 22.3% | 169.0ms → 209.3ms | 130 → 147 |   1.3ms → 1.4ms |     4.3ms → 4.2ms | `PassManager<Function>`                                                                       |
|  +19.9% | +31.42ms | 21.3% → 20.2% | 158.2ms → 189.6ms |         2 | 79.1ms → 94.8ms | 145.0ms → 171.5ms | `Frontend`                                                                                    |
|  +28.7% | +30.91ms | 14.5% → 14.8% | 107.9ms → 138.8ms | 100 → 118 |   1.1ms → 1.2ms |     4.4ms → 5.6ms | `OptFunction`                                                                                 |
|  +42.1% | +28.43ms |  9.1% → 10.2% |   67.5ms → 95.9ms |   64 → 84 |           1.1ms |     4.1ms → 4.7ms | `RunPass`                                                                                     |
|  +23.4% |  +9.05ms |   5.2% → 5.1% |   38.6ms → 47.7ms |         1 | 38.6ms → 47.7ms |   38.6ms → 47.7ms | `OptModule`                                                                                   |
|  +55.6% |  +8.87ms |   2.1% → 2.6% |   15.9ms → 24.8ms |   18 → 27 |           0.9ms |     2.3ms → 3.9ms | `ParseFunctionDefinition`                                                                     |
| +238.6% |  +8.00ms |   0.5% → 1.2% |    3.4ms → 11.4ms |    6 → 19 |           0.6ms |     0.7ms → 0.8ms | `InstCombinePass`                                                                             |
|  +28.6% |  +7.88ms |   3.7% → 3.8% |   27.5ms → 35.4ms | 106 → 121 |           0.3ms |     0.7ms → 0.8ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  +10.5% |  +4.44ms |   5.7% → 5.0% |   42.3ms → 46.7ms |         1 | 42.3ms → 46.7ms |   42.3ms → 46.7ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  +92.0% |  +4.35ms |   0.6% → 1.0% |     4.7ms → 9.1ms |    6 → 12 |           0.8ms |     0.9ms → 1.0ms | `InlinerPass`                                                                                 |
|   +8.8% |  +4.04ms |   6.2% → 5.3% |   46.0ms → 50.0ms |         3 | 15.3ms → 16.7ms |   15.9ms → 17.4ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  +26.5% |  +3.41ms |          1.7% |   12.9ms → 16.3ms |   10 → 12 |   1.3ms → 1.4ms |     3.0ms → 3.4ms | `GVNPass`                                                                                     |
|  +68.5% |  +2.01ms |   0.4% → 0.5% |     2.9ms → 4.9ms |     5 → 9 |   0.6ms → 0.5ms |     0.7ms → 0.9ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`         |
|  +55.2% |  +1.69ms |   0.4% → 0.5% |     3.1ms → 4.7ms |     3 → 5 |   1.0ms → 0.9ms |     1.4ms → 1.6ms | `LoopVectorizePass`                                                                           |
|  +63.9% |  +1.64ms |   0.3% → 0.4% |     2.6ms → 4.2ms |     4 → 6 |   0.6ms → 0.7ms |     0.8ms → 0.9ms | `SLPVectorizerPass`                                                                           |
|  +90.6% |  +1.41ms |   0.2% → 0.3% |     1.6ms → 3.0ms |   20 → 31 |           0.1ms |     0.9ms → 1.0ms | `ParseDeclarationOrFunctionDefinition`                                                        |
|     new |  +1.10ms |   0.0% → 0.1% |       0ms → 1.1ms |     0 → 2 |     0ms → 0.6ms |       0ms → 0.6ms | `LoopFullUnrollPass`                                                                          |
|  +32.3% |  +0.84ms |          0.4% |     2.6ms → 3.5ms |         1 |   2.6ms → 3.5ms |     2.6ms → 3.5ms | `ExecuteCompiler`                                                                             |
|  +24.0% |  +0.75ms |          0.4% |     3.1ms → 3.9ms |         5 |   0.6ms → 0.8ms |     0.9ms → 1.1ms | `CodeGen Function`                                                                            |
|  +51.7% |  +0.71ms |          0.2% |     1.4ms → 2.1ms |         1 |   1.4ms → 2.1ms |     1.4ms → 2.1ms | `Backend`                                                                                     |

##### Compilation

|  Change |    Delta |             % |              Time |     Count |            Mean |               Max | Span                                                                                          |
| ------: | -------: | ------------: | ----------------: | --------: | --------------: | ----------------: | --------------------------------------------------------------------------------------------- |
|  +23.9% | +40.35ms | 22.7% → 22.3% | 169.0ms → 209.3ms | 130 → 147 |   1.3ms → 1.4ms |     4.3ms → 4.2ms | `PassManager<Function>`                                                                       |
|  +19.9% | +31.42ms | 21.3% → 20.2% | 158.2ms → 189.6ms |         2 | 79.1ms → 94.8ms | 145.0ms → 171.5ms | `Frontend`                                                                                    |
|  +28.7% | +30.91ms | 14.5% → 14.8% | 107.9ms → 138.8ms | 100 → 118 |   1.1ms → 1.2ms |     4.4ms → 5.6ms | `OptFunction`                                                                                 |
|  +42.1% | +28.43ms |  9.1% → 10.2% |   67.5ms → 95.9ms |   64 → 84 |           1.1ms |     4.1ms → 4.7ms | `RunPass`                                                                                     |
|  +23.4% |  +9.05ms |   5.2% → 5.1% |   38.6ms → 47.7ms |         1 | 38.6ms → 47.7ms |   38.6ms → 47.7ms | `OptModule`                                                                                   |
| +238.6% |  +8.00ms |   0.5% → 1.2% |    3.4ms → 11.4ms |    6 → 19 |           0.6ms |     0.7ms → 0.8ms | `InstCombinePass`                                                                             |
|  +28.6% |  +7.88ms |   3.7% → 3.8% |   27.5ms → 35.4ms | 106 → 121 |           0.3ms |     0.7ms → 0.8ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  +10.5% |  +4.44ms |   5.7% → 5.0% |   42.3ms → 46.7ms |         1 | 42.3ms → 46.7ms |   42.3ms → 46.7ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  +92.0% |  +4.35ms |   0.6% → 1.0% |     4.7ms → 9.1ms |    6 → 12 |           0.8ms |     0.9ms → 1.0ms | `InlinerPass`                                                                                 |
|   +8.8% |  +4.04ms |   6.2% → 5.3% |   46.0ms → 50.0ms |         3 | 15.3ms → 16.7ms |   15.9ms → 17.4ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  +26.5% |  +3.41ms |          1.7% |   12.9ms → 16.3ms |   10 → 12 |   1.3ms → 1.4ms |     3.0ms → 3.4ms | `GVNPass`                                                                                     |
|  +68.5% |  +2.01ms |   0.4% → 0.5% |     2.9ms → 4.9ms |     5 → 9 |   0.6ms → 0.5ms |     0.7ms → 0.9ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`         |
|  +55.2% |  +1.69ms |   0.4% → 0.5% |     3.1ms → 4.7ms |     3 → 5 |   1.0ms → 0.9ms |     1.4ms → 1.6ms | `LoopVectorizePass`                                                                           |
|  +63.9% |  +1.64ms |   0.3% → 0.4% |     2.6ms → 4.2ms |     4 → 6 |   0.6ms → 0.7ms |     0.8ms → 0.9ms | `SLPVectorizerPass`                                                                           |
|     new |  +1.10ms |   0.0% → 0.1% |       0ms → 1.1ms |     0 → 2 |     0ms → 0.6ms |       0ms → 0.6ms | `LoopFullUnrollPass`                                                                          |
|  +32.3% |  +0.84ms |          0.4% |     2.6ms → 3.5ms |         1 |   2.6ms → 3.5ms |     2.6ms → 3.5ms | `ExecuteCompiler`                                                                             |
|  +24.0% |  +0.75ms |          0.4% |     3.1ms → 3.9ms |         5 |   0.6ms → 0.8ms |     0.9ms → 1.1ms | `CodeGen Function`                                                                            |
|  +51.7% |  +0.71ms |          0.2% |     1.4ms → 2.1ms |         1 |   1.4ms → 2.1ms |     1.4ms → 2.1ms | `Backend`                                                                                     |
|     new |  +0.59ms |   0.0% → 0.1% |       0ms → 0.6ms |     0 → 1 |     0ms → 0.6ms |       0ms → 0.6ms | `RunLoopPass`                                                                                 |
|     new |  +0.56ms |   0.0% → 0.1% |       0ms → 0.6ms |     0 → 1 |     0ms → 0.6ms |       0ms → 0.6ms | `ReversePostOrderFunctionAttrsPass`                                                           |

##### Parsing

| Change |   Delta |           % |            Time |   Count |  Mean |           Max | Span                                   |
| -----: | ------: | ----------: | --------------: | ------: | ----: | ------------: | -------------------------------------- |
| +55.6% | +8.87ms | 2.1% → 2.6% | 15.9ms → 24.8ms | 18 → 27 | 0.9ms | 2.3ms → 3.9ms | `ParseFunctionDefinition`              |
| +90.6% | +1.41ms | 0.2% → 0.3% |   1.6ms → 3.0ms | 20 → 31 | 0.1ms | 0.9ms → 1.0ms | `ParseDeclarationOrFunctionDefinition` |

#### Improvements

Thread spans with the largest decrease in time, excluding child spans. Categories account for at least 1.0% of self time on the base or the current side.

##### Compilation

| Change |   Delta |           % |          Time | Count |          Mean |           Max | Span               |
| -----: | ------: | ----------: | ------------: | ----: | ------------: | ------------: | ------------------ |
|  -4.8% | -0.18ms | 0.5% → 0.4% | 3.7ms → 3.5ms |     2 |         1.8ms | 2.7ms → 2.6ms | `GlobalOptPass`    |
|  -1.2% | -0.08ms | 1.0% → 0.8% | 7.3ms → 7.2ms |     1 | 7.3ms → 7.2ms | 7.3ms → 7.2ms | `IPSCCPPass`       |
| -28.7% | -0.05ms |       <0.1% | 0.2ms → 0.1ms |     1 | 0.2ms → 0.1ms | 0.2ms → 0.1ms | `SimplifyCFGPass`  |
|  -6.5% | -0.04ms |        0.1% | 0.6ms → 0.5ms |     1 | 0.6ms → 0.5ms | 0.6ms → 0.5ms | `TargetIRAnalysis` |

#### Parents

Parent spans with the largest change in contribution to each span's self time.

##### `PassManager<Function>`

| Change |    Delta |     % |              Time |    Count |          Mean |           Max | Parent                        |
| -----: | -------: | ----: | ----------------: | -------: | ------------: | ------------: | ----------------------------- |
| +24.0% | +31.09ms | 76.8% | 129.7ms → 160.8ms | 94 → 102 | 1.4ms → 1.6ms | 4.3ms → 4.2ms | `CGSCCToFunctionPassAdaptor`  |
| +23.6% |  +9.26ms | 23.2% |   39.2ms → 48.5ms |  36 → 45 |         1.1ms | 3.1ms → 3.7ms | `ModuleToFunctionPassAdaptor` |

##### `Frontend`

| Change |    Delta |      % |              Time | Count |            Mean |               Max | Parent            |
| -----: | -------: | -----: | ----------------: | ----: | --------------: | ----------------: | ----------------- |
| +19.9% | +31.42ms | 100.0% | 158.2ms → 189.6ms |     2 | 79.1ms → 94.8ms | 145.0ms → 171.5ms | `ExecuteCompiler` |

##### `OptFunction`

| Change |    Delta |      % |              Time |     Count |          Mean |           Max | Parent      |
| -----: | -------: | -----: | ----------------: | --------: | ------------: | ------------: | ----------- |
| +28.7% | +30.91ms | 100.0% | 107.9ms → 138.8ms | 100 → 118 | 1.1ms → 1.2ms | 4.4ms → 5.6ms | `OptModule` |

##### `RunPass`

| Change |    Delta |      % |            Time |   Count |  Mean |           Max | Parent        |
| -----: | -------: | -----: | --------------: | ------: | ----: | ------------: | ------------- |
| +42.1% | +28.43ms | 100.0% | 67.5ms → 95.9ms | 64 → 84 | 1.1ms | 4.1ms → 4.7ms | `OptFunction` |

##### `OptModule`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Parent          |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | --------------- |
| +23.4% | +9.05ms | 100.0% | 38.6ms → 47.7ms |     1 | 38.6ms → 47.7ms | 38.6ms → 47.7ms | `CodeGenPasses` |

##### `ParseFunctionDefinition`

| Change |   Delta |      % |            Time |   Count |  Mean |           Max | Parent                                 |
| -----: | ------: | -----: | --------------: | ------: | ----: | ------------: | -------------------------------------- |
| +55.6% | +8.87ms | 100.0% | 15.9ms → 24.8ms | 18 → 27 | 0.9ms | 2.3ms → 3.9ms | `ParseDeclarationOrFunctionDefinition` |

##### `InstCombinePass`

|  Change |   Delta |      % |           Time |  Count |  Mean |           Max | Parent                  |
| ------: | ------: | -----: | -------------: | -----: | ----: | ------------: | ----------------------- |
| +238.6% | +8.00ms | 100.0% | 3.4ms → 11.4ms | 6 → 19 | 0.6ms | 0.7ms → 0.8ms | `PassManager<Function>` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

| Change |   Delta |      % |            Time |     Count |  Mean |           Max | Parent                  |
| -----: | ------: | -----: | --------------: | --------: | ----: | ------------: | ----------------------- |
| +28.6% | +7.88ms | 100.0% | 27.5ms → 35.4ms | 106 → 121 | 0.3ms | 0.7ms → 0.8ms | `DevirtSCCRepeatedPass` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Parent                     |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | -------------------------- |
| +10.5% | +4.44ms | 100.0% | 42.3ms → 46.7ms |     1 | 42.3ms → 46.7ms | 42.3ms → 46.7ms | `ModuleInlinerWrapperPass` |

##### `InlinerPass`

| Change |   Delta |      % |          Time |  Count |  Mean |           Max | Parent                                                                                        |
| -----: | ------: | -----: | ------------: | -----: | ----: | ------------: | --------------------------------------------------------------------------------------------- |
| +92.0% | +4.35ms | 100.0% | 4.7ms → 9.1ms | 6 → 12 | 0.8ms | 0.9ms → 1.0ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `ModuleToFunctionPassAdaptor`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Parent      |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | ----------- |
|  +8.8% | +4.04ms | 100.0% | 46.0ms → 50.0ms |     3 | 15.3ms → 16.7ms | 15.9ms → 17.4ms | `Optimizer` |

##### `GVNPass`

| Change |   Delta |      % |            Time |   Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | --------------: | ------: | ------------: | ------------: | ----------------------- |
| +26.5% | +3.41ms | 100.0% | 12.9ms → 16.3ms | 10 → 12 | 1.3ms → 1.4ms | 3.0ms → 3.4ms | `PassManager<Function>` |

##### `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                      |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | --------------------------- |
| +68.5% | +2.01ms | 100.0% | 2.9ms → 4.9ms | 5 → 9 | 0.6ms → 0.5ms | 0.7ms → 0.9ms | `FunctionToLoopPassAdaptor` |

##### `LoopVectorizePass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------------- |
| +55.2% | +1.69ms | 100.0% | 3.1ms → 4.7ms | 3 → 5 | 1.0ms → 0.9ms | 1.4ms → 1.6ms | `PassManager<Function>` |

##### `SLPVectorizerPass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------------- |
| +63.9% | +1.64ms | 100.0% | 2.6ms → 4.2ms | 4 → 6 | 0.6ms → 0.7ms | 0.8ms → 0.9ms | `PassManager<Function>` |

##### `ParseDeclarationOrFunctionDefinition`

| Change |   Delta |      % |          Time |   Count |  Mean |           Max | Parent     |
| -----: | ------: | -----: | ------------: | ------: | ----: | ------------: | ---------- |
| +90.6% | +1.41ms | 100.0% | 1.6ms → 3.0ms | 20 → 31 | 0.1ms | 0.9ms → 1.0ms | `Frontend` |

##### `LoopFullUnrollPass`

| Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent                                                                                |
| -----: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ------------------------------------------------------------------------------------- |
|    new | +1.10ms | 0.0% → 100.0% | 0ms → 1.1ms | 0 → 2 | 0ms → 0.6ms | 0ms → 0.6ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>` |

##### `CodeGen Function`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent     |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------- |
| +24.0% | +0.75ms | 100.0% | 3.1ms → 3.9ms |     5 | 0.6ms → 0.8ms | 0.9ms → 1.1ms | `Frontend` |

##### `Backend`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent            |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------- |
| +51.7% | +0.71ms | 100.0% | 1.4ms → 2.1ms |     1 | 1.4ms → 2.1ms | 1.4ms → 2.1ms | `ExecuteCompiler` |

##### `RunLoopPass`

| Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent    |
| -----: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | --------- |
|    new | +0.59ms | 0.0% → 100.0% | 0ms → 0.6ms | 0 → 1 | 0ms → 0.6ms | 0ms → 0.6ms | `RunPass` |

##### `ReversePostOrderFunctionAttrsPass`

| Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent      |
| -----: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ----------- |
|    new | +0.56ms | 0.0% → 100.0% | 0ms → 0.6ms | 0 → 1 | 0ms → 0.6ms | 0ms → 0.6ms | `Optimizer` |

##### `GlobalOptPass`

| Change |   Delta |      % |          Time | Count |  Mean |           Max | Parent      |
| -----: | ------: | -----: | ------------: | ----: | ----: | ------------: | ----------- |
|  -4.8% | -0.18ms | 100.0% | 3.7ms → 3.5ms |     2 | 1.8ms | 2.7ms → 2.6ms | `Optimizer` |

##### `IPSCCPPass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent      |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------- |
|  -1.2% | -0.08ms | 100.0% | 7.3ms → 7.2ms |     1 | 7.3ms → 7.2ms | 7.3ms → 7.2ms | `Optimizer` |

##### `SimplifyCFGPass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------------- |
| -28.7% | -0.05ms | 100.0% | 0.2ms → 0.1ms |     1 | 0.2ms → 0.1ms | 0.2ms → 0.1ms | `PassManager<Function>` |

##### `TargetIRAnalysis`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent            |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------- |
|  -6.5% | -0.04ms | 100.0% | 0.6ms → 0.5ms |     1 | 0.6ms → 0.5ms | 0.6ms → 0.5ms | `SimplifyCFGPass` |

### Total time

#### Regressions

Thread spans with the largest increase in time, including child spans. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time |     Count |              Mean |               Max | Span                                                                                          |
| ------: | --------: | ------------: | ----------------: | --------: | ----------------: | ----------------: | --------------------------------------------------------------------------------------------- |
|  +26.4% | +196.40ms |        100.0% | 744.0ms → 940.4ms |         1 | 744.0ms → 940.4ms | 744.0ms → 940.4ms | `ExecuteCompiler`                                                                             |
|  +27.2% | +153.10ms | 75.6% → 76.1% | 562.5ms → 715.6ms |         1 | 562.5ms → 715.6ms | 562.5ms → 715.6ms | `Backend`                                                                                     |
|  +24.0% |  +83.30ms | 46.7% → 45.8% | 347.1ms → 430.4ms |         1 | 347.1ms → 430.4ms | 347.1ms → 430.4ms | `Optimizer`                                                                                   |
|  +32.3% |  +69.09ms | 28.8% → 30.1% | 214.1ms → 283.2ms |         1 | 214.1ms → 283.2ms | 214.1ms → 283.2ms | `CodeGenPasses`                                                                               |
|  +32.2% |  +68.99ms | 28.8% → 30.1% | 214.0ms → 283.0ms |         1 | 214.0ms → 283.0ms | 214.0ms → 283.0ms | `OptModule`                                                                                   |
|  +26.4% |  +62.28ms |         31.7% | 235.8ms → 298.1ms |         1 | 235.8ms → 298.1ms | 235.8ms → 298.1ms | `ModuleInlinerWrapperPass`                                                                    |
|  +26.5% |  +62.11ms |         31.5% | 234.4ms → 296.5ms |         1 | 234.4ms → 296.5ms | 234.4ms → 296.5ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  +29.6% |  +60.72ms | 27.5% → 28.2% | 204.9ms → 265.6ms | 130 → 147 |     1.6ms → 1.8ms |    9.6ms → 12.0ms | `PassManager<Function>`                                                                       |
|  +34.2% |  +59.94ms | 23.6% → 25.0% | 175.3ms → 235.3ms | 100 → 118 |     1.8ms → 2.0ms |   10.4ms → 13.5ms | `OptFunction`                                                                                 |
|  +30.0% |  +57.66ms | 25.8% → 26.6% | 192.2ms → 249.8ms | 106 → 121 |     1.8ms → 2.1ms |   10.8ms → 13.3ms | `DevirtSCCRepeatedPass`                                                                       |
|  +29.9% |  +57.27ms | 25.8% → 26.5% | 191.8ms → 249.1ms | 106 → 121 |     1.8ms → 2.1ms |   10.8ms → 13.3ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  +28.2% |  +45.04ms | 21.4% → 21.8% | 159.5ms → 204.6ms |  94 → 102 |     1.7ms → 2.0ms |    9.7ms → 12.0ms | `CGSCCToFunctionPassAdaptor`                                                                  |
|  +23.7% |  +42.46ms | 24.0% → 23.5% | 178.8ms → 221.2ms |         2 |  89.4ms → 110.6ms | 163.9ms → 200.4ms | `Frontend`                                                                                    |
|  +43.0% |  +29.02ms |  9.1% → 10.3% |   67.5ms → 96.5ms |   64 → 84 |             1.1ms |     4.1ms → 4.7ms | `RunPass`                                                                                     |
|  +21.5% |  +19.84ms | 12.4% → 11.9% |  92.2ms → 112.0ms |         3 |   30.7ms → 37.3ms |   60.5ms → 75.8ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  +58.8% |  +10.28ms |   2.4% → 3.0% |   17.5ms → 27.8ms |   20 → 31 |             0.9ms |     2.3ms → 3.9ms | `ParseDeclarationOrFunctionDefinition`                                                        |
|  +55.6% |   +8.87ms |   2.1% → 2.6% |   15.9ms → 24.8ms |   18 → 27 |             0.9ms |     2.3ms → 3.9ms | `ParseFunctionDefinition`                                                                     |
| +238.6% |   +8.00ms |   0.5% → 1.2% |    3.4ms → 11.4ms |    6 → 19 |             0.6ms |     0.7ms → 0.8ms | `InstCombinePass`                                                                             |
|  +92.0% |   +4.35ms |   0.6% → 1.0% |     4.7ms → 9.1ms |    6 → 12 |             0.8ms |     0.9ms → 1.0ms | `InlinerPass`                                                                                 |
|  +39.1% |   +3.58ms |   1.2% → 1.4% |    9.2ms → 12.7ms |   13 → 14 |     0.7ms → 0.9ms |     1.2ms → 1.9ms | `FunctionToLoopPassAdaptor`                                                                   |

##### Compilation

|  Change |     Delta |             % |              Time |     Count |              Mean |               Max | Span                                                                                          |
| ------: | --------: | ------------: | ----------------: | --------: | ----------------: | ----------------: | --------------------------------------------------------------------------------------------- |
|  +26.4% | +196.40ms |        100.0% | 744.0ms → 940.4ms |         1 | 744.0ms → 940.4ms | 744.0ms → 940.4ms | `ExecuteCompiler`                                                                             |
|  +27.2% | +153.10ms | 75.6% → 76.1% | 562.5ms → 715.6ms |         1 | 562.5ms → 715.6ms | 562.5ms → 715.6ms | `Backend`                                                                                     |
|  +24.0% |  +83.30ms | 46.7% → 45.8% | 347.1ms → 430.4ms |         1 | 347.1ms → 430.4ms | 347.1ms → 430.4ms | `Optimizer`                                                                                   |
|  +32.3% |  +69.09ms | 28.8% → 30.1% | 214.1ms → 283.2ms |         1 | 214.1ms → 283.2ms | 214.1ms → 283.2ms | `CodeGenPasses`                                                                               |
|  +32.2% |  +68.99ms | 28.8% → 30.1% | 214.0ms → 283.0ms |         1 | 214.0ms → 283.0ms | 214.0ms → 283.0ms | `OptModule`                                                                                   |
|  +26.4% |  +62.28ms |         31.7% | 235.8ms → 298.1ms |         1 | 235.8ms → 298.1ms | 235.8ms → 298.1ms | `ModuleInlinerWrapperPass`                                                                    |
|  +26.5% |  +62.11ms |         31.5% | 234.4ms → 296.5ms |         1 | 234.4ms → 296.5ms | 234.4ms → 296.5ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  +29.6% |  +60.72ms | 27.5% → 28.2% | 204.9ms → 265.6ms | 130 → 147 |     1.6ms → 1.8ms |    9.6ms → 12.0ms | `PassManager<Function>`                                                                       |
|  +34.2% |  +59.94ms | 23.6% → 25.0% | 175.3ms → 235.3ms | 100 → 118 |     1.8ms → 2.0ms |   10.4ms → 13.5ms | `OptFunction`                                                                                 |
|  +30.0% |  +57.66ms | 25.8% → 26.6% | 192.2ms → 249.8ms | 106 → 121 |     1.8ms → 2.1ms |   10.8ms → 13.3ms | `DevirtSCCRepeatedPass`                                                                       |
|  +29.9% |  +57.27ms | 25.8% → 26.5% | 191.8ms → 249.1ms | 106 → 121 |     1.8ms → 2.1ms |   10.8ms → 13.3ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  +28.2% |  +45.04ms | 21.4% → 21.8% | 159.5ms → 204.6ms |  94 → 102 |     1.7ms → 2.0ms |    9.7ms → 12.0ms | `CGSCCToFunctionPassAdaptor`                                                                  |
|  +23.7% |  +42.46ms | 24.0% → 23.5% | 178.8ms → 221.2ms |         2 |  89.4ms → 110.6ms | 163.9ms → 200.4ms | `Frontend`                                                                                    |
|  +43.0% |  +29.02ms |  9.1% → 10.3% |   67.5ms → 96.5ms |   64 → 84 |             1.1ms |     4.1ms → 4.7ms | `RunPass`                                                                                     |
|  +21.5% |  +19.84ms | 12.4% → 11.9% |  92.2ms → 112.0ms |         3 |   30.7ms → 37.3ms |   60.5ms → 75.8ms | `ModuleToFunctionPassAdaptor`                                                                 |
| +238.6% |   +8.00ms |   0.5% → 1.2% |    3.4ms → 11.4ms |    6 → 19 |             0.6ms |     0.7ms → 0.8ms | `InstCombinePass`                                                                             |
|  +92.0% |   +4.35ms |   0.6% → 1.0% |     4.7ms → 9.1ms |    6 → 12 |             0.8ms |     0.9ms → 1.0ms | `InlinerPass`                                                                                 |
|  +39.1% |   +3.58ms |   1.2% → 1.4% |    9.2ms → 12.7ms |   13 → 14 |     0.7ms → 0.9ms |     1.2ms → 1.9ms | `FunctionToLoopPassAdaptor`                                                                   |
|  +26.5% |   +3.41ms |          1.7% |   12.9ms → 16.3ms |   10 → 12 |     1.3ms → 1.4ms |     3.0ms → 3.4ms | `GVNPass`                                                                                     |
| +106.2% |   +3.11ms |   0.4% → 0.6% |     2.9ms → 6.0ms |     5 → 9 |     0.6ms → 0.7ms |     0.7ms → 0.9ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`         |

##### Parsing

| Change |    Delta |           % |            Time |   Count |  Mean |           Max | Span                                   |
| -----: | -------: | ----------: | --------------: | ------: | ----: | ------------: | -------------------------------------- |
| +58.8% | +10.28ms | 2.4% → 3.0% | 17.5ms → 27.8ms | 20 → 31 | 0.9ms | 2.3ms → 3.9ms | `ParseDeclarationOrFunctionDefinition` |
| +55.6% |  +8.87ms | 2.1% → 2.6% | 15.9ms → 24.8ms | 18 → 27 | 0.9ms | 2.3ms → 3.9ms | `ParseFunctionDefinition`              |

#### Improvements

Thread spans with the largest decrease in time, including child spans. Categories account for at least 1.0% of self time on the base or the current side.

##### Compilation

| Change |   Delta |           % |          Time | Count |          Mean |           Max | Span               |
| -----: | ------: | ----------: | ------------: | ----: | ------------: | ------------: | ------------------ |
|  -4.8% | -0.18ms | 0.5% → 0.4% | 3.7ms → 3.5ms |     2 |         1.8ms | 2.7ms → 2.6ms | `GlobalOptPass`    |
| -11.7% | -0.09ms |        0.1% | 0.8ms → 0.7ms |     1 | 0.8ms → 0.7ms | 0.8ms → 0.7ms | `SimplifyCFGPass`  |
|  -1.2% | -0.08ms | 1.0% → 0.8% | 7.3ms → 7.2ms |     1 | 7.3ms → 7.2ms | 7.3ms → 7.2ms | `IPSCCPPass`       |
|  -6.5% | -0.04ms |        0.1% | 0.6ms → 0.5ms |     1 | 0.6ms → 0.5ms | 0.6ms → 0.5ms | `TargetIRAnalysis` |

#### Attribute values

Attribute values with the largest change in contribution to each span's total time.

##### `OptModule`

| Change |    Delta |      % |              Time | Count |              Mean |               Max | Attribute | Value                                    |
| -----: | -------: | -----: | ----------------: | ----: | ----------------: | ----------------: | --------- | ---------------------------------------- |
| +32.2% | +68.99ms | 100.0% | 214.0ms → 283.0ms |     1 | 214.0ms → 283.0ms | 214.0ms → 283.0ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c` |

##### `ModuleInlinerWrapperPass`

| Change |    Delta |      % |              Time | Count |              Mean |               Max | Attribute | Value      |
| -----: | -------: | -----: | ----------------: | ----: | ----------------: | ----------------: | --------- | ---------- |
| +26.4% | +62.28ms | 100.0% | 235.8ms → 298.1ms |     1 | 235.8ms → 298.1ms | 235.8ms → 298.1ms | `detail`  | `[module]` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

| Change |    Delta |      % |              Time | Count |              Mean |               Max | Attribute | Value      |
| -----: | -------: | -----: | ----------------: | ----: | ----------------: | ----------------: | --------- | ---------- |
| +26.5% | +62.11ms | 100.0% | 234.4ms → 296.5ms |     1 | 234.4ms → 296.5ms | 234.4ms → 296.5ms | `detail`  | `[module]` |

##### `PassManager<Function>`

|  Change |    Delta |           % |         Time | Count |        Mean |         Max | Attribute | Value                                            |
| ------: | -------: | ----------: | -----------: | ----: | ----------: | ----------: | --------- | ------------------------------------------------ |
|     new | +10.03ms | 0.0% → 3.8% | 0ms → 10.0ms | 0 → 2 | 0ms → 5.0ms | 0ms → 6.3ms | `detail`  | `ZSTD_transferSequences_noDelim`                 |
|     new |  +9.91ms | 0.0% → 3.7% |  0ms → 9.9ms | 0 → 2 | 0ms → 5.0ms | 0ms → 6.2ms | `detail`  | `ZSTD_transferSequences_wBlockDelim`             |
| removed |  -8.21ms | 4.0% → 0.0% |  8.2ms → 0ms | 2 → 0 | 4.1ms → 0ms | 5.1ms → 0ms | `detail`  | `ZSTD_copySequencesToSeqStoreNoBlockDelim`       |
| removed |  -7.84ms | 3.8% → 0.0% |  7.8ms → 0ms | 2 → 0 | 3.9ms → 0ms | 4.8ms → 0ms | `detail`  | `ZSTD_copySequencesToSeqStoreExplicitBlockDelim` |
|     new |  +4.73ms | 0.0% → 1.8% |  0ms → 4.7ms | 0 → 2 | 0ms → 2.4ms | 0ms → 3.3ms | `detail`  | `ZSTD_convertBlockSequences`                     |

##### `OptFunction`

|  Change |   Delta |           % |        Time | Count |        Mean |         Max | Attribute | Value                                            |
| ------: | ------: | ----------: | ----------: | ----: | ----------: | ----------: | --------- | ------------------------------------------------ |
|     new | +8.10ms | 0.0% → 3.4% | 0ms → 8.1ms | 0 → 3 | 0ms → 2.7ms | 0ms → 5.9ms | `detail`  | `ZSTD_transferSequences_wBlockDelim`             |
|     new | +7.29ms | 0.0% → 3.1% | 0ms → 7.3ms | 0 → 2 | 0ms → 3.6ms | 0ms → 5.8ms | `detail`  | `ZSTD_transferSequences_noDelim`                 |
| removed | -6.44ms | 3.7% → 0.0% | 6.4ms → 0ms | 3 → 0 | 2.1ms → 0ms | 4.6ms → 0ms | `detail`  | `ZSTD_copySequencesToSeqStoreExplicitBlockDelim` |
| removed | -5.97ms | 3.4% → 0.0% | 6.0ms → 0ms | 2 → 0 | 3.0ms → 0ms | 4.8ms → 0ms | `detail`  | `ZSTD_copySequencesToSeqStoreNoBlockDelim`       |
|     new | +4.99ms | 0.0% → 2.1% | 0ms → 5.0ms | 0 → 2 | 0ms → 2.5ms | 0ms → 3.6ms | `detail`  | `ZSTD_convertBlockSequences`                     |

##### `DevirtSCCRepeatedPass`

|  Change |   Delta |           % |        Time | Count |        Mean |         Max | Attribute | Value                                              |
| ------: | ------: | ----------: | ----------: | ----: | ----------: | ----------: | --------- | -------------------------------------------------- |
|     new | +6.74ms | 0.0% → 2.7% | 0ms → 6.7ms | 0 → 1 | 0ms → 6.7ms | 0ms → 6.7ms | `detail`  | `(ZSTD_transferSequences_noDelim)`                 |
|     new | +6.59ms | 0.0% → 2.6% | 0ms → 6.6ms | 0 → 1 | 0ms → 6.6ms | 0ms → 6.6ms | `detail`  | `(ZSTD_transferSequences_wBlockDelim)`             |
| removed | -5.45ms | 2.8% → 0.0% | 5.5ms → 0ms | 1 → 0 | 5.5ms → 0ms | 5.5ms → 0ms | `detail`  | `(ZSTD_copySequencesToSeqStoreNoBlockDelim)`       |
| removed | -5.26ms | 2.7% → 0.0% | 5.3ms → 0ms | 1 → 0 | 5.3ms → 0ms | 5.3ms → 0ms | `detail`  | `(ZSTD_copySequencesToSeqStoreExplicitBlockDelim)` |
|     new | +3.60ms | 0.0% → 1.4% | 0ms → 3.6ms | 0 → 1 | 0ms → 3.6ms | 0ms → 3.6ms | `detail`  | `(ZSTD_convertBlockSequences)`                     |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|  Change |   Delta |           % |        Time | Count |        Mean |         Max | Attribute | Value                                              |
| ------: | ------: | ----------: | ----------: | ----: | ----------: | ----------: | --------- | -------------------------------------------------- |
|     new | +6.71ms | 0.0% → 2.7% | 0ms → 6.7ms | 0 → 1 | 0ms → 6.7ms | 0ms → 6.7ms | `detail`  | `(ZSTD_transferSequences_noDelim)`                 |
|     new | +6.58ms | 0.0% → 2.6% | 0ms → 6.6ms | 0 → 1 | 0ms → 6.6ms | 0ms → 6.6ms | `detail`  | `(ZSTD_transferSequences_wBlockDelim)`             |
| removed | -5.44ms | 2.8% → 0.0% | 5.4ms → 0ms | 1 → 0 | 5.4ms → 0ms | 5.4ms → 0ms | `detail`  | `(ZSTD_copySequencesToSeqStoreNoBlockDelim)`       |
| removed | -5.25ms | 2.7% → 0.0% | 5.3ms → 0ms | 1 → 0 | 5.3ms → 0ms | 5.3ms → 0ms | `detail`  | `(ZSTD_copySequencesToSeqStoreExplicitBlockDelim)` |
|     new | +3.59ms | 0.0% → 1.4% | 0ms → 3.6ms | 0 → 1 | 0ms → 3.6ms | 0ms → 3.6ms | `detail`  | `(ZSTD_convertBlockSequences)`                     |

##### `CGSCCToFunctionPassAdaptor`

|  Change |   Delta |           % |        Time | Count |        Mean |         Max | Attribute | Value                                              |
| ------: | ------: | ----------: | ----------: | ----: | ----------: | ----------: | --------- | -------------------------------------------------- |
|     new | +6.28ms | 0.0% → 3.1% | 0ms → 6.3ms | 0 → 1 | 0ms → 6.3ms | 0ms → 6.3ms | `detail`  | `(ZSTD_transferSequences_noDelim)`                 |
|     new | +6.20ms | 0.0% → 3.0% | 0ms → 6.2ms | 0 → 1 | 0ms → 6.2ms | 0ms → 6.2ms | `detail`  | `(ZSTD_transferSequences_wBlockDelim)`             |
| removed | -5.13ms | 3.2% → 0.0% | 5.1ms → 0ms | 1 → 0 | 5.1ms → 0ms | 5.1ms → 0ms | `detail`  | `(ZSTD_copySequencesToSeqStoreNoBlockDelim)`       |
| removed | -4.89ms | 3.1% → 0.0% | 4.9ms → 0ms | 1 → 0 | 4.9ms → 0ms | 4.9ms → 0ms | `detail`  | `(ZSTD_copySequencesToSeqStoreExplicitBlockDelim)` |
|     new | +3.33ms | 0.0% → 1.6% | 0ms → 3.3ms | 0 → 1 | 0ms → 3.3ms | 0ms → 3.3ms | `detail`  | `(ZSTD_convertBlockSequences)`                     |

##### `RunPass`

|  Change |    Delta |             % |            Time |   Count |          Mean |           Max | Attribute | Value                           |
| ------: | -------: | ------------: | --------------: | ------: | ------------: | ------------: | --------- | ------------------------------- |
|  +41.9% | +21.51ms | 76.0% → 75.4% | 51.3ms → 72.8ms | 45 → 59 | 1.1ms → 1.2ms | 4.1ms → 4.7ms | `detail`  | `AArch64 Instruction Selection` |
|  +72.5% |  +3.43ms |   7.0% → 8.5% |   4.7ms → 8.2ms |   6 → 9 | 0.8ms → 0.9ms | 0.9ms → 1.3ms | `detail`  | `Loop Pass Manager`             |
|  +23.0% |  +1.81ms | 11.7% → 10.0% |   7.9ms → 9.7ms |       7 | 1.1ms → 1.4ms | 2.7ms → 3.7ms | `detail`  | `Greedy Register Allocator`     |
| +153.0% |  +0.77ms |   0.7% → 1.3% |   0.5ms → 1.3ms |   1 → 2 | 0.5ms → 0.6ms | 0.5ms → 0.7ms | `detail`  | `CodeGen Prepare`               |
|  +38.4% |  +0.74ms |   2.9% → 2.8% |   1.9ms → 2.7ms |   3 → 4 | 0.6ms → 0.7ms |         0.7ms | `detail`  | `Machine Instruction Scheduler` |

##### `ModuleToFunctionPassAdaptor`

| Change |    Delta |      % |             Time | Count |            Mean |             Max | Attribute | Value      |
| -----: | -------: | -----: | ---------------: | ----: | --------------: | --------------: | --------- | ---------- |
| +21.5% | +19.84ms | 100.0% | 92.2ms → 112.0ms |     3 | 30.7ms → 37.3ms | 60.5ms → 75.8ms | `detail`  | `[module]` |

##### `ParseDeclarationOrFunctionDefinition`

|  Change |   Delta |             % |          Time | Count |          Mean |           Max | Attribute | Value                                           |
| ------: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------- | ----------------------------------------------- |
|  +71.1% | +1.62ms | 13.0% → 14.1% | 2.3ms → 3.9ms |     1 | 2.3ms → 3.9ms | 2.3ms → 3.9ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c:770:1`  |
|     new | +1.55ms |   0.0% → 5.6% |   0ms → 1.6ms | 0 → 1 |   0ms → 1.6ms |   0ms → 1.6ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c:6103:1` |
|     new | +1.42ms |   0.0% → 5.1% |   0ms → 1.4ms | 0 → 1 |   0ms → 1.4ms |   0ms → 1.4ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c:2100:1` |
|     new | +1.28ms |   0.0% → 4.6% |   0ms → 1.3ms | 0 → 1 |   0ms → 1.3ms |   0ms → 1.3ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c:5061:1` |
| removed | -1.21ms |   6.9% → 0.0% |   1.2ms → 0ms | 1 → 0 |   1.2ms → 0ms |   1.2ms → 0ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c:2090:1` |

##### `ParseFunctionDefinition`

|  Change |   Delta |             % |          Time | Count |          Mean |           Max | Attribute | Value                                        |
| ------: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------- | -------------------------------------------- |
|  +71.2% | +1.62ms | 14.3% → 15.7% | 2.3ms → 3.9ms |     1 | 2.3ms → 3.9ms | 2.3ms → 3.9ms | `detail`  | `ZSTD_CCtxParams_setParameter`               |
| removed | -1.01ms |   6.3% → 0.0% |   1.0ms → 0ms | 1 → 0 |   1.0ms → 0ms |   1.0ms → 0ms | `detail`  | `ZSTD_cpuid_avx512vbmi`                      |
|     new | +0.95ms |   0.0% → 3.8% |   0ms → 0.9ms | 0 → 1 |   0ms → 0.9ms |   0ms → 0.9ms | `detail`  | `ZSTD_compressSequencesAndLiterals_internal` |
|     new | +0.79ms |   0.0% → 3.2% |   0ms → 0.8ms | 0 → 1 |   0ms → 0.8ms |   0ms → 0.8ms | `detail`  | `ZSTD_transferSequences_wBlockDelim`         |
|     new | +0.67ms |   0.0% → 2.7% |   0ms → 0.7ms | 0 → 1 |   0ms → 0.7ms |   0ms → 0.7ms | `detail`  | `ZSTD_transferSequences_noDelim`             |

##### `InstCombinePass`

|  Change |   Delta |             % |          Time | Count |          Mean |           Max | Attribute | Value                            |
| ------: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------- | -------------------------------- |
| +589.4% | +3.01ms | 15.2% → 31.0% | 0.5ms → 3.5ms | 1 → 6 | 0.5ms → 0.6ms | 0.5ms → 0.8ms | `detail`  | `ZSTD_compressContinue_internal` |
| +459.0% | +2.99ms | 19.4% → 32.1% | 0.7ms → 3.6ms | 1 → 6 | 0.7ms → 0.6ms |         0.7ms | `detail`  | `ZSTD_resetCCtx_internal`        |
| +147.8% | +0.75ms | 15.2% → 11.1% | 0.5ms → 1.3ms | 1 → 2 | 0.5ms → 0.6ms | 0.5ms → 0.7ms | `detail`  | `ZSTD_compress_frameChunk`       |
|  +55.2% | +0.62ms | 33.7% → 15.4% | 1.1ms → 1.8ms | 2 → 3 |         0.6ms |         0.6ms | `detail`  | `ZSTD_loadCEntropy`              |
|     new | +0.52ms |   0.0% → 4.6% |   0ms → 0.5ms | 0 → 1 |   0ms → 0.5ms |   0ms → 0.5ms | `detail`  | `ZSTD_reset_matchState`          |

##### `InlinerPass`

| Change |   Delta |           % |        Time | Count |        Mean |         Max | Attribute | Value                            |
| -----: | ------: | ----------: | ----------: | ----: | ----------: | ----------: | --------- | -------------------------------- |
|    new | +0.81ms | 0.0% → 9.0% | 0ms → 0.8ms | 0 → 1 | 0ms → 0.8ms | 0ms → 0.8ms | `detail`  | `(ZSTD_resetCCtx_usingCDict)`    |
|    new | +0.61ms | 0.0% → 6.7% | 0ms → 0.6ms | 0 → 1 | 0ms → 0.6ms | 0ms → 0.6ms | `detail`  | `(ZSTD_createCDict_advanced2)`   |
|    new | +0.54ms | 0.0% → 6.0% | 0ms → 0.5ms | 0 → 1 | 0ms → 0.5ms | 0ms → 0.5ms | `detail`  | `(ZSTD_compressStream_generic)`  |
|    new | +0.53ms | 0.0% → 5.8% | 0ms → 0.5ms | 0 → 1 | 0ms → 0.5ms | 0ms → 0.5ms | `detail`  | `(ZSTD_overflowCorrectIfNeeded)` |
|    new | +0.52ms | 0.0% → 5.8% | 0ms → 0.5ms | 0 → 1 | 0ms → 0.5ms | 0ms → 0.5ms | `detail`  | `(ZSTD_compressBegin_internal)`  |

##### `FunctionToLoopPassAdaptor`

|  Change |   Delta |            % |        Time | Count |        Mean |         Max | Attribute | Value                                            |
| ------: | ------: | -----------: | ----------: | ----: | ----------: | ----------: | --------- | ------------------------------------------------ |
|     new | +1.86ms | 0.0% → 14.6% | 0ms → 1.9ms | 0 → 2 | 0ms → 0.9ms | 0ms → 1.1ms | `detail`  | `ZSTD_transferSequences_wBlockDelim`             |
|     new | +1.79ms | 0.0% → 14.0% | 0ms → 1.8ms | 0 → 2 | 0ms → 0.9ms | 0ms → 0.9ms | `detail`  | `ZSTD_transferSequences_noDelim`                 |
| removed | -1.49ms | 16.3% → 0.0% | 1.5ms → 0ms | 2 → 0 | 0.7ms → 0ms | 0.8ms → 0ms | `detail`  | `ZSTD_copySequencesToSeqStoreNoBlockDelim`       |
|     new | +1.29ms | 0.0% → 10.1% | 0ms → 1.3ms | 0 → 2 | 0ms → 0.6ms | 0ms → 0.7ms | `detail`  | `ZSTD_estimateCCtxSize`                          |
| removed | -1.29ms | 14.1% → 0.0% | 1.3ms → 0ms | 2 → 0 | 0.6ms → 0ms | 0.7ms → 0ms | `detail`  | `ZSTD_copySequencesToSeqStoreExplicitBlockDelim` |

##### `GVNPass`

|  Change |   Delta |           % |        Time | Count |        Mean |         Max | Attribute | Value                                            |
| ------: | ------: | ----------: | ----------: | ----: | ----------: | ----------: | --------- | ------------------------------------------------ |
|     new | +1.01ms | 0.0% → 6.2% | 0ms → 1.0ms | 0 → 1 | 0ms → 1.0ms | 0ms → 1.0ms | `detail`  | `ZSTD_transferSequences_wBlockDelim`             |
|     new | +0.92ms | 0.0% → 5.6% | 0ms → 0.9ms | 0 → 1 | 0ms → 0.9ms | 0ms → 0.9ms | `detail`  | `ZSTD_transferSequences_noDelim`                 |
| removed | -0.78ms | 6.1% → 0.0% | 0.8ms → 0ms | 1 → 0 | 0.8ms → 0ms | 0.8ms → 0ms | `detail`  | `ZSTD_copySequencesToSeqStoreNoBlockDelim`       |
| removed | -0.76ms | 5.9% → 0.0% | 0.8ms → 0ms | 1 → 0 | 0.8ms → 0ms | 0.8ms → 0ms | `detail`  | `ZSTD_copySequencesToSeqStoreExplicitBlockDelim` |
|     new | +0.55ms | 0.0% → 3.4% | 0ms → 0.6ms | 0 → 1 | 0ms → 0.6ms | 0ms → 0.6ms | `detail`  | `ZSTD_resetCCtx_usingCDict`                      |

##### `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`

|  Change |   Delta |             % |          Time | Count |          Mean |           Max | Attribute | Value                                                                             |
| ------: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------- | --------------------------------------------------------------------------------- |
| +183.2% | +0.92ms | 17.2% → 23.7% | 0.5ms → 1.4ms | 1 → 2 | 0.5ms → 0.7ms | 0.5ms → 0.7ms | `detail`  | `loop %<unnamed loop> in function ZSTD_loadCEntropy`                              |
|     new | +0.80ms |  0.0% → 13.2% |   0ms → 0.8ms | 0 → 1 |   0ms → 0.8ms |   0ms → 0.8ms | `detail`  | `loop %<unnamed loop> in function ZSTD_transferSequences_noDelim`                 |
|     new | +0.69ms |  0.0% → 11.5% |   0ms → 0.7ms | 0 → 1 |   0ms → 0.7ms |   0ms → 0.7ms | `detail`  | `loop %<unnamed loop> in function ZSTD_transferSequences_wBlockDelim`             |
| removed | -0.68ms |  23.1% → 0.0% |   0.7ms → 0ms | 1 → 0 |   0.7ms → 0ms |   0.7ms → 0ms | `detail`  | `loop %<unnamed loop> in function ZSTD_copySequencesToSeqStoreNoBlockDelim`       |
| removed | -0.65ms |  22.1% → 0.0% |   0.6ms → 0ms | 1 → 0 |   0.6ms → 0ms |   0.6ms → 0ms | `detail`  | `loop %<unnamed loop> in function ZSTD_copySequencesToSeqStoreExplicitBlockDelim` |

##### `GlobalOptPass`

| Change |   Delta |      % |          Time | Count |  Mean |           Max | Attribute | Value      |
| -----: | ------: | -----: | ------------: | ----: | ----: | ------------: | --------- | ---------- |
|  -4.8% | -0.18ms | 100.0% | 3.7ms → 3.5ms |     2 | 1.8ms | 2.7ms → 2.6ms | `detail`  | `[module]` |

##### `SimplifyCFGPass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Attribute | Value                |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | --------- | -------------------- |
| -11.7% | -0.09ms | 100.0% | 0.8ms → 0.7ms |     1 | 0.8ms → 0.7ms | 0.8ms → 0.7ms | `detail`  | `ZSTD_compressBound` |

##### `IPSCCPPass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Attribute | Value      |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | --------- | ---------- |
|  -1.2% | -0.08ms | 100.0% | 7.3ms → 7.2ms |     1 | 7.3ms → 7.2ms | 7.3ms → 7.2ms | `detail`  | `[module]` |

##### `TargetIRAnalysis`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Attribute | Value                |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | --------- | -------------------- |
|  -6.5% | -0.04ms | 100.0% | 0.6ms → 0.5ms |     1 | 0.6ms → 0.5ms | 0.6ms → 0.5ms | `detail`  | `ZSTD_compressBound` |

#### Parents

Parent spans with the largest change in contribution to each span's total time.

##### `Backend`

| Change |     Delta |      % |              Time | Count |              Mean |               Max | Parent            |
| -----: | --------: | -----: | ----------------: | ----: | ----------------: | ----------------: | ----------------- |
| +27.2% | +153.10ms | 100.0% | 562.5ms → 715.6ms |     1 | 562.5ms → 715.6ms | 562.5ms → 715.6ms | `ExecuteCompiler` |

##### `Optimizer`

| Change |    Delta |      % |              Time | Count |              Mean |               Max | Parent    |
| -----: | -------: | -----: | ----------------: | ----: | ----------------: | ----------------: | --------- |
| +24.0% | +83.30ms | 100.0% | 347.1ms → 430.4ms |     1 | 347.1ms → 430.4ms | 347.1ms → 430.4ms | `Backend` |

##### `CodeGenPasses`

| Change |    Delta |      % |              Time | Count |              Mean |               Max | Parent    |
| -----: | -------: | -----: | ----------------: | ----: | ----------------: | ----------------: | --------- |
| +32.3% | +69.09ms | 100.0% | 214.1ms → 283.2ms |     1 | 214.1ms → 283.2ms | 214.1ms → 283.2ms | `Backend` |

##### `OptModule`

| Change |    Delta |      % |              Time | Count |              Mean |               Max | Parent          |
| -----: | -------: | -----: | ----------------: | ----: | ----------------: | ----------------: | --------------- |
| +32.2% | +68.99ms | 100.0% | 214.0ms → 283.0ms |     1 | 214.0ms → 283.0ms | 214.0ms → 283.0ms | `CodeGenPasses` |

##### `ModuleInlinerWrapperPass`

| Change |    Delta |      % |              Time | Count |              Mean |               Max | Parent      |
| -----: | -------: | -----: | ----------------: | ----: | ----------------: | ----------------: | ----------- |
| +26.4% | +62.28ms | 100.0% | 235.8ms → 298.1ms |     1 | 235.8ms → 298.1ms | 235.8ms → 298.1ms | `Optimizer` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

| Change |    Delta |      % |              Time | Count |              Mean |               Max | Parent                     |
| -----: | -------: | -----: | ----------------: | ----: | ----------------: | ----------------: | -------------------------- |
| +26.5% | +62.11ms | 100.0% | 234.4ms → 296.5ms |     1 | 234.4ms → 296.5ms | 234.4ms → 296.5ms | `ModuleInlinerWrapperPass` |

##### `PassManager<Function>`

| Change |    Delta |             % |              Time |    Count |          Mean |            Max | Parent                        |
| -----: | -------: | ------------: | ----------------: | -------: | ------------: | -------------: | ----------------------------- |
| +28.3% | +44.92ms | 77.4% → 76.7% | 158.7ms → 203.6ms | 94 → 102 | 1.7ms → 2.0ms | 9.6ms → 12.0ms | `CGSCCToFunctionPassAdaptor`  |
| +34.2% | +15.80ms | 22.6% → 23.3% |   46.2ms → 62.0ms |  36 → 45 | 1.3ms → 1.4ms |  3.2ms → 4.0ms | `ModuleToFunctionPassAdaptor` |

##### `OptFunction`

| Change |    Delta |      % |              Time |     Count |          Mean |             Max | Parent      |
| -----: | -------: | -----: | ----------------: | --------: | ------------: | --------------: | ----------- |
| +34.2% | +59.94ms | 100.0% | 175.3ms → 235.3ms | 100 → 118 | 1.8ms → 2.0ms | 10.4ms → 13.5ms | `OptModule` |

##### `DevirtSCCRepeatedPass`

| Change |    Delta |      % |              Time |     Count |          Mean |             Max | Parent                              |
| -----: | -------: | -----: | ----------------: | --------: | ------------: | --------------: | ----------------------------------- |
| +30.0% | +57.66ms | 100.0% | 192.2ms → 249.8ms | 106 → 121 | 1.8ms → 2.1ms | 10.8ms → 13.3ms | `ModuleToPostOrderCGSCCPassAdaptor` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

| Change |    Delta |      % |              Time |     Count |          Mean |             Max | Parent                  |
| -----: | -------: | -----: | ----------------: | --------: | ------------: | --------------: | ----------------------- |
| +29.9% | +57.27ms | 100.0% | 191.8ms → 249.1ms | 106 → 121 | 1.8ms → 2.1ms | 10.8ms → 13.3ms | `DevirtSCCRepeatedPass` |

##### `CGSCCToFunctionPassAdaptor`

| Change |    Delta |      % |              Time |    Count |          Mean |            Max | Parent                                                                                        |
| -----: | -------: | -----: | ----------------: | -------: | ------------: | -------------: | --------------------------------------------------------------------------------------------- |
| +28.2% | +45.04ms | 100.0% | 159.5ms → 204.6ms | 94 → 102 | 1.7ms → 2.0ms | 9.7ms → 12.0ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `Frontend`

| Change |    Delta |      % |              Time | Count |             Mean |               Max | Parent            |
| -----: | -------: | -----: | ----------------: | ----: | ---------------: | ----------------: | ----------------- |
| +23.7% | +42.46ms | 100.0% | 178.8ms → 221.2ms |     2 | 89.4ms → 110.6ms | 163.9ms → 200.4ms | `ExecuteCompiler` |

##### `RunPass`

| Change |    Delta |      % |            Time |   Count |  Mean |           Max | Parent        |
| -----: | -------: | -----: | --------------: | ------: | ----: | ------------: | ------------- |
| +43.0% | +29.02ms | 100.0% | 67.5ms → 96.5ms | 64 → 84 | 1.1ms | 4.1ms → 4.7ms | `OptFunction` |

##### `ModuleToFunctionPassAdaptor`

| Change |    Delta |      % |             Time | Count |            Mean |             Max | Parent      |
| -----: | -------: | -----: | ---------------: | ----: | --------------: | --------------: | ----------- |
| +21.5% | +19.84ms | 100.0% | 92.2ms → 112.0ms |     3 | 30.7ms → 37.3ms | 60.5ms → 75.8ms | `Optimizer` |

##### `ParseDeclarationOrFunctionDefinition`

| Change |    Delta |      % |            Time |   Count |  Mean |           Max | Parent     |
| -----: | -------: | -----: | --------------: | ------: | ----: | ------------: | ---------- |
| +58.8% | +10.28ms | 100.0% | 17.5ms → 27.8ms | 20 → 31 | 0.9ms | 2.3ms → 3.9ms | `Frontend` |

##### `ParseFunctionDefinition`

| Change |   Delta |      % |            Time |   Count |  Mean |           Max | Parent                                 |
| -----: | ------: | -----: | --------------: | ------: | ----: | ------------: | -------------------------------------- |
| +55.6% | +8.87ms | 100.0% | 15.9ms → 24.8ms | 18 → 27 | 0.9ms | 2.3ms → 3.9ms | `ParseDeclarationOrFunctionDefinition` |

##### `InstCombinePass`

|  Change |   Delta |      % |           Time |  Count |  Mean |           Max | Parent                  |
| ------: | ------: | -----: | -------------: | -----: | ----: | ------------: | ----------------------- |
| +238.6% | +8.00ms | 100.0% | 3.4ms → 11.4ms | 6 → 19 | 0.6ms | 0.7ms → 0.8ms | `PassManager<Function>` |

##### `InlinerPass`

| Change |   Delta |      % |          Time |  Count |  Mean |           Max | Parent                                                                                        |
| -----: | ------: | -----: | ------------: | -----: | ----: | ------------: | --------------------------------------------------------------------------------------------- |
| +92.0% | +4.35ms | 100.0% | 4.7ms → 9.1ms | 6 → 12 | 0.8ms | 0.9ms → 1.0ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `FunctionToLoopPassAdaptor`

| Change |   Delta |      % |           Time |   Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | -------------: | ------: | ------------: | ------------: | ----------------------- |
| +39.1% | +3.58ms | 100.0% | 9.2ms → 12.7ms | 13 → 14 | 0.7ms → 0.9ms | 1.2ms → 1.9ms | `PassManager<Function>` |

##### `GVNPass`

| Change |   Delta |      % |            Time |   Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | --------------: | ------: | ------------: | ------------: | ----------------------- |
| +26.5% | +3.41ms | 100.0% | 12.9ms → 16.3ms | 10 → 12 | 1.3ms → 1.4ms | 3.0ms → 3.4ms | `PassManager<Function>` |

##### `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`

|  Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                      |
| ------: | ------: | -----: | ------------: | ----: | ------------: | ------------: | --------------------------- |
| +106.2% | +3.11ms | 100.0% | 2.9ms → 6.0ms | 5 → 9 | 0.6ms → 0.7ms | 0.7ms → 0.9ms | `FunctionToLoopPassAdaptor` |

##### `GlobalOptPass`

| Change |   Delta |      % |          Time | Count |  Mean |           Max | Parent      |
| -----: | ------: | -----: | ------------: | ----: | ----: | ------------: | ----------- |
|  -4.8% | -0.18ms | 100.0% | 3.7ms → 3.5ms |     2 | 1.8ms | 2.7ms → 2.6ms | `Optimizer` |

##### `SimplifyCFGPass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                  |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------------- |
| -11.7% | -0.09ms | 100.0% | 0.8ms → 0.7ms |     1 | 0.8ms → 0.7ms | 0.8ms → 0.7ms | `PassManager<Function>` |

##### `IPSCCPPass`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent      |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------- |
|  -1.2% | -0.08ms | 100.0% | 7.3ms → 7.2ms |     1 | 7.3ms → 7.2ms | 7.3ms → 7.2ms | `Optimizer` |

##### `TargetIRAnalysis`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent            |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------- |
|  -6.5% | -0.04ms | 100.0% | 0.6ms → 0.5ms |     1 | 0.6ms → 0.5ms | 0.6ms → 0.5ms | `SimplifyCFGPass` |

#### Children

Child spans with the largest change in contribution to each span's total time.

##### `ExecuteCompiler`

| Change |     Delta |             % |              Time | Count |              Mean |               Max | Child      |
| -----: | --------: | ------------: | ----------------: | ----: | ----------------: | ----------------: | ---------- |
| +27.2% | +153.10ms | 75.6% → 76.1% | 562.5ms → 715.6ms |     1 | 562.5ms → 715.6ms | 562.5ms → 715.6ms | `Backend`  |
| +23.7% |  +42.46ms | 24.0% → 23.5% | 178.8ms → 221.2ms |     2 |  89.4ms → 110.6ms | 163.9ms → 200.4ms | `Frontend` |

##### `Backend`

| Change |    Delta |             % |              Time | Count |              Mean |               Max | Child           |
| -----: | -------: | ------------: | ----------------: | ----: | ----------------: | ----------------: | --------------- |
| +24.0% | +83.30ms | 61.7% → 60.1% | 347.1ms → 430.4ms |     1 | 347.1ms → 430.4ms | 347.1ms → 430.4ms | `Optimizer`     |
| +32.3% | +69.09ms | 38.1% → 39.6% | 214.1ms → 283.2ms |     1 | 214.1ms → 283.2ms | 214.1ms → 283.2ms | `CodeGenPasses` |

##### `Optimizer`

| Change |    Delta |             % |              Time | Count |              Mean |               Max | Child                               |
| -----: | -------: | ------------: | ----------------: | ----: | ----------------: | ----------------: | ----------------------------------- |
| +26.4% | +62.28ms | 67.9% → 69.3% | 235.8ms → 298.1ms |     1 | 235.8ms → 298.1ms | 235.8ms → 298.1ms | `ModuleInlinerWrapperPass`          |
| +21.5% | +19.84ms | 26.6% → 26.0% |  92.2ms → 112.0ms |     3 |   30.7ms → 37.3ms |   60.5ms → 75.8ms | `ModuleToFunctionPassAdaptor`       |
|    new |  +0.56ms |   0.0% → 0.1% |       0ms → 0.6ms | 0 → 1 |       0ms → 0.6ms |       0ms → 0.6ms | `ReversePostOrderFunctionAttrsPass` |
| +59.7% |  +0.35ms |          0.2% |     0.6ms → 0.9ms |     1 |     0.6ms → 0.9ms |     0.6ms → 0.9ms | `DeadArgumentEliminationPass`       |
|  -4.8% |  -0.18ms |   1.1% → 0.8% |     3.7ms → 3.5ms |     2 |             1.8ms |     2.7ms → 2.6ms | `GlobalOptPass`                     |

##### `CodeGenPasses`

| Change |    Delta |              % |              Time | Count |              Mean |               Max | Child       |
| -----: | -------: | -------------: | ----------------: | ----: | ----------------: | ----------------: | ----------- |
| +32.2% | +68.99ms | 100.0% → 99.9% | 214.0ms → 283.0ms |     1 | 214.0ms → 283.0ms | 214.0ms → 283.0ms | `OptModule` |

##### `OptModule`

| Change |    Delta |             % |              Time |     Count |          Mean |             Max | Child         |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | --------------: | ------------- |
| +34.2% | +59.94ms | 81.9% → 83.1% | 175.3ms → 235.3ms | 100 → 118 | 1.8ms → 2.0ms | 10.4ms → 13.5ms | `OptFunction` |

##### `ModuleInlinerWrapperPass`

| Change |    Delta |             % |              Time | Count |              Mean |               Max | Child                                                                               |
| -----: | -------: | ------------: | ----------------: | ----: | ----------------: | ----------------: | ----------------------------------------------------------------------------------- |
| +26.5% | +62.11ms | 99.4% → 99.5% | 234.4ms → 296.5ms |     1 | 234.4ms → 296.5ms | 234.4ms → 296.5ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                 |
| +12.0% |  +0.10ms |   0.4% → 0.3% |     0.9ms → 1.0ms |     1 |     0.9ms → 1.0ms |     0.9ms → 1.0ms | `RequireAnalysisPass<llvm::GlobalsAA, llvm::Module, llvm::AnalysisManager<Module>>` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

| Change |    Delta |             % |              Time |     Count |          Mean |             Max | Child                   |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | --------------: | ----------------------- |
| +30.0% | +57.66ms | 82.0% → 84.3% | 192.2ms → 249.8ms | 106 → 121 | 1.8ms → 2.1ms | 10.8ms → 13.3ms | `DevirtSCCRepeatedPass` |

##### `PassManager<Function>`

|  Change |   Delta |           % |            Time |   Count |          Mean |           Max | Child                       |
| ------: | ------: | ----------: | --------------: | ------: | ------------: | ------------: | --------------------------- |
| +238.6% | +8.00ms | 1.6% → 4.3% |  3.4ms → 11.4ms |  6 → 19 |         0.6ms | 0.7ms → 0.8ms | `InstCombinePass`           |
|  +39.1% | +3.58ms | 4.5% → 4.8% |  9.2ms → 12.7ms | 13 → 14 | 0.7ms → 0.9ms | 1.2ms → 1.9ms | `FunctionToLoopPassAdaptor` |
|  +26.5% | +3.41ms | 6.3% → 6.1% | 12.9ms → 16.3ms | 10 → 12 | 1.3ms → 1.4ms | 3.0ms → 3.4ms | `GVNPass`                   |
|  +55.2% | +1.69ms | 1.5% → 1.8% |   3.1ms → 4.7ms |   3 → 5 | 1.0ms → 0.9ms | 1.4ms → 1.6ms | `LoopVectorizePass`         |
|  +63.9% | +1.64ms | 1.3% → 1.6% |   2.6ms → 4.2ms |   4 → 6 | 0.6ms → 0.7ms | 0.8ms → 0.9ms | `SLPVectorizerPass`         |

##### `OptFunction`

| Change |    Delta |             % |            Time |   Count |  Mean |           Max | Child     |
| -----: | -------: | ------------: | --------------: | ------: | ----: | ------------: | --------- |
| +43.0% | +29.02ms | 38.5% → 41.0% | 67.5ms → 96.5ms | 64 → 84 | 1.1ms | 4.1ms → 4.7ms | `RunPass` |

##### `DevirtSCCRepeatedPass`

| Change |    Delta |             % |              Time |     Count |          Mean |             Max | Child                                                                                         |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | --------------: | --------------------------------------------------------------------------------------------- |
| +29.9% | +57.27ms | 99.8% → 99.7% | 191.8ms → 249.1ms | 106 → 121 | 1.8ms → 2.1ms | 10.8ms → 13.3ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

| Change |    Delta |             % |              Time |    Count |          Mean |            Max | Child                        |
| -----: | -------: | ------------: | ----------------: | -------: | ------------: | -------------: | ---------------------------- |
| +28.2% | +45.04ms | 83.2% → 82.1% | 159.5ms → 204.6ms | 94 → 102 | 1.7ms → 2.0ms | 9.7ms → 12.0ms | `CGSCCToFunctionPassAdaptor` |
| +92.0% |  +4.35ms |   2.5% → 3.6% |     4.7ms → 9.1ms |   6 → 12 |         0.8ms |  0.9ms → 1.0ms | `InlinerPass`                |

##### `CGSCCToFunctionPassAdaptor`

| Change |    Delta |     % |              Time |    Count |          Mean |            Max | Child                   |
| -----: | -------: | ----: | ----------------: | -------: | ------------: | -------------: | ----------------------- |
| +28.3% | +44.92ms | 99.5% | 158.7ms → 203.6ms | 94 → 102 | 1.7ms → 2.0ms | 9.6ms → 12.0ms | `PassManager<Function>` |

##### `Frontend`

| Change |    Delta |            % |            Time |   Count |          Mean |           Max | Child                                  |
| -----: | -------: | -----------: | --------------: | ------: | ------------: | ------------: | -------------------------------------- |
| +58.8% | +10.28ms | 9.8% → 12.6% | 17.5ms → 27.8ms | 20 → 31 |         0.9ms | 2.3ms → 3.9ms | `ParseDeclarationOrFunctionDefinition` |
| +24.0% |  +0.75ms |  1.7% → 1.8% |   3.1ms → 3.9ms |       5 | 0.6ms → 0.8ms | 0.9ms → 1.1ms | `CodeGen Function`                     |

##### `RunPass`

| Change |   Delta |           % |        Time | Count |        Mean |         Max | Child         |
| -----: | ------: | ----------: | ----------: | ----: | ----------: | ----------: | ------------- |
|    new | +0.59ms | 0.0% → 0.6% | 0ms → 0.6ms | 0 → 1 | 0ms → 0.6ms | 0ms → 0.6ms | `RunLoopPass` |

##### `ModuleToFunctionPassAdaptor`

| Change |    Delta |             % |            Time |   Count |          Mean |           Max | Child                   |
| -----: | -------: | ------------: | --------------: | ------: | ------------: | ------------: | ----------------------- |
| +34.2% | +15.80ms | 50.1% → 55.3% | 46.2ms → 62.0ms | 36 → 45 | 1.3ms → 1.4ms | 3.2ms → 4.0ms | `PassManager<Function>` |

##### `ParseDeclarationOrFunctionDefinition`

| Change |   Delta |             % |            Time |   Count |  Mean |           Max | Child                     |
| -----: | ------: | ------------: | --------------: | ------: | ----: | ------------: | ------------------------- |
| +55.6% | +8.87ms | 91.1% → 89.3% | 15.9ms → 24.8ms | 18 → 27 | 0.9ms | 2.3ms → 3.9ms | `ParseFunctionDefinition` |

##### `FunctionToLoopPassAdaptor`

|  Change |   Delta |             % |          Time | Count |          Mean |           Max | Child                                                                                 |
| ------: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------- |
| +106.2% | +3.11ms | 32.0% → 47.4% | 2.9ms → 6.0ms | 5 → 9 | 0.6ms → 0.7ms | 0.7ms → 0.9ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>` |

##### `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`

| Change |   Delta |            % |        Time | Count |        Mean |         Max | Child                |
| -----: | ------: | -----------: | ----------: | ----: | ----------: | ----------: | -------------------- |
|    new | +1.10ms | 0.0% → 18.3% | 0ms → 1.1ms | 0 → 2 | 0ms → 0.6ms | 0ms → 0.6ms | `LoopFullUnrollPass` |

##### `SimplifyCFGPass`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Child              |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | ------------------ |
|  -6.5% | -0.04ms | 76.4% → 80.9% | 0.6ms → 0.5ms |     1 | 0.6ms → 0.5ms | 0.6ms → 0.5ms | `TargetIRAnalysis` |

### Count

#### Regressions

Thread spans with the largest increase in occurrences recorded. Categories account for at least 1.0% of self time on the base or the current side.

|  Change | Delta |             % |     Count | Span                                                                                          |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------- |
|  +31.3% |   +20 |   8.9% → 9.7% |   64 → 84 | `RunPass`                                                                                     |
|  +18.0% |   +18 | 13.9% → 13.6% | 100 → 118 | `OptFunction`                                                                                 |
|  +13.1% |   +17 | 18.1% → 16.9% | 130 → 147 | `PassManager<Function>`                                                                       |
|  +14.2% |   +15 | 14.8% → 13.9% | 106 → 121 | `DevirtSCCRepeatedPass`                                                                       |
|  +14.2% |   +15 | 14.8% → 13.9% | 106 → 121 | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
| +216.7% |   +13 |   0.8% → 2.2% |    6 → 19 | `InstCombinePass`                                                                             |
|  +55.0% |   +11 |   2.8% → 3.6% |   20 → 31 | `ParseDeclarationOrFunctionDefinition`                                                        |
|  +50.0% |    +9 |   2.5% → 3.1% |   18 → 27 | `ParseFunctionDefinition`                                                                     |
|   +8.5% |    +8 | 13.1% → 11.8% |  94 → 102 | `CGSCCToFunctionPassAdaptor`                                                                  |
| +100.0% |    +6 |   0.8% → 1.4% |    6 → 12 | `InlinerPass`                                                                                 |
|  +80.0% |    +4 |   0.7% → 1.0% |     5 → 9 | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`         |
|  +20.0% |    +2 |          1.4% |   10 → 12 | `GVNPass`                                                                                     |
|  +66.7% |    +2 |   0.4% → 0.6% |     3 → 5 | `LoopVectorizePass`                                                                           |
|  +50.0% |    +2 |   0.6% → 0.7% |     4 → 6 | `SLPVectorizerPass`                                                                           |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `LoopFullUnrollPass`                                                                          |
|   +7.7% |    +1 |   1.8% → 1.6% |   13 → 14 | `FunctionToLoopPassAdaptor`                                                                   |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `EarlyCSEPass`                                                                                |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `CorrelatedValuePropagationPass`                                                              |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `ReversePostOrderFunctionAttrsPass`                                                           |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `LoopUnrollPass`                                                                              |

##### Compilation

|  Change | Delta |             % |     Count | Span                                                                                          |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------- |
|  +31.3% |   +20 |   8.9% → 9.7% |   64 → 84 | `RunPass`                                                                                     |
|  +18.0% |   +18 | 13.9% → 13.6% | 100 → 118 | `OptFunction`                                                                                 |
|  +13.1% |   +17 | 18.1% → 16.9% | 130 → 147 | `PassManager<Function>`                                                                       |
|  +14.2% |   +15 | 14.8% → 13.9% | 106 → 121 | `DevirtSCCRepeatedPass`                                                                       |
|  +14.2% |   +15 | 14.8% → 13.9% | 106 → 121 | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
| +216.7% |   +13 |   0.8% → 2.2% |    6 → 19 | `InstCombinePass`                                                                             |
|   +8.5% |    +8 | 13.1% → 11.8% |  94 → 102 | `CGSCCToFunctionPassAdaptor`                                                                  |
| +100.0% |    +6 |   0.8% → 1.4% |    6 → 12 | `InlinerPass`                                                                                 |
|  +80.0% |    +4 |   0.7% → 1.0% |     5 → 9 | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`         |
|  +20.0% |    +2 |          1.4% |   10 → 12 | `GVNPass`                                                                                     |
|  +66.7% |    +2 |   0.4% → 0.6% |     3 → 5 | `LoopVectorizePass`                                                                           |
|  +50.0% |    +2 |   0.6% → 0.7% |     4 → 6 | `SLPVectorizerPass`                                                                           |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `LoopFullUnrollPass`                                                                          |
|   +7.7% |    +1 |   1.8% → 1.6% |   13 → 14 | `FunctionToLoopPassAdaptor`                                                                   |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `EarlyCSEPass`                                                                                |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `CorrelatedValuePropagationPass`                                                              |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `ReversePostOrderFunctionAttrsPass`                                                           |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `LoopUnrollPass`                                                                              |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `RunLoopPass`                                                                                 |

##### Parsing

| Change | Delta |           % |   Count | Span                                   |
| -----: | ----: | ----------: | ------: | -------------------------------------- |
| +55.0% |   +11 | 2.8% → 3.6% | 20 → 31 | `ParseDeclarationOrFunctionDefinition` |
| +50.0% |    +9 | 2.5% → 3.1% | 18 → 27 | `ParseFunctionDefinition`              |

## Longest async spans

Spans of operations that stay pending while threads do other work. Async spans overlap one another, so their times can sum to more than the trace's duration.

### Elapsed time

#### Regressions

Async spans with the largest increase in time elapsed from start to end.

| Change |    Delta |              Time |   Count |            Mean |              Max | Span     |
| -----: | -------: | ----------------: | ------: | --------------: | ---------------: | -------- |
| +17.6% | +20.05ms | 113.9ms → 133.9ms | 22 → 23 | 14.6ms → 16.2ms | 96.6ms → 111.9ms | `Source` |

#### Attribute values

Attribute values with the largest change in contribution to each span's elapsed time.

##### `Source`

| Change |    Delta |             % |             Time | Count |             Mean |              Max | Attribute | Value                                              |
| -----: | -------: | ------------: | ---------------: | ----: | ---------------: | ---------------: | --------- | -------------------------------------------------- |
| +15.8% | +15.26ms | 30.1% → 30.0% | 96.6ms → 111.9ms |     1 | 96.6ms → 111.9ms | 96.6ms → 111.9ms | `detail`  | `/src/zstd/lib/compress/../common/allocations.h`   |
| +15.0% | +13.18ms | 27.3% → 27.1% | 87.7ms → 100.9ms |     1 | 87.7ms → 100.9ms | 87.7ms → 100.9ms | `detail`  | `/src/zstd/lib/compress/../common/compiler.h`      |
| +15.1% | +13.15ms | 27.2% → 26.9% | 87.3ms → 100.4ms |     1 | 87.3ms → 100.4ms | 87.3ms → 100.4ms | `detail`  | `/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h` |
| +26.2% |  +3.02ms |   3.6% → 3.9% |  11.6ms → 14.6ms |     1 |  11.6ms → 14.6ms |  11.6ms → 14.6ms | `detail`  | `/src/zstd/lib/compress/zstd_compress_internal.h`  |
| +55.5% |  +1.17ms |   0.7% → 0.9% |    2.1ms → 3.3ms |     1 |    2.1ms → 3.3ms |    2.1ms → 3.3ms | `detail`  | `/src/zstd/lib/compress/../common/../zstd.h`       |

#### Parents

Parent spans with the largest change in contribution to each span's elapsed time.

##### `Source`

| Change |    Delta |             % |              Time | Count |            Mean |              Max | Parent   |
| -----: | -------: | ------------: | ----------------: | ----: | --------------: | ---------------: | -------- |
| +15.3% | +31.76ms | 64.5% → 64.1% | 207.0ms → 238.8ms |    17 | 12.2ms → 14.0ms | 87.7ms → 100.9ms | `Source` |

#### Children

Child spans with the largest change in contribution to each span's elapsed time.

##### `Source`

| Change |    Delta |             % |              Time | Count |            Mean |              Max | Child    |
| -----: | -------: | ------------: | ----------------: | ----: | --------------: | ---------------: | -------- |
| +15.3% | +31.76ms | 64.5% → 64.1% | 207.0ms → 238.8ms |    17 | 12.2ms → 14.0ms | 87.7ms → 100.9ms | `Source` |

### Count

#### Regressions

Async spans with the largest increase in occurrences recorded.

| Change | Delta |      % |   Count | Span     |
| -----: | ----: | -----: | ------: | -------- |
|  +4.5% |    +1 | 100.0% | 22 → 23 | `Source` |
