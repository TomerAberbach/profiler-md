# CPU profile

Took 1.17s over 1,178 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| Ours     | 99.2% |  1.16s |   1,168 |
| Native   |  0.8% | 10.0ms |      10 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                             | Location                               |
| ----: | ------: | ------: | ---------------------------------------------------- | -------------------------------------- |
| 72.5% | 854.0ms |     854 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`                           |
| 24.4% | 287.0ms |     287 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`                           |
|  0.6% |   7.0ms |       7 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`                           |
|  0.5% |   6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`                           |
|  0.3% |   4.0ms |       4 | `ZSTD_updateStats`                                   | `zstd_opt.c`                           |
|  0.3% |   4.0ms |       4 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`                           |
|  0.3% |   3.0ms |       3 | `HIST_count_parallel_wksp`                           | `hist.c`                               |
|  0.2% |   2.0ms |       2 | `ZSTD_encodeSequences`                               | `<unknown>`                            |
|  0.1% |   1.0ms |       1 | `0x9e640`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   1.0ms |       1 | `0x9e658`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   1.0ms |       1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`                      |
|  0.1% |   1.0ms |       1 | `0x9d200`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   1.0ms |       1 | `0xe29bc`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   1.0ms |       1 | `ZSTD_deriveSeqStoreChunk`                           | `zstd_compress.c`                      |
|  0.1% |   1.0ms |       1 | `HUF_buildCTable_wksp`                               | `<unknown>`                            |
|  0.1% |   1.0ms |       1 | `ZSTD_recordFingerprint_1`                           | `zstd_preSplit.c`                      |
|  0.1% |   1.0ms |       1 | `ZSTD_splitBlock`                                    | `<unknown>`                            |
|  0.1% |   1.0ms |       1 | `0xddbcc`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   1.0ms |       1 | `ZSTD_seqToCodes`                                    | `<unknown>`                            |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                             | Location          |
| ----: | ------: | ------: | ---------------------------------------------------- | ----------------- |
| 72.5% | 854.0ms |     854 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`      |
| 24.4% | 287.0ms |     287 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`      |
|  0.6% |   7.0ms |       7 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`      |
|  0.5% |   6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`      |
|  0.3% |   4.0ms |       4 | `ZSTD_updateStats`                                   | `zstd_opt.c`      |
|  0.3% |   4.0ms |       4 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`      |
|  0.3% |   3.0ms |       3 | `HIST_count_parallel_wksp`                           | `hist.c`          |
|  0.1% |   1.0ms |       1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
|  0.1% |   1.0ms |       1 | `ZSTD_deriveSeqStoreChunk`                           | `zstd_compress.c` |
|  0.1% |   1.0ms |       1 | `ZSTD_recordFingerprint_1`                           | `zstd_preSplit.c` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |    Time | Samples | Caller                    | Location     |
| -----: | ------: | ------: | ------------------------- | ------------ |
| 100.0% | 854.0ms |     854 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 96.9% | 278.0ms |     278 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  3.1% |   9.0ms |       9 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 7.0ms |       7 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 4.0ms |       4 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                          | Location     |
| -----: | ----: | ------: | ------------------------------- | ------------ |
| 100.0% | 4.0ms |       4 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_encodeSequences` (`<unknown>`)

|      % |  Time | Samples | Caller                              | Location          |
| -----: | ----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `0x9e640` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                        | Location          |
| -----: | ----: | ------: | ----------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `0x9e658` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                        | Location          |
| -----: | ----: | ------: | ----------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                         | Location          |
| -----: | ----: | ------: | ------------------------------ | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `0x9d200` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressStream2` | `<unknown>` |

##### `0xe29bc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x6d3e3` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `HUF_buildCTable_wksp` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `HUF_optimalTableLog` | `<unknown>` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

|      % |  Time | Samples | Caller            | Location    |
| -----: | ----: | ------: | ----------------- | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_splitBlock` | `<unknown>` |

##### `ZSTD_splitBlock` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `0xddbcc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x79b13` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTD_seqToCodes` (`<unknown>`)

|      % |  Time | Samples | Caller                              | Location          |
| -----: | ----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                             | Location                               |
| ----: | ------: | ------: | ---------------------------------------------------- | -------------------------------------- |
| 99.8% |   1.17s |   1,176 | `POOL_thread`                                        | `pool.c`                               |
| 99.8% |   1.17s |   1,176 | `0x8202f`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.8% |   1.17s |   1,176 | `0xebf5b`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.7% |   1.17s |   1,175 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c`                    |
| 99.6% |   1.17s |   1,173 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`                      |
| 98.6% |   1.16s |   1,162 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`                      |
| 97.2% |   1.14s |   1,145 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`                           |
| 80.5% | 948.0ms |     948 | `ZSTD_compressContinue_public`                       | `<unknown>`                            |
| 72.8% | 858.0ms |     858 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`                           |
| 19.1% | 225.0ms |     225 | `ZSTD_compressEnd_public`                            | `<unknown>`                            |
|  1.4% |  16.0ms |      16 | `ZSTD_compressBlock_btultra2`                        | `<unknown>`                            |
|  0.6% |   7.0ms |       7 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`                           |
|  0.5% |   6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`                           |
|  0.3% |   4.0ms |       4 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`                      |
|  0.3% |   4.0ms |       4 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`                      |
|  0.3% |   4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`                      |
|  0.3% |   4.0ms |       4 | `ZSTD_updateStats`                                   | `zstd_opt.c`                           |
|  0.3% |   4.0ms |       4 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`                           |
|  0.3% |   3.0ms |       3 | `HIST_count_parallel_wksp`                           | `hist.c`                               |
|  0.2% |   2.0ms |       2 | `ZSTD_compressBegin_internal`                        | `zstd_compress.c`                      |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                             | Location            |
| ----: | ------: | ------: | ---------------------------------------------------- | ------------------- |
| 99.8% |   1.17s |   1,176 | `POOL_thread`                                        | `pool.c`            |
| 99.7% |   1.17s |   1,175 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
| 99.6% |   1.17s |   1,173 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`   |
| 98.6% |   1.16s |   1,162 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
| 97.2% |   1.14s |   1,145 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
| 72.8% | 858.0ms |     858 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  0.6% |   7.0ms |       7 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`        |
|  0.5% |   6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`        |
|  0.3% |   4.0ms |       4 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|  0.3% |   4.0ms |       4 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|  0.3% |   4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|  0.3% |   4.0ms |       4 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
|  0.3% |   4.0ms |       4 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`        |
|  0.3% |   3.0ms |       3 | `HIST_count_parallel_wksp`                           | `hist.c`            |
|  0.2% |   2.0ms |       2 | `ZSTD_compressBegin_internal`                        | `zstd_compress.c`   |
|  0.2% |   2.0ms |       2 | `FIO_compressFilename_srcFile`                       | `fileio.c`          |
|  0.1% |   1.0ms |       1 | `ZSTD_deriveSeqStoreChunk`                           | `zstd_compress.c`   |
|  0.1% |   1.0ms |       1 | `HUF_compress_internal`                              | `huf_compress.c`    |
|  0.1% |   1.0ms |       1 | `ZSTD_recordFingerprint_1`                           | `zstd_preSplit.c`   |
|  0.1% |   1.0ms |       1 | `AIO_ReadPool_executeReadJob`                        | `fileio_asyncio.c`  |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `POOL_thread` (`pool.c`)

|     % |  Time | Samples | Callee                        | Location            |
| ----: | ----: | ------: | ----------------------------- | ------------------- |
| 99.9% | 1.17s |   1,175 | `ZSTDMT_compressionJob`       | `zstdmt_compress.c` |
|  0.1% | 1.0ms |       1 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |

##### `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee        | Location |
| -----: | ----: | ------: | ------------- | -------- |
| 100.0% | 1.17s |   1,176 | `POOL_thread` | `pool.c` |

##### `0xebf5b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.17s |   1,176 | `0x8202f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |    Time | Samples | Callee                                 | Location    |
| ----: | ------: | ------: | -------------------------------------- | ----------- |
| 80.7% | 948.0ms |     948 | `ZSTD_compressContinue_public`         | `<unknown>` |
| 19.1% | 225.0ms |     225 | `ZSTD_compressEnd_public`              | `<unknown>` |
|  0.2% |   2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                              | Location          |
| ----: | ----: | ------: | ----------------------------------- | ----------------- |
| 99.1% | 1.16s |   1,162 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.3% | 4.0ms |       4 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  0.3% | 4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
|  0.2% | 2.0ms |       2 | `ZSTD_splitBlock`                   | `<unknown>`       |
|  0.1% | 1.0ms |       1 | `ZSTD_deriveSeqStoreChunk`          | `zstd_compress.c` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                                   | Location     |
| ----: | -----: | ------: | ---------------------------------------- | ------------ |
| 97.2% |  1.12s |   1,129 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
|  1.4% | 16.0ms |      16 | `ZSTD_compressBlock_btultra2`            | `<unknown>`  |
|  0.6% |  7.0ms |       7 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c` |
|  0.5% |  6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c` |
|  0.3% |  4.0ms |       4 | `ZSTD_updateStats`                       | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |    Time | Samples | Callee                          | Location     |
| ----: | ------: | ------: | ------------------------------- | ------------ |
| 74.9% | 858.0ms |     858 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_compressContinue_public` (`<unknown>`)

|      % |    Time | Samples | Callee                     | Location          |
| -----: | ------: | ------: | -------------------------- | ----------------- |
| 100.0% | 948.0ms |     948 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|    % |  Time | Samples | Callee                       | Location     |
| ---: | ----: | ------: | ---------------------------- | ------------ |
| 0.5% | 4.0ms |       4 | `ZSTD_insertBt1.constprop.3` | `zstd_opt.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

|      % |    Time | Samples | Callee                     | Location          |
| -----: | ------: | ------: | -------------------------- | ----------------- |
| 100.0% | 225.0ms |     225 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

|      % |   Time | Samples | Callee                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 16.0ms |      16 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                     | Location |
| ----: | ----: | ------: | -------------------------- | -------- |
| 75.0% | 3.0ms |       3 | `HIST_count_parallel_wksp` | `hist.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |  Time | Samples | Callee                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 4.0ms |       4 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                  | Location    |
| ----: | ----: | ------: | ----------------------- | ----------- |
| 50.0% | 2.0ms |       2 | `ZSTD_encodeSequences`  | `<unknown>` |
| 25.0% | 1.0ms |       1 | `ZSTD_compressLiterals` | `<unknown>` |
| 25.0% | 1.0ms |       1 | `ZSTD_seqToCodes`       | `<unknown>` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|     % |  Time | Samples | Callee    | Location                               |
| ----: | ----: | ------: | --------- | -------------------------------------- |
| 50.0% | 1.0ms |       1 | `0x9e640` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 50.0% | 1.0ms |       1 | `0x9e658` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|     % |  Time | Samples | Callee                 | Location                               |
| ----: | ----: | ------: | ---------------------- | -------------------------------------- |
| 50.0% | 1.0ms |       1 | `ZSTD_compressStream2` | `<unknown>`                            |
| 50.0% | 1.0ms |       1 | `0x6d3e3`              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `HUF_compress_internal` (`huf_compress.c`)

|      % |  Time | Samples | Callee                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `HUF_optimalTableLog` | `<unknown>` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x6e1b7` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 56.5% | 666.0ms |     666 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                                                     |
| 20.5% | 241.0ms |     241 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                                                                                       |
| 15.4% | 181.0ms |     181 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                                                          |
|  3.1% |  37.0ms |      37 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                                                                                            |
|  0.8% |   9.0ms |       9 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                                                       |
|  0.6% |   7.0ms |       7 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                     |
|  0.6% |   7.0ms |       7 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                                                                        |
|  0.3% |   4.0ms |       4 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                                                                                              |
|  0.3% |   4.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                                                                        |
|  0.3% |   3.0ms |       3 | `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                           |
|  0.2% |   2.0ms |       2 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                         |
|  0.2% |   2.0ms |       2 | `ZSTD_encodeSequences` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                                                                                          |
|  0.2% |   2.0ms |       2 | `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                                                                             |
|  0.1% |   1.0ms |       1 | `0x9e640` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `ZSTD_compressBegin_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                                                                                         |
|  0.1% |   1.0ms |       1 | `0x9e658` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `ZSTD_compressBegin_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                                                                                         |
|  0.1% |   1.0ms |       1 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                              |
|  0.1% |   1.0ms |       1 | `0x9d200` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`                                                                                                                                                                             |
|  0.1% |   1.0ms |       1 | `0xe29bc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x6d3e3` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`                                                                                                                                                                                          |
|  0.1% |   1.0ms |       1 | `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`                                                                                                                                                            |
|  0.1% |   1.0ms |       1 | `HUF_buildCTable_wksp` ← `HUF_optimalTableLog` ← `HUF_compress_internal` (`huf_compress.c`) ← `HUF_compress4X_repeat` ← `ZSTD_compressLiterals` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b` |
