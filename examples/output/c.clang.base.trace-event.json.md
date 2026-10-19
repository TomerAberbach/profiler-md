# Trace

Recorded 740 events over 744.0ms.

| Category    |     % |    Time | Count |
| ----------- | ----: | ------: | ----: |
| Compilation | 97.6% | 726.5ms |   680 |
| Parsing     |  2.4% |  17.5ms |    60 |

## Longest spans

### Self time

Spans with the most time, excluding child spans.

|     % |    Time | Count |   Mean |     Max | Span                                                                                          |
| ----: | ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| 22.7% | 169.0ms |   130 |  1.3ms |   4.3ms | `PassManager<Function>`                                                                       |
| 21.3% | 158.2ms |     2 | 79.1ms | 145.0ms | `Frontend`                                                                                    |
| 14.5% | 107.9ms |   100 |  1.1ms |   4.4ms | `OptFunction`                                                                                 |
|  9.1% |  67.5ms |    64 |  1.1ms |   4.1ms | `RunPass`                                                                                     |
|  6.2% |  46.0ms |     3 | 15.3ms |  15.9ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  5.7% |  42.3ms |     1 | 42.3ms |  42.3ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  5.2% |  38.6ms |     1 | 38.6ms |  38.6ms | `OptModule`                                                                                   |
|  3.7% |  27.5ms |   106 |  0.3ms |   0.7ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  2.1% |  15.9ms |    18 |  0.9ms |   2.3ms | `ParseFunctionDefinition`                                                                     |
|  1.7% |  12.9ms |    10 |  1.3ms |   3.0ms | `GVNPass`                                                                                     |
|  1.0% |   7.3ms |     1 |  7.3ms |   7.3ms | `IPSCCPPass`                                                                                  |
|  0.8% |   6.2ms |    13 |  0.5ms |   0.7ms | `FunctionToLoopPassAdaptor`                                                                   |
|  0.6% |   4.7ms |     1 |  4.7ms |   4.7ms | `CalledValuePropagationPass`                                                                  |
|  0.6% |   4.7ms |     6 |  0.8ms |   0.9ms | `InlinerPass`                                                                                 |
|  0.5% |   3.7ms |     2 |  1.8ms |   2.7ms | `GlobalOptPass`                                                                               |
|  0.5% |   3.4ms |     6 |  0.6ms |   0.7ms | `InstCombinePass`                                                                             |
|  0.4% |   3.1ms |     5 |  0.6ms |   0.9ms | `CodeGen Function`                                                                            |
|  0.4% |   3.1ms |     3 |  1.0ms |   1.4ms | `LoopVectorizePass`                                                                           |
|  0.4% |   2.9ms |     5 |  0.6ms |   0.7ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`         |
|  0.4% |   2.6ms |     1 |  2.6ms |   2.6ms | `ExecuteCompiler`                                                                             |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Compilation

|     % |    Time | Count |   Mean |     Max | Span                                                                                          |
| ----: | ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| 22.7% | 169.0ms |   130 |  1.3ms |   4.3ms | `PassManager<Function>`                                                                       |
| 21.3% | 158.2ms |     2 | 79.1ms | 145.0ms | `Frontend`                                                                                    |
| 14.5% | 107.9ms |   100 |  1.1ms |   4.4ms | `OptFunction`                                                                                 |
|  9.1% |  67.5ms |    64 |  1.1ms |   4.1ms | `RunPass`                                                                                     |
|  6.2% |  46.0ms |     3 | 15.3ms |  15.9ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  5.7% |  42.3ms |     1 | 42.3ms |  42.3ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  5.2% |  38.6ms |     1 | 38.6ms |  38.6ms | `OptModule`                                                                                   |
|  3.7% |  27.5ms |   106 |  0.3ms |   0.7ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  1.7% |  12.9ms |    10 |  1.3ms |   3.0ms | `GVNPass`                                                                                     |
|  1.0% |   7.3ms |     1 |  7.3ms |   7.3ms | `IPSCCPPass`                                                                                  |
|  0.8% |   6.2ms |    13 |  0.5ms |   0.7ms | `FunctionToLoopPassAdaptor`                                                                   |
|  0.6% |   4.7ms |     1 |  4.7ms |   4.7ms | `CalledValuePropagationPass`                                                                  |
|  0.6% |   4.7ms |     6 |  0.8ms |   0.9ms | `InlinerPass`                                                                                 |
|  0.5% |   3.7ms |     2 |  1.8ms |   2.7ms | `GlobalOptPass`                                                                               |
|  0.5% |   3.4ms |     6 |  0.6ms |   0.7ms | `InstCombinePass`                                                                             |
|  0.4% |   3.1ms |     5 |  0.6ms |   0.9ms | `CodeGen Function`                                                                            |
|  0.4% |   3.1ms |     3 |  1.0ms |   1.4ms | `LoopVectorizePass`                                                                           |
|  0.4% |   2.9ms |     5 |  0.6ms |   0.7ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`         |
|  0.4% |   2.6ms |     1 |  2.6ms |   2.6ms | `ExecuteCompiler`                                                                             |
|  0.3% |   2.6ms |     4 |  0.6ms |   0.8ms | `SLPVectorizerPass`                                                                           |

##### Parsing

|    % |   Time | Count |  Mean |   Max | Span                                   |
| ---: | -----: | ----: | ----: | ----: | -------------------------------------- |
| 2.1% | 15.9ms |    18 | 0.9ms | 2.3ms | `ParseFunctionDefinition`              |
| 0.2% |  1.6ms |    20 | 0.1ms | 0.9ms | `ParseDeclarationOrFunctionDefinition` |

#### Parents

Parent spans with the largest contribution to each span's self time.

##### `PassManager<Function>`

|     % |    Time | Count |  Mean |   Max | Parent                        |
| ----: | ------: | ----: | ----: | ----: | ----------------------------- |
| 76.8% | 129.7ms |    94 | 1.4ms | 4.3ms | `CGSCCToFunctionPassAdaptor`  |
| 23.2% |  39.2ms |    36 | 1.1ms | 3.1ms | `ModuleToFunctionPassAdaptor` |

##### `Frontend`

|      % |    Time | Count |   Mean |     Max | Parent            |
| -----: | ------: | ----: | -----: | ------: | ----------------- |
| 100.0% | 158.2ms |     2 | 79.1ms | 145.0ms | `ExecuteCompiler` |

##### `OptFunction`

|      % |    Time | Count |  Mean |   Max | Parent      |
| -----: | ------: | ----: | ----: | ----: | ----------- |
| 100.0% | 107.9ms |   100 | 1.1ms | 4.4ms | `OptModule` |

##### `RunPass`

|      % |   Time | Count |  Mean |   Max | Parent        |
| -----: | -----: | ----: | ----: | ----: | ------------- |
| 100.0% | 67.5ms |    64 | 1.1ms | 4.1ms | `OptFunction` |

##### `ModuleToFunctionPassAdaptor`

|      % |   Time | Count |   Mean |    Max | Parent      |
| -----: | -----: | ----: | -----: | -----: | ----------- |
| 100.0% | 46.0ms |     3 | 15.3ms | 15.9ms | `Optimizer` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |   Time | Count |   Mean |    Max | Parent                     |
| -----: | -----: | ----: | -----: | -----: | -------------------------- |
| 100.0% | 42.3ms |     1 | 42.3ms | 42.3ms | `ModuleInlinerWrapperPass` |

##### `OptModule`

|      % |   Time | Count |   Mean |    Max | Parent          |
| -----: | -----: | ----: | -----: | -----: | --------------- |
| 100.0% | 38.6ms |     1 | 38.6ms | 38.6ms | `CodeGenPasses` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|      % |   Time | Count |  Mean |   Max | Parent                  |
| -----: | -----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 27.5ms |   106 | 0.3ms | 0.7ms | `DevirtSCCRepeatedPass` |

##### `ParseFunctionDefinition`

|      % |   Time | Count |  Mean |   Max | Parent                                 |
| -----: | -----: | ----: | ----: | ----: | -------------------------------------- |
| 100.0% | 15.9ms |    18 | 0.9ms | 2.3ms | `ParseDeclarationOrFunctionDefinition` |

##### `GVNPass`

|      % |   Time | Count |  Mean |   Max | Parent                  |
| -----: | -----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 12.9ms |    10 | 1.3ms | 3.0ms | `PassManager<Function>` |

##### `IPSCCPPass`

|      % |  Time | Count |  Mean |   Max | Parent      |
| -----: | ----: | ----: | ----: | ----: | ----------- |
| 100.0% | 7.3ms |     1 | 7.3ms | 7.3ms | `Optimizer` |

##### `FunctionToLoopPassAdaptor`

|      % |  Time | Count |  Mean |   Max | Parent                  |
| -----: | ----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 6.2ms |    13 | 0.5ms | 0.7ms | `PassManager<Function>` |

##### `CalledValuePropagationPass`

|      % |  Time | Count |  Mean |   Max | Parent      |
| -----: | ----: | ----: | ----: | ----: | ----------- |
| 100.0% | 4.7ms |     1 | 4.7ms | 4.7ms | `Optimizer` |

##### `InlinerPass`

|      % |  Time | Count |  Mean |   Max | Parent                                                                                        |
| -----: | ----: | ----: | ----: | ----: | --------------------------------------------------------------------------------------------- |
| 100.0% | 4.7ms |     6 | 0.8ms | 0.9ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `GlobalOptPass`

|      % |  Time | Count |  Mean |   Max | Parent      |
| -----: | ----: | ----: | ----: | ----: | ----------- |
| 100.0% | 3.7ms |     2 | 1.8ms | 2.7ms | `Optimizer` |

##### `InstCombinePass`

|      % |  Time | Count |  Mean |   Max | Parent                  |
| -----: | ----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 3.4ms |     6 | 0.6ms | 0.7ms | `PassManager<Function>` |

##### `CodeGen Function`

|      % |  Time | Count |  Mean |   Max | Parent     |
| -----: | ----: | ----: | ----: | ----: | ---------- |
| 100.0% | 3.1ms |     5 | 0.6ms | 0.9ms | `Frontend` |

##### `LoopVectorizePass`

|      % |  Time | Count |  Mean |   Max | Parent                  |
| -----: | ----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 3.1ms |     3 | 1.0ms | 1.4ms | `PassManager<Function>` |

##### `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`

|      % |  Time | Count |  Mean |   Max | Parent                      |
| -----: | ----: | ----: | ----: | ----: | --------------------------- |
| 100.0% | 2.9ms |     5 | 0.6ms | 0.7ms | `FunctionToLoopPassAdaptor` |

##### `SLPVectorizerPass`

|      % |  Time | Count |  Mean |   Max | Parent                  |
| -----: | ----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 2.6ms |     4 | 0.6ms | 0.8ms | `PassManager<Function>` |

##### `ParseDeclarationOrFunctionDefinition`

|      % |  Time | Count |  Mean |   Max | Parent     |
| -----: | ----: | ----: | ----: | ----: | ---------- |
| 100.0% | 1.6ms |    20 | 0.1ms | 0.9ms | `Frontend` |

### Total time

Spans with the most time, including child spans.

|      % |    Time | Count |    Mean |     Max | Span                                                                                          |
| -----: | ------: | ----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 744.0ms |     1 | 744.0ms | 744.0ms | `ExecuteCompiler`                                                                             |
|  75.6% | 562.5ms |     1 | 562.5ms | 562.5ms | `Backend`                                                                                     |
|  46.7% | 347.1ms |     1 | 347.1ms | 347.1ms | `Optimizer`                                                                                   |
|  31.7% | 235.8ms |     1 | 235.8ms | 235.8ms | `ModuleInlinerWrapperPass`                                                                    |
|  31.5% | 234.4ms |     1 | 234.4ms | 234.4ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  28.8% | 214.1ms |     1 | 214.1ms | 214.1ms | `CodeGenPasses`                                                                               |
|  28.8% | 214.0ms |     1 | 214.0ms | 214.0ms | `OptModule`                                                                                   |
|  27.5% | 204.9ms |   130 |   1.6ms |   9.6ms | `PassManager<Function>`                                                                       |
|  25.8% | 192.2ms |   106 |   1.8ms |  10.8ms | `DevirtSCCRepeatedPass`                                                                       |
|  25.8% | 191.8ms |   106 |   1.8ms |  10.8ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  24.0% | 178.8ms |     2 |  89.4ms | 163.9ms | `Frontend`                                                                                    |
|  23.6% | 175.3ms |   100 |   1.8ms |  10.4ms | `OptFunction`                                                                                 |
|  21.4% | 159.5ms |    94 |   1.7ms |   9.7ms | `CGSCCToFunctionPassAdaptor`                                                                  |
|  12.4% |  92.2ms |     3 |  30.7ms |  60.5ms | `ModuleToFunctionPassAdaptor`                                                                 |
|   9.1% |  67.5ms |    64 |   1.1ms |   4.1ms | `RunPass`                                                                                     |
|   2.4% |  17.5ms |    20 |   0.9ms |   2.3ms | `ParseDeclarationOrFunctionDefinition`                                                        |
|   2.1% |  15.9ms |    18 |   0.9ms |   2.3ms | `ParseFunctionDefinition`                                                                     |
|   1.7% |  12.9ms |    10 |   1.3ms |   3.0ms | `GVNPass`                                                                                     |
|   1.2% |   9.2ms |    13 |   0.7ms |   1.2ms | `FunctionToLoopPassAdaptor`                                                                   |
|   1.0% |   7.3ms |     1 |   7.3ms |   7.3ms | `IPSCCPPass`                                                                                  |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Compilation

|      % |    Time | Count |    Mean |     Max | Span                                                                                          |
| -----: | ------: | ----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 744.0ms |     1 | 744.0ms | 744.0ms | `ExecuteCompiler`                                                                             |
|  75.6% | 562.5ms |     1 | 562.5ms | 562.5ms | `Backend`                                                                                     |
|  46.7% | 347.1ms |     1 | 347.1ms | 347.1ms | `Optimizer`                                                                                   |
|  31.7% | 235.8ms |     1 | 235.8ms | 235.8ms | `ModuleInlinerWrapperPass`                                                                    |
|  31.5% | 234.4ms |     1 | 234.4ms | 234.4ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  28.8% | 214.1ms |     1 | 214.1ms | 214.1ms | `CodeGenPasses`                                                                               |
|  28.8% | 214.0ms |     1 | 214.0ms | 214.0ms | `OptModule`                                                                                   |
|  27.5% | 204.9ms |   130 |   1.6ms |   9.6ms | `PassManager<Function>`                                                                       |
|  25.8% | 192.2ms |   106 |   1.8ms |  10.8ms | `DevirtSCCRepeatedPass`                                                                       |
|  25.8% | 191.8ms |   106 |   1.8ms |  10.8ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  24.0% | 178.8ms |     2 |  89.4ms | 163.9ms | `Frontend`                                                                                    |
|  23.6% | 175.3ms |   100 |   1.8ms |  10.4ms | `OptFunction`                                                                                 |
|  21.4% | 159.5ms |    94 |   1.7ms |   9.7ms | `CGSCCToFunctionPassAdaptor`                                                                  |
|  12.4% |  92.2ms |     3 |  30.7ms |  60.5ms | `ModuleToFunctionPassAdaptor`                                                                 |
|   9.1% |  67.5ms |    64 |   1.1ms |   4.1ms | `RunPass`                                                                                     |
|   1.7% |  12.9ms |    10 |   1.3ms |   3.0ms | `GVNPass`                                                                                     |
|   1.2% |   9.2ms |    13 |   0.7ms |   1.2ms | `FunctionToLoopPassAdaptor`                                                                   |
|   1.0% |   7.3ms |     1 |   7.3ms |   7.3ms | `IPSCCPPass`                                                                                  |
|   0.6% |   4.7ms |     1 |   4.7ms |   4.7ms | `CalledValuePropagationPass`                                                                  |
|   0.6% |   4.7ms |     6 |   0.8ms |   0.9ms | `InlinerPass`                                                                                 |

##### Parsing

|    % |   Time | Count |  Mean |   Max | Span                                   |
| ---: | -----: | ----: | ----: | ----: | -------------------------------------- |
| 2.4% | 17.5ms |    20 | 0.9ms | 2.3ms | `ParseDeclarationOrFunctionDefinition` |
| 2.1% | 15.9ms |    18 | 0.9ms | 2.3ms | `ParseFunctionDefinition`              |

#### Attribute values

Attribute values with the largest contribution to each span's total time.

##### `ModuleInlinerWrapperPass`

|      % |    Time | Count |    Mean |     Max | Attribute | Value      |
| -----: | ------: | ----: | ------: | ------: | --------- | ---------- |
| 100.0% | 235.8ms |     1 | 235.8ms | 235.8ms | `detail`  | `[module]` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |    Time | Count |    Mean |     Max | Attribute | Value      |
| -----: | ------: | ----: | ------: | ------: | --------- | ---------- |
| 100.0% | 234.4ms |     1 | 234.4ms | 234.4ms | `detail`  | `[module]` |

##### `OptModule`

|      % |    Time | Count |    Mean |     Max | Attribute | Value                                    |
| -----: | ------: | ----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% | 214.0ms |     1 | 214.0ms | 214.0ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c` |

##### `PassManager<Function>`

|    % |   Time | Count |  Mean |   Max | Attribute | Value                                            |
| ---: | -----: | ----: | ----: | ----: | --------- | ------------------------------------------------ |
| 5.8% | 11.9ms |     2 | 5.9ms | 9.6ms | `detail`  | `ZSTD_resetCCtx_internal`                        |
| 4.9% | 10.0ms |     2 | 5.0ms | 6.8ms | `detail`  | `ZSTD_compressContinue_internal`                 |
| 4.5% |  9.2ms |     2 | 4.6ms | 7.7ms | `detail`  | `ZSTD_reset_matchState`                          |
| 4.0% |  8.2ms |     2 | 4.1ms | 5.1ms | `detail`  | `ZSTD_copySequencesToSeqStoreNoBlockDelim`       |
| 3.8% |  7.8ms |     2 | 3.9ms | 4.8ms | `detail`  | `ZSTD_copySequencesToSeqStoreExplicitBlockDelim` |

##### `DevirtSCCRepeatedPass`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                              |
| ---: | -----: | ----: | -----: | -----: | --------- | ---------------------------------- |
| 5.6% | 10.8ms |     1 | 10.8ms | 10.8ms | `detail`  | `(ZSTD_resetCCtx_internal)`        |
| 4.5% |  8.6ms |     1 |  8.6ms |  8.6ms | `detail`  | `(ZSTD_reset_matchState)`          |
| 4.1% |  7.9ms |     1 |  7.9ms |  7.9ms | `detail`  | `(ZSTD_compressContinue_internal)` |
| 3.7% |  7.1ms |     1 |  7.1ms |  7.1ms | `detail`  | `(ZSTD_compress_frameChunk)`       |
| 2.9% |  5.6ms |     1 |  5.6ms |  5.6ms | `detail`  | `(ZSTD_loadCEntropy)`              |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                              |
| ---: | -----: | ----: | -----: | -----: | --------- | ---------------------------------- |
| 5.6% | 10.8ms |     1 | 10.8ms | 10.8ms | `detail`  | `(ZSTD_resetCCtx_internal)`        |
| 4.5% |  8.6ms |     1 |  8.6ms |  8.6ms | `detail`  | `(ZSTD_reset_matchState)`          |
| 4.1% |  7.9ms |     1 |  7.9ms |  7.9ms | `detail`  | `(ZSTD_compressContinue_internal)` |
| 3.7% |  7.1ms |     1 |  7.1ms |  7.1ms | `detail`  | `(ZSTD_compress_frameChunk)`       |
| 2.9% |  5.6ms |     1 |  5.6ms |  5.6ms | `detail`  | `(ZSTD_loadCEntropy)`              |

##### `OptFunction`

|    % |   Time | Count |  Mean |    Max | Attribute | Value                                            |
| ---: | -----: | ----: | ----: | -----: | --------- | ------------------------------------------------ |
| 6.8% | 12.0ms |     3 | 4.0ms | 10.2ms | `detail`  | `ZSTD_compressContinue_internal`                 |
| 6.7% | 11.8ms |     3 | 3.9ms | 10.4ms | `detail`  | `ZSTD_resetCCtx_internal`                        |
| 4.0% |  7.0ms |     2 | 3.5ms |  6.4ms | `detail`  | `ZSTD_reset_matchState`                          |
| 4.0% |  7.0ms |     2 | 3.5ms |  5.9ms | `detail`  | `ZSTD_compressBegin_internal`                    |
| 3.7% |  6.4ms |     3 | 2.1ms |  4.6ms | `detail`  | `ZSTD_copySequencesToSeqStoreExplicitBlockDelim` |

##### `CGSCCToFunctionPassAdaptor`

|    % |  Time | Count |  Mean |   Max | Attribute | Value                              |
| ---: | ----: | ----: | ----: | ----: | --------- | ---------------------------------- |
| 6.1% | 9.7ms |     1 | 9.7ms | 9.7ms | `detail`  | `(ZSTD_resetCCtx_internal)`        |
| 4.8% | 7.7ms |     1 | 7.7ms | 7.7ms | `detail`  | `(ZSTD_reset_matchState)`          |
| 4.3% | 6.9ms |     1 | 6.9ms | 6.9ms | `detail`  | `(ZSTD_compressContinue_internal)` |
| 4.0% | 6.4ms |     1 | 6.4ms | 6.4ms | `detail`  | `(ZSTD_compress_frameChunk)`       |
| 3.4% | 5.4ms |     1 | 5.4ms | 5.4ms | `detail`  | `(ZSTD_loadCEntropy)`              |

##### `ModuleToFunctionPassAdaptor`

|      % |   Time | Count |   Mean |    Max | Attribute | Value      |
| -----: | -----: | ----: | -----: | -----: | --------- | ---------- |
| 100.0% | 92.2ms |     3 | 30.7ms | 60.5ms | `detail`  | `[module]` |

##### `RunPass`

|     % |   Time | Count |  Mean |   Max | Attribute | Value                                      |
| ----: | -----: | ----: | ----: | ----: | --------- | ------------------------------------------ |
| 76.0% | 51.3ms |    45 | 1.1ms | 4.1ms | `detail`  | `AArch64 Instruction Selection`            |
| 11.7% |  7.9ms |     7 | 1.1ms | 2.7ms | `detail`  | `Greedy Register Allocator`                |
|  7.0% |  4.7ms |     6 | 0.8ms | 0.9ms | `detail`  | `Loop Pass Manager`                        |
|  2.9% |  1.9ms |     3 | 0.6ms | 0.7ms | `detail`  | `Machine Instruction Scheduler`            |
|  0.9% |  0.6ms |     1 | 0.6ms | 0.6ms | `detail`  | `Branch Probability Basic Block Placement` |

##### `ParseDeclarationOrFunctionDefinition`

|     % |  Time | Count |  Mean |   Max | Attribute | Value                                                                                                                         |
| ----: | ----: | ----: | ----: | ----: | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 13.0% | 2.3ms |     1 | 2.3ms | 2.3ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c:770:1`                                                                                |
|  7.4% | 1.3ms |     1 | 1.3ms | 1.3ms | `detail`  | `/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h:11596:1 <Spelling=/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h:124:14>` |
|  6.9% | 1.2ms |     1 | 1.2ms | 1.2ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c:2090:1`                                                                               |
|  6.9% | 1.2ms |     1 | 1.2ms | 1.2ms | `detail`  | `/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h:27792:1 <Spelling=/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h:124:14>` |
|  6.5% | 1.1ms |     1 | 1.1ms | 1.1ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c:5976:1`                                                                               |

##### `ParseFunctionDefinition`

|     % |  Time | Count |  Mean |   Max | Attribute | Value                          |
| ----: | ----: | ----: | ----: | ----: | --------- | ------------------------------ |
| 14.3% | 2.3ms |     1 | 2.3ms | 2.3ms | `detail`  | `ZSTD_CCtxParams_setParameter` |
|  8.1% | 1.3ms |     1 | 1.3ms | 1.3ms | `detail`  | `vhsub_s16`                    |
|  7.6% | 1.2ms |     1 | 1.2ms | 1.2ms | `detail`  | `vshl_s16`                     |
|  7.5% | 1.2ms |     1 | 1.2ms | 1.2ms | `detail`  | `ZSTD_resetCCtx_internal`      |
|  7.1% | 1.1ms |     1 | 1.1ms | 1.1ms | `detail`  | `ZSTD_compressStream_generic`  |

##### `GVNPass`

|     % |  Time | Count |  Mean |   Max | Attribute | Value                     |
| ----: | ----: | ----: | ----: | ----: | --------- | ------------------------- |
| 23.1% | 3.0ms |     1 | 3.0ms | 3.0ms | `detail`  | `ZSTD_reset_matchState`   |
| 17.9% | 2.3ms |     1 | 2.3ms | 2.3ms | `detail`  | `ZSTD_resetCCtx_internal` |
| 11.0% | 1.4ms |     1 | 1.4ms | 1.4ms | `detail`  | `ZSTD_estimateCCtxSize`   |
| 10.2% | 1.3ms |     1 | 1.3ms | 1.3ms | `detail`  | `ZSTD_loadCEntropy`       |
|  8.8% | 1.1ms |     1 | 1.1ms | 1.1ms | `detail`  | `ZSTD_compressStream2`    |

##### `FunctionToLoopPassAdaptor`

|     % |  Time | Count |  Mean |   Max | Attribute | Value                                            |
| ----: | ----: | ----: | ----: | ----: | --------- | ------------------------------------------------ |
| 16.6% | 1.5ms |     2 | 0.8ms | 0.8ms | `detail`  | `ZSTD_compress_frameChunk`                       |
| 16.3% | 1.5ms |     2 | 0.7ms | 0.8ms | `detail`  | `ZSTD_copySequencesToSeqStoreNoBlockDelim`       |
| 14.1% | 1.3ms |     2 | 0.6ms | 0.7ms | `detail`  | `ZSTD_copySequencesToSeqStoreExplicitBlockDelim` |
| 13.9% | 1.3ms |     2 | 0.6ms | 0.7ms | `detail`  | `ZSTD_compressContinue_internal`                 |
| 12.7% | 1.2ms |     1 | 1.2ms | 1.2ms | `detail`  | `ZSTD_loadCEntropy`                              |

##### `IPSCCPPass`

|      % |  Time | Count |  Mean |   Max | Attribute | Value      |
| -----: | ----: | ----: | ----: | ----: | --------- | ---------- |
| 100.0% | 7.3ms |     1 | 7.3ms | 7.3ms | `detail`  | `[module]` |

##### `CalledValuePropagationPass`

|      % |  Time | Count |  Mean |   Max | Attribute | Value      |
| -----: | ----: | ----: | ----: | ----: | --------- | ---------- |
| 100.0% | 4.7ms |     1 | 4.7ms | 4.7ms | `detail`  | `[module]` |

##### `InlinerPass`

|     % |  Time | Count |  Mean |   Max | Attribute | Value                              |
| ----: | ----: | ----: | ----: | ----: | --------- | ---------------------------------- |
| 19.7% | 0.9ms |     1 | 0.9ms | 0.9ms | `detail`  | `(ZSTD_resetCCtx_internal)`        |
| 18.8% | 0.9ms |     1 | 0.9ms | 0.9ms | `detail`  | `(ZSTD_compressContinue_internal)` |
| 18.6% | 0.9ms |     1 | 0.9ms | 0.9ms | `detail`  | `(ZSTD_CCtxParams_setParameter)`   |
| 15.5% | 0.7ms |     1 | 0.7ms | 0.7ms | `detail`  | `(ZSTD_reset_matchState)`          |
| 14.4% | 0.7ms |     1 | 0.7ms | 0.7ms | `detail`  | `(ZSTD_compress_frameChunk)`       |

#### Parents

Parent spans with the largest contribution to each span's total time.

##### `Backend`

|      % |    Time | Count |    Mean |     Max | Parent            |
| -----: | ------: | ----: | ------: | ------: | ----------------- |
| 100.0% | 562.5ms |     1 | 562.5ms | 562.5ms | `ExecuteCompiler` |

##### `Optimizer`

|      % |    Time | Count |    Mean |     Max | Parent    |
| -----: | ------: | ----: | ------: | ------: | --------- |
| 100.0% | 347.1ms |     1 | 347.1ms | 347.1ms | `Backend` |

##### `ModuleInlinerWrapperPass`

|      % |    Time | Count |    Mean |     Max | Parent      |
| -----: | ------: | ----: | ------: | ------: | ----------- |
| 100.0% | 235.8ms |     1 | 235.8ms | 235.8ms | `Optimizer` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |    Time | Count |    Mean |     Max | Parent                     |
| -----: | ------: | ----: | ------: | ------: | -------------------------- |
| 100.0% | 234.4ms |     1 | 234.4ms | 234.4ms | `ModuleInlinerWrapperPass` |

##### `CodeGenPasses`

|      % |    Time | Count |    Mean |     Max | Parent    |
| -----: | ------: | ----: | ------: | ------: | --------- |
| 100.0% | 214.1ms |     1 | 214.1ms | 214.1ms | `Backend` |

##### `OptModule`

|      % |    Time | Count |    Mean |     Max | Parent          |
| -----: | ------: | ----: | ------: | ------: | --------------- |
| 100.0% | 214.0ms |     1 | 214.0ms | 214.0ms | `CodeGenPasses` |

##### `PassManager<Function>`

|     % |    Time | Count |  Mean |   Max | Parent                        |
| ----: | ------: | ----: | ----: | ----: | ----------------------------- |
| 77.4% | 158.7ms |    94 | 1.7ms | 9.6ms | `CGSCCToFunctionPassAdaptor`  |
| 22.6% |  46.2ms |    36 | 1.3ms | 3.2ms | `ModuleToFunctionPassAdaptor` |

##### `DevirtSCCRepeatedPass`

|      % |    Time | Count |  Mean |    Max | Parent                              |
| -----: | ------: | ----: | ----: | -----: | ----------------------------------- |
| 100.0% | 192.2ms |   106 | 1.8ms | 10.8ms | `ModuleToPostOrderCGSCCPassAdaptor` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|      % |    Time | Count |  Mean |    Max | Parent                  |
| -----: | ------: | ----: | ----: | -----: | ----------------------- |
| 100.0% | 191.8ms |   106 | 1.8ms | 10.8ms | `DevirtSCCRepeatedPass` |

##### `Frontend`

|      % |    Time | Count |   Mean |     Max | Parent            |
| -----: | ------: | ----: | -----: | ------: | ----------------- |
| 100.0% | 178.8ms |     2 | 89.4ms | 163.9ms | `ExecuteCompiler` |

##### `OptFunction`

|      % |    Time | Count |  Mean |    Max | Parent      |
| -----: | ------: | ----: | ----: | -----: | ----------- |
| 100.0% | 175.3ms |   100 | 1.8ms | 10.4ms | `OptModule` |

##### `CGSCCToFunctionPassAdaptor`

|      % |    Time | Count |  Mean |   Max | Parent                                                                                        |
| -----: | ------: | ----: | ----: | ----: | --------------------------------------------------------------------------------------------- |
| 100.0% | 159.5ms |    94 | 1.7ms | 9.7ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `ModuleToFunctionPassAdaptor`

|      % |   Time | Count |   Mean |    Max | Parent      |
| -----: | -----: | ----: | -----: | -----: | ----------- |
| 100.0% | 92.2ms |     3 | 30.7ms | 60.5ms | `Optimizer` |

##### `RunPass`

|      % |   Time | Count |  Mean |   Max | Parent        |
| -----: | -----: | ----: | ----: | ----: | ------------- |
| 100.0% | 67.5ms |    64 | 1.1ms | 4.1ms | `OptFunction` |

##### `ParseDeclarationOrFunctionDefinition`

|      % |   Time | Count |  Mean |   Max | Parent     |
| -----: | -----: | ----: | ----: | ----: | ---------- |
| 100.0% | 17.5ms |    20 | 0.9ms | 2.3ms | `Frontend` |

##### `ParseFunctionDefinition`

|      % |   Time | Count |  Mean |   Max | Parent                                 |
| -----: | -----: | ----: | ----: | ----: | -------------------------------------- |
| 100.0% | 15.9ms |    18 | 0.9ms | 2.3ms | `ParseDeclarationOrFunctionDefinition` |

##### `GVNPass`

|      % |   Time | Count |  Mean |   Max | Parent                  |
| -----: | -----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 12.9ms |    10 | 1.3ms | 3.0ms | `PassManager<Function>` |

##### `FunctionToLoopPassAdaptor`

|      % |  Time | Count |  Mean |   Max | Parent                  |
| -----: | ----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 9.2ms |    13 | 0.7ms | 1.2ms | `PassManager<Function>` |

##### `IPSCCPPass`

|      % |  Time | Count |  Mean |   Max | Parent      |
| -----: | ----: | ----: | ----: | ----: | ----------- |
| 100.0% | 7.3ms |     1 | 7.3ms | 7.3ms | `Optimizer` |

##### `CalledValuePropagationPass`

|      % |  Time | Count |  Mean |   Max | Parent      |
| -----: | ----: | ----: | ----: | ----: | ----------- |
| 100.0% | 4.7ms |     1 | 4.7ms | 4.7ms | `Optimizer` |

##### `InlinerPass`

|      % |  Time | Count |  Mean |   Max | Parent                                                                                        |
| -----: | ----: | ----: | ----: | ----: | --------------------------------------------------------------------------------------------- |
| 100.0% | 4.7ms |     6 | 0.8ms | 0.9ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

#### Children

Child spans with the largest contribution to each span's total time.

##### `ExecuteCompiler`

|     % |    Time | Count |    Mean |     Max | Child      |
| ----: | ------: | ----: | ------: | ------: | ---------- |
| 75.6% | 562.5ms |     1 | 562.5ms | 562.5ms | `Backend`  |
| 24.0% | 178.8ms |     2 |  89.4ms | 163.9ms | `Frontend` |

##### `Backend`

|     % |    Time | Count |    Mean |     Max | Child           |
| ----: | ------: | ----: | ------: | ------: | --------------- |
| 61.7% | 347.1ms |     1 | 347.1ms | 347.1ms | `Optimizer`     |
| 38.1% | 214.1ms |     1 | 214.1ms | 214.1ms | `CodeGenPasses` |

##### `Optimizer`

|     % |    Time | Count |    Mean |     Max | Child                         |
| ----: | ------: | ----: | ------: | ------: | ----------------------------- |
| 67.9% | 235.8ms |     1 | 235.8ms | 235.8ms | `ModuleInlinerWrapperPass`    |
| 26.6% |  92.2ms |     3 |  30.7ms |  60.5ms | `ModuleToFunctionPassAdaptor` |
|  2.1% |   7.3ms |     1 |   7.3ms |   7.3ms | `IPSCCPPass`                  |
|  1.4% |   4.7ms |     1 |   4.7ms |   4.7ms | `CalledValuePropagationPass`  |
|  1.1% |   3.7ms |     2 |   1.8ms |   2.7ms | `GlobalOptPass`               |

##### `ModuleInlinerWrapperPass`

|     % |    Time | Count |    Mean |     Max | Child                                                                               |
| ----: | ------: | ----: | ------: | ------: | ----------------------------------------------------------------------------------- |
| 99.4% | 234.4ms |     1 | 234.4ms | 234.4ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                 |
|  0.4% |   0.9ms |     1 |   0.9ms |   0.9ms | `RequireAnalysisPass<llvm::GlobalsAA, llvm::Module, llvm::AnalysisManager<Module>>` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|     % |    Time | Count |  Mean |    Max | Child                   |
| ----: | ------: | ----: | ----: | -----: | ----------------------- |
| 82.0% | 192.2ms |   106 | 1.8ms | 10.8ms | `DevirtSCCRepeatedPass` |

##### `CodeGenPasses`

|      % |    Time | Count |    Mean |     Max | Child       |
| -----: | ------: | ----: | ------: | ------: | ----------- |
| 100.0% | 214.0ms |     1 | 214.0ms | 214.0ms | `OptModule` |

##### `OptModule`

|     % |    Time | Count |  Mean |    Max | Child         |
| ----: | ------: | ----: | ----: | -----: | ------------- |
| 81.9% | 175.3ms |   100 | 1.8ms | 10.4ms | `OptFunction` |

##### `PassManager<Function>`

|    % |   Time | Count |  Mean |   Max | Child                       |
| ---: | -----: | ----: | ----: | ----: | --------------------------- |
| 6.3% | 12.9ms |    10 | 1.3ms | 3.0ms | `GVNPass`                   |
| 4.5% |  9.2ms |    13 | 0.7ms | 1.2ms | `FunctionToLoopPassAdaptor` |
| 1.6% |  3.4ms |     6 | 0.6ms | 0.7ms | `InstCombinePass`           |
| 1.5% |  3.1ms |     3 | 1.0ms | 1.4ms | `LoopVectorizePass`         |
| 1.3% |  2.6ms |     4 | 0.6ms | 0.8ms | `SLPVectorizerPass`         |

##### `DevirtSCCRepeatedPass`

|     % |    Time | Count |  Mean |    Max | Child                                                                                         |
| ----: | ------: | ----: | ----: | -----: | --------------------------------------------------------------------------------------------- |
| 99.8% | 191.8ms |   106 | 1.8ms | 10.8ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|     % |    Time | Count |  Mean |   Max | Child                        |
| ----: | ------: | ----: | ----: | ----: | ---------------------------- |
| 83.2% | 159.5ms |    94 | 1.7ms | 9.7ms | `CGSCCToFunctionPassAdaptor` |
|  2.5% |   4.7ms |     6 | 0.8ms | 0.9ms | `InlinerPass`                |

##### `Frontend`

|    % |   Time | Count |  Mean |   Max | Child                                  |
| ---: | -----: | ----: | ----: | ----: | -------------------------------------- |
| 9.8% | 17.5ms |    20 | 0.9ms | 2.3ms | `ParseDeclarationOrFunctionDefinition` |
| 1.7% |  3.1ms |     5 | 0.6ms | 0.9ms | `CodeGen Function`                     |

##### `OptFunction`

|     % |   Time | Count |  Mean |   Max | Child     |
| ----: | -----: | ----: | ----: | ----: | --------- |
| 38.5% | 67.5ms |    64 | 1.1ms | 4.1ms | `RunPass` |

##### `CGSCCToFunctionPassAdaptor`

|     % |    Time | Count |  Mean |   Max | Child                   |
| ----: | ------: | ----: | ----: | ----: | ----------------------- |
| 99.5% | 158.7ms |    94 | 1.7ms | 9.6ms | `PassManager<Function>` |

##### `ModuleToFunctionPassAdaptor`

|     % |   Time | Count |  Mean |   Max | Child                   |
| ----: | -----: | ----: | ----: | ----: | ----------------------- |
| 50.1% | 46.2ms |    36 | 1.3ms | 3.2ms | `PassManager<Function>` |

##### `ParseDeclarationOrFunctionDefinition`

|     % |   Time | Count |  Mean |   Max | Child                     |
| ----: | -----: | ----: | ----: | ----: | ------------------------- |
| 91.1% | 15.9ms |    18 | 0.9ms | 2.3ms | `ParseFunctionDefinition` |

##### `FunctionToLoopPassAdaptor`

|     % |  Time | Count |  Mean |   Max | Child                                                                                 |
| ----: | ----: | ----: | ----: | ----: | ------------------------------------------------------------------------------------- |
| 32.0% | 2.9ms |     5 | 0.6ms | 0.7ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>` |

#### Longest instances

Instances of each span with the most time, and when each started.

##### `ExecuteCompiler`

|      % |    Time | Start |
| -----: | ------: | ----: |
| 100.0% | 744.0ms |   0ms |

##### `Backend`

|      % |    Time |   Start |
| -----: | ------: | ------: |
| 100.0% | 562.5ms | 180.9ms |

##### `Optimizer`

|      % |    Time |   Start |
| -----: | ------: | ------: |
| 100.0% | 347.1ms | 181.3ms |

##### `ModuleInlinerWrapperPass`

|      % |    Time |   Start | Attributes        |
| -----: | ------: | ------: | ----------------- |
| 100.0% | 235.8ms | 229.1ms | `detail=[module]` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |    Time |   Start | Attributes        |
| -----: | ------: | ------: | ----------------- |
| 100.0% | 234.4ms | 230.1ms | `detail=[module]` |

##### `CodeGenPasses`

|      % |    Time |   Start |
| -----: | ------: | ------: |
| 100.0% | 214.1ms | 529.3ms |

##### `OptModule`

|      % |    Time |   Start | Attributes                                      |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 214.0ms | 529.3ms | `detail=/src/zstd/lib/compress/zstd_compress.c` |

##### `PassManager<Function>`

|    % |  Time |   Start | Attributes                              |
| ---: | ----: | ------: | --------------------------------------- |
| 4.7% | 9.6ms | 292.7ms | `detail=ZSTD_resetCCtx_internal`        |
| 3.7% | 7.7ms | 283.3ms | `detail=ZSTD_reset_matchState`          |
| 3.3% | 6.8ms | 398.7ms | `detail=ZSTD_compressContinue_internal` |
| 3.1% | 6.4ms | 391.4ms | `detail=ZSTD_compress_frameChunk`       |
| 2.6% | 5.4ms | 319.2ms | `detail=ZSTD_loadCEntropy`              |

##### `DevirtSCCRepeatedPass`

|    % |   Time |   Start | Attributes                                |
| ---: | -----: | ------: | ----------------------------------------- |
| 5.6% | 10.8ms | 291.6ms | `detail=(ZSTD_resetCCtx_internal)`        |
| 4.5% |  8.6ms | 282.5ms | `detail=(ZSTD_reset_matchState)`          |
| 4.1% |  7.9ms | 397.8ms | `detail=(ZSTD_compressContinue_internal)` |
| 3.7% |  7.1ms | 390.6ms | `detail=(ZSTD_compress_frameChunk)`       |
| 2.9% |  5.6ms | 319.1ms | `detail=(ZSTD_loadCEntropy)`              |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|    % |   Time |   Start | Attributes                                |
| ---: | -----: | ------: | ----------------------------------------- |
| 5.6% | 10.8ms | 291.7ms | `detail=(ZSTD_resetCCtx_internal)`        |
| 4.5% |  8.6ms | 282.5ms | `detail=(ZSTD_reset_matchState)`          |
| 4.1% |  7.9ms | 397.8ms | `detail=(ZSTD_compressContinue_internal)` |
| 3.7% |  7.1ms | 390.6ms | `detail=(ZSTD_compress_frameChunk)`       |
| 2.9% |  5.6ms | 319.1ms | `detail=(ZSTD_loadCEntropy)`              |

##### `Frontend`

|     % |    Time |   Start |
| ----: | ------: | ------: |
| 91.7% | 163.9ms |   2.0ms |
|  8.3% |  14.9ms | 165.9ms |

##### `OptFunction`

|    % |   Time |   Start | Attributes                              |
| ---: | -----: | ------: | --------------------------------------- |
| 6.0% | 10.4ms | 692.9ms | `detail=ZSTD_resetCCtx_internal`        |
| 5.8% | 10.2ms | 605.1ms | `detail=ZSTD_compressContinue_internal` |
| 3.7% |  6.4ms | 703.3ms | `detail=ZSTD_reset_matchState`          |
| 3.5% |  6.2ms | 664.9ms | `detail=ZSTD_compressStream2`           |
| 3.3% |  5.9ms | 619.6ms | `detail=ZSTD_compressBegin_internal`    |

##### `CGSCCToFunctionPassAdaptor`

|    % |  Time |   Start | Attributes                                |
| ---: | ----: | ------: | ----------------------------------------- |
| 6.1% | 9.7ms | 292.7ms | `detail=(ZSTD_resetCCtx_internal)`        |
| 4.8% | 7.7ms | 283.3ms | `detail=(ZSTD_reset_matchState)`          |
| 4.3% | 6.9ms | 398.7ms | `detail=(ZSTD_compressContinue_internal)` |
| 4.0% | 6.4ms | 391.4ms | `detail=(ZSTD_compress_frameChunk)`       |
| 3.4% | 5.4ms | 319.2ms | `detail=(ZSTD_loadCEntropy)`              |

##### `ModuleToFunctionPassAdaptor`

|     % |   Time |   Start | Attributes        |
| ----: | -----: | ------: | ----------------- |
| 65.6% | 60.5ms | 467.4ms | `detail=[module]` |
| 18.9% | 17.4ms | 181.7ms | `detail=[module]` |
| 15.5% | 14.3ms | 213.8ms | `detail=[module]` |

##### `RunPass`

|    % |  Time |   Start | Attributes                             |
| ---: | ----: | ------: | -------------------------------------- |
| 6.0% | 4.1ms | 693.1ms | `detail=AArch64 Instruction Selection` |
| 4.6% | 3.1ms | 605.2ms | `detail=AArch64 Instruction Selection` |
| 4.1% | 2.8ms | 703.5ms | `detail=AArch64 Instruction Selection` |
| 4.1% | 2.7ms | 610.7ms | `detail=Greedy Register Allocator`     |
| 4.0% | 2.7ms | 619.7ms | `detail=AArch64 Instruction Selection` |

##### `ParseDeclarationOrFunctionDefinition`

|     % |  Time |   Start | Attributes                                                                                                                           |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------ |
| 13.0% | 2.3ms | 121.3ms | `detail=/src/zstd/lib/compress/zstd_compress.c:770:1`                                                                                |
|  7.4% | 1.3ms |  25.8ms | `detail=/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h:11596:1 <Spelling=/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h:124:14>` |
|  6.9% | 1.2ms | 132.7ms | `detail=/src/zstd/lib/compress/zstd_compress.c:2090:1`                                                                               |
|  6.9% | 1.2ms |  42.3ms | `detail=/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h:27792:1 <Spelling=/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h:124:14>` |
|  6.5% | 1.1ms | 157.0ms | `detail=/src/zstd/lib/compress/zstd_compress.c:5976:1`                                                                               |

##### `ParseFunctionDefinition`

|     % |  Time |   Start | Attributes                            |
| ----: | ----: | ------: | ------------------------------------- |
| 14.3% | 2.3ms | 121.3ms | `detail=ZSTD_CCtxParams_setParameter` |
|  8.1% | 1.3ms |  25.9ms | `detail=vhsub_s16`                    |
|  7.6% | 1.2ms |  42.3ms | `detail=vshl_s16`                     |
|  7.5% | 1.2ms | 132.7ms | `detail=ZSTD_resetCCtx_internal`      |
|  7.1% | 1.1ms | 157.0ms | `detail=ZSTD_compressStream_generic`  |

##### `GVNPass`

|     % |  Time |   Start | Attributes                       |
| ----: | ----: | ------: | -------------------------------- |
| 23.1% | 3.0ms | 285.4ms | `detail=ZSTD_reset_matchState`   |
| 17.9% | 2.3ms | 296.0ms | `detail=ZSTD_resetCCtx_internal` |
| 11.0% | 1.4ms | 270.9ms | `detail=ZSTD_estimateCCtxSize`   |
| 10.2% | 1.3ms | 321.2ms | `detail=ZSTD_loadCEntropy`       |
|  8.8% | 1.1ms | 415.9ms | `detail=ZSTD_compressStream2`    |

##### `FunctionToLoopPassAdaptor`

|     % |  Time |   Start | Attributes                                              |
| ----: | ----: | ------: | ------------------------------------------------------- |
| 12.7% | 1.2ms | 320.0ms | `detail=ZSTD_loadCEntropy`                              |
|  8.6% | 0.8ms | 449.2ms | `detail=ZSTD_copySequencesToSeqStoreNoBlockDelim`       |
|  8.5% | 0.8ms | 393.0ms | `detail=ZSTD_compress_frameChunk`                       |
|  8.1% | 0.7ms | 348.5ms | `detail=ZSTD_copySequencesToSeqStoreExplicitBlockDelim` |
|  8.1% | 0.7ms | 394.2ms | `detail=ZSTD_compress_frameChunk`                       |

##### `IPSCCPPass`

|      % |  Time |   Start | Attributes        |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 7.3ms | 199.1ms | `detail=[module]` |

##### `CalledValuePropagationPass`

|      % |  Time |   Start | Attributes        |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 4.7ms | 206.4ms | `detail=[module]` |

##### `InlinerPass`

|     % |  Time |   Start | Attributes                                |
| ----: | ----: | ------: | ----------------------------------------- |
| 19.7% | 0.9ms | 291.7ms | `detail=(ZSTD_resetCCtx_internal)`        |
| 18.8% | 0.9ms | 397.8ms | `detail=(ZSTD_compressContinue_internal)` |
| 18.6% | 0.9ms | 245.2ms | `detail=(ZSTD_CCtxParams_setParameter)`   |
| 15.5% | 0.7ms | 282.5ms | `detail=(ZSTD_reset_matchState)`          |
| 14.4% | 0.7ms | 390.6ms | `detail=(ZSTD_compress_frameChunk)`       |

### Elapsed time

Async spans with the most time elapsed from start to end.

|    Time | Count |   Mean |    Max | Span     |
| ------: | ----: | -----: | -----: | -------- |
| 113.9ms |    22 | 14.6ms | 96.6ms | `Source` |

#### Attribute values

Attribute values with the largest contribution to each span's elapsed time.

##### `Source`

|     % |   Time | Count |   Mean |    Max | Attribute | Value                                              |
| ----: | -----: | ----: | -----: | -----: | --------- | -------------------------------------------------- |
| 30.1% | 96.6ms |     1 | 96.6ms | 96.6ms | `detail`  | `/src/zstd/lib/compress/../common/allocations.h`   |
| 27.3% | 87.7ms |     1 | 87.7ms | 87.7ms | `detail`  | `/src/zstd/lib/compress/../common/compiler.h`      |
| 27.2% | 87.3ms |     1 | 87.3ms | 87.3ms | `detail`  | `/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h` |
|  3.6% | 11.6ms |     1 | 11.6ms | 11.6ms | `detail`  | `/src/zstd/lib/compress/zstd_compress_internal.h`  |
|  2.0% |  6.5ms |     1 |  6.5ms |  6.5ms | `detail`  | `/src/zstd/lib/compress/../common/zstd_deps.h`     |

#### Parents

Parent spans with the largest contribution to each span's elapsed time.

##### `Source`

|     % |    Time | Count |   Mean |    Max | Parent   |
| ----: | ------: | ----: | -----: | -----: | -------- |
| 64.5% | 207.0ms |    17 | 12.2ms | 87.7ms | `Source` |

#### Children

Child spans with the largest contribution to each span's elapsed time.

##### `Source`

|     % |    Time | Count |   Mean |    Max | Child    |
| ----: | ------: | ----: | -----: | -----: | -------- |
| 64.5% | 207.0ms |    17 | 12.2ms | 87.7ms | `Source` |

#### Longest instances

Instances of each span with the most time, and when each started.

##### `Source`

|     % |   Time |   Start | Attributes                                                |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 30.1% | 96.6ms |   2.3ms | `detail=/src/zstd/lib/compress/../common/allocations.h`   |
| 27.3% | 87.7ms |   8.9ms | `detail=/src/zstd/lib/compress/../common/compiler.h`      |
| 27.2% | 87.3ms |   9.0ms | `detail=/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h` |
|  3.6% | 11.6ms | 104.2ms | `detail=/src/zstd/lib/compress/zstd_compress_internal.h`  |
|  2.0% |  6.5ms |   2.3ms | `detail=/src/zstd/lib/compress/../common/zstd_deps.h`     |
