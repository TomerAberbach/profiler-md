# CPU profile

Took 1.29s over 1,290 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| ours     | 99.1% |  1.27s |   1,279 |
| stdlib   |  0.9% | 11.0ms |      11 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                             | Location          |
| ----: | ------: | ------: | ---------------------------------------------------- | ----------------- |
| 73.6% | 949.0ms |     949 | `ZSTD_btGetAllMatches_noDict_3`                      | zstd_opt.c        |
| 23.7% | 306.0ms |     306 | `ZSTD_compressBlock_opt2`                            | zstd_opt.c        |
|  0.5% |   7.0ms |       7 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | zstd_opt.c        |
|  0.4% |   5.0ms |       5 | `ZSTD_updateStats`                                   | zstd_opt.c        |
|  0.2% |   3.0ms |       3 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | zstd_opt.c        |
|  0.2% |   3.0ms |       3 | `ZSTD_seqToCodes`                                    | `<unknown>`       |
|  0.2% |   2.0ms |       2 | `ZSTD_compressStream2`                               | `<unknown>`       |
|  0.2% |   2.0ms |       2 | `HIST_count_parallel_wksp`                           | hist.c            |
|  0.2% |   2.0ms |       2 | `ZSTD_insertBt1.constprop.3`                         | zstd_opt.c        |
|  0.1% |   1.0ms |       1 | `ZSTD_encodeSequences`                               | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `ZSTDMT_initCStream_internal`                        | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `ZSTD_compressBegin_internal`                        | zstd_compress.c   |
|  0.1% |   1.0ms |       1 | `ZSTD_deriveSeqStoreChunk`                           | zstd_compress.c   |
|  0.1% |   1.0ms |       1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | zstd_compress.c   |
|  0.1% |   1.0ms |       1 | `ZSTDMT_getBuffer`                                   | zstdmt_compress.c |
|  0.1% |   1.0ms |       1 | `HIST_countFast_wksp`                                | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `ZSTD_freeCCtx`                                      | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `HUF_optimalTableLog`                                | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `ZSTD_setBasePrices`                                 | zstd_opt.c        |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c)

|      % |    Time | Samples | Caller                    | Location   |
| -----: | ------: | ------: | ------------------------- | ---------- |
| 100.0% | 949.0ms |     949 | `ZSTD_compressBlock_opt2` | zstd_opt.c |

##### `ZSTD_compressBlock_opt2` (zstd_opt.c)

|     % |    Time | Samples | Caller                        | Location        |
| ----: | ------: | ------: | ----------------------------- | --------------- |
| 99.0% | 303.0ms |     303 | `ZSTD_buildSeqStore`          | zstd_compress.c |
|  1.0% |   3.0ms |       3 | `ZSTD_compressBlock_btultra2` | `<unknown>`     |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (zstd_opt.c)

|     % |  Time | Samples | Caller                        | Location        |
| ----: | ----: | ------: | ----------------------------- | --------------- |
| 85.7% | 6.0ms |       6 | `ZSTD_buildSeqStore`          | zstd_compress.c |
| 14.3% | 1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `<unknown>`     |

##### `ZSTD_updateStats` (zstd_opt.c)

|      % |  Time | Samples | Caller               | Location        |
| -----: | ----: | ------: | -------------------- | --------------- |
| 100.0% | 5.0ms |       5 | `ZSTD_buildSeqStore` | zstd_compress.c |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (zstd_opt.c)

|      % |  Time | Samples | Caller               | Location        |
| -----: | ----: | ------: | -------------------- | --------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_buildSeqStore` | zstd_compress.c |

##### `ZSTD_seqToCodes` (`<unknown>`)

|     % |  Time | Samples | Caller                              | Location        |
| ----: | ----: | ------: | ----------------------------------- | --------------- |
| 66.7% | 2.0ms |       2 | `ZSTD_buildBlockEntropyStats`       | `<unknown>`     |
| 33.3% | 1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock` | zstd_compress.c |

##### `ZSTD_compressStream2` (`<unknown>`)

|      % |  Time | Samples | Caller                         | Location |
| -----: | ----: | ------: | ------------------------------ | -------- |
| 100.0% | 2.0ms |       2 | `FIO_compressFilename_srcFile` | fileio.c |

##### `HIST_count_parallel_wksp` (hist.c)

|     % |  Time | Samples | Caller                                               | Location        |
| ----: | ----: | ------: | ---------------------------------------------------- | --------------- |
| 50.0% | 1.0ms |       1 | `ZSTD_buildSequencesStatistics`                      | zstd_compress.c |
| 50.0% | 1.0ms |       1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | zstd_compress.c |

##### `ZSTD_insertBt1.constprop.3` (zstd_opt.c)

|      % |  Time | Samples | Caller                          | Location   |
| -----: | ----: | ------: | ------------------------------- | ---------- |
| 100.0% | 2.0ms |       2 | `ZSTD_btGetAllMatches_noDict_3` | zstd_opt.c |

##### `ZSTD_encodeSequences` (`<unknown>`)

|      % |  Time | Samples | Caller                              | Location        |
| -----: | ----: | ------: | ----------------------------------- | --------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock` | zstd_compress.c |

##### `ZSTDMT_initCStream_internal` (`<unknown>`)

|      % |  Time | Samples | Caller                           | Location        |
| -----: | ----: | ------: | -------------------------------- | --------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_CCtx_init_compressStream2` | zstd_compress.c |

##### `ZSTD_compressBegin_internal` (zstd_compress.c)

|      % |  Time | Samples | Caller                                 | Location    |
| -----: | ----: | ------: | -------------------------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |

##### `ZSTD_deriveSeqStoreChunk` (zstd_compress.c)

|      % |  Time | Samples | Caller                     | Location        |
| -----: | ----: | ------: | -------------------------- | --------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compress_frameChunk` | zstd_compress.c |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c)

|      % |  Time | Samples | Caller                         | Location        |
| -----: | ----: | ------: | ------------------------------ | --------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_deriveBlockSplitsHelper` | zstd_compress.c |

##### `ZSTDMT_getBuffer` (zstdmt_compress.c)

|      % |  Time | Samples | Caller                  | Location          |
| -----: | ----: | ------: | ----------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTDMT_compressionJob` | zstdmt_compress.c |

##### `HIST_countFast_wksp` (`<unknown>`)

|      % |  Time | Samples | Caller                                               | Location        |
| -----: | ----: | ------: | ---------------------------------------------------- | --------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | zstd_compress.c |

##### `ZSTD_freeCCtx` (`<unknown>`)

|      % |  Time | Samples | Caller                       | Location          |
| -----: | ----: | ------: | ---------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTDMT_freeCCtxPool.part.0` | zstdmt_compress.c |

##### `HUF_optimalTableLog` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location       |
| -----: | ----: | ------: | ----------------------- | -------------- |
| 100.0% | 1.0ms |       1 | `HUF_compress_internal` | huf_compress.c |

##### `ZSTD_setBasePrices` (zstd_opt.c)

|      % |  Time | Samples | Caller               | Location        |
| -----: | ----: | ------: | -------------------- | --------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildSeqStore` | zstd_compress.c |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                             | Location          |
| ----: | ------: | ------: | ---------------------------------------------------- | ----------------- |
| 99.7% |   1.28s |   1,286 | `ZSTDMT_compressionJob`                              | zstdmt_compress.c |
| 99.7% |   1.28s |   1,286 | `POOL_thread`                                        | pool.c            |
| 99.5% |   1.28s |   1,284 | `ZSTD_compress_frameChunk`                           | zstd_compress.c   |
| 98.7% |   1.27s |   1,273 | `ZSTD_buildSeqStore`                                 | zstd_compress.c   |
| 97.4% |   1.25s |   1,257 | `ZSTD_compressBlock_opt2`                            | zstd_opt.c        |
| 84.2% |   1.08s |   1,086 | `ZSTD_compressContinue_public`                       | `<unknown>`       |
| 73.7% | 951.0ms |     951 | `ZSTD_btGetAllMatches_noDict_3`                      | zstd_opt.c        |
| 15.3% | 198.0ms |     198 | `ZSTD_compressEnd_public`                            | `<unknown>`       |
|  1.4% |  18.0ms |      18 | `ZSTD_compressBlock_btultra2`                        | `<unknown>`       |
|  0.5% |   7.0ms |       7 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | zstd_opt.c        |
|  0.5% |   6.0ms |       6 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | zstd_compress.c   |
|  0.5% |   6.0ms |       6 | `ZSTD_deriveBlockSplitsHelper`                       | zstd_compress.c   |
|  0.4% |   5.0ms |       5 | `ZSTD_updateStats`                                   | zstd_opt.c        |
|  0.3% |   4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock`                  | zstd_compress.c   |
|  0.2% |   3.0ms |       3 | `ZSTD_compressStream2`                               | `<unknown>`       |
|  0.2% |   3.0ms |       3 | `FIO_compressFilename_srcFile`                       | fileio.c          |
|  0.2% |   3.0ms |       3 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | zstd_opt.c        |
|  0.2% |   3.0ms |       3 | `ZSTD_seqToCodes`                                    | `<unknown>`       |
|  0.2% |   3.0ms |       3 | `ZSTD_buildBlockEntropyStats`                        | `<unknown>`       |
|  0.2% |   2.0ms |       2 | `HIST_count_parallel_wksp`                           | hist.c            |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `ZSTDMT_compressionJob` (zstdmt_compress.c)

|     % |    Time | Samples | Callee                                 | Location          |
| ----: | ------: | ------: | -------------------------------------- | ----------------- |
| 84.4% |   1.08s |   1,086 | `ZSTD_compressContinue_public`         | `<unknown>`       |
| 15.4% | 198.0ms |     198 | `ZSTD_compressEnd_public`              | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `ZSTD_compressBegin_advanced_internal` | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `ZSTDMT_getBuffer`                     | zstdmt_compress.c |

##### `POOL_thread` (pool.c)

|      % |  Time | Samples | Callee                  | Location          |
| -----: | ----: | ------: | ----------------------- | ----------------- |
| 100.0% | 1.28s |   1,286 | `ZSTDMT_compressionJob` | zstdmt_compress.c |

##### `ZSTD_compress_frameChunk` (zstd_compress.c)

|     % |  Time | Samples | Callee                              | Location        |
| ----: | ----: | ------: | ----------------------------------- | --------------- |
| 99.1% | 1.27s |   1,273 | `ZSTD_buildSeqStore`                | zstd_compress.c |
|  0.5% | 6.0ms |       6 | `ZSTD_deriveBlockSplitsHelper`      | zstd_compress.c |
|  0.3% | 4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock` | zstd_compress.c |
|  0.1% | 1.0ms |       1 | `ZSTD_deriveSeqStoreChunk`          | zstd_compress.c |

##### `ZSTD_buildSeqStore` (zstd_compress.c)

|     % |   Time | Samples | Callee                                   | Location    |
| ----: | -----: | ------: | ---------------------------------------- | ----------- |
| 97.4% |  1.24s |   1,240 | `ZSTD_compressBlock_opt2`                | zstd_opt.c  |
|  1.4% | 18.0ms |      18 | `ZSTD_compressBlock_btultra2`            | `<unknown>` |
|  0.5% |  6.0ms |       6 | `ZSTD_litLengthPrice.constprop.1.isra.0` | zstd_opt.c  |
|  0.4% |  5.0ms |       5 | `ZSTD_updateStats`                       | zstd_opt.c  |
|  0.2% |  3.0ms |       3 | `ZSTD_litLengthPrice.constprop.0.isra.0` | zstd_opt.c  |

##### `ZSTD_compressBlock_opt2` (zstd_opt.c)

|     % |    Time | Samples | Callee                          | Location   |
| ----: | ------: | ------: | ------------------------------- | ---------- |
| 75.7% | 951.0ms |     951 | `ZSTD_btGetAllMatches_noDict_3` | zstd_opt.c |

##### `ZSTD_compressContinue_public` (`<unknown>`)

|      % |  Time | Samples | Callee                     | Location        |
| -----: | ----: | ------: | -------------------------- | --------------- |
| 100.0% | 1.08s |   1,086 | `ZSTD_compress_frameChunk` | zstd_compress.c |

##### `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c)

|    % |  Time | Samples | Callee                       | Location   |
| ---: | ----: | ------: | ---------------------------- | ---------- |
| 0.2% | 2.0ms |       2 | `ZSTD_insertBt1.constprop.3` | zstd_opt.c |

##### `ZSTD_compressEnd_public` (`<unknown>`)

|      % |    Time | Samples | Callee                     | Location        |
| -----: | ------: | ------: | -------------------------- | --------------- |
| 100.0% | 198.0ms |     198 | `ZSTD_compress_frameChunk` | zstd_compress.c |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

|     % |   Time | Samples | Callee                                   | Location   |
| ----: | -----: | ------: | ---------------------------------------- | ---------- |
| 94.4% | 17.0ms |      17 | `ZSTD_compressBlock_opt2`                | zstd_opt.c |
|  5.6% |  1.0ms |       1 | `ZSTD_litLengthPrice.constprop.1.isra.0` | zstd_opt.c |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c)

|     % |  Time | Samples | Callee                        | Location    |
| ----: | ----: | ------: | ----------------------------- | ----------- |
| 50.0% | 3.0ms |       3 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |
| 16.7% | 1.0ms |       1 | `HIST_countFast_wksp`         | `<unknown>` |
| 16.7% | 1.0ms |       1 | `HIST_count_parallel_wksp`    | hist.c      |

##### `ZSTD_deriveBlockSplitsHelper` (zstd_compress.c)

|      % |  Time | Samples | Callee                                               | Location        |
| -----: | ----: | ------: | ---------------------------------------------------- | --------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | zstd_compress.c |
|  16.7% | 1.0ms |       1 | `ZSTD_deriveBlockSplitsHelper`                       | zstd_compress.c |

##### `ZSTD_compressSeqStore_singleBlock` (zstd_compress.c)

|     % |  Time | Samples | Callee                          | Location        |
| ----: | ----: | ------: | ------------------------------- | --------------- |
| 25.0% | 1.0ms |       1 | `ZSTD_encodeSequences`          | `<unknown>`     |
| 25.0% | 1.0ms |       1 | `ZSTD_seqToCodes`               | `<unknown>`     |
| 25.0% | 1.0ms |       1 | `ZSTD_compressLiterals`         | `<unknown>`     |
| 25.0% | 1.0ms |       1 | `ZSTD_buildSequencesStatistics` | zstd_compress.c |

##### `ZSTD_compressStream2` (`<unknown>`)

|     % |  Time | Samples | Callee                           | Location        |
| ----: | ----: | ------: | -------------------------------- | --------------- |
| 33.3% | 1.0ms |       1 | `ZSTD_CCtx_init_compressStream2` | zstd_compress.c |

##### `FIO_compressFilename_srcFile` (fileio.c)

|      % |  Time | Samples | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

|     % |  Time | Samples | Callee                          | Location        |
| ----: | ----: | ------: | ------------------------------- | --------------- |
| 66.7% | 2.0ms |       2 | `ZSTD_seqToCodes`               | `<unknown>`     |
| 33.3% | 1.0ms |       1 | `ZSTD_buildSequencesStatistics` | zstd_compress.c |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 60.5% | 780.0ms |     780 | `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                           |
| 20.3% | 262.0ms |     262 | `ZSTD_compressBlock_opt2` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                             |
| 12.0% | 155.0ms |     155 | `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                |
|  3.2% |  41.0ms |      41 | `ZSTD_compressBlock_opt2` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                  |
|  1.1% |  14.0ms |      14 | `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)           |
|  0.5% |   6.0ms |       6 | `ZSTD_litLengthPrice.constprop.1.isra.0` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                              |
|  0.3% |   4.0ms |       4 | `ZSTD_updateStats` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                    |
|  0.2% |   3.0ms |       3 | `ZSTD_compressBlock_opt2` (zstd_opt.c) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                             |
|  0.2% |   3.0ms |       3 | `ZSTD_litLengthPrice.constprop.0.isra.0` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                              |
|  0.2% |   2.0ms |       2 | `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (fileio.c)                                                                                                                                                                                                                               |
|  0.2% |   2.0ms |       2 | `ZSTD_insertBt1.constprop.3` (zstd_opt.c) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)            |
|  0.1% |   1.0ms |       1 | `ZSTD_encodeSequences` ← `ZSTD_compressSeqStore_singleBlock` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                              |
|  0.1% |   1.0ms |       1 | `ZSTDMT_initCStream_internal` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (fileio.c)                                                                                                                                          |
|  0.1% |   1.0ms |       1 | `ZSTD_compressBegin_internal` (zstd_compress.c) ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                                                                  |
|  0.1% |   1.0ms |       1 | `ZSTD_deriveSeqStoreChunk` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                                                |
|  0.1% |   1.0ms |       1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                     |
|  0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_compressSeqStore_singleBlock` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                   |
|  0.1% |   1.0ms |       1 | `ZSTDMT_getBuffer` (zstdmt_compress.c) ← `ZSTDMT_compressionJob` ← `POOL_thread` (pool.c)                                                                                                                                                                                                        |
|  0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c) |
|  0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)      |
