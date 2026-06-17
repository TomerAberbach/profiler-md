# CPU profile

Took 1.24s over 173 samples (7.2ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| ours     | 98.9% |  1.23s |     159 |
| stdlib   |  1.1% | 14.0ms |      14 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                 | Location          |
| ----: | ------: | ------: | ---------------------------------------- | ----------------- |
| 74.4% | 927.0ms |      77 | `ZSTD_btGetAllMatches_noDict_3`          | zstd_opt.c        |
| 22.2% | 276.0ms |      60 | `ZSTD_compressBlock_opt2`                | zstd_opt.c        |
|  0.8% |  10.0ms |       5 | `ZSTD_litLengthPrice.constprop.1.isra.0` | zstd_opt.c        |
|  0.6% |   7.0ms |       7 | `ZSTD_seqToCodes`                        | `<unknown>`       |
|  0.5% |   6.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | zstd_opt.c        |
|  0.4% |   5.0ms |       5 | `ZSTD_insertBt1.constprop.3`             | zstd_opt.c        |
|  0.2% |   3.0ms |       3 | `ZSTD_updateStats`                       | zstd_opt.c        |
|  0.2% |   2.0ms |       2 | `ZSTD_encodeSequences`                   | `<unknown>`       |
|  0.2% |   2.0ms |       2 | `ZSTD_compressBegin_internal`            | zstd_compress.c   |
|  0.2% |   2.0ms |       2 | `ZSTD_compressStream2`                   | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `ZSTDMT_compressionJob`                  | zstdmt_compress.c |
|  0.1% |   1.0ms |       1 | `HIST_count_parallel_wksp`               | hist.c            |
|  0.1% |   1.0ms |       1 | `FSE_compress_usingCTable_generic`       | fse_compress.c    |
|  0.1% |   1.0ms |       1 | `FSE_normalizeCount`                     | `<unknown>`       |

#### Lines

Lines ranked by contribution to each function's self time.

##### `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c)

|      % |    Time | Samples | Location     |
| -----: | ------: | ------: | ------------ |
| 100.0% | 927.0ms |      77 | zstd_opt.c:0 |

##### `ZSTD_compressBlock_opt2` (zstd_opt.c)

|      % |    Time | Samples | Location     |
| -----: | ------: | ------: | ------------ |
| 100.0% | 276.0ms |      60 | zstd_opt.c:0 |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (zstd_opt.c)

|      % |   Time | Samples | Location     |
| -----: | -----: | ------: | ------------ |
| 100.0% | 10.0ms |       5 | zstd_opt.c:0 |

##### `ZSTD_seqToCodes` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 7.0ms |       7 | 0        |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (zstd_opt.c)

|      % |  Time | Samples | Location     |
| -----: | ----: | ------: | ------------ |
| 100.0% | 6.0ms |       4 | zstd_opt.c:0 |

##### `ZSTD_insertBt1.constprop.3` (zstd_opt.c)

|      % |  Time | Samples | Location     |
| -----: | ----: | ------: | ------------ |
| 100.0% | 5.0ms |       5 | zstd_opt.c:0 |

##### `ZSTD_updateStats` (zstd_opt.c)

|      % |  Time | Samples | Location     |
| -----: | ----: | ------: | ------------ |
| 100.0% | 3.0ms |       3 | zstd_opt.c:0 |

##### `ZSTD_encodeSequences` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.0ms |       2 | 0        |

##### `ZSTD_compressBegin_internal` (zstd_compress.c)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 2.0ms |       2 | zstd_compress.c:0 |

##### `ZSTD_compressStream2` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.0ms |       2 | 0        |

##### `ZSTDMT_compressionJob` (zstdmt_compress.c)

|      % |  Time | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 1.0ms |       1 | zstdmt_compress.c:0 |

##### `HIST_count_parallel_wksp` (hist.c)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.0ms |       1 | hist.c:0 |

##### `FSE_compress_usingCTable_generic` (fse_compress.c)

|      % |  Time | Samples | Location         |
| -----: | ----: | ------: | ---------------- |
| 100.0% | 1.0ms |       1 | fse_compress.c:0 |

##### `FSE_normalizeCount` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.0ms |       1 | 0        |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c)

|      % |    Time | Samples | Caller                    | Location   |
| -----: | ------: | ------: | ------------------------- | ---------- |
| 100.0% | 927.0ms |      77 | `ZSTD_compressBlock_opt2` | zstd_opt.c |

##### `ZSTD_compressBlock_opt2` (zstd_opt.c)

|     % |    Time | Samples | Caller               | Location        |
| ----: | ------: | ------: | -------------------- | --------------- |
| 98.9% | 273.0ms |      57 | `ZSTD_buildSeqStore` | zstd_compress.c |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (zstd_opt.c)

|     % |  Time | Samples | Caller               | Location        |
| ----: | ----: | ------: | -------------------- | --------------- |
| 90.0% | 9.0ms |       4 | `ZSTD_buildSeqStore` | zstd_compress.c |

##### `ZSTD_seqToCodes` (`<unknown>`)

|     % |  Time | Samples | Caller                              | Location        |
| ----: | ----: | ------: | ----------------------------------- | --------------- |
| 14.3% | 1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock` | zstd_compress.c |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (zstd_opt.c)

|      % |  Time | Samples | Caller               | Location        |
| -----: | ----: | ------: | -------------------- | --------------- |
| 100.0% | 6.0ms |       4 | `ZSTD_buildSeqStore` | zstd_compress.c |

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
| 99.8% |   1.24s |     170 | `ZSTDMT_compressionJob`                              | zstdmt_compress.c |
| 99.8% |   1.24s |     170 | `POOL_thread`                                        | pool.c            |
| 99.5% |   1.24s |     167 | `ZSTD_compress_frameChunk`                           | zstd_compress.c   |
| 98.5% |   1.22s |     154 | `ZSTD_buildSeqStore`                                 | zstd_compress.c   |
| 97.0% |   1.20s |     142 | `ZSTD_compressBlock_opt2`                            | zstd_opt.c        |
| 74.8% | 932.0ms |      82 | `ZSTD_btGetAllMatches_noDict_3`                      | zstd_opt.c        |
|  0.8% |  10.0ms |       5 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | zstd_opt.c        |
|  0.7% |   9.0ms |       9 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | zstd_compress.c   |
|  0.7% |   9.0ms |       9 | `ZSTD_deriveBlockSplitsHelper`                       | zstd_compress.c   |
|  0.6% |   7.0ms |       7 | `ZSTD_seqToCodes`                                    | `<unknown>`       |
|  0.5% |   6.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | zstd_opt.c        |
|  0.4% |   5.0ms |       5 | `ZSTD_insertBt1.constprop.3`                         | zstd_opt.c        |
|  0.3% |   4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock`                  | zstd_compress.c   |
|  0.2% |   3.0ms |       3 | `ZSTD_updateStats`                                   | zstd_opt.c        |
|  0.2% |   3.0ms |       3 | `ZSTD_compressStream2`                               | `<unknown>`       |
|  0.2% |   3.0ms |       3 | `FIO_compressFilename_srcFile`                       | fileio.c          |
|  0.2% |   2.0ms |       2 | `ZSTD_encodeSequences`                               | `<unknown>`       |
|  0.2% |   2.0ms |       2 | `ZSTD_buildSequencesStatistics`                      | zstd_compress.c   |
|  0.2% |   2.0ms |       2 | `ZSTD_compressBegin_internal`                        | zstd_compress.c   |
|  0.1% |   1.0ms |       1 | `HIST_count_parallel_wksp`                           | hist.c            |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `POOL_thread` (pool.c)

|      % |  Time | Samples | Callee                  | Location          |
| -----: | ----: | ------: | ----------------------- | ----------------- |
| 100.0% | 1.24s |     170 | `ZSTDMT_compressionJob` | zstdmt_compress.c |

##### `ZSTD_compress_frameChunk` (zstd_compress.c)

|     % |  Time | Samples | Callee                              | Location        |
| ----: | ----: | ------: | ----------------------------------- | --------------- |
| 99.0% | 1.22s |     154 | `ZSTD_buildSeqStore`                | zstd_compress.c |
|  0.7% | 9.0ms |       9 | `ZSTD_deriveBlockSplitsHelper`      | zstd_compress.c |
|  0.3% | 4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock` | zstd_compress.c |

##### `ZSTD_buildSeqStore` (zstd_compress.c)

|     % |  Time | Samples | Callee                                   | Location   |
| ----: | ----: | ------: | ---------------------------------------- | ---------- |
| 97.2% | 1.19s |     130 | `ZSTD_compressBlock_opt2`                | zstd_opt.c |
|  0.7% | 9.0ms |       4 | `ZSTD_litLengthPrice.constprop.1.isra.0` | zstd_opt.c |
|  0.5% | 6.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | zstd_opt.c |
|  0.2% | 3.0ms |       3 | `ZSTD_updateStats`                       | zstd_opt.c |

##### `ZSTD_compressBlock_opt2` (zstd_opt.c)

|     % |    Time | Samples | Callee                          | Location   |
| ----: | ------: | ------: | ------------------------------- | ---------- |
| 77.2% | 932.0ms |      82 | `ZSTD_btGetAllMatches_noDict_3` | zstd_opt.c |

##### `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c)

|    % |  Time | Samples | Callee                       | Location   |
| ---: | ----: | ------: | ---------------------------- | ---------- |
| 0.5% | 5.0ms |       5 | `ZSTD_insertBt1.constprop.3` | zstd_opt.c |

##### `ZSTD_deriveBlockSplitsHelper` (zstd_compress.c)

|      % |  Time | Samples | Callee                                               | Location        |
| -----: | ----: | ------: | ---------------------------------------------------- | --------------- |
| 100.0% | 9.0ms |       9 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | zstd_compress.c |

##### `ZSTD_compressSeqStore_singleBlock` (zstd_compress.c)

|     % |  Time | Samples | Callee                 | Location    |
| ----: | ----: | ------: | ---------------------- | ----------- |
| 50.0% | 2.0ms |       2 | `ZSTD_encodeSequences` | `<unknown>` |
| 25.0% | 1.0ms |       1 | `ZSTD_seqToCodes`      | `<unknown>` |

##### `FIO_compressFilename_srcFile` (fileio.c)

|      % |  Time | Samples | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTD_buildSequencesStatistics` (zstd_compress.c)

|     % |  Time | Samples | Callee                     | Location |
| ----: | ----: | ------: | -------------------------- | -------- |
| 50.0% | 1.0ms |       1 | `HIST_count_parallel_wksp` | hist.c   |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                           |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 61.8% | 770.0ms |      51 | `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                |
| 18.9% | 235.0ms |      45 | `ZSTD_compressBlock_opt2` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                  |
| 11.6% | 145.0ms |      17 | `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                |
|  3.0% |  38.0ms |      12 | `ZSTD_compressBlock_opt2` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                  |
|  1.0% |  12.0ms |       9 | `ZSTD_btGetAllMatches_noDict_3` (zstd_opt.c) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                |
|  0.7% |   9.0ms |       4 | `ZSTD_litLengthPrice.constprop.1.isra.0` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                   |
|  0.4% |   5.0ms |       5 | `ZSTD_seqToCodes` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                      |
|  0.4% |   5.0ms |       3 | `ZSTD_litLengthPrice.constprop.0.isra.0` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                   |
|  0.2% |   3.0ms |       3 | `ZSTD_insertBt1.constprop.3` (zstd_opt.c) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c) |
|  0.2% |   3.0ms |       3 | `ZSTD_compressBlock_opt2` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                  |
|  0.2% |   2.0ms |       2 | `ZSTD_updateStats` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                         |
|  0.2% |   2.0ms |       2 | `ZSTD_encodeSequences` ← `ZSTD_compressSeqStore_singleBlock` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                   |
|  0.2% |   2.0ms |       2 | `ZSTD_compressBegin_internal` (zstd_compress.c) ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                                                               |
|  0.2% |   2.0ms |       2 | `ZSTD_insertBt1.constprop.3` (zstd_opt.c) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c) |
|  0.2% |   2.0ms |       2 | `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (fileio.c)                                                                                                                                                                                   |
|  0.1% |   1.0ms |       1 | `ZSTD_updateStats` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                         |
|  0.1% |   1.0ms |       1 | `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                                                                                                                 |
|  0.1% |   1.0ms |       1 | `ZSTD_litLengthPrice.constprop.0.isra.0` (zstd_opt.c) ← `ZSTD_buildSeqStore` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                   |
|  0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_compressSeqStore_singleBlock` (zstd_compress.c) ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                        |
|  0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (zstd_compress.c) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                      |
