# CPU profile

Took 1.29s over 185 samples (7.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| ours     | 99.1% |  1.27s |     175 |
| stdlib   |  0.9% | 11.0ms |      10 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                             | Location          |
| ----: | ------: | ------: | ---------------------------------------------------- | ----------------- |
| 73.6% | 949.0ms |      81 | `ZSTD_btGetAllMatches_noDict_3`                      | zstd_opt.c        |
| 23.7% | 306.0ms |      74 | `ZSTD_compressBlock_opt2`                            | zstd_opt.c        |
|  0.5% |   7.0ms |       5 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | zstd_opt.c        |
|  0.4% |   5.0ms |       4 | `ZSTD_updateStats`                                   | zstd_opt.c        |
|  0.2% |   3.0ms |       2 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | zstd_opt.c        |
|  0.2% |   3.0ms |       3 | `ZSTD_seqToCodes`                                    | `<unknown>`       |
|  0.2% |   2.0ms |       1 | `ZSTD_compressStream2`                               | `<unknown>`       |
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

#### Lines

Lines ranked by contribution to each function's self time.

##### `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c)

|      % |    Time | Samples | Location     |
| -----: | ------: | ------: | ------------ |
| 100.0% | 949.0ms |      81 | zstd_opt.c:0 |

##### `ZSTD_compressBlock_opt2` (zstd_opt.c)

|      % |    Time | Samples | Location     |
| -----: | ------: | ------: | ------------ |
| 100.0% | 306.0ms |      74 | zstd_opt.c:0 |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (zstd_opt.c)

|      % |  Time | Samples | Location     |
| -----: | ----: | ------: | ------------ |
| 100.0% | 7.0ms |       5 | zstd_opt.c:0 |

##### `ZSTD_updateStats` (zstd_opt.c)

|      % |  Time | Samples | Location     |
| -----: | ----: | ------: | ------------ |
| 100.0% | 5.0ms |       4 | zstd_opt.c:0 |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (zstd_opt.c)

|      % |  Time | Samples | Location     |
| -----: | ----: | ------: | ------------ |
| 100.0% | 3.0ms |       2 | zstd_opt.c:0 |

##### `ZSTD_seqToCodes` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.0ms |       3 | 0        |

##### `ZSTD_compressStream2` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.0ms |       1 | 0        |

##### `HIST_count_parallel_wksp` (hist.c)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.0ms |       2 | hist.c:0 |

##### `ZSTD_insertBt1.constprop.3` (zstd_opt.c)

|      % |  Time | Samples | Location     |
| -----: | ----: | ------: | ------------ |
| 100.0% | 2.0ms |       2 | zstd_opt.c:0 |

##### `ZSTD_encodeSequences` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.0ms |       1 | 0        |

##### `ZSTDMT_initCStream_internal` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.0ms |       1 | 0        |

##### `ZSTD_compressBegin_internal` (zstd_compress.c)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 1.0ms |       1 | zstd_compress.c:0 |

##### `ZSTD_deriveSeqStoreChunk` (zstd_compress.c)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 1.0ms |       1 | zstd_compress.c:0 |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 1.0ms |       1 | zstd_compress.c:0 |

##### `ZSTDMT_getBuffer` (zstdmt_compress.c)

|      % |  Time | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 1.0ms |       1 | zstdmt_compress.c:0 |

##### `HIST_countFast_wksp` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.0ms |       1 | 0        |

##### `ZSTD_freeCCtx` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.0ms |       1 | 0        |

##### `HUF_optimalTableLog` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.0ms |       1 | 0        |

##### `ZSTD_setBasePrices` (zstd_opt.c)

|      % |  Time | Samples | Location     |
| -----: | ----: | ------: | ------------ |
| 100.0% | 1.0ms |       1 | zstd_opt.c:0 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c)

|      % |    Time | Samples | Caller                    | Location   |
| -----: | ------: | ------: | ------------------------- | ---------- |
| 100.0% | 949.0ms |      81 | `ZSTD_compressBlock_opt2` | zstd_opt.c |

##### `ZSTD_compressBlock_opt2` (zstd_opt.c)

|     % |    Time | Samples | Caller               | Location        |
| ----: | ------: | ------: | -------------------- | --------------- |
| 99.0% | 303.0ms |      71 | `ZSTD_buildSeqStore` | zstd_compress.c |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (zstd_opt.c)

|     % |  Time | Samples | Caller               | Location        |
| ----: | ----: | ------: | -------------------- | --------------- |
| 85.7% | 6.0ms |       4 | `ZSTD_buildSeqStore` | zstd_compress.c |

##### `ZSTD_updateStats` (zstd_opt.c)

|      % |  Time | Samples | Caller               | Location        |
| -----: | ----: | ------: | -------------------- | --------------- |
| 100.0% | 5.0ms |       4 | `ZSTD_buildSeqStore` | zstd_compress.c |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (zstd_opt.c)

|      % |  Time | Samples | Caller               | Location        |
| -----: | ----: | ------: | -------------------- | --------------- |
| 100.0% | 3.0ms |       2 | `ZSTD_buildSeqStore` | zstd_compress.c |

##### `ZSTD_seqToCodes` (`<unknown>`)

|     % |  Time | Samples | Caller                              | Location        |
| ----: | ----: | ------: | ----------------------------------- | --------------- |
| 33.3% | 1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock` | zstd_compress.c |

##### `ZSTD_compressStream2` (`<unknown>`)

|      % |  Time | Samples | Caller                         | Location |
| -----: | ----: | ------: | ------------------------------ | -------- |
| 100.0% | 2.0ms |       1 | `FIO_compressFilename_srcFile` | fileio.c |

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
| 99.7% |   1.28s |     182 | `ZSTDMT_compressionJob`                              | zstdmt_compress.c |
| 99.7% |   1.28s |     182 | `POOL_thread`                                        | pool.c            |
| 99.5% |   1.28s |     180 | `ZSTD_compress_frameChunk`                           | zstd_compress.c   |
| 98.7% |   1.27s |     169 | `ZSTD_buildSeqStore`                                 | zstd_compress.c   |
| 97.4% |   1.25s |     157 | `ZSTD_compressBlock_opt2`                            | zstd_opt.c        |
| 73.7% | 951.0ms |      83 | `ZSTD_btGetAllMatches_noDict_3`                      | zstd_opt.c        |
|  0.5% |   7.0ms |       5 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | zstd_opt.c        |
|  0.5% |   6.0ms |       6 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | zstd_compress.c   |
|  0.5% |   6.0ms |       6 | `ZSTD_deriveBlockSplitsHelper`                       | zstd_compress.c   |
|  0.4% |   5.0ms |       4 | `ZSTD_updateStats`                                   | zstd_opt.c        |
|  0.3% |   4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock`                  | zstd_compress.c   |
|  0.2% |   3.0ms |       2 | `ZSTD_compressStream2`                               | `<unknown>`       |
|  0.2% |   3.0ms |       2 | `FIO_compressFilename_srcFile`                       | fileio.c          |
|  0.2% |   3.0ms |       2 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | zstd_opt.c        |
|  0.2% |   3.0ms |       3 | `ZSTD_seqToCodes`                                    | `<unknown>`       |
|  0.2% |   2.0ms |       2 | `HIST_count_parallel_wksp`                           | hist.c            |
|  0.2% |   2.0ms |       2 | `ZSTD_buildSequencesStatistics`                      | zstd_compress.c   |
|  0.2% |   2.0ms |       2 | `ZSTD_insertBt1.constprop.3`                         | zstd_opt.c        |
|  0.1% |   1.0ms |       1 | `ZSTD_encodeSequences`                               | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `ZSTDMT_initCStream_internal`                        | `<unknown>`       |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `ZSTDMT_compressionJob` (zstdmt_compress.c)

|    % |  Time | Samples | Callee             | Location          |
| ---: | ----: | ------: | ------------------ | ----------------- |
| 0.1% | 1.0ms |       1 | `ZSTDMT_getBuffer` | zstdmt_compress.c |

##### `POOL_thread` (pool.c)

|      % |  Time | Samples | Callee                  | Location          |
| -----: | ----: | ------: | ----------------------- | ----------------- |
| 100.0% | 1.28s |     182 | `ZSTDMT_compressionJob` | zstdmt_compress.c |

##### `ZSTD_compress_frameChunk` (zstd_compress.c)

|     % |  Time | Samples | Callee                              | Location        |
| ----: | ----: | ------: | ----------------------------------- | --------------- |
| 99.1% | 1.27s |     169 | `ZSTD_buildSeqStore`                | zstd_compress.c |
|  0.5% | 6.0ms |       6 | `ZSTD_deriveBlockSplitsHelper`      | zstd_compress.c |
|  0.3% | 4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock` | zstd_compress.c |
|  0.1% | 1.0ms |       1 | `ZSTD_deriveSeqStoreChunk`          | zstd_compress.c |

##### `ZSTD_buildSeqStore` (zstd_compress.c)

|     % |  Time | Samples | Callee                                   | Location   |
| ----: | ----: | ------: | ---------------------------------------- | ---------- |
| 97.4% | 1.24s |     143 | `ZSTD_compressBlock_opt2`                | zstd_opt.c |
|  0.5% | 6.0ms |       4 | `ZSTD_litLengthPrice.constprop.1.isra.0` | zstd_opt.c |
|  0.4% | 5.0ms |       4 | `ZSTD_updateStats`                       | zstd_opt.c |
|  0.2% | 3.0ms |       2 | `ZSTD_litLengthPrice.constprop.0.isra.0` | zstd_opt.c |
|  0.1% | 1.0ms |       1 | `ZSTD_setBasePrices`                     | zstd_opt.c |

##### `ZSTD_compressBlock_opt2` (zstd_opt.c)

|     % |    Time | Samples | Callee                          | Location   |
| ----: | ------: | ------: | ------------------------------- | ---------- |
| 75.7% | 951.0ms |      83 | `ZSTD_btGetAllMatches_noDict_3` | zstd_opt.c |

##### `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c)

|    % |  Time | Samples | Callee                       | Location   |
| ---: | ----: | ------: | ---------------------------- | ---------- |
| 0.2% | 2.0ms |       2 | `ZSTD_insertBt1.constprop.3` | zstd_opt.c |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c)

|     % |  Time | Samples | Callee                     | Location    |
| ----: | ----: | ------: | -------------------------- | ----------- |
| 16.7% | 1.0ms |       1 | `HIST_countFast_wksp`      | `<unknown>` |
| 16.7% | 1.0ms |       1 | `HIST_count_parallel_wksp` | hist.c      |

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
| 25.0% | 1.0ms |       1 | `ZSTD_buildSequencesStatistics` | zstd_compress.c |

##### `ZSTD_compressStream2` (`<unknown>`)

|     % |  Time | Samples | Callee                           | Location        |
| ----: | ----: | ------: | -------------------------------- | --------------- |
| 33.3% | 1.0ms |       1 | `ZSTD_CCtx_init_compressStream2` | zstd_compress.c |

##### `FIO_compressFilename_srcFile` (fileio.c)

|      % |  Time | Samples | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 3.0ms |       2 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTD_buildSequencesStatistics` (zstd_compress.c)

|     % |  Time | Samples | Callee                     | Location |
| ----: | ----: | ------: | -------------------------- | -------- |
| 50.0% | 1.0ms |       1 | `HIST_count_parallel_wksp` | hist.c   |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                           |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 60.5% | 780.0ms |      45 | `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                |
| 20.3% | 262.0ms |      50 | `ZSTD_compressBlock_opt2` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                  |
| 12.0% | 155.0ms |      25 | `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                |
|  3.2% |  41.0ms |      21 | `ZSTD_compressBlock_opt2` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                  |
|  1.1% |  14.0ms |      11 | `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                |
|  0.5% |   6.0ms |       4 | `ZSTD_litLengthPrice.constprop.1.isra.0` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                   |
|  0.3% |   4.0ms |       3 | `ZSTD_updateStats` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                         |
|  0.2% |   3.0ms |       3 | `ZSTD_compressBlock_opt2` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                  |
|  0.2% |   3.0ms |       2 | `ZSTD_litLengthPrice.constprop.0.isra.0` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                   |
|  0.2% |   2.0ms |       1 | `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (fileio.c)                                                                                                                                                                                   |
|  0.2% |   2.0ms |       2 | `ZSTD_insertBt1.constprop.3` (zstd_opt.c) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c) |
|  0.1% |   1.0ms |       1 | `ZSTD_encodeSequences` ← `ZSTD_compressSeqStore_singleBlock` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                   |
|  0.1% |   1.0ms |       1 | `ZSTDMT_initCStream_internal` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (fileio.c)                                                                                              |
|  0.1% |   1.0ms |       1 | `ZSTD_compressBegin_internal` (zstd_compress.c) ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                                                               |
|  0.1% |   1.0ms |       1 | `ZSTD_deriveSeqStoreChunk` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                                     |
|  0.1% |   1.0ms |       1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                          |
|  0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_compressSeqStore_singleBlock` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                        |
|  0.1% |   1.0ms |       1 | `ZSTDMT_getBuffer` (zstdmt_compress.c) ← `ZSTDMT_compressionJob` ← `POOL_thread` (pool.c)                                                                                                                                                            |
|  0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                      |
|  0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                      |
