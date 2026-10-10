# CPU profile

Took 2.95s over 2,951 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| Ours     | 99.3% |  2.92s |   2,929 |
| Native   |  0.6% | 18.0ms |      18 |
| Unknown  |  0.1% |  4.0ms |       4 |

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                                 | Location          |
| ----: | ------: | ------: | ---------------------------------------- | ----------------- |
| 83.5% |   2.46s |   2,465 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`      |
| 14.2% | 420.0ms |     420 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`      |
|  0.8% |  25.0ms |      25 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`      |
|  0.2% |   7.0ms |       7 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`      |
|  0.2% |   7.0ms |       7 | `ZSTD_encodeSequences`                   | `<unknown>`       |
|  0.2% |   5.0ms |       5 | `ZSTD_updateStats`                       | `zstd_opt.c`      |
|  0.1% |   4.0ms |       4 | `(anonymous)`                            | `<unknown>`       |
|  0.1% |   3.0ms |       3 | `HIST_count_parallel_wksp`               | `hist.c`          |
|  0.1% |   3.0ms |       3 | `munmap`                                 | `<unknown>`       |
|  0.1% |   2.0ms |       2 | `ZSTD_recordFingerprint_1`               | `zstd_preSplit.c` |
|  0.1% |   2.0ms |       2 | `ZSTD_seqToCodes`                        | `<unknown>`       |
| <0.1% |   1.0ms |       1 | `ZSTD_setBasePrices`                     | `zstd_opt.c`      |
| <0.1% |   1.0ms |       1 | `__read`                                 | `<unknown>`       |
| <0.1% |   1.0ms |       1 | `FSE_buildCTable_wksp`                   | `<unknown>`       |
| <0.1% |   1.0ms |       1 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`      |
| <0.1% |   1.0ms |       1 | `HIST_count_simple`                      | `<unknown>`       |
| <0.1% |   1.0ms |       1 | `HUF_writeCTable_wksp`                   | `<unknown>`       |
| <0.1% |   1.0ms |       1 | `HUF_optimalTableLog`                    | `<unknown>`       |
| <0.1% |   1.0ms |       1 | `pthread_cond_broadcast`                 | `<unknown>`       |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                 | Location          |
| ----: | ------: | ------: | ---------------------------------------- | ----------------- |
| 83.5% |   2.46s |   2,465 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`      |
| 14.2% | 420.0ms |     420 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`      |
|  0.8% |  25.0ms |      25 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`      |
|  0.2% |   7.0ms |       7 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`      |
|  0.2% |   5.0ms |       5 | `ZSTD_updateStats`                       | `zstd_opt.c`      |
|  0.1% |   3.0ms |       3 | `HIST_count_parallel_wksp`               | `hist.c`          |
|  0.1% |   2.0ms |       2 | `ZSTD_recordFingerprint_1`               | `zstd_preSplit.c` |
| <0.1% |   1.0ms |       1 | `ZSTD_setBasePrices`                     | `zstd_opt.c`      |
| <0.1% |   1.0ms |       1 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`      |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                    | Location     |
| -----: | ----: | ------: | ------------------------- | ------------ |
| 100.0% | 2.46s |   2,465 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 98.8% | 415.0ms |     415 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  1.2% |   5.0ms |       5 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 92.0% | 23.0ms |      23 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  8.0% |  2.0ms |       2 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                          | Location     |
| -----: | ----: | ------: | ------------------------------- | ------------ |
| 100.0% | 7.0ms |       7 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_encodeSequences` (`<unknown>`)

|      % |  Time | Samples | Caller                              | Location          |
| -----: | ----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 7.0ms |       7 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 5.0ms |       5 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 50.0% | 2.0ms |       2 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |
| 50.0% | 2.0ms |       2 | `ZSTD_compressStream2`        | `<unknown>`       |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Caller                                               | Location          |
| ----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 66.7% | 2.0ms |       2 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c` |
| 33.3% | 1.0ms |       1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `munmap` (`<unknown>`)

|     % |  Time | Samples | Caller            | Location    |
| ----: | ----: | ------: | ----------------- | ----------- |
| 33.3% | 1.0ms |       1 | `(anonymous)`     | `<unknown>` |
| 33.3% | 1.0ms |       1 | `ZSTDMT_freeCCtx` | `<unknown>` |
| 33.3% | 1.0ms |       1 | `ZSTD_freeCCtx`   | `<unknown>` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

|      % |  Time | Samples | Caller            | Location    |
| -----: | ----: | ------: | ----------------- | ----------- |
| 100.0% | 2.0ms |       2 | `ZSTD_splitBlock` | `<unknown>` |

##### `ZSTD_seqToCodes` (`<unknown>`)

|      % |  Time | Samples | Caller                        | Location    |
| -----: | ----: | ------: | ----------------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |

##### `ZSTD_setBasePrices` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `__read` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `<unknown>` |

##### `FSE_buildCTable_wksp` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildCTable` | `<unknown>` |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `HIST_count_simple` (`<unknown>`)

|      % |  Time | Samples | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `HUF_writeCTable_wksp` | `<unknown>` |

##### `HUF_writeCTable_wksp` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `HUF_optimalTableLog` | `<unknown>` |

##### `HUF_optimalTableLog` (`<unknown>`)

|      % |  Time | Samples | Caller                        | Location    |
| -----: | ----: | ------: | ----------------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |

##### `pthread_cond_broadcast` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location |
| -----: | ----: | ------: | ------------------ | -------- |
| 100.0% | 1.0ms |       1 | `POOL_free.part.0` | `pool.c` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Samples | Function                                             | Location            |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------- |
| 100.0% |   2.95s |   2,951 | `(anonymous)`                                        | `<unknown>`         |
|  99.8% |   2.94s |   2,946 | `POOL_thread`                                        | `pool.c`            |
|  99.8% |   2.94s |   2,945 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
|  99.7% |   2.94s |   2,942 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`   |
|  99.1% |   2.92s |   2,924 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
|  98.0% |   2.89s |   2,892 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
|  83.8% |   2.47s |   2,472 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  83.8% |   2.47s |   2,472 | `ZSTD_compressContinue_public`                       | `<unknown>`         |
|  15.9% | 470.0ms |     470 | `ZSTD_compressEnd_public`                            | `<unknown>`         |
|   0.9% |  26.0ms |      26 | `ZSTD_compressBlock_btultra2`                        | `<unknown>`         |
|   0.8% |  25.0ms |      25 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`        |
|   0.3% |   9.0ms |       9 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|   0.2% |   7.0ms |       7 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`        |
|   0.2% |   7.0ms |       7 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|   0.2% |   7.0ms |       7 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|   0.2% |   7.0ms |       7 | `ZSTD_encodeSequences`                               | `<unknown>`         |
|   0.2% |   6.0ms |       6 | `ZSTD_buildBlockEntropyStats`                        | `<unknown>`         |
|   0.2% |   5.0ms |       5 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
|   0.2% |   5.0ms |       5 | `FIO_compressFilename`                               | `<unknown>`         |
|   0.2% |   5.0ms |       5 | `main`                                               | `<unknown>`         |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |   Time | Samples | Function                                             | Location            |
| ----: | -----: | ------: | ---------------------------------------------------- | ------------------- |
| 99.8% |  2.94s |   2,946 | `POOL_thread`                                        | `pool.c`            |
| 99.8% |  2.94s |   2,945 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
| 99.7% |  2.94s |   2,942 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`   |
| 99.1% |  2.92s |   2,924 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
| 98.0% |  2.89s |   2,892 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
| 83.8% |  2.47s |   2,472 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  0.8% | 25.0ms |      25 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`        |
|  0.3% |  9.0ms |       9 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|  0.2% |  7.0ms |       7 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`        |
|  0.2% |  7.0ms |       7 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|  0.2% |  7.0ms |       7 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|  0.2% |  5.0ms |       5 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
|  0.1% |  3.0ms |       3 | `HIST_count_parallel_wksp`                           | `hist.c`            |
|  0.1% |  3.0ms |       3 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`   |
|  0.1% |  2.0ms |       2 | `ZSTD_compressBegin_internal`                        | `zstd_compress.c`   |
|  0.1% |  2.0ms |       2 | `ZSTD_recordFingerprint_1`                           | `zstd_preSplit.c`   |
|  0.1% |  2.0ms |       2 | `FIO_compressFilename_srcFile`                       | `fileio.c`          |
| <0.1% |  1.0ms |       1 | `ZSTD_setBasePrices`                                 | `zstd_opt.c`        |
| <0.1% |  1.0ms |       1 | `ZSTDMT_getBuffer`                                   | `zstdmt_compress.c` |
| <0.1% |  1.0ms |       1 | `AIO_ReadPool_executeReadJob`                        | `fileio_asyncio.c`  |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 99.8% | 2.94s |   2,946 | `(anonymous)`                 | `<unknown>`       |
|  0.2% | 5.0ms |       5 | `__libc_start_main`           | `<unknown>`       |
|  0.1% | 2.0ms |       2 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |
|  0.1% | 2.0ms |       2 | `ZSTD_compressStream2`        | `<unknown>`       |
| <0.1% | 1.0ms |       1 | `__libc_malloc`               | `<unknown>`       |

##### `POOL_thread` (`pool.c`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 2.94s |   2,946 | `(anonymous)` | `<unknown>` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|      % |  Time | Samples | Caller        | Location |
| -----: | ----: | ------: | ------------- | -------- |
| 100.0% | 2.94s |   2,945 | `POOL_thread` | `pool.c` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|     % |    Time | Samples | Caller                         | Location    |
| ----: | ------: | ------: | ------------------------------ | ----------- |
| 84.0% |   2.47s |   2,472 | `ZSTD_compressContinue_public` | `<unknown>` |
| 16.0% | 470.0ms |     470 | `ZSTD_compressEnd_public`      | `<unknown>` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 2.92s |   2,924 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 99.2% |  2.86s |   2,868 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.8% | 24.0ms |      24 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                    | Location     |
| -----: | ----: | ------: | ------------------------- | ------------ |
| 100.0% | 2.47s |   2,472 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressContinue_public` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location            |
| -----: | ----: | ------: | ----------------------- | ------------------- |
| 100.0% | 2.47s |   2,472 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

|      % |    Time | Samples | Caller                  | Location            |
| -----: | ------: | ------: | ----------------------- | ------------------- |
| 100.0% | 470.0ms |     470 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 26.0ms |      26 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 92.0% | 23.0ms |      23 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  8.0% |  2.0ms |       2 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 9.0ms |       9 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                          | Location     |
| -----: | ----: | ------: | ------------------------------- | ------------ |
| 100.0% | 7.0ms |       7 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                         | Location          |
| -----: | ----: | ------: | ------------------------------ | ----------------- |
| 100.0% | 7.0ms |       7 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 7.0ms |       7 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_encodeSequences` (`<unknown>`)

|      % |  Time | Samples | Caller                              | Location          |
| -----: | ----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 7.0ms |       7 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 5.0ms |       5 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `FIO_compressFilename` (`<unknown>`)

|      % |  Time | Samples | Caller | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 5.0ms |       5 | `main` | `<unknown>` |

##### `main` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 5.0ms |       5 | `(anonymous)` | `<unknown>` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Caller                                               | Location          |
| ----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 66.7% | 2.0ms |       2 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c` |
| 33.3% | 1.0ms |       1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|     % |  Time | Samples | Caller                              | Location          |
| ----: | ----: | ------: | ----------------------------------- | ----------------- |
| 66.7% | 2.0ms |       2 | `ZSTD_buildBlockEntropyStats`       | `<unknown>`       |
| 33.3% | 1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                                 | Location    |
| -----: | ----: | ------: | -------------------------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

|      % |  Time | Samples | Caller            | Location    |
| -----: | ----: | ------: | ----------------- | ----------- |
| 100.0% | 2.0ms |       2 | `ZSTD_splitBlock` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Time | Samples | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `FIO_compressFilename` | `<unknown>` |

##### `ZSTD_setBasePrices` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTDMT_getBuffer` (`zstdmt_compress.c`)

|      % |  Time | Samples | Caller                  | Location            |
| -----: | ----: | ------: | ----------------------- | ------------------- |
| 100.0% | 1.0ms |       1 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|      % |  Time | Samples | Caller        | Location |
| -----: | ----: | ------: | ------------- | -------- |
| 100.0% | 1.0ms |       1 | `POOL_thread` | `pool.c` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location    |
| ----: | ----: | ------: | ------------- | ----------- |
| 99.8% | 2.94s |   2,946 | `POOL_thread` | `pool.c`    |
| 99.8% | 2.94s |   2,946 | `(anonymous)` | `<unknown>` |
|  0.2% | 5.0ms |       5 | `main`        | `<unknown>` |
| <0.1% | 1.0ms |       1 | `munmap`      | `<unknown>` |
| <0.1% | 1.0ms |       1 | `__read`      | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % |  Time | Samples | Callee                        | Location            |
| -----: | ----: | ------: | ----------------------------- | ------------------- |
| 100.0% | 2.94s |   2,945 | `ZSTDMT_compressionJob`       | `zstdmt_compress.c` |
|  <0.1% | 1.0ms |       1 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |    Time | Samples | Callee                                 | Location            |
| ----: | ------: | ------: | -------------------------------------- | ------------------- |
| 83.9% |   2.47s |   2,472 | `ZSTD_compressContinue_public`         | `<unknown>`         |
| 16.0% | 470.0ms |     470 | `ZSTD_compressEnd_public`              | `<unknown>`         |
|  0.1% |   2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `<unknown>`         |
| <0.1% |   1.0ms |       1 | `ZSTDMT_getBuffer`                     | `zstdmt_compress.c` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                              | Location          |
| ----: | ----: | ------: | ----------------------------------- | ----------------- |
| 99.4% | 2.92s |   2,924 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.3% | 9.0ms |       9 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
|  0.2% | 7.0ms |       7 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  0.1% | 2.0ms |       2 | `ZSTD_splitBlock`                   | `<unknown>`       |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                                   | Location     |
| ----: | -----: | ------: | ---------------------------------------- | ------------ |
| 98.1% |  2.86s |   2,868 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
|  0.9% | 26.0ms |      26 | `ZSTD_compressBlock_btultra2`            | `<unknown>`  |
|  0.8% | 23.0ms |      23 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c` |
|  0.2% |  5.0ms |       5 | `ZSTD_updateStats`                       | `zstd_opt.c` |
| <0.1% |  1.0ms |       1 | `ZSTD_setBasePrices`                     | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |  Time | Samples | Callee                          | Location     |
| ----: | ----: | ------: | ------------------------------- | ------------ |
| 85.5% | 2.47s |   2,472 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|    % |  Time | Samples | Callee                       | Location     |
| ---: | ----: | ------: | ---------------------------- | ------------ |
| 0.3% | 7.0ms |       7 | `ZSTD_insertBt1.constprop.3` | `zstd_opt.c` |

##### `ZSTD_compressContinue_public` (`<unknown>`)

|      % |  Time | Samples | Callee                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 2.47s |   2,472 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

|      % |    Time | Samples | Callee                     | Location          |
| -----: | ------: | ------: | -------------------------- | ----------------- |
| 100.0% | 470.0ms |     470 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

|     % |   Time | Samples | Callee                                   | Location     |
| ----: | -----: | ------: | ---------------------------------------- | ------------ |
| 92.3% | 24.0ms |      24 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
|  7.7% |  2.0ms |       2 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                          | Location          |
| ----: | ----: | ------: | ------------------------------- | ----------------- |
| 77.8% | 7.0ms |       7 | `ZSTD_encodeSequences`          | `<unknown>`       |
| 11.1% | 1.0ms |       1 | `ZSTD_compressLiterals`         | `<unknown>`       |
| 11.1% | 1.0ms |       1 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                        | Location    |
| ----: | ----: | ------: | ----------------------------- | ----------- |
| 85.7% | 6.0ms |       6 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |
| 14.3% | 1.0ms |       1 | `HIST_count_parallel_wksp`    | `hist.c`    |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |  Time | Samples | Callee                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 7.0ms |       7 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

|     % |  Time | Samples | Callee                          | Location          |
| ----: | ----: | ------: | ------------------------------- | ----------------- |
| 33.3% | 2.0ms |       2 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
| 33.3% | 2.0ms |       2 | `ZSTD_seqToCodes`               | `<unknown>`       |
| 33.3% | 2.0ms |       2 | `HUF_optimalTableLog`           | `<unknown>`       |

##### `FIO_compressFilename` (`<unknown>`)

|     % |  Time | Samples | Callee                         | Location    |
| ----: | ----: | ------: | ------------------------------ | ----------- |
| 60.0% | 3.0ms |       3 | `ZSTD_freeCStream`             | `<unknown>` |
| 40.0% | 2.0ms |       2 | `FIO_compressFilename_srcFile` | `fileio.c`  |

##### `main` (`<unknown>`)

|      % |  Time | Samples | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 5.0ms |       5 | `FIO_compressFilename` | `<unknown>` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                     | Location    |
| ----: | ----: | ------: | -------------------------- | ----------- |
| 66.7% | 2.0ms |       2 | `HIST_count_parallel_wksp` | `hist.c`    |
| 33.3% | 1.0ms |       1 | `ZSTD_buildCTable`         | `<unknown>` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 2.0ms |       2 | `(anonymous)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Time | Samples | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTDMT_getBuffer` (`zstdmt_compress.c`)

|      % |  Time | Samples | Callee          | Location    |
| -----: | ----: | ------: | --------------- | ----------- |
| 100.0% | 1.0ms |       1 | `__libc_malloc` | `<unknown>` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.0ms |       1 | `_IO_fread` | `<unknown>` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                             |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 69.2% |   2.04s |   2,043 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                         |
| 13.7% | 403.0ms |     403 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                              |
| 12.0% | 354.0ms |     354 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                           |
|  2.1% |  61.0ms |      61 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                |
|  0.7% |  20.0ms |      20 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                            |
|  0.6% |  19.0ms |      19 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`         |
|  0.2% |   6.0ms |       6 | `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`          |
|  0.2% |   6.0ms |       6 | `ZSTD_encodeSequences` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                              |
|  0.2% |   5.0ms |       5 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                  |
|  0.2% |   5.0ms |       5 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                           |
|  0.1% |   3.0ms |       3 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                 |
|  0.1% |   2.0ms |       2 | `(anonymous)` ← `ZSTD_compressBegin_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                  |
|  0.1% |   2.0ms |       2 | `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`) ← `ZSTD_splitBlock` ← `ZSTD_compress_frameChunk` (`zstd_compress.c`) ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                        |
|  0.1% |   2.0ms |       2 | `(anonymous)` ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                |
|  0.1% |   2.0ms |       2 | `ZSTD_seqToCodes` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)` |
|  0.1% |   2.0ms |       2 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                            |
| <0.1% |   1.0ms |       1 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`             |
| <0.1% |   1.0ms |       1 | `ZSTD_setBasePrices` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                |
| <0.1% |   1.0ms |       1 | `munmap` ← `(anonymous)` ← `(anonymous)` ← `__libc_malloc` ← `ZSTDMT_getBuffer` (`zstdmt_compress.c`) ← `ZSTDMT_compressionJob` ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                             |
| <0.1% |   1.0ms |       1 | `__read` ← `(anonymous)` ← `_IO_fread` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                 |
