# CPU profile

Took 1.69s over 1,691 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| Ours     | 99.0% |  1.67s |   1,674 |
| Native   |  1.0% | 17.0ms |      17 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                 | Location                               |
| ----: | ------: | ------: | ---------------------------------------- | -------------------------------------- |
| 80.1% |   1.35s |   1,355 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`                           |
| 16.7% | 283.0ms |     283 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`                           |
|  1.0% |  17.0ms |      17 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`                           |
|  0.4% |   6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`                           |
|  0.3% |   5.0ms |       5 | `HIST_count_parallel_wksp`               | `hist.c`                               |
|  0.2% |   4.0ms |       4 | `ZSTD_encodeSequences`                   | `<unknown>`                            |
|  0.2% |   3.0ms |       3 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`                           |
|  0.1% |   2.0ms |       2 | `ZSTD_XXH64_update`                      | `<unknown>`                            |
|  0.1% |   2.0ms |       2 | `ZSTD_seqToCodes`                        | `<unknown>`                            |
|  0.1% |   2.0ms |       2 | `HUF_buildCTable_wksp`                   | `<unknown>`                            |
|  0.1% |   2.0ms |       2 | `ZSTD_updateStats`                       | `zstd_opt.c`                           |
|  0.1% |   1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock`      | `zstd_compress.c`                      |
|  0.1% |   1.0ms |       1 | `0x9e658`                                | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   1.0ms |       1 | `0x9e654`                                | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   1.0ms |       1 | `ZSTD_deriveSeqStoreChunk`               | `zstd_compress.c`                      |
|  0.1% |   1.0ms |       1 | `0xe7e0c`                                | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   1.0ms |       1 | `HUF_writeCTable_wksp`                   | `<unknown>`                            |
|  0.1% |   1.0ms |       1 | `HIST_count_wksp`                        | `<unknown>`                            |
|  0.1% |   1.0ms |       1 | `0x7e838`                                | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   1.0ms |       1 | `FSE_compress_usingCTable_generic`       | `fse_compress.c`                       |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                 | Location          |
| ----: | ------: | ------: | ---------------------------------------- | ----------------- |
| 80.1% |   1.35s |   1,355 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`      |
| 16.7% | 283.0ms |     283 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`      |
|  1.0% |  17.0ms |      17 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`      |
|  0.4% |   6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`      |
|  0.3% |   5.0ms |       5 | `HIST_count_parallel_wksp`               | `hist.c`          |
|  0.2% |   3.0ms |       3 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`      |
|  0.1% |   2.0ms |       2 | `ZSTD_updateStats`                       | `zstd_opt.c`      |
|  0.1% |   1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock`      | `zstd_compress.c` |
|  0.1% |   1.0ms |       1 | `ZSTD_deriveSeqStoreChunk`               | `zstd_compress.c` |
|  0.1% |   1.0ms |       1 | `FSE_compress_usingCTable_generic`       | `fse_compress.c`  |

##### Native

|    % |  Time | Samples | Function               | Location                               |
| ---: | ----: | ------: | ---------------------- | -------------------------------------- |
| 0.2% | 4.0ms |       4 | `ZSTD_encodeSequences` | `<unknown>`                            |
| 0.1% | 2.0ms |       2 | `ZSTD_XXH64_update`    | `<unknown>`                            |
| 0.1% | 2.0ms |       2 | `ZSTD_seqToCodes`      | `<unknown>`                            |
| 0.1% | 2.0ms |       2 | `HUF_buildCTable_wksp` | `<unknown>`                            |
| 0.1% | 1.0ms |       1 | `0x9e658`              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 0.1% | 1.0ms |       1 | `0x9e654`              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 0.1% | 1.0ms |       1 | `0xe7e0c`              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 0.1% | 1.0ms |       1 | `HUF_writeCTable_wksp` | `<unknown>`                            |
| 0.1% | 1.0ms |       1 | `HIST_count_wksp`      | `<unknown>`                            |
| 0.1% | 1.0ms |       1 | `0x7e838`              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 0.1% | 1.0ms |       1 | `0x9d200`              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|     % |  Time | Samples | Caller                    | Location          |
| ----: | ----: | ------: | ------------------------- | ----------------- |
| 99.9% | 1.35s |   1,354 | `ZSTD_compressBlock_opt2` | `zstd_opt.c`      |
|  0.1% | 1.0ms |       1 | `ZSTD_buildSeqStore`      | `zstd_compress.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 97.2% | 275.0ms |     275 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  2.8% |   8.0ms |       8 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 17.0ms |      17 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Caller                                               | Location          |
| ----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 60.0% | 3.0ms |       3 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c` |
| 40.0% | 2.0ms |       2 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_encodeSequences` (`<unknown>`)

|      % |  Time | Samples | Caller                              | Location          |
| -----: | ----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                          | Location     |
| -----: | ----: | ------: | ------------------------------- | ------------ |
| 100.0% | 3.0ms |       3 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_XXH64_update` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_seqToCodes` (`<unknown>`)

|      % |  Time | Samples | Caller                        | Location    |
| -----: | ----: | ------: | ----------------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |

##### `HUF_buildCTable_wksp` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `HUF_optimalTableLog` | `<unknown>` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 50.0% | 1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |
| 50.0% | 1.0ms |       1 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `0x9e658` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                        | Location          |
| -----: | ----: | ------: | ----------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `0x9e654` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                        | Location          |
| -----: | ----: | ------: | ----------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                         | Location    |
| -----: | ----: | ------: | ------------------------------ | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressContinue_public` | `<unknown>` |

##### `0xe7e0c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller          | Location    |
| -----: | ----: | ------: | --------------- | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_freeCCtx` | `<unknown>` |

##### `HUF_writeCTable_wksp` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `HUF_optimalTableLog` | `<unknown>` |

##### `HIST_count_wksp` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location         |
| -----: | ----: | ------: | ----------------------- | ---------------- |
| 100.0% | 1.0ms |       1 | `HUF_compress_internal` | `huf_compress.c` |

##### `0x7e838` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x81387` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|      % |  Time | Samples | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `HUF_writeCTable_wksp` | `<unknown>` |

##### `0x9d200` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressStream2` | `<unknown>` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                             | Location                               |
| ----: | ------: | ------: | ---------------------------------------------------- | -------------------------------------- |
| 99.8% |   1.68s |   1,688 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c`                    |
| 99.8% |   1.68s |   1,688 | `POOL_thread`                                        | `pool.c`                               |
| 99.8% |   1.68s |   1,688 | `0x8202f`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.8% |   1.68s |   1,688 | `0xebf5b`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.6% |   1.68s |   1,685 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`                      |
| 98.5% |   1.66s |   1,666 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`                      |
| 97.0% |   1.64s |   1,640 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`                           |
| 83.1% |   1.40s |   1,406 | `ZSTD_compressContinue_public`                       | `<unknown>`                            |
| 80.3% |   1.35s |   1,358 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`                           |
| 16.6% | 280.0ms |     280 | `ZSTD_compressEnd_public`                            | `<unknown>`                            |
|  1.0% |  17.0ms |      17 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`                           |
|  0.9% |  16.0ms |      16 | `ZSTD_compressBlock_btultra2`                        | `<unknown>`                            |
|  0.5% |   9.0ms |       9 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`                      |
|  0.5% |   9.0ms |       9 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`                      |
|  0.5% |   8.0ms |       8 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`                      |
|  0.4% |   7.0ms |       7 | `ZSTD_buildBlockEntropyStats`                        | `<unknown>`                            |
|  0.4% |   6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`                           |
|  0.3% |   5.0ms |       5 | `HIST_count_parallel_wksp`                           | `hist.c`                               |
|  0.2% |   4.0ms |       4 | `HUF_optimalTableLog`                                | `<unknown>`                            |
|  0.2% |   4.0ms |       4 | `ZSTD_encodeSequences`                               | `<unknown>`                            |

#### Categories

##### Ours

|     % |   Time | Samples | Function                                             | Location            |
| ----: | -----: | ------: | ---------------------------------------------------- | ------------------- |
| 99.8% |  1.68s |   1,688 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
| 99.8% |  1.68s |   1,688 | `POOL_thread`                                        | `pool.c`            |
| 99.6% |  1.68s |   1,685 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`   |
| 98.5% |  1.66s |   1,666 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
| 97.0% |  1.64s |   1,640 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
| 80.3% |  1.35s |   1,358 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  1.0% | 17.0ms |      17 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`        |
|  0.5% |  9.0ms |       9 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|  0.5% |  9.0ms |       9 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|  0.5% |  8.0ms |       8 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|  0.4% |  6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`        |
|  0.3% |  5.0ms |       5 | `HIST_count_parallel_wksp`                           | `hist.c`            |
|  0.2% |  3.0ms |       3 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`   |
|  0.2% |  3.0ms |       3 | `HUF_compress_internal`                              | `huf_compress.c`    |
|  0.2% |  3.0ms |       3 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`        |
|  0.1% |  2.0ms |       2 | `ZSTD_compressBegin_internal`                        | `zstd_compress.c`   |
|  0.1% |  2.0ms |       2 | `FIO_compressFilename_srcFile`                       | `fileio.c`          |
|  0.1% |  2.0ms |       2 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
|  0.1% |  1.0ms |       1 | `ZSTD_deriveSeqStoreChunk`                           | `zstd_compress.c`   |
|  0.1% |  1.0ms |       1 | `ZSTDMT_freeCCtxPool.part.0`                         | `zstdmt_compress.c` |

##### Native

|     % |    Time | Samples | Function                               | Location                               |
| ----: | ------: | ------: | -------------------------------------- | -------------------------------------- |
| 99.8% |   1.68s |   1,688 | `0x8202f`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.8% |   1.68s |   1,688 | `0xebf5b`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 83.1% |   1.40s |   1,406 | `ZSTD_compressContinue_public`         | `<unknown>`                            |
| 16.6% | 280.0ms |     280 | `ZSTD_compressEnd_public`              | `<unknown>`                            |
|  0.9% |  16.0ms |      16 | `ZSTD_compressBlock_btultra2`          | `<unknown>`                            |
|  0.4% |   7.0ms |       7 | `ZSTD_buildBlockEntropyStats`          | `<unknown>`                            |
|  0.2% |   4.0ms |       4 | `HUF_optimalTableLog`                  | `<unknown>`                            |
|  0.2% |   4.0ms |       4 | `ZSTD_encodeSequences`                 | `<unknown>`                            |
|  0.2% |   3.0ms |       3 | `FIO_compressFilename`                 | `<unknown>`                            |
|  0.2% |   3.0ms |       3 | `main`                                 | `<unknown>`                            |
|  0.2% |   3.0ms |       3 | `0x27743`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.2% |   3.0ms |       3 | `0x27817`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.2% |   3.0ms |       3 | `_start`                               | `<unknown>`                            |
|  0.2% |   3.0ms |       3 | `HUF_compress4X_repeat`                | `<unknown>`                            |
|  0.2% |   3.0ms |       3 | `ZSTD_compressLiterals`                | `<unknown>`                            |
|  0.1% |   2.0ms |       2 | `ZSTD_XXH64_update`                    | `<unknown>`                            |
|  0.1% |   2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `<unknown>`                            |
|  0.1% |   2.0ms |       2 | `ZSTD_seqToCodes`                      | `<unknown>`                            |
|  0.1% |   2.0ms |       2 | `HUF_buildCTable_wksp`                 | `<unknown>`                            |
|  0.1% |   2.0ms |       2 | `HUF_writeCTable_wksp`                 | `<unknown>`                            |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |    Time | Samples | Callee                                 | Location    |
| ----: | ------: | ------: | -------------------------------------- | ----------- |
| 83.3% |   1.40s |   1,406 | `ZSTD_compressContinue_public`         | `<unknown>` |
| 16.6% | 280.0ms |     280 | `ZSTD_compressEnd_public`              | `<unknown>` |
|  0.1% |   2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % |  Time | Samples | Callee                  | Location            |
| -----: | ----: | ------: | ----------------------- | ------------------- |
| 100.0% | 1.68s |   1,688 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee        | Location |
| -----: | ----: | ------: | ------------- | -------- |
| 100.0% | 1.68s |   1,688 | `POOL_thread` | `pool.c` |

##### `0xebf5b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.68s |   1,688 | `0x8202f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                              | Location          |
| ----: | ----: | ------: | ----------------------------------- | ----------------- |
| 98.9% | 1.66s |   1,666 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.5% | 9.0ms |       9 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  0.5% | 8.0ms |       8 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
|  0.1% | 2.0ms |       2 | `ZSTD_XXH64_update`                 | `<unknown>`       |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                                   | Location     |
| ----: | -----: | ------: | ---------------------------------------- | ------------ |
| 97.5% |  1.62s |   1,625 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
|  1.0% | 17.0ms |      17 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c` |
|  1.0% | 16.0ms |      16 | `ZSTD_compressBlock_btultra2`            | `<unknown>`  |
|  0.4% |  6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c` |
|  0.1% |  1.0ms |       1 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |  Time | Samples | Callee                          | Location     |
| ----: | ----: | ------: | ------------------------------- | ------------ |
| 82.7% | 1.35s |   1,357 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_compressContinue_public` (`<unknown>`)

|     % |  Time | Samples | Callee                     | Location          |
| ----: | ----: | ------: | -------------------------- | ----------------- |
| 99.9% | 1.40s |   1,405 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |
|  0.1% | 1.0ms |       1 | `ZSTD_deriveSeqStoreChunk` | `zstd_compress.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|    % |  Time | Samples | Callee                       | Location     |
| ---: | ----: | ------: | ---------------------------- | ------------ |
| 0.2% | 3.0ms |       3 | `ZSTD_insertBt1.constprop.3` | `zstd_opt.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

|      % |    Time | Samples | Callee                     | Location          |
| -----: | ------: | ------: | -------------------------- | ----------------- |
| 100.0% | 280.0ms |     280 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

|     % |   Time | Samples | Callee                    | Location     |
| ----: | -----: | ------: | ------------------------- | ------------ |
| 93.8% | 15.0ms |      15 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |
|  6.3% |  1.0ms |       1 | `ZSTD_updateStats`        | `zstd_opt.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                        | Location    |
| ----: | ----: | ------: | ----------------------------- | ----------- |
| 77.8% | 7.0ms |       7 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |
| 22.2% | 2.0ms |       2 | `HIST_count_parallel_wksp`    | `hist.c`    |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |  Time | Samples | Callee                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 9.0ms |       9 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                  | Location    |
| ----: | ----: | ------: | ----------------------- | ----------- |
| 50.0% | 4.0ms |       4 | `ZSTD_encodeSequences`  | `<unknown>` |
| 37.5% | 3.0ms |       3 | `ZSTD_compressLiterals` | `<unknown>` |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

|     % |  Time | Samples | Callee                          | Location          |
| ----: | ----: | ------: | ------------------------------- | ----------------- |
| 42.9% | 3.0ms |       3 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
| 28.6% | 2.0ms |       2 | `ZSTD_seqToCodes`               | `<unknown>`       |
| 28.6% | 2.0ms |       2 | `HUF_optimalTableLog`           | `<unknown>`       |

##### `HUF_optimalTableLog` (`<unknown>`)

|     % |  Time | Samples | Callee                 | Location    |
| ----: | ----: | ------: | ---------------------- | ----------- |
| 50.0% | 2.0ms |       2 | `HUF_buildCTable_wksp` | `<unknown>` |
| 50.0% | 2.0ms |       2 | `HUF_writeCTable_wksp` | `<unknown>` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|      % |  Time | Samples | Callee                     | Location |
| -----: | ----: | ------: | -------------------------- | -------- |
| 100.0% | 3.0ms |       3 | `HIST_count_parallel_wksp` | `hist.c` |

##### `HUF_compress_internal` (`huf_compress.c`)

|     % |  Time | Samples | Callee                | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 66.7% | 2.0ms |       2 | `HUF_optimalTableLog` | `<unknown>` |
| 33.3% | 1.0ms |       1 | `HIST_count_wksp`     | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

|     % |  Time | Samples | Callee                         | Location    |
| ----: | ----: | ------: | ------------------------------ | ----------- |
| 66.7% | 2.0ms |       2 | `FIO_compressFilename_srcFile` | `fileio.c`  |
| 33.3% | 1.0ms |       1 | `ZSTD_freeCStream`             | `<unknown>` |

##### `main` (`<unknown>`)

|      % |  Time | Samples | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `FIO_compressFilename` | `<unknown>` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 3.0ms |       3 | `main` | `<unknown>` |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 3.0ms |       3 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 3.0ms |       3 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `HUF_compress4X_repeat` (`<unknown>`)

|      % |  Time | Samples | Callee                  | Location         |
| -----: | ----: | ------: | ----------------------- | ---------------- |
| 100.0% | 3.0ms |       3 | `HUF_compress_internal` | `huf_compress.c` |

##### `ZSTD_compressLiterals` (`<unknown>`)

|      % |  Time | Samples | Callee                  | Location    |
| -----: | ----: | ------: | ----------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `HUF_compress4X_repeat` | `<unknown>` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|     % |  Time | Samples | Callee    | Location                               |
| ----: | ----: | ------: | --------- | -------------------------------------- |
| 50.0% | 1.0ms |       1 | `0x9e658` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 50.0% | 1.0ms |       1 | `0x9e654` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Time | Samples | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTD_compressBegin_advanced_internal` (`<unknown>`)

|      % |  Time | Samples | Callee                        | Location          |
| -----: | ----: | ------: | ----------------------------- | ----------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `HUF_writeCTable_wksp` (`<unknown>`)

|     % |  Time | Samples | Callee                             | Location         |
| ----: | ----: | ------: | ---------------------------------- | ---------------- |
| 50.0% | 1.0ms |       1 | `FSE_compress_usingCTable_generic` | `fse_compress.c` |

##### `ZSTDMT_freeCCtxPool.part.0` (`zstdmt_compress.c`)

|      % |  Time | Samples | Callee          | Location    |
| -----: | ----: | ------: | --------------- | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_freeCCtx` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b`

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                            |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 65.9% |   1.11s |   1,114 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public`                                                                                                                   |
| 13.8% | 234.0ms |     234 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public`                                                                                                                                                     |
| 13.8% | 233.0ms |     233 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public`                                                                                                                        |
|  2.4% |  41.0ms |      41 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public`                                                                                                                                                          |
|  0.8% |  14.0ms |      14 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public`                                                                                                                                      |
|  0.5% |   8.0ms |       8 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public`                                                                                                                     |
|  0.4% |   7.0ms |       7 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public`                                                                                   |
|  0.4% |   6.0ms |       6 | `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public`                                                                                                                                      |
|  0.2% |   4.0ms |       4 | `ZSTD_encodeSequences` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public`                                                                                                                                                        |
|  0.2% |   3.0ms |       3 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public`                                                                                                                                           |
|  0.1% |   2.0ms |       2 | `ZSTD_XXH64_update` ← `ZSTD_compress_frameChunk` (`zstd_compress.c`) ← `ZSTD_compressContinue_public`                                                                                                                                                                                                 |
|  0.1% |   2.0ms |       2 | `ZSTD_seqToCodes` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public`                                                                           |
|  0.1% |   2.0ms |       2 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` |
|  0.1% |   2.0ms |       2 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public`                                                                                       |
|  0.1% |   2.0ms |       2 | `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public`                                                                                    |
|  0.1% |   1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public`                                                                                                                                                                                 |
|  0.1% |   1.0ms |       1 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public`                                                                                                                                               |
|  0.1% |   1.0ms |       1 | `0x9e658` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `ZSTD_compressBegin_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_advanced_internal`                                                                                                                                                       |
|  0.1% |   1.0ms |       1 | `0x9e654` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `ZSTD_compressBegin_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_advanced_internal`                                                                                                                                                       |
|  0.1% |   1.0ms |       1 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public`      |
