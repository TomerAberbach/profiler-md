# CPU profile

Took 1.24s over 1,246 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| ours     | 98.9% |  1.23s |   1,232 |
| stdlib   |  1.1% | 14.0ms |      14 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                 | Location          |
| ----: | ------: | ------: | ---------------------------------------- | ----------------- |
| 74.4% | 927.0ms |     927 | `ZSTD_btGetAllMatches_noDict_3`          | zstd_opt.c        |
| 22.2% | 276.0ms |     276 | `ZSTD_compressBlock_opt2`                | zstd_opt.c        |
|  0.8% |  10.0ms |      10 | `ZSTD_litLengthPrice.constprop.1.isra.0` | zstd_opt.c        |
|  0.6% |   7.0ms |       7 | `ZSTD_seqToCodes`                        | `<unknown>`       |
|  0.5% |   6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0` | zstd_opt.c        |
|  0.4% |   5.0ms |       5 | `ZSTD_insertBt1.constprop.3`             | zstd_opt.c        |
|  0.2% |   3.0ms |       3 | `ZSTD_updateStats`                       | zstd_opt.c        |
|  0.2% |   2.0ms |       2 | `ZSTD_encodeSequences`                   | `<unknown>`       |
|  0.2% |   2.0ms |       2 | `ZSTD_compressBegin_internal`            | zstd_compress.c   |
|  0.2% |   2.0ms |       2 | `ZSTD_compressStream2`                   | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `ZSTDMT_compressionJob`                  | zstdmt_compress.c |
|  0.1% |   1.0ms |       1 | `HIST_count_parallel_wksp`               | hist.c            |
|  0.1% |   1.0ms |       1 | `FSE_compress_usingCTable_generic`       | fse_compress.c    |
|  0.1% |   1.0ms |       1 | `FSE_normalizeCount`                     | `<unknown>`       |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c)

|      % |    Time | Samples | Caller                    | Location   |
| -----: | ------: | ------: | ------------------------- | ---------- |
| 100.0% | 927.0ms |     927 | `ZSTD_compressBlock_opt2` | zstd_opt.c |

##### `ZSTD_compressBlock_opt2` (zstd_opt.c)

|     % |    Time | Samples | Caller                        | Location        |
| ----: | ------: | ------: | ----------------------------- | --------------- |
| 98.9% | 273.0ms |     273 | `ZSTD_buildSeqStore`          | zstd_compress.c |
|  1.1% |   3.0ms |       3 | `ZSTD_compressBlock_btultra2` | `<unknown>`     |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (zstd_opt.c)

|     % |  Time | Samples | Caller                        | Location        |
| ----: | ----: | ------: | ----------------------------- | --------------- |
| 90.0% | 9.0ms |       9 | `ZSTD_buildSeqStore`          | zstd_compress.c |
| 10.0% | 1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `<unknown>`     |

##### `ZSTD_seqToCodes` (`<unknown>`)

|     % |  Time | Samples | Caller                              | Location        |
| ----: | ----: | ------: | ----------------------------------- | --------------- |
| 85.7% | 6.0ms |       6 | `ZSTD_buildBlockEntropyStats`       | `<unknown>`     |
| 14.3% | 1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock` | zstd_compress.c |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (zstd_opt.c)

|      % |  Time | Samples | Caller               | Location        |
| -----: | ----: | ------: | -------------------- | --------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_buildSeqStore` | zstd_compress.c |

##### `ZSTD_insertBt1.constprop.3` (zstd_opt.c)

|      % |  Time | Samples | Caller                          | Location   |
| -----: | ----: | ------: | ------------------------------- | ---------- |
| 100.0% | 5.0ms |       5 | `ZSTD_btGetAllMatches_noDict_3` | zstd_opt.c |

##### `ZSTD_updateStats` (zstd_opt.c)

|      % |  Time | Samples | Caller               | Location        |
| -----: | ----: | ------: | -------------------- | --------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_buildSeqStore` | zstd_compress.c |

##### `ZSTD_encodeSequences` (`<unknown>`)

|      % |  Time | Samples | Caller                              | Location        |
| -----: | ----: | ------: | ----------------------------------- | --------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressSeqStore_singleBlock` | zstd_compress.c |

##### `ZSTD_compressBegin_internal` (zstd_compress.c)

|      % |  Time | Samples | Caller                                 | Location    |
| -----: | ----: | ------: | -------------------------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |

##### `ZSTD_compressStream2` (`<unknown>`)

|      % |  Time | Samples | Caller                         | Location |
| -----: | ----: | ------: | ------------------------------ | -------- |
| 100.0% | 2.0ms |       2 | `FIO_compressFilename_srcFile` | fileio.c |

##### `ZSTDMT_compressionJob` (zstdmt_compress.c)

|      % |  Time | Samples | Caller        | Location |
| -----: | ----: | ------: | ------------- | -------- |
| 100.0% | 1.0ms |       1 | `POOL_thread` | pool.c   |

##### `HIST_count_parallel_wksp` (hist.c)

|      % |  Time | Samples | Caller                          | Location        |
| -----: | ----: | ------: | ------------------------------- | --------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildSequencesStatistics` | zstd_compress.c |

##### `FSE_normalizeCount` (`<unknown>`)

|      % |  Time | Samples | Caller            | Location                  |
| -----: | ----: | ------: | ----------------- | ------------------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_NCountCost` | zstd_compress_sequences.c |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                             | Location          |
| ----: | ------: | ------: | ---------------------------------------------------- | ----------------- |
| 99.8% |   1.24s |   1,243 | `ZSTDMT_compressionJob`                              | zstdmt_compress.c |
| 99.8% |   1.24s |   1,243 | `POOL_thread`                                        | pool.c            |
| 99.5% |   1.24s |   1,240 | `ZSTD_compress_frameChunk`                           | zstd_compress.c   |
| 98.5% |   1.22s |   1,227 | `ZSTD_buildSeqStore`                                 | zstd_compress.c   |
| 97.0% |   1.20s |   1,208 | `ZSTD_compressBlock_opt2`                            | zstd_opt.c        |
| 84.4% |   1.05s |   1,052 | `ZSTD_compressContinue_public`                       | `<unknown>`       |
| 74.8% | 932.0ms |     932 | `ZSTD_btGetAllMatches_noDict_3`                      | zstd_opt.c        |
| 15.1% | 188.0ms |     188 | `ZSTD_compressEnd_public`                            | `<unknown>`       |
|  1.3% |  16.0ms |      16 | `ZSTD_compressBlock_btultra2`                        | `<unknown>`       |
|  0.8% |  10.0ms |      10 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | zstd_opt.c        |
|  0.7% |   9.0ms |       9 | `ZSTD_buildBlockEntropyStats`                        | `<unknown>`       |
|  0.7% |   9.0ms |       9 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | zstd_compress.c   |
|  0.7% |   9.0ms |       9 | `ZSTD_deriveBlockSplitsHelper`                       | zstd_compress.c   |
|  0.6% |   7.0ms |       7 | `ZSTD_seqToCodes`                                    | `<unknown>`       |
|  0.5% |   6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | zstd_opt.c        |
|  0.4% |   5.0ms |       5 | `ZSTD_insertBt1.constprop.3`                         | zstd_opt.c        |
|  0.3% |   4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock`                  | zstd_compress.c   |
|  0.2% |   3.0ms |       3 | `ZSTD_updateStats`                                   | zstd_opt.c        |
|  0.2% |   3.0ms |       3 | `ZSTD_compressStream2`                               | `<unknown>`       |
|  0.2% |   3.0ms |       3 | `FIO_compressFilename_srcFile`                       | fileio.c          |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `ZSTDMT_compressionJob` (zstdmt_compress.c)

|     % |    Time | Samples | Callee                                 | Location    |
| ----: | ------: | ------: | -------------------------------------- | ----------- |
| 84.6% |   1.05s |   1,052 | `ZSTD_compressContinue_public`         | `<unknown>` |
| 15.1% | 188.0ms |     188 | `ZSTD_compressEnd_public`              | `<unknown>` |
|  0.2% |   2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |

##### `POOL_thread` (pool.c)

|      % |  Time | Samples | Callee                  | Location          |
| -----: | ----: | ------: | ----------------------- | ----------------- |
| 100.0% | 1.24s |   1,243 | `ZSTDMT_compressionJob` | zstdmt_compress.c |

##### `ZSTD_compress_frameChunk` (zstd_compress.c)

|     % |  Time | Samples | Callee                              | Location        |
| ----: | ----: | ------: | ----------------------------------- | --------------- |
| 99.0% | 1.22s |   1,227 | `ZSTD_buildSeqStore`                | zstd_compress.c |
|  0.7% | 9.0ms |       9 | `ZSTD_deriveBlockSplitsHelper`      | zstd_compress.c |
|  0.3% | 4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock` | zstd_compress.c |

##### `ZSTD_buildSeqStore` (zstd_compress.c)

|     % |   Time | Samples | Callee                                   | Location    |
| ----: | -----: | ------: | ---------------------------------------- | ----------- |
| 97.2% |  1.19s |   1,193 | `ZSTD_compressBlock_opt2`                | zstd_opt.c  |
|  1.3% | 16.0ms |      16 | `ZSTD_compressBlock_btultra2`            | `<unknown>` |
|  0.7% |  9.0ms |       9 | `ZSTD_litLengthPrice.constprop.1.isra.0` | zstd_opt.c  |
|  0.5% |  6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0` | zstd_opt.c  |
|  0.2% |  3.0ms |       3 | `ZSTD_updateStats`                       | zstd_opt.c  |

##### `ZSTD_compressBlock_opt2` (zstd_opt.c)

|     % |    Time | Samples | Callee                          | Location   |
| ----: | ------: | ------: | ------------------------------- | ---------- |
| 77.2% | 932.0ms |     932 | `ZSTD_btGetAllMatches_noDict_3` | zstd_opt.c |

##### `ZSTD_compressContinue_public` (`<unknown>`)

|      % |  Time | Samples | Callee                     | Location        |
| -----: | ----: | ------: | -------------------------- | --------------- |
| 100.0% | 1.05s |   1,052 | `ZSTD_compress_frameChunk` | zstd_compress.c |

##### `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c)

|    % |  Time | Samples | Callee                       | Location   |
| ---: | ----: | ------: | ---------------------------- | ---------- |
| 0.5% | 5.0ms |       5 | `ZSTD_insertBt1.constprop.3` | zstd_opt.c |

##### `ZSTD_compressEnd_public` (`<unknown>`)

|      % |    Time | Samples | Callee                     | Location        |
| -----: | ------: | ------: | -------------------------- | --------------- |
| 100.0% | 188.0ms |     188 | `ZSTD_compress_frameChunk` | zstd_compress.c |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

|     % |   Time | Samples | Callee                                   | Location   |
| ----: | -----: | ------: | ---------------------------------------- | ---------- |
| 93.8% | 15.0ms |      15 | `ZSTD_compressBlock_opt2`                | zstd_opt.c |
|  6.3% |  1.0ms |       1 | `ZSTD_litLengthPrice.constprop.1.isra.0` | zstd_opt.c |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

|     % |  Time | Samples | Callee                          | Location        |
| ----: | ----: | ------: | ------------------------------- | --------------- |
| 66.7% | 6.0ms |       6 | `ZSTD_seqToCodes`               | `<unknown>`     |
| 22.2% | 2.0ms |       2 | `ZSTD_buildSequencesStatistics` | zstd_compress.c |
| 11.1% | 1.0ms |       1 | `HUF_optimalTableLog`           | `<unknown>`     |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c)

|      % |  Time | Samples | Callee                        | Location    |
| -----: | ----: | ------: | ----------------------------- | ----------- |
| 100.0% | 9.0ms |       9 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |

##### `ZSTD_deriveBlockSplitsHelper` (zstd_compress.c)

|      % |  Time | Samples | Callee                                               | Location        |
| -----: | ----: | ------: | ---------------------------------------------------- | --------------- |
| 100.0% | 9.0ms |       9 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | zstd_compress.c |

##### `ZSTD_compressSeqStore_singleBlock` (zstd_compress.c)

|     % |  Time | Samples | Callee                  | Location    |
| ----: | ----: | ------: | ----------------------- | ----------- |
| 50.0% | 2.0ms |       2 | `ZSTD_encodeSequences`  | `<unknown>` |
| 25.0% | 1.0ms |       1 | `ZSTD_seqToCodes`       | `<unknown>` |
| 25.0% | 1.0ms |       1 | `ZSTD_compressLiterals` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (fileio.c)

|      % |  Time | Samples | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `ZSTD_compressStream2` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 61.8% | 770.0ms |     770 | `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                           |
| 18.9% | 235.0ms |     235 | `ZSTD_compressBlock_opt2` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                             |
| 11.6% | 145.0ms |     145 | `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                |
|  3.0% |  38.0ms |      38 | `ZSTD_compressBlock_opt2` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                  |
|  1.0% |  12.0ms |      12 | `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)           |
|  0.7% |   9.0ms |       9 | `ZSTD_litLengthPrice.constprop.1.isra.0` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                              |
|  0.4% |   5.0ms |       5 | `ZSTD_seqToCodes` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c) |
|  0.4% |   5.0ms |       5 | `ZSTD_litLengthPrice.constprop.0.isra.0` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                              |
|  0.2% |   3.0ms |       3 | `ZSTD_insertBt1.constprop.3` (zstd_opt.c) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)            |
|  0.2% |   3.0ms |       3 | `ZSTD_compressBlock_opt2` (zstd_opt.c) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                             |
|  0.2% |   3.0ms |       3 | `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (fileio.c)                                                                                                                                                                                                                               |
|  0.2% |   2.0ms |       2 | `ZSTD_updateStats` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                    |
|  0.2% |   2.0ms |       2 | `ZSTD_encodeSequences` ← `ZSTD_compressSeqStore_singleBlock` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                              |
|  0.2% |   2.0ms |       2 | `ZSTD_compressBegin_internal` (zstd_compress.c) ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                                                                  |
|  0.2% |   2.0ms |       2 | `ZSTD_insertBt1.constprop.3` (zstd_opt.c) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                 |
|  0.1% |   1.0ms |       1 | `ZSTD_updateStats` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                         |
|  0.1% |   1.0ms |       1 | `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                                                                                                                                                             |
|  0.1% |   1.0ms |       1 | `ZSTD_litLengthPrice.constprop.0.isra.0` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                   |
|  0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_compressSeqStore_singleBlock` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                   |
|  0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)      |
