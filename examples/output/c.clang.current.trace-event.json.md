# Trace

Recorded 891 events over 940.4ms.

| Category    |     % |    Time | Count |
| ----------- | ----: | ------: | ----: |
| Compilation | 97.0% | 912.6ms |   810 |
| Parsing     |  3.0% |  27.8ms |    81 |

## Longest spans

### Self time

Spans with the most time, excluding child spans.

|     % |    Time | Count |   Mean |     Max | Span                                                                                          |
| ----: | ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| 22.3% | 209.3ms |   147 |  1.4ms |   4.2ms | `PassManager<Function>`                                                                       |
| 20.2% | 189.6ms |     2 | 94.8ms | 171.5ms | `Frontend`                                                                                    |
| 14.8% | 138.8ms |   118 |  1.2ms |   5.6ms | `OptFunction`                                                                                 |
| 10.2% |  95.9ms |    84 |  1.1ms |   4.7ms | `RunPass`                                                                                     |
|  5.3% |  50.0ms |     3 | 16.7ms |  17.4ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  5.1% |  47.7ms |     1 | 47.7ms |  47.7ms | `OptModule`                                                                                   |
|  5.0% |  46.7ms |     1 | 46.7ms |  46.7ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  3.8% |  35.4ms |   121 |  0.3ms |   0.8ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  2.6% |  24.8ms |    27 |  0.9ms |   3.9ms | `ParseFunctionDefinition`                                                                     |
|  1.7% |  16.3ms |    12 |  1.4ms |   3.4ms | `GVNPass`                                                                                     |
|  1.2% |  11.4ms |    19 |  0.6ms |   0.8ms | `InstCombinePass`                                                                             |
|  1.0% |   9.1ms |    12 |  0.8ms |   1.0ms | `InlinerPass`                                                                                 |
|  0.8% |   7.2ms |     1 |  7.2ms |   7.2ms | `IPSCCPPass`                                                                                  |
|  0.7% |   6.7ms |    14 |  0.5ms |   1.1ms | `FunctionToLoopPassAdaptor`                                                                   |
|  0.5% |   4.9ms |     9 |  0.5ms |   0.9ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`         |
|  0.5% |   4.9ms |     1 |  4.9ms |   4.9ms | `CalledValuePropagationPass`                                                                  |
|  0.5% |   4.7ms |     5 |  0.9ms |   1.6ms | `LoopVectorizePass`                                                                           |
|  0.4% |   4.2ms |     6 |  0.7ms |   0.9ms | `SLPVectorizerPass`                                                                           |
|  0.4% |   3.9ms |     5 |  0.8ms |   1.1ms | `CodeGen Function`                                                                            |
|  0.4% |   3.5ms |     2 |  1.8ms |   2.6ms | `GlobalOptPass`                                                                               |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Compilation

|     % |    Time | Count |   Mean |     Max | Span                                                                                          |
| ----: | ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| 22.3% | 209.3ms |   147 |  1.4ms |   4.2ms | `PassManager<Function>`                                                                       |
| 20.2% | 189.6ms |     2 | 94.8ms | 171.5ms | `Frontend`                                                                                    |
| 14.8% | 138.8ms |   118 |  1.2ms |   5.6ms | `OptFunction`                                                                                 |
| 10.2% |  95.9ms |    84 |  1.1ms |   4.7ms | `RunPass`                                                                                     |
|  5.3% |  50.0ms |     3 | 16.7ms |  17.4ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  5.1% |  47.7ms |     1 | 47.7ms |  47.7ms | `OptModule`                                                                                   |
|  5.0% |  46.7ms |     1 | 46.7ms |  46.7ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  3.8% |  35.4ms |   121 |  0.3ms |   0.8ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  1.7% |  16.3ms |    12 |  1.4ms |   3.4ms | `GVNPass`                                                                                     |
|  1.2% |  11.4ms |    19 |  0.6ms |   0.8ms | `InstCombinePass`                                                                             |
|  1.0% |   9.1ms |    12 |  0.8ms |   1.0ms | `InlinerPass`                                                                                 |
|  0.8% |   7.2ms |     1 |  7.2ms |   7.2ms | `IPSCCPPass`                                                                                  |
|  0.7% |   6.7ms |    14 |  0.5ms |   1.1ms | `FunctionToLoopPassAdaptor`                                                                   |
|  0.5% |   4.9ms |     9 |  0.5ms |   0.9ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`         |
|  0.5% |   4.9ms |     1 |  4.9ms |   4.9ms | `CalledValuePropagationPass`                                                                  |
|  0.5% |   4.7ms |     5 |  0.9ms |   1.6ms | `LoopVectorizePass`                                                                           |
|  0.4% |   4.2ms |     6 |  0.7ms |   0.9ms | `SLPVectorizerPass`                                                                           |
|  0.4% |   3.9ms |     5 |  0.8ms |   1.1ms | `CodeGen Function`                                                                            |
|  0.4% |   3.5ms |     2 |  1.8ms |   2.6ms | `GlobalOptPass`                                                                               |
|  0.4% |   3.5ms |     1 |  3.5ms |   3.5ms | `ExecuteCompiler`                                                                             |

##### Parsing

|    % |   Time | Count |  Mean |   Max | Span                                   |
| ---: | -----: | ----: | ----: | ----: | -------------------------------------- |
| 2.6% | 24.8ms |    27 | 0.9ms | 3.9ms | `ParseFunctionDefinition`              |
| 0.3% |  3.0ms |    31 | 0.1ms | 1.0ms | `ParseDeclarationOrFunctionDefinition` |

#### Parents

Parent spans with the largest contribution to each span's self time.

##### `PassManager<Function>`

|     % |    Time | Count |  Mean |   Max | Parent                        |
| ----: | ------: | ----: | ----: | ----: | ----------------------------- |
| 76.8% | 160.8ms |   102 | 1.6ms | 4.2ms | `CGSCCToFunctionPassAdaptor`  |
| 23.2% |  48.5ms |    45 | 1.1ms | 3.7ms | `ModuleToFunctionPassAdaptor` |

##### `Frontend`

|      % |    Time | Count |   Mean |     Max | Parent            |
| -----: | ------: | ----: | -----: | ------: | ----------------- |
| 100.0% | 189.6ms |     2 | 94.8ms | 171.5ms | `ExecuteCompiler` |

##### `OptFunction`

|      % |    Time | Count |  Mean |   Max | Parent      |
| -----: | ------: | ----: | ----: | ----: | ----------- |
| 100.0% | 138.8ms |   118 | 1.2ms | 5.6ms | `OptModule` |

##### `RunPass`

|      % |   Time | Count |  Mean |   Max | Parent        |
| -----: | -----: | ----: | ----: | ----: | ------------- |
| 100.0% | 95.9ms |    84 | 1.1ms | 4.7ms | `OptFunction` |

##### `ModuleToFunctionPassAdaptor`

|      % |   Time | Count |   Mean |    Max | Parent      |
| -----: | -----: | ----: | -----: | -----: | ----------- |
| 100.0% | 50.0ms |     3 | 16.7ms | 17.4ms | `Optimizer` |

##### `OptModule`

|      % |   Time | Count |   Mean |    Max | Parent          |
| -----: | -----: | ----: | -----: | -----: | --------------- |
| 100.0% | 47.7ms |     1 | 47.7ms | 47.7ms | `CodeGenPasses` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |   Time | Count |   Mean |    Max | Parent                     |
| -----: | -----: | ----: | -----: | -----: | -------------------------- |
| 100.0% | 46.7ms |     1 | 46.7ms | 46.7ms | `ModuleInlinerWrapperPass` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|      % |   Time | Count |  Mean |   Max | Parent                  |
| -----: | -----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 35.4ms |   121 | 0.3ms | 0.8ms | `DevirtSCCRepeatedPass` |

##### `ParseFunctionDefinition`

|      % |   Time | Count |  Mean |   Max | Parent                                 |
| -----: | -----: | ----: | ----: | ----: | -------------------------------------- |
| 100.0% | 24.8ms |    27 | 0.9ms | 3.9ms | `ParseDeclarationOrFunctionDefinition` |

##### `GVNPass`

|      % |   Time | Count |  Mean |   Max | Parent                  |
| -----: | -----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 16.3ms |    12 | 1.4ms | 3.4ms | `PassManager<Function>` |

##### `InstCombinePass`

|      % |   Time | Count |  Mean |   Max | Parent                  |
| -----: | -----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 11.4ms |    19 | 0.6ms | 0.8ms | `PassManager<Function>` |

##### `InlinerPass`

|      % |  Time | Count |  Mean |   Max | Parent                                                                                        |
| -----: | ----: | ----: | ----: | ----: | --------------------------------------------------------------------------------------------- |
| 100.0% | 9.1ms |    12 | 0.8ms | 1.0ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `IPSCCPPass`

|      % |  Time | Count |  Mean |   Max | Parent      |
| -----: | ----: | ----: | ----: | ----: | ----------- |
| 100.0% | 7.2ms |     1 | 7.2ms | 7.2ms | `Optimizer` |

##### `FunctionToLoopPassAdaptor`

|      % |  Time | Count |  Mean |   Max | Parent                  |
| -----: | ----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 6.7ms |    14 | 0.5ms | 1.1ms | `PassManager<Function>` |

##### `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>`

|      % |  Time | Count |  Mean |   Max | Parent                      |
| -----: | ----: | ----: | ----: | ----: | --------------------------- |
| 100.0% | 4.9ms |     9 | 0.5ms | 0.9ms | `FunctionToLoopPassAdaptor` |

##### `CalledValuePropagationPass`

|      % |  Time | Count |  Mean |   Max | Parent      |
| -----: | ----: | ----: | ----: | ----: | ----------- |
| 100.0% | 4.9ms |     1 | 4.9ms | 4.9ms | `Optimizer` |

##### `LoopVectorizePass`

|      % |  Time | Count |  Mean |   Max | Parent                  |
| -----: | ----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 4.7ms |     5 | 0.9ms | 1.6ms | `PassManager<Function>` |

##### `SLPVectorizerPass`

|      % |  Time | Count |  Mean |   Max | Parent                  |
| -----: | ----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 4.2ms |     6 | 0.7ms | 0.9ms | `PassManager<Function>` |

##### `CodeGen Function`

|      % |  Time | Count |  Mean |   Max | Parent     |
| -----: | ----: | ----: | ----: | ----: | ---------- |
| 100.0% | 3.9ms |     5 | 0.8ms | 1.1ms | `Frontend` |

##### `GlobalOptPass`

|      % |  Time | Count |  Mean |   Max | Parent      |
| -----: | ----: | ----: | ----: | ----: | ----------- |
| 100.0% | 3.5ms |     2 | 1.8ms | 2.6ms | `Optimizer` |

##### `ParseDeclarationOrFunctionDefinition`

|      % |  Time | Count |  Mean |   Max | Parent     |
| -----: | ----: | ----: | ----: | ----: | ---------- |
| 100.0% | 3.0ms |    31 | 0.1ms | 1.0ms | `Frontend` |

### Total time

Spans with the most time, including child spans.

|      % |    Time | Count |    Mean |     Max | Span                                                                                          |
| -----: | ------: | ----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 940.4ms |     1 | 940.4ms | 940.4ms | `ExecuteCompiler`                                                                             |
|  76.1% | 715.6ms |     1 | 715.6ms | 715.6ms | `Backend`                                                                                     |
|  45.8% | 430.4ms |     1 | 430.4ms | 430.4ms | `Optimizer`                                                                                   |
|  31.7% | 298.1ms |     1 | 298.1ms | 298.1ms | `ModuleInlinerWrapperPass`                                                                    |
|  31.5% | 296.5ms |     1 | 296.5ms | 296.5ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  30.1% | 283.2ms |     1 | 283.2ms | 283.2ms | `CodeGenPasses`                                                                               |
|  30.1% | 283.0ms |     1 | 283.0ms | 283.0ms | `OptModule`                                                                                   |
|  28.2% | 265.6ms |   147 |   1.8ms |  12.0ms | `PassManager<Function>`                                                                       |
|  26.6% | 249.8ms |   121 |   2.1ms |  13.3ms | `DevirtSCCRepeatedPass`                                                                       |
|  26.5% | 249.1ms |   121 |   2.1ms |  13.3ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  25.0% | 235.3ms |   118 |   2.0ms |  13.5ms | `OptFunction`                                                                                 |
|  23.5% | 221.2ms |     2 | 110.6ms | 200.4ms | `Frontend`                                                                                    |
|  21.8% | 204.6ms |   102 |   2.0ms |  12.0ms | `CGSCCToFunctionPassAdaptor`                                                                  |
|  11.9% | 112.0ms |     3 |  37.3ms |  75.8ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  10.3% |  96.5ms |    84 |   1.1ms |   4.7ms | `RunPass`                                                                                     |
|   3.0% |  27.8ms |    31 |   0.9ms |   3.9ms | `ParseDeclarationOrFunctionDefinition`                                                        |
|   2.6% |  24.8ms |    27 |   0.9ms |   3.9ms | `ParseFunctionDefinition`                                                                     |
|   1.7% |  16.3ms |    12 |   1.4ms |   3.4ms | `GVNPass`                                                                                     |
|   1.4% |  12.7ms |    14 |   0.9ms |   1.9ms | `FunctionToLoopPassAdaptor`                                                                   |
|   1.2% |  11.4ms |    19 |   0.6ms |   0.8ms | `InstCombinePass`                                                                             |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Compilation

|      % |    Time | Count |    Mean |     Max | Span                                                                                          |
| -----: | ------: | ----: | ------: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% | 940.4ms |     1 | 940.4ms | 940.4ms | `ExecuteCompiler`                                                                             |
|  76.1% | 715.6ms |     1 | 715.6ms | 715.6ms | `Backend`                                                                                     |
|  45.8% | 430.4ms |     1 | 430.4ms | 430.4ms | `Optimizer`                                                                                   |
|  31.7% | 298.1ms |     1 | 298.1ms | 298.1ms | `ModuleInlinerWrapperPass`                                                                    |
|  31.5% | 296.5ms |     1 | 296.5ms | 296.5ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                           |
|  30.1% | 283.2ms |     1 | 283.2ms | 283.2ms | `CodeGenPasses`                                                                               |
|  30.1% | 283.0ms |     1 | 283.0ms | 283.0ms | `OptModule`                                                                                   |
|  28.2% | 265.6ms |   147 |   1.8ms |  12.0ms | `PassManager<Function>`                                                                       |
|  26.6% | 249.8ms |   121 |   2.1ms |  13.3ms | `DevirtSCCRepeatedPass`                                                                       |
|  26.5% | 249.1ms |   121 |   2.1ms |  13.3ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |
|  25.0% | 235.3ms |   118 |   2.0ms |  13.5ms | `OptFunction`                                                                                 |
|  23.5% | 221.2ms |     2 | 110.6ms | 200.4ms | `Frontend`                                                                                    |
|  21.8% | 204.6ms |   102 |   2.0ms |  12.0ms | `CGSCCToFunctionPassAdaptor`                                                                  |
|  11.9% | 112.0ms |     3 |  37.3ms |  75.8ms | `ModuleToFunctionPassAdaptor`                                                                 |
|  10.3% |  96.5ms |    84 |   1.1ms |   4.7ms | `RunPass`                                                                                     |
|   1.7% |  16.3ms |    12 |   1.4ms |   3.4ms | `GVNPass`                                                                                     |
|   1.4% |  12.7ms |    14 |   0.9ms |   1.9ms | `FunctionToLoopPassAdaptor`                                                                   |
|   1.2% |  11.4ms |    19 |   0.6ms |   0.8ms | `InstCombinePass`                                                                             |
|   1.0% |   9.1ms |    12 |   0.8ms |   1.0ms | `InlinerPass`                                                                                 |
|   0.8% |   7.2ms |     1 |   7.2ms |   7.2ms | `IPSCCPPass`                                                                                  |

##### Parsing

|    % |   Time | Count |  Mean |   Max | Span                                   |
| ---: | -----: | ----: | ----: | ----: | -------------------------------------- |
| 3.0% | 27.8ms |    31 | 0.9ms | 3.9ms | `ParseDeclarationOrFunctionDefinition` |
| 2.6% | 24.8ms |    27 | 0.9ms | 3.9ms | `ParseFunctionDefinition`              |

#### Attribute values

Attribute values with the largest contribution to each span's total time.

##### `ModuleInlinerWrapperPass`

|      % |    Time | Count |    Mean |     Max | Attribute | Value      |
| -----: | ------: | ----: | ------: | ------: | --------- | ---------- |
| 100.0% | 298.1ms |     1 | 298.1ms | 298.1ms | `detail`  | `[module]` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |    Time | Count |    Mean |     Max | Attribute | Value      |
| -----: | ------: | ----: | ------: | ------: | --------- | ---------- |
| 100.0% | 296.5ms |     1 | 296.5ms | 296.5ms | `detail`  | `[module]` |

##### `OptModule`

|      % |    Time | Count |    Mean |     Max | Attribute | Value                                    |
| -----: | ------: | ----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% | 283.0ms |     1 | 283.0ms | 283.0ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c` |

##### `PassManager<Function>`

|    % |   Time | Count |  Mean |    Max | Attribute | Value                                |
| ---: | -----: | ----: | ----: | -----: | --------- | ------------------------------------ |
| 5.5% | 14.6ms |     2 | 7.3ms | 12.0ms | `detail`  | `ZSTD_resetCCtx_internal`            |
| 4.6% | 12.3ms |     2 | 6.1ms |  8.3ms | `detail`  | `ZSTD_compressContinue_internal`     |
| 4.1% | 10.9ms |     2 | 5.4ms |  9.1ms | `detail`  | `ZSTD_reset_matchState`              |
| 3.8% | 10.0ms |     2 | 5.0ms |  6.3ms | `detail`  | `ZSTD_transferSequences_noDelim`     |
| 3.7% |  9.9ms |     2 | 5.0ms |  6.2ms | `detail`  | `ZSTD_transferSequences_wBlockDelim` |

##### `DevirtSCCRepeatedPass`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                              |
| ---: | -----: | ----: | -----: | -----: | --------- | ---------------------------------- |
| 5.3% | 13.3ms |     1 | 13.3ms | 13.3ms | `detail`  | `(ZSTD_resetCCtx_internal)`        |
| 4.1% | 10.2ms |     1 | 10.2ms | 10.2ms | `detail`  | `(ZSTD_reset_matchState)`          |
| 3.8% |  9.5ms |     1 |  9.5ms |  9.5ms | `detail`  | `(ZSTD_compressContinue_internal)` |
| 3.6% |  9.1ms |     1 |  9.1ms |  9.1ms | `detail`  | `(ZSTD_compress_frameChunk)`       |
| 3.0% |  7.4ms |     1 |  7.4ms |  7.4ms | `detail`  | `(ZSTD_loadCEntropy)`              |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                              |
| ---: | -----: | ----: | -----: | -----: | --------- | ---------------------------------- |
| 5.3% | 13.3ms |     1 | 13.3ms | 13.3ms | `detail`  | `(ZSTD_resetCCtx_internal)`        |
| 4.1% | 10.2ms |     1 | 10.2ms | 10.2ms | `detail`  | `(ZSTD_reset_matchState)`          |
| 3.8% |  9.5ms |     1 |  9.5ms |  9.5ms | `detail`  | `(ZSTD_compressContinue_internal)` |
| 3.7% |  9.1ms |     1 |  9.1ms |  9.1ms | `detail`  | `(ZSTD_compress_frameChunk)`       |
| 3.0% |  7.4ms |     1 |  7.4ms |  7.4ms | `detail`  | `(ZSTD_loadCEntropy)`              |

##### `OptFunction`

|    % |   Time | Count |  Mean |    Max | Attribute | Value                                |
| ---: | -----: | ----: | ----: | -----: | --------- | ------------------------------------ |
| 6.8% | 16.0ms |     3 | 5.3ms | 13.5ms | `detail`  | `ZSTD_compressContinue_internal`     |
| 5.9% | 13.9ms |     3 | 4.6ms | 12.2ms | `detail`  | `ZSTD_resetCCtx_internal`            |
| 4.2% | 10.0ms |     3 | 3.3ms |  8.8ms | `detail`  | `ZSTD_reset_matchState`              |
| 3.4% |  8.1ms |     3 | 2.7ms |  5.9ms | `detail`  | `ZSTD_transferSequences_wBlockDelim` |
| 3.4% |  8.0ms |     2 | 4.0ms |  6.6ms | `detail`  | `ZSTD_compressBegin_internal`        |

##### `CGSCCToFunctionPassAdaptor`

|    % |   Time | Count |   Mean |    Max | Attribute | Value                              |
| ---: | -----: | ----: | -----: | -----: | --------- | ---------------------------------- |
| 5.9% | 12.0ms |     1 | 12.0ms | 12.0ms | `detail`  | `(ZSTD_resetCCtx_internal)`        |
| 4.5% |  9.1ms |     1 |  9.1ms |  9.1ms | `detail`  | `(ZSTD_reset_matchState)`          |
| 4.1% |  8.3ms |     1 |  8.3ms |  8.3ms | `detail`  | `(ZSTD_compressContinue_internal)` |
| 4.0% |  8.1ms |     1 |  8.1ms |  8.1ms | `detail`  | `(ZSTD_compress_frameChunk)`       |
| 3.5% |  7.1ms |     1 |  7.1ms |  7.1ms | `detail`  | `(ZSTD_loadCEntropy)`              |

##### `ModuleToFunctionPassAdaptor`

|      % |    Time | Count |   Mean |    Max | Attribute | Value      |
| -----: | ------: | ----: | -----: | -----: | --------- | ---------- |
| 100.0% | 112.0ms |     3 | 37.3ms | 75.8ms | `detail`  | `[module]` |

##### `RunPass`

|     % |   Time | Count |  Mean |   Max | Attribute | Value                           |
| ----: | -----: | ----: | ----: | ----: | --------- | ------------------------------- |
| 75.4% | 72.8ms |    59 | 1.2ms | 4.7ms | `detail`  | `AArch64 Instruction Selection` |
| 10.0% |  9.7ms |     7 | 1.4ms | 3.7ms | `detail`  | `Greedy Register Allocator`     |
|  8.5% |  8.2ms |     9 | 0.9ms | 1.3ms | `detail`  | `Loop Pass Manager`             |
|  2.8% |  2.7ms |     4 | 0.7ms | 0.7ms | `detail`  | `Machine Instruction Scheduler` |
|  1.3% |  1.3ms |     2 | 0.6ms | 0.7ms | `detail`  | `CodeGen Prepare`               |

##### `ParseDeclarationOrFunctionDefinition`

|     % |  Time | Count |  Mean |   Max | Attribute | Value                                                                                                                         |
| ----: | ----: | ----: | ----: | ----: | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 14.1% | 3.9ms |     1 | 3.9ms | 3.9ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c:770:1`                                                                                |
|  5.6% | 1.6ms |     1 | 1.6ms | 1.6ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c:6103:1`                                                                               |
|  5.1% | 1.4ms |     1 | 1.4ms | 1.4ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c:2100:1`                                                                               |
|  4.8% | 1.3ms |     1 | 1.3ms | 1.3ms | `detail`  | `/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h:27792:1 <Spelling=/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h:124:14>` |
|  4.6% | 1.3ms |     1 | 1.3ms | 1.3ms | `detail`  | `/src/zstd/lib/compress/zstd_compress.c:5061:1`                                                                               |

##### `ParseFunctionDefinition`

|     % |  Time | Count |  Mean |   Max | Attribute | Value                          |
| ----: | ----: | ----: | ----: | ----: | --------- | ------------------------------ |
| 15.7% | 3.9ms |     1 | 3.9ms | 3.9ms | `detail`  | `ZSTD_CCtxParams_setParameter` |
|  6.2% | 1.5ms |     1 | 1.5ms | 1.5ms | `detail`  | `ZSTD_compressStream_generic`  |
|  5.7% | 1.4ms |     1 | 1.4ms | 1.4ms | `detail`  | `ZSTD_resetCCtx_internal`      |
|  5.4% | 1.3ms |     1 | 1.3ms | 1.3ms | `detail`  | `vshl_s16`                     |
|  5.1% | 1.3ms |     1 | 1.3ms | 1.3ms | `detail`  | `ZSTD_loadCEntropy`            |

##### `GVNPass`

|     % |  Time | Count |  Mean |   Max | Attribute | Value                     |
| ----: | ----: | ----: | ----: | ----: | --------- | ------------------------- |
| 20.9% | 3.4ms |     1 | 3.4ms | 3.4ms | `detail`  | `ZSTD_reset_matchState`   |
| 17.5% | 2.8ms |     1 | 2.8ms | 2.8ms | `detail`  | `ZSTD_resetCCtx_internal` |
|  9.7% | 1.6ms |     1 | 1.6ms | 1.6ms | `detail`  | `ZSTD_estimateCCtxSize`   |
|  9.2% | 1.5ms |     1 | 1.5ms | 1.5ms | `detail`  | `ZSTD_loadCEntropy`       |
|  7.7% | 1.3ms |     1 | 1.3ms | 1.3ms | `detail`  | `ZSTD_compressStream2`    |

##### `FunctionToLoopPassAdaptor`

|     % |  Time | Count |  Mean |   Max | Attribute | Value                                |
| ----: | ----: | ----: | ----: | ----: | --------- | ------------------------------------ |
| 15.5% | 2.0ms |     2 | 1.0ms | 1.2ms | `detail`  | `ZSTD_compress_frameChunk`           |
| 14.9% | 1.9ms |     1 | 1.9ms | 1.9ms | `detail`  | `ZSTD_loadCEntropy`                  |
| 14.6% | 1.9ms |     2 | 0.9ms | 1.1ms | `detail`  | `ZSTD_transferSequences_wBlockDelim` |
| 14.0% | 1.8ms |     2 | 0.9ms | 0.9ms | `detail`  | `ZSTD_transferSequences_noDelim`     |
| 11.6% | 1.5ms |     2 | 0.7ms | 0.8ms | `detail`  | `ZSTD_compressContinue_internal`     |

##### `InstCombinePass`

|     % |  Time | Count |  Mean |   Max | Attribute | Value                            |
| ----: | ----: | ----: | ----: | ----: | --------- | -------------------------------- |
| 32.1% | 3.6ms |     6 | 0.6ms | 0.7ms | `detail`  | `ZSTD_resetCCtx_internal`        |
| 31.0% | 3.5ms |     6 | 0.6ms | 0.8ms | `detail`  | `ZSTD_compressContinue_internal` |
| 15.4% | 1.8ms |     3 | 0.6ms | 0.6ms | `detail`  | `ZSTD_loadCEntropy`              |
| 11.1% | 1.3ms |     2 | 0.6ms | 0.7ms | `detail`  | `ZSTD_compress_frameChunk`       |
|  5.7% | 0.7ms |     1 | 0.7ms | 0.7ms | `detail`  | `ZSTD_CCtxParams_setParameter`   |

##### `InlinerPass`

|     % |  Time | Count |  Mean |   Max | Attribute | Value                              |
| ----: | ----: | ----: | ----: | ----: | --------- | ---------------------------------- |
| 11.3% | 1.0ms |     1 | 1.0ms | 1.0ms | `detail`  | `(ZSTD_compressContinue_internal)` |
| 11.3% | 1.0ms |     1 | 1.0ms | 1.0ms | `detail`  | `(ZSTD_resetCCtx_internal)`        |
| 10.4% | 0.9ms |     1 | 0.9ms | 0.9ms | `detail`  | `(ZSTD_CCtxParams_setParameter)`   |
|  9.7% | 0.9ms |     1 | 0.9ms | 0.9ms | `detail`  | `(ZSTD_reset_matchState)`          |
|  9.4% | 0.9ms |     1 | 0.9ms | 0.9ms | `detail`  | `(ZSTD_compress_frameChunk)`       |

##### `IPSCCPPass`

|      % |  Time | Count |  Mean |   Max | Attribute | Value      |
| -----: | ----: | ----: | ----: | ----: | --------- | ---------- |
| 100.0% | 7.2ms |     1 | 7.2ms | 7.2ms | `detail`  | `[module]` |

#### Parents

Parent spans with the largest contribution to each span's total time.

##### `Backend`

|      % |    Time | Count |    Mean |     Max | Parent            |
| -----: | ------: | ----: | ------: | ------: | ----------------- |
| 100.0% | 715.6ms |     1 | 715.6ms | 715.6ms | `ExecuteCompiler` |

##### `Optimizer`

|      % |    Time | Count |    Mean |     Max | Parent    |
| -----: | ------: | ----: | ------: | ------: | --------- |
| 100.0% | 430.4ms |     1 | 430.4ms | 430.4ms | `Backend` |

##### `ModuleInlinerWrapperPass`

|      % |    Time | Count |    Mean |     Max | Parent      |
| -----: | ------: | ----: | ------: | ------: | ----------- |
| 100.0% | 298.1ms |     1 | 298.1ms | 298.1ms | `Optimizer` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |    Time | Count |    Mean |     Max | Parent                     |
| -----: | ------: | ----: | ------: | ------: | -------------------------- |
| 100.0% | 296.5ms |     1 | 296.5ms | 296.5ms | `ModuleInlinerWrapperPass` |

##### `CodeGenPasses`

|      % |    Time | Count |    Mean |     Max | Parent    |
| -----: | ------: | ----: | ------: | ------: | --------- |
| 100.0% | 283.2ms |     1 | 283.2ms | 283.2ms | `Backend` |

##### `OptModule`

|      % |    Time | Count |    Mean |     Max | Parent          |
| -----: | ------: | ----: | ------: | ------: | --------------- |
| 100.0% | 283.0ms |     1 | 283.0ms | 283.0ms | `CodeGenPasses` |

##### `PassManager<Function>`

|     % |    Time | Count |  Mean |    Max | Parent                        |
| ----: | ------: | ----: | ----: | -----: | ----------------------------- |
| 76.7% | 203.6ms |   102 | 2.0ms | 12.0ms | `CGSCCToFunctionPassAdaptor`  |
| 23.3% |  62.0ms |    45 | 1.4ms |  4.0ms | `ModuleToFunctionPassAdaptor` |

##### `DevirtSCCRepeatedPass`

|      % |    Time | Count |  Mean |    Max | Parent                              |
| -----: | ------: | ----: | ----: | -----: | ----------------------------------- |
| 100.0% | 249.8ms |   121 | 2.1ms | 13.3ms | `ModuleToPostOrderCGSCCPassAdaptor` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|      % |    Time | Count |  Mean |    Max | Parent                  |
| -----: | ------: | ----: | ----: | -----: | ----------------------- |
| 100.0% | 249.1ms |   121 | 2.1ms | 13.3ms | `DevirtSCCRepeatedPass` |

##### `OptFunction`

|      % |    Time | Count |  Mean |    Max | Parent      |
| -----: | ------: | ----: | ----: | -----: | ----------- |
| 100.0% | 235.3ms |   118 | 2.0ms | 13.5ms | `OptModule` |

##### `Frontend`

|      % |    Time | Count |    Mean |     Max | Parent            |
| -----: | ------: | ----: | ------: | ------: | ----------------- |
| 100.0% | 221.2ms |     2 | 110.6ms | 200.4ms | `ExecuteCompiler` |

##### `CGSCCToFunctionPassAdaptor`

|      % |    Time | Count |  Mean |    Max | Parent                                                                                        |
| -----: | ------: | ----: | ----: | -----: | --------------------------------------------------------------------------------------------- |
| 100.0% | 204.6ms |   102 | 2.0ms | 12.0ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `ModuleToFunctionPassAdaptor`

|      % |    Time | Count |   Mean |    Max | Parent      |
| -----: | ------: | ----: | -----: | -----: | ----------- |
| 100.0% | 112.0ms |     3 | 37.3ms | 75.8ms | `Optimizer` |

##### `RunPass`

|      % |   Time | Count |  Mean |   Max | Parent        |
| -----: | -----: | ----: | ----: | ----: | ------------- |
| 100.0% | 96.5ms |    84 | 1.1ms | 4.7ms | `OptFunction` |

##### `ParseDeclarationOrFunctionDefinition`

|      % |   Time | Count |  Mean |   Max | Parent     |
| -----: | -----: | ----: | ----: | ----: | ---------- |
| 100.0% | 27.8ms |    31 | 0.9ms | 3.9ms | `Frontend` |

##### `ParseFunctionDefinition`

|      % |   Time | Count |  Mean |   Max | Parent                                 |
| -----: | -----: | ----: | ----: | ----: | -------------------------------------- |
| 100.0% | 24.8ms |    27 | 0.9ms | 3.9ms | `ParseDeclarationOrFunctionDefinition` |

##### `GVNPass`

|      % |   Time | Count |  Mean |   Max | Parent                  |
| -----: | -----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 16.3ms |    12 | 1.4ms | 3.4ms | `PassManager<Function>` |

##### `FunctionToLoopPassAdaptor`

|      % |   Time | Count |  Mean |   Max | Parent                  |
| -----: | -----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 12.7ms |    14 | 0.9ms | 1.9ms | `PassManager<Function>` |

##### `InstCombinePass`

|      % |   Time | Count |  Mean |   Max | Parent                  |
| -----: | -----: | ----: | ----: | ----: | ----------------------- |
| 100.0% | 11.4ms |    19 | 0.6ms | 0.8ms | `PassManager<Function>` |

##### `InlinerPass`

|      % |  Time | Count |  Mean |   Max | Parent                                                                                        |
| -----: | ----: | ----: | ----: | ----: | --------------------------------------------------------------------------------------------- |
| 100.0% | 9.1ms |    12 | 0.8ms | 1.0ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `IPSCCPPass`

|      % |  Time | Count |  Mean |   Max | Parent      |
| -----: | ----: | ----: | ----: | ----: | ----------- |
| 100.0% | 7.2ms |     1 | 7.2ms | 7.2ms | `Optimizer` |

#### Children

Child spans with the largest contribution to each span's total time.

##### `ExecuteCompiler`

|     % |    Time | Count |    Mean |     Max | Child      |
| ----: | ------: | ----: | ------: | ------: | ---------- |
| 76.1% | 715.6ms |     1 | 715.6ms | 715.6ms | `Backend`  |
| 23.5% | 221.2ms |     2 | 110.6ms | 200.4ms | `Frontend` |

##### `Backend`

|     % |    Time | Count |    Mean |     Max | Child           |
| ----: | ------: | ----: | ------: | ------: | --------------- |
| 60.1% | 430.4ms |     1 | 430.4ms | 430.4ms | `Optimizer`     |
| 39.6% | 283.2ms |     1 | 283.2ms | 283.2ms | `CodeGenPasses` |

##### `Optimizer`

|     % |    Time | Count |    Mean |     Max | Child                         |
| ----: | ------: | ----: | ------: | ------: | ----------------------------- |
| 69.3% | 298.1ms |     1 | 298.1ms | 298.1ms | `ModuleInlinerWrapperPass`    |
| 26.0% | 112.0ms |     3 |  37.3ms |  75.8ms | `ModuleToFunctionPassAdaptor` |
|  1.7% |   7.2ms |     1 |   7.2ms |   7.2ms | `IPSCCPPass`                  |
|  1.1% |   4.9ms |     1 |   4.9ms |   4.9ms | `CalledValuePropagationPass`  |
|  0.8% |   3.5ms |     2 |   1.8ms |   2.6ms | `GlobalOptPass`               |

##### `ModuleInlinerWrapperPass`

|     % |    Time | Count |    Mean |     Max | Child                                                                               |
| ----: | ------: | ----: | ------: | ------: | ----------------------------------------------------------------------------------- |
| 99.5% | 296.5ms |     1 | 296.5ms | 296.5ms | `ModuleToPostOrderCGSCCPassAdaptor`                                                 |
|  0.3% |   1.0ms |     1 |   1.0ms |   1.0ms | `RequireAnalysisPass<llvm::GlobalsAA, llvm::Module, llvm::AnalysisManager<Module>>` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|     % |    Time | Count |  Mean |    Max | Child                   |
| ----: | ------: | ----: | ----: | -----: | ----------------------- |
| 84.3% | 249.8ms |   121 | 2.1ms | 13.3ms | `DevirtSCCRepeatedPass` |

##### `CodeGenPasses`

|     % |    Time | Count |    Mean |     Max | Child       |
| ----: | ------: | ----: | ------: | ------: | ----------- |
| 99.9% | 283.0ms |     1 | 283.0ms | 283.0ms | `OptModule` |

##### `OptModule`

|     % |    Time | Count |  Mean |    Max | Child         |
| ----: | ------: | ----: | ----: | -----: | ------------- |
| 83.1% | 235.3ms |   118 | 2.0ms | 13.5ms | `OptFunction` |

##### `PassManager<Function>`

|    % |   Time | Count |  Mean |   Max | Child                       |
| ---: | -----: | ----: | ----: | ----: | --------------------------- |
| 6.1% | 16.3ms |    12 | 1.4ms | 3.4ms | `GVNPass`                   |
| 4.8% | 12.7ms |    14 | 0.9ms | 1.9ms | `FunctionToLoopPassAdaptor` |
| 4.3% | 11.4ms |    19 | 0.6ms | 0.8ms | `InstCombinePass`           |
| 1.8% |  4.7ms |     5 | 0.9ms | 1.6ms | `LoopVectorizePass`         |
| 1.6% |  4.2ms |     6 | 0.7ms | 0.9ms | `SLPVectorizerPass`         |

##### `DevirtSCCRepeatedPass`

|     % |    Time | Count |  Mean |    Max | Child                                                                                         |
| ----: | ------: | ----: | ----: | -----: | --------------------------------------------------------------------------------------------- |
| 99.7% | 249.1ms |   121 | 2.1ms | 13.3ms | `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>` |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|     % |    Time | Count |  Mean |    Max | Child                        |
| ----: | ------: | ----: | ----: | -----: | ---------------------------- |
| 82.1% | 204.6ms |   102 | 2.0ms | 12.0ms | `CGSCCToFunctionPassAdaptor` |
|  3.6% |   9.1ms |    12 | 0.8ms |  1.0ms | `InlinerPass`                |

##### `OptFunction`

|     % |   Time | Count |  Mean |   Max | Child     |
| ----: | -----: | ----: | ----: | ----: | --------- |
| 41.0% | 96.5ms |    84 | 1.1ms | 4.7ms | `RunPass` |

##### `Frontend`

|     % |   Time | Count |  Mean |   Max | Child                                  |
| ----: | -----: | ----: | ----: | ----: | -------------------------------------- |
| 12.6% | 27.8ms |    31 | 0.9ms | 3.9ms | `ParseDeclarationOrFunctionDefinition` |
|  1.8% |  3.9ms |     5 | 0.8ms | 1.1ms | `CodeGen Function`                     |

##### `CGSCCToFunctionPassAdaptor`

|     % |    Time | Count |  Mean |    Max | Child                   |
| ----: | ------: | ----: | ----: | -----: | ----------------------- |
| 99.5% | 203.6ms |   102 | 2.0ms | 12.0ms | `PassManager<Function>` |

##### `ModuleToFunctionPassAdaptor`

|     % |   Time | Count |  Mean |   Max | Child                   |
| ----: | -----: | ----: | ----: | ----: | ----------------------- |
| 55.3% | 62.0ms |    45 | 1.4ms | 4.0ms | `PassManager<Function>` |

##### `RunPass`

|    % |  Time | Count |  Mean |   Max | Child         |
| ---: | ----: | ----: | ----: | ----: | ------------- |
| 0.6% | 0.6ms |     1 | 0.6ms | 0.6ms | `RunLoopPass` |

##### `ParseDeclarationOrFunctionDefinition`

|     % |   Time | Count |  Mean |   Max | Child                     |
| ----: | -----: | ----: | ----: | ----: | ------------------------- |
| 89.3% | 24.8ms |    27 | 0.9ms | 3.9ms | `ParseFunctionDefinition` |

##### `FunctionToLoopPassAdaptor`

|     % |  Time | Count |  Mean |   Max | Child                                                                                 |
| ----: | ----: | ----: | ----: | ----: | ------------------------------------------------------------------------------------- |
| 47.4% | 6.0ms |     9 | 0.7ms | 0.9ms | `PassManager<Loop, LoopAnalysisManager, LoopStandardAnalysisResults &, LPMUpdater &>` |

#### Longest instances

Instances of each span with the most time, and when each started.

##### `ExecuteCompiler`

|      % |    Time | Start |
| -----: | ------: | ----: |
| 100.0% | 940.4ms |   0ms |

##### `Backend`

|      % |    Time |   Start |
| -----: | ------: | ------: |
| 100.0% | 715.6ms | 223.9ms |

##### `Optimizer`

|      % |    Time |   Start |
| -----: | ------: | ------: |
| 100.0% | 430.4ms | 224.3ms |

##### `ModuleInlinerWrapperPass`

|      % |    Time |   Start | Attributes        |
| -----: | ------: | ------: | ----------------- |
| 100.0% | 298.1ms | 277.0ms | `detail=[module]` |

##### `ModuleToPostOrderCGSCCPassAdaptor`

|      % |    Time |   Start | Attributes        |
| -----: | ------: | ------: | ----------------- |
| 100.0% | 296.5ms | 278.2ms | `detail=[module]` |

##### `CodeGenPasses`

|      % |    Time |   Start |
| -----: | ------: | ------: |
| 100.0% | 283.2ms | 656.1ms |

##### `OptModule`

|      % |    Time |   Start | Attributes                                      |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 283.0ms | 656.2ms | `detail=/src/zstd/lib/compress/zstd_compress.c` |

##### `PassManager<Function>`

|    % |   Time |   Start | Attributes                              |
| ---: | -----: | ------: | --------------------------------------- |
| 4.5% | 12.0ms | 351.8ms | `detail=ZSTD_resetCCtx_internal`        |
| 3.4% |  9.1ms | 340.6ms | `detail=ZSTD_reset_matchState`          |
| 3.1% |  8.3ms | 485.9ms | `detail=ZSTD_compressContinue_internal` |
| 3.1% |  8.1ms | 476.6ms | `detail=ZSTD_compress_frameChunk`       |
| 2.7% |  7.1ms | 388.0ms | `detail=ZSTD_loadCEntropy`              |

##### `DevirtSCCRepeatedPass`

|    % |   Time |   Start | Attributes                                |
| ---: | -----: | ------: | ----------------------------------------- |
| 5.3% | 13.3ms | 350.6ms | `detail=(ZSTD_resetCCtx_internal)`        |
| 4.1% | 10.2ms | 339.7ms | `detail=(ZSTD_reset_matchState)`          |
| 3.8% |  9.5ms | 484.8ms | `detail=(ZSTD_compressContinue_internal)` |
| 3.6% |  9.1ms | 475.7ms | `detail=(ZSTD_compress_frameChunk)`       |
| 3.0% |  7.4ms | 387.7ms | `detail=(ZSTD_loadCEntropy)`              |

##### `PassManager<LazyCallGraph::SCC, CGSCCAnalysisManager, LazyCallGraph &, CGSCCUpdateResult &>`

|    % |   Time |   Start | Attributes                                |
| ---: | -----: | ------: | ----------------------------------------- |
| 5.3% | 13.3ms | 350.7ms | `detail=(ZSTD_resetCCtx_internal)`        |
| 4.1% | 10.2ms | 339.7ms | `detail=(ZSTD_reset_matchState)`          |
| 3.8% |  9.5ms | 484.8ms | `detail=(ZSTD_compressContinue_internal)` |
| 3.7% |  9.1ms | 475.7ms | `detail=(ZSTD_compress_frameChunk)`       |
| 3.0% |  7.4ms | 387.7ms | `detail=(ZSTD_loadCEntropy)`              |

##### `OptFunction`

|    % |   Time |   Start | Attributes                              |
| ---: | -----: | ------: | --------------------------------------- |
| 5.7% | 13.5ms | 753.4ms | `detail=ZSTD_compressContinue_internal` |
| 5.2% | 12.2ms | 862.2ms | `detail=ZSTD_resetCCtx_internal`        |
| 3.7% |  8.8ms | 874.4ms | `detail=ZSTD_reset_matchState`          |
| 3.1% |  7.3ms | 829.7ms | `detail=ZSTD_compressStream2`           |
| 2.8% |  6.6ms | 772.3ms | `detail=ZSTD_compressBegin_internal`    |

##### `Frontend`

|     % |    Time |   Start |
| ----: | ------: | ------: |
| 90.6% | 200.4ms |   2.4ms |
|  9.4% |  20.8ms | 202.8ms |

##### `CGSCCToFunctionPassAdaptor`

|    % |   Time |   Start | Attributes                                |
| ---: | -----: | ------: | ----------------------------------------- |
| 5.9% | 12.0ms | 351.8ms | `detail=(ZSTD_resetCCtx_internal)`        |
| 4.5% |  9.1ms | 340.6ms | `detail=(ZSTD_reset_matchState)`          |
| 4.1% |  8.3ms | 485.9ms | `detail=(ZSTD_compressContinue_internal)` |
| 4.0% |  8.1ms | 476.6ms | `detail=(ZSTD_compress_frameChunk)`       |
| 3.5% |  7.1ms | 388.0ms | `detail=(ZSTD_loadCEntropy)`              |

##### `ModuleToFunctionPassAdaptor`

|     % |   Time |   Start | Attributes        |
| ----: | -----: | ------: | ----------------- |
| 67.6% | 75.8ms | 578.1ms | `detail=[module]` |
| 17.4% | 19.5ms | 225.0ms | `detail=[module]` |
| 14.9% | 16.7ms | 259.2ms | `detail=[module]` |

##### `RunPass`

|    % |  Time |   Start | Attributes                             |
| ---: | ----: | ------: | -------------------------------------- |
| 4.8% | 4.7ms | 862.4ms | `detail=AArch64 Instruction Selection` |
| 4.3% | 4.1ms | 753.6ms | `detail=AArch64 Instruction Selection` |
| 4.2% | 4.0ms | 874.6ms | `detail=AArch64 Instruction Selection` |
| 3.8% | 3.7ms | 760.6ms | `detail=Greedy Register Allocator`     |
| 3.3% | 3.2ms | 772.4ms | `detail=AArch64 Instruction Selection` |

##### `ParseDeclarationOrFunctionDefinition`

|     % |  Time |   Start | Attributes                                                                                                                           |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------ |
| 14.1% | 3.9ms | 142.6ms | `detail=/src/zstd/lib/compress/zstd_compress.c:770:1`                                                                                |
|  5.6% | 1.6ms | 189.5ms | `detail=/src/zstd/lib/compress/zstd_compress.c:6103:1`                                                                               |
|  5.1% | 1.4ms | 157.8ms | `detail=/src/zstd/lib/compress/zstd_compress.c:2100:1`                                                                               |
|  4.8% | 1.3ms |  46.6ms | `detail=/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h:27792:1 <Spelling=/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h:124:14>` |
|  4.6% | 1.3ms | 177.5ms | `detail=/src/zstd/lib/compress/zstd_compress.c:5061:1`                                                                               |

##### `ParseFunctionDefinition`

|     % |  Time |   Start | Attributes                            |
| ----: | ----: | ------: | ------------------------------------- |
| 15.7% | 3.9ms | 142.6ms | `detail=ZSTD_CCtxParams_setParameter` |
|  6.2% | 1.5ms | 189.5ms | `detail=ZSTD_compressStream_generic`  |
|  5.7% | 1.4ms | 157.8ms | `detail=ZSTD_resetCCtx_internal`      |
|  5.4% | 1.3ms |  46.6ms | `detail=vshl_s16`                     |
|  5.1% | 1.3ms | 177.6ms | `detail=ZSTD_loadCEntropy`            |

##### `GVNPass`

|     % |  Time |   Start | Attributes                       |
| ----: | ----: | ------: | -------------------------------- |
| 20.9% | 3.4ms | 343.1ms | `detail=ZSTD_reset_matchState`   |
| 17.5% | 2.8ms | 355.6ms | `detail=ZSTD_resetCCtx_internal` |
|  9.7% | 1.6ms | 325.0ms | `detail=ZSTD_estimateCCtxSize`   |
|  9.2% | 1.5ms | 391.0ms | `detail=ZSTD_loadCEntropy`       |
|  7.7% | 1.3ms | 507.3ms | `detail=ZSTD_compressStream2`    |

##### `FunctionToLoopPassAdaptor`

|     % |  Time |   Start | Attributes                                  |
| ----: | ----: | ------: | ------------------------------------------- |
| 14.9% | 1.9ms | 389.1ms | `detail=ZSTD_loadCEntropy`                  |
|  9.1% | 1.2ms | 479.0ms | `detail=ZSTD_compress_frameChunk`           |
|  8.3% | 1.1ms | 426.1ms | `detail=ZSTD_transferSequences_wBlockDelim` |
|  7.4% | 0.9ms | 547.9ms | `detail=ZSTD_transferSequences_noDelim`     |
|  7.3% | 0.9ms | 374.0ms | `detail=ZSTD_reduceTable`                   |

##### `InstCombinePass`

|    % |  Time |   Start | Attributes                              |
| ---: | ----: | ------: | --------------------------------------- |
| 7.2% | 0.8ms | 493.4ms | `detail=ZSTD_compressContinue_internal` |
| 6.3% | 0.7ms | 477.9ms | `detail=ZSTD_compress_frameChunk`       |
| 6.2% | 0.7ms | 353.4ms | `detail=ZSTD_resetCCtx_internal`        |
| 6.0% | 0.7ms | 363.0ms | `detail=ZSTD_resetCCtx_internal`        |
| 5.7% | 0.7ms | 296.9ms | `detail=ZSTD_CCtxParams_setParameter`   |

##### `InlinerPass`

|     % |  Time |   Start | Attributes                                |
| ----: | ----: | ------: | ----------------------------------------- |
| 11.3% | 1.0ms | 484.8ms | `detail=(ZSTD_compressContinue_internal)` |
| 11.3% | 1.0ms | 350.7ms | `detail=(ZSTD_resetCCtx_internal)`        |
| 10.4% | 0.9ms | 295.3ms | `detail=(ZSTD_CCtxParams_setParameter)`   |
|  9.7% | 0.9ms | 339.7ms | `detail=(ZSTD_reset_matchState)`          |
|  9.4% | 0.9ms | 475.7ms | `detail=(ZSTD_compress_frameChunk)`       |

##### `IPSCCPPass`

|      % |  Time |   Start | Attributes        |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 7.2ms | 244.5ms | `detail=[module]` |

### Elapsed time

Async spans with the most time elapsed from start to end.

|    Time | Count |   Mean |     Max | Span     |
| ------: | ----: | -----: | ------: | -------- |
| 133.9ms |    23 | 16.2ms | 111.9ms | `Source` |

#### Attribute values

Attribute values with the largest contribution to each span's elapsed time.

##### `Source`

|     % |    Time | Count |    Mean |     Max | Attribute | Value                                              |
| ----: | ------: | ----: | ------: | ------: | --------- | -------------------------------------------------- |
| 30.0% | 111.9ms |     1 | 111.9ms | 111.9ms | `detail`  | `/src/zstd/lib/compress/../common/allocations.h`   |
| 27.1% | 100.9ms |     1 | 100.9ms | 100.9ms | `detail`  | `/src/zstd/lib/compress/../common/compiler.h`      |
| 26.9% | 100.4ms |     1 | 100.4ms | 100.4ms | `detail`  | `/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h` |
|  3.9% |  14.6ms |     1 |  14.6ms |  14.6ms | `detail`  | `/src/zstd/lib/compress/zstd_compress_internal.h`  |
|  2.0% |   7.3ms |     1 |   7.3ms |   7.3ms | `detail`  | `/src/zstd/lib/compress/../common/zstd_deps.h`     |

#### Parents

Parent spans with the largest contribution to each span's elapsed time.

##### `Source`

|     % |    Time | Count |   Mean |     Max | Parent   |
| ----: | ------: | ----: | -----: | ------: | -------- |
| 64.1% | 238.8ms |    17 | 14.0ms | 100.9ms | `Source` |

#### Children

Child spans with the largest contribution to each span's elapsed time.

##### `Source`

|     % |    Time | Count |   Mean |     Max | Child    |
| ----: | ------: | ----: | -----: | ------: | -------- |
| 64.1% | 238.8ms |    17 | 14.0ms | 100.9ms | `Source` |

#### Longest instances

Instances of each span with the most time, and when each started.

##### `Source`

|     % |    Time |   Start | Attributes                                                |
| ----: | ------: | ------: | --------------------------------------------------------- |
| 30.0% | 111.9ms |   2.9ms | `detail=/src/zstd/lib/compress/../common/allocations.h`   |
| 27.1% | 100.9ms |  10.2ms | `detail=/src/zstd/lib/compress/../common/compiler.h`      |
| 26.9% | 100.4ms |  10.4ms | `detail=/usr/lib/llvm-19/lib/clang/19/include/arm_neon.h` |
|  3.9% |  14.6ms | 121.7ms | `detail=/src/zstd/lib/compress/zstd_compress_internal.h`  |
|  2.0% |   7.3ms |   2.9ms | `detail=/src/zstd/lib/compress/../common/zstd_deps.h`     |
